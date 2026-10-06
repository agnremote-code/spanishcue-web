"""Real encoded fixtures exercise corruption, silence and mapping failures."""
import copy
import importlib.util
import json
import pathlib
import subprocess
import tempfile
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('validator', ROOT / 'scripts/validate-autoestudio-audio.py')
v = importlib.util.module_from_spec(spec)
spec.loader.exec_module(v)


class AudioValidationTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = pathlib.Path(self.temp.name)
        self.directory = self.root / 'audio/autoestudio'
        self.directory.mkdir(parents=True)
        self.file = self.directory / 'test.mp3'
        subprocess.run(['ffmpeg', '-v', 'error', '-f', 'lavfi', '-i', 'sine=frequency=440:duration=0.15',
                        '-ar', '24000', '-codec:a', 'libmp3lame', str(self.file)], check=True)
        self.rows = [dict(key='test', text='Hola', voice='es-MX-f')]
        self.manifest = dict(clips={'test': '/audio/autoestudio/test.mp3'})
        self.provenance = dict(voices=[dict(ShortName='es-MX-DaliaNeural', Locale='es-MX', Gender='Female')],
            clips={'test': dict(text='Hola', requestedVoice='es-MX-f', providerVoice='es-MX-DaliaNeural', **v.measure(self.file))})

    def validate(self):
        return v.validate(self.root, self.rows, self.manifest, self.provenance, workers=1)

    def test_valid_decoded_asset(self):
        self.assertEqual(self.validate(), 1)

    def test_empty_manifest(self):
        self.manifest['clips'] = {}
        with self.assertRaisesRegex(ValueError, 'Empty'):
            self.validate()

    def test_missing_required_mapping(self):
        self.rows.append(dict(key='missing', text='Adiós'))
        with self.assertRaisesRegex(ValueError, 'keys differ'):
            self.validate()

    def test_missing_file(self):
        self.file.unlink()
        with self.assertRaisesRegex(ValueError, 'Missing or orphan'):
            self.validate()

    def test_orphan_file(self):
        (self.directory / 'orphan.mp3').write_bytes(self.file.read_bytes())
        with self.assertRaisesRegex(ValueError, 'Missing or orphan'):
            self.validate()

    def test_unmapped_manifest_key(self):
        self.manifest['clips']['orphan'] = '/audio/autoestudio/orphan.mp3'
        with self.assertRaisesRegex(ValueError, 'keys differ'):
            self.validate()

    def test_wrong_mapping(self):
        self.manifest['clips']['test'] = '/audio/elsewhere.mp3'
        with self.assertRaisesRegex(ValueError, 'Invalid mapping'):
            self.validate()

    def test_empty_file(self):
        self.file.write_bytes(b'')
        with self.assertRaisesRegex(ValueError, 'Empty MP3'):
            self.validate()

    def test_corrupt_file(self):
        self.file.write_bytes(b'not an MP3')
        with self.assertRaises((ValueError, subprocess.CalledProcessError)):
            self.validate()

    def test_silence(self):
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'lavfi', '-i', 'anullsrc=r=24000:cl=mono',
                        '-t', '0.15', '-codec:a', 'libmp3lame', str(self.file)], check=True)
        with self.assertRaisesRegex(ValueError, 'Silent MP3'):
            self.validate()

    def test_codec(self):
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'lavfi', '-i', 'sine=duration=0.15',
                        '-f', 'wav', str(self.file)], check=True)
        with self.assertRaisesRegex(ValueError, 'duration/codec'):
            self.validate()

    def test_stale_hash_duration_and_metrics(self):
        original = copy.deepcopy(self.provenance)
        for field in ['sha256', 'durationSeconds', 'sampleRate', 'peakPCM', 'rmsPCM']:
            self.provenance = copy.deepcopy(original)
            self.provenance['clips']['test'][field] = 0
            with self.assertRaisesRegex(ValueError, 'mismatch'):
                self.validate()

    def test_stale_input(self):
        self.rows[0]['text'] = 'Texto cambiado'
        with self.assertRaisesRegex(ValueError, 'Stale generation input'):
            self.validate()

    def test_us_fallback_forbidden(self):
        self.provenance['voices'].append(dict(ShortName='es-US-PalomaNeural', Locale='es-US', Gender='Female'))
        self.provenance['clips']['test']['providerVoice'] = 'es-US-PalomaNeural'
        with self.assertRaisesRegex(ValueError, 'Forbidden US fallback'):
            self.validate()


if __name__ == '__main__':
    unittest.main()

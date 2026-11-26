// Minimal ZIP writer and verifier (deflate, no dependencies) for the TPT packs.
import { crc32, deflateRawSync, inflateRawSync } from 'node:zlib';

const u16 = (n) => { const b = Buffer.alloc(2); b.writeUInt16LE(n); return b; };
const u32 = (n) => { const b = Buffer.alloc(4); b.writeUInt32LE(n >>> 0); return b; };

/** entries: [{ name, data: Buffer }] → Buffer of a valid .zip */
export function createZip(entries) {
  const locals = [];
  const centrals = [];
  let offset = 0;
  const time = 0, date = ((2026 - 1980) << 9) | (1 << 5) | 1; // fixed timestamp: reproducible zips
  for (const { name, data } of entries) {
    const nameBuf = Buffer.from(name, 'utf8');
    const packed = deflateRawSync(data, { level: 9 });
    const crc = crc32(data);
    const head = Buffer.concat([u32(0x04034b50), u16(20), u16(0x0800), u16(8), u16(time), u16(date), u32(crc), u32(packed.length), u32(data.length), u16(nameBuf.length), u16(0), nameBuf]);
    locals.push(head, packed);
    centrals.push(Buffer.concat([u32(0x02014b50), u16(20), u16(20), u16(0x0800), u16(8), u16(time), u16(date), u32(crc), u32(packed.length), u32(data.length), u16(nameBuf.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset), nameBuf]));
    offset += head.length + packed.length;
  }
  const central = Buffer.concat(centrals);
  const end = Buffer.concat([u32(0x06054b50), u16(0), u16(0), u16(entries.length), u16(entries.length), u32(central.length), u32(offset), u16(0)]);
  return Buffer.concat([...locals, central, end]);
}

/** Opens a zip, inflates every entry and checks its CRC. Returns the entry names. */
export function verifyZip(buf) {
  const endAt = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  if (endAt < 0) throw new Error('no end of central directory');
  const count = buf.readUInt16LE(endAt + 10);
  let p = buf.readUInt32LE(endAt + 16);
  const names = [];
  for (let i = 0; i < count; i++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) throw new Error('bad central directory entry');
    const method = buf.readUInt16LE(p + 10), crc = buf.readUInt32LE(p + 16), packedSize = buf.readUInt32LE(p + 20), size = buf.readUInt32LE(p + 24);
    const nameLen = buf.readUInt16LE(p + 28), extra = buf.readUInt16LE(p + 30), comment = buf.readUInt16LE(p + 32), local = buf.readUInt32LE(p + 42);
    const name = buf.subarray(p + 46, p + 46 + nameLen).toString('utf8');
    const dataAt = local + 30 + buf.readUInt16LE(local + 26) + buf.readUInt16LE(local + 28);
    const raw = buf.subarray(dataAt, dataAt + packedSize);
    const data = method === 8 ? inflateRawSync(raw) : raw;
    if (data.length !== size || crc32(data) !== crc) throw new Error(`corrupt entry ${name}`);
    names.push(name);
    p += 46 + nameLen + extra + comment;
  }
  return names;
}

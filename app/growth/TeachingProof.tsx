import Link from 'next/link';
import { teachingProof as proof } from './teaching-proof';
import grammar from './grammar.module.css';
export default function TeachingProof({testimonials = false}: {testimonials?:boolean}) {
  return <section className={grammar.proof} aria-labelledby='teaching-proof-title'>
    <h2 id='teaching-proof-title'>Built from real online Spanish teaching.</h2>
    <p>The teaching practice behind SpanishCue has delivered {proof.lessonClaim} Spanish lessons on Preply. The materials bring that practical focus into lessons other teachers can open, adapt and teach.</p>
    <div className={grammar.proofMetrics}><div><strong>{proof.lessonClaim}</strong><span>lessons in the teaching practice</span></div><div><strong>{proof.rating}/5</strong><span>from {proof.reviewCount} public Preply reviews</span></div><div><strong>Teacher-led</strong><span>designed for real decisions and feedback</span></div></div>
    {testimonials && <><h3>Student feedback from the teaching practice behind SpanishCue</h3><p>These excerpts describe lessons with the teacher behind SpanishCue. They are not reviews of the SpanishCue platform.</p><div className={grammar.quotes}>{proof.reviews.map(review => <figure key={review.student} className={grammar.quote}><blockquote>“{review.quote}”</blockquote><figcaption>{review.student} · Student review on Preply<br/>{review.date} · Excerpt</figcaption></figure>)}</div></>}
    <p className={grammar.source}>Source: <a href={proof.source} rel='noreferrer'>public teaching profile on Preply</a> · Checked {proof.checkedLabel}. Rating and review count refer to that profile on that date. {testimonials ? 'Professional Tutor and Super Tutor status were also visible on that date.' : <Link href='/about'>Read about our teaching approach →</Link>}</p>
  </section>;
}

import Image from 'next/image';
import Link from 'next/link';
import { grammarLevels, grammarLessonCards, GRAMMAR_HUB_PATH, type GrammarActivity } from './grammar';
import { grammarTopicPages } from './grammar-topics';
import { type LessonCardData } from './lessons';
import styles from './growth.module.css';
import grammar from './grammar.module.css';

export function GrammarHero({kicker, title, intro, previewId, primaryHref = '#activities', primaryLabel = 'Use a free activity'}: {kicker:string;title:string;intro:string;previewId:number;primaryHref?:string;primaryLabel?:string}) {
  const preview = grammarLessonCards([previewId])[0];
  return <section className={grammar.hero}>
    <div className={grammar.heroCopy}>
      <p className={styles.eyebrow}>{kicker}</p><h1 className={styles.title}>{title}</h1><p className={styles.lead}>{intro}</p>
      <div className={styles.heroActions}><Link className={styles.primaryButton} href={primaryHref}>{primaryLabel}</Link><Link className={styles.secondaryButton} href='/la-fabrica-de-los-nombres'>Try a free grammar lesson</Link></div>
      <p className={styles.footnote}>For teachers and online tutors of adults · Ready for screen sharing</p>
    </div>
    {preview && <figure className={grammar.preview}>
      <Image src={preview.image} alt={`${preview.title} classroom preview`} width={720} height={450} sizes='(max-width: 760px) 92vw, 440px' priority />
      <figcaption><small>{preview.level} · {preview.free ? 'FREE CLASSROOM' : 'PRO CLASSROOM PREVIEW'}</small><Link href={preview.href}>{preview.title} →</Link><span>Reading · Listening · Speaking · Writing</span></figcaption>
    </figure>}
  </section>;
}
export function GrammarLevelNav({current}: {current?:string}) {
  return <nav className={grammar.levelNav} aria-label='Spanish grammar by CEFR level'>
    {grammarLevels.map(level => <Link key={level.code} href={level.path} aria-current={current === level.slug ? 'page' : undefined}><b>{level.code}</b><span>Teaching activities</span></Link>)}
    <Link href={`${GRAMMAR_HUB_PATH}#c2`}><b>C2</b><span>Advanced reference</span></Link>
  </nav>;
}
export function GrammarActivities({activities}: {activities:GrammarActivity[]}) {
  return <div className={grammar.activityGrid}>{activities.map(activity => <article className={grammar.activity} key={activity.name}>
    <div className={grammar.activityHeader}><div><h3>{activity.name}</h3><small>{activity.minutes} minutes · {activity.outcome}</small></div></div>
    <div className={grammar.activityBody}><ol>{activity.steps.map(step => <li key={step}>{step}</li>)}</ol><div>
      {activity.prompts.map(prompt => <p className={grammar.prompt} lang='es' key={prompt}>{prompt}</p>)}
      <p className={grammar.model}><strong>Possible model: </strong>{activity.model}</p>
      <p className={grammar.feedback}><strong>Feedback that teaches: </strong>{activity.correction}</p>
    </div></div><p className={grammar.teacherTip}><strong>Classroom adaptation: </strong>{activity.adaptation}</p>
  </article>)}</div>;
}
export function GrammarLessonList({lessons}: {lessons:LessonCardData[]}) {
  return <ul className={grammar.inventoryList}>{lessons.map(lesson => <li key={lesson.id}><Link href={lesson.href}>{lesson.title} →</Link><small>{lesson.free ? 'FREE' : 'PRO'} · {lesson.duration} · Classroom level {lesson.level.split(/[–—-]/)[0]}</small></li>)}</ul>;
}
export function GrammarTopicLinks({slugs}: {slugs?:string[]}) {
  const topics = slugs ? grammarTopicPages.filter(topic => slugs.includes(topic.slug)) : grammarTopicPages;
  return <div className={styles.cardGrid}>{topics.map(topic => <Link className={styles.levelCard} key={topic.path} href={topic.path}><em>{topic.levels}</em><b>{topic.h1}</b><span>{topic.activities.length} ready-to-use tasks, Spanish prompts and correction notes.</span></Link>)}</div>;
}

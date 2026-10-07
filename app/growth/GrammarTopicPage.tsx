import Link from 'next/link';
import type { TeachingGuide } from '../teaching-guides';
import { Breadcrumbs, CtaBand, GrowthFooter, GrowthTopbar, JsonLd, LessonGrid, Section } from './components';
import { GrammarActivities, GrammarHero, GrammarTopicLinks } from './GrammarComponents';
import { GRAMMAR_HUB_PATH, grammarLevels, grammarLessonCards } from './grammar';
import type { GrammarTopicPage as Topic } from './grammar-topics';
import { webPageSchema } from './schema';
import styles from './growth.module.css';
import grammar from './grammar.module.css';
export default function GrammarTopicPage({topic, guide}: {topic:Topic;guide?:TeachingGuide}) {
  return <><main className={styles.page}><div className={styles.shell}>
    <JsonLd data={webPageSchema({pathname:topic.path,name:topic.title,description:topic.description,about:[topic.h1],educationalLevel:topic.levels})}/>
    <GrowthTopbar current={GRAMMAR_HUB_PATH}/><Breadcrumbs items={[{name:'SPANISHCUE',href:'/'},{name:'Grammar lessons',href:GRAMMAR_HUB_PATH},{name:topic.h1,href:topic.path}]}/>
    <GrammarHero kicker={`Grammar activity kit · ${topic.levels}`} title={topic.h1} intro={topic.introduction} previewId={topic.lessonIds[0]}/>
    <div className={grammar.statRow}><span><strong>{topic.activities.length} free activities</strong> on this page</span><span>One-to-one or pairs</span><span>Teacher notes and possible models</span></div>
    <Section title='Before you start' intro={topic.prerequisites}/>
    <Section id='activities' title='Ready-to-use classroom activities' intro='Use one task today or build a sequence. Keep the communicative goal visible, then use the feedback to help the learner try again.'><GrammarActivities activities={topic.activities}/></Section>
    <Section title='Common difficulties to listen for'><div className={styles.panel}><ul>{topic.pitfalls.map(pitfall=><li key={pitfall}>{pitfall}</li>)}</ul></div></Section>
    <Section id='lessons' title='Open the matching SpanishCue classrooms' intro='The activities above are free. Each card below shows access and the classroom’s starting level; PRO cards open a public preview before access is required.'><LessonGrid lessons={grammarLessonCards(topic.lessonIds)}/></Section>
    {guide && <Section title='Teaching principles behind the activities'><div className={styles.faq}>{guide.sections.map(section=><details key={section.heading}><summary>{section.heading}</summary>{section.paragraphs?.map(p=><p key={p}>{p}</p>)}{section.bullets?.length ? <ul>{section.bullets.map(b=><li key={b}>{b}</li>)}</ul>:null}</details>)}</div></Section>}
    <Section title='Plan the next lesson'><nav className={grammar.contextLinks} aria-label='Related grammar levels'>{grammarLevels.filter(level=>topic.levelSlugs.includes(level.slug)).map(level=><Link key={level.code} href={level.path}>{level.code} grammar activities</Link>)}<Link href='/spanish-conversation-activities'>Conversation by level</Link><Link href='/about'>Our teaching methodology</Link></nav><GrammarTopicLinks slugs={['ser-estar','past','subjunctive','por-para'].filter(slug=>slug!==topic.slug)}/></Section>
    <CtaBand title='Take the task into a complete lesson.' copy='Try the free A1 nouns classroom to explore the format. Choose a focused PRO grammar classroom when it fits your learner’s next step.' primary={{href:'/la-fabrica-de-los-nombres',label:'Try the free grammar classroom'}} secondary={{href:'/pricing',label:'Compare Free and PRO'}}/>
  </div></main><GrowthFooter/></>;
}

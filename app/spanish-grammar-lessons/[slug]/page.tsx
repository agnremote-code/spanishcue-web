import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs, CtaBand, GrowthFooter, GrowthTopbar, JsonLd, LessonGrid, Section } from '../../growth/components';
import { GrammarActivities, GrammarHero, GrammarLessonList, GrammarLevelNav, GrammarTopicLinks } from '../../growth/GrammarComponents';
import GrammarTopicPage from '../../growth/GrammarTopicPage';
import { grammarLevelBySlug, grammarLevels, grammarLessonsAtLevel, GRAMMAR_HUB_PATH } from '../../growth/grammar';
import { grammarTopicByPath } from '../../growth/grammar-topics';
import { grammarMetadata } from '../../growth/grammar-metadata';
import { webPageSchema } from '../../growth/schema';
import styles from '../../growth/growth.module.css';
import grammar from '../../growth/grammar.module.css';
type Props = {params:Promise<{slug:string}>};
export function generateStaticParams() {return [...grammarLevels.map(level=>({slug:level.slug})),{slug:'por-vs-para-activities'}];}
export async function generateMetadata({params}:Props) {
  const {slug}=await params; const level=grammarLevelBySlug.get(slug); const topic=grammarTopicByPath.get(`${GRAMMAR_HUB_PATH}/${slug}`);
  const page=level ?? topic; return page ? grammarMetadata(page.path,page.title,page.description) : {};
}
export default async function GrammarLevelPage({params}:Props) {
  const {slug}=await params; const topic=grammarTopicByPath.get(`${GRAMMAR_HUB_PATH}/${slug}`);
  if(topic)return <GrammarTopicPage topic={topic}/>;
  const level=grammarLevelBySlug.get(slug);if(!level)notFound();
  const lessons=grammarLessonsAtLevel(level.code);
  return <><main className={styles.page}><div className={styles.shell}>
    <JsonLd data={webPageSchema({pathname:level.path,name:level.title,description:level.description,about:level.structures,educationalLevel:level.code})}/>
    <GrowthTopbar current={GRAMMAR_HUB_PATH}/><Breadcrumbs items={[{name:'SPANISHCUE',href:'/'},{name:'Grammar lessons',href:GRAMMAR_HUB_PATH},{name:`${level.code} grammar`,href:level.path}]}/>
    <GrammarHero kicker={`${level.code} · Grammar for teachers of adults`} title={`${level.code} Spanish grammar activities: ${level.focus}`} intro={level.intro} previewId={lessons[0].id}/>
    <GrammarLevelNav current={level.slug}/>
    <Section title='Choose a structure and a communicative outcome'><div className={styles.twoCol}><article className={styles.panel}><h3>Grammar to focus on</h3><ul>{level.structures.map(item=><li key={item}>{item}</li>)}</ul></article><article className={styles.panel}><h3>What the learner can practise</h3><ul>{level.outcomes.map(item=><li key={item}>{item}</li>)}</ul></article></div></Section>
    <Section id='activities' title={`Free ${level.code} grammar activities`} intro='These teacher-led tasks are ready to use from this page. The models show one possible response; the learner’s own meaning guides the feedback.'><GrammarActivities activities={level.activities}/></Section>
    <Section title='Build a lesson around the task'><div className={styles.twoCol}><article className={styles.panel}><h3>A practical teaching sequence</h3><ol>{level.sequence.map(item=><li key={item}>{item}</li>)}</ol></article><article className={styles.panel}><h3>Common difficulties</h3><ul>{level.pitfalls.map(item=><li key={item}>{item}</li>)}</ul></article></div></Section>
    <Section id='classrooms' title={`${lessons.length} real ${level.code} grammar classrooms`} intro={level.crossSkill}><LessonGrid lessons={lessons.slice(0,4)} />{lessons.length>4 && <details className={grammar.inventory}><summary>See all {lessons.length} {level.code} grammar classrooms</summary><GrammarLessonList lessons={lessons}/></details>}<p className={styles.footnote}>Classroom levels describe the focused core lesson. Reference material may include extensions. The free classrooms are A1; the teaching activities on this page are free at {level.code}.</p></Section>
    <Section title='Go deeper into a grammar focus'><GrammarTopicLinks slugs={level.topicSlugs}/></Section>
    <nav className={grammar.contextLinks} aria-label='Continue teaching'><Link href={`/spanish-conversation-activities/${level.slug}`}>{level.code} conversation activities</Link><Link href='/resources'>Listening and other lesson resources</Link><Link href='/guides/how-to-teach-spanish-grammar-communicatively'>Grammar teaching guide</Link><Link href='/about'>Our methodology</Link><Link href={GRAMMAR_HUB_PATH}>All grammar levels</Link></nav>
    <CtaBand title='See how a complete classroom works.' copy='Explore the free A1 nouns lesson for the teaching format, then choose a classroom that matches your learner’s next goal.' primary={{href:'/la-fabrica-de-los-nombres',label:'Explore the free classroom'}} secondary={{href:'/pricing',label:'See Free and PRO'}}/>
  </div></main><GrowthFooter/></>;
}

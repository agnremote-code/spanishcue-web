import type { ReportContext } from './contracts';
const attr=(element:Element|null,name:string)=>element?.getAttribute(name)?.slice(0,160)||null;
/** Observed IDs are context only. The API validates identity, lesson, level and route. */
export function contextFromElement(element: Element | null): ReportContext {
  const section=element?.closest('[data-report-section], [data-section-id]')||element?.closest('section')||null;
  const activity=element?.closest('[data-report-activity], [data-activity-id]')||null;
  const question=element?.closest('[data-question-id]')||null;
  const block=element?.closest('article, section')||null;
  const level=element?.closest('[data-report-level]')||null;
  const heading=block?.querySelector('h2, h3, summary');
  return {
    sectionId:attr(section,'data-report-section')||attr(section,'data-section-id')||section?.id||null,
    activityId:attr(activity,'data-report-activity')||attr(activity,'data-activity-id'),
    questionId:attr(question,'data-question-id'),
    componentId:attr(element?.closest('[data-component-id]')||null,'data-component-id')||block?.id?.slice(0,160)||null,
    level:attr(level,'data-report-level'),
    locationLabel:heading?.textContent?.trim().replace(/\s+/g,' ').slice(0,180)||null,
  };
}
export function visibleReportElement(): Element | null {
  const candidates=[...document.querySelectorAll('[data-report-activity], [data-report-section], main article, main section, .viewer-body section')];
  const visible=candidates.filter(el=>{const r=el.getBoundingClientRect();return r.height>0&&r.top<window.innerHeight*.75&&r.bottom>100&&!el.closest('[data-report-ui]')});
  return visible.find(el=>el.hasAttribute('data-report-activity'))||visible.find(el=>el.hasAttribute('data-report-section'))||visible[0]||null;
}

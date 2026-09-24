import type { GuideOfficialSource } from "./types";

const source = (label: string, url: string): GuideOfficialSource => ({ label, url });

export const PREPLY_SOURCES = {
  commission: source("Preply Help Center — Commission model","https://help.preply.com/en/articles/4171383-preply-commission-model"),
  trial: source("Preply Help Center — Trial lessons","https://help.preply.com/en/articles/4179487-how-to-book-a-trial-lesson"),
  superTutor: source("Preply Help Center — Super Tutor program","https://help.preply.com/en/articles/6359318-the-super-tutor-program"),
  superTutorMetrics: source("Preply Help Center — Super Tutor metrics and criteria","https://help.preply.com/en/articles/14880665-how-super-tutor-metrics-and-criteria-work"),
  profile: source("Preply Help Center — Profile headline and description guidelines","https://help.preply.com/en/articles/4175164-4-profile-headline-and-description-guidelines"),
  profileScore: source("Preply Help Center — Profile score","https://help.preply.com/en/articles/7863157-what-is-profile-score"),
  video: source("Preply Help Center — Video introduction guidelines","https://help.preply.com/en/articles/4171392-5-video-introduction-guidelines"),
  price: source("Preply Help Center — How to choose the right price","https://help.preply.com/en/articles/11833566-7-how-to-choose-the-right-price"),
  availability: source("Preply Help Center — Setting up availability","https://help.preply.com/en/articles/4175356-6-setting-up-your-availability"),
  discovery: source("Preply Help Center — How students find tutors","https://help.preply.com/en/articles/4178879-how-can-students-find-me"),
} as const;

export const VERBLING_SOURCES = {
  teach: source("Verbling — Teach languages online","https://www.verbling.com/teach"),
  overview: source("Verbling Support — New teacher overview","https://support.verbling.com/hc/en-us/articles/360007886158-NEW-TEACHERS-How-does-Verbling-work-and-what-should-I-know"),
  applicationVideo: source("Verbling Support — Teacher application video","https://support.verbling.com/hc/en-us/articles/360007839257-How-do-I-record-my-teacher-application-video"),
} as const;

export const SUPERPROF_SOURCES = {
  tutor: source("Superprof — Become a tutor","https://www.superprof.com/tutor/"),
  payment: source("Superprof Help — Tutor payment","https://www.superprof.com/help/tutors/tutor-payment/how-to-get-paid/68/"),
} as const;

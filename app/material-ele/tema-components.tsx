import Link from "next/link";
import { Section } from "../growth/components";
import { MATERIAL_ELE_PATH, eleLevels } from "./data";
import { temaGroups, temaParents, type TemaGroupId, type TemaPage } from "./temas";
import styles from "../growth/growth.module.css";

/** Cards for the four topic groups, shown on the hub and at the end of every topic page. */
export function TemaGroupCards({ current }: { current?: TemaGroupId }) {
  return (
    <div className={styles.cardGrid}>
      {temaGroups.map((group) => (
        <Link className={styles.levelCard} key={group.id} href={group.path} aria-current={group.id === current ? "page" : undefined}>
          <em>{group.label}</em>
          <b>{temaParents(group.id).reduce((total, parent) => total + parent.pages.length, 0)} temas</b>
          <span>{temaParents(group.id).map((parent) => parent.parent).join(" · ")}</span>
        </Link>
      ))}
    </div>
  );
}

export function TemaCards({ pages }: { pages: TemaPage[] }) {
  return (
    <div className={styles.cardGrid}>
      {pages.map((page) => (
        <Link className={styles.levelCard} key={page.path} href={page.path}>
          <em>{page.levels.length > 1 ? `${page.levels[0]}–${page.levels[page.levels.length - 1]}` : page.levels[0]}</em>
          <b>{page.name}</b>
          <span>{page.lessonIds.length === 1 ? "1 clase interactiva" : `${page.lessonIds.length} clases interactivas`}{page.freeCount ? ` · ${page.freeCount} gratis` : ""}</span>
        </Link>
      ))}
    </div>
  );
}

/** The group index, parent by parent, as teachers browse a grammar or vocabulary table of contents. */
export function TemaIndex({ group }: { group: TemaGroupId }) {
  return (
    <>
      {temaParents(group).map(({ parent, pages }) => (
        <Section key={parent} title={parent} id={parent.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-")}>
          <TemaCards pages={pages} />
        </Section>
      ))}
    </>
  );
}

export function TemaLevelLinks() {
  return (
    <p className={styles.sectionIntro}>
      Material por nivel:{" "}
      {eleLevels.map((level, index) => (
        <span key={level.slug}>{index ? " · " : ""}<Link href={level.path}>{level.code}</Link></span>
      ))}
      {" · "}<Link href={MATERIAL_ELE_PATH}>Todo el material ELE</Link>
    </p>
  );
}

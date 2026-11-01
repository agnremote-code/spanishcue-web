import Link from "next/link";
import { ACTIVIDADES_PATH } from "./actividades";
import { MATERIAL_ELE_PATH, eleLevels } from "./data";
import { INDICE_PATH, indiceCount } from "./indice";
import { temaGroups, temaPages } from "./temas";

/** Server-rendered index of Material ELE on the home page, for visitors without PRO: every topic is one click from the home page,
 * which is how crawlers find the Spanish cluster fastest. Spanish only, because the pages are Spanish. */
export default function MaterialEleHomeLinks() {
  return (
    <section className="mk-section mk-ele" id="material-ele" aria-labelledby="mk-ele-title">
      <div className="mk-section-heading">
        <small>MATERIAL ELE GRATIS PARA PROFESORES</small>
        <h2 id="mk-ele-title">Material ELE por tema y por nivel</h2>
        <p>{temaPages.length} temas de gramática, vocabulario, funciones y cultura, con las clases que enseñan cada uno. <Link href={INDICE_PATH}>Índice completo ({indiceCount} páginas)</Link></p>
      </div>
      <div className="mk-ele-grid">
        {temaGroups.map((group) => (
          <nav key={group.id} aria-labelledby={`mk-ele-${group.id}`}>
            <h3 id={`mk-ele-${group.id}`}><Link href={group.path}>{group.label}</Link></h3>
            <ul>
              {temaPages.filter((page) => page.group === group.id).map((page) => <li key={page.path}><Link href={page.path}>{page.name}</Link></li>)}
            </ul>
          </nav>
        ))}
      </div>
      <p className="mk-ele-levels">
        Por nivel: {eleLevels.map((level, index) => <span key={level.slug}>{index ? " · " : ""}<Link href={level.path}>{level.code}</Link></span>)}
        {" · "}<Link href={ACTIVIDADES_PATH}>Banco de actividades</Link>{" · "}<Link href={MATERIAL_ELE_PATH}>Todo el material ELE</Link>
      </p>
    </section>
  );
}

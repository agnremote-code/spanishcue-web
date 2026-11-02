import type {Metadata} from "next";
import type {ReactNode} from "react";

export const metadata:Metadata={
  title:"El día que todo salió mal · Clase de conversación A0–C2 | SPANISHCUE",
  description:"Un día en el que todo sale mal, contado hora por hora: tus pequeños desastres, tus crisis de verdad y lo que aprendes de ellos. Seis categorías y treinta preguntas por nivel, de A0 bilingüe a C2.",
  alternates:{canonical:"https://spanishcue.com/el-dia-que-todo-salio-mal"},
  openGraph:{images:["/conversation-classics/el-dia-que-todo-salio-mal.webp"]},
};

export default function Layout({children}:{children:ReactNode}){return children;}

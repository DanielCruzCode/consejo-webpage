import { ArrowDown, ArrowUp } from "../icons";
import { useState } from "react";
import "./proposal.css";

export function Proposal() {
  const [show, setShow] = useState<boolean>(false);

  function handleToggleShow() {
    setShow((prev) => !prev);
  }

  return (
    <section className={"proposal"}>
      <button className={"proposal__btn"} onClick={handleToggleShow}>
        Propuestas {show ? <ArrowUp /> : <ArrowDown />}
      </button>
      <article
        className={`proposal__content ${show ? "" : "proposal__content--open"}`}
      >
        <p>
          Establecer mecanismos de articulación con los representantes
          estudiantiles a nivel nacional y territorial en torno a los procesos
          de investigación, extensión, currículo, bienestar universitario y
          situaciones académicas
        </p>
        <p>
          Promover el acceso equitativo a la educación, creando un entorno
          inclusivo y de calidad que valore la diversidad cultural, étnica, de
          género y socioeconómica, de todos los estudiantes a través de mesas de
          trabajo que generen espacios participativos y representativos.
        </p>
        <p>
          Fortalecer los procesos de innovación contribuyendo con iniciativas en
          todo el territorio nacional, con el fin de que la comunidad
          estudiantil exprese el potencial de sus conocimientos a través de la
          creatividad para solucionar situaciones académico- administrativa
        </p>
        <p>
          Proponer estrategias para fortalecer la relación de la ESAP con la
          comunidad territorial, asegurando que los programas académicos estén
          alineados con las necesidades, centros de desarrollo y demandas de los
          territorios.
        </p>
        <p>
          Diseñar estrategias que permitan la participación estudiantil en las
          distintas situaciones académicas con el fin de velar por los derechos
          e intereses de la comunidad Esapista.
        </p>
        <p>
          Realizar seguimiento a los compromisos institucionales con respecto a
          la infraestructura física y tecnológica que permita el bienestar de la
          comunidad Esapista.
        </p>
      </article>
    </section>
  );
}

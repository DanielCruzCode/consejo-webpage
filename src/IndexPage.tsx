import { Header } from "./components/header.tsx";
import "./indexPage.css";
import { Separator } from "./components/separator.tsx";
import { PrincipalAvatar } from "./components/principalAvatar/principalAvatar.tsx";
import Img1 from "./assets/imgs/suplente-academico-nacional.png";
import { Proposal } from "./components/proposal/proposal.tsx";
import { Button } from "./components/button/button.tsx";
import { ElectoralCard } from "./components/electoralCard/electoralCard.tsx";

function IndexPage() {
  return (
    <main className={"main-container"}>
      <Header />
      <h3 className={"subtitle text-center"}>
        Consejo <span className={"text-red"}>Académico Nacional</span>{" "}
        Fortalecimiento ESAP
      </h3>
      <Separator />
      <PrincipalAvatar
        title={"Fórmula Titular"}
        name={"Daniela Figueredo"}
        study={"V Semestre ATP"}
        scope={"T. Boyacá – Casanare"}
        city={"Cetap - Tunja"}
        src={Img1}
      />
      <PrincipalAvatar
        title={"Fórmula Suplente"}
        name={"Daniela Figueredo"}
        study={"V Semestre ATP"}
        scope={"T. Boyacá – Casanare"}
        city={"Cetap - Tunja"}
        src={Img1}
        color={"secondary"}
      />
      <Proposal />
      <Button classes={"mx-auto my-2"} />
      <h3 className={"subtitle text-center"}>
        Consejo <span className={"text-red"}>Académico Nacional</span>{" "}
        Fortalecimiento ESAP
      </h3>
      <Separator />
      <section className="electoral-grid my-2">
        <ElectoralCard
          namePrincipal="Nombre 1"
          nameSecondary="Nombre 2"
          srcPrincipal={Img1}
          srcSecondary={Img1}
          title="Title 1"
        />
        <ElectoralCard
          namePrincipal="Nombre 1"
          nameSecondary="Nombre 2"
          srcPrincipal={Img1}
          srcSecondary={Img1}
          title="Title 1"
        />
        <ElectoralCard
          namePrincipal="Nombre 1"
          nameSecondary="Nombre 2"
          srcPrincipal={Img1}
          srcSecondary={Img1}
          title="Title 1"
        />
        <ElectoralCard
          namePrincipal="Nombre 1"
          nameSecondary="Nombre 2"
          srcPrincipal={Img1}
          srcSecondary={Img1}
          title="Title 1"
        />
      </section>
      <Button classes={"mx-auto my-2"} />
    </main>
  );
}

export default IndexPage;

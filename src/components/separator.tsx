import { BunIcon } from "./icons";

export function Separator() {
  return (
    <article className={"separator"}>
      <div className="separator__line"></div>
      <BunIcon />
      <div className="separator__line"></div>
    </article>
  );
}

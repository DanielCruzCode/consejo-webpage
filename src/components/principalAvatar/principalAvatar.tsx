import "./principalAvatar.css";

interface Props {
  title: string;
  name: string;
  study: string;
  scope: string;
  city: string;
  src: string;
  color?: "primary" | "secondary";
}

export function PrincipalAvatar({
  title,
  name,
  study,
  scope,
  city,
  src,
  color = "primary",
}: Props) {
  return (
    <article className={"principal-avatar"}>
      <div className={"principal-avatar__img"}>
        <div></div>
        <div className={"img__circle"}></div>
        <img className={"img"} src={src} alt={name} width={200} height={200} />
      </div>
      <div
        className={`principal-avatar__content ${color === "secondary" ? "principal-avatar__content--secondary" : ""}`}
      >
        <article className={"content__wrapper"}>
          <h4 className={"content__title"}>{title}</h4>
          <p className={"content__text"}>{name}</p>
          <p className={"content__text"}>{study}</p>
          <p className={"content__text"}>{scope}</p>
          <p className={"content__text"}>{city}</p>
        </article>
      </div>
    </article>
  );
}

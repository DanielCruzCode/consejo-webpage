interface Prop {
  classes?: string;
}

export function Button({ classes }: Prop) {
  return (
    <button className={`button ${classes ? classes : ""}`}>Conoce más</button>
  );
}

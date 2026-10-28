

type MyButtonProps = {
  label: string;
  onClick?: () => void;
  className: string;
};


export function MyButton(
props: MyButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
    >
      {props.label}
    </button>
  );
}
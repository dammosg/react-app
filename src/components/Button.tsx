interface Props {
  children: string;
  color?: "primary" | "secondary | danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color + " mt-3"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

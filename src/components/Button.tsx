interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger" | "dark";
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;

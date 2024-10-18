import "./button.css";

const Button = ({ title, cName }) => {
  return <button className={`btn-main ${cName}`}>{title}</button>;
};

export default Button;

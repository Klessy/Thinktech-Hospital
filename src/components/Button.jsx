import "./button.css";

const Button = ({ title, cName, id, onClick }) => {
  return (
    <a className={`btn-main ${cName}`} href={id} onClick={onClick}>
      {title}
    </a>
  );
};

export default Button;

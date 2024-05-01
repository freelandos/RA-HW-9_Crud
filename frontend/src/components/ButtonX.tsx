import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonXProps {
  path: string | number;
}

const ButtonX: FC<ButtonXProps> = (props) => {
  const { path } = props; 
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(path)
  };

  return (
    <button onClick={handleBack} className="p-2 hover:text-gray-400">
      <i className="bi bi-x-lg"></i>
    </button>
  );
};

export default ButtonX;

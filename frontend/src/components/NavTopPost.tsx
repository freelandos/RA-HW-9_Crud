import { FC } from "react";
import ButtonX from "./ButtonX";

const NavTopPost: FC = () => {
  return (
    <nav className="bg-gray-50 p-4 border-b-2 flex justify-between">
      <ul className="font-bold flex">
        <li className="mr-6 hover:text-gray-400 p-2 border-r-2">
          <i className="bi bi-pencil-fill mr-1"></i>
          Публикация
        </li>
        <li className="mr-6 hover:text-gray-400 p-2 border-r-2">
          <i className="bi bi-camera mr-1"></i>
          Фото/Видео
        </li>
        <li className="mr-6 hover:text-gray-400 p-2 border-r-2">
          <i className="bi bi-camera-reels-fill mr-1"></i>
          Прямой эфир
        </li>
        <li className="mr-6 hover:text-gray-400 p-2">
          <i className="bi bi-three-dots mr-1"></i>
          Ещё
        </li>
      </ul>
      <div>
        <ButtonX path="/" />
      </div>
    </nav>
  );
};

export default NavTopPost;

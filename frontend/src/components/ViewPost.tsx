import { FC } from "react";
import { IPost } from "../models";
import moment from "moment/min/moment-with-locales";

moment.locale("ru");

interface ViewPostProps {
  post: IPost;
}

const ViewPost: FC<ViewPostProps> = (props) => {
  const { post } = props;
  const { content, created } = post;

  return (
    <div className="p-4 font-bold">
      <div className="flex justify-between p-2">
        <div className="flex">
          <i className="px-4 text-5xl bi bi-person-circle"></i>
          <div className=" flex flex-col justify-start">
            <h3 className="text-blue-500 text-left">Ilnaz Gilyazov</h3>
            <div className="flex">
              <h4 className="text-left text-sm">Основатель группы</h4>
              <p className="px-2">•</p>
              <div className="text-sm font-yeseva font-normal">{moment(created).fromNow()}</div>
            </div>
          </div>
        </div>
        <i className="bi bi-chevron-down text-2xl"></i>
      </div>
      <div className="relative">
        <div className="t text-2xl text-left font-dejavu p-4">{content}</div>
        <div className="absolute left-0 bottom-0 w-full h-px bg-gray-300"></div>
      </div>

      <div className="relative">
        <div className="flex text-sm justify-around m-4">
          <span>
            <i className="bi bi-hand-thumbs-up p-2"></i>
            Нравится
          </span>
          <span>
            <i className="bi bi-chat-left-dots p-2"></i>
            Комментировать
          </span>
        </div>
        <div className="absolute left-0 -bottom-3 w-full h-px bg-gray-300"></div>
      </div>
    </div>
  );
};

export default ViewPost;

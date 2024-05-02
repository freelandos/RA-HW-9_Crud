import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonX from "../components/ButtonX";
import { IPost } from "../models";
import axios from "axios";

interface EditPostPageProps {
  posts: IPost[];
  fetchPosts: () => Promise<void>;
}

const EditPostPage: FC<EditPostPageProps> = (props) => {
  const { id } = useParams<{ id: string }>()
  const { posts, fetchPosts } = props;
  const post = posts.find((o) => o.id === Number(id))

  if (!post) return <div>Пост не найден</div>;

  const navigate = useNavigate()
  const [content, setContent] = useState(post.content);

  const handleEdit = async () => {
    if (!content.trim()) return;

    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/posts/${post.id}`, {...post, content});
      await fetchPosts();
      navigate(-1)
    } catch (error) {
      console.error('Ошибка при редактировании поста:', error);
    }
  }

  return (
    <div className="container mx-auto mt-20 p-4">
      <div className="bg-gray-100 flex justify-between p-4">
        <h2 className="text-2xl font-bold">Редактировать публикацию </h2>
        <ButtonX path={-1} />
      </div>
      <div className="relative flex p-4">
        <i className="px-4 text-5xl bi bi-person-circle"></i>
        <form  className="flex-1">
          <div>
            <textarea
              id="content"
              defaultValue={post.content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full p-4 outline-none focus:outline-none"
              required
            />
          </div>
        </form>
        <div className="absolute left-0 bottom-0 w-full h-px bg-gray-300"></div>
      </div>
      <div className="m-10">
        <div className="flex gap-3 flex-wrap justify-between mx-24">
          <span className="flex items-center w-5/12 rounded-full bg-gray-100 px-5 py-2 font-bold text-left">
            <i className="bi bi-image px-4"></i>
            Фото/видео
          </span>
          <span className="flex items-center w-5/12 rounded-full bg-gray-100 px-5 py-2 font-bold text-left">
            <i className="bi bi-person-hearts px-4"></i>
            Отметить друзей
          </span>
          <span className="flex items-center w-5/12 rounded-full bg-gray-100 px-5 py-2 font-bold text-left">
            <i className="bi bi-emoji-smile px-4"></i>
            Чувства/действия
          </span>
          <span className="flex items-center w-5/12 rounded-full bg-gray-100 px-5 py-2 font-bold text-left">
            <i className="bi bi-geo-alt-fill px-4"></i>
            Отметить посещение
          </span>
          <span className="flex items-center w-5/12 rounded-full bg-gray-100 px-5 py-2 font-bold text-left">
            <i className="bi bi-filetype-gif px-4"></i>
            GIF
          </span>
        </div>
        <div className="absolute left-0 bottom-0 w-full h-px bg-gray-300"></div>
      </div>
      <div>
        <div className="bg-gray-100 p-4 flex justify-end">
          <button
            type="submit"
            onClick={handleEdit}
            className="bg-blue-500 rounded-md text-white py-2 px-4 hover:bg-blue-600"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPostPage;

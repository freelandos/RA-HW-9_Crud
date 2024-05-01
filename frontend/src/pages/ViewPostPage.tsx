import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ViewPost from "../components/ViewPost";
import ButtonX from "../components/ButtonX";
import { MainProps } from "../models";
import axios from "axios";

const ViewPostPage: React.FC<MainProps> = (props) => {
	const { id } = useParams<{ id: string }>();
	const { posts } = props;
	const post = posts.find((o) => o.id === Number(id));

	if (!post) return <div>Пост не найден</div>;

	const navigate = useNavigate();
	const path = `/posts/${id}/edit`;

	const handleDelete = async () => {
		try {
			await axios.delete(`${import.meta.env.VITE_BASE_URL}/posts/${id}`);
			navigate("/");
		} catch (error) {
			console.error("Ошибка при удалении поста:", error);
		}
	};

	return (
		<div className="container mx-auto mt-20 bg-gray-100 p-4">
			<div className="flex ">
				<h2 className="flex-1 text-4xl font-bold mb-5">Просмотр поста</h2>
				<ButtonX path="/" />
			</div>
			<div className="bg-white rounded-md m-4">
				<ViewPost post={post} />
			</div>
			<div className="flex justify-end p-2 m-4 bg-white gap-3">
				<Link to={path}>
					<button className="bg-blue-500 rounded-lg text-white py-2 px-4 hover:bg-blue-600">
						Изменить
					</button>
				</Link>
				<button className="bg-red-500 rounded-lg text-white py-2 px-4 hover:bg-red-600"
						onClick={handleDelete}>
					Удалить
				</button>
			</div>
		</div>
	);
};

export default ViewPostPage;

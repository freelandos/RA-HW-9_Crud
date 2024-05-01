import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavTopPost from "../components/NavTopPost";
import axios from "axios";

const CreatePostPage: FC = () => {
	const [content, setContent] = useState("");
	const navigate = useNavigate();

	const handleCreate = async () => {
		if (!content.trim()) return;

		try {
			await axios.post(`${import.meta.env.VITE_BASE_URL}/posts`, { content });
			navigate("/");
		} catch (error) {
			console.error("Ошибка при создании поста:", error);
		}
	};

	return (
		<div className="container mx-auto mt-20 border-8 border-gray-600">
			<NavTopPost />
			<form >
				<div>
					<textarea
						id="content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						rows={4}
						className="w-full p-4 outline-none focus:outline-none hover:border-gray-300 focus:border-gray-500"
						required
					/>
				</div>
				<div className="bg-gray-100 p-4 flex justify-end">
					<button
						type="button"
						onClick={handleCreate}
						className="bg-blue-500 rounded text-white py-2 px-4 hover:bg-blue-600"
					>
						Опубликовать
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePostPage;

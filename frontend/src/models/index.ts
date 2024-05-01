export interface IPost {
	id: number;
	content: string;
	created: number;
}

export interface MainProps {
	posts: IPost[];
}

import axios from "axios";

// ---------- TYPES ----------
export type Post = {
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

const BASE_URL = "https://jsonplaceholder.typicode.com";


// Fetch paginated posts
export const fetchPosts = async (pageNumber: number) => {
  const res = await axios.get(`${BASE_URL}/posts?_start=${pageNumber}&_limit=3`);
  return res.data as Array<Post>;
};

// Fetch single post
export const fetchPost = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/posts/${id}`);
  return res.data as Post;
};

// Fetch comments for a post
export const fetchComments = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/posts/${id}/comments`);
  return res.data as Array<Comment>;
};

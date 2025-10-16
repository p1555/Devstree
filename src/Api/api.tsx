import axios from 'axios'

export type post = {
  id: number
  title: string
  body: string
}

export type Comment = {
  id: number
  name: string
  email: string
  body: string
}

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchPosts = async (pageNumber: number) => {
  const res = await axios.get(`${BASE_URL}/posts?_start=${pageNumber}&_limit=3`)
  return res.data as Array<post>
}

export const fetchPost = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/posts/${id}`)
  return res.data as post
}

export const fetchComments = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/posts/${id}/comments`)
  return res.data as Array<Comment>
}

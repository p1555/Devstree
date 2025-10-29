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

export type CommentsProps = {
  comments?: Array<Comment>
  postID: number
}

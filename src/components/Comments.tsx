import type { Comment } from '@/Api/api.tsx'
// import type { Post } from '@/Api/api.tsx'

type CommentsProps = {
  comments?: Array<Comment>
  postID: number
}

export function Comments({ comments, postID }: CommentsProps) {
  if (!comments || comments.length === 0) {
    return <p>No comments found.</p>
  }

  return (
    <div className="space-y-3">
      <p className="text-sm">
        <b>PostID: {postID}</b>
      </p>
      {comments.map((comment) => {
      
        return (
          <li key={comment.id} className="border p-3 rounded-xl list-none">
            Comment Id: {comment.id}
            <p className="font-semibold">
              <b>Name:</b> {comment.name}
            </p>
            <p className="text-sm text-gray-500">
              <b>Email:</b> {comment.email}
            </p>
            <p>
              <b>Body:</b> {comment.body}
            </p>
          </li>
        )
      })}
    </div>
  )
}
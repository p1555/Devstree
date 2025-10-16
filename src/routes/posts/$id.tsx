import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { fetchComments, fetchPost } from '../../Api/api.tsx'
import { Comments } from '@/components/Comments.tsx'

export const Route = createFileRoute('/posts/$id')({
  component: PostDetails,
})

function PostDetails() {
  const { id: postid } = Route.useParams()

  const {
    data: post,
    isLoading: postLoading,
    isError: postError,
  } = useQuery({
    queryKey: ['post', postid],
    queryFn: () => fetchPost(postid),
  })

  const {
    data: comments,
    isLoading: commentsLoading,
    isError: commentsError,
  } = useQuery({
    queryKey: ['comments', postid],
    queryFn: () => fetchComments(postid),
  })

  if (postLoading || commentsLoading) return <p>Loading...</p>
  if (postError || commentsError) return <p>Error loading post.</p>
  if (!post) {
    return <p>No post found..</p>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-6 text-gray-700">{post.body}</p>

      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <Comments comments={comments} postID={postid} />
    </div>
  )
}

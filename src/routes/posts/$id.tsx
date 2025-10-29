import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { fetchComments, fetchPost } from '../../Api/api'

import RefreshError from '../error/refresherror'
import IdError from '@/errors/iderror'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Comments } from '@/components/Comments'

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

    if (postLoading || commentsLoading) {
    return <RefreshError message="Loading post data..." />
  }

  if (postError || commentsError) {
  
    return (
      <IdError
        postLoading={postLoading}
        commentsLoading={commentsLoading}
        postError={postError}
        commentsError={commentsError}
      />
    )
  }
  if (!post) {
    return <p>No post found..</p>
  }

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-12 px-4">
        <Card className="shadow-md p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {post.title}
            </CardTitle>
            <CardDescription className="text-gray-700 mt-2">
              {post.body}
            </CardDescription>
          </CardHeader>
        </Card>

        <Separator className="my-6" />

        <Comments comments={comments} postID={postid} />
      </div>
    </div>
  )
}

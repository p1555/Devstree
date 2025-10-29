import { Skeleton } from '@/components/ui/skeleton'

function IdError({
  postLoading,
  commentsLoading,
  postError,
  commentsError,
}: {
  postLoading: boolean
  commentsLoading: boolean
  postError: boolean
  commentsError: boolean
}) {
  if (postLoading || commentsLoading) {
    return (
      <div className="max-w-2xl  mt-20 space-y-4">
        <p>Loading...</p>
        <Skeleton className="h-10 w-3/4 " />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    )
  }

  if (postError || commentsError) {
    return (
      <div className="flex justify-center py-10">
        <p className="text-red-500 font-medium">Error loading post.</p>
      </div>
    )
  }
  return null
}
export default IdError

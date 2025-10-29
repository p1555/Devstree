import { useState } from 'react'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import { fetchPosts } from '../../Api/api'
// import type { post } from '../../Api/api.tsx'
import type { post } from '@/types/global'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import IndexError from '@/errors/indexerror'

export const Route = createFileRoute('/posts/')({
  component: PostsPage,
})

function PostsPage() {
  const [pageNumber, setPageNumber] = useState(0)
  //  const [lastpage, setlastpage] = useState(false)

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts', pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    placeholderData: keepPreviousData,
  })

  if (isLoading || isError) {
    return <IndexError isLoading={isLoading} isError={isError} />
  }
  const lastpage = data.length < 3

  return (
    <div className="max-w-2xl mx-auto mt-12 px-4">
      <h1 className="text-center mb-6 font-bold text-4xl bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
        Posts
      </h1>
      <div className="space-y-3">
        {data.map((post: post) => (
          <div key={post.id}>
            <Link to="/posts/$id" params={{ id: post.id.toString() }}>
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer gap-1 mb-2">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {post.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      <Separator className="my-6" />
      <div className="flex gap-4 justify-center mt-6">
        <Button
          disabled={pageNumber === 0 ? true : false}
          onClick={() => setPageNumber((prev) => prev - 3)}
          className="px-4 py-2 bg-gray-400 rounded cursor-pointer"
        >
          Prev
        </Button>

        <p className="pt-2">Page {pageNumber / 3 + 1}</p>

        <Button
          disabled={lastpage}
          onClick={() => {
            if (!lastpage) {
              setPageNumber((prev) => prev + 3)
            }
          }}
          className="px-4 py-2 bg-gray-400 rounded cursor-pointer"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

import { Link, createFileRoute } from '@tanstack/react-router'
// import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 px-4 mt-8 ">
      <div className="text-center mt-8 ">
        <h1 className=" font-bold text-4xl text-center">
          Welcome to the Posts Explorer
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Browse, read, and engage with posts. Click below to see all available
          posts and their comments.
        </p>
        <div className="mt-8">
          <Link to="/posts">
            <Button className="px-8 py-4 text-lg  bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer">
              Explore Posts
            </Button>
          </Link>
        </div>
      </div>

      <Separator className="my-13 w-full max-w-xl" />

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 w-full">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold mb-2">Fast Navigation</h3>
          <p className="text-gray-600">
            Quickly browse posts with efficient pagination and smooth UI
            interactions.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold mb-2">Interactive Comments</h3>
          <p className="text-gray-600">
            View and engage with comments for each post in a clean, readable
            layout.
          </p>
        </div>
      </div>
    </div>
  )
}

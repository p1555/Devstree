import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p className="mt-3 text-gray-600">
        Please click on a post to view details and comments.
      </p>
    </div>
  )
}

import { Button } from '@/components/ui/button'

export default function RefreshError({ message }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-8">
      <h1 className="text-3xl font-bold text-red-600 ">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600 mb-6">
        {message || "Server error – please try again."}
      </p>
      <Button
        onClick={() => window.location.reload()}
        className="bg-blue-500 hover:bg-blue-600 text-white"
      >
        Retry
      </Button>
    </div>
  )
}

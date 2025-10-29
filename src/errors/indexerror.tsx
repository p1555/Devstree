// src/errors/IndexError.tsx
import { Skeleton } from '@/components/ui/skeleton'

interface IndexErrorProps {
  isLoading: boolean
  isError: boolean
}

export default function IndexError({ isLoading, isError }: IndexErrorProps) {
  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto mt-20 space-y-4">
        <p className="text-gray-500 text-center font-medium">
          Loading posts...
        </p>
        <Skeleton className="h-10 w-3/4 mx-auto" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex justify-center py-10">
        <p className="text-red-500 font-medium">Error loading posts.</p>
      </div>
    )
  }

  return null
}

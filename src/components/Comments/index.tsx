'use client'


import { CommentsCarousel } from './comment/carousel'
import { Navbar } from './Navigation'

import type { CommentsProps } from '@/types/global'

export function Comments({ comments }: CommentsProps) {
  if (!comments || comments.length === 0) {
    return (
      <>
        <Navbar />
        <p className="text-center text-gray-500 mt-20">No comments found.</p>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="pt-4 flex flex-col items-center w-full">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>

        <CommentsCarousel comments={comments} />
      </div>
    </>
  )
}

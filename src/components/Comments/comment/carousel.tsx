'use client'
import type { Comment } from '@/types/global'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface CommentsCarouselProps {
  comments: Array<Comment>
}

export function CommentsCarousel({ comments }: CommentsCarouselProps) {
  return (
    <Carousel className="w-full max-w-5xl">
      <CarouselContent className="-ml-2 md:-ml-4">
        {comments.map((comment) => (
          <CarouselItem
            key={comment.id}
            className="pl-2 md:pl-4 flex md:basis-1/2"
          >
            <div className="w-full md:w-96">
              <Card className="h-full flex flex-col shadow-sm hover:shadow-md transition-all">
                <CardHeader className="flex items-center space-x-4 pb-2">
                  <Avatar>
                    <AvatarImage
                      src={`https://api.dicebear.com/8.x/initials/svg?seed=${comment.name}`}
                    />
                    <AvatarFallback>
                      {comment.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-semibold text-gray-800">
                      {comment.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      {comment.email}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="pt-2 flex-1">
                  <p className="text-gray-700 leading-relaxed">{comment.body}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

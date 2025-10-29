import { createFileRoute } from '@tanstack/react-router'
import RefreshError from '@/components/feactues/not-found-error'


export const Route = createFileRoute('/(error)/404')({
  component: RefreshError,
})



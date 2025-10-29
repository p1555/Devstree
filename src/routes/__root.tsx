import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-6 max-w-3xl mx-auto">
        <Outlet />
      </div>
    </>
  ),
})

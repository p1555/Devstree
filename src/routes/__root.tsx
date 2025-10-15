import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-6 max-w-3xl mx-auto">
        <nav className="mb-6">
          <Link to="/posts" className="text-blue-600 hover:underline">
            Posts
          </Link>
        </nav>
        <Outlet />
      
        <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
      </div>
    </>
  ),
})

import { Link } from '@tanstack/react-router';


export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/gacha"!
    <Link to='/'>Pa fuera</Link>
  </div>
}

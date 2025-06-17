import { Link } from '@tanstack/react-router';
import ContainerStorePage from '../components/pages/storePage/ContainerStorePage';
export const Route = createFileRoute({
  component: RouteComponent,
})


function RouteComponent() {
  return (
  <>  
  <Link className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-red-300 z-100" to='/'>dads</Link>

  <ContainerStorePage></ContainerStorePage>
  </>
  )
}

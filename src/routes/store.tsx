import ContainerStorePage from '../components/pages/storePage/ContainerStorePage';

interface CardProps {
  id: number;
  name: string;
  rarity: string;
  color: string;
}

const storePage = {
  coinsTitle: 'COINS',
  priceTitle: 'PRICE',
  price: '10',
  btnTitle: 'OPEN'
}

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent(props: CardProps) {
  return (
  <>  
  <ContainerStorePage storePage={storePage} card={props}></ContainerStorePage>
  </>
  )
}

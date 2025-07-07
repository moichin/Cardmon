import InventoryPage from './InventoryPage';
import ExitMenu from '../storePage/ExitMenu';
import { useQuery } from '@tanstack/react-query';

export default function ContainerInventoryPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userCards'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('https://cardmond.test/api/v1/user/cards', {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('No autorizado o error del servidor');
      }

      const result = await response.json();

      console.warn("🧩 Respuesta del backend:", result);

      // ✅ Maneja dos posibles formatos de respuesta
      const cards = Array.isArray(result)
        ? result
        : result.cards || [];

      if (!Array.isArray(cards)) {
        throw new Error('La respuesta no contiene un arreglo válido');
      }

      return cards.map((card: any) => ({
        id: card.id,
        name: card.nombre,
        rarity: card.rareza?.toUpperCase() || 'NORMAL',
        color: card.color || 'gray',
      }));
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="absolute size-full bg-cardmon-gray">
      <InventoryPage values={data} />
      <ExitMenu />
    </div>
  );
}

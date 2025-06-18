import { useState, useEffect } from "react";

interface Card {
  id: number;
  name: string;
  rarity: string;
  image: string;
}

export default function CardPackSystem() {
  // Estado para las monedas
  const [coins, setCoins] = useState(50000); // Inicialmente 5000 monedas

  //en react si queremos que algo cambien en pantalla debemos usar el hook useState
  // Estado para las cartas obtenidas
   const [cards, setCards] = useState<Card[]>([]); //cards es un arreglo de tipo card

    const [allCards, setAllCards] = useState<Card[]>([]); // Para almacenar todas las cartas del JSON

  // Tabla de probabilidades
  // Datos de probabilidad con colores asociados
const PACK_TYPES = [
  { name: "Común", chance: 60, color: "bg-gray-200" },
  { name: "Rara", chance: 25, color: "bg-blue-300" },
  { name: "Épica", chance: 10, color: "bg-purple-400" },
  { name: "Legendaria", chance: 5, color: "bg-yellow-400" },
];



 // Cargar las cartas desde el JSON
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await import("../../../data/cards.json");
        setAllCards(response.default);
      } catch (error) {
        console.error("Error cargando las cartas:", error);
      }
    };

    fetchCards();
  }, []);



  // Obtener carta aleatoria según rareza
  const getRandomCard = (rarity: string) => {
    const cardsInRarity = allCards.filter(card => card.rarity === rarity);
    if (cardsInRarity.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * cardsInRarity.length);
    return cardsInRarity[randomIndex];
  };



  // Seleccionar rareza basada en probabilidades
  const selectRarity = () => {
    const random = Math.random() * 100;
    let cumulative = 0;

    for (const pack of PACK_TYPES) {
      cumulative += pack.chance;
      if (random < cumulative) {
        return pack;
      }
    }
    return PACK_TYPES[0]; // Fallback
  };

// Abrir sobres
  const openPacks = (quantity: number) => {
    const cost = quantity * 100;
    if (coins < cost) {
      alert("No tienes suficientes monedas.");
      return;
    }

    setCoins(coins - cost);

    const newCards: Card[] = [];
    for (let i = 0; i < quantity; i++) {
      const selectedRarity = selectRarity();
      const card = getRandomCard(selectedRarity.name);
      
      if (card) {
        newCards.push(card);
      }
    }

    setCards(newCards);
  };


  // Obtener color según rareza
  const getRarityColor = (rarity: string) => {
    const pack = PACK_TYPES.find(p => p.name === rarity);
    return pack ? pack.color : "bg-gray-200";
  };


  return (
    <div className="p-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Sistema de Cartas Coleccionables</h1>
      
      <div className="bg-indigo-100 p-4 rounded-lg shadow-md mb-8">
        <p className="text-xl mb-2">Monedas disponibles: 
          <span className="font-bold text-yellow-600 ml-2">
            {coins.toLocaleString()}
          </span>
        </p>

        <div className="flex justify-center gap-6 mb-4">
          <button
            onClick={() => openPacks(1)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-md"
          >
            Comprar 1 sobre (100)
          </button>
          <button
            onClick={() => openPacks(10)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-md"
          >
            Comprar 10 sobres (1000)
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Cartas obtenidas:</h2>
      
      {cards.length === 0 ? (
        <p className="text-gray-500 italic">No has abierto ningún sobre aún</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`p-4 rounded-lg border-2 shadow-md flex flex-col items-center transition-transform hover:scale-105 ${getRarityColor(card.rarity)}`}
            >
              <div className="bg-white rounded-lg p-2 mb-2 w-full">
                <img 
                  src={`/images/${card.image}`} 
                  alt={card.name}
                  className="w-full h-32 object-contain mx-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.png';
                  }}
                />
              </div>
              <h3 className="font-bold text-lg">{card.name}</h3>
              <p className={`px-3 py-1 rounded-full text-xs font-semibold ${
                card.rarity === "Legendaria" ? "bg-yellow-300" :
                card.rarity === "Épica" ? "bg-purple-300" :
                card.rarity === "Rara" ? "bg-blue-200" : "bg-gray-300"
              }`}>
                {card.rarity}
              </p>
              <p className="text-xs mt-2">ID: {card.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


import { useEffect, useState } from "react";
import { getCharacters } from "rickmortyapi";


export default function Cardboard({changeScore, scoreState, newGame}){
    const [characterAttributes, setCharacterAttributes] = useState([]);
    const [currentCache, setCurrentCache] = useState([]);

    const handleCardClick = (event) => {
        if (currentCache.includes(event.target.alt)){
            newGame();
            setCurrentCache([]);
            fetchCharacters();
        } else {
            setCurrentCache(prevCache => [...prevCache, event.target.alt]);
            changeScore(scoreState + 1);
            fetchCharacters();
        }
      };
      
        async function fetchCharacters() {
            try {
                const characters = await getCharacters({page: Math.floor(Math.random() * 10)});
                const charOjects = characters.data.results;
                const newAttributes = [];
                while (newAttributes.length < 8) {
                    const randomChar = charOjects[Math.floor(Math.random() * charOjects.length)];
                    if (!newAttributes.includes(randomChar)) {
                        newAttributes.push(randomChar);
                    }
                }
                setCharacterAttributes(newAttributes);
            } catch (error) {
                console.error("Failed to fetch characters:", error);
            }
        }


    useEffect(() => {
        fetchCharacters();
        }, []);

    return (
        <div id = "cardboard">
        {characterAttributes.map((character, index) => (
            <div 
            key = {character.id}
            onClick={(event) => handleCardClick(event)}
            className="cards">
            {character.name} 
            <img src={character.image} alt={character.name} />
            </div>
        ))}
        </div>
    );
}
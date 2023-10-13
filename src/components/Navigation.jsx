import { useState } from "react";


export default function Navigation({scoreState}) {
    const [highscore, setHighscore] = useState(0);

    if (scoreState > highscore) {
        setHighscore(scoreState);
    }
    return(
        <div id = "navigation">
            <p>Score: {scoreState}</p>
            <p>High Score: {highscore}</p>
        </div>
    )
}
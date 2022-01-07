import React from "react"
import Card from "./Card.js"
import data from "./data.js"

export default function App() {
    
    const cards = data.map(item => {
        return (
            <Card 
            key={item.id}
            item={item}
        />)
    })
        
    
    return (
        <div>
            <header>
                <h1 className="header--text">🎧 my music journal.</h1>
            </header>
            
            <div className="feed">
                {cards}
            </div>
        </div>
    )
}
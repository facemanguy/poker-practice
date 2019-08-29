import React from 'react';
import Axios from 'axios';


let playerCards = [];

export default class CreateDeck extends React.Component {
    constructor(props){
        super(props);
        this.state = {         
            CardsInPlay: [],
        }
    }
    

    componentDidMount(){
        Axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=7`, {})
        .then(Response=>{
            console.log(Response.data)
            this.setState({CardsInPlay: Response.data.cards});
            playerCards = Response.data.cards[0];
            console.log(playerCards);

        })
    }

    

    render(){
        const { CardsInPlay} = this.state;
        let playerHand = [];
        for (const [index, value] of CardsInPlay.entries()) {
            playerHand.push(<div><h2 key={index}>{value.code} {value.value} {value.suit}</h2><img src={value.image} alt={value.code}></img></div>)
        }
        return(
            <div>
                <div className="card-display">{playerHand}</div>
            </div>
            
        );
    }
}
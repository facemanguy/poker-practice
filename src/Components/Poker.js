import React from 'react';
import Axios from 'axios';

let currentDeck = 'new';

export default class Poker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playerCards: [],
            communityCards: [],
        }
    }

    async drawCard(){
        Axios.get(`https://deckofcardsapi.com/api/deck/${currentDeck}/draw/?count=1`, {})
        .then(Response => {
            console.log(Response.data);
            this.setState({ communityCards: Response.data.cards});
        })
        .catch(error => {
            console.log(error);
        });
    }

    async componentDidMount() {
        Axios.get(`https://deckofcardsapi.com/api/deck/${currentDeck}/draw/?count=2`, {})
        .then(Response => {
            console.log(Response.data);
            this.setState({ playerCards: Response.data.cards});
            currentDeck = (Response.data.deck_id)
            console.log(currentDeck)
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
         const { playerCards} = this.state;
         const { communityCards} = this.state;
         let items =[];
         let flop =[];
         for (const [index, amount] of communityCards.entries()) {
            flop.push(<div><p key={index}>{amount.code}</p></div>)
         }
         for (const [index, value] of playerCards.entries()) {
            items.push(<div><p key={index}>{value.code}</p><h1>{value.value} {value.suit}</h1><img src={value.image} alt={value.code}></img></div>)
        }
         return(
             <div>
                 <div>{items}</div>
                 <button onClick={this.drawCard}>Draw</button>
                <div>{flop}</div>
             </div>
         );
    }
};
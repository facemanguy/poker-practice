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
        this.drawCard = this.drawCard.bind(this);
    }

    calc(code1, code2, remaining){
        console.log(code1, code2);
        console.log(remaining)
    }

    async drawCard(){
        Axios.get(`https://deckofcardsapi.com/api/deck/${currentDeck}/draw/?count=3`, {})
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
            let remaining = Response.data.remaining;
            let card1 = Response.data.cards[0];
            let card2 = Response.data.cards[1];
            let code1 = card1.code;
            let code2 = card2.code;
            console.log(code1, code2);

            this.calc(code1, code2, remaining)
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
            flop.push(<div><p key={index}>{amount.code}</p><img src={amount.image} alt={amount.code}></img></div>)
            console.log('floptest');
         }
         for (const [index, value] of playerCards.entries()) {
            items.push(<div><p key={index}>{value.code}</p><h1>{value.value} {value.suit}</h1><img src={value.image} alt={value.code}></img></div>)
        }
         return(
             <div>
                 <div className="Game-board">{items}</div>
                 <button onClick={this.drawCard}>Draw</button>
                <div>{flop}</div>
             </div>
         );
    }
};
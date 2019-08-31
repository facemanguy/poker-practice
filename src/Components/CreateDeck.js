import React from 'react';
import Axios from 'axios';


let playerCards = [];

export default class CreateDeck extends React.Component {
    constructor(props){
        super(props);
        this.state = {         
            CardsInPlay: [],
            DeckID: '',
            PlayerCard1: {},
            PlayerCard2: {},
            ComCard1: {},
            ComCard2: {},
            ComCard3: {},
            ComCard4: {},
            ComCard5: {},
        }
    }
    

    componentDidMount(){
        Axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=7`, {})
        .then(Response=>{
            console.log(Response.data)
            this.setState({
                CardsInPlay: Response.data.cards,
                DeckID: Response.data.deck_id,
                PlayerCard1: Response.data.cards[0],
                PlayerCard2: Response.data.cards[1],
                ComCard1: Response.data.cards[2],
                ComCard2: Response.data.cards[3],
                ComCard3: Response.data.cards[4],
                ComCard4: Response.data.cards[5],
                ComCard5: Response.data.cards[6],
            });
            playerCards = Response.data.cards[0];
            console.log(playerCards);
            console.log(this.state)

        })
    }
    
    CardParser() {
        let FirstCardSuit = this.state.PlayerCard1.suit;
        if (FirstCardSuit === 'SPADES'){
            console.log('Spades');
        }else if (FirstCardSuit === 'CLUBS'){
            console.log('Clubs'); 
        }else if (FirstCardSuit === 'HEARTS'){
            console.log('Hearts');
        }else if (FirstCardSuit === 'DIAMONDS'){
            console.log('Diamonds');
        }
    }


    render(){
        const { CardsInPlay} = this.state;
        let playerHand = [];
        let test = [];
        for (const [index, value] of CardsInPlay.entries()) {
            playerHand.push(<div><h2 key={index}>{value.code} {value.value} {value.suit}</h2><img src={value.image} alt={value.code}></img></div>)
            test.push(CardsInPlay[index].value);
        }
        console.log(test);
        console.log('test');
        if(test !== []){
            console.log('success');
        }
        this.CardParser();
        /*this.state.CardsInPlay.forEach((card, i) =>{
            playerHand.push(<CardParser item={card.cards.value}/>)
        })*/
        
        return(
                <div className="card-display">{playerHand}</div>            
        );
    }
}
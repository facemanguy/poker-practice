import React from 'react';
import Axios from 'axios';


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
            flushChance: '',
        }
    }
    
    /* Call API to fill out state*/
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

            console.log(this.state)

        })
    }
    
    /* Take player card data to make it calcuable */
    CardParser() {
        let FirstCardSuit = this.state.PlayerCard1.suit;
        let SecondCardSuit = this.state.PlayerCard2.suit;
        let FirstCardValue = this.state.PlayerCard1.value;
        let SecondCardValue = this.state.PlayerCard2.value;

        return (
            <div>
            <p>{FirstCardSuit}</p>
            <p>{SecondCardSuit}</p>
            <p>{FirstCardValue}</p>
            <p>{SecondCardValue}</p>
            </div>
        )
        
        
        
        
        /*
        let SpadeCount = 0;
        let HeartCount = 0;
        let ClubCount = 0;
        let DiamondCount = 0;
        let check = false;
        
        switch (FirstCardSuit){
            case 'SPADES':
            return ++SpadeCount;
            
            case 'HEARTS':
            return ++HeartCount;

            case 'CLUBS':
            return ++ClubCount;

            case 'DIAMONDS':
            return ++DiamondCount;

            default: 
            console.log('No suit Match')
        }

        switch (SecondCardSuit){
            case 'SPADES':
            return ++SpadeCount;
            
            case 'HEARTS':
            return ++HeartCount;

            case 'CLUBS':
            return ++ClubCount;

            case 'DIAMONDS':
            return ++DiamondCount;

            default: 
            console.log('No suit Match')
        }

        if  (SpadeCount || HeartCount || ClubCount || DiamondCount === 2){
            this.setState({flushChance: '22%'})
            check = true;
            console.log(this.state.flushChance);
        }
        */
        
        /*
        if (FirstCardSuit === 'SPADES'){
            this.setState({
                SpadeCount: this.state.SpadeCount + 1,
            })
            console.log(this.state.SpadeCount);
        }else if (FirstCardSuit === 'CLUBS'){
            this.setState({
                ClubCount: this.state.ClubCount + 1,
            })
            console.log(this.state.ClubCount); 
        }else if (FirstCardSuit === 'HEARTS'){
            this.setState({
                HeartCount: this.state.HeartCount + 1,
            })
            console.log(this.state.HeartCount);
        }else if (FirstCardSuit === 'DIAMONDS'){
            this.setState({
                DiamondCount: this.state.DiamondCount + 1,
            })
            console.log(this.state.DiamondCount);
        }
        
        if (SecondCardSuit === 'SPADES'){
            this.setState({
                SpadeCount: this.state.SpadeCount + 1,
            })
            console.log(this.state.SpadeCount);
        }else if (SecondCardSuit === 'CLUBS'){
            this.setState({
                ClubCount: this.state.ClubCount + 1,
            })
            console.log(this.state.ClubCount); 
        }else if (SecondCardSuit === 'HEARTS'){
            this.setState({
                HeartCount: this.state.HeartCount + 1,
            })
            console.log(this.state.HeartCount);
        }else if (SecondCardSuit === 'DIAMONDS'){
            this.setState({
                DiamondCount: this.state.DiamondCount + 1,
            })
            console.log(this.state.DiamondCount);
        }*/

        
    }

    ShowFlop(flop){
        
        console.log(flop)
        return(
        <div className="card-display">
            {flop.map((value, index) => {
                return <div key={index}><h2>{value.value} {value.suit}</h2><img src={value.image} alt={value.code}></img></div>
            })}
        </div>
        )
    }


    render(){
       /* const { CardsInPlay} = this.state;*/
        let playerHand = [this.state.PlayerCard1, this.state.PlayerCard2];
        let stats = this.state.flushChance;
        let flop = [this.state.ComCard1, this.state.ComCard2, this.state.ComCard3];

       /* for (const [index, value] of CardsInPlay.entries()) {
            playerHand.push(<div><h2 key={index}>{value.code} {value.value} {value.suit}</h2><img src={value.image} alt={value.code}></img></div>)
        }*/
        
        this.CardParser()
    


        /*this.state.CardsInPlay.forEach((card, i) =>{
            playerHand.push(<CardParser item={card.cards.value}/>)
        })
        test.push(CardsInPlay[index].value);
        */
        
        return(
                <div>
                    <p>{stats}</p>
                    <div className="card-display">
                    {playerHand.map((value, index) => {
                        return <div key={index}><h2>{value.value} {value.suit}</h2><img src={value.image} alt={value.code}></img></div>
                    })}
                    </div>
                    <button onClick={() => this.ShowFlop(flop)}>show flop</button>
                    
                </div>
        );
    }
}
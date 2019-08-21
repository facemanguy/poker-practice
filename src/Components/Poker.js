import React from 'react';
import Axios from 'axios';

export default class Poker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playerCards: [],
        }
    }

    componentDidMount() {
        Axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`, {})
        .then(Response => {
            console.log(Response.data);
            this.setState({ playerCards: Response.data.cards});
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
         const { playerCards } = this.state;
         let items =[];
         for (const [index, value] of playerCards.entries()) {
            items.push(<h1 key={index}>{value.code}<img src={value.image} alt={value.code}></img></h1>)
        }
         return(
             <div>
                 {items}
                <p> test </p>
             </div>
         );
    }
};
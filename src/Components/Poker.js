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
            this.setState({ playerCards: Response.data.cards.code });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
         const { playerCards } = this.state;
         return(
             <div>
                <p>{playerCards} test </p>
             </div>
         );
    }
};
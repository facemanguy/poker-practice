(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(11),r=a.n(o),l=(a(24),a(25),a(12)),i=a(13),s=a(16),u=a(14),d=a(17),h=a(15),p=a.n(h),m=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={playerCards:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://deckofcardsapi.com/api/deck/new/draw/?count=2",{}).then(function(t){console.log(t.data),e.setState({playerCards:t.data.cards[0].code})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.playerCards;return c.a.createElement("div",null,c.a.createElement("p",null,e," test "))}}]),t}(c.a.Component);var f=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"Poker practice calculator"),c.a.createElement("p",null,"A project by john meyer"),c.a.createElement("a",{href:"https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"},"The Api I will be using"),c.a.createElement("a",{href:"https://github.com/crobertsbmw/deckofcards"},"Github")),c.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.e0c7b051.chunk.js.map
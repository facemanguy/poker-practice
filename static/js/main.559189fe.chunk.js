(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(47)},27:function(e,t,a){},28:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),l=(a(27),a(28),a(5)),i=a(2),u=a.n(i),s=a(3),d=a(16),m=a(17),p=a(19),h=a(18),f=a(20),v=a(4),y=a.n(v),w="new",k=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={playerCards:[],communityCards:[]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"drawCard",value:function(){var e=Object(s.a)(u.a.mark(function e(){var t=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:y.a.get("https://deckofcardsapi.com/api/deck/".concat(w,"/draw/?count=1"),{}).then(function(e){console.log(e.data),t.setState({communityCards:e.data.cards})}).catch(function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(s.a)(u.a.mark(function e(){var t=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:y.a.get("https://deckofcardsapi.com/api/deck/".concat(w,"/draw/?count=2"),{}).then(function(e){console.log(e.data),t.setState({playerCards:e.data.cards}),w=e.data.deck_id,console.log(w)}).catch(function(e){console.log(e)});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.playerCards,t=this.state.communityCards,a=[],n=[],c=!0,o=!1,i=void 0;try{for(var u,s=t.entries()[Symbol.iterator]();!(c=(u=s.next()).done);c=!0){var d=u.value,m=Object(l.a)(d,2),p=m[0],h=m[1];n.push(r.a.createElement("div",null,r.a.createElement("p",{key:p},h.code)))}}catch(C){o=!0,i=C}finally{try{c||null==s.return||s.return()}finally{if(o)throw i}}var f=!0,v=!1,y=void 0;try{for(var w,k=e.entries()[Symbol.iterator]();!(f=(w=k.next()).done);f=!0){var b=w.value,E=Object(l.a)(b,2),g=E[0],j=E[1];a.push(r.a.createElement("div",null,r.a.createElement("p",{key:g},j.code),r.a.createElement("h1",null,j.value," ",j.suit),r.a.createElement("img",{src:j.image,alt:j.code})))}}catch(C){v=!0,y=C}finally{try{f||null==k.return||k.return()}finally{if(v)throw y}}return r.a.createElement("div",null,r.a.createElement("div",null,a),r.a.createElement("button",{onClick:this.drawCard},"Draw"),r.a.createElement("div",null,n))}}]),t}(r.a.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Poker practice calculator"),r.a.createElement("p",null,"A project by john meyer"),r.a.createElement("a",{href:"https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"},"The Api I will be using"),r.a.createElement("a",{href:"https://github.com/crobertsbmw/deckofcards"},"Github")),r.a.createElement(k,null),r.a.createElement("p",null,"my app test"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.559189fe.chunk.js.map
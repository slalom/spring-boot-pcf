(window["webpackJsonpchat-app"]=window["webpackJsonpchat-app"]||[]).push([[0],{46:function(e,t,a){e.exports=a(86)},51:function(e,t,a){},52:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(44),c=a.n(r),o=(a(51),a(26)),l=a(8),i=a(9),m=a(11),u=a(10),d=a(5),h=a(12),g=(a(52),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).formatDate=function(e){var t=new Date(e),a=6e4*t.getTimezoneOffset();return new Date(t.getTime()-a).toUTCString().slice(0,-4)},a.scrollToBottom=function(){a.messagesEnd.scrollIntoView({block:"end",inline:"nearest",behavior:"smooth"})},a.state={messages:[]},a.formatDate=a.formatDate.bind(Object(d.a)(a)),a.messagesEnd=null,console.log("props",a.props),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.connect()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"connect",value:function(){var e=this,t=new EventSource("/stream/messages");t.onopen=function(){},t.onmessage=function(t){e.props.messagesListHandler([JSON.parse(t.data)])},t.onerror=function(e){}}},{key:"render",value:function(){var e=this,t=this.formatDate,a=this.props.username;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"welcome-pane ".concat(this.props.messageClass)},n.a.createElement("h3",null,"Welcome, ",this.props.username),n.a.createElement("hr",null)),n.a.createElement("div",{className:"message-window ".concat(this.props.messageClass)},n.a.createElement("ul",{className:"message-list",ref:function(t){e.messagesEnd=t}},this.props.messages.map(function(e,s){return n.a.createElement("li",{key:s},n.a.createElement("span",{className:"username"},e.username?e.username:a," :"," "),n.a.createElement("span",{className:"message-text"}," ",e.text," "),n.a.createElement("div",{className:"date"},t(e.createdAt)))}))))}}]),t}(s.Component)),p=function(e){function t(e){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"user-form ".concat(this.props.usernameClass)},n.a.createElement("div",{className:"header"}," Please Enter a User Name "),n.a.createElement("input",{type:"text",className:"textInput",onChange:function(t){return e.props.usernameHandler(t.target.value)}}),n.a.createElement("div",null,n.a.createElement("a",{type:"button",className:"btn btn-dark",onClick:function(t){return e.props.usernameClickHandler()}},"Submit")))}}]),t}(s.Component),b=a(24),f=a.n(b),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={message:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"message-container ".concat(this.props.messageSubmitClass)},n.a.createElement("form",null,n.a.createElement("input",{className:"message-form",id:"message",type:"text",onChange:function(t){return e.props.messageChangeHandler(t.target.value)}}),n.a.createElement("div",null,n.a.createElement("p",{className:"text-center"},"Type your message here"),n.a.createElement("a",{type:"button",className:"btn btn-dark",onClick:function(t){return e.props.messageClickHandler()}},"Submit"))))}}]),t}(s.Component),v=a(25),k=a(45),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={noteText:"",username:"",messageClass:"hide",usernameClass:"show",messageSubmitClass:"hide",messages:[]},a.usernameHandler=a.usernameHandler.bind(Object(d.a)(a)),a.usernameClickHandler=a.usernameClickHandler.bind(Object(d.a)(a)),a.messageClickHandler=a.messageClickHandler.bind(Object(d.a)(a)),a.messageChangeHandler=a.messageChangeHandler.bind(Object(d.a)(a)),a.messagesListHandler=a.messagesListHandler.bind(Object(d.a)(a)),a.stompClient=null,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.connectSocket()}},{key:"connectSocket",value:function(){console.log("Stomp",v);var e=this.messagesListHandler,t=new k("/mywebsockets");this.stompClient=v.over(t);var a=this.stompClient;a.connect({},function(t){console.log("Connected: "+t),a.subscribe("/topic/messages",function(t){console.log("socket: ",t);var a=JSON.parse(t.body);e([a])})})}},{key:"usernameHandler",value:function(e){this.setState({username:e})}},{key:"usernameClickHandler",value:function(){this.setState({messageClass:"show",messageSubmitClass:"show",usernameClass:"hide"})}},{key:"messageChangeHandler",value:function(e){this.setState({noteText:e})}},{key:"messagesListHandler",value:function(e){var t=f.a.uniqBy([].concat(Object(o.a)(this.state.messages),Object(o.a)(e)),"id");t.sort(function(e,t){return new Date(e.createdAt)-new Date(t.createdAt)}),this.setState({messages:t})}},{key:"messageClickHandler",value:function(){this.stompClient.send("/app/hello",{},JSON.stringify({username:this.state.username,text:this.state.noteText}))}},{key:"updateNoteText",value:function(e){this.setState({noteText:e.target.value})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{usernameClass:this.state.usernameClass,usernameHandler:this.usernameHandler,usernameClickHandler:this.usernameClickHandler}),n.a.createElement("div",{class:"chat-container"},n.a.createElement(g,{messageClass:this.state.messageClass,username:this.state.username,messages:this.state.messages,messagesListHandler:this.messagesListHandler}),n.a.createElement(C,{messageChangeHandler:this.messageChangeHandler,messageClickHandler:this.messageClickHandler,messageSubmitClass:this.state.messageSubmitClass})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.6372ac13.chunk.js.map
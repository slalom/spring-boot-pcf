(window["webpackJsonpchat-app"]=window["webpackJsonpchat-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),c=a.n(r),l=(a(16),a(2)),o=a(3),i=a(5),m=a(4),u=a(1),h=a(6),d=(a(17),a(10)),g=a(7),p=a.n(g),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).formatDate=function(e){var t=new Date(e),a=6e4*t.getTimezoneOffset();return new Date(t.getTime()-a).toUTCString().slice(0,-4)},a.scrollToBottom=function(){a.messagesEnd.scrollIntoView({block:"end",inline:"nearest",behavior:"smooth"})},a.state={messages:[]},a.formatDate=a.formatDate.bind(Object(u.a)(a)),a.messagesEnd=null,a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.connect()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"connect",value:function(){var e=this,t=new EventSource("/stream/messages");t.onopen=function(){},t.onmessage=function(t){var a=[].concat(Object(d.a)(e.state.messages),[JSON.parse(t.data)]);a=p.a.uniqBy(a,"id"),e.setState({messages:a})},t.onerror=function(e){}}},{key:"render",value:function(){var e=this,t=this.formatDate,a=this.props.username;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"welcome-pane ".concat(this.props.messageClass)},s.a.createElement("h3",null,"Welcome, ",this.props.username),s.a.createElement("hr",null)),s.a.createElement("div",{className:"message-window ".concat(this.props.messageClass)},s.a.createElement("ul",{className:"message-list",ref:function(t){e.messagesEnd=t}},this.state.messages.map(function(e,n){return s.a.createElement("li",{key:n},s.a.createElement("span",{className:"username"},e.username?e.username:a," :"," "),s.a.createElement("span",{className:"message-text"}," ",e.text," "),s.a.createElement("div",{className:"date"},t(e.createdAt)))}))))}}]),t}(n.Component),b=function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"user-form ".concat(this.props.usernameClass)},s.a.createElement("div",{className:"header"}," Please Enter a User Name "),s.a.createElement("input",{type:"text",className:"textInput",onChange:function(t){return e.props.usernameHandler(t.target.value)}}),s.a.createElement("div",null,s.a.createElement("a",{type:"button",className:"btn btn-dark",onClick:function(t){return e.props.usernameClickHandler()}},"Submit")))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={message:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"message-container ".concat(this.props.messageSubmitClass)},s.a.createElement("form",null,s.a.createElement("input",{className:"message-form",id:"message",type:"text",onChange:function(t){return e.props.messageChangeHandler(t.target.value)}}),s.a.createElement("div",null,s.a.createElement("p",{className:"text-center"},"Type your message here"),s.a.createElement("a",{type:"button",className:"btn btn-dark",onClick:function(t){return e.props.messageClickHandler()}},"Submit"))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={noteText:"",username:"",messageClass:"hide",usernameClass:"show",messageSubmitClass:"hide"},a.usernameHandler=a.usernameHandler.bind(Object(u.a)(a)),a.usernameClickHandler=a.usernameClickHandler.bind(Object(u.a)(a)),a.messageClickHandler=a.messageClickHandler.bind(Object(u.a)(a)),a.messageChangeHandler=a.messageChangeHandler.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"usernameHandler",value:function(e){this.setState({username:e})}},{key:"usernameClickHandler",value:function(){this.setState({messageClass:"show",messageSubmitClass:"show",usernameClass:"hide"})}},{key:"messageChangeHandler",value:function(e){this.setState({noteText:e})}},{key:"messageClickHandler",value:function(){console.log(this.state.noteText),fetch("/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:this.state.noteText,username:this.state.username})}).then(function(e){console.log("Request success: ",e)}).catch(function(e){console.log("Request failure: ",e)})}},{key:"updateNoteText",value:function(e){this.setState({noteText:e.target.value})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{usernameClass:this.state.usernameClass,usernameHandler:this.usernameHandler,usernameClickHandler:this.usernameClickHandler}),s.a.createElement("div",{class:"chat-container"},s.a.createElement(f,{messageClass:this.state.messageClass,username:this.state.username}),s.a.createElement(C,{messageChangeHandler:this.messageChangeHandler,messageClickHandler:this.messageClickHandler,messageSubmitClass:this.state.messageSubmitClass})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.d7848675.chunk.js.map
(this["webpackJsonpcovid-escape-room"]=this["webpackJsonpcovid-escape-room"]||[]).push([[0],{34:function(e,t,a){e.exports=a(65)},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){e.exports=a.p+"static/media/clue1.01a77219.png"},49:function(e,t,a){e.exports=a.p+"static/media/clue2.56a953b5.png"},50:function(e,t,a){e.exports=a.p+"static/media/clue3.95368a69.png"},51:function(e,t,a){e.exports=a.p+"static/media/lock.913c3b7c.svg"},52:function(e,t,a){e.exports=a.p+"static/media/unlock.83ea30b0.svg"},53:function(e,t,a){e.exports=a.p+"static/media/clue4.182529b1.mp3"},54:function(e,t,a){e.exports=a.p+"static/media/clue5-1.9ee59afc.png"},55:function(e,t,a){e.exports=a.p+"static/media/clue5-2.1a94a9dd.png"},56:function(e,t,a){e.exports=a.p+"static/media/clue5-3.520553bf.png"},57:function(e,t,a){e.exports=a.p+"static/media/clue6.8f0186a5.png"},58:function(e,t,a){e.exports=a.p+"static/media/clue7.a7de14c6.png"},59:function(e,t,a){e.exports=a.p+"static/media/clue8.483df9f6.png"},60:function(e,t,a){e.exports=a.p+"static/media/clue8-video.6aa84460.mp4"},61:function(e,t,a){e.exports=a.p+"static/media/clue9-1.49b59b8a.png"},62:function(e,t,a){e.exports=a.p+"static/media/clue9-2.6511444f.png"},63:function(e,t,a){e.exports=a.p+"static/media/clue9-3.7a37515e.png"},64:function(e,t,a){e.exports=a.p+"static/media/clue10.3d9fce28.png"},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(12),r=a.n(l),o=a(20),s=(a(43),a(44),a(3)),u=a(10),i=a.n(u),m=a(15),d=a(6),p=a(28),h=a(29),f=["parima08@gmail.com","anitashah92@gmail.com","kalpitdixit@gmail.com","sudosh@iu.edu","shah.nihar21@gmail.com"],E=function(){function e(t){Object(p.a)(this,e),this._clientId=void 0,this._clientId=t}return Object(h.a)(e,[{key:"signIn",value:function(){var e=Object(m.a)(i.a.mark((function e(t,a,n){var c=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.load("auth2",Object(m.a)(i.a.mark((function e(){var l,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=gapi.auth2.init({client_id:c._clientId}),e.next=3,l.signIn();case 3:l.isSignedIn&&(o=l.currentUser.get().getBasicProfile(),r=o.getEmail()),c.validateEmail(r)?t():(a(),n(),c.signOut(a));case 5:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"validateEmail",value:function(e){return!!f.includes(e)||(alert("Sorry! Not a valid email address!"),!1)}},{key:"signOut",value:function(){var e=Object(m.a)(i.a.mark((function e(t){var a,n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,gapi.load("auth2",Object(m.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.init({client_id:n._clientId});case 2:(a=e.sent).signOut().then((function(){t()})),console.log("outside disconnect"),a.disconnect();case 6:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function v(){var e=Object(d.b)(["login"]),t=Object(s.a)(e,3),a=(t[0],t[1]),n=t[2],l=Object(d.b)(["G_AUTHUSER_H"]),r=Object(s.a)(l,3),o=(r[0],r[1],r[2]);function u(){return(u=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){a("login",!0,{path:"/"}),a("lastSolvedClue",1,{path:"/"})},E.shared.signIn(t,n,o);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"login-page"},c.a.createElement("div",{className:"login-box"},c.a.createElement("h1",null,"Welcome!"),c.a.createElement("p",null,"Please login using your email id:"),c.a.createElement("div",{className:"g-signin2","data-onsuccess":"onSignIn"}),c.a.createElement("button",{onClick:function(){return u.apply(this,arguments)}},"Sign in"))))}E.shared=new E("213328197517-9ufecuearqg6f1tve7q5s18undbutsg0");var g=a(9),b=a(5),y=a(2),j=a(33),O=function(e){e&&e.stopPropagation&&e.stopPropagation()};function w(e){var t=e.children,a=e.onClose,n=e.style;return c.a.createElement("div",{className:"screen",onClick:function(e){e.stopPropagation(),a&&a(e)}},c.a.createElement("div",{className:"panel",onClick:O,style:n},t))}function N(e){var t=e.onClose;return c.a.createElement(w,{onClose:t},c.a.createElement("div",null,c.a.createElement("h1",null,"Uh oh!"),c.a.createElement("p",null,"That is not the correct answer. Please try again.")))}var C=a(16),x=a(30);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=t[n.type];return c?c(a,n.payload,n):a}}({step:"introduction",lastSolvedClue:1},{SET_STEP:function(e,t){return S({},e,{step:t.step})},SET_LAST_SOLVED_CLUE:function(e,t){return S({},e,{lastSolvedClue:t.lastSolvedClue})}}),T=Object(C.b)({shared:_}),I=Object(C.c)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),L=function(e){I.dispatch({type:"SET_LAST_SOLVED_CLUE",payload:{lastSolvedClue:e}})};function P(e){var t=e.onClose,a=e.step,l=Object(n.useState)("padlock"),r=Object(s.a)(l,2),o=r[0],u=r[1],i=(a||0)+1>10;return Object(n.useEffect)((function(){setTimeout((function(){u("padlock unlock"),console.log(o)}),500)}),[]),c.a.createElement(w,{onClose:t},c.a.createElement("div",null,c.a.createElement("div",{className:"padlock-container"},c.a.createElement("div",{className:o},c.a.createElement("div",{className:"keyhole"}))),c.a.createElement("h1",null,"Congrats!"),c.a.createElement("p",null,"You've made it past this level."),!i&&c.a.createElement(b.c,{to:"/clue".concat((a||0)+1),className:"modal-button"},"Go on to the next clue"),i&&c.a.createElement(b.c,{to:"/success",className:"modal-button"},"Go on to see how you've impacted the world")))}function D(e){var t=e.solution,a=e.step,l=Object(n.useRef)([]),o=Object(n.useState)([]),u=Object(s.a)(o,2),i=u[0],m=u[1],p=Object(d.b)(["lastSolvedClue"]),h=Object(s.a)(p,3),f=(h[0],h[1]),E=(h[2],Object(n.useState)(!1)),v=Object(s.a)(E,2),g=v[0],b=v[1],y=t.replace(" ","").toLowerCase();console.log(a);var O=function(e){return c.a.createElement("input",{key:"input".concat(e),className:"password-input",type:"text",placeholder:"\u2022",maxLength:1,onChange:function(t){return function(e,t){var a=Object(j.a)(i);a[t]=e.target.value,m(a),e.target.value.length>=1&&(null!=l.current[t]&&l.current[t].blur(),t+1<l.current.length&&(l.current[t+1]||l.current[t+2]).focus()),0===e.target.value.length&&(null!=l.current[t]&&l.current[t].blur(),t+1<l.current.length&&(l.current[t+1]||l.current[t+2]).focus())}(t,e)},ref:function(t){return null!==t?l.current[e]=t:null}})},w=Array.from(t),C=c.a.createElement("div",{className:"spacer"}),x=w.map((function(e,t){return" "===e?C:O(t)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=i.join("").toLowerCase();console.log(y,t),t===y?(L(a+1),f("lastSolvedClue",a+1),b(!0)):function(e){var t=document.createElement("div");document.body.appendChild(t);var a=function(){r.a.unmountComponentAtNode(t),document.body.removeChild(t)};r.a.render(c.a.createElement(N,Object.assign({onClose:a},e)),t)}({})}},x,c.a.createElement("input",{className:"unlock-button",type:"submit",value:"Unlock!"})),g&&c.a.createElement(P,{onClose:function(){return b(!1)},step:a}))}var A={1:"mask",2:"black hole",3:"mix",4:"bat",5:"hakone",6:"23192",7:"cure",8:"space",9:"heal",10:"tatwamir"};function Y(e){Object(y.a)(e);return c.a.createElement("section",null,c.a.createElement("h1",{className:"font-fjalla"},"Orientation and Induction"),c.a.createElement("p",{className:"clue-text"},"The Defense Lab welcomes you to the orientation and induction session just as you begin your secret mission. Safety procols must be followed strictly during the mission. Solve the below mesage and find the answer. You will need to use the object in the answer correctly before stepping in the portal machine."),c.a.createElement("img",{src:a(48),alt:"clue1"}),c.a.createElement("div",{className:"password-container"},c.a.createElement(D,{solution:A[1],step:1})))}function U(e){Object(y.a)(e);return c.a.createElement("section",null,c.a.createElement("h1",{className:"font-fjalla"},"Clue 2"),c.a.createElement("p",{className:"clue-text"},"Beofre you go ahead, your posture and vission will be assesed by the medical officer using ths below sketch."),c.a.createElement("p",null,"Hint: esolc eno eye, tlit ruoy enohp dna kool ta siht morf eht s'enohp regrahc eloh"),c.a.createElement("img",{src:a(49),alt:"clue2"}),c.a.createElement("div",{className:"password-container"},c.a.createElement(D,{solution:A[2],step:2})))}function H(e){Object(y.a)(e);return c.a.createElement("section",null,c.a.createElement("h1",{className:"font-fjalla"},"Clue 3"),c.a.createElement("p",{className:"clue-text"},"The Defence Lab's Project Director has kept everything ready inside the time machine for you. As you eneter, you notice that below the control panel, there are 10 switches but not all the switches are turned on. You are told that the on/off pattern of switches represent a binary number. Can you decipher what the binary number is? From there, convert to roman numerals"),c.a.createElement("img",{src:a(50),alt:"clue1"}),c.a.createElement("div",{className:"password-container"},c.a.createElement(D,{solution:A[3],step:3})))}function R(e){var t=e.onClose;return c.a.createElement(w,{onClose:t},c.a.createElement("div",null,c.a.createElement("h1",null,"Sorry!"),c.a.createElement("p",null,"This level is locked. Please unlock the next clue.")))}function B(){var e=Array.from(Array(10).keys()),t=Object(d.b)(["lastSolvedClue"]),n=Object(s.a)(t,3),l=n[0],o=(n[1],n[2],l.lastSolvedClue);console.log("lastSolvedClue",o);var u=c.a.createElement("img",{src:a(51)}),i=c.a.createElement("img",{src:a(52)}),m=(Object(g.f)().history,function(e){return e<=o}),p=function(e,t){m(t)||function(e){var t=document.createElement("div");document.body.appendChild(t);var a=function(){r.a.unmountComponentAtNode(t),document.body.removeChild(t)};r.a.render(c.a.createElement(R,Object.assign({onClose:a},e)),t)}({})};return c.a.createElement("nav",{className:"nav"},c.a.createElement(b.c,{to:"/introduction"},"Introduction"),e.map((function(e){var t=e+1,a=m(t)?i:u,n=m(t)?"/clue".concat(t):"";return c.a.createElement(b.c,{key:"clue".concat(e),to:n,className:"nav-link-container",onClick:function(e){return p(0,t)}},c.a.createElement("div",{className:"nav-icon"},a),"Clue ",t)})))}function F(e){return Object(y.a)(e),c.a.createElement("section",{className:"section--hero"},c.a.createElement("div",{className:"flex_child--horizontal"},c.a.createElement("h1",{className:"font-fjalla"},"Introduction"),c.a.createElement("p",null,"This escape room is used to raise funds for SR Love and Care."),c.a.createElement(b.c,{className:"font-fjalla",to:"/clue1"},"Go to Clue 1 ->")))}var G=function(e){return e.shared.step};function V(e){Object(y.a)(e);return c.a.createElement("section",null,c.a.createElement("h1",{className:"font-fjalla"},"Clue 4"),c.a.createElement("p",{className:"clue-text"},"You enter the time machine and are on your way to the future. Then, you hear some voice on your reciever and it seems to be an alien language. What language is this? Or is it some kind of codeword?",c.a.createElement("br",null),c.a.createElement("br",null),"Hint: yalp oidua ni esrever"),c.a.createElement("audio",{controls:!0,src:a(53)}),c.a.createElement("div",{className:"password-container"},c.a.createElement(D,{solution:A[4],step:4})))}function X(e){Object(y.a)(e);return c.a.createElement("section",null,c.a.createElement("h1",{className:"font-fjalla"},"Clue 5"),c.a.createElement("p",{className:"clue-text"},"You have come thus far and now make a plan and choose where to go. Identify the below institues where you could find clues about the cure that you are looking for."),c.a.createElement("div",{className:"clue5-container"},c.a.createElement("div",{className:"clue5-img"},c.a.createElement("img",{src:a(54),alt:"clue51"})),c.a.createElement("div",{className:"clue5-img"},c.a.createElement("img",{src:a(55),alt:"clue52"})),c.a.createElement("div",{className:"clue5-img"},c.a.createElement("img",{src:a(56),alt:"clue53"}))),c.a.createElement("div",{className:"password-container"},c.a.createElement(D,{solution:A[5],step:5})))}function J(e){Object(y.a)(e);return c.a.createElement("section",null,c.a.createElement("h1",{className:"font-fjalla"},"Clue 6"),c.a.createElement("p",{className:"clue-text"},"You are finally here in Hakone, Japan after you got the lead that data about the virus cure can be obtained from this institude. But the entry to the lab is restricted. At the entrance, there is a message that you must decode to enter.",c.a.createElement("br",null),c.a.createElement("br",null),"Hint: Take a mirror selfie"),c.a.createElement("img",{src:a(57),alt:"clue6"}),c.a.createElement("div",{className:"password-container"},c.a.createElement(D,{solution:A[6],step:6})))}function W(e){Object(y.a)(e);return c.a.createElement("section",null,c.a.createElement("h1",{className:"font-fjalla"},"Clue 7"),c.a.createElement("p",{className:"clue-text"},"You have finally got access to the lab. You reach a workbench and find a notebook on the virus. You try to make sense of the numbers and the alphabets written next to each other in order to decode it."),c.a.createElement("img",{src:a(58),alt:"clue7"}),c.a.createElement("div",{className:"password-container"},c.a.createElement(D,{solution:A[7],step:7})))}function q(){return c.a.createElement("section",null,c.a.createElement("h1",{className:"font-fjalla"},"Clue 8"),c.a.createElement("p",{className:"clue-text"},"After accessing vault no 12, you have finally got your hands on the files that have detailed findings about the virus and the cure for it. You are now ready to come back into the present, but you need the authorization code to reset the time machine. Solve the below message with the help of the video sent to you by the command center."),c.a.createElement("img",{src:a(59),alt:"clue8"}),c.a.createElement("video",{controls:!0,src:a(60)}),c.a.createElement("div",{className:"password-container"},c.a.createElement(D,{solution:A[8],step:8})))}function z(e){Object(y.a)(e);return c.a.createElement("section",null,c.a.createElement("h1",{className:"font-fjalla"},"Clue 9"),c.a.createElement("p",{className:"clue-text"},"You have come thus far and now make a plan and choose where to go. Identify the below institues where you could find clues about the cure that you are looking for."),c.a.createElement("div",{className:"clue5-container"},c.a.createElement("div",{className:"clue5-img"},c.a.createElement("img",{src:a(61),alt:"clue51"})),c.a.createElement("div",{className:"clue5-img"},c.a.createElement("img",{src:a(62),alt:"clue52"})),c.a.createElement("div",{className:"clue5-img"},c.a.createElement("img",{src:a(63),alt:"clue53"}))),c.a.createElement("div",{className:"password-container"},c.a.createElement(D,{solution:A[9],step:9})))}function K(e){Object(y.a)(e);return c.a.createElement("section",null,c.a.createElement("h1",{className:"font-fjalla"},"Clue 10"),c.a.createElement("p",{className:"clue-text"},"Eventually, reearchers understood the missing ingredient that were needed to be added to the drugs clinically. Once you find their names, you need to go find these at home and mix all 4 together."),c.a.createElement("img",{src:a(64),alt:"clue7"}),c.a.createElement("div",{className:"password-container"},c.a.createElement(D,{solution:A[10],step:10})))}function M(e){var t=e.match;console.log("step",t);var a=Object(d.b)(["login"]),n=Object(s.a)(a,3),l=(n[0],n[1],n[2]),r=Object(o.b)(G);console.log(r);return c.a.createElement("div",{className:"App"},c.a.createElement("a",{className:"logout-link",onClick:function(){l("login",{path:"/"}),l("lastSolvedClue",{path:"/"}),E.shared.signOut((function(){l("login",{path:"/"}),l("lastSolvedClue",{path:"/"})}))}},"Log out"),c.a.createElement("h1",{className:"font-fjalla main-title"},"Welcome to the Coronovirus Lab"),c.a.createElement(B,null),t.params.step&&function(e){switch(e){case"introduction":return c.a.createElement(F,null);case"clue1":return c.a.createElement(Y,null);case"clue2":return c.a.createElement(U,null);case"clue3":return c.a.createElement(H,null);case"clue4":return c.a.createElement(V,null);case"clue5":return c.a.createElement(X,null);case"clue6":return c.a.createElement(J,null);case"clue7":return c.a.createElement(W,null);case"clue8":return c.a.createElement(q,null);case"clue9":return c.a.createElement(z,null);case"clue10":return c.a.createElement(K,null);default:return c.a.createElement(F,null)}}(t.params.step.toLowerCase()),!t.params.step&&c.a.createElement(F,null))}function Q(e){Object(y.a)(e);return c.a.createElement("section",null,c.a.createElement("h1",{className:"font-fjalla"},"Success!"))}function Z(e){e.match,e.location;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.b,{basename:"/"},c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/",component:M}),c.a.createElement(g.a,{exact:!0,path:"/success",component:Q}),c.a.createElement(g.a,{exact:!0,path:"/:step",component:M}),c.a.createElement(g.a,{path:"/:domain/:step",component:M}))))}var $=function(){var e=Object(d.b)(["login"]);return Object(s.a)(e,1)[0].login?c.a.createElement(b.a,null,c.a.createElement(g.c,null,c.a.createElement(g.a,{path:"/",component:Z}))):c.a.createElement(v,null)},ee=a(32),te=a.n(ee);r.a.render(c.a.createElement(d.a,null,c.a.createElement(o.a,{store:I},c.a.createElement($,null),c.a.createElement(te.a,{type:"text/javascript",url:"https://apis.google.com/js/platform.js"}))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.36755ad5.chunk.js.map
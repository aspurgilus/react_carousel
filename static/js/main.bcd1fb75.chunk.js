(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(7),s=n.n(i),a=n(2),c=n(3),r=n(5),o=n(4),l=n(1),p=n.n(l),u=(n(12),n(13),n(0)),m=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={swipeDistance:0},t.scrollToLeft=function(){t.setState((function(e){var n=t.props,i=n.step,s=n.itemWidth,a=i*s;return-e.swipeDistance<i*s&&(a=-e.swipeDistance),{swipeDistance:e.swipeDistance+a}}))},t.scrollToRight=function(){t.setState((function(e){var n=t.props,i=n.images,s=n.step,a=n.frameSize,c=n.itemWidth,r=s*c,o=c*i.length;return-e.swipeDistance>o-(s+a)*c&&(r=o+e.swipeDistance-a*c),{swipeDistance:e.swipeDistance-r}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.swipeDistance,e=this.props,n=e.images,i=e.frameSize,s=e.itemWidth,a=e.animationDuration,c={width:"".concat(i*s,"px")},r={width:"".concat(s*n.length,"px"),transform:"translateX(".concat(t,"px)"),transition:"transform ".concat(a,"ms")};return Object(u.jsxs)("div",{style:c,className:"Carousel",children:[Object(u.jsx)("ul",{style:r,className:"Carousel__list",children:n.map((function(t,e){return Object(u.jsx)("li",{children:Object(u.jsx)("img",{src:t,alt:(e+1).toString()})},t)}))}),Object(u.jsxs)("div",{className:"button-wrapper",children:[Object(u.jsx)("button",{className:"button-arrow",type:"button",disabled:0===t,onClick:this.scrollToLeft,children:"<"}),Object(u.jsx)("button",{className:"button-arrow",type:"button",disabled:t===-(s*n.length-i*s),onClick:this.scrollToRight,children:">"})]})]})}}]),n}(p.a.Component),g=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.images;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{children:["Carousel with ",t.length," images"]}),Object(u.jsx)(m,{images:t,step:3,frameSize:3,itemWidth:130,animationDuration:1e3})]})}}]),n}(p.a.Component),h=g;s.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bcd1fb75.chunk.js.map
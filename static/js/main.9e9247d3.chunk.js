(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(8),a=n.n(i),s=n(2),r=n(3),c=n(5),o=n(4),l=n(1),p=n.n(l),u=(n(13),n(7)),m=n.n(u),g=(n(14),n(0)),h=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={swipeDistance:0},t.scrollToLeft=function(){t.setState((function(e){var n=t.props,i=n.step,a=n.itemWidth,s=i*a;return-e.swipeDistance<i*a&&(s=-e.swipeDistance),{swipeDistance:e.swipeDistance+s}}))},t.scrollToRight=function(){t.setState((function(e){var n=t.props,i=n.images,a=n.step,s=n.frameSize,r=n.itemWidth,c=a*r,o=r*i.length;return-e.swipeDistance>o-(a+s)*r&&(c=o+e.swipeDistance-s*r),{swipeDistance:e.swipeDistance-c}}))},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.swipeDistance,e=this.props,n=e.images,i=e.frameSize,a=e.itemWidth,s=e.animationDuration,r={width:"".concat(i*a,"px")},c={width:"".concat(a*n.length,"px"),transform:"translateX(".concat(t,"px)"),transition:"transform ".concat(s,"ms")};return Object(g.jsxs)("div",{style:r,className:"Carousel",children:[Object(g.jsx)("ul",{style:c,className:"Carousel__list",children:n.map((function(t,e){return Object(g.jsx)("li",{children:Object(g.jsx)("img",{src:t,alt:(e+1).toString()})},t)}))}),Object(g.jsxs)("div",{className:"button-wrapper",children:[Object(g.jsx)("button",{className:m()("button-arrow",{"button-arrow--disabled":0===t}),type:"button",disabled:0===t,onClick:this.scrollToLeft,children:"<"}),Object(g.jsx)("button",{className:m()("button-arrow",{"button-arrow--disabled":t===-(a*n.length-i*a)}),type:"button",disabled:t===-(a*n.length-i*a),onClick:this.scrollToRight,children:">"})]})]})}}]),n}(p.a.Component),b=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.images;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("h1",{children:["Carousel with ",t.length," images"]}),Object(g.jsx)(h,{images:t,step:3,frameSize:3,itemWidth:130,animationDuration:1e3})]})}}]),n}(p.a.Component),d=b;a.a.render(Object(g.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9e9247d3.chunk.js.map
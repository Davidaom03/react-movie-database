(this["webpackJsonpreact-movie-database"]=this["webpackJsonpreact-movie-database"]||[]).push([[0],{35:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,d,u,b,h,j,l,p,x,m,f,g,v,O,w,y,k,S,_,T,z=t(1),E=t.n(z),I=t(19),N=t.n(I),G=t(10),M=t(2),C=t(3),W=t(4),B=Object(W.a)(r||(r=Object(C.a)(["\n    :root {\n        --maxWidth: 1280px;\n        --white: #fff;\n        --lightGrey: #eee;\n        --medGrey: #353535;\n        --darkGrey: #1c1c1c;\n        --fontSuperBig: 2.5rem;\n        --fontBig: 1.5rem;\n        --fontMed: 1.2rem;\n        --fontSmall: 1rem;\n    }\n\n    * {\n        box-sizing: border-box;\n        font-family: 'Abel', sans-serif;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n\n        h1 {\n            font-size: 2rem;\n            font-weight: 600;\n            color: var(--white);\n        }\n\n        h3 {\n            font-size: 1.1rem;\n            font-weight: 600;\n        }\n\n        h1 {\n            font-size: 1rem;\n            color: var(--white);\n        }\n    }\n"]))),R=t.p+"static/media/react-movie-logo.42955eb6.svg",D=t.p+"static/media/tmdb_logo.f15b6632.svg",P=W.b.div(a||(a=Object(C.a)(["\n    background: var(--darkGrey);\n    padding: 0 20px;\n"]))),A=W.b.div(c||(c=Object(C.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: var(--maxWidth);\n    padding: 20px 0;\n    margin: 0 auto;\n"]))),F=W.b.img(i||(i=Object(C.a)(["\n    width: 200px;\n    @media screen and (max-width: 500px){\n        width: 150px;\n    }\n"]))),J=W.b.img(o||(o=Object(C.a)(["\n    width: 100px;\n    @media screen and (max-width: 500px){\n        width: 80px;\n    }\n"]))),U=t(23),H=t(24),L=t(26),q=t(25),K=t(0),V=function(n){Object(L.a)(t,n);var e=Object(q.a)(t);function t(n){var r;return Object(U.a)(this,t),(r=e.call(this,n)).state={hasError:!1,error:"",errorInfo:""},r}return Object(H.a)(t,[{key:"componentDidCatch",value:function(n,e){this.setState({error:n,errorInfo:e}),console.log(n,e)}},{key:"render",value:function(){return this.state.hasError?Object(K.jsxs)("div",{children:[Object(K.jsx)("h1",{children:"Something went terribly wrong."}),Object(K.jsxs)("details",{children:[this.state.error&&this.state.error.toString(),Object(K.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(n){return{hasError:!0}}}]),t}(E.a.Component),Y=function(){return Object(K.jsx)(P,{children:Object(K.jsxs)(A,{children:[Object(K.jsx)(V,{children:Object(K.jsx)(G.b,{to:"/",children:Object(K.jsx)(F,{src:R,alt:"rmdb-logo"})})}),Object(K.jsx)(V,{children:Object(K.jsx)(G.b,{to:"/",children:Object(K.jsx)(J,{src:D,alt:"rmdb-logo"})})})]})})},Q="https://api.themoviedb.org/3/",X=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,Z="".concat(Q,"search/movie?api_key=").concat(X,"&language=en-US&query="),$="".concat(Q,"movie/popular?api_key=").concat(X,"&language=en-US"),nn="".concat(Q,"authentication/token/new?api_key=").concat(X),en="".concat(Q,"authentication/token/validate_with_login?api_key=").concat(X),tn="".concat(Q,"authentication/session/new?api_key=").concat(X),rn="http://image.tmdb.org/t/p/",an="w1280",cn="w780",on=t(5),sn=t.n(on),dn=t(15),un=t(8),bn=t(9),hn=t(6),jn={method:"POST",headers:{"Content-Type":"application/json"}},ln={fetchMovies:function(){var n=Object(bn.a)(sn.a.mark((function n(e,t){var r;return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e?"".concat(Z).concat(e,"&page=").concat(t):"".concat($,"&page=").concat(t),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),fetchMovie:function(){var n=Object(bn.a)(sn.a.mark((function n(e){var t;return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(Q,"movie/").concat(e,"?api_key=").concat(X),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),fetchCredits:function(){var n=Object(bn.a)(sn.a.mark((function n(e){var t;return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(Q,"movie/").concat(e,"/credits?api_key=").concat(X),n.next=3,fetch(t);case 3:return n.next=5,n.sent.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getRequestToken:function(){var n=Object(bn.a)(sn.a.mark((function n(){var e;return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(nn);case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,n.abrupt("return",e.request_token);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),authenticate:function(){var n=Object(bn.a)(sn.a.mark((function n(e,t,r){var a,c;return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={username:t,password:r,request_token:e},n.next=3,fetch(en,Object(un.a)(Object(un.a)({},jn),{},{body:JSON.stringify(a)}));case 3:return n.next=5,n.sent.json();case 5:if(!n.sent.success){n.next=13;break}return n.next=9,fetch(tn,Object(un.a)(Object(un.a)({},jn),{},{body:JSON.stringify({request_token:e})}));case 9:return n.next=11,n.sent.json();case 11:return c=n.sent,n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),rateMovie:function(){var n=Object(bn.a)(sn.a.mark((function n(e,t,r){var a,c;return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="".concat(Q,"movie/").concat(t,"/rating?api_key=").concat(X,"&session_id=").concat(e),n.next=3,fetch(a,Object(un.a)(Object(un.a)({},jn),{},{body:JSON.stringify({value:r})}));case 3:return n.next=5,n.sent.json();case 5:return c=n.sent,n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},pn=ln,xn=function(n){var e=Math.floor(n/60),t=n%60;return"".concat(e,"h ").concat(t,"m")},mn=function(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(n)},fn=function(n){var e=sessionStorage.getItem(n);return e&&JSON.parse(e)},gn={page:0,results:[],total_pages:0,total_results:0},vn=t.p+"static/media/no_image.22d2aa4d.jpg",On=W.b.div(s||(s=Object(C.a)(["\n    background: linear-gradient(\n        to bottom, rgba(0,0,0,0)\n        41%, rgba(0,0,0,0.65)\n        100%\n    ),\n    url(","), var(--darkGrey);\n    background-size: 100%, cover;\n    background-position: center;\n    height: 600px;\n    position: relative;\n    animation: animateHeroImage 1s;\n\n    @keyframes animateHeroImage {\n        from {\n            opacity: 0;\n        }\n        to {\n            opacity: 1;\n        }\n    }\n"])),(function(n){return n.image})),wn=W.b.div(d||(d=Object(C.a)(["\n    padding: 20px;\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n"]))),yn=W.b.div(u||(u=Object(C.a)(["\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right: 20px;\n    min-height: 100px;\n    color: var(--white);\n\n    h1 {\n        font-size: var(--fontSuperBig);\n\n        @media screen and (max-width: 720px){\n            font-size: var(--fontBig);\n        }\n    }\n\n    p {\n        font-size: var(--fontMed);\n\n        @media screen and (max-width: 720px){\n            font-size: var(--fontSmall);\n        }\n    }\n\n    @media screen and (max-width: 720px){\n        max-width: 100;\n    }\n\n"]))),kn=function(n){var e=n.image,t=n.title,r=n.text;return Object(K.jsx)(On,{image:e,children:Object(K.jsx)(wn,{children:Object(K.jsxs)(yn,{children:[Object(K.jsx)("h1",{children:t}),Object(K.jsx)("p",{children:r})]})})})},Sn=W.b.div(b||(b=Object(C.a)(["\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n    padding: 0 20px;\n    h1 {\n        color: var(--medGrey);\n\n        @media screen and (max-width: 768px){\n            font-size: var(--fontBig);\n        }\n    }\n"]))),_n=W.b.div(h||(h=Object(C.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 2rem;\n"]))),Tn=function(n){var e=n.header,t=n.children;return Object(K.jsxs)(Sn,{children:[Object(K.jsx)("h1",{children:e}),Object(K.jsx)(_n,{children:t})]})},zn=W.b.div(j||(j=Object(C.a)(["\n    border: 5px solid var(--lightGrey);\n    border-top: 5px solid var(--medGrey);\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    animation: spin 0.8s linear infinite;\n    margin: 20px auto;\n\n    @keyframes spin {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"]))),En=t.p+"static/media/search-icon.cd820f5a.svg",In=W.b.div(l||(l=Object(C.a)(["\n    display: flex;\n    align-items: center;\n    height: 100px;\n    background: var(--darkGrey);\n    padding: 0 20px;\n"]))),Nn=W.b.div(p||(p=Object(C.a)(["\n    position: relative;\n    max-width: var(--maxWidth);\n    width: 100%;\n    height: 55px;\n    background: var(--medGrey);\n    margin: 0 auto;\n    border-radius: 40px;\n    color: var(--white);\n\n    img {\n        position: absolute;\n        left: 15px; \n        top: 14px;\n        width: 30px;\n    }\n\n    input {\n        font-size: 28px;\n        position: absolute;\n        left: 0px;\n        margin: 8px 0;\n        padding: 0 0 0 60px;\n        border: 0;\n        width: 95%;\n        background: transparent;\n        height: 40px;\n        color: var(--white);\n\n        :focus {\n            outline: none;\n        }\n    }\n\n    @media screen and (max-width: 720px){\n        input { font-size: 22px; }\n    }\n\n    @media screen and (max-width: 480px){\n        input { font-size: 18px; }\n    }\n\n"]))),Gn=function(n){var e=n.setSearchTerm,t=Object(z.useState)(""),r=Object(hn.a)(t,2),a=r[0],c=r[1],i=Object(z.useRef)(!0);return Object(z.useEffect)((function(){if(!i.current){var n=setTimeout((function(){e(a)}),500);return function(){return clearTimeout(n)}}i.current=!1}),[e,a]),Object(K.jsx)(In,{children:Object(K.jsxs)(Nn,{children:[Object(K.jsx)("img",{src:En,alt:"search-icon"}),Object(K.jsx)("input",{type:"text",placeholder:"Search Movie",onChange:function(n){return c(n.currentTarget.value)},value:a})]})})},Mn=W.b.button(x||(x=Object(C.a)(["\n    display: block;\n    background: var(--darkGrey);\n    width: 25%;\n    min-width: 200px;\n    height: 60px;\n    border-radius: 30px;\n    color: var(--white);\n    border: 0;\n    font-size: var(--fontBig);\n    margin: 20px auto;\n    transition: all 0.3s;\n    outline: none;\n    cursor: pointer;\n\n    :hover {\n        opacity: 0.8;\n    }\n"]))),Cn=function(n){var e=n.text,t=n.callBack;return Object(K.jsx)(Mn,{type:"button",onClick:t,children:e})},Wn=t(12),Bn=W.b.p(m||(m=Object(C.a)(["\n    font-size: var(--fontMed);\n    color: var(--medGrey);\n    font-weight: bold;\n    position: relative;\n    text-align: center;\n    //margin-top: 0px;\n"]))),Rn=W.b.img(f||(f=Object(C.a)(["\n    width: 100%;\n    max-width: 480px;\n    transition: all 0.3s;\n    object-fit: cover;\n    border-radius: 20px;\n    animation: animateThumb 0.5s;\n\n    :hover {\n        opacity: 0.8;\n    }\n\n    @keyframes animateThumb {\n        from{\n            opacity: 0;\n        }\n        to {\n            opacity: 1;\n        }\n    }\n"]))),Dn=function(n){var e=n.image,t=n.movieName,r=n.movieId,a=n.clickable;return Object(K.jsx)("div",{children:a?Object(K.jsxs)(G.b,{to:"/".concat(r),children:[Object(K.jsx)(Rn,{src:e,alt:"movie-thumb"}),Object(K.jsx)(Bn,{children:t})]}):Object(K.jsxs)(z.Fragment,{children:[Object(K.jsx)(Rn,{src:e,alt:"movie-thumb"}),Object(K.jsx)(Bn,{children:t})]})})},Pn=function(){var n=function(){var n=Object(z.useState)(""),e=Object(hn.a)(n,2),t=e[0],r=e[1],a=Object(z.useState)(!1),c=Object(hn.a)(a,2),i=c[0],o=c[1],s=Object(z.useState)(!1),d=Object(hn.a)(s,2),u=d[0],b=d[1],h=Object(z.useState)(gn),j=Object(hn.a)(h,2),l=j[0],p=j[1],x=Object(z.useState)(!1),m=Object(hn.a)(x,2),f=m[0],g=m[1],v=function(){var n=Object(bn.a)(sn.a.mark((function n(e){var t,r,a=arguments;return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"",n.prev=1,o(!1),b(!0),n.next=6,pn.fetchMovies(t,e);case 6:r=n.sent,p((function(n){return Object(un.a)(Object(un.a)({},r),{},{results:e>1?[].concat(Object(dn.a)(n.results),Object(dn.a)(r.results)):Object(dn.a)(r.results)})})),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0),o(!0);case 14:return n.prev=14,b(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,10,14,17]])})));return function(e){return n.apply(this,arguments)}}();return console.log(l),Object(z.useEffect)((function(){if(!t){var n=fn("homeState");if(n)return console.log("Grabbing from Session Storage"),void p(n)}console.log("Grabbing from API"),p(gn),v(1,t)}),[t]),Object(z.useEffect)((function(){f&&(v(l.page+1,t),g(!1))}),[f,t,l.page]),Object(z.useEffect)((function(){t||sessionStorage.setItem("homeState",JSON.stringify(l))}),[t,l]),{state:l,loading:u,error:i,searchTerm:t,setSearchTerm:r,setLoadMore:g}}(),e=n.state,t=n.loading,r=n.error,a=n.searchTerm,c=n.setSearchTerm,i=n.setLoadMore;return r?Object(K.jsx)("div",{children:"Something Went Wrong . . ."}):Object(K.jsxs)(K.Fragment,{children:[!a&&e.results[0]?Object(K.jsx)(kn,{image:"".concat(rn).concat(an).concat(e.results[0].backdrop_path),title:e.results[0].original_title,text:e.results[0].overview}):null,Object(K.jsx)(Gn,{setSearchTerm:c}),Object(K.jsx)(Tn,{header:a?"Search Term: ":"Popular Movies",children:e.results.map((function(n){return Object(K.jsx)(Dn,{movieName:n.title,clickable:!0,image:n.poster_path?rn+cn+n.poster_path:vn,movieId:n.id},Object(Wn.a)())}))}),t&&Object(K.jsx)(zn,{}),e.page<e.total_pages&&!t&&Object(K.jsx)(Cn,{text:"Load More",callBack:function(){return i(!0)}})]})},An=function(){return Object(K.jsx)("div",{children:"Not Found"})},Fn=W.b.div(g||(g=Object(C.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 70px;\n    background: var(--medGrey);\n    color: var(--withe);\n"]))),Jn=W.b.div(v||(v=Object(C.a)(["\n    display: flex;\n    width: 100%;\n    max-width: var(--maxWidth);\n    padding: 0 3%;\n\n    span {\n        font-size: var(--fontMed);\n        color: var(--white);\n        padding-right: 10px;\n\n        @media screen and (max-width: 768px){\n            font-size: var(--fontSmall);\n            padding-right: 5px;\n        }\n\n        @media screen and (max-width: 500px){\n            margin-left: 2%;\n        }\n    }\n"]))),Un=function(n){var e=n.movieTitle;return Object(K.jsx)(Fn,{children:Object(K.jsxs)(Jn,{children:[Object(K.jsx)(G.b,{to:"/",children:Object(K.jsx)("span",{children:"Home"})}),Object(K.jsx)("span",{children:"|"}),Object(K.jsx)("span",{children:e})]})})},Hn=W.b.div(O||(O=Object(C.a)(["\n    background: ",";\n        background-size: cover;\n        background-position: center;\n        padding: 40px 20px;\n        animation: animateMovieInfo 1s;\n\n        @keyframes animateMovieInfo {\n            from {\n                opacity: 0;\n            }\n            to {\n                opacity: 1;\n            }\n        }\n"])),(function(n){var e=n.backdrop;return e?"url(".concat(rn).concat(an).concat(e,")"):"#000"})),Ln=W.b.div(w||(w=Object(C.a)(["\n    display: flex;\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n    background: rgba(0, 0, 0, 0.7);\n    border-radius: 20px;\n\n    @media screen and (max-width: 768px){\n        display: block;\n        max-height: none;\n        max-width: 480px;\n\n        h1 {\n            margin-top: 0;\n        }\n    }\n\n    @media screen and (max-width: 420px){\n        max-width: 320px;\n    }\n\n"]))),qn=W.b.div(y||(y=Object(C.a)(["\n    width: 100%;\n    padding: 20px 40px;\n    color: var(--white);\n    overflow: hidden;\n\n    .rating-directors {\n        display: flex;\n        justify-content: flex-start;\n    }\n\n    .score {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 35px;\n        height: 35px;\n        background: var(--white);\n        color: #000;\n        font-weight: 800;\n        border-radius: 50%;\n        margin: 0;\n    }\n\n\n    @media screen and (max-width: 420px){\n        h1 {\n            font-size: var(--fontMed);\n        }\n        \n        p, h3 {\n            font-size: var(--fontSmall);\n        }\n    }\n\n    .director {\n        margin: 0 0 0 40px;\n\n        p {\n            margin: 0;\n        }\n\n        h1 {\n            @media screen and (max-width: 768px){\n                font-size: var(--fontBig);\n            }\n        }\n    }\n"]))),Kn=function(n){var e=n.movie;return Object(K.jsx)(Hn,{backdrop:e.backdrop_path,children:Object(K.jsxs)(Ln,{children:[Object(K.jsx)(Dn,{className:"thumb",image:e.poster_path?"".concat(rn).concat(cn).concat(e.poster_path):vn,clickable:!1,alt:"movie-thumb"}),Object(K.jsxs)(qn,{children:[Object(K.jsx)("h1",{children:e.title}),Object(K.jsx)("h3",{children:"PLOT"}),Object(K.jsx)("p",{children:e.overview}),Object(K.jsxs)("div",{className:"rating-directors",children:[Object(K.jsxs)("div",{children:[Object(K.jsx)("h3",{children:"RATING"}),Object(K.jsx)("div",{className:"score",children:e.vote_average})]}),Object(K.jsxs)("div",{className:"director",children:[Object(K.jsxs)("h3",{children:["DIRECTOR",e.directors.length>1?"S":""]}),Object(K.jsx)("div",{children:e.directors.map((function(n){return Object(K.jsx)("p",{children:n.name},Object(Wn.a)())}))})]})]})]})]})})},Vn=W.b.div(k||(k=Object(C.a)(["\n    display: flex;\n    align-items: center;\n    min-height: 100px;\n    background: var(--darkGrey);\n    padding: 0 20px;\n"]))),Yn=W.b.div(S||(S=Object(C.a)(["\n    display: flex;\n    max-width: var(--maxWidth);\n    width: 100%;\n    margin: 0 auto;\n    color: var(--white);\n\n    .column {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: var(--medGrey);\n        border-radius: 20px;\n        margin: 0 20px;\n        flex: 1;\n\n        :first-child {\n            margin-left: 0;\n        }\n        :last-child {\n            margin-right: 0;\n        }\n    }\n\n    @media screen and (max-width: 768px) {\n        display: block;\n        .column {\n            margin: 20px 0;\n        }\n    }\n"]))),Qn=function(n){var e=n.time,t=n.budget,r=n.revenue;return Object(K.jsx)(Vn,{children:Object(K.jsxs)(Yn,{children:[Object(K.jsx)("div",{className:"column",children:Object(K.jsxs)("p",{children:["Running time: ",xn(e)]})}),Object(K.jsx)("div",{className:"column",children:Object(K.jsxs)("p",{children:["Budget: ",mn(t)]})}),Object(K.jsx)("div",{className:"column",children:Object(K.jsxs)("p",{children:["Revenue: ",mn(r)]})})]})})},Xn=W.b.div(_||(_=Object(C.a)(["\n    color: var(--white);\n    background: var(--darkGrey);\n    border-radius: 20px;\n    padding: 5px;\n    text-align: center;\n\n    h3 {\n        margin: 10px 0 0 0;\n    }\n\n    p {\n        margin: 5px 0;\n    }\n\n    @media screen and (max-width: 500px){\n        margin: 0 20%;\n    }\n"]))),Zn=W.b.img(T||(T=Object(C.a)(["\n    display: block;\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 15px;\n"]))),$n=function(n){var e=n.name,t=n.character,r=n.imageUrl;return Object(K.jsxs)(Xn,{children:[Object(K.jsx)(Zn,{src:r,alt:"actor-thumb"}),Object(K.jsx)("h3",{children:e}),Object(K.jsx)("p",{children:t})]})},ne=function(){var n=function(n){var e=Object(z.useState)({}),t=Object(hn.a)(e,2),r=t[0],a=t[1],c=Object(z.useState)(!0),i=Object(hn.a)(c,2),o=i[0],s=i[1],d=Object(z.useState)(!1),u=Object(hn.a)(d,2),b=u[0],h=u[1];return Object(z.useEffect)((function(){var e=function(){var e=Object(bn.a)(sn.a.mark((function e(){var t,r,c;return sn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!1),s(!0),e.next=5,pn.fetchMovie(n);case 5:return t=e.sent,e.next=8,pn.fetchCredits(n);case 8:r=e.sent,c=r.crew.filter((function(n){return"Director"===n.job})),a(Object(un.a)(Object(un.a)({},t),{},{actors:r.cast,directors:c})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),h(!0);case 16:return e.prev=16,s(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}(),t=fn(n);if(t)return a(t),void s(!1);e()}),[n]),Object(z.useEffect)((function(){sessionStorage.setItem(n,JSON.stringify(r))}),[n,r]),{state:r,loading:o,error:b}}(Object(M.g)().movieId),e=n.state,t=n.loading,r=n.error;return t?Object(K.jsx)(zn,{}):r?Object(K.jsx)("div",{children:"Something went wrong . . ."}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(Un,{movieTitle:e.original_title}),Object(K.jsx)(Kn,{movie:e}),Object(K.jsx)(Qn,{time:e.runtime,budget:e.budget,revenue:e.revenue}),Object(K.jsx)(Tn,{header:"Actors",children:e.actors.map((function(n){return Object(K.jsx)($n,{name:n.name,character:n.character,imageUrl:n.profile_path?"".concat(rn).concat(cn).concat(n.profile_path):vn},Object(Wn.a)())}))})]})},ee=function(){return Object(K.jsxs)(G.a,{children:[Object(K.jsx)(Y,{}),Object(K.jsxs)(M.c,{children:[Object(K.jsx)(M.a,{path:"/",element:Object(K.jsx)(Pn,{})}),Object(K.jsx)(M.a,{path:"/*",element:Object(K.jsx)(An,{})}),Object(K.jsx)(M.a,{path:"/:movieId/",element:Object(K.jsx)(ne,{})})]}),Object(K.jsx)(B,{})]})};N.a.render(Object(K.jsx)(E.a.StrictMode,{children:Object(K.jsx)(ee,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.66189f30.chunk.js.map
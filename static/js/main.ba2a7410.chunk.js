(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{34:function(e,t,a){e.exports=a(67)},39:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),o=a.n(s),c=a(9),i=a(6);a(39);var m=function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))},l=a(11),u=a.n(l),v=a(25),p=a(26),d=a(27),f=a(32),E=a(28),h=a(33),_=a(29),g=a.n(_);a(58);var y=function(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",{className:"genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie__genres"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,100),"...")))},b=(a(59),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(s)))).state={isLoading:!0,movies:[]},a.getMovies=Object(v.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a.renderMovies=function(){return a.state.movies.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state.isLoading;return r.a.createElement("section",{className:"container"},e?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},'"Loading..."')):r.a.createElement("div",{className:"movies"},this.renderMovies()))}}]),t}(r.a.Component));a(60);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))};a(66);var w=function(){return r.a.createElement(c.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:b}),r.a.createElement(i.a,{path:"/about",component:m}))};o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ba2a7410.chunk.js.map
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{3200:function(e,s,a){a.r(s);var i=a(7437),r=a(2265);s.default=()=>{let[e,s]=(0,r.useState)([]),[a,l]=(0,r.useState)([]),[t,n]=(0,r.useState)(!0);if((0,r.useEffect)(()=>{fetch("/movies.json").then(e=>e.json()).then(e=>{s(e.movies),l(Array.from(new Set(e.movies.map(e=>e.disasterType)))),n(!1)}).catch(e=>{console.error("Error fetching movie data:",e),n(!1)})},[]),t)return(0,i.jsx)("div",{className:"loading",children:"Loading..."});let c=Array.from({length:Math.ceil((Math.max(...e.map(e=>e.year))-1930)/10)},(e,s)=>1930+10*s),d=e=>{let s=a.indexOf(e)*(360/a.length);return"hsl(".concat(s,", 70%, 50%)")},h=a.reduce((s,a)=>(s[a]=e.filter(e=>e.disasterType===a).length,s),{}),m=a.sort((e,s)=>h[s]-h[e]),o=e=>"number"==typeof e?e.toFixed(1):e;return(0,i.jsxs)("div",{className:"disaster-movie-timeline",children:[(0,i.jsx)("h1",{children:"Disaster Movie Timeline"}),(0,i.jsx)("div",{className:"decades-container",children:c.map(s=>(0,i.jsxs)("div",{className:"decade",children:[(0,i.jsxs)("div",{className:"decade-label",children:[s,"s"]}),(0,i.jsx)("div",{className:"year-columns",children:Array.from({length:10},(e,a)=>s+a).map(s=>(0,i.jsxs)("div",{className:"year-column",children:[(0,i.jsx)("div",{className:"year-label",children:s}),(0,i.jsx)("div",{className:"movie-dots",children:e.filter(e=>e.year===s).map((e,s)=>(0,i.jsx)("div",{className:"movie-dot",style:{backgroundColor:d(e.disasterType),width:"".concat(Math.max(8,Math.min(24,2*Number(e.rating))),"px"),height:"".concat(Math.max(8,Math.min(24,2*Number(e.rating))),"px")},children:(0,i.jsxs)("div",{className:"movie-info",children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsxs)("p",{children:["Year: ",e.year]}),(0,i.jsxs)("p",{children:["Type: ",e.disasterType]}),(0,i.jsxs)("p",{children:["Rating: ",o(e.rating),"/10"]})]})},e.title))})]},s))})]},s))}),(0,i.jsxs)("div",{className:"legend",children:[(0,i.jsxs)("h3",{children:["Disaster Types (Total: ",e.length,")"]}),(0,i.jsx)("div",{className:"legend-items",children:m.map(e=>(0,i.jsxs)("div",{className:"legend-item",children:[(0,i.jsx)("div",{className:"legend-color",style:{backgroundColor:d(e)}}),(0,i.jsxs)("span",{children:[e,": ",h[e]]})]},e))})]})]})}}}]);
import{S as w,i as D,s as V,e as _,k as v,t as q,c as g,a as m,m as x,h as y,d as u,b as f,M as b,g as k,J as d,j as M,K as E,N as S}from"../../chunks/vendor-9cc49281.js";function I(i,t,a){const c=i.slice();return c[1]=t[a],c}function j(i){let t,a,c,l,e,r=i[1].name+"",s,n;return{c(){t=_("div"),a=_("img"),l=v(),e=_("p"),s=q(r),n=v(),this.h()},l(h){t=g(h,"DIV",{class:!0});var o=m(t);a=g(o,"IMG",{class:!0,src:!0,alt:!0}),l=x(o),e=g(o,"P",{class:!0});var p=m(e);s=y(p,r),p.forEach(u),n=x(o),o.forEach(u),this.h()},h(){f(a,"class","w-56 h-44 object-cover rounded-2xl border-4"),b(a.src,c=i[1].picture)||f(a,"src",c),f(a,"alt",""),f(e,"class","text-white font-bold text-3xl text-center"),f(t,"class","flex flex-col justify-between items-center gap-4 h-7/12")},m(h,o){k(h,t,o),d(t,a),d(t,l),d(t,e),d(e,s),d(t,n)},p(h,o){o&1&&!b(a.src,c=h[1].picture)&&f(a,"src",c),o&1&&r!==(r=h[1].name+"")&&M(s,r)},d(h){h&&u(t)}}}function C(i){let t,a,c=i[0],l=[];for(let e=0;e<c.length;e+=1)l[e]=j(I(i,c,e));return{c(){t=_("div"),a=_("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=g(e,"DIV",{class:!0});var r=m(t);a=g(r,"DIV",{class:!0});var s=m(a);for(let n=0;n<l.length;n+=1)l[n].l(s);s.forEach(u),r.forEach(u),this.h()},h(){f(a,"class","grid grid-cols-1 md:grid-cols-3 gap-10"),f(t,"class","p-10")},m(e,r){k(e,t,r),d(t,a);for(let s=0;s<l.length;s+=1)l[s].m(a,null)},p(e,[r]){if(r&1){c=e[0];let s;for(s=0;s<c.length;s+=1){const n=I(e,c,s);l[s]?l[s].p(n,r):(l[s]=j(n),l[s].c(),l[s].m(a,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=c.length}},i:E,o:E,d(e){e&&u(t),S(l,e)}}}function F(i,t,a){let{gifs:c}=t;return i.$$set=l=>{"gifs"in l&&a(0,c=l.gifs)},[c]}class J extends w{constructor(t){super();D(this,t,F,C,V,{gifs:0})}}export{J as default};
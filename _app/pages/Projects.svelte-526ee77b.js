import{S as ae,i as ie,s as fe,l as ee,g as z,d,e as p,t as S,k as K,c as b,a as k,h as B,m as L,b as u,M as te,J as _,N as le,j as C,K as oe,O as he,P as ue,v as _e,L as de,w as ge,x as me,y as ve,z as pe,A as be,q as N,o as F,B as ke,p as we,C as je,n as Ee}from"../chunks/vendor-9269c6a4.js";import{d as Q}from"../chunks/data-74c7af95.js";function se(r,e,o){const s=r.slice();return s[14]=e[o],s[16]=o,s}function ye(r){let e,o=r[14]+"",s;return{c(){e=p("p"),s=S(o),this.h()},l(t){e=b(t,"P",{class:!0});var l=k(e);s=B(l,o),l.forEach(d),this.h()},h(){u(e,"class","forward font-bold text-3xl opacity-50 w-52 svelte-1p32xp7")},m(t,l){z(t,e,l),_(e,s)},p(t,l){l&32&&o!==(o=t[14]+"")&&C(s,o)},d(t){t&&d(e)}}}function xe(r){let e,o=r[14]+"",s;return{c(){e=p("p"),s=S(o),this.h()},l(t){e=b(t,"P",{class:!0});var l=k(e);s=B(l,o),l.forEach(d),this.h()},h(){u(e,"class","backward font-bold text-2xl opacity-70 w-52 svelte-1p32xp7")},m(t,l){z(t,e,l),_(e,s)},p(t,l){l&32&&o!==(o=t[14]+"")&&C(s,o)},d(t){t&&d(e)}}}function ne(r){let e;function o(l,n){return l[16]%2==0?xe:ye}let t=o(r)(r);return{c(){t.c(),e=ee()},l(l){t.l(l),e=ee()},m(l,n){t.m(l,n),z(l,e,n)},p(l,n){t.p(l,n)},d(l){t.d(l),l&&d(e)}}}function Pe(r){let e,o,s,t,l,n,a,c,g,P,j,I,w,y,D,q,i,E,O,x,G,H,R,U,V=r[5],m=[];for(let f=0;f<V.length;f+=1)m[f]=ne(se(r,V,f));return{c(){e=p("div"),o=p("a"),s=p("div"),t=p("h1"),l=S(r[0]),n=K(),a=p("div"),c=p("div"),g=p("img"),I=K(),w=p("div"),y=p("p"),D=S(r[3]),q=K(),i=p("p"),E=S(r[4]),O=K(),x=p("div");for(let f=0;f<m.length;f+=1)m[f].c();this.h()},l(f){e=b(f,"DIV",{class:!0});var v=k(e);o=b(v,"A",{href:!0});var h=k(o);s=b(h,"DIV",{class:!0});var A=k(s);t=b(A,"H1",{class:!0});var W=k(t);l=B(W,r[0]),W.forEach(d),A.forEach(d),n=L(h),a=b(h,"DIV",{class:!0});var M=k(a);c=b(M,"DIV",{class:!0});var X=k(c);g=b(X,"IMG",{width:!0,height:!0,src:!0,alt:!0}),X.forEach(d),I=L(M),w=b(M,"DIV",{class:!0});var J=k(w);y=b(J,"P",{class:!0});var Y=k(y);D=B(Y,r[3]),Y.forEach(d),q=L(J),i=b(J,"P",{class:!0});var Z=k(i);E=B(Z,r[4]),Z.forEach(d),J.forEach(d),O=L(M),x=b(M,"DIV",{id:!0});var $=k(x);for(let T=0;T<m.length;T+=1)m[T].l($);$.forEach(d),M.forEach(d),h.forEach(d),v.forEach(d),this.h()},h(){u(t,"class","font-bold text-2xl m-5"),u(s,"class","flex justify-between w-full"),u(g,"width",95),u(g,"height",95),te(g.src,P=`/portfolio/isometric/${r[2]}`)||u(g,"src",P),u(g,"alt",j=`${r[2]} logo`),u(c,"class","flex justify-center items-center w-20 h-20 m-4"),u(y,"class","font-bold text-4xl opacity-90 w-56"),u(i,"class","opacity-80 w-52"),u(w,"class","flex flex-col gap-2 m-4"),u(x,"id","test"),u(a,"class","flex flex-col gap-5 overflow-hidden box-border"),u(o,"href",G=`./project/${r[0]}`),u(e,"class",H=r[1]+" text-white box-border overflow-hidden h-screen lg:h-auto svelte-1p32xp7")},m(f,v){z(f,e,v),_(e,o),_(o,s),_(s,t),_(t,l),_(o,n),_(o,a),_(a,c),_(c,g),_(a,I),_(a,w),_(w,y),_(y,D),_(w,q),_(w,i),_(i,E),_(a,O),_(a,x);for(let h=0;h<m.length;h+=1)m[h].m(x,null);r[10](x),R||(U=[le(e,"mouseover",r[11]),le(e,"mouseout",r[12])],R=!0)},p(f,[v]){if(v&1&&C(l,f[0]),v&4&&!te(g.src,P=`/portfolio/isometric/${f[2]}`)&&u(g,"src",P),v&4&&j!==(j=`${f[2]} logo`)&&u(g,"alt",j),v&8&&C(D,f[3]),v&16&&C(E,f[4]),v&32){V=f[5];let h;for(h=0;h<V.length;h+=1){const A=se(f,V,h);m[h]?m[h].p(A,v):(m[h]=ne(A),m[h].c(),m[h].m(x,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=V.length}v&1&&G!==(G=`./project/${f[0]}`)&&u(o,"href",G),v&2&&H!==(H=f[1]+" text-white box-border overflow-hidden h-screen lg:h-auto svelte-1p32xp7")&&u(e,"class",H)},i:oe,o:oe,d(f){f&&d(e),he(m,f),r[10](null),R=!1,ue(U)}}}function Ie(r,e,o){let{name:s}=e,{color:t}=e,{icon:l}=e,{description:n}=e,{content:a}=e,{tags:c}=e,{technologies:g}=e,{link:P}=e,j,I=!1;_e(()=>{Array.from(j.children).map(i=>{let E=w(20,15);i.style.setProperty("--animation-time",E)})});const w=(i,E)=>String(Math.trunc(Math.random()*(i-E)+E))+"s";function y(i){de[i?"unshift":"push"](()=>{j=i,o(6,j)})}const D=()=>{o(7,I=!0)},q=()=>{o(7,I=!1)};return r.$$set=i=>{"name"in i&&o(0,s=i.name),"color"in i&&o(1,t=i.color),"icon"in i&&o(2,l=i.icon),"description"in i&&o(3,n=i.description),"content"in i&&o(4,a=i.content),"tags"in i&&o(5,c=i.tags),"technologies"in i&&o(8,g=i.technologies),"link"in i&&o(9,P=i.link)},[s,t,l,n,a,c,j,I,g,P,y,D,q]}class De extends ae{constructor(e){super();ie(this,e,Ie,Pe,fe,{name:0,color:1,icon:2,description:3,content:4,tags:5,technologies:8,link:9})}}function re(r,e,o){const s=r.slice();return s[0]=e[o],s}function ce(r){let e,o;const s=[r[0]];let t={};for(let l=0;l<s.length;l+=1)t=je(t,s[l]);return e=new De({props:t}),{c(){ge(e.$$.fragment)},l(l){me(e.$$.fragment,l)},m(l,n){ve(e,l,n),o=!0},p(l,n){const a=n&0?pe(s,[be(l[0])]):{};e.$set(a)},i(l){o||(N(e.$$.fragment,l),o=!0)},o(l){F(e.$$.fragment,l),o=!1},d(l){ke(e,l)}}}function Ve(r){let e,o,s=Q.projects,t=[];for(let n=0;n<s.length;n+=1)t[n]=ce(re(r,s,n));const l=n=>F(t[n],1,1,()=>{t[n]=null});return{c(){e=p("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=b(n,"DIV",{class:!0});var a=k(e);for(let c=0;c<t.length;c+=1)t[c].l(a);a.forEach(d),this.h()},h(){u(e,"class","grid grid-cols-1 lg:grid-cols-3 lg:h-screen")},m(n,a){z(n,e,a);for(let c=0;c<t.length;c+=1)t[c].m(e,null);o=!0},p(n,[a]){if(a&0){s=Q.projects;let c;for(c=0;c<s.length;c+=1){const g=re(n,s,c);t[c]?(t[c].p(g,a),N(t[c],1)):(t[c]=ce(g),t[c].c(),N(t[c],1),t[c].m(e,null))}for(Ee(),c=s.length;c<t.length;c+=1)l(c);we()}},i(n){if(!o){for(let a=0;a<s.length;a+=1)N(t[a]);o=!0}},o(n){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)F(t[a]);o=!1},d(n){n&&d(e),he(t,n)}}}function Me(r){return console.log(Q.projects),[]}class Se extends ae{constructor(e){super();ie(this,e,Me,Ve,fe,{})}}export{Se as default};

import{S as c,i as h,s as g,e as u,c as m,b as i,M as n,g as _,K as o,d as f}from"./vendor-fdb51b2c.js";function v(r){let t,a,s;return{c(){t=u("img"),this.h()},l(e){t=m(e,"IMG",{width:!0,height:!0,src:!0,alt:!0}),this.h()},h(){i(t,"width",40),i(t,"height",40),n(t.src,a=`/static/${r[0]}.svg`)||i(t,"src",a),i(t,"alt",s=`${r[0]} logo`)},m(e,l){_(e,t,l)},p(e,[l]){l&1&&!n(t.src,a=`/static/${e[0]}.svg`)&&i(t,"src",a),l&1&&s!==(s=`${e[0]} logo`)&&i(t,"alt",s)},i:o,o,d(e){e&&f(t)}}}function d(r,t,a){let{svgPath:s}=t;return r.$$set=e=>{"svgPath"in e&&a(0,s=e.svgPath)},[s]}class P extends c{constructor(t){super();h(this,t,d,v,g,{svgPath:0})}}export{P as L};
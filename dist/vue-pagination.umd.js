(function(e,d){typeof exports=="object"&&typeof module<"u"?module.exports=d(require("vue")):typeof define=="function"&&define.amd?define(["vue"],d):(e=typeof globalThis<"u"?globalThis:e||self,e["vue-pagination"]=d(e.vue))})(this,function(e){"use strict";const d="",k={class:"pagination--wrapper"},E={class:"hidden"},N={class:"pagination"},y={class:"pagination--dot"},w=["onClick"],D={class:"pagination--dot"},B={class:"pagination--page-count"},S=e.createElementVNode("span",null,".",-1),b=e.createElementVNode("span",null,".",-1),T=e.createElementVNode("span",null,".",-1),x={key:1},z={__name:"PaginationButton",props:{totalResultCount:{type:Number,default:0},perPage:{type:Number,default:25},currentPageVal:{type:Number,default:1},isFetching:{type:Boolean,default:!1,required:!0}},emits:["paginate"],setup(l,{emit:$}){const g=l,u=ref(2),n=ref(1),a=ref(0),o=ref(1),h=ref(3),V=ref(!0),P=ref(!1),c=computed({get(){return R(g.currentPageVal),n.value=g.currentPageVal},set(t){return n.value=t}}),R=t=>{t===1&&(o.value=1)},F=computed({get(){return a.value=Math.ceil(g.totalResultCount/g.perPage)},set(t){return a.value=t}}),q=t=>{if(c.value=t,t<=4){if(t<=3){i(!0,!1),o.value=1,u.value=2;return}i(!0,!1),o.value=1,u.value=4;return}p(t,!0)},C=t=>{if(c.value=t,t===1){i(!0,!1),f(t,0,2);return}p(t,!1)},j=t=>{if(t>1){if(c.value=t-=1,n.value>3){if(n.value===4){i(!0,!1),f(t,3,4);return}p(t,!0);return}if(i(!0,!1),n.value===3){u.value=3,o.value=1;return}u.value=2,o.value=1;return}},v=t=>{if(c.value=t+=1,n.value>=a.value)return c.value=a.value;if(n.value>3){if(n.value===4){if(n.value+3<=a.value){i(!0,!1),u.value=4,o.value=1;return}i(!1,a.value>6),u.value=a.value===6?4:3,o.value=1;return}p(t,!0)}},G=()=>a.value%2===0,m=(t,r)=>t?n.value>a.value-r:n.value+r===a.value,f=(t,r,s)=>{o.value=t-r,u.value=s},i=(t,r)=>{V.value=t,P.value=r},p=(t,r)=>{if(G()){if(m(!1,3)||m(!0,3)){i(!1,a.value>6),f(a.value,5,4);return}if(r){i(!0,!0),f(t,2,3);return}}if(m(!1,2)||m(!0,2)){i(!1,!0),f(a.value,4,3);return}if(r){i(!0,!0),f(t,2,3);return}},L=()=>a.value>h.value&&a.value>h.value+1,M=()=>a.value===3?u.value-1:u.value;return(t,r)=>(e.openBlock(),e.createElementBlock("div",null,[e.withDirectives(e.createElementVNode("div",k,[e.createElementVNode("span",E,e.toDisplayString(e.unref(c)),1),e.createElementVNode("div",N,[e.createElementVNode("a",{ref:"prev-pagination-ref",class:e.normalizeClass(["pagination--button",[{disabled:e.unref(n)===1}]]),onClick:r[0]||(r[0]=s=>(j(e.unref(n)),l.currentPageVal>1?t.emits("update",e.unref(n)):null))},"‹",2),e.createElementVNode("a",{ref:"prev-current-pagination-ref",class:e.normalizeClass(["pagination--button",{selected:e.unref(n)===1}]),onClick:r[1]||(r[1]=s=>(C(1),l.currentPageVal>1?t.emits("update",e.unref(n)):null))},"1",2),e.withDirectives(e.createElementVNode("a",y,"...",512),[[e.vShow,e.unref(P)]]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(M(),s=>e.withDirectives((e.openBlock(),e.createElementBlock("a",{key:s,ref_for:!0,ref:`page-count-${s}-ref`,class:e.normalizeClass(["pagination--button",{selected:e.unref(n)===s+e.unref(o)}]),onClick:A=>(q(s+e.unref(o)),t.emits("update",e.unref(n)))},e.toDisplayString(s+e.unref(o)),11,w)),[[e.vShow,e.unref(a)>2]])),128)),e.withDirectives(e.createElementVNode("a",D,"...",512),[[e.vShow,e.unref(V)&&L()]]),e.withDirectives(e.createElementVNode("a",{ref:"next-current-pagination-ref",class:e.normalizeClass(["pagination--button",{selected:e.unref(n)===e.unref(a)}]),onClick:r[2]||(r[2]=s=>(C(e.unref(a)),l.currentPageVal<e.unref(a)?t.emits("update",e.unref(n)):null))},e.toDisplayString(e.unref(F)),3),[[e.vShow,e.unref(a)>1]]),e.createElementVNode("a",{ref:"next-pagination-ref",class:e.normalizeClass(["pagination--button",[{disabled:e.unref(n)===e.unref(a)}]]),onClick:r[3]||(r[3]=s=>(v(e.unref(n)),l.currentPageVal<e.unref(a)?t.emits("update",e.unref(n)):null))},"›",2)])],512),[[e.vShow,e.unref(a)>0]]),e.withDirectives(e.createElementVNode("div",B,[e.createTextVNode(" 全"+e.toDisplayString(l.totalResultCount)+"件中  ",1),l.isFetching?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass([{fetching:l.isFetching}])},[S,b,T,e.createTextVNode(" ")],2)):(e.openBlock(),e.createElementBlock("span",x,e.toDisplayString(e.unref(n)<2?1:(e.unref(n)-1)*l.perPage+1)+" - "+e.toDisplayString(e.unref(n)===e.unref(a)?l.totalResultCount:e.unref(n)*l.perPage),1)),e.createTextVNode("件 ")],512),[[e.vShow,e.unref(a)>0]])]))}};return{install:(l,$)=>{l.component("PaginationButton",z)}}});
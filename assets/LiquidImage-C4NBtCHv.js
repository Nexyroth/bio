import{r as R,i as U,d as F,j as w,W as V,S as B,O as H,P as X,a as Y,V as S,M as $,T as J,b as K,c as Q}from"./index-CWQy5AMP.js";const Z="_canvasWrap_q1j2u_7",ee="_active_q1j2u_3",te="_glitchSlice_q1j2u_23",x={canvasWrap:Z,active:ee,glitchSlice:te},ne=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,se=`
precision mediump float;
varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uIntensity;
uniform float uTime;
uniform float uChroma;
void main() {
  vec2 uv = vUv;
  float dist = distance(uv, uMouse);
  // Ripple rings radiating from the cursor, decaying with distance.
  float ripple = sin(dist * 30.0 - uTime * 4.0) * exp(-dist * 6.0);
  vec2 dir = (uv - uMouse) / max(dist, 0.001);
  vec2 disp = dir * ripple * 0.03 * uIntensity;
  // Phase 15: RADIAL chromatic aberration (prism feel) — the offset
  // grows with distance from the center, so edges split and the
  // center stays clean. R at uv+offset, B at uv-offset, G at uv.
  // (Supersedes Phase 14's uniform ±2px horizontal shift.)
  vec2 d = uv - 0.5;
  float r = length(d);
  vec2 offset = d * uChroma * r;
  vec4 col;
  col.r = texture2D(uTexture, uv + disp + offset).r;
  col.g = texture2D(uTexture, uv + disp).g;
  col.b = texture2D(uTexture, uv + disp - offset).b;
  col.a = 1.0;
  gl_FragColor = col;
}
`;function re({src:f,alt:P,width:z,height:G,figureClassName:O,imgClassName:N}){const T=R.useRef(null),q=R.useRef(null);return R.useEffect(()=>{const i=T.current,o=q.current;if(!i||!o||U()||!window.matchMedia("(pointer: fine)").matches||!window.matchMedia("(min-width: 768px)").matches)return;let e=null,y=0,p=!1,m=!1,h=null,M=null,n=null,A=null,L=null,E=0;const I=new S(.5,.5),C=new S(.5,.5),l={value:0},g={value:0},b={value:0},_=()=>{if(p)return;p=!0,E=performance.now();const t=()=>{if(!e||!n){p=!1;return}I.lerp(C,.12),n.uniforms.uMouse.value.copy(I),n.uniforms.uTime.value=(performance.now()-E)/1e3,n.uniforms.uIntensity.value=l.value,g.value+=(b.value-g.value)*.18,n.uniforms.uChroma.value=g.value,e.render(n.userData.scene,n.userData.camera),l.value>.005||Math.abs(g.value)>5e-4?y=requestAnimationFrame(t):(p=!1,o.classList.remove(x.active))};y=requestAnimationFrame(t)},k=()=>{if(m||e)return;try{e=new V({antialias:!1,alpha:!0,powerPreference:"low-power"})}catch{e=null;return}e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));const t=o.clientWidth||300,s=o.clientHeight||200;e.setSize(t,s,!1),e.domElement.style.cssText="display:block;width:100%;height:100%;",o.appendChild(e.domElement);const u=new B,d=new H(-1,1,1,-1,0,1);L=new X(2,2),n=new Y({vertexShader:ne,fragmentShader:se,uniforms:{uTexture:{value:null},uMouse:{value:new S(.5,.5)},uIntensity:{value:0},uTime:{value:0},uChroma:{value:0}}}),n.userData.scene=u,n.userData.camera=d,u.add(new $(L,n));const r=new J;r.setCrossOrigin("anonymous"),r.load(f,a=>{if(m){a.dispose();return}A=a,a.colorSpace=K;const c=a.image.width/a.image.height,v=t/s;v>c?(a.repeat.set(1,c/v),a.offset.set(0,(1-c/v)/2)):(a.repeat.set(v/c,1),a.offset.set((1-v/c)/2,0)),n&&(n.uniforms.uTexture.value=a)},void 0,()=>{}),M=new ResizeObserver(()=>{if(!e)return;const a=o.clientWidth||300,c=o.clientHeight||200;e.setSize(a,c,!1)}),M.observe(o)};h=new IntersectionObserver(t=>{Q("liquid-image"),t.some(s=>s.isIntersecting)&&(F("Animation start: LiquidImage WebGL init (card entered viewport +100px)"),k(),h?.disconnect())},{rootMargin:"100px"}),h.observe(i),F("IntersectionObserver setup: LiquidImage lazy WebGL (rootMargin 100px)");const j=t=>{const s=i.getBoundingClientRect();C.set((t.clientX-s.left)/s.width,1-(t.clientY-s.top)/s.height)},W=()=>{if(!e)return;o.classList.add(x.active),b.value=.03;const t=l.value,s=performance.now(),u=d=>{const r=Math.min((d-s)/300,1);l.value=t+(1-t)*(1-Math.pow(1-r,3)),r<1&&!m&&requestAnimationFrame(u)};requestAnimationFrame(u),_()},D=()=>{if(!e)return;b.value=0;const t=l.value,s=performance.now(),u=d=>{const r=Math.min((d-s)/400,1);l.value=t*(1-r*r*(3-2*r)),r<1&&!m&&requestAnimationFrame(u)};requestAnimationFrame(u),_()};return i.addEventListener("mousemove",j,{passive:!0}),i.addEventListener("mouseenter",W),i.addEventListener("mouseleave",D),()=>{m=!0,cancelAnimationFrame(y),i.removeEventListener("mousemove",j),i.removeEventListener("mouseenter",W),i.removeEventListener("mouseleave",D),h?.disconnect(),M?.disconnect(),A?.dispose(),L?.dispose(),n?.dispose(),e?.dispose(),e?.forceContextLoss(),e=null}},[f]),w.jsxs("figure",{ref:T,className:O,children:[w.jsx("img",{src:f,alt:P,width:z,height:G,loading:"lazy",decoding:"async",className:N}),w.jsx("div",{ref:q,className:x.canvasWrap,"aria-hidden":"true"}),w.jsx("span",{className:x.glitchSlice,"data-glitch-slice":!0,"aria-hidden":"true",style:{backgroundImage:`url(${f})`}})]})}export{re as default};

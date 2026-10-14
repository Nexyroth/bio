import{r as b,i as N,d as F,j as h,a as k}from"./index-BRSpynhr.js";import{W as U,S as V,O as B,P as H,a as X,V as L,M as Y,T as $,b as J}from"./three.module-Dz7Pyniy.js";const K="_canvasWrap_q1j2u_7",Q="_active_q1j2u_3",Z="_glitchSlice_q1j2u_23",w={canvasWrap:K,active:Q,glitchSlice:Z},ee=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,te=`
precision mediump float;
varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uIntensity;
uniform float uTime;
void main() {
  vec2 uv = vUv;
  float dist = distance(uv, uMouse);
  // Ripple rings radiating from the cursor, decaying with distance.
  float ripple = sin(dist * 30.0 - uTime * 4.0) * exp(-dist * 6.0);
  vec2 dir = (uv - uMouse) / max(dist, 0.001);
  vec2 disp = dir * ripple * 0.03 * uIntensity;
  // Subtle chromatic aberration while distorted.
  float ca = 0.004 * uIntensity;
  vec4 col;
  col.r = texture2D(uTexture, uv + disp + vec2(ca, 0.0)).r;
  col.g = texture2D(uTexture, uv + disp).g;
  col.b = texture2D(uTexture, uv + disp - vec2(ca, 0.0)).b;
  col.a = 1.0;
  gl_FragColor = col;
}
`;function se({src:f,alt:D,width:O,height:z,figureClassName:C,imgClassName:G}){const S=b.useRef(null),R=b.useRef(null);return b.useEffect(()=>{const r=S.current,o=R.current;if(!r||!o||N()||!window.matchMedia("(pointer: fine)").matches||!window.matchMedia("(min-width: 768px)").matches)return;let e=null,x=0,p=!1,m=!1,g=null,y=null,n=null,T=null,M=null,q=0;const E=new L(.5,.5),I=new L(.5,.5),l={value:0},A=()=>{if(p)return;p=!0,q=performance.now();const t=()=>{if(!e||!n){p=!1;return}E.lerp(I,.12),n.uniforms.uMouse.value.copy(E),n.uniforms.uTime.value=(performance.now()-q)/1e3,n.uniforms.uIntensity.value=l.value,e.render(n.userData.scene,n.userData.camera),l.value>.005?x=requestAnimationFrame(t):(p=!1,o.classList.remove(w.active))};x=requestAnimationFrame(t)},P=()=>{if(m||e)return;try{e=new U({antialias:!1,alpha:!0,powerPreference:"low-power"})}catch{e=null;return}e.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));const t=o.clientWidth||300,i=o.clientHeight||200;e.setSize(t,i,!1),e.domElement.style.cssText="display:block;width:100%;height:100%;",o.appendChild(e.domElement);const c=new V,d=new B(-1,1,1,-1,0,1);M=new H(2,2),n=new X({vertexShader:ee,fragmentShader:te,uniforms:{uTexture:{value:null},uMouse:{value:new L(.5,.5)},uIntensity:{value:0},uTime:{value:0}}}),n.userData.scene=c,n.userData.camera=d,c.add(new Y(M,n));const a=new $;a.setCrossOrigin("anonymous"),a.load(f,s=>{if(m){s.dispose();return}T=s,s.colorSpace=J;const u=s.image.width/s.image.height,v=t/i;v>u?(s.repeat.set(1,u/v),s.offset.set(0,(1-u/v)/2)):(s.repeat.set(v/u,1),s.offset.set((1-v/u)/2,0)),n&&(n.uniforms.uTexture.value=s)},void 0,()=>{}),y=new ResizeObserver(()=>{if(!e)return;const s=o.clientWidth||300,u=o.clientHeight||200;e.setSize(s,u,!1)}),y.observe(o)};g=new IntersectionObserver(t=>{k("liquid-image"),t.some(i=>i.isIntersecting)&&(F("Animation start: LiquidImage WebGL init (card entered viewport +100px)"),P(),g?.disconnect())},{rootMargin:"100px"}),g.observe(r),F("IntersectionObserver setup: LiquidImage lazy WebGL (rootMargin 100px)");const _=t=>{const i=r.getBoundingClientRect();I.set((t.clientX-i.left)/i.width,1-(t.clientY-i.top)/i.height)},j=()=>{if(!e)return;o.classList.add(w.active);const t=l.value,i=performance.now(),c=d=>{const a=Math.min((d-i)/300,1);l.value=t+(1-t)*(1-Math.pow(1-a,3)),a<1&&!m&&requestAnimationFrame(c)};requestAnimationFrame(c),A()},W=()=>{if(!e)return;const t=l.value,i=performance.now(),c=d=>{const a=Math.min((d-i)/400,1);l.value=t*(1-a*a*(3-2*a)),a<1&&!m&&requestAnimationFrame(c)};requestAnimationFrame(c),A()};return r.addEventListener("mousemove",_,{passive:!0}),r.addEventListener("mouseenter",j),r.addEventListener("mouseleave",W),()=>{m=!0,cancelAnimationFrame(x),r.removeEventListener("mousemove",_),r.removeEventListener("mouseenter",j),r.removeEventListener("mouseleave",W),g?.disconnect(),y?.disconnect(),T?.dispose(),M?.dispose(),n?.dispose(),e?.dispose(),e=null}},[f]),h.jsxs("figure",{ref:S,className:C,children:[h.jsx("img",{src:f,alt:D,width:O,height:z,loading:"lazy",decoding:"async",className:G}),h.jsx("div",{ref:R,className:w.canvasWrap,"aria-hidden":"true"}),h.jsx("span",{className:w.glitchSlice,"data-glitch-slice":!0,"aria-hidden":"true",style:{backgroundImage:`url(${f})`}})]})}export{se as default};

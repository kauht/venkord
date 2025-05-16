// Vencord 59e397d7
// Standalone: false
// Platform: win32
// Updater Disabled: false
"use strict";var Cn=Object.create;var De=Object.defineProperty;var wn=Object.getOwnPropertyDescriptor;var Sn=Object.getOwnPropertyNames;var Tn=Object.getPrototypeOf,xn=Object.prototype.hasOwnProperty;var v=(e,t)=>()=>(e&&(t=e(e=0)),t);var ae=(e,t)=>{for(var r in t)De(e,r,{get:t[r],enumerable:!0})},bt=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Sn(t))!xn.call(e,n)&&n!==r&&De(e,n,{get:()=>t[n],enumerable:!(i=wn(t,n))||i.enumerable});return e};var Be=(e,t,r)=>(r=e!=null?Cn(Tn(e)):{},bt(t||!e||!e.__esModule?De(r,"default",{value:e,enumerable:!0}):r,e)),je=e=>bt(De({},"__esModule",{value:!0}),e);var c=v(()=>{"use strict"});var Ie=v(()=>{"use strict";c()});function Ae(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var Et=v(()=>{"use strict";c()});var Rn={};function ce(...e){let t={cwd:kt};return Ze?Fe("flatpak-spawn",["--host","git",...e],t):Fe("git",e,t)}async function bn(){return(await ce("remote","get-url","origin")).stdout.trim().replace(/git@(.+):/,"https://$1/").replace(/\.git$/,"")}async function En(){await ce("fetch");let e=(await ce("branch","--show-current")).stdout.trim();if(!((await ce("ls-remote","origin",e)).stdout.length>0))return[];let i=(await ce("log",`HEAD...origin/${e}`,"--pretty=format:%an/%h/%s")).stdout.trim();return i?i.split(`
`).map(n=>{let[o,s,...a]=n.split("/");return{hash:s,author:o,message:a.join("/").split(`
`)[0]}}):[]}async function Dn(){return(await ce("pull")).stdout.includes("Fast-forward")}async function Pn(){return!(await Fe(Ze?"flatpak-spawn":"node",Ze?["--host","node","scripts/build/build.mjs"]:["scripts/build/build.mjs"],{cwd:kt})).stderr.includes("Build failed")}var Dt,Ce,Pt,Rt,kt,Fe,Ze,Ot=v(()=>{"use strict";c();Ie();Dt=require("child_process"),Ce=require("electron"),Pt=require("path"),Rt=require("util");Et();kt=(0,Pt.join)(__dirname,".."),Fe=(0,Rt.promisify)(Dt.execFile),Ze=!1;Ce.ipcMain.handle("VencordGetRepo",Ae(bn));Ce.ipcMain.handle("VencordGetUpdates",Ae(En));Ce.ipcMain.handle("VencordUpdate",Ae(Dn));Ce.ipcMain.handle("VencordBuild",Ae(Pn))});var _t=v(()=>{"use strict";c();Ot()});function Nt(e,t,r,i){return BigInt(e)|BigInt(t)<<16n|BigInt(r)<<32n|BigInt(i)<<48n}function j(e,t){return BigInt(e[t])|BigInt(e[t+1])<<8n|BigInt(e[t+2])<<16n|BigInt(e[t+3])<<24n|BigInt(e[t+4])<<32n|BigInt(e[t+5])<<40n|BigInt(e[t+6])<<48n|BigInt(e[t+7])<<56n}function A(e,t){return e<<t&kn|e>>Gt-t}function h(e){return BigInt.asUintN(64,e)}function Vt(e,t=0){return new Ke(t).update(e).digest()}var I,S,Mt,we,Lt,Gt,kn,On,Ke,zt=v(()=>{c();I=11400714785074694791n,S=14029467366897019727n,Mt=1609587929392839161n,we=9650029242287828579n,Lt=2870177450012600261n,Gt=64n,kn=2n**Gt-1n,On=new TextEncoder;Ke=class{#t;#r;#n;#i;#o;#s;#a;#e;constructor(t=0){this.reset(t)}reset(t=this.#t){return this.#t=BigInt.asUintN(32,BigInt(t)),this.#r=h(this.#t+I+S),this.#n=h(this.#t+S),this.#i=this.#t,this.#o=h(this.#t-I),this.#s=null,this.#a=0,this.#e=0,this}update(t){typeof t=="string"&&(t=On.encode(t));let r=0,i=t.length,n=r+i;if(i===0)return this;if(this.#a+=i,this.#e===0&&(this.#s=new Uint8Array(32)),this.#e+i<32)return this.#s.set(t.subarray(0,i),this.#e),this.#e+=i,this;if(this.#e>0){this.#s.set(t.subarray(0,32-this.#e),this.#e);let o=0,s;s=j(this.#s,o),this.#r=h(A(h(this.#r+s*S),31n)*I),o+=8,s=j(this.memory,o),this.#n=h(A(h(this.#n+s*S),31n)*I),o+=8,s=j(this.memory,o),this.#i=h(A(h(this.#i+s*S),31n)*I),o+=8,s=j(this.memory,o),this.#o=h(A(h(this.#o+s*S),31n)*I),r+=32-this.#e,this.#e=0}if(r<=n-32){let o=n-32;do{let s;s=j(t,r),this.#r=h(A(h(this.#r+s*S),31n)*I),r+=8,s=j(t,r),this.#n=h(A(h(this.#n+s*S),31n)*I),r+=8,s=j(t,r),this.#i=h(A(h(this.#i+s*S),31n)*I),r+=8,s=j(t,r),this.#o=h(A(h(this.#o+s*S),31n)*I),r+=8}while(r<=o)}return r<n&&(this.#s.set(t.subarray(r,n),this.#e),this.#e=n-r),this}digest(){let t=this.#s,r=this.#e,i=0,n=0n,o=0n,s=0n;for(this.#a>=32?(n=A(this.#r,1n)+A(this.#n,7n)+A(this.#i,12n)+A(this.#o,18n),n=h(n^A(h(this.#r*S),31n)*I),n=h(n*I+we),n=h(n^A(h(this.#n*S),31n)*I),n=h(n*I+we),n=h(n^A(h(this.#i*S),31n)*I),n=h(n*I+we),n=h(n^A(h(this.#o*S),31n)*I),n=h(n*I+we)):n=h(this.#t+Lt),n+=BigInt(this.#a);i<=r-8;)s=j(t,i),s=h(A(h(s*S),31n)*I),n=h(A(n^s,27n)*I+we),i+=8;for(i+4<=r&&(s=Nt(t[i+1]<<8|t[i],t[i+3]<<8|t[i+2],0,0),n=h(A(n^h(s*I),23n)*S+Mt),i+=4);i<r;)s=Nt(t[i++],0,0,0),n=h(A(n^h(s*Lt),11n)*I);return o=h(n>>33n),n=h((n^o)*S),o=h(n>>29n),n=h((n^o)*Mt),o=h(n>>32n),n=h(n^o),n}}});function Mn(e){e=BigInt(e);let t=[],r=Math.ceil(Math.floor(Math.log2(Number(e))+1)/8);for(let n=0;n<r;n++)t.unshift(Number(e>>BigInt(8*n)&BigInt(255)));let i=new Uint8Array(t);return _n?i:i.reverse()}function Ut(e){let t=Vt(e,0),r=Mn(t);return[le[r[0]>>2],le[(r[0]&3)<<4|r[1]>>4],le[(r[1]&15)<<2|r[2]>>6],le[r[2]&63],le[r[3]>>2],le[(r[3]&3)<<4|r[3]>>4]].join("")}var le,_n,Bt=v(()=>{"use strict";c();zt();le="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),_n=(()=>{let e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})()});function jt(e){let t=typeof e=="string"?e:e.source;if(t=t.replaceAll(/#{intl::([\w$+/]*)(?:::(\w+))?}/g,(n,o,s)=>{let a=s==="raw"?o:Ut(o),l=typeof e=="string";return!Number.isNaN(Number(a[0]))||a.includes("+")||a.includes("/")?l?`["${a}"]`:String.raw`(?:\["${a}"\])`.replaceAll("+","\\+"):l?`.${a}`:String.raw`(?:\.${a})`}),typeof e=="string")return t;let r=t.replaceAll("\\i",String.raw`(?:[A-Za-z_$][\w$]*)`),i=new RegExp(r,e.flags);return i.toString=e.toString.bind(e),i}var Ft=v(()=>{"use strict";c();Bt()});var $e={};ae($e,{fetchTrackData:()=>zn});async function He(e){let{stdout:t}=await Kt("osascript",e.map(r=>["-e",r]).flat());return t}async function Vn({id:e,name:t,artist:r,album:i}){if(e===L?.id){if("data"in L)return L.data;if("failures"in L&&L.failures>=5)return null}try{let n=new URL("https://amp-api-edge.music.apple.com/v1/catalog/us/search");n.searchParams.set("platform","web"),n.searchParams.set("l","en-US"),n.searchParams.set("limit","1"),n.searchParams.set("with","serverBubbles"),n.searchParams.set("types","songs"),n.searchParams.set("term",`${t} ${r} ${i}`),n.searchParams.set("include[songs]","artists");let o=await Gn(),s=await fetch(n,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9",authorization:`Bearer ${o}`,"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",origin:"https://music.apple.com"}}).then(a=>a.json()).then(a=>a.results.song.data[0]);return L={id:e,data:{appleMusicLink:s.attributes.url,songLink:`https://song.link/i/${s.id}`,albumArtwork:s.attributes.artwork.url.replace("{w}x{h}","512x512"),artistArtwork:s.relationships.artists.data[0].attributes.artwork.url.replace("{w}x{h}","512x512")}},L.data}catch(n){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",n),L={id:e,failures:(e===L?.id&&"failures"in L?L.failures:0)+1},null}}async function zn(){try{await Kt("pgrep",["^Music$"])}catch{return null}if(await He(['tell application "Music"',"get player state","end tell"]).then(g=>g.trim())!=="playing")return null;let t=await He(['tell application "Music"',"get player position","end tell"]).then(g=>Number.parseFloat(g.trim())),r=await He(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[i,n,o,s,a]=r.split(`
`).filter(g=>!!g),l=Number.parseFloat(a),d=await Vn({id:i,name:n,artist:s,album:o});return{name:n,album:o,artist:s,playerPosition:t,duration:l,...d}}var Zt,Wt,Kt,L,Ln,Nn,Ye,Gn,Ht=v(()=>{"use strict";c();Ft();Zt=require("child_process"),Wt=require("util"),Kt=(0,Wt.promisify)(Zt.execFile);L=null,Ln=/<script type="module" crossorigin src="([a-zA-Z0-9.\-/]+)"><\/script>/,Nn=jt(/Promise.allSettled\(\i\)\}const \i="([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*)"/),Gn=async()=>{if(Ye)return Ye;let e=await fetch("https://music.apple.com/").then(n=>n.text()),t=new URL(e.match(Ln)[1],"https://music.apple.com/"),i=(await fetch(t).then(n=>n.text())).match(Nn)[1];return Ye=i,i}});var Je={};ae(Je,{initDevtoolsOpenEagerLoad:()=>Un});function Un(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var Yt=v(()=>{"use strict";c()});var qe,$t,Se,Jt=v(()=>{"use strict";c();qe=Symbol("SettingsStore.isProxy"),$t=Symbol("SettingsStore.getRawTarget"),Se=class{pathListeners=new Map;globalListeners=new Set;proxyContexts=new WeakMap;proxyHandler=(()=>{let t=this;return{get(r,i,n){if(i===qe)return!0;if(i===$t)return r;let o=Reflect.get(r,i,n),s=t.proxyContexts.get(r);if(s==null)return o;let{root:a,path:l}=s;if(!(i in r)&&t.getDefaultValue!=null&&(o=t.getDefaultValue({target:r,key:i,root:a,path:l})),typeof o=="object"&&o!==null&&!o[qe]){let d=`${l}${l&&"."}${i}`;return t.makeProxy(o,a,d)}return o},set(r,i,n){if(n?.[qe]&&(n=n[$t]),r[i]===n)return!0;if(!Reflect.set(r,i,n))return!1;let o=t.proxyContexts.get(r);if(o==null)return!0;let{root:s,path:a}=o,l=`${a}${a&&"."}${i}`;return t.notifyListeners(l,n,s),!0},deleteProperty(r,i){if(!Reflect.deleteProperty(r,i))return!1;let n=t.proxyContexts.get(r);if(n==null)return!0;let{root:o,path:s}=n,a=`${s}${s&&"."}${i}`;return t.notifyListeners(a,void 0,o),!0}}})();constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,i=""){return this.proxyContexts.set(t,{root:r,path:i}),new Proxy(t,this.proxyHandler)}notifyListeners(t,r,i){let n=t.split(".");if(n.length>2&&n[0]==="plugins"){let o=n.slice(0,3),s=o.join("."),a=o.reduce((l,d)=>l[d],i);this.globalListeners.forEach(l=>l(i,s)),this.pathListeners.get(s)?.forEach(l=>l(a))}else this.globalListeners.forEach(o=>o(i,t));this.pathListeners.get(t)?.forEach(o=>o(r))}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let i=t,n=r.split(".");for(let o of n){if(!i){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}i=i[o]}this.pathListeners.get(r)?.forEach(o=>o(i))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let i=this.pathListeners.get(t)??new Set;i.add(r),this.pathListeners.set(t,i)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let i=this.pathListeners.get(t);i&&(i.delete(r),i.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}}});function Xe(e,t){for(let r in t){let i=t[r];typeof i=="object"&&!Array.isArray(i)?(e[r]??={},Xe(e[r],i)):e[r]??=i}return e}var qt=v(()=>{"use strict";c()});var Xt,K,Pe,ue,H,he,Qe,et,Qt,Re,fe=v(()=>{"use strict";c();Xt=require("electron"),K=require("path"),Pe=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,K.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,K.join)(Xt.app.getPath("userData"),"..","Vencord")),ue=(0,K.join)(Pe,"settings"),H=(0,K.join)(Pe,"themes"),he=(0,K.join)(ue,"quickCss.css"),Qe=(0,K.join)(ue,"settings.json"),et=(0,K.join)(ue,"native-settings.json"),Qt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"],Re=process.argv.includes("--vanilla")});function tr(e,t){try{return JSON.parse((0,J.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var ke,J,D,Bn,rr,er,q=v(()=>{"use strict";c();Ie();Jt();qt();ke=require("electron"),J=require("fs");fe();(0,J.mkdirSync)(ue,{recursive:!0});D=new Se(tr("renderer",Qe));D.addGlobalChangeListener(()=>{try{(0,J.writeFileSync)(Qe,JSON.stringify(D.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});ke.ipcMain.handle("VencordGetSettingsDir",()=>ue);ke.ipcMain.on("VencordGetSettings",e=>e.returnValue=D.plain);ke.ipcMain.handle("VencordSetSettings",(e,t,r)=>{D.setData(t,r)});Bn={plugins:{}},rr=tr("native",et);Xe(rr,Bn);er=new Se(rr);er.addGlobalChangeListener(()=>{try{(0,J.writeFileSync)(et,JSON.stringify(er.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}})});var ir={};var nr,or=v(()=>{"use strict";c();q();nr=require("electron");nr.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i?.once("dom-ready",()=>{if(i.url.startsWith("https://open.spotify.com/embed/")){let n=D.store.plugins?.FixSpotifyEmbeds;if(!n?.enabled)return;i.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${n.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})})});var ar={};var sr,cr=v(()=>{"use strict";c();q();sr=require("electron");sr.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i?.once("dom-ready",()=>{if(i.url.startsWith("https://www.youtube.com/")){if(!D.store.plugins?.FixYoutubeEmbeds?.enabled)return;i.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})})});var tt={};ae(tt,{resolveRedirect:()=>Fn});function ur(e){return new Promise((t,r)=>{let i=(0,lr.request)(new URL(e),{method:"HEAD"},n=>{t(n.headers.location?ur(n.headers.location):e)});i.on("error",r),i.end()})}async function Fn(e,t){return jn.test(t)?ur(t):t}var lr,jn,hr=v(()=>{"use strict";c();lr=require("https"),jn=/^https:\/\/(spotify\.link|s\.team)\/.+$/});var rt={};ae(rt,{makeDeeplTranslateRequest:()=>Zn});async function Zn(e,t,r,i){let n=t?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let o=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${r}`},body:i}),s=await o.text();return{status:o.status,data:s}}catch(o){return{status:-1,data:String(o)}}}var fr=v(()=>{"use strict";c()});var nt={};ae(nt,{readRecording:()=>Wn});async function Wn(e,t){t=(0,Te.normalize)(t);let r=(0,Te.basename)(t),i=(0,Te.normalize)(pr.app.getPath("userData")+"/");if(console.log(r,i,t),r!=="recording.ogg"||!t.startsWith(i))return null;try{let n=await(0,gr.readFile)(t);return new Uint8Array(n.buffer)}catch{return null}}var pr,gr,Te,dr=v(()=>{"use strict";c();pr=require("electron"),gr=require("fs/promises"),Te=require("path")});var it={};ae(it,{sendToOverlay:()=>Kn});function Kn(e,t){t.messageType=t.type;let r=JSON.stringify(t);vr??=(0,mr.createSocket)("udp4"),vr.send(r,42069,"127.0.0.1")}var mr,vr,yr=v(()=>{"use strict";c();mr=require("dgram")});var Ir,Ar=v(()=>{c();Ir=`/* eslint-disable */

/**
 * This file is part of AdGuard's Block YouTube Ads (https://github.com/AdguardTeam/BlockYouTubeAdsShortcut).
 *
 * Copyright (C) AdGuard Team
 *
 * AdGuard's Block YouTube Ads is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard's Block YouTube Ads is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard's Block YouTube Ads.  If not, see <http://www.gnu.org/licenses/>.
 */

const hiddenCSS = [
    "#__ffYoutube1",
    "#__ffYoutube2",
    "#__ffYoutube3",
    "#__ffYoutube4",
    "#feed-pyv-container",
    "#feedmodule-PRO",
    "#homepage-chrome-side-promo",
    "#merch-shelf",
    "#offer-module",
    '#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',
    "#pla-shelf",
    "#premium-yva",
    "#promo-info",
    "#promo-list",
    "#promotion-shelf",
    "#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer",
    "#search-pva",
    "#shelf-pyv-container",
    "#video-masthead",
    "#watch-branded-actions",
    "#watch-buy-urls",
    "#watch-channel-brand-div",
    "#watch7-branded-banner",
    "#YtKevlarVisibilityIdentifier",
    "#YtSparklesVisibilityIdentifier",
    ".carousel-offer-url-container",
    ".companion-ad-container",
    ".GoogleActiveViewElement",
    '.list-view[style="margin: 7px 0pt;"]',
    ".promoted-sparkles-text-search-root-container",
    ".promoted-videos",
    ".searchView.list-view",
    ".sparkles-light-cta",
    ".watch-extra-info-column",
    ".watch-extra-info-right",
    ".ytd-carousel-ad-renderer",
    ".ytd-compact-promoted-video-renderer",
    ".ytd-companion-slot-renderer",
    ".ytd-merch-shelf-renderer",
    ".ytd-player-legacy-desktop-watch-ads-renderer",
    ".ytd-promoted-sparkles-text-search-renderer",
    ".ytd-promoted-video-renderer",
    ".ytd-search-pyv-renderer",
    ".ytd-video-masthead-ad-v3-renderer",
    ".ytp-ad-action-interstitial-background-container",
    ".ytp-ad-action-interstitial-slot",
    ".ytp-ad-image-overlay",
    ".ytp-ad-overlay-container",
    ".ytp-ad-progress",
    ".ytp-ad-progress-list",
    '[class*="ytd-display-ad-"]',
    '[layout*="display-ad-"]',
    'a[href^="http://www.youtube.com/cthru?"]',
    'a[href^="https://www.youtube.com/cthru?"]',
    "ytd-action-companion-ad-renderer",
    "ytd-banner-promo-renderer",
    "ytd-compact-promoted-video-renderer",
    "ytd-companion-slot-renderer",
    "ytd-display-ad-renderer",
    "ytd-promoted-sparkles-text-search-renderer",
    "ytd-promoted-sparkles-web-renderer",
    "ytd-search-pyv-renderer",
    "ytd-single-option-survey-renderer",
    "ytd-video-masthead-ad-advertiser-info-renderer",
    "ytd-video-masthead-ad-v3-renderer",
    "YTM-PROMOTED-VIDEO-RENDERER",
];
/**
* Adds CSS to the page
*/
const hideElements = () => {
    const selectors = hiddenCSS;
    if (!selectors) {
        return;
    }
    const rule = selectors.join(", ") + " { display: none!important; }";
    const style = document.createElement("style");
    style.textContent = rule;
    document.head.appendChild(style);
};
/**
* Calls the "callback" function on every DOM change, but not for the tracked events
* @param {Function} callback callback function
*/
const observeDomChanges = callback => {
    const domMutationObserver = new MutationObserver(mutations => {
        callback(mutations);
    });
    domMutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
};
/**
* This function is supposed to be called on every DOM change
*/
const hideDynamicAds = () => {
    const elements = document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");
    if (elements.length === 0) {
        return;
    }
    elements.forEach(el => {
        if (el.parentNode && el.parentNode.parentNode) {
            const parent = el.parentNode.parentNode;
            if (parent.localName === "ytd-rich-item-renderer") {
                parent.style.display = "none";
            }
        }
    });
};
/**
* This function checks if the video ads are currently running
* and auto-clicks the skip button.
*/
const autoSkipAds = () => {
    // If there's a video that plays the ad at this moment, scroll this ad
    if (document.querySelector(".ad-showing")) {
        const video = document.querySelector("video");
        if (video && video.duration) {
            video.currentTime = video.duration;
            // Skip button should appear after that,
            // now simply click it automatically
            setTimeout(() => {
                const skipBtn = document.querySelector("button.ytp-ad-skip-button");
                if (skipBtn) {
                    skipBtn.click();
                }
            }, 100);
        }
    }
};
/**
* This function overrides a property on the specified object.
*
* @param {object} obj object to look for properties in
* @param {string} propertyName property to override
* @param {*} overrideValue value to set
*/
const overrideObject = (obj, propertyName, overrideValue) => {
    if (!obj) {
        return false;
    }
    let overriden = false;
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && key === propertyName) {
            obj[key] = overrideValue;
            overriden = true;
        } else if (obj.hasOwnProperty(key) && typeof obj[key] === "object") {
            if (overrideObject(obj[key], propertyName, overrideValue)) {
                overriden = true;
            }
        }
    }
    return overriden;
};
/**
* Overrides JSON.parse and Response.json functions.
* Examines these functions arguments, looks for properties with the specified name there
* and if it exists, changes it's value to what was specified.
*
* @param {string} propertyName name of the property
* @param {*} overrideValue new value for the property
*/
const jsonOverride = (propertyName, overrideValue) => {
    const nativeJSONParse = JSON.parse;
    JSON.parse = (...args) => {
        const obj = nativeJSONParse.apply(this, args);
        // Override it's props and return back to the caller
        overrideObject(obj, propertyName, overrideValue);
        return obj;
    };
    // Override Response.prototype.json
    Response.prototype.json = new Proxy(Response.prototype.json, {
        async apply(...args) {
            // Call the target function, get the original Promise
            const result = await Reflect.apply(...args);
            // Create a new one and override the JSON inside
            overrideObject(result, propertyName, overrideValue);
            return result;
        },
    });
};
// Removes ads metadata from YouTube XHR requests
jsonOverride("adPlacements", []);
jsonOverride("playerAds", []);
// Applies CSS that hides YouTube ad elements
hideElements();
// Some changes should be re-evaluated on every page change
hideDynamicAds();
autoSkipAds();
observeDomChanges(() => {
    hideDynamicAds();
    autoSkipAds();
});`});var wr={};var Cr,Sr=v(()=>{"use strict";c();q();Cr=require("electron");Ar();Cr.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i?.once("dom-ready",()=>{D.store.plugins?.YoutubeAdblock?.enabled&&(i.url.includes("youtube.com/embed/")||i.url.includes("discordsays")&&i.url.includes("youtube.com"))&&i.executeJavaScript(Ir)})})})});var Tr,xr=v(()=>{c();Ht();Yt();or();cr();hr();fr();dr();yr();Sr();Tr={AppleMusicRichPresence:$e,ConsoleShortcuts:Je,FixSpotifyEmbeds:ir,FixYoutubeEmbeds:ar,OpenInApp:tt,Translate:rt,VoiceMessages:nt,XSOverlay:it,YoutubeAdblock:wr}});var ot,br,Er=v(()=>{"use strict";c();Ie();ot=require("electron");xr();br={};for(let[e,t]of Object.entries(Tr)){let r=Object.entries(t);if(!r.length)continue;let i=br[e]={};for(let[n,o]of r){let s=`VencordPluginNative_${e}_${n}`;ot.ipcMain.handle(s,o),i[n]=s}}ot.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=br})});function st(e,t=300){let r;return function(...i){clearTimeout(r),r=setTimeout(()=>{e(...i)},t)}}var Dr=v(()=>{"use strict";c()});var Pr,Rr=v(()=>{c();Pr="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4uY3NzIgogICAgICAgICAgICBpbnRlZ3JpdHk9InNoYTI1Ni10aUpQUTJPMDR6L3BaL0F3ZHlJZ2hyT016ZXdmK1BJdkVsMVlLYlF2c1prPSIKICAgICAgICAgICAgY3Jvc3NvcmlnaW49ImFub255bW91cyIKICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIgogICAgICAgIC8+CiAgICAgICAgPHN0eWxlPgogICAgICAgICAgICBodG1sLAogICAgICAgICAgICBib2R5LAogICAgICAgICAgICAjY29udGFpbmVyIHsKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgICAgICB0b3A6IDA7CiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgICAgICB9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KICAgICAgICA8ZGl2IGlkPSJjb250YWluZXIiPjwvZGl2PgogICAgICAgIDxzY3JpcHQKICAgICAgICAgICAgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9sb2FkZXIuanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhMjU2LUtjVTQ4VEdyODRyN3VuRjdKNUlnQm85NWFlVnJFYnJHZTA0UzdUY0ZVanM9IgogICAgICAgICAgICBjcm9zc29yaWdpbj0iYW5vbnltb3VzIgogICAgICAgICAgICByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiCiAgICAgICAgPjwvc2NyaXB0PgoKICAgICAgICA8c2NyaXB0PgogICAgICAgICAgICByZXF1aXJlLmNvbmZpZyh7CiAgICAgICAgICAgICAgICBwYXRoczogewogICAgICAgICAgICAgICAgICAgIHZzOiAiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});function at(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function kr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Or(e,t){if(!e)return at(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return at(t);let i={},n="",o="";for(let s of r.split(Hn))if(s.length!==0)if(s.charAt(0)==="@"&&s.charAt(1)!==" "){i[n]=o.trim();let a=s.indexOf(" ");n=s.substring(1,a),o=s.substring(a+1)}else o+=" "+s.replace("\\n",`
`).replace(Yn,"@");return i[n]=o.trim(),delete i[""],at(t,i)}var Hn,Yn,_r=v(()=>{"use strict";c();Hn=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Yn=/^\\@/});function Lr(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":Mr.shell.openExternal(t)}return{action:"deny"}})}var Mr,Nr=v(()=>{"use strict";c();Mr=require("electron")});function ct(e,t){let r=(0,pe.normalize)(e),i=(0,pe.join)(e,t),n=(0,pe.normalize)(i);return n.startsWith(r)?n:null}function Gr(){return(0,Q.readFile)(he,"utf-8").catch(()=>"")}async function $n(){let e=await(0,Q.readdir)(H).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let i=await Vr(r).then(kr).catch(()=>null);i!=null&&t.push(Or(i,r))}return t}function Vr(e){e=e.replace(/\?v=\d+$/,"");let t=ct(H,e);return t?(0,Q.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function zr(e){let t;(0,Q.open)(he,"a+").then(i=>{i.close(),t=(0,X.watch)(he,{persistent:!1},st(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await Gr())},50))}).catch(()=>{});let r=(0,X.watch)(H,{persistent:!1},st(()=>{e.webContents.postMessage("VencordThemeUpdate",void 0)}));e.once("closed",()=>{t?.close(),r.close()})}var C,X,Q,pe,lt=v(()=>{"use strict";c();_t();Er();q();Dr();Ie();C=require("electron");Rr();X=require("fs"),Q=require("fs/promises"),pe=require("path");_r();fe();Nr();(0,X.mkdirSync)(H,{recursive:!0});C.ipcMain.handle("VencordOpenQuickCss",()=>C.shell.openPath(he));C.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!Qt.includes(r))throw"Disallowed protocol.";C.shell.openExternal(t)});C.ipcMain.handle("VencordGetQuickCss",()=>Gr());C.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,X.writeFileSync)(he,t));C.ipcMain.handle("VencordGetThemesDir",()=>H);C.ipcMain.handle("VencordGetThemesList",()=>$n());C.ipcMain.handle("VencordGetThemeData",(e,t)=>Vr(t));C.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${C.systemPreferences.getAccentColor?.()||""}`}));C.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=C.BrowserWindow.getAllWindows().find(i=>i.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new C.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,pe.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});Lr(r),await r.loadURL(`data:text/html;base64,${Pr}`)})});function un(e,t,r){let i=t;if(t in e)return void r(e[i]);Object.defineProperty(e,t,{set(n){delete e[i],e[i]=n,r(n)},configurable:!0,enumerable:!1})}var hn=v(()=>{"use strict";c()});var mi={};function di(e,t){let r=e.slice(4).split(".").map(Number),i=t.slice(4).split(".").map(Number);for(let n=0;n<i.length;n++){if(r[n]>i[n])return!0;if(r[n]<i[n])return!1}return!1}function vi(){if(!process.env.DISABLE_UPDATER_AUTO_PATCHING)try{let e=(0,M.dirname)(process.execPath),t=(0,M.basename)(e),r=(0,M.join)(e,".."),i=(0,P.readdirSync)(r).reduce((a,l)=>l.startsWith("app-")&&di(l,a)?l:a,t);if(i===t)return;let n=(0,M.join)(r,i,"resources"),o=(0,M.join)(n,"app.asar"),s=(0,M.join)(n,"_app.asar");if(!(0,P.existsSync)(o)||(0,P.statSync)(o).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,P.renameSync)(o,s),(0,P.mkdirSync)(o),(0,P.writeFileSync)((0,M.join)(o,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,P.writeFileSync)((0,M.join)(o,"index.js"),`require(${JSON.stringify((0,M.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}var fn,P,M,pn=v(()=>{"use strict";c();fn=require("electron"),P=require("original-fs"),M=require("path");fn.app.on("before-quit",vi)});var Ci={};var T,Y,yi,Ii,mt,Ai,gn=v(()=>{"use strict";c();hn();T=Be(require("electron")),Y=require("path");lt();q();fe();console.log("[Vencord] Starting up...");yi=require.main.filename,Ii=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",mt=(0,Y.join)((0,Y.dirname)(yi),"..",Ii),Ai=require((0,Y.join)(mt,"package.json"));require.main.filename=(0,Y.join)(mt,Ai.main);T.app.setAppPath(mt);if(Re)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=D.store;if(pn(),e.winCtrlQ){let n=T.Menu.buildFromTemplate;T.Menu.buildFromTemplate=function(o){if(o[0]?.label==="&File"){let{submenu:s}=o[0];Array.isArray(s)&&s.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>T.app.quit()})}return n.call(this,o)}}class t extends T.default.BrowserWindow{constructor(o){if(o?.webPreferences?.preload&&o.title){let s=o.webPreferences.preload;o.webPreferences.preload=(0,Y.join)(__dirname,"preload.js"),o.webPreferences.sandbox=!1,o.webPreferences.backgroundThrottling=!1,e.frameless?o.frame=!1:e.winNativeTitleBar&&delete o.frame,e.transparent&&(o.transparent=!0,o.backgroundColor="#00000000"),e.disableMinSize&&(o.minWidth=0,o.minHeight=0),!1&&(o.backgroundColor="#00000000",e.macosVibrancyStyle&&(o.vibrancy=e.macosVibrancyStyle)),process.env.DISCORD_PRELOAD=s,super(o),e.disableMinSize&&(this.setMinimumSize=(l,d)=>{}),zr(this)}else super(o)}}Object.assign(t,T.default.BrowserWindow),Object.defineProperty(t,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...T.default,BrowserWindow:t},un(global,"appSettings",n=>{n.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0)}),process.env.DATA_DIR=(0,Y.join)(T.app.getPath("userData"),"..","Vencord");let i=T.app.commandLine.appendSwitch;T.app.commandLine.appendSwitch=function(...n){if(n[0]==="disable-features"){let o=new Set((n[1]??"").split(","));o.add("WidgetLayering"),o.add("UseEcoQoSForBackgroundProcess"),n[1]+=[...o].join(",")}return i.apply(this,n)},T.app.commandLine.appendSwitch("disable-renderer-backgrounding"),T.app.commandLine.appendSwitch("disable-background-timer-throttling"),T.app.commandLine.appendSwitch("disable-backgrounding-occluded-windows")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});c();var te=require("electron"),dn=require("path");lt();q();fe();c();var an=require("electron");c();var jr=require("module"),Jn=(0,jr.createRequire)("/"),_e,qn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{_e=Jn("worker_threads").Worker}catch{}var Xn=_e?function(e,t,r,i,n){var o=!1,s=new _e(e+qn,{eval:!0}).on("error",function(a){return n(a,null)}).on("message",function(a){return n(null,a)}).on("exit",function(a){a&&!o&&n(new Error("exited with code "+a),null)});return s.postMessage(r,i),s.terminate=function(){return o=!0,_e.prototype.terminate.call(s)},s}:function(e,t,r,i,n){setImmediate(function(){return n(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},E=Uint8Array,ee=Uint16Array,Fr=Int32Array,ft=new E([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),pt=new E([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zr=new E([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Wr=function(e,t){for(var r=new ee(31),i=0;i<31;++i)r[i]=t+=1<<e[i-1];for(var n=new Fr(r[30]),i=1;i<30;++i)for(var o=r[i];o<r[i+1];++o)n[o]=o-r[i]<<5|i;return{b:r,r:n}},Kr=Wr(ft,2),gt=Kr.b,Qn=Kr.r;gt[28]=258,Qn[258]=28;var Hr=Wr(pt,0),Yr=Hr.b,jo=Hr.r,Ne=new ee(32768);for(m=0;m<32768;++m)F=(m&43690)>>1|(m&21845)<<1,F=(F&52428)>>2|(F&13107)<<2,F=(F&61680)>>4|(F&3855)<<4,Ne[m]=((F&65280)>>8|(F&255)<<8)>>1;var F,m,ge=function(e,t,r){for(var i=e.length,n=0,o=new ee(t);n<i;++n)e[n]&&++o[e[n]-1];var s=new ee(t);for(n=1;n<t;++n)s[n]=s[n-1]+o[n-1]<<1;var a;if(r){a=new ee(1<<t);var l=15-t;for(n=0;n<i;++n)if(e[n])for(var d=n<<4|e[n],g=t-e[n],u=s[e[n]-1]++<<g,y=u|(1<<g)-1;u<=y;++u)a[Ne[u]>>l]=d}else for(a=new ee(i),n=0;n<i;++n)e[n]&&(a[n]=Ne[s[e[n]-1]++]>>15-e[n]);return a},xe=new E(288);for(m=0;m<144;++m)xe[m]=8;var m;for(m=144;m<256;++m)xe[m]=9;var m;for(m=256;m<280;++m)xe[m]=7;var m;for(m=280;m<288;++m)xe[m]=8;var m,$r=new E(32);for(m=0;m<32;++m)$r[m]=5;var m;var Jr=ge(xe,9,1);var qr=ge($r,5,1),Me=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},_=function(e,t,r){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(t&7)&r},Le=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},Xr=function(e){return(e+7)/8|0},Ge=function(e,t,r){return(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length),new E(e.subarray(t,r))};var Qr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],b=function(e,t,r){var i=new Error(t||Qr[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,b),!r)throw i;return i},en=function(e,t,r,i){var n=e.length,o=i?i.length:0;if(!n||t.f&&!t.l)return r||new E(0);var s=!r,a=s||t.i!=2,l=t.i;s&&(r=new E(n*3));var d=function(St){var Tt=r.length;if(St>Tt){var xt=new E(Math.max(Tt*2,St));xt.set(r),r=xt}},g=t.f||0,u=t.p||0,y=t.b||0,G=t.l,re=t.d,U=t.m,R=t.n,k=n*8;do{if(!G){g=_(e,u,1);var Z=_(e,u+1,3);if(u+=3,Z)if(Z==1)G=Jr,re=qr,U=9,R=5;else if(Z==2){var ve=_(e,u,31)+257,be=_(e,u+10,15)+4,$=ve+_(e,u+5,31)+1;u+=14;for(var O=new E($),ie=new E(19),w=0;w<be;++w)ie[Zr[w]]=_(e,u+w*3,7);u+=be*3;for(var me=Me(ie),vn=(1<<me)-1,mn=ge(ie,me,1),w=0;w<$;){var yt=mn[_(e,u,vn)];u+=yt&15;var x=yt>>4;if(x<16)O[w++]=x;else{var oe=0,Ee=0;for(x==16?(Ee=3+_(e,u,3),u+=2,oe=O[w-1]):x==17?(Ee=3+_(e,u,7),u+=3):x==18&&(Ee=11+_(e,u,127),u+=7);Ee--;)O[w++]=oe}}var It=O.subarray(0,ve),W=O.subarray(ve);U=Me(It),R=Me(W),G=ge(It,U,1),re=ge(W,R,1)}else b(1);else{var x=Xr(u)+4,B=e[x-4]|e[x-3]<<8,ne=x+B;if(ne>n){l&&b(0);break}a&&d(y+B),r.set(e.subarray(x,ne),y),t.b=y+=B,t.p=u=ne*8,t.f=g;continue}if(u>k){l&&b(0);break}}a&&d(y+131072);for(var yn=(1<<U)-1,In=(1<<R)-1,Ve=u;;Ve=u){var oe=G[Le(e,u)&yn],se=oe>>4;if(u+=oe&15,u>k){l&&b(0);break}if(oe||b(2),se<256)r[y++]=se;else if(se==256){Ve=u,G=null;break}else{var At=se-254;if(se>264){var w=se-257,ye=ft[w];At=_(e,u,(1<<ye)-1)+gt[w],u+=ye}var ze=re[Le(e,u)&In],Ue=ze>>4;ze||b(3),u+=ze&15;var W=Yr[Ue];if(Ue>3){var ye=pt[Ue];W+=Le(e,u)&(1<<ye)-1,u+=ye}if(u>k){l&&b(0);break}a&&d(y+131072);var Ct=y+At;if(y<W){var wt=o-W,An=Math.min(W,Ct);for(wt+y<0&&b(3);y<An;++y)r[y]=i[wt+y]}for(;y<Ct;++y)r[y]=r[y-W]}}t.l=G,t.p=Ve,t.b=y,t.f=g,G&&(g=1,t.m=U,t.d=re,t.n=R)}while(!g);return y!=r.length&&s?Ge(r,0,y):r.subarray(0,y)};var ei=new E(0);var ti=function(e,t){var r={};for(var i in e)r[i]=e[i];for(var i in t)r[i]=t[i];return r},Ur=function(e,t,r){for(var i=e(),n=e.toString(),o=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<i.length;++s){var a=i[s],l=o[s];if(typeof a=="function"){t+=";"+l+"=";var d=a.toString();if(a.prototype)if(d.indexOf("[native code]")!=-1){var g=d.indexOf(" ",8)+1;t+=d.slice(g,d.indexOf("(",g))}else{t+=d;for(var u in a.prototype)t+=";"+l+".prototype."+u+"="+a.prototype[u].toString()}else t+=d}else r[l]=a}return t},Oe=[],ri=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},ni=function(e,t,r,i){if(!Oe[r]){for(var n="",o={},s=e.length-1,a=0;a<s;++a)n=Ur(e[a],n,o);Oe[r]={c:Ur(e[s],n,o),e:o}}var l=ti({},Oe[r].e);return Xn(Oe[r].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,l,ri(l),i)},ii=function(){return[E,ee,Fr,ft,pt,Zr,gt,Yr,Jr,qr,Ne,Qr,ge,Me,_,Le,Xr,Ge,b,en,dt,tn,rn]};var tn=function(e){return postMessage(e,[e.buffer])},rn=function(e){return e&&{out:e.size&&new E(e.size),dictionary:e.dictionary}},oi=function(e,t,r,i,n,o){var s=ni(r,i,n,function(a,l){s.terminate(),o(a,l)});return s.postMessage([e,t],t.consume?[e.buffer]:[]),function(){s.terminate()}};var V=function(e,t){return e[t]|e[t+1]<<8},N=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},ut=function(e,t){return N(e,t)+N(e,t+4)*4294967296};function si(e,t,r){return r||(r=t,t={}),typeof r!="function"&&b(7),oi(e,t,[ii],function(i){return tn(dt(i.data[0],rn(i.data[1])))},1,r)}function dt(e,t){return en(e,{i:2},t&&t.out,t&&t.dictionary)}var ht=typeof TextDecoder<"u"&&new TextDecoder,ai=0;try{ht.decode(ei,{stream:!0}),ai=1}catch{}var ci=function(e){for(var t="",r=0;;){var i=e[r++],n=(i>127)+(i>223)+(i>239);if(r+n>e.length)return{s:t,r:Ge(e,r-1)};n?n==3?(i=((i&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|i>>10,56320|i&1023)):n&1?t+=String.fromCharCode((i&31)<<6|e[r++]&63):t+=String.fromCharCode((i&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(i)}};function li(e,t){if(t){for(var r="",i=0;i<e.length;i+=16384)r+=String.fromCharCode.apply(null,e.subarray(i,i+16384));return r}else{if(ht)return ht.decode(e);var n=ci(e),o=n.s,r=n.r;return r.length&&b(8),o}}var ui=function(e,t){return t+30+V(e,t+26)+V(e,t+28)},hi=function(e,t,r){var i=V(e,t+28),n=li(e.subarray(t+46,t+46+i),!(V(e,t+8)&2048)),o=t+46+i,s=N(e,t+20),a=r&&s==4294967295?fi(e,o):[s,N(e,t+24),N(e,t+42)],l=a[0],d=a[1],g=a[2];return[V(e,t+10),l,d,n,o+V(e,t+30)+V(e,t+32),g]},fi=function(e,t){for(;V(e,t)!=1;t+=4+V(e,t+2));return[ut(e,t+12),ut(e,t+4),ut(e,t+20)]};var Br=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function nn(e,t,r){r||(r=t,t={}),typeof r!="function"&&b(7);var i=[],n=function(){for(var R=0;R<i.length;++R)i[R]()},o={},s=function(R,k){Br(function(){r(R,k)})};Br(function(){s=r});for(var a=e.length-22;N(e,a)!=101010256;--a)if(!a||e.length-a>65558)return s(b(13,0,1),null),n;var l=V(e,a+8);if(l){var d=l,g=N(e,a+16),u=g==4294967295||d==65535;if(u){var y=N(e,a-12);u=N(e,y)==101075792,u&&(d=l=N(e,y+32),g=N(e,y+48))}for(var G=t&&t.filter,re=function(R){var k=hi(e,g,u),Z=k[0],x=k[1],B=k[2],ne=k[3],ve=k[4],be=k[5],$=ui(e,be);g=ve;var O=function(w,me){w?(n(),s(w,null)):(me&&(o[ne]=me),--l||s(null,o))};if(!G||G({name:ne,size:x,originalSize:B,compression:Z}))if(!Z)O(null,Ge(e,$,$+x));else if(Z==8){var ie=e.subarray($,$+x);if(B<524288||x>.8*B)try{O(null,dt(ie,{out:new E(B)}))}catch(w){O(w,null)}else i.push(si(ie,{size:B},O))}else O(b(14,"unknown compression type "+Z,1),null);else O(null,null)},U=0;U<d;++U)re(U)}else s(null,{});return n}var cn=require("fs"),z=require("fs/promises"),de=require("path");fe();c();function on(e){function t(s,a,l,d){let g=0;return g+=s<<0,g+=a<<8,g+=l<<16,g+=d<<24>>>0,g}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,i=e[4]===2;if(!i&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(i){let s=t(e[8],e[9],e[10],e[11]),a=t(e[12],e[13],e[14],e[15]),l=16+s+a;return e.subarray(l,e.length)}let o=12+t(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}c();var sn=Be(require("https"));function vt(e,t={}){return new Promise((r,i)=>{sn.default.get(e,t,n=>{let{statusCode:o,statusMessage:s,headers:a}=n;if(o>=400)return void i(`${o}: ${s} - ${e}`);if(o>=300)return void r(vt(a.location,t));let l=[];n.on("error",i),n.on("data",d=>l.push(d)),n.once("end",()=>r(Buffer.concat(l)))})})}var pi=(0,de.join)(Pe,"ExtensionCache");async function gi(e,t){return await(0,z.mkdir)(t,{recursive:!0}),new Promise((r,i)=>{nn(e,(n,o)=>{if(n)return void i(n);Promise.all(Object.keys(o).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,z.mkdir)((0,de.join)(t,s),{recursive:!0});let a=s.split("/"),l=a.pop(),d=a.join("/"),g=(0,de.join)(t,d);d&&await(0,z.mkdir)(g,{recursive:!0}),await(0,z.writeFile)((0,de.join)(g,l),o[s])})).then(()=>r()).catch(s=>{(0,z.rm)(t,{recursive:!0,force:!0}),i(s)})})})}async function ln(e){let t=(0,de.join)(pi,`${e}`);try{await(0,z.access)(t,cn.constants.F_OK)}catch{let i=`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=${process.versions.chrome}`,n=await vt(i,{headers:{"User-Agent":`Electron ${process.versions.electron} ~ Vencord (https://github.com/Vendicated/Vencord)`}});await gi(on(n),t).catch(console.error)}an.session.defaultSession.loadExtension(t)}Re||te.app.whenReady().then(()=>{te.protocol.registerFileProtocol("vencord",({url:n},o)=>{let s=n.slice(10);if(s.endsWith("/")&&(s=s.slice(0,-1)),s.startsWith("/themes/")){let a=s.slice(8),l=ct(H,a);if(!l){o({statusCode:403});return}o(l.replace(/\?v=\d+$/,""));return}switch(s){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,dn.join)(__dirname,s));break;default:o({statusCode:403})}});try{D.store.enableReactDevtools&&ln("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(n=>console.error("[Vencord] Failed to install React Developer Tools",n))}catch{}let e=(n,o)=>Object.keys(n).find(s=>s.toLowerCase()===o),t=n=>{let o={};return n.split(";").forEach(s=>{let[a,...l]=s.trim().split(/\s+/g);a&&!Object.prototype.hasOwnProperty.call(o,a)&&(o[a]=l)}),o},r=n=>Object.entries(n).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),i=n=>{let o=e(n,"content-security-policy");if(o){let s=t(n[o][0]);for(let a of["style-src","connect-src","img-src","font-src","media-src","worker-src"])s[a]??=[],s[a].push("*","blob:","data:","vencord:","'unsafe-inline'");s["script-src"]??=[],s["script-src"].push("'unsafe-eval'","https://cdn.jsdelivr.net","https://cdnjs.cloudflare.com"),n[o]=[r(s)]}};te.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:n,resourceType:o},s)=>{if(n&&(o==="mainFrame"&&i(n),o==="stylesheet")){let a=e(n,"content-type");a&&(n[a]=["text/css"])}s({cancel:!1,responseHeaders:n})}),te.session.defaultSession.webRequest.onHeadersReceived=()=>{}});gn();
//# sourceURL=file:///VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */

// Vencord 19b703d5
// Standalone: false
// Platform: win32
// Updater Disabled: false
"use strict";var _n=Object.create;var Ae=Object.defineProperty;var Gn=Object.getOwnPropertyDescriptor;var zn=Object.getOwnPropertyNames;var Ln=Object.getPrototypeOf,Nn=Object.prototype.hasOwnProperty;var Ce=(e,t)=>()=>(e&&(t=e(e=0)),t);var Q=(e,t)=>{for(var n in t)Ae(e,n,{get:t[n],enumerable:!0})},gt=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of zn(t))!Nn.call(e,r)&&r!==n&&Ae(e,r,{get:()=>t[r],enumerable:!(i=Gn(t,r))||i.enumerable});return e};var Un=(e,t,n)=>(n=e!=null?_n(Ln(e)):{},gt(t||!e||!e.__esModule?Ae(n,"default",{value:e,enumerable:!0}):n,e)),Vn=e=>gt(Ae({},"__esModule",{value:!0}),e);var c=Ce(()=>{"use strict"});var ue=Ce(()=>{"use strict";c()});function he(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var dt=Ce(()=>{"use strict";c()});var Kn={};function ee(...e){let t={cwd:yt};return Ge?_e("flatpak-spawn",["--host","git",...e],t):_e("git",e,t)}async function Bn(){return(await ee("remote","get-url","origin")).stdout.trim().replace(/git@(.+):/,"https://$1/").replace(/\.git$/,"")}async function jn(){await ee("fetch");let e=(await ee("branch","--show-current")).stdout.trim();if(!((await ee("ls-remote","origin",e)).stdout.length>0))return[];let i=(await ee("log",`HEAD...origin/${e}`,"--pretty=format:%an/%h/%s")).stdout.trim();return i?i.split(`
`).map(r=>{let[s,o,...a]=r.split("/");return{hash:o,author:s,message:a.join("/").split(`
`)[0]}}):[]}async function Fn(){return(await ee("pull")).stdout.includes("Fast-forward")}async function Zn(){return!(await _e(Ge?"flatpak-spawn":"node",Ge?["--host","node","scripts/build/build.mjs"]:["scripts/build/build.mjs"],{cwd:yt})).stderr.includes("Build failed")}var vt,fe,mt,It,yt,_e,Ge,At=Ce(()=>{"use strict";c();ue();vt=require("child_process"),fe=require("electron"),mt=require("path"),It=require("util");dt();yt=(0,mt.join)(__dirname,".."),_e=(0,It.promisify)(vt.execFile),Ge=!1;fe.ipcMain.handle("VencordGetRepo",he(Bn));fe.ipcMain.handle("VencordGetUpdates",he(jn));fe.ipcMain.handle("VencordUpdate",he(Fn));fe.ipcMain.handle("VencordBuild",he(Zn))});c();var H=require("electron"),Dn=require("path");c();c();At();c();ue();var Je=require("electron");c();var Ve={};Q(Ve,{fetchTrackData:()=>er});c();c();c();c();var I=11400714785074694791n,w=14029467366897019727n,Ct=1609587929392839161n,pe=9650029242287828579n,wt=2870177450012600261n,Tt=64n,Wn=2n**Tt-1n,Hn=new TextEncoder;function St(e,t,n,i){return BigInt(e)|BigInt(t)<<16n|BigInt(n)<<32n|BigInt(i)<<48n}function N(e,t){return BigInt(e[t])|BigInt(e[t+1])<<8n|BigInt(e[t+2])<<16n|BigInt(e[t+3])<<24n|BigInt(e[t+4])<<32n|BigInt(e[t+5])<<40n|BigInt(e[t+6])<<48n|BigInt(e[t+7])<<56n}function y(e,t){return e<<t&Wn|e>>Tt-t}function h(e){return BigInt.asUintN(64,e)}var Le=class{#t;#n;#r;#i;#o;#s;#a;#e;constructor(t=0){this.reset(t)}reset(t=this.#t){return this.#t=BigInt.asUintN(32,BigInt(t)),this.#n=h(this.#t+I+w),this.#r=h(this.#t+w),this.#i=this.#t,this.#o=h(this.#t-I),this.#s=null,this.#a=0,this.#e=0,this}update(t){typeof t=="string"&&(t=Hn.encode(t));let n=0,i=t.length,r=n+i;if(i===0)return this;if(this.#a+=i,this.#e===0&&(this.#s=new Uint8Array(32)),this.#e+i<32)return this.#s.set(t.subarray(0,i),this.#e),this.#e+=i,this;if(this.#e>0){this.#s.set(t.subarray(0,32-this.#e),this.#e);let s=0,o;o=N(this.#s,s),this.#n=h(y(h(this.#n+o*w),31n)*I),s+=8,o=N(this.memory,s),this.#r=h(y(h(this.#r+o*w),31n)*I),s+=8,o=N(this.memory,s),this.#i=h(y(h(this.#i+o*w),31n)*I),s+=8,o=N(this.memory,s),this.#o=h(y(h(this.#o+o*w),31n)*I),n+=32-this.#e,this.#e=0}if(n<=r-32){let s=r-32;do{let o;o=N(t,n),this.#n=h(y(h(this.#n+o*w),31n)*I),n+=8,o=N(t,n),this.#r=h(y(h(this.#r+o*w),31n)*I),n+=8,o=N(t,n),this.#i=h(y(h(this.#i+o*w),31n)*I),n+=8,o=N(t,n),this.#o=h(y(h(this.#o+o*w),31n)*I),n+=8}while(n<=s)}return n<r&&(this.#s.set(t.subarray(n,r),this.#e),this.#e=r-n),this}digest(){let t=this.#s,n=this.#e,i=0,r=0n,s=0n,o=0n;for(this.#a>=32?(r=y(this.#n,1n)+y(this.#r,7n)+y(this.#i,12n)+y(this.#o,18n),r=h(r^y(h(this.#n*w),31n)*I),r=h(r*I+pe),r=h(r^y(h(this.#r*w),31n)*I),r=h(r*I+pe),r=h(r^y(h(this.#i*w),31n)*I),r=h(r*I+pe),r=h(r^y(h(this.#o*w),31n)*I),r=h(r*I+pe)):r=h(this.#t+wt),r+=BigInt(this.#a);i<=n-8;)o=N(t,i),o=h(y(h(o*w),31n)*I),r=h(y(r^o,27n)*I+pe),i+=8;for(i+4<=n&&(o=St(t[i+1]<<8|t[i],t[i+3]<<8|t[i+2],0,0),r=h(y(r^h(o*I),23n)*w+Ct),i+=4);i<n;)o=St(t[i++],0,0,0),r=h(y(r^h(o*wt),11n)*I);return s=h(r>>33n),r=h((r^s)*w),s=h(r>>29n),r=h((r^s)*Ct),s=h(r>>32n),r=h(r^s),r}};function xt(e,t=0){return new Le(t).update(e).digest()}var te="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),Yn=(()=>{let e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})();function $n(e){e=BigInt(e);let t=[],n=Math.ceil(Math.floor(Math.log2(Number(e))+1)/8);for(let r=0;r<n;r++)t.unshift(Number(e>>BigInt(8*r)&BigInt(255)));let i=new Uint8Array(t);return Yn?i:i.reverse()}function bt(e){let t=xt(e,0),n=$n(t);return[te[n[0]>>2],te[(n[0]&3)<<4|n[1]>>4],te[(n[1]&15)<<2|n[2]>>6],te[n[2]&63],te[n[3]>>2],te[(n[3]&3)<<4|n[3]>>4]].join("")}function Et(e){let t=typeof e=="string"?e:e.source;if(t=t.replaceAll(/#{intl::([\w$+/]*)(?:::(\w+))?}/g,(r,s,o)=>{let a=o==="raw"?s:bt(s),l=typeof e=="string";return!Number.isNaN(Number(a[0]))||a.includes("+")||a.includes("/")?l?`["${a}"]`:String.raw`(?:\["${a}"\])`.replaceAll("+","\\+"):l?`.${a}`:String.raw`(?:\.${a})`}),typeof e=="string")return t;let n=t.replaceAll("\\i",String.raw`(?:[A-Za-z_$][\w$]*)`),i=new RegExp(n,e.flags);return i.toString=e.toString.bind(e),i}var Dt=require("child_process"),Pt=require("util"),Rt=(0,Pt.promisify)(Dt.execFile);async function Ne(e){let{stdout:t}=await Rt("osascript",e.map(n=>["-e",n]).flat());return t}var k=null,Jn=/<script type="module" crossorigin src="([a-zA-Z0-9.\-/]+)"><\/script>/,Xn=Et(/Promise.allSettled\(\i\)\}const \i="([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*)"/),Ue,qn=async()=>{if(Ue)return Ue;let e=await fetch("https://music.apple.com/").then(r=>r.text()),t=new URL(e.match(Jn)[1],"https://music.apple.com/"),i=(await fetch(t).then(r=>r.text())).match(Xn)[1];return Ue=i,i};async function Qn({id:e,name:t,artist:n,album:i}){if(e===k?.id){if("data"in k)return k.data;if("failures"in k&&k.failures>=5)return null}try{let r=new URL("https://amp-api-edge.music.apple.com/v1/catalog/us/search");r.searchParams.set("platform","web"),r.searchParams.set("l","en-US"),r.searchParams.set("limit","1"),r.searchParams.set("with","serverBubbles"),r.searchParams.set("types","songs"),r.searchParams.set("term",`${t} ${n} ${i}`),r.searchParams.set("include[songs]","artists");let s=await qn(),o=await fetch(r,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9",authorization:`Bearer ${s}`,"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",origin:"https://music.apple.com"}}).then(a=>a.json()).then(a=>a.results.song.data[0]);return k={id:e,data:{appleMusicLink:o.attributes.url,songLink:`https://song.link/i/${o.id}`,albumArtwork:o.attributes.artwork.url.replace("{w}x{h}","512x512"),artistArtwork:o.relationships.artists.data[0].attributes.artwork.url.replace("{w}x{h}","512x512")}},k.data}catch(r){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",r),k={id:e,failures:(e===k?.id&&"failures"in k?k.failures:0)+1},null}}async function er(){try{await Rt("pgrep",["^Music$"])}catch{return null}if(await Ne(['tell application "Music"',"get player state","end tell"]).then(f=>f.trim())!=="playing")return null;let t=await Ne(['tell application "Music"',"get player position","end tell"]).then(f=>Number.parseFloat(f.trim())),n=await Ne(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[i,r,s,o,a]=n.split(`
`).filter(f=>!!f),l=Number.parseFloat(a),p=await Qn({id:i,name:r,artist:o,album:s});return{name:r,album:s,artist:o,playerPosition:t,duration:l,...p}}var Be={};Q(Be,{initDevtoolsOpenEagerLoad:()=>tr});c();function tr(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var Nt={};c();c();ue();c();var je=Symbol("SettingsStore.isProxy"),kt=Symbol("SettingsStore.getRawTarget"),ge=class{pathListeners=new Map;globalListeners=new Set;proxyContexts=new WeakMap;proxyHandler=(()=>{let t=this;return{get(n,i,r){if(i===je)return!0;if(i===kt)return n;let s=Reflect.get(n,i,r),o=t.proxyContexts.get(n);if(o==null)return s;let{root:a,path:l}=o;if(!(i in n)&&t.getDefaultValue!=null&&(s=t.getDefaultValue({target:n,key:i,root:a,path:l})),typeof s=="object"&&s!==null&&!s[je]){let p=`${l}${l&&"."}${i}`;return t.makeProxy(s,a,p)}return s},set(n,i,r){if(r?.[je]&&(r=r[kt]),n[i]===r)return!0;if(!Reflect.set(n,i,r))return!1;let s=t.proxyContexts.get(n);if(s==null)return!0;let{root:o,path:a}=s,l=`${a}${a&&"."}${i}`;return t.notifyListeners(l,r,o),!0},deleteProperty(n,i){if(!Reflect.deleteProperty(n,i))return!1;let r=t.proxyContexts.get(n);if(r==null)return!0;let{root:s,path:o}=r,a=`${o}${o&&"."}${i}`;return t.notifyListeners(a,void 0,s),!0}}})();constructor(t,n={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,n)}makeProxy(t,n=t,i=""){return this.proxyContexts.set(t,{root:n,path:i}),new Proxy(t,this.proxyHandler)}notifyListeners(t,n,i){let r=t.split(".");if(r.length>2&&r[0]==="plugins"){let s=r.slice(0,3),o=s.join("."),a=s.reduce((l,p)=>l[p],i);this.globalListeners.forEach(l=>l(i,o)),this.pathListeners.get(o)?.forEach(l=>l(a))}else this.globalListeners.forEach(s=>s(i,t));this.pathListeners.get(t)?.forEach(s=>s(n))}setData(t,n){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),n){let i=t,r=n.split(".");for(let s of r){if(!i){console.warn(`Settings#setData: Path ${n} does not exist in new data. Not dispatching update`);return}i=i[s]}this.pathListeners.get(n)?.forEach(s=>s(i))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,n){let i=this.pathListeners.get(t)??new Set;i.add(n),this.pathListeners.set(t,i)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,n){let i=this.pathListeners.get(t);i&&(i.delete(n),i.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}};c();function Fe(e,t){for(let n in t){let i=t[n];typeof i=="object"&&!Array.isArray(i)?(e[n]??={},Fe(e[n],i)):e[n]??=i}return e}var Te=require("electron"),K=require("fs");c();var Ot=require("electron"),j=require("path"),we=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,j.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,j.join)(Ot.app.getPath("userData"),"..","Vencord")),ne=(0,j.join)(we,"settings"),Z=(0,j.join)(we,"themes"),Se=(0,j.join)(ne,"quickCss.css"),Ze=(0,j.join)(ne,"settings.json"),Ke=(0,j.join)(ne,"native-settings.json"),Mt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"];(0,K.mkdirSync)(ne,{recursive:!0});function Gt(e,t){try{return JSON.parse((0,K.readFileSync)(t,"utf-8"))}catch(n){return n?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,n),{}}}var P=new ge(Gt("renderer",Ze));P.addGlobalChangeListener(()=>{try{(0,K.writeFileSync)(Ze,JSON.stringify(P.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});Te.ipcMain.handle("VencordGetSettingsDir",()=>ne);Te.ipcMain.on("VencordGetSettings",e=>e.returnValue=P.plain);Te.ipcMain.handle("VencordSetSettings",(e,t,n)=>{P.setData(t,n)});var nr={plugins:{}},zt=Gt("native",Ke);Fe(zt,nr);var _t=new ge(zt);_t.addGlobalChangeListener(()=>{try{(0,K.writeFileSync)(Ke,JSON.stringify(_t.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}});var Lt=require("electron");Lt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(n,{frame:i})=>{i?.once("dom-ready",()=>{if(i.url.startsWith("https://open.spotify.com/embed/")){let r=P.store.plugins?.FixSpotifyEmbeds;if(!r?.enabled)return;i.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${r.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var Vt={};c();var Ut=require("electron");Ut.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(n,{frame:i})=>{i?.once("dom-ready",()=>{if(i.url.startsWith("https://www.youtube.com/")){if(!P.store.plugins?.FixYoutubeEmbeds?.enabled)return;i.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})});var We={};Q(We,{resolveRedirect:()=>ir});c();var Bt=require("https"),rr=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function jt(e){return new Promise((t,n)=>{let i=(0,Bt.request)(new URL(e),{method:"HEAD"},r=>{t(r.headers.location?jt(r.headers.location):e)});i.on("error",n),i.end()})}async function ir(e,t){return rr.test(t)?jt(t):t}var He={};Q(He,{makeDeeplTranslateRequest:()=>or});c();async function or(e,t,n,i){let r=t?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let s=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${n}`},body:i}),o=await s.text();return{status:s.status,data:o}}catch(s){return{status:-1,data:String(s)}}}var Ye={};Q(Ye,{readRecording:()=>sr});c();var Ft=require("electron"),Zt=require("fs/promises"),de=require("path");async function sr(e,t){t=(0,de.normalize)(t);let n=(0,de.basename)(t),i=(0,de.normalize)(Ft.app.getPath("userData")+"/");if(console.log(n,i,t),n!=="recording.ogg"||!t.startsWith(i))return null;try{let r=await(0,Zt.readFile)(t);return new Uint8Array(r.buffer)}catch{return null}}var $e={};Q($e,{sendToOverlay:()=>ar});c();var Wt=require("dgram"),Kt;function ar(e,t){t.messageType=t.type;let n=JSON.stringify(t);Kt??=(0,Wt.createSocket)("udp4"),Kt.send(n,42069,"127.0.0.1")}var $t={};c();var Yt=require("electron");c();var Ht=`/* eslint-disable */

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
});`;Yt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(n,{frame:i})=>{i?.once("dom-ready",()=>{P.store.plugins?.YoutubeAdblock?.enabled&&(i.url.includes("youtube.com/embed/")||i.url.includes("discordsays")&&i.url.includes("youtube.com"))&&i.executeJavaScript(Ht)})})});var Jt={AppleMusicRichPresence:Ve,ConsoleShortcuts:Be,FixSpotifyEmbeds:Nt,FixYoutubeEmbeds:Vt,OpenInApp:We,Translate:He,VoiceMessages:Ye,XSOverlay:$e,YoutubeAdblock:$t};var Xt={};for(let[e,t]of Object.entries(Jt)){let n=Object.entries(t);if(!n.length)continue;let i=Xt[e]={};for(let[r,s]of n){let o=`VencordPluginNative_${e}_${r}`;Je.ipcMain.handle(o,s),i[r]=o}}Je.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=Xt});c();ue();var A=require("electron");c();var qt="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4uY3NzIgogICAgICAgICAgICBpbnRlZ3JpdHk9InNoYTI1Ni10aUpQUTJPMDR6L3BaL0F3ZHlJZ2hyT016ZXdmK1BJdkVsMVlLYlF2c1prPSIKICAgICAgICAgICAgY3Jvc3NvcmlnaW49ImFub255bW91cyIKICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIgogICAgICAgIC8+CiAgICAgICAgPHN0eWxlPgogICAgICAgICAgICBodG1sLAogICAgICAgICAgICBib2R5LAogICAgICAgICAgICAjY29udGFpbmVyIHsKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgICAgICB0b3A6IDA7CiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgICAgICB9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KICAgICAgICA8ZGl2IGlkPSJjb250YWluZXIiPjwvZGl2PgogICAgICAgIDxzY3JpcHQKICAgICAgICAgICAgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9sb2FkZXIuanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhMjU2LUtjVTQ4VEdyODRyN3VuRjdKNUlnQm85NWFlVnJFYnJHZTA0UzdUY0ZVanM9IgogICAgICAgICAgICBjcm9zc29yaWdpbj0iYW5vbnltb3VzIgogICAgICAgICAgICByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiCiAgICAgICAgPjwvc2NyaXB0PgoKICAgICAgICA8c2NyaXB0PgogICAgICAgICAgICByZXF1aXJlLmNvbmZpZyh7CiAgICAgICAgICAgICAgICBwYXRoczogewogICAgICAgICAgICAgICAgICAgIHZzOiAiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";var ve=require("fs"),ie=require("fs/promises"),re=require("path");c();var cr=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,lr=/^\\@/;function Xe(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function Qt(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function en(e,t){if(!e)return Xe(t);let n=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!n)return Xe(t);let i={},r="",s="";for(let o of n.split(cr))if(o.length!==0)if(o.charAt(0)==="@"&&o.charAt(1)!==" "){i[r]=s.trim();let a=o.indexOf(" ");r=o.substring(1,a),s=o.substring(a+1)}else s+=" "+o.replace("\\n",`
`).replace(lr,"@");return i[r]=s.trim(),delete i[""],Xe(t,i)}c();var tn=require("electron");function nn(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:n}=new URL(t)}catch{return{action:"deny"}}switch(n){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":tn.shell.openExternal(t)}return{action:"deny"}})}(0,ve.mkdirSync)(Z,{recursive:!0});function qe(e,t){let n=(0,re.normalize)(e),i=(0,re.join)(e,t),r=(0,re.normalize)(i);return r.startsWith(n)?r:null}function ur(){return(0,ie.readFile)(Se,"utf-8").catch(()=>"")}async function hr(){let e=await(0,ie.readdir)(Z).catch(()=>[]),t=[];for(let n of e){if(!n.endsWith(".css"))continue;let i=await rn(n).then(Qt).catch(()=>null);i!=null&&t.push(en(i,n))}return t}function rn(e){e=e.replace(/\?v=\d+$/,"");let t=qe(Z,e);return t?(0,ie.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}A.ipcMain.handle("VencordOpenQuickCss",()=>A.shell.openPath(Se));A.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:n}=new URL(t)}catch{throw"Malformed URL"}if(!Mt.includes(n))throw"Disallowed protocol.";A.shell.openExternal(t)});A.ipcMain.handle("VencordGetQuickCss",()=>ur());A.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,ve.writeFileSync)(Se,t));A.ipcMain.handle("VencordGetThemesDir",()=>Z);A.ipcMain.handle("VencordGetThemesList",()=>hr());A.ipcMain.handle("VencordGetThemeData",(e,t)=>rn(t));A.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${A.systemPreferences.getAccentColor?.()||""}`}));A.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=A.BrowserWindow.getAllWindows().find(i=>i.title===e);if(t&&!t.isDestroyed()){t.focus();return}let n=new A.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,re.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});nn(n),await n.loadURL(`data:text/html;base64,${qt}`)});c();var xn=require("electron");c();var an=require("module"),fr=(0,an.createRequire)("/"),be,pr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{be=fr("worker_threads").Worker}catch{}var gr=be?function(e,t,n,i,r){var s=!1,o=new be(e+pr,{eval:!0}).on("error",function(a){return r(a,null)}).on("message",function(a){return r(null,a)}).on("exit",function(a){a&&!s&&r(new Error("exited with code "+a),null)});return o.postMessage(n,i),o.terminate=function(){return s=!0,be.prototype.terminate.call(o)},o}:function(e,t,n,i,r){setImmediate(function(){return r(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var s=function(){};return{terminate:s,postMessage:s}},x=Uint8Array,W=Uint16Array,cn=Int32Array,tt=new x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),nt=new x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ln=new x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),un=function(e,t){for(var n=new W(31),i=0;i<31;++i)n[i]=t+=1<<e[i-1];for(var r=new cn(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},hn=un(tt,2),rt=hn.b,dr=hn.r;rt[28]=258,dr[258]=28;var fn=un(nt,0),pn=fn.b,Xi=fn.r,Pe=new W(32768);for(v=0;v<32768;++v)U=(v&43690)>>1|(v&21845)<<1,U=(U&52428)>>2|(U&13107)<<2,U=(U&61680)>>4|(U&3855)<<4,Pe[v]=((U&65280)>>8|(U&255)<<8)>>1;var U,v,oe=function(e,t,n){for(var i=e.length,r=0,s=new W(t);r<i;++r)e[r]&&++s[e[r]-1];var o=new W(t);for(r=1;r<t;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(n){a=new W(1<<t);var l=15-t;for(r=0;r<i;++r)if(e[r])for(var p=r<<4|e[r],f=t-e[r],u=o[e[r]-1]++<<f,m=u|(1<<f)-1;u<=m;++u)a[Pe[u]>>l]=p}else for(a=new W(i),r=0;r<i;++r)e[r]&&(a[r]=Pe[o[e[r]-1]++]>>15-e[r]);return a},me=new x(288);for(v=0;v<144;++v)me[v]=8;var v;for(v=144;v<256;++v)me[v]=9;var v;for(v=256;v<280;++v)me[v]=7;var v;for(v=280;v<288;++v)me[v]=8;var v,gn=new x(32);for(v=0;v<32;++v)gn[v]=5;var v;var dn=oe(me,9,1);var vn=oe(gn,5,1),Ee=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},R=function(e,t,n){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(t&7)&n},De=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},mn=function(e){return(e+7)/8|0},Re=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new x(e.subarray(t,n))};var In=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],T=function(e,t,n){var i=new Error(t||In[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,T),!n)throw i;return i},yn=function(e,t,n,i){var r=e.length,s=i?i.length:0;if(!r||t.f&&!t.l)return n||new x(0);var o=!n,a=o||t.i!=2,l=t.i;o&&(n=new x(r*3));var p=function(ht){var ft=n.length;if(ht>ft){var pt=new x(Math.max(ft*2,ht));pt.set(n),n=pt}},f=t.f||0,u=t.p||0,m=t.b||0,M=t.l,Y=t.d,z=t.m,b=t.n,E=r*8;do{if(!M){f=R(e,u,1);var V=R(e,u+1,3);if(u+=3,V)if(V==1)M=dn,Y=vn,z=9,b=5;else if(V==2){var ae=R(e,u,31)+257,Ie=R(e,u+10,15)+4,F=ae+R(e,u+5,31)+1;u+=14;for(var D=new x(F),J=new x(19),C=0;C<Ie;++C)J[ln[C]]=R(e,u+C*3,7);u+=Ie*3;for(var ce=Ee(J),Pn=(1<<ce)-1,Rn=oe(J,ce,1),C=0;C<F;){var st=Rn[R(e,u,Pn)];u+=st&15;var S=st>>4;if(S<16)D[C++]=S;else{var X=0,ye=0;for(S==16?(ye=3+R(e,u,3),u+=2,X=D[C-1]):S==17?(ye=3+R(e,u,7),u+=3):S==18&&(ye=11+R(e,u,127),u+=7);ye--;)D[C++]=X}}var at=D.subarray(0,ae),B=D.subarray(ae);z=Ee(at),b=Ee(B),M=oe(at,z,1),Y=oe(B,b,1)}else T(1);else{var S=mn(u)+4,L=e[S-4]|e[S-3]<<8,$=S+L;if($>r){l&&T(0);break}a&&p(m+L),n.set(e.subarray(S,$),m),t.b=m+=L,t.p=u=$*8,t.f=f;continue}if(u>E){l&&T(0);break}}a&&p(m+131072);for(var kn=(1<<z)-1,On=(1<<b)-1,ke=u;;ke=u){var X=M[De(e,u)&kn],q=X>>4;if(u+=X&15,u>E){l&&T(0);break}if(X||T(2),q<256)n[m++]=q;else if(q==256){ke=u,M=null;break}else{var ct=q-254;if(q>264){var C=q-257,le=tt[C];ct=R(e,u,(1<<le)-1)+rt[C],u+=le}var Oe=Y[De(e,u)&On],Me=Oe>>4;Oe||T(3),u+=Oe&15;var B=pn[Me];if(Me>3){var le=nt[Me];B+=De(e,u)&(1<<le)-1,u+=le}if(u>E){l&&T(0);break}a&&p(m+131072);var lt=m+ct;if(m<B){var ut=s-B,Mn=Math.min(B,lt);for(ut+m<0&&T(3);m<Mn;++m)n[m]=i[ut+m]}for(;m<lt;++m)n[m]=n[m-B]}}t.l=M,t.p=ke,t.b=m,t.f=f,M&&(f=1,t.m=z,t.d=Y,t.n=b)}while(!f);return m!=n.length&&o?Re(n,0,m):n.subarray(0,m)};var vr=new x(0);var mr=function(e,t){var n={};for(var i in e)n[i]=e[i];for(var i in t)n[i]=t[i];return n},on=function(e,t,n){for(var i=e(),r=e.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<i.length;++o){var a=i[o],l=s[o];if(typeof a=="function"){t+=";"+l+"=";var p=a.toString();if(a.prototype)if(p.indexOf("[native code]")!=-1){var f=p.indexOf(" ",8)+1;t+=p.slice(f,p.indexOf("(",f))}else{t+=p;for(var u in a.prototype)t+=";"+l+".prototype."+u+"="+a.prototype[u].toString()}else t+=p}else n[l]=a}return t},xe=[],Ir=function(e){var t=[];for(var n in e)e[n].buffer&&t.push((e[n]=new e[n].constructor(e[n])).buffer);return t},yr=function(e,t,n,i){if(!xe[n]){for(var r="",s={},o=e.length-1,a=0;a<o;++a)r=on(e[a],r,s);xe[n]={c:on(e[o],r,s),e:s}}var l=mr({},xe[n].e);return gr(xe[n].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",n,l,Ir(l),i)},Ar=function(){return[x,W,cn,tt,nt,ln,rt,pn,dn,vn,Pe,In,oe,Ee,R,De,mn,Re,T,yn,it,An,Cn]};var An=function(e){return postMessage(e,[e.buffer])},Cn=function(e){return e&&{out:e.size&&new x(e.size),dictionary:e.dictionary}},Cr=function(e,t,n,i,r,s){var o=yr(n,i,r,function(a,l){o.terminate(),s(a,l)});return o.postMessage([e,t],t.consume?[e.buffer]:[]),function(){o.terminate()}};var _=function(e,t){return e[t]|e[t+1]<<8},O=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Qe=function(e,t){return O(e,t)+O(e,t+4)*4294967296};function wr(e,t,n){return n||(n=t,t={}),typeof n!="function"&&T(7),Cr(e,t,[Ar],function(i){return An(it(i.data[0],Cn(i.data[1])))},1,n)}function it(e,t){return yn(e,{i:2},t&&t.out,t&&t.dictionary)}var et=typeof TextDecoder<"u"&&new TextDecoder,Sr=0;try{et.decode(vr,{stream:!0}),Sr=1}catch{}var Tr=function(e){for(var t="",n=0;;){var i=e[n++],r=(i>127)+(i>223)+(i>239);if(n+r>e.length)return{s:t,r:Re(e,n-1)};r?r==3?(i=((i&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|i>>10,56320|i&1023)):r&1?t+=String.fromCharCode((i&31)<<6|e[n++]&63):t+=String.fromCharCode((i&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(i)}};function xr(e,t){if(t){for(var n="",i=0;i<e.length;i+=16384)n+=String.fromCharCode.apply(null,e.subarray(i,i+16384));return n}else{if(et)return et.decode(e);var r=Tr(e),s=r.s,n=r.r;return n.length&&T(8),s}}var br=function(e,t){return t+30+_(e,t+26)+_(e,t+28)},Er=function(e,t,n){var i=_(e,t+28),r=xr(e.subarray(t+46,t+46+i),!(_(e,t+8)&2048)),s=t+46+i,o=O(e,t+20),a=n&&o==4294967295?Dr(e,s):[o,O(e,t+24),O(e,t+42)],l=a[0],p=a[1],f=a[2];return[_(e,t+10),l,p,r,s+_(e,t+30)+_(e,t+32),f]},Dr=function(e,t){for(;_(e,t)!=1;t+=4+_(e,t+2));return[Qe(e,t+12),Qe(e,t+4),Qe(e,t+20)]};var sn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function wn(e,t,n){n||(n=t,t={}),typeof n!="function"&&T(7);var i=[],r=function(){for(var b=0;b<i.length;++b)i[b]()},s={},o=function(b,E){sn(function(){n(b,E)})};sn(function(){o=n});for(var a=e.length-22;O(e,a)!=101010256;--a)if(!a||e.length-a>65558)return o(T(13,0,1),null),r;var l=_(e,a+8);if(l){var p=l,f=O(e,a+16),u=f==4294967295||p==65535;if(u){var m=O(e,a-12);u=O(e,m)==101075792,u&&(p=l=O(e,m+32),f=O(e,m+48))}for(var M=t&&t.filter,Y=function(b){var E=Er(e,f,u),V=E[0],S=E[1],L=E[2],$=E[3],ae=E[4],Ie=E[5],F=br(e,Ie);f=ae;var D=function(C,ce){C?(r(),o(C,null)):(ce&&(s[$]=ce),--l||o(null,s))};if(!M||M({name:$,size:S,originalSize:L,compression:V}))if(!V)D(null,Re(e,F,F+S));else if(V==8){var J=e.subarray(F,F+S);if(L<524288||S>.8*L)try{D(null,it(J,{out:new x(L)}))}catch(C){D(C,null)}else i.push(wr(J,{size:L},D))}else D(T(14,"unknown compression type "+V,1),null);else D(null,null)},z=0;z<p;++z)Y(z)}else o(null,{});return r}var bn=require("fs"),G=require("fs/promises"),se=require("path");c();function Sn(e){function t(o,a,l,p){let f=0;return f+=o<<0,f+=a<<8,f+=l<<16,f+=p<<24>>>0,f}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let n=e[4]===3,i=e[4]===2;if(!i&&!n||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(i){let o=t(e[8],e[9],e[10],e[11]),a=t(e[12],e[13],e[14],e[15]),l=16+o+a;return e.subarray(l,e.length)}let s=12+t(e[8],e[9],e[10],e[11]);return e.subarray(s,e.length)}c();var Tn=Un(require("https"));function ot(e,t={}){return new Promise((n,i)=>{Tn.default.get(e,t,r=>{let{statusCode:s,statusMessage:o,headers:a}=r;if(s>=400)return void i(`${s}: ${o} - ${e}`);if(s>=300)return void n(ot(a.location,t));let l=[];r.on("error",i),r.on("data",p=>l.push(p)),r.once("end",()=>n(Buffer.concat(l)))})})}var Pr=(0,se.join)(we,"ExtensionCache");async function Rr(e,t){return await(0,G.mkdir)(t,{recursive:!0}),new Promise((n,i)=>{wn(e,(r,s)=>{if(r)return void i(r);Promise.all(Object.keys(s).map(async o=>{if(o.startsWith("_metadata/"))return;if(o.endsWith("/"))return void(0,G.mkdir)((0,se.join)(t,o),{recursive:!0});let a=o.split("/"),l=a.pop(),p=a.join("/"),f=(0,se.join)(t,p);p&&await(0,G.mkdir)(f,{recursive:!0}),await(0,G.writeFile)((0,se.join)(f,l),s[o])})).then(()=>n()).catch(o=>{(0,G.rm)(t,{recursive:!0,force:!0}),i(o)})})})}async function En(e){let t=(0,se.join)(Pr,`${e}`);try{await(0,G.access)(t,bn.constants.F_OK)}catch{let i=`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=${process.versions.chrome}`,r=await ot(i,{headers:{"User-Agent":`Electron ${process.versions.electron} ~ Vencord (https://github.com/Vendicated/Vencord)`}});await Rr(Sn(r),t).catch(console.error)}xn.session.defaultSession.loadExtension(t)}H.app.whenReady().then(()=>{H.protocol.registerFileProtocol("vencord",({url:r},s)=>{let o=r.slice(10);if(o.endsWith("/")&&(o=o.slice(0,-1)),o.startsWith("/themes/")){let a=o.slice(8),l=qe(Z,a);if(!l){s({statusCode:403});return}s(l.replace(/\?v=\d+$/,""));return}switch(o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":s((0,Dn.join)(__dirname,o));break;default:s({statusCode:403})}});try{P.store.enableReactDevtools&&En("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(r=>console.error("[Vencord] Failed to install React Developer Tools",r))}catch{}let e=(r,s)=>Object.keys(r).find(o=>o.toLowerCase()===s),t=r=>{let s={};return r.split(";").forEach(o=>{let[a,...l]=o.trim().split(/\s+/g);a&&!Object.prototype.hasOwnProperty.call(s,a)&&(s[a]=l)}),s},n=r=>Object.entries(r).filter(([,s])=>s?.length).map(s=>s.flat().join(" ")).join("; "),i=r=>{let s=e(r,"content-security-policy");if(s){let o=t(r[s][0]);for(let a of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[a]??=[],o[a].push("*","blob:","data:","vencord:","'unsafe-inline'");o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://cdn.jsdelivr.net","https://cdnjs.cloudflare.com"),r[s]=[n(o)]}};H.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,resourceType:s},o)=>{if(r&&(s==="mainFrame"&&i(r),s==="stylesheet")){let a=e(r,"content-type");a&&(r[a]=["text/css"])}o({cancel:!1,responseHeaders:r})}),H.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */

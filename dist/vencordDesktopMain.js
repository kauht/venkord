// Vencord cdb8d37b
// Standalone: false
// Platform: win32
// Updater Disabled: false
"use strict";var Ve=Object.defineProperty;var Zn=Object.getOwnPropertyDescriptor;var Kn=Object.getOwnPropertyNames;var Wn=Object.prototype.hasOwnProperty;var Te=(t,e)=>()=>(t&&(e=t(t=0)),e);var ne=(t,e)=>{for(var n in e)Ve(t,n,{get:e[n],enumerable:!0})},Hn=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Kn(e))!Wn.call(t,i)&&i!==n&&Ve(t,i,{get:()=>e[i],enumerable:!(r=Zn(e,i))||r.enumerable});return t};var $n=t=>Hn(Ve({},"__esModule",{value:!0}),t);var c=Te(()=>{"use strict"});var re=Te(()=>{"use strict";c()});function me(t){return async function(){try{return{ok:!0,value:await t(...arguments)}}catch(e){return{ok:!1,error:e instanceof Error?{...e,message:e.message,name:e.name,stack:e.stack}:e}}}}var Pt=Te(()=>{"use strict";c()});var rr={};function se(...t){let e={cwd:_t};return $e?He("flatpak-spawn",["--host","git",...t],e):He("git",t,e)}async function Qn(){return(await se("remote","get-url","origin")).stdout.trim().replace(/git@(.+):/,"https://$1/").replace(/\.git$/,"")}async function er(){await se("fetch");let t=(await se("branch","--show-current")).stdout.trim();if(!((await se("ls-remote","origin",t)).stdout.length>0))return[];let r=(await se("log",`HEAD...origin/${t}`,"--pretty=format:%an/%h/%s")).stdout.trim();return r?r.split(`
`).map(i=>{let[o,s,...a]=i.split("/");return{hash:s,author:o,message:a.join("/").split(`
`)[0]}}):[]}async function tr(){return(await se("pull")).stdout.includes("Fast-forward")}async function nr(){return!(await He($e?"flatpak-spawn":"node",$e?["--host","node","scripts/build/build.mjs"]:["scripts/build/build.mjs"],{cwd:_t})).stderr.includes("Build failed")}var kt,ye,Ot,Mt,_t,He,$e,Lt=Te(()=>{"use strict";c();re();kt=require("child_process"),ye=require("electron"),Ot=require("path"),Mt=require("util");Pt();_t=(0,Ot.join)(__dirname,".."),He=(0,Mt.promisify)(kt.execFile),$e=!1;ye.ipcMain.handle("VencordGetRepo",me(Qn));ye.ipcMain.handle("VencordGetUpdates",me(er));ye.ipcMain.handle("VencordUpdate",me(tr));ye.ipcMain.handle("VencordBuild",me(nr))});c();var J=require("electron"),Nn=require("path"),pt=require("url");c();c();re();c();var ze=Symbol("SettingsStore.isProxy"),wt=Symbol("SettingsStore.getRawTarget"),ve=class{pathListeners=new Map;globalListeners=new Set;proxyContexts=new WeakMap;proxyHandler=(()=>{let e=this;return{get(n,r,i){if(r===ze)return!0;if(r===wt)return n;let o=Reflect.get(n,r,i),s=e.proxyContexts.get(n);if(s==null)return o;let{root:a,path:u}=s;if(!(r in n)&&e.getDefaultValue!=null&&(o=e.getDefaultValue({target:n,key:r,root:a,path:u})),typeof o=="object"&&o!==null&&!o[ze]){let v=`${u}${u&&"."}${r}`;return e.makeProxy(o,a,v)}return o},set(n,r,i){if(i?.[ze]&&(i=i[wt]),n[r]===i)return!0;if(!Reflect.set(n,r,i))return!1;let o=e.proxyContexts.get(n);if(o==null)return!0;let{root:s,path:a}=o,u=`${a}${a&&"."}${r}`;return e.notifyListeners(u,i,s),!0},deleteProperty(n,r){if(!Reflect.deleteProperty(n,r))return!1;let i=e.proxyContexts.get(n);if(i==null)return!0;let{root:o,path:s}=i,a=`${s}${s&&"."}${r}`;return e.notifyListeners(a,void 0,o),!0}}})();constructor(e,n={}){this.plain=e,this.store=this.makeProxy(e),Object.assign(this,n)}makeProxy(e,n=e,r=""){return this.proxyContexts.set(e,{root:n,path:r}),new Proxy(e,this.proxyHandler)}notifyListeners(e,n,r){let i=e.split(".");if(i.length>2&&i[0]==="plugins"){let o=i.slice(0,3),s=o.join("."),a=o.reduce((u,v)=>u[v],r);this.globalListeners.forEach(u=>u(r,s)),this.pathListeners.get(s)?.forEach(u=>u(a))}else this.globalListeners.forEach(o=>o(r,e));this.pathListeners.get(e)?.forEach(o=>o(n))}setData(e,n){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=e,this.store=this.makeProxy(e),n){let r=e,i=n.split(".");for(let o of i){if(!r){console.warn(`Settings#setData: Path ${n} does not exist in new data. Not dispatching update`);return}r=r[o]}this.pathListeners.get(n)?.forEach(o=>o(r))}this.markAsChanged()}addGlobalChangeListener(e){this.globalListeners.add(e)}addChangeListener(e,n){let r=this.pathListeners.get(e)??new Set;r.add(n),this.pathListeners.set(e,r)}removeGlobalChangeListener(e){this.globalListeners.delete(e)}removeChangeListener(e,n){let r=this.pathListeners.get(e);r&&(r.delete(n),r.size||this.pathListeners.delete(e))}markAsChanged(){this.globalListeners.forEach(e=>e(this.plain,""))}};c();function je(t,e){for(let n in e){let r=e[n];typeof r=="object"&&!Array.isArray(r)?(t[n]??={},je(t[n],r)):t[n]??=r}return t}var De=require("electron"),$=require("fs");c();var St=require("electron"),K=require("path"),be=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,K.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,K.join)(St.app.getPath("userData"),"..","Vencord")),ie=(0,K.join)(be,"settings"),H=(0,K.join)(be,"themes"),Ee=(0,K.join)(ie,"quickCss.css"),Be=(0,K.join)(ie,"settings.json"),Fe=(0,K.join)(ie,"native-settings.json"),xt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"];(0,$.mkdirSync)(ie,{recursive:!0});function Tt(t,e){try{return JSON.parse((0,$.readFileSync)(e,"utf-8"))}catch(n){return n?.code!=="ENOENT"&&console.error(`Failed to read ${t} settings`,n),{}}}var P=new ve(Tt("renderer",Be));P.addGlobalChangeListener(()=>{try{(0,$.writeFileSync)(Be,JSON.stringify(P.plain,null,4))}catch(t){console.error("Failed to write renderer settings",t)}});De.ipcMain.handle("VencordGetSettingsDir",()=>ie);De.ipcMain.on("VencordGetSettings",t=>t.returnValue=P.plain);De.ipcMain.handle("VencordSetSettings",(t,e,n)=>{P.setData(e,n)});var Yn={plugins:{},customCspRules:{}},bt=Tt("native",Fe);je(bt,Yn);var U=new ve(bt);U.addGlobalChangeListener(()=>{try{(0,$.writeFileSync)(Fe,JSON.stringify(U.plain,null,4))}catch(t){console.error("Failed to write native settings",t)}});var Ze=require("electron"),oe=["connect-src"],k=[...oe,"img-src"],Rt=["style-src","font-src"],S=[...k,...Rt],Et=[...S,"script-src","worker-src"],We={localhost:S,"127.0.0.1":S,"*.github.io":S,"github.com":S,"raw.githubusercontent.com":S,"*.gitlab.io":S,"gitlab.com":S,"*.codeberg.page":S,"codeberg.org":S,"*.githack.com":S,"jsdelivr.net":S,"fonts.googleapis.com":Rt,"i.imgur.com":k,"i.ibb.co":k,"i.pinimg.com":k,"*.tenor.com":k,"files.catbox.moe":S,"cdn.discordapp.com":S,"media.discordapp.net":k,"cdnjs.cloudflare.com":Et,"cdn.jsdelivr.net":Et,"api.github.com":oe,"ws.audioscrobbler.com":oe,"translate-pa.googleapis.com":oe,"*.vencord.dev":k,"manti.vendicated.dev":k,"decor.fieryflames.dev":oe,"ugc.decor.fieryflames.dev":k,"sponsor.ajay.app":oe,"dearrow-thumb.ajay.app":k,"usrbg.is-hardly.online":k,"icons.duckduckgo.com":k},Ke=(t,e)=>Object.keys(t).find(n=>n.toLowerCase()===e),Jn=t=>{let e={};return t.split(";").forEach(n=>{let[r,...i]=n.trim().split(/\s+/g);r&&!Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=i)}),e},Xn=t=>Object.entries(t).filter(([,e])=>e?.length).map(e=>e.flat().join(" ")).join("; "),qn=t=>{let e=Ke(t,"content-security-policy-report-only");e&&delete t[e];let n=Ke(t,"content-security-policy");if(n){let r=Jn(t[n][0]),i=(o,...s)=>{r[o]??=[...r["default-src"]??[]],r[o].push(...s)};i("style-src","'unsafe-inline'"),i("script-src","'unsafe-inline'","'unsafe-eval'");for(let o of["style-src","connect-src","img-src","font-src","media-src","worker-src"])i(o,"blob:","data:","vencord:");for(let[o,s]of Object.entries(U.store.customCspRules))for(let a of s)i(a,o);for(let[o,s]of Object.entries(We))for(let a of s)i(a,o);t[n]=[Xn(r)]}};function Dt(){Ze.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:t,resourceType:e},n)=>{if(t&&(e==="mainFrame"&&qn(t),e==="stylesheet")){let r=Ke(t,"content-type");r&&(t[r]=["text/css"])}n({cancel:!1,responseHeaders:t})}),Ze.session.defaultSession.webRequest.onHeadersReceived=()=>{}}c();c();Lt();c();re();var it=require("electron");c();var qe={};ne(qe,{fetchTrackData:()=>fr});c();c();c();c();var y=11400714785074694791n,w=14029467366897019727n,Ut=1609587929392839161n,Ie=9650029242287828579n,Gt=2870177450012600261n,Vt=64n,ir=2n**Vt-1n,or=new TextEncoder;function Nt(t,e,n,r){return BigInt(t)|BigInt(e)<<16n|BigInt(n)<<32n|BigInt(r)<<48n}function j(t,e){return BigInt(t[e])|BigInt(t[e+1])<<8n|BigInt(t[e+2])<<16n|BigInt(t[e+3])<<24n|BigInt(t[e+4])<<32n|BigInt(t[e+5])<<40n|BigInt(t[e+6])<<48n|BigInt(t[e+7])<<56n}function I(t,e){return t<<e&ir|t>>Vt-e}function h(t){return BigInt.asUintN(64,t)}var Ye=class{#t;#n;#r;#i;#o;#s;#a;#e;constructor(e=0){this.reset(e)}reset(e=this.#t){return this.#t=BigInt.asUintN(32,BigInt(e)),this.#n=h(this.#t+y+w),this.#r=h(this.#t+w),this.#i=this.#t,this.#o=h(this.#t-y),this.#s=null,this.#a=0,this.#e=0,this}update(e){typeof e=="string"&&(e=or.encode(e));let n=0,r=e.length,i=n+r;if(r===0)return this;if(this.#a+=r,this.#e===0&&(this.#s=new Uint8Array(32)),this.#e+r<32)return this.#s.set(e.subarray(0,r),this.#e),this.#e+=r,this;if(this.#e>0){this.#s.set(e.subarray(0,32-this.#e),this.#e);let o=0,s;s=j(this.#s,o),this.#n=h(I(h(this.#n+s*w),31n)*y),o+=8,s=j(this.memory,o),this.#r=h(I(h(this.#r+s*w),31n)*y),o+=8,s=j(this.memory,o),this.#i=h(I(h(this.#i+s*w),31n)*y),o+=8,s=j(this.memory,o),this.#o=h(I(h(this.#o+s*w),31n)*y),n+=32-this.#e,this.#e=0}if(n<=i-32){let o=i-32;do{let s;s=j(e,n),this.#n=h(I(h(this.#n+s*w),31n)*y),n+=8,s=j(e,n),this.#r=h(I(h(this.#r+s*w),31n)*y),n+=8,s=j(e,n),this.#i=h(I(h(this.#i+s*w),31n)*y),n+=8,s=j(e,n),this.#o=h(I(h(this.#o+s*w),31n)*y),n+=8}while(n<=o)}return n<i&&(this.#s.set(e.subarray(n,i),this.#e),this.#e=i-n),this}digest(){let e=this.#s,n=this.#e,r=0,i=0n,o=0n,s=0n;for(this.#a>=32?(i=I(this.#n,1n)+I(this.#r,7n)+I(this.#i,12n)+I(this.#o,18n),i=h(i^I(h(this.#n*w),31n)*y),i=h(i*y+Ie),i=h(i^I(h(this.#r*w),31n)*y),i=h(i*y+Ie),i=h(i^I(h(this.#i*w),31n)*y),i=h(i*y+Ie),i=h(i^I(h(this.#o*w),31n)*y),i=h(i*y+Ie)):i=h(this.#t+Gt),i+=BigInt(this.#a);r<=n-8;)s=j(e,r),s=h(I(h(s*w),31n)*y),i=h(I(i^s,27n)*y+Ie),r+=8;for(r+4<=n&&(s=Nt(e[r+1]<<8|e[r],e[r+3]<<8|e[r+2],0,0),i=h(I(i^h(s*y),23n)*w+Ut),r+=4);r<n;)s=Nt(e[r++],0,0,0),i=h(I(i^h(s*Gt),11n)*y);return o=h(i>>33n),i=h((i^o)*w),o=h(i>>29n),i=h((i^o)*Ut),o=h(i>>32n),i=h(i^o),i}};function zt(t,e=0){return new Ye(e).update(t).digest()}var ae="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),sr=(()=>{let t=new Uint8Array(4),e=new Uint32Array(t.buffer);return!((e[0]=1)&t[0])})();function ar(t){t=BigInt(t);let e=[],n=Math.ceil(Math.floor(Math.log2(Number(t))+1)/8);for(let i=0;i<n;i++)e.unshift(Number(t>>BigInt(8*i)&BigInt(255)));let r=new Uint8Array(e);return sr?r:r.reverse()}function jt(t){let e=zt(t,0),n=ar(e);return[ae[n[0]>>2],ae[(n[0]&3)<<4|n[1]>>4],ae[(n[1]&15)<<2|n[2]>>6],ae[n[2]&63],ae[n[3]>>2],ae[(n[3]&3)<<4|n[3]>>4]].join("")}function Bt(t){let e=typeof t=="string"?t:t.source;if(e=e.replaceAll(/#{intl::([\w$+/]*)(?:::(\w+))?}/g,(i,o,s)=>{let a=s==="raw"?o:jt(o),u=typeof t=="string";return!Number.isNaN(Number(a[0]))||a.includes("+")||a.includes("/")?u?`["${a}"]`:String.raw`(?:\["${a}"\])`.replaceAll("+","\\+"):u?`.${a}`:String.raw`(?:\.${a})`}),typeof t=="string")return e;let n=e.replaceAll("\\i",String.raw`(?:[A-Za-z_$][\w$]*)`),r=new RegExp(n,t.flags);return r.toString=t.toString.bind(t),r}var Ft=require("child_process"),Zt=require("util"),Kt=(0,Zt.promisify)(Ft.execFile);async function Je(t){let{stdout:e}=await Kt("osascript",t.map(n=>["-e",n]).flat());return e}var M=null,cr=/<script type="module" crossorigin src="([a-zA-Z0-9.\-/]+)"><\/script>/,lr=Bt(/Promise.allSettled\(\i\)\}const \i="([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*)"/),Xe,ur=async()=>{if(Xe)return Xe;let t=await fetch("https://music.apple.com/").then(i=>i.text()),e=new URL(t.match(cr)[1],"https://music.apple.com/"),r=(await fetch(e).then(i=>i.text())).match(lr)[1];return Xe=r,r};async function hr({id:t,name:e,artist:n,album:r}){if(t===M?.id){if("data"in M)return M.data;if("failures"in M&&M.failures>=5)return null}try{let i=new URL("https://amp-api-edge.music.apple.com/v1/catalog/us/search");i.searchParams.set("platform","web"),i.searchParams.set("l","en-US"),i.searchParams.set("limit","1"),i.searchParams.set("with","serverBubbles"),i.searchParams.set("types","songs"),i.searchParams.set("term",`${e} ${n} ${r}`),i.searchParams.set("include[songs]","artists");let o=await ur(),s=await fetch(i,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9",authorization:`Bearer ${o}`,"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",origin:"https://music.apple.com"}}).then(a=>a.json()).then(a=>a.results.song.data[0]);return M={id:t,data:{appleMusicLink:s.attributes.url,songLink:`https://song.link/i/${s.id}`,albumArtwork:s.attributes.artwork.url.replace("{w}x{h}","512x512"),artistArtwork:s.relationships.artists.data[0].attributes.artwork.url.replace("{w}x{h}","512x512")}},M.data}catch(i){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",i),M={id:t,failures:(t===M?.id&&"failures"in M?M.failures:0)+1},null}}async function fr(){try{await Kt("pgrep",["^Music$"])}catch{return null}if(await Je(['tell application "Music"',"get player state","end tell"]).then(f=>f.trim())!=="playing")return null;let e=await Je(['tell application "Music"',"get player position","end tell"]).then(f=>Number.parseFloat(f.trim())),n=await Je(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[r,i,o,s,a]=n.split(`
`).filter(f=>!!f),u=Number.parseFloat(a),v=await hr({id:r,name:i,artist:s,album:o});return{name:i,album:o,artist:s,playerPosition:e,duration:u,...v}}var Qe={};ne(Qe,{initDevtoolsOpenEagerLoad:()=>pr});c();function pr(t){let e=()=>t.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");t.sender.isDevToolsOpened()?e():t.sender.once("devtools-opened",()=>e())}var Ht={};c();var Wt=require("electron");Wt.app.on("browser-window-created",(t,e)=>{e.webContents.on("frame-created",(n,{frame:r})=>{r?.once("dom-ready",()=>{if(r.url.startsWith("https://open.spotify.com/embed/")){let i=P.store.plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;r.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var Yt={};c();var $t=require("electron");$t.app.on("browser-window-created",(t,e)=>{e.webContents.on("frame-created",(n,{frame:r})=>{r?.once("dom-ready",()=>{if(r.url.startsWith("https://www.youtube.com/")){if(!P.store.plugins?.FixYoutubeEmbeds?.enabled)return;r.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})});var et={};ne(et,{resolveRedirect:()=>dr});c();var Jt=require("https"),gr=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function Xt(t){return new Promise((e,n)=>{let r=(0,Jt.request)(new URL(t),{method:"HEAD"},i=>{e(i.headers.location?Xt(i.headers.location):t)});r.on("error",n),r.end()})}async function dr(t,e){return gr.test(e)?Xt(e):e}var tt={};ne(tt,{makeDeeplTranslateRequest:()=>vr});c();async function vr(t,e,n,r){let i=e?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let o=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${n}`},body:r}),s=await o.text();return{status:o.status,data:s}}catch(o){return{status:-1,data:String(o)}}}var nt={};ne(nt,{readRecording:()=>mr});c();var qt=require("electron"),Qt=require("fs/promises"),Ae=require("path");async function mr(t,e){e=(0,Ae.normalize)(e);let n=(0,Ae.basename)(e),r=(0,Ae.normalize)(qt.app.getPath("userData")+"/");if(console.log(n,r,e),n!=="recording.ogg"||!e.startsWith(r))return null;try{let i=await(0,Qt.readFile)(e);return new Uint8Array(i.buffer)}catch{return null}}var rt={};ne(rt,{sendToOverlay:()=>yr});c();var tn=require("dgram"),en;function yr(t,e){e.messageType=e.type;let n=JSON.stringify(e);en??=(0,tn.createSocket)("udp4"),en.send(n,42069,"127.0.0.1")}var on={};c();var rn=require("electron");c();var nn=`/* eslint-disable */

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
});`;rn.app.on("browser-window-created",(t,e)=>{e.webContents.on("frame-created",(n,{frame:r})=>{r?.once("dom-ready",()=>{P.store.plugins?.YoutubeAdblock?.enabled&&(r.url.includes("youtube.com/embed/")||r.url.includes("discordsays")&&r.url.includes("youtube.com"))&&r.executeJavaScript(nn)})})});var sn={AppleMusicRichPresence:qe,ConsoleShortcuts:Qe,FixSpotifyEmbeds:Ht,FixYoutubeEmbeds:Yt,OpenInApp:et,Translate:tt,VoiceMessages:nt,XSOverlay:rt,YoutubeAdblock:on};var an={};for(let[t,e]of Object.entries(sn)){let n=Object.entries(e);if(!n.length)continue;let r=an[t]={};for(let[i,o]of n){let s=`VencordPluginNative_${t}_${i}`;it.ipcMain.handle(s,o),r[i]=s}}it.ipcMain.on("VencordGetPluginIpcMethodMap",t=>{t.returnValue=an});c();re();var A=require("electron");c();var cn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4uY3NzIgogICAgICAgICAgICBpbnRlZ3JpdHk9InNoYTI1Ni10aUpQUTJPMDR6L3BaL0F3ZHlJZ2hyT016ZXdmK1BJdkVsMVlLYlF2c1prPSIKICAgICAgICAgICAgY3Jvc3NvcmlnaW49ImFub255bW91cyIKICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIgogICAgICAgIC8+CiAgICAgICAgPHN0eWxlPgogICAgICAgICAgICBodG1sLAogICAgICAgICAgICBib2R5LAogICAgICAgICAgICAjY29udGFpbmVyIHsKICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgICAgICB0b3A6IDA7CiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgICAgIG1hcmdpbjogMDsKICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgICAgICB9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KICAgICAgICA8ZGl2IGlkPSJjb250YWluZXIiPjwvZGl2PgogICAgICAgIDxzY3JpcHQKICAgICAgICAgICAgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL21vbmFjby1lZGl0b3JAMC41MC4wL21pbi92cy9sb2FkZXIuanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhMjU2LUtjVTQ4VEdyODRyN3VuRjdKNUlnQm85NWFlVnJFYnJHZTA0UzdUY0ZVanM9IgogICAgICAgICAgICBjcm9zc29yaWdpbj0iYW5vbnltb3VzIgogICAgICAgICAgICByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiCiAgICAgICAgPjwvc2NyaXB0PgoKICAgICAgICA8c2NyaXB0PgogICAgICAgICAgICByZXF1aXJlLmNvbmZpZyh7CiAgICAgICAgICAgICAgICBwYXRoczogewogICAgICAgICAgICAgICAgICAgIHZzOiAiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";var Ce=require("fs"),ue=require("fs/promises"),le=require("path");c();re();var ce=require("electron");function ln(){ce.ipcMain.handle("VencordCspRemoveOverride",wr),ce.ipcMain.handle("VencordCspRequestAddOverride",Cr),ce.ipcMain.handle("VencordCspIsDomainAllowed",Sr)}function Ir(t,e){try{let{hostname:n}=new URL(t);if(/[;'"\\]/.test(n))return!1}catch{return!1}return!(e.length===0||e.some(n=>!S.includes(n)))}function Ar(t,e,n){let r=new URL(t).hostname,i=`${n} wants to allow connections to ${r}`,o=`Unless you recognise and fully trust ${r}, you should cancel this request!

You will have to fully close and restart Vesktop for the changes to take effect.`;if(e.length===1&&e[0]==="connect-src")return{message:i,detail:o};let s=e.filter(a=>a!=="connect-src").map(a=>{switch(a){case"img-src":return"Images";case"style-src":return"CSS & Themes";case"font-src":return"Fonts";default:throw new Error(`Illegal CSP directive: ${a}`)}}).sort().join(", ");return o=`The following types of content will be allowed to load from ${r}:
${s}

${o}`,{message:i,detail:o}}async function Cr(t,e,n,r){if(!Ir(e,n))return"invalid";let i=new URL(e).hostname;if(i in U.store.customCspRules)return"conflict";let{checkboxChecked:o,response:s}=await ce.dialog.showMessageBox({...Ar(e,n,r),type:r?"info":"warning",title:"Vencord Host Permissions",buttons:["Cancel","Allow"],defaultId:0,cancelId:0,checkboxLabel:`I fully trust ${i} and understand the risks of allowing connections to it.`,checkboxChecked:!1});return s!==1?"cancelled":o?(U.store.customCspRules[i]=n,"ok"):"unchecked"}function wr(t,e){return e in U.store.customCspRules?(delete U.store.customCspRules[e],!0):!1}function Sr(t,e,n){try{let r=new URL(e).hostname,i=We[r]??U.store.customCspRules[r];return i?n.every(o=>i.includes(o)):!1}catch{return!1}}c();var xr=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Tr=/^\\@/;function ot(t,e={}){return{fileName:t,name:e.name??t.replace(/\.css$/i,""),author:e.author??"Unknown Author",description:e.description??"A Discord Theme.",version:e.version,license:e.license,source:e.source,website:e.website,invite:e.invite}}function un(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function hn(t,e){if(!t)return ot(e);let n=t.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!n)return ot(e);let r={},i="",o="";for(let s of n.split(xr))if(s.length!==0)if(s.charAt(0)==="@"&&s.charAt(1)!==" "){r[i]=o.trim();let a=s.indexOf(" ");i=s.substring(1,a),o=s.substring(a+1)}else o+=" "+s.replace("\\n",`
`).replace(Tr,"@");return r[i]=o.trim(),delete r[""],ot(e,r)}c();var fn=require("electron");function pn(t){t.webContents.setWindowOpenHandler(({url:e})=>{switch(e){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:n}=new URL(e)}catch{return{action:"deny"}}switch(n){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":fn.shell.openExternal(e)}return{action:"deny"}})}(0,Ce.mkdirSync)(H,{recursive:!0});ln();function st(t,e){let n=(0,le.normalize)(t+"/"),r=(0,le.join)(t,e),i=(0,le.normalize)(r);return i.startsWith(n)?i:null}function br(){return(0,ue.readFile)(Ee,"utf-8").catch(()=>"")}async function Er(){let t=await(0,ue.readdir)(H).catch(()=>[]),e=[];for(let n of t){if(!n.endsWith(".css"))continue;let r=await gn(n).then(un).catch(()=>null);r!=null&&e.push(hn(r,n))}return e}function gn(t){t=t.replace(/\?v=\d+$/,"");let e=st(H,t);return e?(0,ue.readFile)(e,"utf-8"):Promise.reject(`Unsafe path ${t}`)}A.ipcMain.handle("VencordOpenQuickCss",()=>A.shell.openPath(Ee));A.ipcMain.handle("VencordOpenExternal",(t,e)=>{try{var{protocol:n}=new URL(e)}catch{throw"Malformed URL"}if(!xt.includes(n))throw"Disallowed protocol.";A.shell.openExternal(e)});A.ipcMain.handle("VencordGetQuickCss",()=>br());A.ipcMain.handle("VencordSetQuickCss",(t,e)=>(0,Ce.writeFileSync)(Ee,e));A.ipcMain.handle("VencordGetThemesDir",()=>H);A.ipcMain.handle("VencordGetThemesList",()=>Er());A.ipcMain.handle("VencordGetThemeData",(t,e)=>gn(e));A.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${A.systemPreferences.getAccentColor?.()||""}`}));A.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let t="Vencord QuickCSS Editor",e=A.BrowserWindow.getAllWindows().find(r=>r.title===t);if(e&&!e.isDestroyed()){e.focus();return}let n=new A.BrowserWindow({title:t,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,le.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});pn(n),await n.loadURL(`data:text/html;base64,${cn}`)});c();var Ln=require("electron");c();var mn=require("module"),Rr=(0,mn.createRequire)("/"),ke,Dr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{ke=Rr("worker_threads").Worker}catch{}var Pr=ke?function(t,e,n,r,i){var o=!1,s=new ke(t+Dr,{eval:!0}).on("error",function(a){return i(a,null)}).on("message",function(a){return i(null,a)}).on("exit",function(a){a&&!o&&i(new Error("exited with code "+a),null)});return s.postMessage(n,r),s.terminate=function(){return o=!0,ke.prototype.terminate.call(s)},s}:function(t,e,n,r,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},b=Uint8Array,Y=Uint16Array,yn=Int32Array,lt=new b([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ut=new b([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),In=new b([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),An=function(t,e){for(var n=new Y(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var i=new yn(n[30]),r=1;r<30;++r)for(var o=n[r];o<n[r+1];++o)i[o]=o-n[r]<<5|r;return{b:n,r:i}},Cn=An(lt,2),ht=Cn.b,kr=Cn.r;ht[28]=258,kr[258]=28;var wn=An(ut,0),Sn=wn.b,bo=wn.r,_e=new Y(32768);for(d=0;d<32768;++d)B=(d&43690)>>1|(d&21845)<<1,B=(B&52428)>>2|(B&13107)<<2,B=(B&61680)>>4|(B&3855)<<4,_e[d]=((B&65280)>>8|(B&255)<<8)>>1;var B,d,he=function(t,e,n){for(var r=t.length,i=0,o=new Y(e);i<r;++i)t[i]&&++o[t[i]-1];var s=new Y(e);for(i=1;i<e;++i)s[i]=s[i-1]+o[i-1]<<1;var a;if(n){a=new Y(1<<e);var u=15-e;for(i=0;i<r;++i)if(t[i])for(var v=i<<4|t[i],f=e-t[i],l=s[t[i]-1]++<<f,m=l|(1<<f)-1;l<=m;++l)a[_e[l]>>u]=v}else for(a=new Y(r),i=0;i<r;++i)t[i]&&(a[i]=_e[s[t[i]-1]++]>>15-t[i]);return a},we=new b(288);for(d=0;d<144;++d)we[d]=8;var d;for(d=144;d<256;++d)we[d]=9;var d;for(d=256;d<280;++d)we[d]=7;var d;for(d=280;d<288;++d)we[d]=8;var d,xn=new b(32);for(d=0;d<32;++d)xn[d]=5;var d;var Tn=he(we,9,1);var bn=he(xn,5,1),Oe=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},O=function(t,e,n){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(e&7)&n},Me=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},En=function(t){return(t+7)/8|0},Le=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new b(t.subarray(e,n))};var Rn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],T=function(t,e,n){var r=new Error(e||Rn[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,T),!n)throw r;return r},Dn=function(t,e,n,r){var i=t.length,o=r?r.length:0;if(!i||e.f&&!e.l)return n||new b(0);var s=!n,a=s||e.i!=2,u=e.i;s&&(n=new b(i*3));var v=function(It){var At=n.length;if(It>At){var Ct=new b(Math.max(At*2,It));Ct.set(n),n=Ct}},f=e.f||0,l=e.p||0,m=e.b||0,L=e.l,X=e.d,V=e.m,E=e.n,R=i*8;do{if(!L){f=O(t,l,1);var F=O(t,l+1,3);if(l+=3,F)if(F==1)L=Tn,X=bn,V=9,E=5;else if(F==2){var pe=O(t,l,31)+257,Se=O(t,l+10,15)+4,W=pe+O(t,l+5,31)+1;l+=14;for(var D=new b(W),Q=new b(19),C=0;C<Se;++C)Q[In[C]]=O(t,l+C*3,7);l+=Se*3;for(var ge=Oe(Q),Vn=(1<<ge)-1,zn=he(Q,ge,1),C=0;C<W;){var gt=zn[O(t,l,Vn)];l+=gt&15;var x=gt>>4;if(x<16)D[C++]=x;else{var ee=0,xe=0;for(x==16?(xe=3+O(t,l,3),l+=2,ee=D[C-1]):x==17?(xe=3+O(t,l,7),l+=3):x==18&&(xe=11+O(t,l,127),l+=7);xe--;)D[C++]=ee}}var dt=D.subarray(0,pe),Z=D.subarray(pe);V=Oe(dt),E=Oe(Z),L=he(dt,V,1),X=he(Z,E,1)}else T(1);else{var x=En(l)+4,z=t[x-4]|t[x-3]<<8,q=x+z;if(q>i){u&&T(0);break}a&&v(m+z),n.set(t.subarray(x,q),m),e.b=m+=z,e.p=l=q*8,e.f=f;continue}if(l>R){u&&T(0);break}}a&&v(m+131072);for(var jn=(1<<V)-1,Bn=(1<<E)-1,Ue=l;;Ue=l){var ee=L[Me(t,l)&jn],te=ee>>4;if(l+=ee&15,l>R){u&&T(0);break}if(ee||T(2),te<256)n[m++]=te;else if(te==256){Ue=l,L=null;break}else{var vt=te-254;if(te>264){var C=te-257,de=lt[C];vt=O(t,l,(1<<de)-1)+ht[C],l+=de}var Ge=X[Me(t,l)&Bn],Ne=Ge>>4;Ge||T(3),l+=Ge&15;var Z=Sn[Ne];if(Ne>3){var de=ut[Ne];Z+=Me(t,l)&(1<<de)-1,l+=de}if(l>R){u&&T(0);break}a&&v(m+131072);var mt=m+vt;if(m<Z){var yt=o-Z,Fn=Math.min(Z,mt);for(yt+m<0&&T(3);m<Fn;++m)n[m]=r[yt+m]}for(;m<mt;++m)n[m]=n[m-Z]}}e.l=L,e.p=Ue,e.b=m,e.f=f,L&&(f=1,e.m=V,e.d=X,e.n=E)}while(!f);return m!=n.length&&s?Le(n,0,m):n.subarray(0,m)};var Or=new b(0);var Mr=function(t,e){var n={};for(var r in t)n[r]=t[r];for(var r in e)n[r]=e[r];return n},dn=function(t,e,n){for(var r=t(),i=t.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<r.length;++s){var a=r[s],u=o[s];if(typeof a=="function"){e+=";"+u+"=";var v=a.toString();if(a.prototype)if(v.indexOf("[native code]")!=-1){var f=v.indexOf(" ",8)+1;e+=v.slice(f,v.indexOf("(",f))}else{e+=v;for(var l in a.prototype)e+=";"+u+".prototype."+l+"="+a.prototype[l].toString()}else e+=v}else n[u]=a}return e},Pe=[],_r=function(t){var e=[];for(var n in t)t[n].buffer&&e.push((t[n]=new t[n].constructor(t[n])).buffer);return e},Lr=function(t,e,n,r){if(!Pe[n]){for(var i="",o={},s=t.length-1,a=0;a<s;++a)i=dn(t[a],i,o);Pe[n]={c:dn(t[s],i,o),e:o}}var u=Mr({},Pe[n].e);return Pr(Pe[n].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",n,u,_r(u),r)},Ur=function(){return[b,Y,yn,lt,ut,In,ht,Sn,Tn,bn,_e,Rn,he,Oe,O,Me,En,Le,T,Dn,ft,Pn,kn]};var Pn=function(t){return postMessage(t,[t.buffer])},kn=function(t){return t&&{out:t.size&&new b(t.size),dictionary:t.dictionary}},Gr=function(t,e,n,r,i,o){var s=Lr(n,r,i,function(a,u){s.terminate(),o(a,u)});return s.postMessage([t,e],e.consume?[t.buffer]:[]),function(){s.terminate()}};var G=function(t,e){return t[e]|t[e+1]<<8},_=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},at=function(t,e){return _(t,e)+_(t,e+4)*4294967296};function Nr(t,e,n){return n||(n=e,e={}),typeof n!="function"&&T(7),Gr(t,e,[Ur],function(r){return Pn(ft(r.data[0],kn(r.data[1])))},1,n)}function ft(t,e){return Dn(t,{i:2},e&&e.out,e&&e.dictionary)}var ct=typeof TextDecoder<"u"&&new TextDecoder,Vr=0;try{ct.decode(Or,{stream:!0}),Vr=1}catch{}var zr=function(t){for(var e="",n=0;;){var r=t[n++],i=(r>127)+(r>223)+(r>239);if(n+i>t.length)return{s:e,r:Le(t,n-1)};i?i==3?(r=((r&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|t[n++]&63):e+=String.fromCharCode((r&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(r)}};function jr(t,e){if(e){for(var n="",r=0;r<t.length;r+=16384)n+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return n}else{if(ct)return ct.decode(t);var i=zr(t),o=i.s,n=i.r;return n.length&&T(8),o}}var Br=function(t,e){return e+30+G(t,e+26)+G(t,e+28)},Fr=function(t,e,n){var r=G(t,e+28),i=jr(t.subarray(e+46,e+46+r),!(G(t,e+8)&2048)),o=e+46+r,s=_(t,e+20),a=n&&s==4294967295?Zr(t,o):[s,_(t,e+24),_(t,e+42)],u=a[0],v=a[1],f=a[2];return[G(t,e+10),u,v,i,o+G(t,e+30)+G(t,e+32),f]},Zr=function(t,e){for(;G(t,e)!=1;e+=4+G(t,e+2));return[at(t,e+12),at(t,e+4),at(t,e+20)]};var vn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(t){t()};function On(t,e,n){n||(n=e,e={}),typeof n!="function"&&T(7);var r=[],i=function(){for(var E=0;E<r.length;++E)r[E]()},o={},s=function(E,R){vn(function(){n(E,R)})};vn(function(){s=n});for(var a=t.length-22;_(t,a)!=101010256;--a)if(!a||t.length-a>65558)return s(T(13,0,1),null),i;var u=G(t,a+8);if(u){var v=u,f=_(t,a+16),l=f==4294967295||v==65535;if(l){var m=_(t,a-12);l=_(t,m)==101075792,l&&(v=u=_(t,m+32),f=_(t,m+48))}for(var L=e&&e.filter,X=function(E){var R=Fr(t,f,l),F=R[0],x=R[1],z=R[2],q=R[3],pe=R[4],Se=R[5],W=Br(t,Se);f=pe;var D=function(C,ge){C?(i(),s(C,null)):(ge&&(o[q]=ge),--u||s(null,o))};if(!L||L({name:q,size:x,originalSize:z,compression:F}))if(!F)D(null,Le(t,W,W+x));else if(F==8){var Q=t.subarray(W,W+x);if(z<524288||x>.8*z)try{D(null,ft(Q,{out:new b(z)}))}catch(C){D(C,null)}else r.push(Nr(Q,{size:z},D))}else D(T(14,"unknown compression type "+F,1),null);else D(null,null)},V=0;V<v;++V)X(V)}else s(null,{});return i}var Un=require("fs"),N=require("fs/promises"),fe=require("path");c();function Mn(t){function e(s,a,u,v){let f=0;return f+=s<<0,f+=a<<8,f+=u<<16,f+=v<<24>>>0,f}if(t[0]===80&&t[1]===75&&t[2]===3&&t[3]===4)return t;if(t[0]!==67||t[1]!==114||t[2]!==50||t[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let n=t[4]===3,r=t[4]===2;if(!r&&!n||t[5]||t[6]||t[7])throw new Error("Unexpected crx format version number.");if(r){let s=e(t[8],t[9],t[10],t[11]),a=e(t[12],t[13],t[14],t[15]),u=16+s+a;return t.subarray(u,t.length)}let o=12+e(t[8],t[9],t[10],t[11]);return t.subarray(o,t.length)}c();var Kr=require("original-fs");async function Wr(t,e){try{var n=await fetch(t,e)}catch(i){throw i instanceof Error&&i.cause&&(i=i.cause),new Error(`${e?.method??"GET"} ${t} failed: ${i}`)}if(n.ok)return n;let r=`${e?.method??"GET"} ${t}: ${n.status} ${n.statusText}`;try{let i=await n.text();r+=`
${i}`}catch{}throw new Error(r)}async function _n(t,e){let r=await(await Wr(t,e)).arrayBuffer();return Buffer.from(r)}var Hr=(0,fe.join)(be,"ExtensionCache");async function $r(t,e){return await(0,N.mkdir)(e,{recursive:!0}),new Promise((n,r)=>{On(t,(i,o)=>{if(i)return void r(i);Promise.all(Object.keys(o).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,N.mkdir)((0,fe.join)(e,s),{recursive:!0});let a=s.split("/"),u=a.pop(),v=a.join("/"),f=(0,fe.join)(e,v);v&&await(0,N.mkdir)(f,{recursive:!0}),await(0,N.writeFile)((0,fe.join)(f,u),o[s])})).then(()=>n()).catch(s=>{(0,N.rm)(e,{recursive:!0,force:!0}),r(s)})})})}async function Gn(t){let e=(0,fe.join)(Hr,`${t}`);try{await(0,N.access)(e,Un.constants.F_OK)}catch{let r=`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${t}%26uc&prodversion=${process.versions.chrome}`,i=await _n(r,{headers:{"User-Agent":`Electron ${process.versions.electron} ~ Vencord (https://github.com/Vendicated/Vencord)`}});await $r(Mn(i),e).catch(o=>console.error(`Failed to extract extension ${t}`,o))}Ln.session.defaultSession.loadExtension(e)}J.app.whenReady().then(()=>{J.protocol.handle("vencord",({url:t})=>{let e=decodeURI(t).slice(10).replace(/\?v=\d+$/,"");if(e.endsWith("/")&&(e=e.slice(0,-1)),e.startsWith("/themes/")){let n=e.slice(8),r=st(H,n);return r?J.net.fetch((0,pt.pathToFileURL)(r).toString()):new Response(null,{status:404})}switch(e){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":return J.net.fetch((0,pt.pathToFileURL)((0,Nn.join)(__dirname,e)).toString());default:return new Response(null,{status:404})}});try{P.store.enableReactDevtools&&Gn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(t=>console.error("[Vencord] Failed to install React Developer Tools",t))}catch{}Dt()});
//# sourceURL=file:///VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */

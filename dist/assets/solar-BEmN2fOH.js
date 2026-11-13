import"./style-jvaNVYZd.js";import{c as ou,a as Yl}from"./hand-camera-B4DhPKdM.js";import{P as lu}from"./gestures-PU-wMR24.js";import{O as cu,V as uu,I as du,P as hu,r as fu}from"./index-aim-BmP_iDms.js";import{D as pu}from"./dwell-BH3lX2mS.js";import{d as Kl}from"./hand-preview-B0G2Y1bR.js";import"./config-DKoXKl1O.js";import"./hand-geometry-BE2zWwBt.js";class mu{constructor(e){this.target=e}target;touch=null;get mode(){return this.touch?.kind??null}clear(){this.touch=null}update(e,t){const n=this.touch,[r,s]=e;if(!r){this.clear();return}if(s){const l=r.id<s.id?[r.id,s.id]:[s.id,r.id],u=Math.hypot(r.point.x-s.point.x,r.point.y-s.point.y),f=Math.min(t.width,t.height)*.06;n?.kind==="two"&&n.ids[0]===l[0]&&n.ids[1]===l[1]&&n.gap>f&&u>f&&this.target.zoom(Math.min(1.18,Math.max(.85,u/n.gap))),this.touch={kind:"two",ids:l,gap:u};return}const{id:a,point:o}=r;if(n?.kind!=="one"||n.id!==a){this.touch={kind:"one",id:a,start:o,point:o,dragging:!1};return}const c=Math.hypot(o.x-n.start.x,o.y-n.start.y);!n.dragging&&c<9||(this.target.rotate(o.x-n.point.x,o.y-n.point.y),this.touch={...n,point:o,dragging:!0})}}const nn=[{id:"sun",name:"Sol",kind:"Estrela",year:"",description:"A gravidade do Sol mantém os planetas em órbita.",texture:"sun",color:"#ffb353",orbit:0,radius:3.7,phase:0,speed:0,tilt:0},{id:"mercury",name:"Mercúrio",kind:"1º planeta · Rochoso",year:"88 dias terrestres",description:"É o menor planeta e o mais próximo do Sol.",texture:"mercury",color:"#b7aeac",orbit:7,radius:.53,phase:-.92,speed:.42,tilt:0},{id:"venus",name:"Vênus",kind:"2º planeta · Rochoso",year:"225 dias terrestres",description:"Sua atmosfera densa retém calor e faz dele o planeta mais quente.",texture:"venus_atmosphere",color:"#e6bd87",orbit:10,radius:.88,phase:2.23,speed:.27,tilt:177.4},{id:"earth",name:"Terra",kind:"3º planeta · Rochoso",year:"365 dias terrestres",description:"Os oceanos cobrem a maior parte da superfície do nosso planeta.",texture:"earth_daymap",color:"#68acf3",orbit:14,radius:1,phase:.32,speed:.2,tilt:23.4},{id:"mars",name:"Marte",kind:"4º planeta · Rochoso",year:"687 dias terrestres",description:"O óxido de ferro dá o tom avermelhado à superfície.",texture:"mars",color:"#dc815e",orbit:18,radius:.73,phase:3.49,speed:.15,tilt:25.2},{id:"jupiter",name:"Júpiter",kind:"5º planeta · Gigante gasoso",year:"Cerca de 12 anos terrestres",description:"O maior planeta abriga a Grande Mancha Vermelha, uma enorme tempestade.",texture:"jupiter",color:"#d8aa85",orbit:25,radius:2.85,phase:-1.95,speed:.095,tilt:3.1},{id:"saturn",name:"Saturno",kind:"6º planeta · Gigante gasoso",year:"Cerca de 29 anos terrestres",description:"Seus anéis são formados principalmente por partículas de gelo.",texture:"saturn",color:"#e3caa1",orbit:34,radius:2.35,phase:.45,speed:.068,tilt:26.7},{id:"uranus",name:"Urano",kind:"7º planeta · Gigante de gelo",year:"Cerca de 84 anos terrestres",description:"Seu eixo é tão inclinado que o planeta gira quase de lado.",texture:"uranus",color:"#9bdee5",orbit:43,radius:1.63,phase:2.68,speed:.045,tilt:97.8},{id:"neptune",name:"Netuno",kind:"8º planeta · Gigante de gelo",year:"Cerca de 165 anos terrestres",description:"É o planeta mais distante do Sol e tem ventos muito rápidos.",texture:"neptune",color:"#799cdb",orbit:52,radius:1.56,phase:-.55,speed:.033,tilt:28.3}],Vt={id:"gaguinho",name:"Mundo Gaguinho",kind:"Easter egg · Mundo fictício",year:"",description:"Além de Netuno, um mar rosa banha vários continentes. Em um deles, as costas desenham as orelhas e o focinho do Gaguinho.",texture:"mundo_gaguinho",color:"#ff83a3",orbit:65,radius:2.85,phase:.52,speed:.021,tilt:9},pr=[...nn,Vt];const no="187",gu=0,Bo=1,_u=2,Jr=1,xu=2,Qi=3,ni=0,Ot=1,dn=2,Ri=0,nr=1,zo=2,Go=3,Ho=4,vu=5,Ti=100,Su=101,Mu=102,Eu=103,yu=104,bu=200,Tu=201,Au=202,wu=203,Zl=204,$l=205,Ru=206,Cu=207,Pu=208,Lu=209,Du=210,Iu=211,Nu=212,Uu=213,Fu=214,oa=0,la=1,ca=2,rr=3,ua=4,da=5,ha=6,fa=7,io=0,Ou=1,Bu=2,wn=0,Jl=1,Ql=2,jl=3,ec=4,tc=5,nc=6,ic=7,rc=300,Ii=301,sr=302,ws=303,Rs=304,pa=1e3,Tn=1001,ma=1002,yt=1003,zu=1004,Er=1005,Ft=1006,Cs=1007,Hn=1008,kt=1009,sc=1010,ac=1011,ar=1012,ro=1013,gn=1014,hn=1015,_n=1016,so=1017,ao=1018,Ni=1020,oc=35902,lc=35899,cc=1021,uc=1022,fn=1023,Xn=1026,Vn=1027,dc=1028,oo=1029,ii=1030,lo=1031,co=1033,Qr=33776,jr=33777,es=33778,ts=33779,ga=35840,_a=35841,xa=35842,va=35843,Sa=36196,Ma=37492,Ea=37496,ya=37488,ba=37489,os=37490,Ta=37491,Aa=37808,wa=37809,Ra=37810,Ca=37811,Pa=37812,La=37813,Da=37814,Ia=37815,Na=37816,Ua=37817,Fa=37818,Oa=37819,Ba=37820,za=37821,Ga=36492,Ha=36494,Va=36495,ka=36283,Wa=36284,ls=36285,Xa=36286,Gu=3200,qa=0,Hu=1,Gn="",Nt="srgb",cs="srgb-linear",us="linear",Ze="srgb",Ps=7680,Vu=519,ku=512,Wu=513,Xu=514,hc=515,qu=516,Yu=517,fc=518,pc=519,mc=35044,Vo="300 es",rn=2e3,or=2001;function Ku(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zu(){const i=lr("canvas");return i.style.display="block",i}const ko={};function ds(...i){const e="THREE."+i.shift();console.log(e,...i)}function gc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=gc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=gc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ns(...i){const e=i.join(" ");e in ko||(ko[e]=!0,Re(...i))}function $u(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ju={[oa]:oa,[ca]:ha,[ua]:ua,[rr]:da,[la]:la,[ha]:ca,[fa]:fa,[da]:rr};class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,Ya=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function Qu(i,e){return(i%e+e)%e}function Ds(i,e,t){return(1-t)*i+t*e}function ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vs(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function _c(i,e){if(e.constructor===Float32Array)return i;const t=vs(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function xc(i,e){if(e.constructor===Float32Array)return i;const t=vs(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const yo=class yo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yo.prototype.isVector2=!0;let Ne=yo;class Gi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],h=s[a+0],m=s[a+1],x=s[a+2],S=s[a+3];if(f!==S||c!==h||l!==m||u!==x){let p=c*h+l*m+u*x+f*S;p<0&&(h=-h,m=-m,x=-x,S=-S,p=-p);let d=1-o;if(p<.9995){const M=Math.acos(p),A=Math.sin(M);d=Math.sin(d*M)/A,o=Math.sin(o*M)/A,c=c*d+h*o,l=l*d+m*o,u=u*d+x*o,f=f*d+S*o}else{c=c*d+h*o,l=l*d+m*o,u=u*d+x*o,f=f*d+S*o;const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+u*f+c*m-l*h,e[t+1]=c*x+u*h+l*f-o*m,e[t+2]=l*x+u*m+o*h-c*f,e[t+3]=u*x-o*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),h=c(n/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f+h*m*x;break;case"YZX":this._x=h*u*f+l*m*x,this._y=l*m*f+h*u*x,this._z=l*u*x-h*m*f,this._w=l*u*f-h*m*x;break;case"XZY":this._x=h*u*f-l*m*x,this._y=l*m*f-h*u*x,this._z=l*u*x+h*m*f,this._w=l*u*f+h*m*x;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bo=class bo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Is.copy(this).projectOnVector(e),this.sub(Is)}reflect(e){return this.sub(Is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bo.prototype.isVector3=!0;let N=bo;const Is=new N,Wo=new Gi,To=class To{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],x=n[8],S=r[0],p=r[3],d=r[6],M=r[1],A=r[4],b=r[7],R=r[2],T=r[5],g=r[8];return s[0]=a*S+o*M+c*R,s[3]=a*p+o*A+c*T,s[6]=a*d+o*b+c*g,s[1]=l*S+u*M+f*R,s[4]=l*p+u*A+f*T,s[7]=l*d+u*b+f*g,s[2]=h*S+m*M+x*R,s[5]=h*p+m*A+x*T,s[8]=h*d+m*b+x*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,m=l*s-a*c,x=t*f+n*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=f*S,e[1]=(r*l-u*n)*S,e[2]=(o*n-r*a)*S,e[3]=h*S,e[4]=(u*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=m*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ns.makeScale(e,t)),this}rotate(e){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ns.makeRotation(-e)),this}translate(e,t){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ns.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};To.prototype.isMatrix3=!0;let Pe=To;const Ns=new Pe,Xo=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qo=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ed(){const i={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ze&&(r.r=Rn(r.r),r.g=Rn(r.g),r.b=Rn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gn?us:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cs]:{primaries:e,whitePoint:n,transfer:us,toXYZ:Xo,fromXYZ:qo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:Xo,fromXYZ:qo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const Ve=ed();function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oi;class td{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oi===void 0&&(oi=lr("canvas")),oi.width=e.width,oi.height=e.height;const r=oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=oi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Rn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nd=0;class uo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Us(r[a].image)):s.push(Us(r[a]))}else s=Us(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?td.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let id=0;const Fs=new N;class bt extends si{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Tn,r=Tn,s=Ft,a=Hn,o=fn,c=kt,l=bt.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=ai(),this.name="",this.source=new uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fs).x}get height(){return this.source.getSize(Fs).y}get depth(){return this.source.getSize(Fs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=rc;bt.DEFAULT_ANISOTROPY=1;const Ao=class Ao{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],x=c[9],S=c[2],p=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,b=(m+1)/2,R=(d+1)/2,T=(u+h)/4,g=(f+S)/4,E=(x+p)/4;return A>b&&A>R?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=T/n,s=g/n):b>R?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=T/r,s=E/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=g/s,r=E/s),this.set(n,r,s,t),this}let M=Math.sqrt((p-x)*(p-x)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-x)/M,this.y=(f-S)/M,this.z=(h-u)/M,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ao.prototype.isVector4=!0;let ot=Ao;class rd extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new bt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new uo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends rd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vc extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sd extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const xs=class xs{constructor(e,t,n,r,s,a,o,c,l,u,f,h,m,x,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,f,h,m,x,S,p)}set(e,t,n,r,s,a,o,c,l,u,f,h,m,x,S,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=x,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/li.setFromMatrixColumn(e,0).length(),s=1/li.setFromMatrixColumn(e,1).length(),a=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,x=o*u,S=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+x*l,t[5]=h-S*l,t[9]=-o*c,t[2]=S-h*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,x=l*u,S=l*f;t[0]=h+S*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-x,t[6]=S+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,x=l*u,S=l*f;t[0]=h-S*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,m=a*f,x=o*u,S=o*f;t[0]=c*u,t[4]=x*l-m,t[8]=h*l+S,t[1]=c*f,t[5]=S*l+h,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,x=o*c,S=o*l;t[0]=c*u,t[4]=S-h*f,t[8]=x*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+x,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*c,m=a*l,x=o*c,S=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+S,t[5]=a*u,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ad,e,od)}lookAt(e,t,n){const r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),In.crossVectors(n,zt),In.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),In.crossVectors(n,zt)),In.normalize(),yr.crossVectors(zt,In),r[0]=In.x,r[4]=yr.x,r[8]=zt.x,r[1]=In.y,r[5]=yr.y,r[9]=zt.y,r[2]=In.z,r[6]=yr.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],x=n[2],S=n[6],p=n[10],d=n[14],M=n[3],A=n[7],b=n[11],R=n[15],T=r[0],g=r[4],E=r[8],B=r[12],L=r[1],I=r[5],G=r[9],q=r[13],P=r[2],W=r[6],$=r[10],H=r[14],te=r[3],k=r[7],Q=r[11],j=r[15];return s[0]=a*T+o*L+c*P+l*te,s[4]=a*g+o*I+c*W+l*k,s[8]=a*E+o*G+c*$+l*Q,s[12]=a*B+o*q+c*H+l*j,s[1]=u*T+f*L+h*P+m*te,s[5]=u*g+f*I+h*W+m*k,s[9]=u*E+f*G+h*$+m*Q,s[13]=u*B+f*q+h*H+m*j,s[2]=x*T+S*L+p*P+d*te,s[6]=x*g+S*I+p*W+d*k,s[10]=x*E+S*G+p*$+d*Q,s[14]=x*B+S*q+p*H+d*j,s[3]=M*T+A*L+b*P+R*te,s[7]=M*g+A*I+b*W+R*k,s[11]=M*E+A*G+b*$+R*Q,s[15]=M*B+A*q+b*H+R*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],x=e[3],S=e[7],p=e[11],d=e[15],M=c*m-l*h,A=o*m-l*f,b=o*h-c*f,R=a*m-l*u,T=a*h-c*u,g=a*f-o*u;return t*(S*M-p*A+d*b)-n*(x*M-p*R+d*T)+r*(x*A-S*R+d*g)-s*(x*b-S*T+p*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],x=e[12],S=e[13],p=e[14],d=e[15],M=t*o-n*a,A=t*c-r*a,b=t*l-s*a,R=n*c-r*o,T=n*l-s*o,g=r*l-s*c,E=u*S-f*x,B=u*p-h*x,L=u*d-m*x,I=f*p-h*S,G=f*d-m*S,q=h*d-m*p,P=M*q-A*G+b*I+R*L-T*B+g*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/P;return e[0]=(o*q-c*G+l*I)*W,e[1]=(r*G-n*q-s*I)*W,e[2]=(S*g-p*T+d*R)*W,e[3]=(h*T-f*g-m*R)*W,e[4]=(c*L-a*q-l*B)*W,e[5]=(t*q-r*L+s*B)*W,e[6]=(p*b-x*g-d*A)*W,e[7]=(u*g-h*b+m*A)*W,e[8]=(a*G-o*L+l*E)*W,e[9]=(n*L-t*G-s*E)*W,e[10]=(x*T-S*b+d*M)*W,e[11]=(f*b-u*T-m*M)*W,e[12]=(o*B-a*I-c*E)*W,e[13]=(t*I-n*B+r*E)*W,e[14]=(S*A-x*R-p*M)*W,e[15]=(u*R-f*A+h*M)*W,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,m=s*u,x=s*f,S=a*u,p=a*f,d=o*f,M=c*l,A=c*u,b=c*f,R=n.x,T=n.y,g=n.z;return r[0]=(1-(S+d))*R,r[1]=(m+b)*R,r[2]=(x-A)*R,r[3]=0,r[4]=(m-b)*T,r[5]=(1-(h+d))*T,r[6]=(p+M)*T,r[7]=0,r[8]=(x+A)*g,r[9]=(p-M)*g,r[10]=(1-(h+S))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=li.set(r[0],r[1],r[2]).length();const o=li.set(r[4],r[5],r[6]).length(),c=li.set(r[8],r[9],r[10]).length();s<0&&(a=-a),jt.copy(this);const l=1/a,u=1/o,f=1/c;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=f,jt.elements[9]*=f,jt.elements[10]*=f,t.setFromRotationMatrix(jt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=rn,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),m=(n+r)/(n-r);let x,S;if(c)x=s/(a-s),S=a*s/(a-s);else if(o===rn)x=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===or)x=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=rn,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),m=-(n+r)/(n-r);let x,S;if(c)x=1/(a-s),S=a/(a-s);else if(o===rn)x=-2/(a-s),S=-(a+s)/(a-s);else if(o===or)x=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xs.prototype.isMatrix4=!0;let Je=xs;const li=new N,jt=new Je,ad=new N(0,0,0),od=new N(1,1,1),In=new N,yr=new N,zt=new N,Yo=new Je,Ko=new Gi;class qn{constructor(e=0,t=0,n=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ko.setFromEuler(this),this.setFromQuaternion(Ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ld=0;const Zo=new N,ci=new Gi,vn=new Je,br=new N,ki=new N,cd=new N,ud=new Gi,$o=new N(1,0,0),Jo=new N(0,1,0),Qo=new N(0,0,1),jo={type:"added"},dd={type:"removed"},ui={type:"childadded",child:null},Os={type:"childremoved",child:null};class Tt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new N,t=new qn,n=new Gi,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Je},normalMatrix:{value:new Pe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis($o,e)}rotateY(e){return this.rotateOnAxis(Jo,e)}rotateZ(e){return this.rotateOnAxis(Qo,e)}translateOnAxis(e,t){return Zo.copy(e).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($o,e)}translateY(e){return this.translateOnAxis(Jo,e)}translateZ(e){return this.translateOnAxis(Qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ki,br,this.up):vn.lookAt(br,ki,this.up),this.quaternion.setFromRotationMatrix(vn),r&&(vn.extractRotation(r.matrixWorld),ci.setFromRotationMatrix(vn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jo),ui.child=e,this.dispatchEvent(ui),ui.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dd),Os.child=e,this.dispatchEvent(Os),Os.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jo),ui.child=e,this.dispatchEvent(ui),ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tt.DEFAULT_UP=new N(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hd={type:"move"};class Bs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,n),d=this._getHandJoint(l,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;l.inputState.pinching&&h>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hd)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function zs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=Qu(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zs(a,s,e+1/3),this.g=zs(a,s,e),this.b=zs(a,s,e-1/3)}return Ve.colorSpaceToWorking(this,r),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ve.workingToColorSpace(Ct.copy(this),e),Math.round(ke(Ct.r*255,0,255))*65536+Math.round(ke(Ct.g*255,0,255))*256+Math.round(ke(Ct.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Ct.copy(this),t);const n=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Nt){Ve.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,r=Ct.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Tr);const n=Ds(Nn.h,Tr.h,t),r=Ds(Nn.s,Tr.s,t),s=Ds(Nn.l,Tr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new He;He.NAMES=Mc;class fd extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const en=new N,Sn=new N,Gs=new N,Mn=new N,di=new N,hi=new N,el=new N,Hs=new N,Vs=new N,ks=new N,Ws=new ot,Xs=new ot,qs=new ot;class Jt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),en.subVectors(e,t),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){en.subVectors(r,t),Sn.subVectors(n,t),Gs.subVectors(e,t);const a=en.dot(en),o=en.dot(Sn),c=en.dot(Gs),l=Sn.dot(Sn),u=Sn.dot(Gs),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(l*c-o*u)*h,x=(a*u-o*c)*h;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(o,Mn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ws.setScalar(0),Xs.setScalar(0),qs.setScalar(0),Ws.fromBufferAttribute(e,t),Xs.fromBufferAttribute(e,n),qs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ws,s.x),a.addScaledVector(Xs,s.y),a.addScaledVector(qs,s.z),a}static isFrontFacing(e,t,n,r){return en.subVectors(n,t),Sn.subVectors(e,t),en.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),en.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;di.subVectors(r,n),hi.subVectors(s,n),Hs.subVectors(e,n);const c=di.dot(Hs),l=hi.dot(Hs);if(c<=0&&l<=0)return t.copy(n);Vs.subVectors(e,r);const u=di.dot(Vs),f=hi.dot(Vs);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(di,a);ks.subVectors(e,s);const m=di.dot(ks),x=hi.dot(ks);if(x>=0&&m<=x)return t.copy(s);const S=m*l-c*x;if(S<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(hi,o);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return el.subVectors(s,r),o=(f-u)/(f-u+(m-x)),t.copy(r).addScaledVector(el,o);const d=1/(p+S+h);return a=S*d,o=h*d,t.copy(n).addScaledVector(di,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(s,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),wr.subVectors(this.max,Wi),fi.subVectors(e.a,Wi),pi.subVectors(e.b,Wi),mi.subVectors(e.c,Wi),Un.subVectors(pi,fi),Fn.subVectors(mi,pi),Jn.subVectors(fi,mi);let t=[0,-Un.z,Un.y,0,-Fn.z,Fn.y,0,-Jn.z,Jn.y,Un.z,0,-Un.x,Fn.z,0,-Fn.x,Jn.z,0,-Jn.x,-Un.y,Un.x,0,-Fn.y,Fn.x,0,-Jn.y,Jn.x,0];return!Ys(t,fi,pi,mi,wr)||(t=[1,0,0,0,1,0,0,0,1],!Ys(t,fi,pi,mi,wr))?!1:(Rr.crossVectors(Un,Fn),t=[Rr.x,Rr.y,Rr.z],Ys(t,fi,pi,mi,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const En=[new N,new N,new N,new N,new N,new N,new N,new N],tn=new N,Ar=new mr,fi=new N,pi=new N,mi=new N,Un=new N,Fn=new N,Jn=new N,Wi=new N,wr=new N,Rr=new N,Qn=new N;function Ys(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Qn.fromArray(i,s);const o=r.x*Math.abs(Qn.x)+r.y*Math.abs(Qn.y)+r.z*Math.abs(Qn.z),c=e.dot(Qn),l=t.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ht=new N,Cr=new Ne;let pd=0;class Wn extends si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this.updateRanges=[],this.gpuType=hn,this.version=0,this._normalizationScale=e!==void 0?vs(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):_c(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):xc(e,this.array)}}class Ec extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yc extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const md=new mr,Xi=new N,Ks=new N;class gr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):md.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ks.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(Ks)),this.expandByPoint(Xi.copy(e.center).sub(Ks))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gd=0;const Kt=new Je,Zs=new Tt,gi=new N,Gt=new mr,qi=new mr,St=new N;class Bt extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ku(e)?yc:Ec)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Zs.lookAt(e),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Gt.min,qi.min),Gt.expandByPoint(St),St.addVectors(Gt.max,qi.max),Gt.expandByPoint(St)):(Gt.expandByPoint(qi.min),Gt.expandByPoint(qi.max))}Gt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)St.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(e,l),St.add(gi)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new N,c[B]=new N;const u=new N,f=new N,h=new N,m=new Ne,x=new Ne,S=new Ne,p=new N,d=new N;function M(B,L,I){l[B]=l[L]=l[I]=1,u.fromBufferAttribute(n,B),f.fromBufferAttribute(n,L),h.fromBufferAttribute(n,I),m.fromBufferAttribute(s,B),x.fromBufferAttribute(s,L),S.fromBufferAttribute(s,I),f.sub(u),h.sub(u),x.sub(m),S.sub(m);const G=1/(x.x*S.y-S.x*x.y);isFinite(G)&&(p.copy(f).multiplyScalar(S.y).addScaledVector(h,-x.y).multiplyScalar(G),d.copy(h).multiplyScalar(x.x).addScaledVector(f,-S.x).multiplyScalar(G),o[B].add(p),o[L].add(p),o[I].add(p),c[B].add(d),c[L].add(d),c[I].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,L=A.length;B<L;++B){const I=A[B],G=I.start,q=I.count;for(let P=G,W=G+q;P<W;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const b=new N,R=new N,T=new N,g=new N;function E(B){T.fromBufferAttribute(r,B),g.copy(T);const L=o[B];b.copy(L),b.sub(T.multiplyScalar(T.dot(L))).normalize(),R.crossVectors(g,L);const G=R.dot(c[B])<0?-1:1;a.setXYZW(B,b.x,b.y,b.z,G)}for(let B=0,L=n.count;B<L;++B)l[B]&&E(B);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),S=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let m=0,x=0;for(let S=0,p=c.length;S<p;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*u;for(let d=0;d<u;d++)h[x++]=l[m++]}return new Wn(h,u,f)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _d{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=tl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=tl(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function tl(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ai()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Dt=new N;class hs{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e!==void 0?vs(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ds("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ds("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):_c(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):xc(e,this.data.array)}}const $s=new N,xd=new N,vd=new Pe;class Bn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=$s.subVectors(n,t).cross(xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta($s),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vd.getNormalMatrix(e),r=this.coplanarPoint($s).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Sd=0;class Yn extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=nr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=$l,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bc extends Yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _i;const Yi=new N,xi=new N,vi=new N,Si=new Ne,Ki=new Ne,Tc=new Je,Pr=new N,Zi=new N,Lr=new N,nl=new Ne,Js=new Ne,il=new Ne;class Md extends Tt{constructor(e=new bc){if(super(),this.isSprite=!0,this.type="Sprite",_i===void 0){_i=new Bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _d(t,5);_i.setIndex([0,1,2,0,2,3]),_i.setAttribute("position",new hs(n,3,0,!1)),_i.setAttribute("uv",new hs(n,2,3,!1))}this.geometry=_i,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xi.setFromMatrixScale(this.matrixWorld),Tc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xi.multiplyScalar(-vi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Dr(Pr.set(-.5,-.5,0),vi,a,xi,r,s),Dr(Zi.set(.5,-.5,0),vi,a,xi,r,s),Dr(Lr.set(.5,.5,0),vi,a,xi,r,s),nl.set(0,0),Js.set(1,0),il.set(1,1);let o=e.ray.intersectTriangle(Pr,Zi,Lr,!1,Yi);if(o===null&&(Dr(Zi.set(-.5,.5,0),vi,a,xi,r,s),Js.set(0,1),o=e.ray.intersectTriangle(Pr,Lr,Zi,!1,Yi),o===null))return;const c=e.ray.origin.distanceTo(Yi);c<e.near||c>e.far||t.push({distance:c,point:Yi.clone(),uv:Jt.getInterpolation(Yi,Pr,Zi,Lr,nl,Js,il,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Dr(i,e,t,n,r,s){Si.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ki.x=s*Si.x-r*Si.y,Ki.y=r*Si.x+s*Si.y):Ki.copy(Si),i.copy(e),i.x+=Ki.x,i.y+=Ki.y,i.applyMatrix4(Tc)}const yn=new N,Qs=new N,Ir=new N,Nr=new N;class ho{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qs.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(Qs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Nr.dot(this.direction),c=-Nr.dot(Ir),l=Nr.lengthSq(),u=Math.abs(1-a*a);let f,h,m,x;if(u>0)if(f=a*c-o,h=a*o-c,x=s*u,f>=0)if(h>=-x)if(h<=x){const S=1/u;f*=S,h*=S,m=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=x?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Qs).addScaledVector(Ir,h),m}intersectSphere(e,t){if(e.radius<0)return null;yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),r=yn.dot(yn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,m=e.z-a.z,x=t.x-a.x,S=t.y-a.y,p=t.z-a.z,d=n.x-a.x,M=n.y-a.y,A=n.z-a.z,b=Math.abs(c),R=Math.abs(l),T=Math.abs(u);let g,E,B,L,I,G,q,P,W,$,H,te;if(b>=R&&b>=T?(B=c,G=f,W=x,te=d,c>=0?(g=l,E=u,L=h,I=m,q=S,P=p,$=M,H=A):(g=u,E=l,L=m,I=h,q=p,P=S,$=A,H=M)):R>=T?(B=l,G=h,W=S,te=M,l>=0?(g=u,E=c,L=m,I=f,q=p,P=x,$=A,H=d):(g=c,E=u,L=f,I=m,q=x,P=p,$=d,H=A)):(B=u,G=m,W=p,te=A,u>=0?(g=c,E=l,L=f,I=h,q=x,P=S,$=d,H=M):(g=l,E=c,L=h,I=f,q=S,P=x,$=M,H=d)),B===0)return null;const k=g/B,Q=E/B,j=1/B,Me=L-k*G,Le=I-Q*G,K=q-k*W,pe=P-Q*W,xe=$-k*te,Te=H-Q*te,me=xe*pe-Te*K,Ie=Me*Te-Le*xe,ut=K*Le-pe*Me;if(r){if(me<0||Ie<0||ut<0)return null}else if((me<0||Ie<0||ut<0)&&(me>0||Ie>0||ut>0))return null;const we=me+Ie+ut;if(we===0)return null;const Ye=j*(me*G+Ie*W+ut*te);return(we>0?Ye<0:Ye>0)?null:this.at(Ye/we,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fo extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rl=new Je,jn=new ho,Ur=new gr,sl=new N,Fr=new N,Or=new N,Br=new N,js=new N,zr=new N,al=new N,Gr=new N;class Cn extends Tt{constructor(e=new Bt,t=new fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(js.fromBufferAttribute(f,e),a?zr.addScaledVector(js,u):zr.addScaledVector(js.sub(t),u))}t.add(zr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),jn.copy(e.ray).recast(e.near),!(Ur.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Ur,sl)===null||jn.origin.distanceToSquared(sl)>(e.far-e.near)**2))&&(rl.copy(s).invert(),jn.copy(e.ray).applyMatrix4(rl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const p=h[x],d=a[p.materialIndex],M=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,R=A;b<R;b+=3){const T=o.getX(b),g=o.getX(b+1),E=o.getX(b+2);r=Hr(this,d,e,n,l,u,f,T,g,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=x,d=S;p<d;p+=3){const M=o.getX(p),A=o.getX(p+1),b=o.getX(p+2);r=Hr(this,a,e,n,l,u,f,M,A,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){const p=h[x],d=a[p.materialIndex],M=Math.max(p.start,m.start),A=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=M,R=A;b<R;b+=3){const T=b,g=b+1,E=b+2;r=Hr(this,d,e,n,l,u,f,T,g,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let p=x,d=S;p<d;p+=3){const M=p,A=p+1,b=p+2;r=Hr(this,a,e,n,l,u,f,M,A,b),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ed(i,e,t,n,r,s,a,o){let c;if(e.side===Ot?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===ni,o),c===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Gr);return l<t.near||l>t.far?null:{distance:l,point:Gr.clone(),object:i}}function Hr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Fr),i.getVertexPosition(c,Or),i.getVertexPosition(l,Br);const u=Ed(i,e,t,n,Fr,Or,Br,al);if(u){const f=new N;Jt.getBarycoord(al,Fr,Or,Br,f),r&&(u.uv=Jt.getInterpolatedAttribute(r,o,c,l,f,new Ne)),s&&(u.uv1=Jt.getInterpolatedAttribute(s,o,c,l,f,new Ne)),a&&(u.normal=Jt.getInterpolatedAttribute(a,o,c,l,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new N,materialIndex:0};Jt.getNormal(Fr,Or,Br,h.normal),u.face=h,u.barycoord=f}return u}class yd extends bt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=yt,u=yt,f,h){super(null,a,o,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ei=new gr,bd=new Ne(.5,.5),Vr=new N;class cr{constructor(e=new Bn,t=new Bn,n=new Bn,r=new Bn,s=new Bn,a=new Bn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],m=s[7],x=s[8],S=s[9],p=s[10],d=s[11],M=s[12],A=s[13],b=s[14],R=s[15];if(r[0].setComponents(l-a,m-u,d-x,R-M).normalize(),r[1].setComponents(l+a,m+u,d+x,R+M).normalize(),r[2].setComponents(l+o,m+f,d+S,R+A).normalize(),r[3].setComponents(l-o,m-f,d-S,R-A).normalize(),n)r[4].setComponents(c,h,p,b).normalize(),r[5].setComponents(l-c,m-h,d-p,R-b).normalize();else if(r[4].setComponents(l-c,m-h,d-p,R-b).normalize(),t===rn)r[5].setComponents(l+c,m+h,d+p,R+b).normalize();else if(t===or)r[5].setComponents(c,h,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){ei.center.set(0,0,0);const t=bd.distanceTo(e.center);return ei.radius=.7071067811865476+t,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Vr.x=r.normal.x>0?e.max.x:e.min.x,Vr.y=r.normal.y>0?e.max.y:e.min.y,Vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ol=new Je;class po{constructor(){this.coordinateSystem=rn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];ol.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new cr),n[r].setFromProjectionMatrix(ol,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new cr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new po().copy(this)}}class Ka extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fs=new N,ps=new N,ll=new Je,$i=new ho,kr=new gr,ea=new N,cl=new N;class Td extends Tt{constructor(e=new Bt,t=new Ka){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)fs.fromBufferAttribute(t,r-1),ps.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=fs.distanceTo(ps);e.setAttribute("lineDistance",new Pt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),kr.radius+=s,e.ray.intersectsSphere(kr)===!1)return;ll.copy(r).invert(),$i.copy(e.ray).applyMatrix4(ll);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let S=m,p=x-1;S<p;S+=l){const d=u.getX(S),M=u.getX(S+1),A=Wr(this,e,$i,c,d,M,S);A&&t.push(A)}if(this.isLineLoop){const S=u.getX(x-1),p=u.getX(m),d=Wr(this,e,$i,c,S,p,x-1);d&&t.push(d)}}else{const m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let S=m,p=x-1;S<p;S+=l){const d=Wr(this,e,$i,c,S,S+1,S);d&&t.push(d)}if(this.isLineLoop){const S=Wr(this,e,$i,c,x-1,m,x-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wr(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(fs.fromBufferAttribute(o,r),ps.fromBufferAttribute(o,s),t.distanceSqToSegment(fs,ps,ea,cl)>n)return;ea.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ea);if(!(l<e.near||l>e.far))return{distance:l,point:cl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class Ad extends Td{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ac extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ul=new Je,Za=new ho,Xr=new gr,qr=new N;class wd extends Tt{constructor(e=new Bt,t=new Ac){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Xr.radius+=s,e.ray.intersectsSphere(Xr)===!1)return;ul.copy(r).invert(),Za.copy(e.ray).applyMatrix4(ul);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let x=h,S=m;x<S;x++){const p=l.getX(x);qr.fromBufferAttribute(f,p),dl(qr,p,c,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=h,S=m;x<S;x++)qr.fromBufferAttribute(f,x),dl(qr,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function dl(i,e,t,n,r,s,a){const o=Za.distanceSqToPoint(i);if(o<t){const c=new N;Za.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class wc extends bt{constructor(e=[],t=Ii,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends bt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ui extends bt{constructor(e,t,n=gn,r,s,a,o=yt,c=yt,l,u=Xn,f=1){if(u!==Xn&&u!==Vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Rc extends Ui{constructor(e,t=gn,n=Ii,r,s,a=yt,o=yt,c,l=Xn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cc extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _r extends Bt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(f,2));function x(S,p,d,M,A,b,R,T,g,E,B){const L=b/g,I=R/E,G=b/2,q=R/2,P=T/2,W=g+1,$=E+1;let H=0,te=0;const k=new N;for(let Q=0;Q<$;Q++){const j=Q*I-q;for(let Me=0;Me<W;Me++){const Le=Me*L-G;k[S]=Le*M,k[p]=j*A,k[d]=P,l.push(k.x,k.y,k.z),k[S]=0,k[p]=0,k[d]=T>0?1:-1,u.push(k.x,k.y,k.z),f.push(Me/g),f.push(1-Q/E),H+=1}}for(let Q=0;Q<E;Q++)for(let j=0;j<g;j++){const Me=h+j+W*Q,Le=h+j+W*(Q+1),K=h+(j+1)+W*(Q+1),pe=h+(j+1)+W*Q;c.push(Me,Le,pe),c.push(Le,K,pe),te+=6}o.addGroup(m,te,B),m+=te,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ss extends Bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,h=t/c,m=[],x=[],S=[],p=[];for(let d=0;d<u;d++){const M=d*h-a;for(let A=0;A<l;A++){const b=A*f-s;x.push(b,-M,0),S.push(0,0,1),p.push(A/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){const A=M+l*d,b=M+l*(d+1),R=M+1+l*(d+1),T=M+1+l*d;m.push(A,b,T),m.push(b,R,T)}this.setIndex(m),this.setAttribute("position",new Pt(x,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}class mo extends Bt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let f=e;const h=(t-e)/r,m=new N,x=new Ne;for(let S=0;S<=r;S++){for(let p=0;p<=n;p++){const d=s+p/n*a;m.x=f*Math.cos(d),m.y=f*Math.sin(d),c.push(m.x,m.y,m.z),l.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,u.push(x.x,x.y)}f+=h}for(let S=0;S<r;S++){const p=S*(n+1);for(let d=0;d<n;d++){const M=d+p,A=M,b=M+n+1,R=M+n+2,T=M+1;o.push(A,b,T),o.push(b,R,T)}}this.setIndex(o),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class go extends Bt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new N,h=new N,m=[],x=[],S=[],p=[];for(let d=0;d<=n;d++){const M=[],A=d/n,b=a+A*o,R=e*Math.cos(b),T=Math.sqrt(e*e-R*R);let g=0;d===0&&a===0?g=.5/t:d===n&&c===Math.PI&&(g=-.5/t);for(let E=0;E<=t;E++){const B=E/t,L=r+B*s;f.x=-T*Math.cos(L),f.y=R,f.z=T*Math.sin(L),x.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),p.push(B+g,1-A),M.push(l++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const A=u[d][M+1],b=u[d][M],R=u[d+1][M],T=u[d+1][M+1];(d!==0||a>0)&&m.push(A,b,T),(d!==n-1||c<Math.PI)&&m.push(b,R,T)}this.setIndex(m),this.setAttribute("position",new Pt(x,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Fi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(hl(r))r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(hl(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function It(i){const e={};for(let t=0;t<i.length;t++){const n=Fi(i[t]);for(const r in n)e[r]=n[r]}return e}function hl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const Pd={clone:Fi,merge:It};var Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(r.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(r.value);break;case"v3":this.uniforms[n].value=new N().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ot().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Pe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Id extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fl extends Yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nd extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ud extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ta={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(pl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!pl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function pl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Fd{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const m=l[f],x=l[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Od=new Fd;class _o{constructor(e){this.manager=e!==void 0?e:Od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}_o.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi=new WeakMap;class Bd extends _o{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ta.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Mi.get(a);f===void 0&&(f=[],Mi.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=lr("img");function c(){u(),t&&t(this);const f=Mi.get(this)||[];for(let h=0;h<f.length;h++){const m=f[h];m.onLoad&&m.onLoad(this)}Mi.delete(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),ta.remove(`image:${e}`);const h=Mi.get(this)||[];for(let m=0;m<h.length;m++){const x=h[m];x.onError&&x.onError(f)}Mi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ta.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class zd extends _o{constructor(e){super(e)}load(e,t,n,r){const s=new bt,a=new Bd(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Lc extends Tt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const na=new Je,ml=new N,gl=new N;class Gd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=kt,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(ml),gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(na,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===or||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yr=new N,Kr=new Gi,on=new N;class Dc extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yr,Kr,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Kr,on.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Yr,Kr,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Kr,on.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const On=new N,_l=new Ne,xl=new Ne;class $t extends Dc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,_l,xl),t.subVectors(xl,_l)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hd extends Gd{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}}class Vd extends Lc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Hd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class kd extends Dc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wd extends Lc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ei=-90,yi=1;class $a extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $t(Ei,yi,e,t);r.layers=this.layers,this.add(r);const s=new $t(Ei,yi,e,t);s.layers=this.layers,this.add(s);const a=new $t(Ei,yi,e,t);a.layers=this.layers,this.add(a);const o=new $t(Ei,yi,e,t);o.layers=this.layers,this.add(o);const c=new $t(Ei,yi,e,t);c.layers=this.layers,this.add(c);const l=new $t(Ei,yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Xd extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function vl(i,e,t,n){const r=qd(n);switch(t){case cc:return i*e;case dc:return i*e/r.components*r.byteLength;case oo:return i*e/r.components*r.byteLength;case ii:return i*e*2/r.components*r.byteLength;case lo:return i*e*2/r.components*r.byteLength;case uc:return i*e*3/r.components*r.byteLength;case fn:return i*e*4/r.components*r.byteLength;case co:return i*e*4/r.components*r.byteLength;case Qr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case es:case ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _a:case va:return Math.max(i,16)*Math.max(e,8)/4;case ga:case xa:return Math.max(i,8)*Math.max(e,8)/2;case Sa:case Ma:case ya:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ea:case os:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ga:case Ha:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ka:case Wa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ls:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qd(i){switch(i){case kt:case sc:return{byteLength:1,components:1};case ar:case ac:case _n:return{byteLength:2,components:1};case so:case ao:return{byteLength:2,components:4};case gn:case ro:case hn:return{byteLength:4,components:1};case oc:case lc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);function Ic(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Yd(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((m,x)=>m.start-x.start);let h=0;for(let m=1;m<f.length;m++){const x=f[h],S=f[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,f[h]=S)}f.length=h+1;for(let m=0,x=f.length;m<x;m++){const S=f[m];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ih=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ah=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ph=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_h=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",bh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Th=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Gh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zh=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$h=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,If=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Of=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,np=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ip=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Kd,alphahash_pars_fragment:Zd,alphamap_fragment:$d,alphamap_pars_fragment:Jd,alphatest_fragment:Qd,alphatest_pars_fragment:jd,aomap_fragment:eh,aomap_pars_fragment:th,batching_pars_vertex:nh,batching_vertex:ih,begin_vertex:rh,beginnormal_vertex:sh,bsdfs:ah,iridescence_fragment:oh,bumpmap_pars_fragment:lh,clipping_planes_fragment:ch,clipping_planes_pars_fragment:uh,clipping_planes_pars_vertex:dh,clipping_planes_vertex:hh,color_fragment:fh,color_pars_fragment:ph,color_pars_vertex:mh,color_vertex:gh,common:_h,defaultnormal_vertex:xh,displacementmap_pars_vertex:vh,displacementmap_vertex:Sh,emissivemap_fragment:Mh,emissivemap_pars_fragment:Eh,colorspace_fragment:yh,colorspace_pars_fragment:bh,envmap_fragment:Th,envmap_common_pars_fragment:Ah,envmap_pars_fragment:wh,envmap_pars_vertex:Rh,envmap_physical_pars_fragment:zh,envmap_vertex:Ch,fog_vertex:Ph,fog_pars_vertex:Lh,fog_fragment:Dh,fog_pars_fragment:Ih,gradientmap_pars_fragment:Nh,lightmap_pars_fragment:Uh,lights_lambert_fragment:Fh,lights_lambert_pars_fragment:Oh,lights_pars_begin:Bh,lights_toon_fragment:Gh,lights_toon_pars_fragment:Hh,lights_phong_fragment:Vh,lights_phong_pars_fragment:kh,lights_physical_fragment:Wh,lights_physical_pars_fragment:Xh,lights_fragment_begin:qh,lights_fragment_maps:Yh,lights_fragment_end:Kh,lightprobes_pars_fragment:Zh,logdepthbuf_fragment:$h,logdepthbuf_pars_fragment:Jh,logdepthbuf_pars_vertex:Qh,logdepthbuf_vertex:jh,map_fragment:ef,map_pars_fragment:tf,map_particle_fragment:nf,map_particle_pars_fragment:rf,metalnessmap_fragment:sf,metalnessmap_pars_fragment:af,morphinstance_vertex:of,morphcolor_vertex:lf,morphnormal_vertex:cf,morphtarget_pars_vertex:uf,morphtarget_vertex:df,normal_fragment_begin:hf,normal_fragment_maps:ff,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:gf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:vf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:Mf,opaque_fragment:Ef,packing:yf,premultiplied_alpha_fragment:bf,project_vertex:Tf,dithering_fragment:Af,dithering_pars_fragment:wf,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:Cf,shadowmap_pars_fragment:Pf,shadowmap_pars_vertex:Lf,shadowmap_vertex:Df,shadowmask_pars_fragment:If,skinbase_vertex:Nf,skinning_pars_vertex:Uf,skinning_vertex:Ff,skinnormal_vertex:Of,specularmap_fragment:Bf,specularmap_pars_fragment:zf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Hf,transmission_fragment:Vf,transmission_pars_fragment:kf,uv_pars_fragment:Wf,uv_pars_vertex:Xf,uv_vertex:qf,worldpos_vertex:Yf,background_vert:Kf,background_frag:Zf,backgroundCube_vert:$f,backgroundCube_frag:Jf,cube_vert:Qf,cube_frag:jf,depth_vert:ep,depth_frag:tp,distance_vert:np,distance_frag:ip,equirect_vert:rp,equirect_frag:sp,linedashed_vert:ap,linedashed_frag:op,meshbasic_vert:lp,meshbasic_frag:cp,meshlambert_vert:up,meshlambert_frag:dp,meshmatcap_vert:hp,meshmatcap_frag:fp,meshnormal_vert:pp,meshnormal_frag:mp,meshphong_vert:gp,meshphong_frag:_p,meshphysical_vert:xp,meshphysical_frag:vp,meshtoon_vert:Sp,meshtoon_frag:Mp,points_vert:Ep,points_frag:yp,shadow_vert:bp,shadow_frag:Tp,sprite_vert:Ap,sprite_frag:wp},fe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},un={basic:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:It([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:It([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new He(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:It([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:It([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:It([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:It([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:It([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:It([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:It([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:It([fe.lights,fe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};un.physical={uniforms:It([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Zr={r:0,b:0,g:0},Rp=new Je,Nc=new Pe;Nc.set(-1,0,0,0,1,0,0,0,1);function Cp(i,e,t,n,r,s){const a=new He(0);let o=r===!0?0:1,c,l,u=null,f=0,h=null;function m(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const b=M.backgroundBlurriness>0;A=e.get(A,b)}return A}function x(M){let A=!1;const b=m(M);b===null?p(a,o):b&&b.isColor&&(p(b,1),A=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,A){const b=m(A);b&&b.isCubeTexture?(l===void 0&&(l=new Cn(new _r(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Fi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Nc),l.material.toneMapped=Ve.getTransfer(b.colorSpace)!==Ze,(u!==b||f!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Cn(new Ss(2,2),new ri({name:"BackgroundMaterial",uniforms:Fi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(b.colorSpace)!==Ze,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,A){M.getRGB(Zr,Pc(i)),t.buffers.color.setClear(Zr.r,Zr.g,Zr.b,A,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:x,addToRenderList:S,dispose:d}}function Pp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(I,G,q,P,W){let $=!1;const H=f(I,P,q,G);s!==H&&(s=H,l(s.object)),$=m(I,P,q,W),$&&x(I,P,q,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(I,G,q,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function f(I,G,q,P){const W=P.wireframe===!0;let $=n[G.id];$===void 0&&($={},n[G.id]=$);const H=I.isInstancedMesh===!0?I.id:0;let te=$[H];te===void 0&&(te={},$[H]=te);let k=te[q.id];k===void 0&&(k={},te[q.id]=k);let Q=k[W];return Q===void 0&&(Q=h(c()),k[W]=Q),Q}function h(I){const G=[],q=[],P=[];for(let W=0;W<t;W++)G[W]=0,q[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:P,object:I,attributes:{},index:null}}function m(I,G,q,P){const W=s.attributes,$=G.attributes;let H=0;const te=q.getAttributes();for(const k in te)if(te[k].location>=0){const j=W[k];let Me=$[k];if(Me===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),j===void 0||j.attribute!==Me||Me&&j.data!==Me.data)return!0;H++}return s.attributesNum!==H||s.index!==P}function x(I,G,q,P){const W={},$=G.attributes;let H=0;const te=q.getAttributes();for(const k in te)if(te[k].location>=0){let j=$[k];j===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const Me={};Me.attribute=j,j&&j.data&&(Me.data=j.data),W[k]=Me,H++}s.attributes=W,s.attributesNum=H,s.index=P}function S(){const I=s.newAttributes;for(let G=0,q=I.length;G<q;G++)I[G]=0}function p(I){d(I,0)}function d(I,G){const q=s.newAttributes,P=s.enabledAttributes,W=s.attributeDivisors;q[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),W[I]!==G&&(i.vertexAttribDivisor(I,G),W[I]=G)}function M(){const I=s.newAttributes,G=s.enabledAttributes;for(let q=0,P=G.length;q<P;q++)G[q]!==I[q]&&(i.disableVertexAttribArray(q),G[q]=0)}function A(I,G,q,P,W,$,H){H===!0?i.vertexAttribIPointer(I,G,q,W,$):i.vertexAttribPointer(I,G,q,P,W,$)}function b(I,G,q,P){S();const W=P.attributes,$=q.getAttributes(),H=G.defaultAttributeValues;for(const te in $){const k=$[te];if(k.location>=0){let Q=W[te];if(Q===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const j=Q.normalized,Me=Q.itemSize,Le=e.get(Q);if(Le===void 0)continue;const K=Le.buffer,pe=Le.type,xe=Le.bytesPerElement,Te=pe===i.INT||pe===i.UNSIGNED_INT||Q.gpuType===ro;if(Q.isInterleavedBufferAttribute){const me=Q.data,Ie=me.isInterleavedBuffer===!0?me.stride:me.itemSize,ut=Q.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let we=0;we<k.locationSize;we++)d(k.location+we,me.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let we=0;we<k.locationSize;we++)p(k.location+we);i.bindBuffer(i.ARRAY_BUFFER,K);for(let we=0;we<k.locationSize;we++)A(k.location+we,Me/k.locationSize,pe,j,Ie*xe,(ut+Me/k.locationSize*we)*xe,Te)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<k.locationSize;me++)d(k.location+me,Q.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<k.locationSize;me++)p(k.location+me);i.bindBuffer(i.ARRAY_BUFFER,K);for(let me=0;me<k.locationSize;me++)A(k.location+me,Me/k.locationSize,pe,j,Me*xe,Me/k.locationSize*me*xe,Te)}}else if(H!==void 0){const j=H[te];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(k.location,j);break;case 3:i.vertexAttrib3fv(k.location,j);break;case 4:i.vertexAttrib4fv(k.location,j);break;default:i.vertexAttrib1fv(k.location,j)}}}}M()}function R(){B();for(const I in n){const G=n[I];for(const q in G){const P=G[q];for(const W in P){const $=P[W];for(const H in $)u($[H].object),delete $[H];delete P[W]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const G=n[I.id];for(const q in G){const P=G[q];for(const W in P){const $=P[W];for(const H in $)u($[H].object),delete $[H];delete P[W]}}delete n[I.id]}function g(I){for(const G in n){const q=n[G];for(const P in q){const W=q[P];if(W[I.id]===void 0)continue;const $=W[I.id];for(const H in $)u($[H].object),delete $[H];delete W[I.id]}}}function E(I){for(const G in n){const q=n[G],P=I.isInstancedMesh===!0?I.id:0,W=q[P];if(W!==void 0){for(const $ in W){const H=W[$];for(const te in H)u(H[te].object),delete H[te];delete W[$]}delete q[P],Object.keys(q).length===0&&delete n[G]}}}function B(){L(),a=!0,s!==r&&(s=r,l(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:B,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function Lp(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let m=0;m<u;m++)h+=l[m];t.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Dp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==fn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const E=g===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==kt&&g!==hn&&!E&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Re("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Re("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:R,samples:T}}function Ip(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Bn,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||r;return r=h,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):l();else{const M=s?0:n,A=M*4;let b=d.clippingState||null;c.value=b,b=u(x,h,A,m);for(let R=0;R!==A;++R)b[R]=t[R];d.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,x){const S=f!==null?f.length:0;let p=null;if(S!==0){if(p=c.value,x!==!0||p===null){const d=m+S*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,b=m;A!==S;++A,b+=4)a.copy(f[A]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}class xo extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new wc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _r(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Ri});s.uniforms.tEquirect.value=t;const a=new Cn(r,s),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Ft),new $a(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Sl=256,Np=3,Up=20,Uc=256,Fc=16,Fp=3,Op=new N,Bp=new He;class ms{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $a(1,10,null),this._boxMesh=new Cn(new _r(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Op}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,h=c.autoClearColor,m=c.autoClearDepth,x=c.autoClearStencil,S=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(e.background=c.getClearColor(Bp));const p=new $a(n,r,u);return p.position.copy(o),p.update(c,e),c.autoClear=f,c.autoClearColor=h,c.autoClearDepth=m,c.autoClearStencil=x,e.background=S,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Sl,ju(e))}_fromTexture(e,t){e.mapping===Ii||e.mapping===sr?this._setSize(e.image.length===0?Sl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Ml(e,!1,!1),n=Math.log2(e)-Np;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ml(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ii||e.mapping===sr?(this._cubemapMaterial===null&&(this._cubemapMaterial=yl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=El()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=zp(),this._integrationMaterial=Gp());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Fc);for(let a=0;a<=n;a++){const o=ms.lodToRoughness(a,n);if(a>n-Fp)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Uc*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Hp());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function Ml(i,e,t){return new xo(i,{minFilter:Hn,generateMipmaps:e,type:_n,colorSpace:cs,depthBuffer:t})}function xr(i,e,t){return new ri({name:i,uniforms:e,vertexShader:Oe.cube_vert,fragmentShader:t,side:Ot,blending:Ri,depthTest:!1,depthWrite:!1})}function zp(){return xr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Uc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Gp(){return xr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Hp(){return xr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Up}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function El(){return xr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function yl(){return xr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Vp(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===ws||m===Rs)if(e.has(h)){const x=e.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const S=new xo(x.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const m=h.mapping,x=m===ws||m===Rs,S=m===Ii||m===sr;if(x||S){let p=t.get(h);const d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new ms(i)),p=x?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return x&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new ms(i)),p=x?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===ws?h.mapping=Ii:m===Rs&&(h.mapping=sr),h}function c(h){let m=0;const x=6;for(let S=0;S<x;S++)h[S]!==void 0&&m++;return m===x}function l(h){const m=h.target;m.removeEventListener("dispose",l);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function kp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ns("WebGLRenderer: "+n+" extension not supported."),r}}}function Wp(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(x=>delete r[x]);function o(x){c(x.target)}function c(x){x.index!==null&&e.remove(x.index);for(const p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",o),delete r[x.id],a.unregister(x);const S=s.get(x);S&&(e.remove(S),s.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(x,S){return r[S.id]!==void 0||(S.addEventListener("dispose",o),r[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function u(x){const S=x.attributes;for(const p in S)e.update(S[p],i.ARRAY_BUFFER)}function f(x){const S=x.index,p=x.attributes.position;let d=0;if(p===void 0)return;const M=S!==null?S.array.length:p.array.length/3-1,A=p.count>=65535?yc:Ec,b=new A(Math.ceil(M/3)*6,1),R=b.array;if(S!==null){const g=S.array;d=S.version;for(let E=0,B=0;E<M;E+=3){const L=g[E+0],I=g[E+1],G=g[E+2];R[B++]=L,R[B++]=I,R[B++]=I,R[B++]=G,R[B++]=G,R[B++]=L}}else{d=p.version;for(let g=0,E=0;g<M;g+=3){const B=g+0,L=g+1,I=g+2;R[E++]=B,R[E++]=L,R[E++]=L,R[E++]=I,R[E++]=I,R[E++]=B}}b.version=d;const T=s.get(x);T&&e.remove(T),s.set(x,b)}function h(x){const S=s.get(x);if(S){const p=x.index;p!==null&&S.version<p.version&&f(x)}else f(x);return s.get(x)}function m(){for(const x in r){const S=r[x].deref();S!==void 0&&c(S)}}return{get:l,update:u,getWireframeAttribute:h,dispose:m}}function Xp(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,s,f*a),t.update(h,n,1)}function l(f,h,m){m!==0&&(i.drawElementsInstanced(n,h,s,f*a,m),t.update(h,n,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,m);let S=0;for(let p=0;p<m;p++)S+=h[p];t.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function qp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Yp(i,e,t){const n=new WeakMap,r=new ot;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let B=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",B)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),x===!0&&(A=2),S===!0&&(A=3);let b=o.attributes.position.count*A,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*R*4*f),g=new vc(T,b,R,f);g.type=hn,g.needsUpdate=!0;const E=A*4;for(let L=0;L<f;L++){const I=p[L],G=d[L],q=M[L],P=b*R*4*L;for(let W=0;W<I.count;W++){const $=W*E;m===!0&&(r.fromBufferAttribute(I,W),T[P+$+0]=r.x,T[P+$+1]=r.y,T[P+$+2]=r.z,T[P+$+3]=0),x===!0&&(r.fromBufferAttribute(G,W),T[P+$+4]=r.x,T[P+$+5]=r.y,T[P+$+6]=r.z,T[P+$+7]=0),S===!0&&(r.fromBufferAttribute(q,W),T[P+$+8]=r.x,T[P+$+9]=r.y,T[P+$+10]=r.z,T[P+$+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:g,size:new Ne(b,R)},n.set(o,h),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let S=0;S<l.length;S++)m+=l[S];const x=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Kp(i,e,t,n,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,h=e.get(l,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Zp={[Jl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[ec]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[ic]:"NEUTRAL_TONE_MAPPING",[tc]:"CUSTOM_TONE_MAPPING"};function $p(i,e,t,n,r,s){const a=new mn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new Bt;u.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const f=new Id({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Cn(u,f),m=new kd(-1,1,1,-1,0,1);let x=null,S=null,p=!1,d,M=null,A=[],b=!1;this.setSize=function(R,T){a.setSize(R,T),o!==null&&o.setSize(R,T),c!==null&&c.setSize(R,T);for(let g=0;g<A.length;g++){const E=A[g];E.setSize&&E.setSize(R,T)}},this.setEffects=function(R){A=R,b=A.length>0&&A[0].isRenderPass===!0;const T=a.width,g=a.height;A.length>0&&o===null&&(o=new mn(T,g,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new mn(T,g,{type:_n,depthBuffer:!1,stencilBuffer:!1}));const E=r===!0&&A.some(B=>B.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new Ui(T,g),s===!0&&(l.format=Vn,l.type=Ni)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let B=0;B<A.length;B++){const L=A[B];L.setSize&&L.setSize(T,g),E&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(l)}},this.begin=function(R,T){if(p||R.toneMapping===wn&&A.length===0)return!1;if(M=T,T!==null){const g=T.width,E=T.height;(a.width!==g||a.height!==E)&&this.setSize(g,E)}return b===!1&&R.setRenderTarget(a),d=R.toneMapping,R.toneMapping=wn,!0},this.hasRenderPass=function(){return b},this.end=function(R,T){R.toneMapping=d,p=!0;let g=a,E=o;for(let B=0;B<A.length;B++){const L=A[B];L.enabled!==!1&&(L.render(R,E,g,T),L.needsSwap!==!1&&(g=E,E=E===o?c:o))}if(x!==R.outputColorSpace||S!==R.toneMapping){x=R.outputColorSpace,S=R.toneMapping,f.defines={},Ve.getTransfer(x)===Ze&&(f.defines.SRGB_TRANSFER="");const B=Zp[S];B&&(f.defines[B]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,R.setRenderTarget(M),R.render(h,m),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),f.dispose()}}const Oc=new bt,Bc=new Ui(1,1),zc=new Rc(1),Gc=new vc,Hc=new sd,Vc=new wc,bl=[],Tl=[],Al=new Float32Array(16),wl=new Float32Array(9),Rl=new Float32Array(4);function Hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=bl[r];if(s===void 0&&(s=new Float32Array(r),bl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ms(i,e){let t=Tl[e];t===void 0&&(t=new Int32Array(e),Tl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Rl.set(n),i.uniformMatrix2fv(this.addr,!1,Rl),gt(t,n)}}function nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;wl.set(n),i.uniformMatrix3fv(this.addr,!1,wl),gt(t,n)}}function im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Al.set(n),i.uniformMatrix4fv(this.addr,!1,Al),gt(t,n)}}function rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function lm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Es(i){return i.version===0&&(i.compareFunction=pc,i.needsUpdate=!0),i}function hm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Es(Bc):s=Oc,t.setTexture2D(e||s,r)}function fm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Hc,r)}function pm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Es(zc):s=Vc,t.setTextureCube(e||s,r)}function mm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gc,r)}function gm(i){switch(i){case 5126:return Jp;case 35664:return Qp;case 35665:return jp;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return rm;case 35667:case 35671:return sm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function _m(i,e){i.uniform1fv(this.addr,e)}function xm(i,e){const t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function vm(i,e){const t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function Sm(i,e){const t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function Mm(i,e){const t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Em(i,e){const t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ym(i,e){const t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bm(i,e){i.uniform1iv(this.addr,e)}function Tm(i,e){i.uniform2iv(this.addr,e)}function Am(i,e){i.uniform3iv(this.addr,e)}function wm(i,e){i.uniform4iv(this.addr,e)}function Rm(i,e){i.uniform1uiv(this.addr,e)}function Cm(i,e){i.uniform2uiv(this.addr,e)}function Pm(i,e){i.uniform3uiv(this.addr,e)}function Lm(i,e){i.uniform4uiv(this.addr,e)}function Dm(i,e,t){const n=this.cache,r=e.length,s=Ms(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Es(Bc):a=Oc;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Im(i,e,t){const n=this.cache,r=e.length,s=Ms(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hc,s[a])}function Nm(i,e,t){const n=this.cache,r=e.length,s=Ms(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Es(zc):a=Vc;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function Um(i,e,t){const n=this.cache,r=e.length,s=Ms(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gc,s[a])}function Fm(i){switch(i){case 5126:return _m;case 35664:return xm;case 35665:return vm;case 35666:return Sm;case 35674:return Mm;case 35675:return Em;case 35676:return ym;case 5124:case 35670:return bm;case 35667:case 35671:return Tm;case 35668:case 35672:return Am;case 35669:case 35673:return wm;case 5125:return Rm;case 36294:return Cm;case 36295:return Pm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Um}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gm(t.type)}}class Bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fm(t.type)}}class zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Cl(i,e){i.seq.push(e),i.map[e.id]=e}function Gm(i,e,t){const n=i.name,r=n.length;for(ia.lastIndex=0;;){const s=ia.exec(n),a=ia.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Cl(t,l===void 0?new Om(o,i,e):new Bm(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new zm(o),Cl(t,f)),t=f}}}class is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Gm(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Pl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hm=37297;let Vm=0;function km(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ll=new Pe;function Wm(i){Ve._getMatrix(Ll,Ve.workingColorSpace,i);const e=`mat3( ${Ll.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case us:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Dl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+km(i.getShaderSource(e),o)}else return s}function Xm(i,e){const t=Wm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const qm={[Jl]:"Linear",[Ql]:"Reinhard",[jl]:"Cineon",[ec]:"ACESFilmic",[nc]:"AgX",[ic]:"Neutral",[tc]:"Custom"};function Ym(i,e){const t=qm[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new N;function Km(){Ve.getLuminanceCoefficients($r);const i=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function $m(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ji(i){return i!==""}function Il(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Nl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(Qm,jm)}function jm(i,e){const t=Oe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ja(t)}const eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(i){return i.replace(eg,tg)}function tg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ng={[Jr]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function ig(i){return ng[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const rg={[sr]:"ENVMAP_MODE_REFRACTION"};function sg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ag={[io]:"ENVMAP_BLENDING_MULTIPLY",[Ou]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function og(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ag[i.combine]||"ENVMAP_BLENDING_NONE"}function lg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ig(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=sg(t),f=og(t),h=Zm(t),m=$m(s),x=r.createProgram();let S,p,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ji).join(`
`),S.length>0&&(S+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ji).join(`
`),p.length>0&&(p+=`
`)):(S=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),p=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==wn?Ym("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Xm("linearToOutputTexel",t.outputColorSpace),Km(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),a=Ja(a),a=Il(a,t),a=Nl(a,t),o=Ja(o),o=Il(o,t),o=Nl(o,t),a=Ul(a),o=Ul(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",t.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=d+S+a,A=d+p+o,b=Pl(r,r.VERTEX_SHADER,M),R=Pl(r,r.FRAGMENT_SHADER,A);r.attachShader(x,b),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(L){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(x)||"",G=r.getShaderInfoLog(b)||"",q=r.getShaderInfoLog(R)||"",P=I.trim(),W=G.trim(),$=q.trim();let H=!0,te=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,b,R);else{const k=Dl(r,b,"vertex"),Q=Dl(r,R,"fragment");Xe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+k+`
`+Q)}else P!==""?Re("WebGLProgram: Program Info Log:",P):(W===""||$==="")&&(te=!1);te&&(L.diagnostics={runnable:H,programLog:P,vertexShader:{log:W,prefix:S},fragmentShader:{log:$,prefix:p}})}r.deleteShader(b),r.deleteShader(R),g=new is(r,x),E=Jm(r,x)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(x,Hm)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=R,this}let cg=0;class ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dg(e),t.set(e,n)),n}}class dg{constructor(e){this.id=cg++,this.code=e,this.usedTimes=0}}function hg(i){return i===ii||i===os||i===ls}function fg(i,e,t,n,r,s){const a=new Sc,o=new ug,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function x(g,E,B,L,I,G){const q=L.fog,P=I.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=e.get(g.envMap||W,$),te=h[g.type];let k=n.precision;g.precision!==null&&(k=n.getMaxPrecision(g.precision),k!==g.precision&&Re("WebGLProgram.getParameters:",g.precision,"not supported, using",k,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=Q!==void 0?Q.length:0;let Me=0;P.morphAttributes.position!==void 0&&(Me=1),P.morphAttributes.normal!==void 0&&(Me=2),P.morphAttributes.color!==void 0&&(Me=3);let Le,K,pe,xe;if(te){const he=un[te];Le=he.vertexShader,K=he.fragmentShader}else{Le=g.vertexShader,K=g.fragmentShader;const he=o.getVertexShaderStage(g),Ke=o.getFragmentShaderStage(g);o.update(g,he,Ke),pe=he.id,xe=Ke.id}const Te=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,ut=I.isBatchedMesh===!0,we=!!g.map,Ye=!!g.matcap,Qe=!!H,Be=Qe&&H.isPMREMTexture===!0,Mt=!!g.aoMap,ft=!!g.lightMap,Ut=!!g.bumpMap&&g.wireframe===!1,st=!!g.normalMap,an=!!g.displacementMap,_t=!!g.emissiveMap,Wt=!!g.metalnessMap,Xt=!!g.roughnessMap,qt=g.anisotropy>0,D=g.clearcoat>0,Yt=g.diffuseRoughness>0,it=g.dispersion>0,rt=g.retroreflectivity>0,de=g.iridescence>0,pt=g.sheen>0,Ae=g.transmission>0,Ce=qt&&!!g.anisotropyMap,y=D&&!!g.clearcoatMap,_=D&&!!g.clearcoatNormalMap,F=D&&!!g.clearcoatRoughnessMap,ee=Yt&&!!g.diffuseRoughnessMap,J=de&&!!g.iridescenceMap,re=de&&!!g.iridescenceThicknessMap,ce=pt&&!!g.sheenColorMap,X=pt&&!!g.sheenRoughnessMap,Y=!!g.specularMap,ae=!!g.specularColorMap,w=!!g.specularIntensityMap,Z=Ae&&!!g.transmissionMap,V=Ae&&!!g.thicknessMap,oe=!!g.gradientMap,ie=!!g.alphaMap,se=g.alphaTest>0,ye=!!g.alphaHash,Fe=!!g.extensions;let ne=wn;g.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(ne=i.toneMapping);const be=Be?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ue={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:Le,fragmentShader:K,defines:g.defines,customVertexShaderID:pe,customFragmentShaderID:xe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:k,batching:ut,batchingColor:ut&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:we,matcap:Ye,envMap:Qe,envMapMode:Qe&&H.mapping,envMapPMREM:Be,envMapMaxLod:Be?be.length-1:null,envMapSize:Be?be[0].width:null,aoMap:Mt,lightMap:ft,bumpMap:Ut,normalMap:st,displacementMap:an,emissiveMap:_t,normalMapObjectSpace:st&&g.normalMapType===Hu,normalMapTangentSpace:st&&g.normalMapType===qa,packedNormalMap:st&&g.normalMapType===qa&&hg(g.normalMap.format),metalnessMap:Wt,roughnessMap:Xt,anisotropy:qt,anisotropyMap:Ce,clearcoat:D,clearcoatMap:y,clearcoatNormalMap:_,clearcoatRoughnessMap:F,diffuseRoughness:Yt,diffuseRoughnessMap:ee,dispersion:it,retroreflection:rt,iridescence:de,iridescenceMap:J,iridescenceThicknessMap:re,sheen:pt,sheenColorMap:ce,sheenRoughnessMap:X,specularMap:Y,specularColorMap:ae,specularIntensityMap:w,transmission:Ae,transmissionMap:Z,thicknessMap:V,gradientMap:oe,opaque:g.transparent===!1&&g.blending===nr&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:se,alphaHash:ye,combine:g.combine,mapUv:we&&m(g.map.channel),aoMapUv:Mt&&m(g.aoMap.channel),lightMapUv:ft&&m(g.lightMap.channel),bumpMapUv:Ut&&m(g.bumpMap.channel),normalMapUv:st&&m(g.normalMap.channel),displacementMapUv:an&&m(g.displacementMap.channel),emissiveMapUv:_t&&m(g.emissiveMap.channel),metalnessMapUv:Wt&&m(g.metalnessMap.channel),roughnessMapUv:Xt&&m(g.roughnessMap.channel),anisotropyMapUv:Ce&&m(g.anisotropyMap.channel),clearcoatMapUv:y&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:J&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:X&&m(g.sheenRoughnessMap.channel),specularMapUv:Y&&m(g.specularMap.channel),specularColorMapUv:ae&&m(g.specularColorMap.channel),specularIntensityMapUv:w&&m(g.specularIntensityMap.channel),transmissionMapUv:Z&&m(g.transmissionMap.channel),thicknessMapUv:V&&m(g.thicknessMap.channel),alphaMapUv:ie&&m(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(st||qt),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(we||ie),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&st===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Me,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.filter(he=>he.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:we&&g.map.isVideoTexture===!0&&Ve.getTransfer(g.map.colorSpace)===Ze,decodeVideoTextureEmissive:_t&&g.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(g.emissiveMap.colorSpace)===Ze,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===dn,flipSided:g.side===Ot,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Fe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&g.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function S(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const B in g.defines)E.push(B),E.push(g.defines[B]);return g.isRawShaderMaterial===!1&&(p(E,g),d(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function p(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapPMREM),g.push(E.envMapMaxLod),g.push(E.envMapSize),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.diffuseRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.numLightProbeGrids),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function d(g,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){const E=h[g.type];let B;if(E){const L=un[E];B=Pd.clone(L.uniforms)}else B=g.uniforms;return B}function A(g,E){let B=u.get(E);return B!==void 0?++B.usedTimes:(B=new lg(i,E,g,r),l.push(B),u.set(E,B)),B}function b(g){if(--g.usedTimes===0){const E=l.indexOf(g);l[E]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function R(g){o.remove(g)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:M,acquireProgram:A,releaseProgram:b,releaseShaderCache:R,programs:l,dispose:T}}function pg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function mg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ol(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,x,S,p,d){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:m,material:x,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:d},i[e]=M):(M.id=h.id,M.object=h,M.geometry=m,M.material=x,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=p,M.group=d),e++,M}function c(h,m,x,S,p,d,M){M.reversedDepth===!0&&(p=-p);const A=o(h,m,x,S,p,d);x.transmission>0?n.push(A):x.transparent===!0?r.push(A):t.push(A)}function l(h,m,x,S,p,d){const M=o(h,m,x,S,p,d);x.transmission>0?n.unshift(M):x.transparent===!0?r.unshift(M):t.unshift(M)}function u(h,m){t.length>1&&t.sort(h||mg),n.length>1&&n.sort(m||Ol),r.length>1&&r.sort(m||Ol)}function f(){for(let h=e,m=i.length;h<m;h++){const x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function gg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Bl,i.set(n,[a])):r>=s.length?(a=new Bl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function _g(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new He};break;case"SpotLight":t={position:new N,direction:new N,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function xg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vg=0;function Sg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mg(i){const e=new _g,t=xg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,s=new Je,a=new Je;function o(l){let u=0,f=0,h=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let m=0,x=0,S=0,p=0,d=0,M=0,A=0,b=0,R=0,T=0,g=0,E=0,B=0,L=0;l.sort(Sg);for(let G=0,q=l.length;G<q;G++){const P=l[G],W=P.color,$=P.intensity,H=P.distance;let te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ii?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=W.r*$,f+=W.g*$,h+=W.b*$;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],$);L++}else if(P.isSunLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[x]=j,n.sunShadowMap[x]=te;const Me=Q.getViewportCount();for(let Le=0;Le<Me;Le++)n.sunShadowMatrix[S+Le]=Q.getMatrix(Le),n.sunShadowCascade[S+Le]=Q._cascadeData[Le];S+=Me,x++}n.sun[m]=k,m++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=P.shadow.matrix,R++}n.directional[p]=k,p++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(W).multiplyScalar($),k.distance=H,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[M]=k;const Q=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,Q.updateMatrices(P),P.castShadow&&B++),n.spotLightMatrix[M]=Q.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=te,g++}M++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(W).multiplyScalar($),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=k,A++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=te,n.pointShadowMatrix[d]=P.shadow.matrix,T++}n.point[d]=k,d++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar($),k.groundColor.copy(P.groundColor).multiplyScalar($),n.hemi[b]=k,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.sunLength!==m||I.directionalLength!==p||I.pointLength!==d||I.spotLength!==M||I.rectAreaLength!==A||I.hemiLength!==b||I.numSunShadows!==x||I.numDirectionalShadows!==R||I.numPointShadows!==T||I.numSpotShadows!==g||I.numSpotMaps!==E||I.numLightProbes!==L)&&(n.sun.length=m,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=d,n.hemi.length=b,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+E-B,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=L,I.sunLength=m,I.directionalLength=p,I.pointLength=d,I.spotLength=M,I.rectAreaLength=A,I.hemiLength=b,I.numSunShadows=x,I.numDirectionalShadows=R,I.numPointShadows=T,I.numSpotShadows=g,I.numSpotMaps=E,I.numLightProbes=L,n.version=vg++)}function c(l,u){let f=0,h=0,m=0,x=0,S=0,p=0;const d=u.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){const b=l[M];if(b.isSunLight){const R=n.sun[f];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(d),f++}else if(b.isDirectionalLight){const R=n.directional[h];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),h++}else if(b.isSpotLight){const R=n.spot[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),x++}else if(b.isRectAreaLight){const R=n.rectArea[S];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(d),a.identity(),s.copy(b.matrixWorld),s.premultiply(d),a.extractRotation(s),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),S++}else if(b.isPointLight){const R=n.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){const R=n.hemi[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(d),p++}}}return{setup:o,setupView:c,state:n}}function zl(i){const e=new Mg(i),t=[],n=[],r=[];function s(f){u.camera=f,t.length=0,n.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):t.push(f)}function o(f){n.push(f)}function c(){e.setup(t),r.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function l(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Eg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new zl(i),e.set(r,[o])):s>=a.length?(o=new zl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tg=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Ag=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Gl=new Je,Ji=new N,ra=new N;function wg(i,e,t){let n=new cr;const r=new Ne,s=new Ne,a=new ot,o=new Nd,c=new Ud,l={},u=t.maxTextureSize,f={[ni]:Ot,[Ot]:ni,[dn]:dn},h=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:yg,fragmentShader:bg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Bt;x.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Cn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let d=this.type;this.render=function(T,g,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===xu&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jr);const B=i.getRenderTarget(),L=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Ri),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=d!==this.type;q&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=T.length;P<W;P++){const $=T[P],H=$.shadow;if(H===void 0){Re("WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const te=H.getFrameExtents();r.multiply(te),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,H.mapSize.y=s.y));const k=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=k,H.map===null||q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qi){if($.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new mn(r.x,r.y,{format:ii,type:_n,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),H.map.texture.name=$.name+".shadowMap",H.map.depthTexture=new Ui(r.x,r.y,hn),H.map.depthTexture.name=$.name+".shadowMapDepth",H.map.depthTexture.format=Xn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=yt,H.map.depthTexture.magFilter=yt}else $.isPointLight?(H.map=new xo(r.x),H.map.depthTexture=new Rc(r.x,gn)):(H.map=new mn(r.x,r.y),H.map.depthTexture=new Ui(r.x,r.y,gn)),H.map.depthTexture.name=$.name+".shadowMap",H.map.depthTexture.format=Xn,this.type===Jr?(H.map.depthTexture.compareFunction=k?fc:hc,H.map.depthTexture.minFilter=Ft,H.map.depthTexture.magFilter=Ft):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=yt,H.map.depthTexture.magFilter=yt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==r.x||H.map.height!==r.y)&&H.map.setSize(r.x,r.y);const Q=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();$.isPointLight!==!0&&H.updateMatrices($,E);const j=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:E.layers;for(let Me=0;Me<Q;Me++){const Le=H.getCamera(Me);if($.isPointLight){const K=H.camera,pe=H.matrix,xe=$.distance||K.far;xe!==K.far&&(K.far=xe,K.updateProjectionMatrix()),Ji.setFromMatrixPosition($.matrixWorld),K.position.copy(Ji),ra.copy(K.position),ra.add(Tg[Me]),K.up.copy(Ag[Me]),K.lookAt(ra),K.updateMatrixWorld(),pe.makeTranslation(-Ji.x,-Ji.y,-Ji.z),Gl.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Gl,K.coordinateSystem,K.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Me),i.clear();else{Me===0&&(i.setRenderTarget(H.map),i.clear());const K=H.getViewport(Me);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),G.viewport(a)}n=H.getFrustum(Me),b(g,E,Le,$,j,this.type)}H.isPointLightShadow!==!0&&this.type===Qi&&M(H,E),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(B,L,I)};function M(T,g){const E=e.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new mn(r.x,r.y,{format:ii,type:_n}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,E,h,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,E,m,S,null)}function A(T,g,E,B){let L=null;const I=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)L=I;else if(L=E.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const G=L.uuid,q=g.uuid;let P=l[G];P===void 0&&(P={},l[G]=P);let W=P[q];W===void 0&&(W=L.clone(),P[q]=W,g.addEventListener("dispose",R)),L=W}if(L.visible=g.visible,L.wireframe=g.wireframe,B===Qi?L.side=g.shadowSide!==null?g.shadowSide:g.side:L.side=g.shadowSide!==null?g.shadowSide:f[g.side],L.alphaMap=g.alphaMap,L.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,L.map=g.map,L.clipShadows=g.clipShadows,L.clippingPlanes=g.clippingPlanes,L.clipIntersection=g.clipIntersection,L.displacementMap=g.displacementMap,L.displacementScale=g.displacementScale,L.displacementBias=g.displacementBias,L.wireframeLinewidth=g.wireframeLinewidth,L.linewidth=g.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const G=i.properties.get(L);G.light=E}return L}function b(T,g,E,B,L,I){if(T.visible===!1)return;if(T.layers.test(L)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Qi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const P=e.update(T),W=T.material;if(Array.isArray(W)){const $=P.groups;for(let H=0,te=$.length;H<te;H++){const k=$[H],Q=W[k.materialIndex];if(Q&&Q.visible){const j=A(T,Q,B,I);T.onBeforeShadow(i,T,g,E,P,j,k),i.renderBufferDirect(E,null,P,j,T,k),T.onAfterShadow(i,T,g,E,P,j,k)}}}else if(W.visible){const $=A(T,W,B,I);T.onBeforeShadow(i,T,g,E,P,$,null),i.renderBufferDirect(E,null,P,$,T,null),T.onAfterShadow(i,T,g,E,P,$,null)}}const q=T.children;for(let P=0,W=q.length;P<W;P++)b(q[P],g,E,B,L,I)}function R(T){T.target.removeEventListener("dispose",R);for(const E in l){const B=l[E],L=T.target.uuid;L in B&&(B[L].dispose(),delete B[L])}}}function Rg(i,e){function t(){let w=!1;const Z=new ot;let V=null;const oe=new ot(0,0,0,0);return{setMask:function(ie){V!==ie&&!w&&(i.colorMask(ie,ie,ie,ie),V=ie)},setLocked:function(ie){w=ie},setClear:function(ie,se,ye,Fe,ne){ne===!0&&(ie*=Fe,se*=Fe,ye*=Fe),Z.set(ie,se,ye,Fe),oe.equals(Z)===!1&&(i.clearColor(ie,se,ye,Fe),oe.copy(Z))},reset:function(){w=!1,V=null,oe.set(-1,0,0,0)}}}function n(){let w=!1,Z=!1,V=null,oe=null,ie=null;return{setReversed:function(se){if(Z!==se){const ye=e.get("EXT_clip_control");se?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Z=se;const Fe=ie;ie=null,this.setClear(Fe)}},getReversed:function(){return Z},setTest:function(se){se?me(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(se){V!==se&&!w&&(i.depthMask(se),V=se)},setFunc:function(se){if(Z&&(se=Ju[se]),oe!==se){switch(se){case oa:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=se}},setLocked:function(se){w=se},setClear:function(se){ie!==se&&(ie=se,Z&&(se=1-se),i.clearDepth(se))},reset:function(){w=!1,V=null,oe=null,ie=null,Z=!1}}}function r(){let w=!1,Z=null,V=null,oe=null,ie=null,se=null,ye=null,Fe=null,ne=null;return{setTest:function(be){w||(be?me(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(be){Z!==be&&!w&&(i.stencilMask(be),Z=be)},setFunc:function(be,Ue,he){(V!==be||oe!==Ue||ie!==he)&&(i.stencilFunc(be,Ue,he),V=be,oe=Ue,ie=he)},setOp:function(be,Ue,he){(se!==be||ye!==Ue||Fe!==he)&&(i.stencilOp(be,Ue,he),se=be,ye=Ue,Fe=he)},setLocked:function(be){w=be},setClear:function(be){ne!==be&&(i.clearStencil(be),ne=be)},reset:function(){w=!1,Z=null,V=null,oe=null,ie=null,se=null,ye=null,Fe=null,ne=null}}}const s=new t,a=new n,o=new r;let c={};const l=new WeakMap;let u={},f={},h={},m=new WeakMap,x=[],S=null,p=!1,d=null,M=null,A=null,b=null,R=null,T=null,g=null,E=new He(0,0,0),B=0,L=!1,I=null,G=null,q=null,P=null,W=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,te=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=te>=1):k.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=te>=2);let Q=null,j={};const Me=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),K=new ot().fromArray(Me),pe=new ot().fromArray(Le);function xe(w,Z,V,oe){const ie=new Uint8Array(4),se=i.createTexture();i.bindTexture(w,se),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<V;ye++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(Z+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return se}const Te={};Te[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(rr),Ut(!1),st(Bo),me(i.CULL_FACE),Mt(Ri);function me(w){u[w]!==!0&&(i.enable(w),u[w]=!0)}function Ie(w){u[w]!==!1&&(i.disable(w),u[w]=!1)}function ut(w,Z){return h[w]!==Z?(i.bindFramebuffer(w,Z),h[w]=Z,w===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Z),w===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function we(w,Z){let V=x,oe=!1;if(w){V=m.get(Z),V===void 0&&(V=[],m.set(Z,V));const ie=w.textures;if(V.length!==ie.length||V[0]!==i.COLOR_ATTACHMENT0){for(let se=0,ye=ie.length;se<ye;se++)V[se]=i.COLOR_ATTACHMENT0+se;V.length=ie.length,oe=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,oe=!0);oe&&i.drawBuffers(V)}function Ye(w){return S!==w?(i.useProgram(w),S=w,!0):!1}const Qe={[Ti]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[Mu]:i.FUNC_REVERSE_SUBTRACT};Qe[Eu]=i.MIN,Qe[yu]=i.MAX;const Be={[bu]:i.ZERO,[Tu]:i.ONE,[Au]:i.SRC_COLOR,[Zl]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[wu]:i.ONE_MINUS_SRC_COLOR,[$l]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Nu]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(w,Z,V,oe,ie,se,ye,Fe,ne,be){if(w===Ri){p===!0&&(Ie(i.BLEND),p=!1);return}if(p===!1&&(me(i.BLEND),p=!0),w!==vu){if(w!==d||be!==L){if((M!==Ti||R!==Ti)&&(i.blendEquation(i.FUNC_ADD),M=Ti,R=Ti),be)switch(w){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.ONE,i.ONE);break;case Go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",w);break}else switch(w){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Go:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",w);break}A=null,b=null,T=null,g=null,E.set(0,0,0),B=0,d=w,L=be}return}ie=ie||Z,se=se||V,ye=ye||oe,(Z!==M||ie!==R)&&(i.blendEquationSeparate(Qe[Z],Qe[ie]),M=Z,R=ie),(V!==A||oe!==b||se!==T||ye!==g)&&(i.blendFuncSeparate(Be[V],Be[oe],Be[se],Be[ye]),A=V,b=oe,T=se,g=ye),(Fe.equals(E)===!1||ne!==B)&&(i.blendColor(Fe.r,Fe.g,Fe.b,ne),E.copy(Fe),B=ne),d=w,L=!1}function ft(w,Z){w.side===dn?Ie(i.CULL_FACE):me(i.CULL_FACE);let V=w.side===Ot;Z&&(V=!V),Ut(V),w.blending===nr&&w.transparent===!1?Mt(Ri):Mt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),s.setMask(w.colorWrite);const oe=w.stencilWrite;o.setTest(oe),oe&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),_t(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(w){I!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),I=w)}function st(w){w!==gu?(me(i.CULL_FACE),w!==G&&(w===Bo?i.cullFace(i.BACK):w===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),G=w}function an(w){w!==q&&(H&&i.lineWidth(w),q=w)}function _t(w,Z,V){w?(me(i.POLYGON_OFFSET_FILL),(P!==Z||W!==V)&&(P=Z,W=V,a.getReversed()&&(Z=-Z,V=-V),i.polygonOffset(Z,V))):Ie(i.POLYGON_OFFSET_FILL)}function Wt(w){w?me(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function Xt(w){w===void 0&&(w=i.TEXTURE0+$-1),Q!==w&&(i.activeTexture(w),Q=w)}function qt(w,Z,V){V===void 0&&(Q===null?V=i.TEXTURE0+$-1:V=Q);let oe=j[V];oe===void 0&&(oe={type:void 0,texture:void 0},j[V]=oe),(oe.type!==w||oe.texture!==Z)&&(Q!==V&&(i.activeTexture(V),Q=V),i.bindTexture(w,Z||Te[w]),oe.type=w,oe.texture=Z)}function D(){const w=j[Q];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(w){Xe("WebGLState:",w)}}function it(){try{i.compressedTexImage3D(...arguments)}catch(w){Xe("WebGLState:",w)}}function rt(){try{i.texSubImage2D(...arguments)}catch(w){Xe("WebGLState:",w)}}function de(){try{i.texSubImage3D(...arguments)}catch(w){Xe("WebGLState:",w)}}function pt(){try{i.compressedTexSubImage2D(...arguments)}catch(w){Xe("WebGLState:",w)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(w){Xe("WebGLState:",w)}}function Ce(){try{i.texStorage2D(...arguments)}catch(w){Xe("WebGLState:",w)}}function y(){try{i.texStorage3D(...arguments)}catch(w){Xe("WebGLState:",w)}}function _(){try{i.texImage2D(...arguments)}catch(w){Xe("WebGLState:",w)}}function F(){try{i.texImage3D(...arguments)}catch(w){Xe("WebGLState:",w)}}function ee(w){return f[w]!==void 0?f[w]:i.getParameter(w)}function J(w,Z){f[w]!==Z&&(i.pixelStorei(w,Z),f[w]=Z)}function re(w){K.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),K.copy(w))}function ce(w){pe.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),pe.copy(w))}function X(w,Z){let V=l.get(Z);V===void 0&&(V=new WeakMap,l.set(Z,V));let oe=V.get(w);oe===void 0&&(oe=i.getUniformBlockIndex(Z,w.name),i.uniformBlockBinding(Z,oe,oe),V.set(w,oe))}function Y(w,Z,V){const ie=l.get(Z).get(w);c[ie]!==V&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,V),c[ie]=V)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Q=null,j={},h={},c={},m=new WeakMap,x=[],S=null,p=!1,d=null,M=null,A=null,b=null,R=null,T=null,g=null,E=new He(0,0,0),B=0,L=!1,I=null,G=null,q=null,P=null,W=null,K.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:Ie,bindFramebuffer:ut,drawBuffers:we,useProgram:Ye,setBlending:Mt,setMaterial:ft,setFlipSided:Ut,setCullFace:st,setLineWidth:an,setPolygonOffset:_t,setScissorTest:Wt,activeTexture:Xt,bindTexture:qt,unbindTexture:D,compressedTexImage2D:Yt,compressedTexImage3D:it,texImage2D:_,texImage3D:F,pixelStorei:J,getParameter:ee,updateUBOMapping:X,uniformBlockBinding:Y,texStorage2D:Ce,texStorage3D:y,texSubImage2D:rt,texSubImage3D:de,compressedTexSubImage2D:pt,compressedTexSubImage3D:Ae,scissor:re,viewport:ce,reset:ae}}function Cg(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,u=new WeakMap,f=new Set;let h;const m=new WeakMap,x=new Set,S=new FinalizationRegistry(y=>x.delete(y));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(y,_){return p?new OffscreenCanvas(y,_):lr("canvas")}function M(y,_,F){let ee=1;const J=Ce(y);if((J.width>F||J.height>F)&&(ee=F/Math.max(J.width,J.height)),ee<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const re=Math.floor(ee*J.width),ce=Math.floor(ee*J.height);h===void 0&&(h=d(re,ce));const X=_?d(re,ce):h;return X.width=re,X.height=ce,X.getContext("2d").drawImage(y,0,0,re,ce),Re("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+re+"x"+ce+")."),X}else return"data"in y&&Re("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function A(y){return y.generateMipmaps}function b(y){i.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,_,F,ee,J,re=!1){if(y!==null){if(i[y]!==void 0)return i[y];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ce;ee&&(ce=e.get("EXT_texture_norm16"),ce||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=_;if(_===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8),F===i.UNSIGNED_SHORT&&ce&&(X=ce.R16_EXT),F===i.SHORT&&ce&&(X=ce.R16_SNORM_EXT)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),_===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8),F===i.UNSIGNED_SHORT&&ce&&(X=ce.RG16_EXT),F===i.SHORT&&ce&&(X=ce.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_SHORT&&ce&&(X=ce.RGB16_EXT),F===i.SHORT&&ce&&(X=ce.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),_===i.RGBA){const Y=re?us:Ve.getTransfer(J);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=Y===Ze?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ce&&(X=ce.RGBA16_EXT),F===i.SHORT&&ce&&(X=ce.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function g(y,_){let F;return y?_===null||_===gn||_===Ni?F=i.DEPTH24_STENCIL8:_===hn?F=i.DEPTH32F_STENCIL8:_===ar&&(F=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gn||_===Ni?F=i.DEPTH_COMPONENT24:_===hn?F=i.DEPTH_COMPONENT32F:_===ar&&(F=i.DEPTH_COMPONENT16),F}function E(y,_){return A(y)===!0||y.isFramebufferTexture&&y.minFilter!==yt&&y.minFilter!==Ft?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function B(y){const _=new WeakRef(y);n.get(y).__ref=_,x.add(_),S.register(y,_,_)}function L(y){const _=n.get(y).__ref;_!==void 0&&(x.delete(_),S.unregister(_))}function I(y){q(y.target)}function G(y){P(y.target)}function q(y){y.removeEventListener("dispose",I),L(y),$(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&f.delete(y)}function P(y){y.removeEventListener("dispose",G),L(y),te(y)}function W(){for(const y of x){const _=y.deref();_!==void 0&&(_.isRenderTarget===!0?P(_):q(_))}x.clear(),f.clear()}function $(y){const _=n.get(y);if(_.__webglInit===void 0)return;const F=y.source,ee=m.get(F);if(ee){const J=ee[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&H(y),Object.keys(ee).length===0&&m.delete(F)}n.remove(y)}function H(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const F=y.source,ee=m.get(F);delete ee[_.__cacheKey],a.memory.textures--}function te(y){const _=n.get(y);_.__depthDisposeCallback&&_.__depthDisposeCallback();const F=y.depthTexture;if(F&&F.renderTarget===y&&q(F),y.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let re=0;re<_.__webglFramebuffer[J].length;re++)i.deleteFramebuffer(_.__webglFramebuffer[J][re]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const ee=y.textures;for(let J=0,re=ee.length;J<re;J++){const ce=n.get(ee[J]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(ee[J])}n.remove(y)}let k=0;function Q(){k=0}function j(){return k}function Me(y){k=y}function Le(){const y=k;return y>=r.maxTextures&&Re("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,y}function K(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.mipmapsAutoUpdate),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function pe(y,_){const F=n.get(y);if(y.isVideoTexture&&pt(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const ee=y.image;if(ee===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(F,y,_);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function xe(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){ft(F,y,_);return}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Te(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){ft(F,y,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function me(y,_){const F=n.get(y);if(y.version>0&&F.__version!==y.version){Ut(F,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const Ie={[pa]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},ut={[yt]:i.NEAREST,[zu]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Cs]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},we={[ku]:i.NEVER,[pc]:i.ALWAYS,[Wu]:i.LESS,[hc]:i.LEQUAL,[Xu]:i.EQUAL,[fc]:i.GEQUAL,[qu]:i.GREATER,[Yu]:i.NOTEQUAL};function Ye(y,_){if(_.type===hn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ft||_.magFilter===Cs||_.magFilter===Er||_.magFilter===Hn||_.minFilter===Ft||_.minFilter===Cs||_.minFilter===Er||_.minFilter===Hn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Ie[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Ie[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Ie[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ut[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===yt||_.minFilter!==Er&&_.minFilter!==Hn||_.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Qe(y,_){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",I),B(_));const ee=_.source;let J=m.get(ee);J===void 0&&(J={},m.set(ee,J));const re=K(_);if(re!==y.__cacheKey){J[re]===void 0&&(J[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[re].usedTimes++;const ce=J[y.__cacheKey];ce!==void 0&&(J[y.__cacheKey].usedTimes--,ce.usedTimes===0&&H(_)),y.__cacheKey=re,y.__webglTexture=J[re].texture}return F}function Be(y,_,F){return Math.floor(Math.floor(y/F)/_)}function Mt(y,_,F,ee){const re=y.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,ee,_.data);else{re.sort((w,Z)=>w.start-Z.start);let ce=0;for(let w=1;w<re.length;w++){const Z=re[ce],V=re[w],oe=Z.start+Z.count,ie=Be(V.start,_.width,4),se=Be(Z.start,_.width,4);V.start<=oe+1&&ie===se&&Be(V.start+V.count-1,_.width,4)===ie?Z.count=Math.max(Z.count,V.start+V.count-Z.start):(++ce,re[ce]=V)}re.length=ce+1;const X=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let w=0,Z=re.length;w<Z;w++){const V=re[w],oe=Math.floor(V.start/4),ie=Math.ceil(V.count/4),se=oe%_.width,ye=Math.floor(oe/_.width),Fe=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye),t.texSubImage2D(i.TEXTURE_2D,0,se,ye,Fe,ne,F,ee,_.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,X),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ft(y,_,F){let ee=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=i.TEXTURE_3D);const J=Qe(y,_),re=_.source;t.bindTexture(ee,y.__webglTexture,i.TEXTURE0+F);const ce=n.get(re);if(re.version!==ce.__version||J===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ne=Ve.getPrimaries(Ve.workingColorSpace),be=_.colorSpace===Gn?null:Ve.getPrimaries(_.colorSpace),Ue=_.colorSpace===Gn||ne===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=M(_.image,!1,r.maxTextureSize);Y=Ae(_,Y);const ae=s.convert(_.format,_.colorSpace),w=s.convert(_.type);let Z=T(_.internalFormat,ae,w,_.normalized,_.colorSpace,_.isVideoTexture);Ye(ee,_);let V;const oe=_.mipmaps,ie=_.isVideoTexture!==!0,se=ce.__version===void 0||J===!0,ye=re.dataReady,Fe=E(_,Y);if(_.isDepthTexture)Z=g(_.format===Vn,_.type),se&&(ie?t.texStorage2D(i.TEXTURE_2D,1,Z,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,Z,Y.width,Y.height,0,ae,w,null));else if(_.isDataTexture)if(oe.length>0){ie&&se&&t.texStorage2D(i.TEXTURE_2D,Fe,Z,oe[0].width,oe[0].height);for(let ne=0,be=oe.length;ne<be;ne++)V=oe[ne],ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,V.width,V.height,ae,w,V.data):t.texImage2D(i.TEXTURE_2D,ne,Z,V.width,V.height,0,ae,w,V.data);_.generateMipmaps=!1}else ie?(se&&t.texStorage2D(i.TEXTURE_2D,Fe,Z,Y.width,Y.height),ye&&Mt(_,Y,ae,w)):t.texImage2D(i.TEXTURE_2D,0,Z,Y.width,Y.height,0,ae,w,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ie&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,Z,oe[0].width,oe[0].height,Y.depth);for(let ne=0,be=oe.length;ne<be;ne++)if(V=oe[ne],_.format!==fn)if(ae!==null)if(ie){if(ye)if(_.layerUpdates.size>0){const Ue=vl(V.width,V.height,_.format,_.type);for(const he of _.layerUpdates){const Ke=V.data.subarray(he*Ue/V.data.BYTES_PER_ELEMENT,(he+1)*Ue/V.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,he,V.width,V.height,1,ae,Ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,V.width,V.height,Y.depth,ae,V.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Z,V.width,V.height,Y.depth,0,V.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,V.width,V.height,Y.depth,ae,w,V.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Z,V.width,V.height,Y.depth,0,ae,w,V.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ie&&se&&t.texStorage2D(i.TEXTURE_2D,Fe,Z,oe[0].width,oe[0].height);for(let ne=0,be=oe.length;ne<be;ne++)V=oe[ne],_.format!==fn?ae!==null?ie?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,V.width,V.height,ae,V.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Z,V.width,V.height,0,V.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,V.width,V.height,ae,w,V.data):t.texImage2D(i.TEXTURE_2D,ne,Z,V.width,V.height,0,ae,w,V.data)}else if(_.isDataArrayTexture)if(ie){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,Z,Y.width,Y.height,Y.depth),ye)if(_.layerUpdates.size>0){const ne=vl(Y.width,Y.height,_.format,_.type);for(const be of _.layerUpdates){const Ue=Y.data.subarray(be*ne/Y.data.BYTES_PER_ELEMENT,(be+1)*ne/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,Y.width,Y.height,1,ae,w,Ue)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ae,w,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,Y.width,Y.height,Y.depth,0,ae,w,Y.data);else if(_.isData3DTexture)ie?(se&&t.texStorage3D(i.TEXTURE_3D,Fe,Z,Y.width,Y.height,Y.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ae,w,Y.data)):t.texImage3D(i.TEXTURE_3D,0,Z,Y.width,Y.height,Y.depth,0,ae,w,Y.data);else if(_.isFramebufferTexture){if(se)if(ie)t.texStorage2D(i.TEXTURE_2D,Fe,Z,Y.width,Y.height);else{let ne=Y.width,be=Y.height;for(let Ue=0;Ue<Fe;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Z,ne,be,0,ae,w,null),ne>>=1,be>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),Y.parentNode!==ne){ne.appendChild(Y),f.add(_),ne.onpaint=be=>{const Ue=be.changedElements;for(const he of f)Ue.includes(he.image)&&(he.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{const Ue=i.RGBA,he=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ue,he,Ke,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&se){const ne=Ce(oe[0]);t.texStorage2D(i.TEXTURE_2D,Fe,Z,ne.width,ne.height)}for(let ne=0,be=oe.length;ne<be;ne++)V=oe[ne],ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,w,V):t.texImage2D(i.TEXTURE_2D,ne,Z,ae,w,V);_.generateMipmaps=!1}else if(ie){if(se){const ne=Ce(Y);t.texStorage2D(i.TEXTURE_2D,Fe,Z,ne.width,ne.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,w,Y)}else t.texImage2D(i.TEXTURE_2D,0,Z,ae,w,Y);A(_)&&_.mipmapsAutoUpdate===!0&&b(ee),ce.__version=re.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Ut(y,_,F){if(_.image.length!==6)return;const ee=Qe(y,_),J=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const re=n.get(J);if(J.version!==re.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);const ce=Ve.getPrimaries(Ve.workingColorSpace),X=_.colorSpace===Gn?null:Ve.getPrimaries(_.colorSpace),Y=_.colorSpace===Gn||ce===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const ae=_.isCompressedTexture||_.image[0].isCompressedTexture,w=_.image[0]&&_.image[0].isDataTexture,Z=[];for(let he=0;he<6;he++)!ae&&!w?Z[he]=M(_.image[he],!0,r.maxCubemapSize):Z[he]=w?_.image[he].image:_.image[he],Z[he]=Ae(_,Z[he]);const V=Z[0],oe=s.convert(_.format,_.colorSpace),ie=s.convert(_.type);let se=T(_.internalFormat,oe,ie,_.normalized,_.colorSpace);const ye=_.isVideoTexture!==!0,Fe=re.__version===void 0||ee===!0,ne=J.dataReady;let be=E(_,V);Ye(i.TEXTURE_CUBE_MAP,_);let Ue;if(_.isDepthTexture){if(se=g(_.format===Vn,_.type),Fe)if(ye)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,se,V.width,V.height);else for(let he=0;he<6;he++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,se,V.width,V.height,0,oe,ie,null)}else if(ae){ye&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,se,V.width,V.height);for(let he=0;he<6;he++){Ue=Z[he].mipmaps;for(let Ke=0;Ke<Ue.length;Ke++){const xt=Ue[Ke];_.format!==fn?oe!==null?ye?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke,0,0,xt.width,xt.height,oe,xt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke,se,xt.width,xt.height,0,xt.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke,0,0,xt.width,xt.height,oe,ie,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke,se,xt.width,xt.height,0,oe,ie,xt.data)}}}else{if(Ue=_.mipmaps,ye&&Fe){Ue.length>0&&be++;const he=Ce(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,se,he.width,he.height)}for(let he=0;he<6;he++)if(w){ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Z[he].width,Z[he].height,oe,ie,Z[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,se,Z[he].width,Z[he].height,0,oe,ie,Z[he].data);for(let Ke=0;Ke<Ue.length;Ke++){const Ln=Ue[Ke].image[he].image;ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke+1,0,0,Ln.width,Ln.height,oe,ie,Ln.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke+1,se,Ln.width,Ln.height,0,oe,ie,Ln.data)}}else{ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,oe,ie,Z[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,se,oe,ie,Z[he]);for(let Ke=0;Ke<Ue.length;Ke++){const xt=Ue[Ke];ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke+1,0,0,oe,ie,xt.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke+1,se,oe,ie,xt.image[he])}}}A(_)&&_.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),re.__version=J.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function st(y,_,F,ee,J,re){const ce=s.convert(F.format,F.colorSpace),X=s.convert(F.type),Y=T(F.internalFormat,ce,X,F.normalized,F.colorSpace),ae=n.get(_),w=n.get(F);if(w.__renderTarget=_,!ae.__hasExternalTextures){const Z=Math.max(1,_.width>>re),V=Math.max(1,_.height>>re);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,re,Y,Z,V,_.depth,0,ce,X,null):t.texImage2D(J,re,Y,Z,V,0,ce,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,w.__webglTexture,0,rt(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,w.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function an(y,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const ee=_.depthTexture,J=ee&&ee.isDepthTexture?ee.type:null,re=g(_.stencilBuffer,J),ce=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(_),re,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(_),re,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,re,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,y)}else{const ee=_.textures;for(let J=0;J<ee.length;J++){const re=ee[J],ce=s.convert(re.format,re.colorSpace),X=s.convert(re.type),Y=T(re.internalFormat,ce,X,re.normalized,re.colorSpace);de(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt(_),Y,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(y,_,F){const ee=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(_.depthTexture);J.__renderTarget=_;const re=ee?_.depthTexture.image[0]:_.depthTexture.image;(!J.__webglTexture||re.width!==_.width||re.height!==_.height)&&(re.width=_.width,re.height=_.height,_.depthTexture.needsUpdate=!0),ee?me(_.depthTexture,0):pe(_.depthTexture,0);const ce=J.__webglTexture,X=rt(_),Y=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,ae=_.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Xn)de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Y,ce,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Y,ce,0);else if(_.depthTexture.format===Vn)de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Y,ce,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Y,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(y){const _=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const ee=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ee){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ee.removeEventListener("dispose",J)};ee.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=ee}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let ee=0;ee<6;ee++)_t(_.__webglFramebuffer[ee],y,ee);else y.texture.mipmaps.length>0?_t(_.__webglFramebuffer[0],y,0):_t(_.__webglFramebuffer,y,0);else if(F){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]===void 0)_.__webglDepthbuffer[ee]=i.createRenderbuffer(),an(_.__webglDepthbuffer[ee],y,!1);else{const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,re)}}else if(y.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),an(_.__webglDepthbuffer,y,!1);else{const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(y,_,F){const ee=n.get(y);_!==void 0&&st(ee.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Wt(y)}function qt(y){const _=y.texture,F=n.get(y),ee=n.get(_);y.addEventListener("dispose",G),B(y);const J=y.textures,re=y.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=_.version,a.memory.textures++),re){F.__webglFramebuffer=[];for(let X=0;X<6;X++)if(_.mipmaps.length>0){F.__webglFramebuffer[X]=[];for(let Y=0;Y<_.mipmaps.length;Y++)F.__webglFramebuffer[X][Y]=i.createFramebuffer()}else F.__webglFramebuffer[X]=i.createFramebuffer()}else{if(_.mipmaps.length>0){F.__webglFramebuffer=[];for(let X=0;X<_.mipmaps.length;X++)F.__webglFramebuffer[X]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ce)for(let X=0,Y=J.length;X<Y;X++){const ae=n.get(J[X]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&de(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<J.length;X++){const Y=J[X];F.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[X]);const ae=s.convert(Y.format,Y.colorSpace),w=s.convert(Y.type),Z=T(Y.internalFormat,ae,w,Y.normalized,Y.colorSpace,y.isXRRenderTarget===!0),V=rt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,V,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,F.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),an(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,_);for(let X=0;X<6;X++)if(_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)st(F.__webglFramebuffer[X][Y],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Y);else st(F.__webglFramebuffer[X],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);A(_)?b(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let X=0,Y=J.length;X<Y;X++){const ae=J[X],w=n.get(ae);let Z=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Z=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,w.__webglTexture),Ye(Z,ae),st(F.__webglFramebuffer,y,ae,i.COLOR_ATTACHMENT0+X,Z,0),A(ae)&&b(Z)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(X=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,ee.__webglTexture),Ye(X,_),_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)st(F.__webglFramebuffer[Y],y,_,i.COLOR_ATTACHMENT0,X,Y);else st(F.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,X,0);A(_)?b(X):_.mipmaps.length>0&&i.texParameteri(X,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}y.depthBuffer&&Wt(y)}function D(y){const _=y.textures;for(let F=0,ee=_.length;F<ee;F++){const J=_[F];if(A(J)&&J.mipmapsAutoUpdate===!0){const re=R(y),ce=n.get(J).__webglTexture;t.bindTexture(re,ce),b(re),t.unbindTexture()}}}const Yt=[];function it(y){if(y.samples>0){if(de(y)===!1){const _=y.textures,F=y.width,ee=y.height;let J=i.COLOR_BUFFER_BIT;const re=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(y),X=_.length>1;if(X)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),y.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const w=n.get(_[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,w,0)}i.blitFramebuffer(0,0,F,ee,0,0,F,ee,J,i.NEAREST),c===!0&&(Yt.length=0,Yt.push(i.COLOR_ATTACHMENT0+ae),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&Yt.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const w=n.get(_[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,w,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&c){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function rt(y){return Math.min(r.maxSamples,y.samples)}function de(y){const _=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function pt(y){const _=a.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function Ae(y,_){const F=y.colorSpace,ee=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==cs&&F!==Gn&&(Ve.getTransfer(F)===Ze?(ee!==fn||J!==kt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",F)),_}function Ce(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=Le,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=Me,this.setTexture2D=pe,this.setTexture2DArray=xe,this.setTexture3D=Te,this.setTextureCube=me,this.rebindTextures=Xt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=de,this.dispose=W}function Pg(i,e){function t(n,r=Gn){let s;const a=Ve.getTransfer(r);if(n===kt)return i.UNSIGNED_BYTE;if(n===so)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===ac)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===uc)return i.RGB;if(n===fn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===oo)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===lo)return i.RG_INTEGER;if(n===co)return i.RGBA_INTEGER;if(n===Qr||n===jr||n===es||n===ts)if(a===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===_a||n===xa||n===va)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ga)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_a)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===Ma||n===Ea||n===ya||n===ba||n===os||n===Ta)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sa||n===Ma)return a===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ea)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ya)return s.COMPRESSED_R11_EAC;if(n===ba)return s.COMPRESSED_SIGNED_R11_EAC;if(n===os)return s.COMPRESSED_RG11_EAC;if(n===Ta)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Aa||n===wa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Aa)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wa)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Ha||n===Va)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ga)return a===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ka||n===Wa||n===ls||n===Xa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ka)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ls)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ig{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Cc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:Lg,fragmentShader:Dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cn(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ng extends si{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,x=null;const S=typeof XRWebGLBinding<"u",p=new Ig,d={},M=t.getContextAttributes();let A=null,b=null;const R=[],T=[],g=new Ne;let E=null,B=null;const L=new $t;L.viewport=new ot;const I=new $t;I.viewport=new ot;const G=[L,I],q=new Xd;let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let pe=R[K];return pe===void 0&&(pe=new Bs,R[K]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(K){let pe=R[K];return pe===void 0&&(pe=new Bs,R[K]=pe),pe.getGripSpace()},this.getHand=function(K){let pe=R[K];return pe===void 0&&(pe=new Bs,R[K]=pe),pe.getHandSpace()};function $(K){const pe=T.indexOf(K.inputSource);if(pe===-1)return;const xe=R[pe];xe!==void 0&&(xe.update(K.inputSource,K.frame,l||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",te);for(let K=0;K<R.length;K++){const pe=T[K];pe!==null&&(T[K]=null,R[K].disconnect(pe))}P=null,W=null,p.reset();for(const K in d)delete d[K];if(e.setRenderTarget(A),m=null,h=null,f=null,r=null,b=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(g.width,g.height,!1),B!==null){const K=B.camera;K.fov=B.fov,K.zoom=B.zoom,K.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",H),r.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Te=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?Vn:Xn,Te=M.stencil?Ni:gn);const Ie={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new mn(h.textureWidth,h.textureHeight,{format:fn,type:kt,depthTexture:new Ui(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new mn(m.framebufferWidth,m.framebufferHeight,{format:fn,type:kt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(K){for(let pe=0;pe<K.removed.length;pe++){const xe=K.removed[pe],Te=T.indexOf(xe);Te>=0&&(T[Te]=null,R[Te].disconnect(xe))}for(let pe=0;pe<K.added.length;pe++){const xe=K.added[pe];let Te=T.indexOf(xe);if(Te===-1){for(let Ie=0;Ie<R.length;Ie++)if(Ie>=T.length){T.push(xe),Te=Ie;break}else if(T[Ie]===null){T[Ie]=xe,Te=Ie;break}if(Te===-1)break}const me=R[Te];me&&me.connect(xe)}}function k(K,pe){pe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(pe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let pe=K.near,xe=K.far;p.texture!==null&&(p.depthNear>0&&(pe=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),q.near=I.near=L.near=pe,q.far=I.far=L.far=xe,(P!==q.near||W!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,W=q.far),q.layers.mask=K.layers.mask|6,L.layers.mask=q.layers.mask&-5,I.layers.mask=q.layers.mask&-3;const Te=K.parent,me=q.cameras;k(q,Te);for(let Ie=0;Ie<me.length;Ie++)k(me[Ie],Te);q.projectionMatrix.copy(L.projectionMatrix),q.projectionMatrixInverse.copy(L.projectionMatrixInverse),B===null&&K.isPerspectiveCamera&&(B={camera:K,fov:K.fov,zoom:K.zoom}),Q(K,q,Te)};function Q(K,pe,xe){xe===null?K.matrix.copy(pe.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(pe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(pe.projectionMatrix),K.projectionMatrixInverse.copy(pe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ya*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(K){return d[K]};let j=null;function Me(K,pe){if(u=pe.getViewerPose(l||a),x=pe,u!==null){const xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Te=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,Te=!0);for(let we=0;we<xe.length;we++){const Ye=xe[we];let Qe=null;if(m!==null)Qe=m.getViewport(Ye);else{const Mt=f.getViewSubImage(h,Ye);Qe=Mt.viewport,we===0&&(e.setRenderTargetTextures(b,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(b))}let Be=G[we];Be===void 0&&(Be=new $t,Be.layers.enable(we),Be.viewport=new ot,G[we]=Be),Be.matrix.fromArray(Ye.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ye.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),we===0&&(q.matrix.copy(Be.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Te===!0&&q.cameras.push(Be)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const we=f.getDepthInformation(xe[0]);we&&we.isValid&&we.texture&&p.init(we,r.renderState)}if(me&&me.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let we=0;we<xe.length;we++){const Ye=xe[we].camera;if(Ye){let Qe=d[Ye];Qe||(Qe=new Cc,d[Ye]=Qe);const Be=f.getCameraImage(Ye);Qe.sourceTexture=Be}}}}for(let xe=0;xe<R.length;xe++){const Te=T[xe],me=R[xe];Te!==null&&me!==void 0&&me.update(Te,pe,l||a)}j&&j(K,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),x=null}const Le=new Ic;Le.setAnimationLoop(Me),this.setAnimationLoop=function(K){j=K},this.dispose=function(){}}}const Ug=new Je,kc=new Pe;kc.set(-1,0,0,0,1,0,0,0,1);function Fg(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Pc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,M,A,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(s(p,d),x(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),S(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,M,A):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ot&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ot&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d),A=M.envMap,b=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(kc),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,M,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){const M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Og(i,e,t,n){let r={},s={};function a(M,A){const b=A.program;n.uniformBlockBinding(M,b,r[M.id])}function o(M,A){let b=r[M.id];b===void 0&&(x(M),b=c(M),r[M.id]=b,M.addEventListener("dispose",p));const R=A.program;n.updateUBOMapping(M,R);const T=e.render.frame;s[M.id]!==T&&(l(M),s[M.id]=T)}function c(M){const A=i.createBuffer(),b=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,b,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(M){const A=r[M.id],b=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,g=b.length;T<g;T++){const E=b[T];if(Array.isArray(E))for(let B=0,L=E.length;B<L;B++)u(E[B],T,B,R);else u(E,T,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,A,b,R){if(h(M,A,b,R)===!0){const T=M.__offset,g=M.value;if(Array.isArray(g)){let E=0;for(let B=0;B<g.length;B++){const L=g[B],I=S(L,!0);f(L,M.__data,E),E+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function f(M,A,b){typeof M=="number"||typeof M=="boolean"?A[b]=M:M.isMatrix3?(A[b]=M.elements[0],A[b+1]=M.elements[1],A[b+2]=M.elements[2],A[b+3]=0,A[b+4]=M.elements[3],A[b+5]=M.elements[4],A[b+6]=M.elements[5],A[b+7]=0,A[b+8]=M.elements[6],A[b+9]=M.elements[7],A[b+10]=M.elements[8],A[b+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-b),b):M.toArray(A,b)}function h(M,A,b,R){const T=M.value,g=A+"_"+b;if(Array.isArray(T)){R[g]===void 0&&(R[g]=[]);const E=R[g];let B=!1;for(let L=0;L<T.length;L++)m(T[L],E,L)===!0&&(B=!0);return B}return m(T,R,g)}function m(M,A,b){if(A[b]===void 0)return typeof M=="number"||typeof M=="boolean"?A[b]=M:ArrayBuffer.isView(M)?A[b]=M.slice():A[b]=M.clone(),!0;{const R=A[b];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return A[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function x(M){const A=M.uniforms;let b=0;const R=16;for(let g=0,E=A.length;g<E;g++){const B=Array.isArray(A[g])?A[g]:[A[g]];for(let L=0,I=B.length;L<I;L++){const G=B[L],q=Array.isArray(G.value)?G.value:[G.value],P=Array.isArray(A[g])||Array.isArray(G.value);let W=b;for(let H=0,te=q.length;H<te;H++){const k=q[H],Q=S(k,P),j=b%R,Me=j%Q.boundary,Le=j+Me;b+=Me,Le!==0&&R-Le<Q.storage&&(b+=R-Le),H===0&&(W=b),b+=Q.storage}const $=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new $((b-W)/Float32Array.BYTES_PER_ELEMENT),G.__offset=W}}const T=b%R;return T>0&&(b+=R-T),M.__size=b,M.__cache={},this}function S(M,A){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(M){const A=M.target;A.removeEventListener("dispose",p),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const M in r)i.deleteBuffer(r[M]);r={},s={}}return{bind:a,update:o,dispose:d}}const Bg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ln=null;function zg(){return ln===null&&(ln=new yd(Bg,16,16,ii,_n),ln.name="DFG_LUT",ln.minFilter=Ft,ln.magFilter=Ft,ln.wrapS=Tn,ln.wrapT=Tn,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}class Gg{constructor(e={}){const{canvas:t=Zu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=kt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const S=m,p=new Set([co,lo,oo]),d=new Set([kt,gn,ar,Ni,so,ao]),M=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let R=null,T=null;const g=[],E=[];let B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let I=!1,G=null,q=null,P=null,W=null;this._outputColorSpace=Nt;let $=0,H=0,te=null,k=-1,Q=null;const j=new ot,Me=new ot;let Le=null;const K=new He(0);let pe=0,xe=t.width,Te=t.height,me=1,Ie=null,ut=null;const we=new ot(0,0,xe,Te),Ye=new ot(0,0,xe,Te);let Qe=!1;const Be=new cr,Mt=new po;let ft=!1,Ut=!1;const st=new Je,an=new N,_t=new ot,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function qt(){return te===null?me:1}let D=n;function Yt(v,C){return t.getContext(v,C)}let it,rt,de,pt,Ae,Ce,y,_,F,ee,J,re,ce,X,Y,ae,w,Z,V,oe,ie,se,ye;try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${no}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",he,!1),D===null){const C="webgl2";if(D=Yt(C,v),D===null)throw Yt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(v){throw t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Xe("WebGLRenderer: "+v.message),v}function Fe(){it=new kp(D),it.init(),ie=new Pg(D,it),rt=new Dp(D,it,e,ie),de=new Rg(D,it),rt.reversedDepthBuffer&&h&&de.buffers.depth.setReversed(!0),q=D.createFramebuffer(),P=D.createFramebuffer(),W=D.createFramebuffer(),pt=new qp(D),Ae=new pg,Ce=new Cg(D,it,de,Ae,rt,ie,pt),y=new Vp(L),_=new Yd(D),se=new Pp(D,_),F=new Wp(D,_,pt,se),ee=new Kp(D,F,_,se,pt),Z=new Yp(D,rt,Ce),Y=new Ip(Ae),J=new fg(L,y,it,rt,se,Y),re=new Fg(L,Ae),ce=new gg,X=new Eg(it),w=new Cp(L,y,de,ee,x,c),ae=new wg(L,ee,rt),ye=new Og(D,pt,rt,de),V=new Lp(D,it,pt),oe=new Xp(D,it,pt),pt.programs=J.programs,L.capabilities=rt,L.extensions=it,L.properties=Ae,L.renderLists=ce,L.shadowMap=ae,L.state=de,L.info=pt}S!==kt&&(B=new $p(S,t.width,t.height,o,r,s));const ne=new Ng(L,D);this.xr=ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=it.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=it.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(v){v!==void 0&&(me=v,this.setSize(xe,Te,!1))},this.getSize=function(v){return v.set(xe,Te)},this.setSize=function(v,C,z=!0){if(ne.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=v,Te=C,t.width=Math.floor(v*me),t.height=Math.floor(C*me),z===!0&&(t.style.width=v+"px",t.style.height=C+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(xe*me,Te*me).floor()},this.setDrawingBufferSize=function(v,C,z){xe=v,Te=C,me=z,t.width=Math.floor(v*z),t.height=Math.floor(C*z),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(S===kt){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(we)},this.setViewport=function(v,C,z,U){v.isVector4?we.set(v.x,v.y,v.z,v.w):we.set(v,C,z,U),de.viewport(j.copy(we).multiplyScalar(qt()).round())},this.getScissor=function(v){return v.copy(Ye)},this.setScissor=function(v,C,z,U){v.isVector4?Ye.set(v.x,v.y,v.z,v.w):Ye.set(v,C,z,U),de.scissor(Me.copy(Ye).multiplyScalar(qt()).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(v){de.setScissorTest(Qe=v)},this.setOpaqueSort=function(v){Ie=v},this.setTransparentSort=function(v){ut=v},this.getClearColor=function(v){return v.copy(w.getClearColor())},this.setClearColor=function(){w.setClearColor(...arguments)},this.getClearAlpha=function(){return w.getClearAlpha()},this.setClearAlpha=function(){w.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,z=!0){let U=0;if(v){let O=!1;if(te!==null){const ue=te.texture.format;O=p.has(ue)}if(O){const ue=te.texture.type,_e=d.has(ue),le=w.getClearColor(),ge=w.getClearAlpha(),Ee=le.r,De=le.g,ze=le.b;_e?(M[0]=Ee,M[1]=De,M[2]=ze,M[3]=ge,D.clearBufferuiv(D.COLOR,0,M)):(A[0]=Ee,A[1]=De,A[2]=ze,A[3]=ge,D.clearBufferiv(D.COLOR,0,A))}else U|=D.COLOR_BUFFER_BIT}C&&(U|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(U|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&D.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),G=v},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",he,!1),w.dispose(),ce.dispose(),X.dispose(),Ce.dispose(),Ae.dispose(),y.dispose(),ee.dispose(),F.dispose(),se.dispose(),ye.dispose(),J.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ro),ne.removeEventListener("sessionend",Co),Kn.stop()};function be(v){v.preventDefault(),ds("WebGLRenderer: Context Lost."),I=!0}function Ue(){ds("WebGLRenderer: Context Restored."),I=!1;const v=pt.autoReset,C=ae.enabled,z=ae.autoUpdate,U=ae.needsUpdate,O=ae.type;Fe(),pt.autoReset=v,ae.enabled=C,ae.autoUpdate=z,ae.needsUpdate=U,ae.type=O}function he(v){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ke(v){const C=v.target;C.removeEventListener("dispose",Ke),xt(C)}function xt(v){Ln(v),Ae.remove(v)}function Ln(v){const C=Ae.get(v).programs;C!==void 0&&(C.forEach(function(z){J.releaseProgram(z)}),v.isShaderMaterial&&J.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,z,U,O,ue){C===null&&(C=Wt);const _e=O.isMesh&&O.matrixWorld.determinantAffine()<0,le=ru(v,C,z,U,O);de.setMaterial(U,_e);let ge=z.index,Ee=1;if(U.wireframe===!0){if(ge=F.getWireframeAttribute(z),ge===void 0)return;Ee=2}const De=z.drawRange,ze=z.attributes.position;let ve=De.start*Ee,Ge=(De.start+De.count)*Ee;ue!==null&&(ve=Math.max(ve,ue.start*Ee),Ge=Math.min(Ge,(ue.start+ue.count)*Ee)),ge!==null?(ve=Math.max(ve,0),Ge=Math.min(Ge,ge.count)):ze!=null&&(ve=Math.max(ve,0),Ge=Math.min(Ge,ze.count));const dt=Ge-ve;if(dt<0||dt===1/0)return;se.setup(O,U,le,z,ge);let tt,je=V;if(ge!==null&&(tt=_.get(ge),je=oe,je.setIndex(tt)),O.isMesh)U.wireframe===!0?(de.setLineWidth(U.wireframeLinewidth*qt()),je.setMode(D.LINES)):je.setMode(D.TRIANGLES);else if(O.isLine){let At=U.linewidth;At===void 0&&(At=1),de.setLineWidth(At*qt()),O.isLineSegments?je.setMode(D.LINES):O.isLineLoop?je.setMode(D.LINE_LOOP):je.setMode(D.LINE_STRIP)}else O.isPoints?je.setMode(D.POINTS):O.isSprite&&je.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(it.get("WEBGL_multi_draw"))je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const At=O._multiDrawStarts,Se=O._multiDrawCounts,Lt=O._multiDrawCount,qe=ge?_.get(ge).bytesPerElement:1,Zn=Ae.get(U).currentProgram.getUniforms();for(let wt=0;wt<Lt;wt++)Zn.setValue(D,"_gl_DrawID",wt),je.render(At[wt]/qe,Se[wt])}else if(O.isInstancedMesh)je.renderInstances(ve,dt,O.count);else if(z.isInstancedBufferGeometry){const At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Se=Math.min(z.instanceCount,At);je.renderInstances(ve,dt,Se)}else je.render(ve,dt)};function wo(v,C,z,U){G!==null&&v.isNodeMaterial&&G.setObject(U,v),ft===!0&&Y.setState(v,z,!1),v.transparent===!0&&v.side===dn&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,Vi(v,C,U),v.side=ni,v.needsUpdate=!0,Vi(v,C,U),v.side=dn):Vi(v,C,U)}this.compile=function(v,C,z=null){z===null&&(z=v),G!==null&&G.renderStart(v,C,z),T=X.get(z),T.init(C),E.push(T),z.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(T.pushLight(O),O.castShadow&&T.pushShadow(O))}),v!==z&&v.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(T.pushLight(O),O.castShadow&&T.pushShadow(O))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),Ut=this.localClippingEnabled,ft=Y.init(this.clippingPlanes,Ut),ft===!0&&Y.setGlobalState(this.clippingPlanes,C),G!==null&&ae.render(T.state.shadowsArray,z,C);const U=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ue=O.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const le=ue[_e];wo(le,z,C,O),U.add(le)}else wo(ue,z,C,O),U.add(ue)}),T=E.pop(),G!==null&&G.renderEnd(),U},this.compileAsync=function(v,C,z=null){const U=this.compile(v,C,z);return new Promise(O=>{function ue(){if(U.forEach(function(_e){const ge=Ae.get(_e).currentProgram;(ge===void 0||ge.isReady())&&U.delete(_e)}),U.size===0){O(v);return}setTimeout(ue,10)}it.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ts=null;function nu(v){Ts&&Ts(v)}function Ro(){Kn.stop()}function Co(){Kn.start()}const Kn=new Ic;Kn.setAnimationLoop(nu),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(v){Ts=v,ne.setAnimationLoop(v),v===null?Kn.stop():Kn.start()},ne.addEventListener("sessionstart",Ro),ne.addEventListener("sessionend",Co),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;G!==null&&G.renderStart(v,C);const z=ne.enabled===!0&&ne.isPresenting===!0,U=B!==null&&(te===null||z)&&B.begin(L,te);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(C),C=ne.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,C,te),T=X.get(v,E.length),T.init(C),T.state.textureUnits=Ce.getTextureUnits(),E.push(T),st.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?Mt.setFromArrayCamera(C):Be.setFromProjectionMatrix(st,rn,C.reversedDepth),Ut=this.localClippingEnabled,ft=Y.init(this.clippingPlanes,Ut),R=ce.get(v,g.length),R.init(),g.push(R),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const _e=L.xr.getDepthSensingMesh();_e!==null&&As(_e,C,-1/0,L.sortObjects)}As(v,C,0,L.sortObjects),R.finish(),G!==null&&G.updateLights(T.state.lightsArray),L.sortObjects===!0&&R.sort(Ie,ut),Xt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Xt&&w.addToRenderList(R,v),this.info.autoReset===!0&&this.info.reset(),ft===!0&&Y.beginShadows();const O=T.state.shadowsArray;if(ae.render(O,v,C),ft===!0&&Y.endShadows(),(U&&B.hasRenderPass())===!1){const _e=R.opaque,le=R.transmissive;if(T.setupLights(),C.isArrayCamera){const ge=C.cameras;if(le.length>0)for(let Ee=0,De=ge.length;Ee<De;Ee++){const ze=ge[Ee];Lo(_e,le,v,ze)}Xt&&w.render(v);for(let Ee=0,De=ge.length;Ee<De;Ee++){const ze=ge[Ee];Po(R,v,ze,ze.viewport)}}else le.length>0&&Lo(_e,le,v,C),Xt&&w.render(v),Po(R,v,C)}te!==null&&H===0&&(Ce.updateMultisampleRenderTarget(te),Ce.updateRenderTargetMipmap(te)),U&&B.end(L),v.isScene===!0&&v.onAfterRender(L,v,C),se.resetDefaultState(),k=-1,Q=null,E.pop(),E.length>0?(T=E[E.length-1],Ce.setTextureUnits(T.state.textureUnits),ft===!0&&Y.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?R=g[g.length-1]:R=null,G!==null&&G.renderEnd()};function As(v,C,z,U){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){const _e=C.isArrayCamera?Mt:Be;if(!v.frustumCulled||v.intersectsFrustum(_e)){U&&_t.setFromMatrixPosition(v.matrixWorld).applyMatrix4(st);const le=ee.update(v),ge=v.material;ge.visible&&R.push(v,le,ge,z,_t.z,null,C)}}else if(v.isMesh||v.isLine||v.isPoints){const _e=C.isArrayCamera?Mt:Be;if(!v.frustumCulled||v.intersectsFrustum(_e)){const le=ee.update(v),ge=v.material;if(U&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),_t.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),_t.copy(le.boundingSphere.center)),_t.applyMatrix4(v.matrixWorld).applyMatrix4(st)),Array.isArray(ge)){const Ee=le.groups;for(let De=0,ze=Ee.length;De<ze;De++){const ve=Ee[De],Ge=ge[ve.materialIndex];Ge&&Ge.visible&&R.push(v,le,Ge,z,_t.z,ve,C)}}else ge.visible&&R.push(v,le,ge,z,_t.z,null,C)}}}const ue=v.children;for(let _e=0,le=ue.length;_e<le;_e++)As(ue[_e],C,z,U)}function Po(v,C,z,U){const{opaque:O,transmissive:ue,transparent:_e}=v;T.setupLightsView(z),ft===!0&&Y.setGlobalState(L.clippingPlanes,z),U&&de.viewport(j.copy(U)),O.length>0&&Sr(O,C,z),ue.length>0&&Sr(ue,C,z),_e.length>0&&Sr(_e,C,z),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Lo(v,C,z,U){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[U.id]===void 0){const ve=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[U.id]=new mn(1,1,{generateMipmaps:!0,type:ve?_n:kt,minFilter:Hn,samples:Math.max(4,rt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const ue=T.state.transmissionRenderTarget[U.id],_e=U.viewport||j;ue.setSize(_e.z*L.transmissionResolutionScale,_e.w*L.transmissionResolutionScale);const le=L.getRenderTarget(),ge=L.getActiveCubeFace(),Ee=L.getActiveMipmapLevel();L.setRenderTarget(ue),L.getClearColor(K),pe=L.getClearAlpha(),pe<1&&L.setClearColor(16777215,.5),L.clear(),Xt&&w.render(z);const De=L.toneMapping;L.toneMapping=wn;const ze=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),T.setupLightsView(U),ft===!0&&Y.setGlobalState(L.clippingPlanes,U),Sr(v,z,U),Ce.updateMultisampleRenderTarget(ue),Ce.updateRenderTargetMipmap(ue),it.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Ge=0,dt=C.length;Ge<dt;Ge++){const tt=C[Ge],{object:je,geometry:At,material:Se,group:Lt}=tt;if(Se.side===dn&&je.layers.test(U.layers)){const qe=Se.side;Se.side=Ot,Se.needsUpdate=!0,Do(je,z,U,At,Se,Lt),Se.side=qe,Se.needsUpdate=!0,ve=!0}}ve===!0&&(Ce.updateMultisampleRenderTarget(ue),Ce.updateRenderTargetMipmap(ue))}L.setRenderTarget(le,ge,Ee),L.setClearColor(K,pe),ze!==void 0&&(U.viewport=ze),L.toneMapping=De}function Sr(v,C,z){const U=C.isScene===!0?C.overrideMaterial:null;for(let O=0,ue=v.length;O<ue;O++){const _e=v[O],{object:le,geometry:ge,group:Ee}=_e;let De=_e.material;De.allowOverride===!0&&U!==null&&(De=U),le.layers.test(z.layers)&&Do(le,C,z,ge,De,Ee)}}function Do(v,C,z,U,O,ue){G!==null&&O.isNodeMaterial&&G.setObject(v,O),v.onBeforeRender(L,C,z,U,O,ue),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(L,C,z,U,v,ue),O.transparent===!0&&O.side===dn&&O.forceSinglePass===!1?(O.side=Ot,O.needsUpdate=!0,L.renderBufferDirect(z,C,U,O,v,ue),O.side=ni,O.needsUpdate=!0,L.renderBufferDirect(z,C,U,O,v,ue),O.side=dn):L.renderBufferDirect(z,C,U,O,v,ue),v.onAfterRender(L,C,z,U,O,ue)}function Io(v){let C=0;for(const z of v)z.texture!==null&&C++;return C}function Vi(v,C,z){C.isScene!==!0&&(C=Wt);const U=Ae.get(v),O=T.state.lights,ue=T.state.shadowsArray,_e=O.state.version,le=J.getParameters(v,O.state,ue,C,z,T.state.lightProbeGridArray),ge=J.getProgramCacheKey(le);let Ee=U.programs;U.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,U.fog=C.fog;const De=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;U.envMap=y.get(v.envMap||U.environment,De),U.envMapRotation=U.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",Ke),Ee=new Map,U.programs=Ee,U.programVariants=new Map);let ze=Ee.get(ge);if(ze!==void 0){if(U.currentProgram===ze&&U.lightsStateVersion===_e)return Uo(v,le),ze}else le.uniforms=J.getUniforms(v),G!==null&&v.isNodeMaterial&&G.build(v,z,le),v.onBeforeCompile(le,L),ze=J.acquireProgram(le,ge),Ee.set(ge,ze),U.uniforms=le.uniforms;const ve=U.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ve.clippingPlanes=Y.uniform),Uo(v,le),U.needsLights=au(v),U.lightsStateVersion=_e,U.needsLights&&(ve.ambientLightColor.value=O.state.ambient,ve.lightProbe.value=O.state.probe,ve.sunLights.value=O.state.sun,ve.sunLightShadows.value=O.state.sunShadow,ve.directionalLights.value=O.state.directional,ve.directionalLightShadows.value=O.state.directionalShadow,ve.spotLights.value=O.state.spot,ve.spotLightShadows.value=O.state.spotShadow,ve.rectAreaLights.value=O.state.rectArea,ve.ltc_1.value=O.state.rectAreaLTC1,ve.ltc_2.value=O.state.rectAreaLTC2,ve.pointLights.value=O.state.point,ve.pointLightShadows.value=O.state.pointShadow,ve.hemisphereLights.value=O.state.hemi,ve.sunShadowMatrix.value=O.state.sunShadowMatrix,ve.sunShadowCascade.value=O.state.sunShadowCascade,ve.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ve.spotLightMatrix.value=O.state.spotLightMatrix,ve.spotLightMap.value=O.state.spotLightMap,ve.pointShadowMatrix.value=O.state.pointShadowMatrix),U.numLightProbeGrids=Io(T.state.lightProbeGridArray),U.currentProgram=ze,U.uniformsList=null,ze}function iu(v,C,z,U,O){const ue=Ae.get(v),_e=ue.currentProgram.id+","+U+","+O;let le=ue.programVariants.get(_e);return le===void 0?(le=Vi(v,C,z),ue.programVariants.set(_e,le)):(ue.currentProgram=le,ue.uniformsList=null,ue.outputColorSpace=U,ue.toneMapping=O),le}function No(v){if(v.uniformsList===null){const C=v.currentProgram.getUniforms();v.uniformsList=is.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function Uo(v,C){const z=Ae.get(v);z.outputColorSpace=C.outputColorSpace,z.batching=C.batching,z.batchingColor=C.batchingColor,z.instancing=C.instancing,z.instancingColor=C.instancingColor,z.instancingMorph=C.instancingMorph,z.skinning=C.skinning,z.morphTargets=C.morphTargets,z.morphNormals=C.morphNormals,z.morphColors=C.morphColors,z.morphTargetsCount=C.morphTargetsCount,z.numClippingPlanes=C.numClippingPlanes,z.numIntersection=C.numClipIntersection,z.vertexAlphas=C.vertexAlphas,z.vertexTangents=C.vertexTangents,z.toneMapping=C.toneMapping}function ru(v,C,z,U,O){C.isScene!==!0&&(C=Wt),Ce.resetTextureUnits();const ue=C.fog,_e=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?C.environment:null,le=te===null?L.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ve.workingColorSpace,ge=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Ee=y.get(U.envMap||_e,ge),De=U.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ze=!!z.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ve=!!z.morphAttributes.position,Ge=!!z.morphAttributes.normal,dt=!!z.morphAttributes.color;let tt=wn;U.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(tt=L.toneMapping);const je=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,At=je!==void 0?je.length:0,Se=Ae.get(U),Lt=T.state.lights;if(ft===!0&&(Ut===!0||v!==Q)){const at=v===Q&&U.id===k;Y.setState(U,v,at)}let qe=!1,Zn=!1;U.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Lt.state.version||O.isBatchedMesh&&Se.batching===!1||!O.isBatchedMesh&&Se.batching===!0||O.isBatchedMesh&&Se.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Se.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Se.instancing===!1||!O.isInstancedMesh&&Se.instancing===!0||O.isSkinnedMesh&&Se.skinning===!1||!O.isSkinnedMesh&&Se.skinning===!0||O.isInstancedMesh&&Se.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Se.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Se.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Se.instancingMorph===!1&&O.morphTexture!==null||Se.envMap!==Ee||U.fog===!0&&Se.fog!==ue||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Y.numPlanes||Se.numIntersection!==Y.numIntersection)||Se.vertexAlphas!==De||Se.vertexTangents!==ze||Se.morphTargets!==ve||Se.morphNormals!==Ge||Se.morphColors!==dt||Se.morphTargetsCount!==At||Se.numLightProbeGrids!==Io(T.state.lightProbeGridArray)?qe=!0:(Se.outputColorSpace!==le||Se.toneMapping!==tt)&&(Zn=!0):(qe=!0,Se.__version=U.version);let wt=Se.currentProgram;(qe===!0||Zn===!0)&&(wt=Zn===!0?iu(U,C,O,le,tt):Vi(U,C,O),G&&U.isNodeMaterial&&G.onUpdateProgram(U,wt,Se));let Mr=!1,Dn=!1,$n=!1;const We=wt.getUniforms(),Et=Se.uniforms;if(de.useProgram(wt.program)&&(Mr=!0,Dn=!0,$n=!0),U.id!==k&&(k=U.id,Dn=!0),Mr||Q!==v){de.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),We.setValue(D,"projectionMatrix",v.projectionMatrix),We.setValue(D,"viewMatrix",v.matrixWorldInverse);const vt=We.map.cameraPosition;vt!==void 0&&vt.setValue(D,an.setFromMatrixPosition(v.matrixWorld)),rt.logarithmicDepthBuffer&&We.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&We.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Dn=!0,$n=!0)}if(Se.needsLights&&(Lt.state.sunShadowMap.length>0&&We.setValue(D,"sunShadowMap",Lt.state.sunShadowMap,Ce),Lt.state.directionalShadowMap.length>0&&We.setValue(D,"directionalShadowMap",Lt.state.directionalShadowMap,Ce),Lt.state.spotShadowMap.length>0&&We.setValue(D,"spotShadowMap",Lt.state.spotShadowMap,Ce),Lt.state.pointShadowMap.length>0&&We.setValue(D,"pointShadowMap",Lt.state.pointShadowMap,Ce)),O.isSkinnedMesh){We.setOptional(D,O,"bindMatrix"),We.setOptional(D,O,"bindMatrixInverse");const at=O.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),We.setValue(D,"boneTexture",at.boneTexture,Ce))}O.isBatchedMesh&&(We.setOptional(D,O,"batchingTexture"),We.setValue(D,"batchingTexture",O._matricesTexture,Ce),We.setOptional(D,O,"batchingIdTexture"),We.setValue(D,"batchingIdTexture",O._indirectTexture,Ce),We.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&We.setValue(D,"batchingColorTexture",O._colorsTexture,Ce));const Qt=z.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Z.update(O,z,wt),(Dn||Se.receiveShadow!==O.receiveShadow)&&(Se.receiveShadow=O.receiveShadow,We.setValue(D,"receiveShadow",O.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&C.environment!==null&&(Et.envMapIntensity.value=C.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=zg()),Dn){if(We.setValue(D,"toneMappingExposure",L.toneMappingExposure),Se.needsLights&&su(Et,$n),ue&&U.fog===!0&&re.refreshFogUniforms(Et,ue),re.refreshMaterialUniforms(Et,U,me,Te,T.state.transmissionRenderTarget[v.id]),Se.needsLights&&Se.numLightProbeGrids>0){const at=b;let vt=0;for(const xn of T.state.lightProbeGridArray)xn.texture!==null&&(at.textures[vt]=xn.texture,at.min[vt]=xn.boundingBox.min,at.max[vt]=xn.boundingBox.max,at.resolution[vt]=xn.resolution,vt++);for(const xn in at)at[xn].length=vt;Et.probesSH.value=at.textures,Et.probesMin.value=at.min,Et.probesMax.value=at.max,Et.probesResolution.value=at.resolution}is.upload(D,No(Se),Et,Ce)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(is.upload(D,No(Se),Et,Ce),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&We.setValue(D,"center",O.center),We.setValue(D,"modelViewMatrix",O.modelViewMatrix),We.setValue(D,"normalMatrix",O.normalMatrix),We.setValue(D,"modelMatrix",O.matrixWorld),U.uniformsGroups!==void 0){const at=U.uniformsGroups;for(let vt=0,xn=at.length;vt<xn;vt++){const Oo=at[vt];ye.update(Oo,wt),ye.bind(Oo,wt)}}return wt}function su(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function au(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(v,C,z){const U=Ae.get(v);U.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),Ae.get(v.texture).__webglTexture=C,Ae.get(v.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:z,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){const z=Ae.get(v);z.__webglFramebuffer=C,z.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,z=0){te=v,$=C,H=z;let U=null,O=!1,ue=!1;if(v){const le=Ae.get(v);if(le.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(D.FRAMEBUFFER,le.__webglFramebuffer),j.copy(v.viewport),Me.copy(v.scissor),Le=v.scissorTest,de.viewport(j),de.scissor(Me),de.setScissorTest(Le),k=-1;return}else if(le.__webglFramebuffer===void 0)Ce.setupRenderTarget(v);else if(le.__hasExternalTextures)Ce.rebindTextures(v,Ae.get(v.texture).__webglTexture,Ae.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const De=v.depthTexture;if(le.__boundDepthTexture!==De){if(De!==null&&Ae.has(De)&&(v.width!==De.image.width||v.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ce.setupDepthRenderbuffer(v)}}const ge=v.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ue=!0);const Ee=Ae.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ee[C])?U=Ee[C][z]:U=Ee[C],O=!0):v.samples>0&&Ce.useMultisampledRTT(v)===!1?U=Ae.get(v).__webglMultisampledFramebuffer:Array.isArray(Ee)?U=Ee[z]:U=Ee,j.copy(v.viewport),Me.copy(v.scissor),Le=v.scissorTest}else j.copy(we).multiplyScalar(me).floor(),Me.copy(Ye).multiplyScalar(me).floor(),Le=Qe;if(z!==0&&(U=q),de.bindFramebuffer(D.FRAMEBUFFER,U)&&de.drawBuffers(v,U),de.viewport(j),de.scissor(Me),de.setScissorTest(Le),O){const le=Ae.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+C,le.__webglTexture,z)}else if(ue){const le=C;for(let ge=0;ge<v.textures.length;ge++){const Ee=Ae.get(v.textures[ge]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ge,Ee.__webglTexture,z,le)}}else if(v!==null&&z!==0){const le=Ae.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,le.__webglTexture,z)}k=-1};function Fo(v){const C=Ae.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=rt.textureFormatReadable(v.format),C.__typeReadable=rt.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,z,U,O,ue,_e,le=0){if(!(v&&v.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ae.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge){de.bindFramebuffer(D.FRAMEBUFFER,ge);try{const Ee=v.textures[le],De=Ee.format,ze=Ee.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);const ve=Fo(Ee);if(ve.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-U&&z>=0&&z<=v.height-O&&D.readPixels(C,z,U,O,ie.convert(De),ie.convert(ze),ue)}finally{const Ee=te!==null?Ae.get(te).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,C,z,U,O,ue,_e,le=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ae.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge)if(C>=0&&C<=v.width-U&&z>=0&&z<=v.height-O){de.bindFramebuffer(D.FRAMEBUFFER,ge);const Ee=v.textures[le],De=Ee.format,ze=Ee.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);const ve=Fo(Ee);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(C,z,U,O,ie.convert(De),ie.convert(ze),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const dt=te!==null?Ae.get(te).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,dt);const tt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await $u(D,tt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ge),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Ge),D.deleteSync(tt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,z=0){const U=Math.pow(2,-z),O=Math.floor(v.image.width*U),ue=Math.floor(v.image.height*U),_e=C!==null?C.x:0,le=C!==null?C.y:0;Ce.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,_e,le,O,ue),de.unbindTexture()},this.copyTextureToTexture=function(v,C,z=null,U=null,O=0,ue=0){let _e,le,ge,Ee,De,ze,ve,Ge,dt;const tt=v.isCompressedTexture?v.mipmaps[ue]:v.image;if(z!==null)_e=z.max.x-z.min.x,le=z.max.y-z.min.y,ge=z.isBox3?z.max.z-z.min.z:1,Ee=z.min.x,De=z.min.y,ze=z.isBox3?z.min.z:0;else{const We=Math.pow(2,-O);_e=Math.floor(tt.width*We),le=Math.floor(tt.height*We),v.isDataArrayTexture?ge=tt.depth:v.isData3DTexture?ge=Math.floor(tt.depth*We):ge=1,Ee=0,De=0,ze=0}U!==null?(ve=U.x,Ge=U.y,dt=U.z):(ve=0,Ge=0,dt=0);const je=ie.convert(C.format),At=ie.convert(C.type);let Se;C.isData3DTexture?(Ce.setTexture3D(C,0),Se=D.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Ce.setTexture2DArray(C,0),Se=D.TEXTURE_2D_ARRAY):(Ce.setTexture2D(C,0),Se=D.TEXTURE_2D),de.activeTexture(D.TEXTURE0),de.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),de.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),de.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);const Lt=de.getParameter(D.UNPACK_ROW_LENGTH),qe=de.getParameter(D.UNPACK_IMAGE_HEIGHT),Zn=de.getParameter(D.UNPACK_SKIP_PIXELS),wt=de.getParameter(D.UNPACK_SKIP_ROWS),Mr=de.getParameter(D.UNPACK_SKIP_IMAGES);de.pixelStorei(D.UNPACK_ROW_LENGTH,tt.width),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt.height),de.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),de.pixelStorei(D.UNPACK_SKIP_ROWS,De),de.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);const Dn=v.isDataArrayTexture||v.isData3DTexture,$n=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){const We=Ae.get(v),Et=Ae.get(C),Qt=Ae.get(We.__renderTarget),at=Ae.get(Et.__renderTarget);de.bindFramebuffer(D.READ_FRAMEBUFFER,Qt.__webglFramebuffer),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let vt=0;vt<ge;vt++)Dn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(v).__webglTexture,O,ze+vt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(C).__webglTexture,ue,dt+vt)),D.blitFramebuffer(Ee,De,Ee+_e,De+le,ve,Ge,ve+_e,Ge+le,D.DEPTH_BUFFER_BIT,D.NEAREST);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||Ae.has(v)){const We=Ae.get(v),Et=Ae.get(C);de.bindFramebuffer(D.READ_FRAMEBUFFER,P),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,W);for(let Qt=0;Qt<ge;Qt++)Dn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,We.__webglTexture,O,ze+Qt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,We.__webglTexture,O),$n?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,ue,dt+Qt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,ue),O!==0?D.blitFramebuffer(Ee,De,Ee+_e,De+le,ve,Ge,ve+_e,Ge+le,D.COLOR_BUFFER_BIT,D.NEAREST):$n?D.copyTexSubImage3D(Se,ue,ve,Ge,dt+Qt,Ee,De,_e,le):D.copyTexSubImage2D(Se,ue,ve,Ge,Ee,De,_e,le);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else $n?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Se,ue,ve,Ge,dt,_e,le,ge,je,At,tt.data):C.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,ue,ve,Ge,dt,_e,le,ge,je,tt.data):D.texSubImage3D(Se,ue,ve,Ge,dt,_e,le,ge,je,At,tt):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,ve,Ge,_e,le,je,At,tt.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,ve,Ge,tt.width,tt.height,je,tt.data):D.texSubImage2D(D.TEXTURE_2D,ue,ve,Ge,_e,le,je,At,tt);de.pixelStorei(D.UNPACK_ROW_LENGTH,Lt),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qe),de.pixelStorei(D.UNPACK_SKIP_PIXELS,Zn),de.pixelStorei(D.UNPACK_SKIP_ROWS,wt),de.pixelStorei(D.UNPACK_SKIP_IMAGES,Mr),ue===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&D.generateMipmap(Se),de.unbindTexture()},this.initRenderTarget=function(v){Ae.get(v).__webglFramebuffer===void 0&&Ce.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ce.setTextureCube(v,0):v.isData3DTexture?Ce.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ce.setTexture2DArray(v,0):Ce.setTexture2D(v,0),de.unbindTexture()},this.resetState=function(){$=0,H=0,te=null,de.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}const Hg=Math.PI*2;class Vg{canvas=document.createElement("canvas");context=this.canvas.getContext("2d");view=new Je;inverseTilt=new Je;source=null;pixels=null;lastFrame="";constructor(e,t){this.inverseTilt.makeRotationZ(-t);const n=new Image;n.onload=()=>{const r=document.createElement("canvas");r.width=768,r.height=384;const s=r.getContext("2d",{willReadFrequently:!0});s&&(s.drawImage(n,0,0,r.width,r.height),this.source=s.getImageData(0,0,r.width,r.height))},n.src=e}draw(e,t,n,r,s,a){if(!this.source||!this.context)return!1;const o=r<22?48:r<68?112:224,c=s.elements.slice(0,11).map(u=>Math.round(u*90)),l=`${o}:${Math.round(a*90)}:${c.join(",")}`;return l!==this.lastFrame&&(this.lastFrame=l,this.pixels?.width!==o&&(this.canvas.width=this.canvas.height=o,this.pixels=this.context.createImageData(o,o)),this.view.makeRotationY(-a).multiply(this.inverseTilt).multiply(s),kg(this.source,this.pixels,this.view),this.context.putImageData(this.pixels,0,0)),e.drawImage(this.canvas,t-r,n-r,2*r,2*r),!0}}function kg(i,e,t){const{width:n,data:r}=e,s=t.elements;for(let a=0;a<n;a++){const o=1-(2*a+1)/n;for(let c=0;c<n;c++){const l=(2*c+1)/n-1,u=1-l*l-o*o;if(u<=0)continue;const f=Math.sqrt(u),h=s[0]*l+s[4]*o+s[8]*f,m=s[1]*l+s[5]*o+s[9]*f,x=s[2]*l+s[6]*o+s[10]*f,S=(Math.atan2(x,-h)/Hg+1)%1,p=Math.acos(Math.max(-1,Math.min(1,m)))/Math.PI,d=Math.floor(S*i.width),A=(Math.min(i.height-1,Math.floor(p*i.height))*i.width+d)*4,b=(a*n+c)*4,R=.66+.34*Math.max(0,-.34*l+.45*o+.83*f);r[b]=(i.data[A]??0)*R,r[b+1]=(i.data[A+1]??0)*R,r[b+2]=(i.data[A+2]??0)*R,r[b+3]=Math.min(255,u*n*125)}}}const rs=Math.PI*2,sa=.13,aa=.55,Hl=.56,Wg=.85,Xg=.52,qg=.23,Vl=pr.filter(i=>i.orbit>0).map(i=>Array.from({length:97},(e,t)=>{const n=t*rs/96;return new N(Math.cos(n)*i.orbit,0,Math.sin(n)*i.orbit)})),Qa=i=>new URL("solar/"+i+".webp",document.baseURI).href;function kl(){const i=document.createElement("canvas");return i.className="solar-canvas",i.setAttribute("aria-hidden","true"),i}function Yg(i,e){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d");if(!n)return null;const r=n.createRadialGradient(64,64,14,64,64,64);r.addColorStop(0,e?"#ffd0e377":"#ffce774d"),r.addColorStop(.45,e?"#ff76ac4d":"#ff9f293e"),r.addColorStop(.72,e?"#ff4c9419":"#ff6c1817"),r.addColorStop(1,e?"#ff4c9400":"#ff6c1800"),n.fillStyle=r,n.fillRect(0,0,128,128);const s=new Rd(t);s.colorSpace=Nt;const a=new Md(new bc({map:s,depthWrite:!1,toneMapped:!1}));return a.scale.setScalar(i*(e?3.3:5.3)),a}function Kg(i,e){const t=i*1.22,n=i*2.33,r=new mo(t,n,96),{position:s,uv:a}=r.attributes;if(s&&a)for(let l=0;l<s.count;l++){const u=Math.hypot(s.getX(l),s.getY(l));a.setXY(l,(u-t)/(n-t),.5)}const o=new fo({color:"#c3ad93",transparent:!0,opacity:.83,depthWrite:!1,side:dn});e.load(Qa("saturn_ring_alpha"),l=>{l.colorSpace=Nt,o.map=l,o.color.set("#fff3df"),o.needsUpdate=!0},void 0,()=>{});const c=new Cn(r,o);return c.rotation.x=-Math.PI/2,c}class Zg{world=new fd;camera=new $t(43,1,.08,390);renderer;context;canvas;bodies=pr.map((e,t)=>({body:e,index:t,position:new N,anchor:new wi,orbitAngle:e.phase,spin:e.phase,orbitSpeed:0,spinSpeed:0}));orbitLines=[];belt=null;target=new N;projected=new N;view=new N;screenBodies=[];size={width:1,height:1};zoomLevel=1;yaw=sa;elevation=aa;selected=null;framing=null;visibleCount=nn.length;secretVisible=!1;fallbackGlobe=null;revealAt=-1/0;distance=0;pixelRatio=1;constructor(e){let t=kl(),n=null,r=null;try{r=t.getContext("webgl2",{alpha:!0,antialias:!0}),r&&(n=new Gg({canvas:t,context:r}),n.setClearColor(0,0))}catch{n=null}!n&&r&&(t=kl()),this.renderer=n,this.canvas=t,this.context=n?null:t.getContext("2d"),e.prepend(t),n&&this.prepareWorld()}get available(){return this.renderer!==null||this.context!==null}get fallback(){return this.renderer===null}get atWideView(){return this.framing===null&&this.zoomLevel<=Hl+.045}showSecret(e){this.secretVisible=e,e&&this.context&&(this.fallbackGlobe??=new Vg(Qa(Vt.texture),Vt.tilt*Math.PI/180));const t=this.bodies.at(-1);t&&(t.anchor.visible=e,e||(t.orbitAngle=t.body.phase,t.spinSpeed=t.orbitSpeed=0)),e||(this.screenBodies=this.screenBodies.filter(({body:n})=>n.id!=="gaguinho"))}resize(e){this.size=e,this.camera.aspect=e.width/e.height,this.camera.updateProjectionMatrix(),this.pixelRatio=Math.min(1.5,devicePixelRatio||1),this.renderer?(this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(e.width,e.height,!1)):(this.canvas.width=Math.round(e.width*this.pixelRatio),this.canvas.height=Math.round(e.height*this.pixelRatio))}focus(e,t=!0){const n=t?e:null;if(!(e===this.selected&&n===this.framing)&&(this.selected=e,this.framing=n,this.zoomLevel=1,n===Vt.id)){const r=this.bodies.at(-1);r&&(r.spin=this.yaw-Math.PI/2),this.elevation=.23}}resetView(){this.selected=null,this.framing=null,this.yaw=sa,this.elevation=aa,this.zoomLevel=1}showBodies(e,t=!1){this.visibleCount=e,this.revealAt=e>0?performance.now():-1/0;for(const n of this.bodies)n.anchor.visible=n.body.id==="gaguinho"?this.secretVisible:n.index<e,t&&(n.orbitAngle=n.body.phase,n.spin=n.body.phase,n.orbitSpeed=0,n.spinSpeed=0);for(const[n,r]of this.orbitLines.entries())r.visible=this.orbitVisible(n);this.belt&&(this.belt.visible=e>=6)}spinBody(e){const t=this.bodies.find(n=>n.body.id===e);t&&(this.focus(e),t.spinSpeed=Wg)}moveInOrbit(e,t){const n=this.bodies.find(r=>r.body.id===e);n?.body.orbit&&(this.framing&&(this.framing=null,this.zoomLevel=1,this.yaw=sa,this.elevation=aa),n.orbitSpeed=t*Xg)}get movingByGesture(){return this.bodies.some(e=>e.orbitSpeed||e.spinSpeed)}pauseGestures(){for(const e of this.bodies)e.orbitSpeed=0,e.spinSpeed=0}rotate(e,t){const n=3.6/Math.min(this.size.width,this.size.height);this.yaw-=e*n,this.elevation=Math.max(.12,Math.min(1.53,this.elevation+t*n))}zoom(e){const t=this.framing?1.85:3.25,n=this.zoomLevel*e;return this.framing&&e<1&&n<=.65?!0:(this.zoomLevel=Math.min(t,Math.max(Hl,n)),!1)}pick(e,t=null){let n,r=1/0;for(const s of this.screenBodies){const a=Math.hypot(s.x-e.x,s.y-e.y);if(s.body.id===t&&a<=Math.max(27,s.radius+11))return t;if(a>Math.max(18,s.radius+5))continue;const o=a<=s.radius?a/s.radius:1+a/16;(o<r||o===r&&n&&s.depth<n.depth)&&(n=s,r=o)}return n?.body.id??null}screenPosition(e){return this.screenBodies.find(t=>t.body.id===e)}draw(e,t,n,r=null){const a=1-.74*(1-(n?1:Math.min(1,(performance.now()-this.revealAt)/380)))**3;for(const S of this.bodies){const{body:p,position:d,anchor:M,globe:A,index:b}=S;if(p.id==="gaguinho"?!this.secretVisible:b>=this.visibleCount)continue;p.id!==r&&(S.orbitAngle+=e*(S.orbitSpeed||(t?p.speed:0)));const R=p.id===Vt.id?qg:.17+p.speed*.54;S.spin+=e*(S.spinSpeed||(t?R:0));const T=S.orbitAngle;d.set(Math.cos(T)*p.orbit,0,Math.sin(T)*p.orbit),M.position.copy(d),M.scale.setScalar(b===this.visibleCount-1?a:1),A&&(A.rotation.y=S.spin)}const o=this.bodies.find(S=>S.body.id===this.framing),c=this.orbitLines.at(-1);c&&(c.visible=this.orbitVisible(this.orbitLines.length-1));const l=o?.position??this.view.set(0,0,0),u=Math.tan(this.camera.fov*Math.PI/360),f=Math.min(1,this.camera.aspect),h=o?o.body.radius*(o.body.id==="saturn"?2.9:1.7)/(u*f*this.zoomLevel):Math.max(48,60/this.camera.aspect)/(u*this.zoomLevel),m=this.distance===0||n?1:1-Math.exp(-e*6);this.target.lerp(l,m),this.distance+=(h-this.distance)*m,this.camera.position.set(Math.sin(this.yaw)*Math.cos(this.elevation),Math.sin(this.elevation),Math.cos(this.yaw)*Math.cos(this.elevation)).multiplyScalar(this.distance).add(this.target),this.camera.lookAt(this.target),this.camera.updateMatrixWorld();const x=this.size.height/(2*u);this.screenBodies=this.bodies.flatMap(({body:S,position:p,index:d,spin:M})=>{if(S.id==="gaguinho"?!this.secretVisible:d>=this.visibleCount)return[];const A=-this.view.copy(p).applyMatrix4(this.camera.matrixWorldInverse).z;return A<=S.radius+this.camera.near?[]:[{...this.project(p),body:S,radius:S.radius*x/A*(d===this.visibleCount-1?a:1),depth:A,spin:M}]}),this.renderer?this.renderer.render(this.world,this.camera):this.drawFallback()}project(e){return this.projected.copy(e).project(this.camera),{x:(this.projected.x+1)*this.size.width/2,y:(1-this.projected.y)*this.size.height/2}}orbitVisible(e){return e+1===nn.length?this.secretVisible&&this.framing!==Vt.id:e+1<this.visibleCount}prepareWorld(){const e=new zd;this.world.add(new Wd("#bbc3da",1.5),new Vd("#fff1d9",2.65,0,0));const t=new go(1,48,32);for(const s of this.bodies){const{body:a,anchor:o}=s,c=a.id==="sun",l=a.id===Vt.id,u=c?new fo({color:a.color}):new fl({color:a.color});a.texture&&e.load(Qa(a.texture),m=>{m.colorSpace=Nt,u.map=m,u.color.set("#ffffff"),l&&u instanceof fl&&(u.emissiveMap=m,u.emissive.set("#fff1f6"),u.emissiveIntensity=.56),u.needsUpdate=!0},void 0,()=>{});const f=new wi;f.rotation.z=a.tilt*Math.PI/180;const h=new Cn(t,u);if(h.scale.setScalar(a.radius),s.globe=h,f.add(h),o.add(f),a.id==="saturn"&&f.add(Kg(a.radius,e)),l&&(o.visible=!1),c||l){const m=Yg(a.radius,l);m&&o.add(m)}this.world.add(o)}const n=new Ka({color:"#7d9fd3",transparent:!0,opacity:.33});for(const[s,a]of Vl.entries()){const o=s+1===nn.length,c=o?new Ka({color:"#ff83b6",transparent:!0,opacity:.66}):n,l=new Ad(new Bt().setFromPoints(a),c);l.visible=!o,o&&(l.renderOrder=-1),this.orbitLines.push(l),this.world.add(l)}const r=Array.from({length:360},(s,a)=>{const o=a*2.39996,c=20.9+Math.sin(a*5.32)*.84+Math.sin(a*.68)*.53;return new N(Math.cos(o)*c,Math.sin(a*1.22)*.29,Math.sin(o)*c)});this.belt=new wd(new Bt().setFromPoints(r),new Ac({color:"#a2b3d3",size:.11,transparent:!0,opacity:.52,depthWrite:!1})),this.world.add(this.belt)}drawFallback(){const e=this.context;if(!e)return;const{width:t,height:n}=this.size;e.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0),e.clearRect(0,0,t,n),e.strokeStyle="#7d9fd351",e.lineWidth=1;for(const[s,a]of Vl.entries()){if(!this.orbitVisible(s))continue;const o=s+1===nn.length;e.strokeStyle=o?"#ff83b6a8":"#7d9fd351",e.beginPath();let c=!1;for(const l of a){const u=this.project(l);if(this.projected.z>=1||this.projected.z<-1){c=!1;continue}c?e.lineTo(u.x,u.y):e.moveTo(u.x,u.y),c=!0}e.stroke()}const r=[...this.screenBodies].sort((s,a)=>a.depth-s.depth);for(const{body:s,x:a,y:o,radius:c,spin:l}of r){const{id:u}=s;if(a+c*3<0||a-c*3>t||o+c<0||o-c>n)continue;if(u===Vt.id){const h=e.createRadialGradient(a,o,c*.72,a,o,c*1.85);if(h.addColorStop(0,"#ff76ac65"),h.addColorStop(1,"#ff4c9400"),e.fillStyle=h,e.fillRect(a-c*1.85,o-c*1.85,c*3.7,c*3.7),this.fallbackGlobe?.draw(e,a,o,c,this.camera.matrixWorld,l))continue}u==="saturn"&&(e.strokeStyle="#d8c4aeb0",e.lineWidth=Math.max(1,c*.3),e.beginPath(),e.ellipse(a,o,c*2.05,c*.57,-.26,0,rs),e.stroke()),u==="sun"&&(e.shadowColor="#ff963a9c",e.shadowBlur=Math.min(46,c*.8));const f=e.createRadialGradient(a-c*.33,o-c*.33,0,a,o,c);f.addColorStop(0,u==="sun"?"#fff4bd":"#ece4db"),f.addColorStop(.49,s.color),f.addColorStop(1,u==="sun"?"#ec681e":"#20233c"),e.fillStyle=f,e.beginPath(),e.arc(a,o,c,0,rs),e.fill(),e.shadowBlur=0,u!==Vt.id&&u===this.selected&&c>9&&(e.fillStyle="#fff7e3b8",e.beginPath(),e.arc(a+Math.sin(l)*c*.65,o-c*.16,c*.08,0,rs),e.fill())}}}function et(i){const e=document.getElementById(i);if(!e)throw new Error("Elemento ausente: "+i);return e}const ss=et("solar-explorer"),lt=et("solar-stage"),$g=et("solar-bodies"),Wc=et("solar-overview"),ja=et("solar-motion"),eo=et("solar-build"),to=et("solar-add"),vr=et("solar-signal"),gs=et("solar-camera-button"),Xc=et("solar-viewfinder"),ir=et("solar-video"),qc=et("solar-landmarks"),Yc=et("solar-hand-count"),Jg=et("solar-name"),Wl=et("solar-kind"),Qg=et("solar-description"),jg=et("solar-year"),e_=et("solar-period"),Xl=et("solar-status"),bi=et("solar-object-label"),as=et("solar-hand-aim"),er=et("solar-body-aim"),t_=Array.from(lt.querySelectorAll("[data-hand-pointer]")),Kc=matchMedia("(prefers-reduced-motion: reduce)"),$e=new Zg(lt),Zc=new lu,ur=new uu,ti=new cu,vo=new hu,$c=new du,Jc=new pu,kn=new mu({rotate:(i,e)=>$e.rotate(i,e),zoom:zi});let Pi=!Kc.matches,Ht=null,pn=nn.length,sn=!1,Oi=!1,Li={width:1,height:1},bn=[],zn=[],cn=new Map,tr=null,Zt=null,An=null,Ai=null,_s=null,dr=null,Di=null,Bi=null,ct=null;const Qc=pr.map(i=>{const e=document.createElement("button");e.type="button",e.className="solar-control",e.dataset.solarDwell="",e.hidden=i.id===Vt.id,e.setAttribute("aria-pressed","false");const t=document.createElement("span");return t.className="solar-body-dot",t.style.backgroundColor=i.color,t.setAttribute("aria-hidden","true"),e.append(t,i.name),e.addEventListener("click",()=>Pn(i.id)),$g.append(e),{id:i.id,button:e}});function Pn(i,e=!0){kn.clear(),ti.clear(),Ht=i,i?$e.focus(i,e):$e.resetView();const t=pr.find(r=>r.id===i);Wc.setAttribute("aria-pressed",String(!i));for(const r of Qc)r.button.setAttribute("aria-pressed",String(r.id===i));Jg.textContent=t?.name??"Visão geral",Wl.hidden=!t,Wl.textContent=t?.kind??"";const n=t?.description??(sn?"Use o estalo ou o botão acima para revelar o próximo astro.":"Selecione um astro para vê-lo de perto.");Qg.textContent=i==="neptune"&&!Oi?n+" Afaste a vista para procurar um sinal além da sua órbita.":n,jg.hidden=!t?.year,e_.textContent=t?.year??"",ys()}function ys(){vr.hidden=Oi||sn||pn!==nn.length||!$e.atWideView}function n_(){vr.hidden||(Oi=!0,$e.showSecret(!0),So(),Pn(Vt.id),nt("Descoberta do CACCO · "+Vt.name))}function So(){eo.setAttribute("aria-pressed",String(sn)),eo.textContent=sn?"Recomeçar montagem":"Montar do zero";const i=nn[pn];to.hidden=!sn||!i,to.textContent=i?i.id==="sun"?"Acender Sol":"Adicionar "+i.name:"";for(const[e,{id:t,button:n}]of Qc.entries())t===Vt.id?(n.hidden=!Oi,n.disabled=!Oi):n.disabled=e>=pn;ys()}function i_(){sn=!0,pn=0,Oi=!1,$e.showSecret(!1),Pi=!1,ur.clear(),$e.showBodies(pn,!0),Pn(null),So(),hr(),nt("Montagem · polegar e dedo médio para acender o Sol")}function jc(){const i=nn[pn];return!sn||!i?!1:(pn++,$e.showBodies(pn),Pn(i.id,!1),sn=pn<nn.length,So(),nt(sn?i.name+" apareceu":"Sistema Solar completo"),!0)}function hr(){const i=Pi||$e.movingByGesture;ja.textContent=i?"Pausar órbitas":"Retomar órbitas",ja.setAttribute("aria-pressed",String(!i))}function r_(){Pi||$e.movingByGesture?(Pi=!1,$e.pauseGestures()):(Pi=!0,Pn(null)),hr()}function zi(i){$e.zoom(i)&&(Pn(null),nt("Visão geral")),ys()}function Mo(){$c.clear(),Jc.clear(),Zt?.removeAttribute("data-hand-hover"),Zt=null,An=null,Ai=null,as.hidden=!0,er.hidden=!0}function s_(i,e,t,n){const r=ss.getBoundingClientRect(),s=Math.max(0,r.top),a=Math.min(innerHeight,r.bottom)-s,o=(d,M)=>Math.max(0,Math.min(1,(d/M-.12)/.76)),c=r.left+2+o(i.x,t.width)*(r.width-4),l=s+2+o(i.y,t.height)*Math.max(0,a-4);if(as.hidden=!1,as.style.transform="translate("+(c-r.left-ss.clientLeft)+"px,"+(l-r.top-ss.clientTop)+"px)",Ai&&Math.hypot(c-Ai.x,l-Ai.y)<22)return!0;Ai=null;const u=document.elementFromPoint(c,l);let f=u?.closest("button[data-solar-dwell]:enabled")??null;if(!f&&Zt&&!Zt.hidden&&!Zt.disabled){const d=Zt.getBoundingClientRect(),M=7;c>=d.left-M&&c<=d.right+M&&l>=d.top-M&&l<=d.bottom+M&&(f=Zt)}const h=lt.getBoundingClientRect(),m=!!(u&&lt.contains(u)),x=!f&&m?$e.pick({x:c-h.left-lt.clientLeft,y:l-h.top-lt.clientTop},An):null;Zt!==f&&Zt?.removeAttribute("data-hand-hover"),Zt=f,An=x;const S=Jc.update(f??x,e,n),p=String(S.progress*100)+"%";return as.style.setProperty("--hand-progress",p),f&&(f.dataset.handHover="true",f.style.setProperty("--hand-progress",p)),S.activate&&(Ai={x:c,y:l},f?f.click():x&&Pn(x),Zt?.removeAttribute("data-hand-hover"),Zt=null,An=null),(f||x)&&!(f===vr&&S.activate)&&nt(S.activate?"Selecionado":"Mantenha o indicador no alvo por 2 segundos"),!!(f||x)}function nt(i){Xl.textContent!==i&&(Xl.textContent=i)}function bs(){Di!==null&&window.clearTimeout(Di),Di=null,bn=[],zn=[],Zc.clear(),vo.clear(),cn.clear(),tr=null,Mo(),kn.clear(),ur.clear(),ti.clear(),Yc.textContent="0 mãos",Kl(qc,ir,zn,cn)}function fr(){dr?.abort(),dr=null,_s?.close(),_s=null,Xc.hidden=!0,gs.textContent="Ativar webcam",bs(),nt("Modo mouse")}function a_(i,e){const t={width:ir.videoWidth,height:ir.videoHeight};if(!t.width||!t.height)return;zn=Zc.update(i,{x:0,y:0,...t}),bn=zn.map(r=>({...r,point:{x:r.point.x*Li.width/t.width,y:r.point.y*Li.height/t.height}}));const n=zn.map(fu).filter(r=>r!==null);if(cn=ct?new Map:vo.update(n,e),Yc.textContent=bn.length===1?"1 mão":bn.length+" mãos",!ct){const r=zn.length===1?zn[0]:void 0,s=r?n[0]:void 0,a=r&&cn.get(r.id),o=ur.update(sn?s:void 0,a,e),c=ur.ready&&a!=="point";r&&c?cn.set(r.id,"snap"):r&&a==="snap"&&cn.delete(r.id);const l=r&&cn.get(r.id);l!=="point"&&Mo(),(!r||tr!==r.id||l==="point"||l==="palm"||l==="pinch")&&(tr=null);const u=bn.filter(f=>cn.get(f.id)==="pinch");if(o&&jc())ti.clear();else if(c)kn.clear(),ti.clear(),nt("Estalo pronto · solte o dedo médio");else{kn.update(u,Li);const f=ti.update(Ht&&Ht!=="sun"&&l==="palm"?s:void 0,e,t.width);if(Ht&&f&&($e.moveInOrbit(Ht,f),hr()),r&&l==="fist"&&tr!==r.id&&(tr=r.id,Ht&&($e.spinBody(Ht),ys(),hr())),r&&l==="point"){const h=r.joints[8];if(s?.pose==="point"&&h){const m=$c.update(r.id,h,Math.max(t.width,t.height),e);s_(m,r.id,t,e)||nt("Indicador pronto · aponte para um astro ou botão")}}else kn.mode==="two"?nt("Duas pinças prontas · afaste ou aproxime as mãos"):kn.mode==="one"?nt("Pinça pronta · arraste para girar a vista"):l==="fist"&&Ht?nt("Punho confirmado · rotação no próprio eixo"):l==="fist-ready"&&Ht?nt("Punho pronto · mantenha a mão fechada"):ti.active?nt("Órbita ao redor do Sol ativada"):bn.length?nt(Ht&&l==="palm"?Ht==="sun"?"Feche a mão para girar o Sol":"Palma pronta · mova a mão de um lado para o outro":sn?"Estale para revelar "+nn[pn]?.name:Ht?"Feche a mão para girar ou abra a palma para orbitar":"Estenda só o indicador para apontar"):nt("Mostre a mão inteira para a webcam")}}Kl(qc,ir,zn,cn),Di!==null&&window.clearTimeout(Di),Di=window.setTimeout(()=>{bs(),_s&&nt("Mostre a mão inteira para a webcam")},Math.max(420,i.inferenceMs*2.5))}function o_(i){i.kind==="recovering"?(bs(),nt("Reconectando a webcam…")):i.kind==="error"&&(fr(),nt(Yl(i.error)))}async function l_(){if(dr){fr();return}const i=new AbortController;dr=i,gs.textContent="Cancelar",nt("Preparando webcam…");try{const e=await ou(ir,i.signal,{update:t=>{i.signal.aborted||o_(t)},landmarks:(t,n)=>{i.signal.aborted||a_(t,n)}});if(i.signal.aborted){e.close();return}_s=e,Xc.hidden=!1,gs.textContent="Desligar webcam",nt("Mostre a mão inteira para a webcam"),e.setActive(!0)}catch(e){i.signal.aborted||(fr(),nt(Yl(e)))}}function eu(i){const e=lt.getBoundingClientRect();return{x:i.clientX-e.left-lt.clientLeft,y:i.clientY-e.top-lt.clientTop}}lt.addEventListener("pointerdown",i=>{if(i.button!==0||ct||i.target===vr)return;const e=eu(i);ct={id:i.pointerId,start:e,point:e,moved:!1,body:$e.pick(e)},lt.setPointerCapture(i.pointerId),kn.clear(),ur.clear(),ti.clear(),Mo()});lt.addEventListener("pointermove",i=>{if(ct&&i.pointerId!==ct.id)return;const e=eu(i);Bi=e,ct&&(!ct.moved&&Math.hypot(e.x-ct.start.x,e.y-ct.start.y)<5||($e.rotate(e.x-ct.point.x,e.y-ct.point.y),ct.point=e,ct.moved=!0))});function Eo(i){!ct||i.pointerId!==ct.id||(i.type==="pointerup"&&!ct.moved&&ct.body&&Pn(ct.body),i.type!=="pointerup"&&(Bi=null),ct=null,kn.clear(),vo.clear())}lt.addEventListener("pointerup",Eo);lt.addEventListener("pointercancel",Eo);lt.addEventListener("lostpointercapture",Eo);lt.addEventListener("pointerleave",()=>{Bi=null});lt.addEventListener("wheel",i=>{i.preventDefault(),zi(i.deltaY>0?.91:1.1)},{passive:!1});lt.addEventListener("keydown",i=>{if(i.target===lt){switch(i.key){case"ArrowLeft":$e.rotate(-18,0);break;case"ArrowRight":$e.rotate(18,0);break;case"ArrowUp":$e.rotate(0,-18);break;case"ArrowDown":$e.rotate(0,18);break;case"+":zi(1.15);break;case"-":zi(1/1.15);break;default:return}i.preventDefault()}});Wc.addEventListener("click",()=>Pn(null));vr.addEventListener("click",n_);eo.addEventListener("click",i_);to.addEventListener("click",()=>jc());et("solar-zoom-in").addEventListener("click",()=>zi(1.18));et("solar-zoom-out").addEventListener("click",()=>zi(1/1.18));ja.addEventListener("click",r_);hr();gs.addEventListener("click",()=>{l_()});et("solar-fullscreen").addEventListener("click",async()=>{try{await ss.requestFullscreen()}catch{nt("O navegador não abriu em tela cheia.")}});et("solar-exit").addEventListener("click",()=>{document.fullscreenElement&&document.exitFullscreen()});window.addEventListener("pagehide",fr);document.addEventListener("visibilitychange",()=>{document.hidden&&dr&&fr()});new ResizeObserver(()=>{const{clientWidth:i,clientHeight:e}=lt;!i||!e||(Li={width:i,height:e},$e.resize(Li),bs(),Bi=null)}).observe(lt);function c_(){for(const[s,a]of t_.entries()){const o=bn[s],c=!!(o&&cn.get(o.id)==="pinch");a.hidden=!c,!(!o||!c)&&(a.style.transform="translate("+o.point.x+"px,"+o.point.y+"px)",a.dataset.pinched=String(o.pinched))}const i=An??(!bn.length&&!ct&&Bi?$e.pick(Bi):null),e=i&&(i!==Ht||i===An)?$e.screenPosition(i):null,t=e?pr.find(s=>s.id===i):null;if(lt.dataset.hover=String(!!i&&!bn.length),bi.hidden=!e||!t,er.hidden=!An||!e,An&&e){const s=Math.max(46,e.radius*2+15);er.style.width=s+"px",er.style.height=s+"px",er.style.transform="translate("+(e.x-s/2)+"px,"+(e.y-s/2)+"px)"}if(!e||!t)return;bi.textContent!==t.name&&(bi.textContent=t.name);const n=Math.min(Li.width-bi.offsetWidth-6,Math.max(6,e.x-bi.offsetWidth/2)),r=Math.max(6,e.y-e.radius-29);bi.style.transform="translate("+n+"px,"+r+"px)"}let ql=performance.now();function tu(i){$e.draw(Math.min(.06,Math.max(0,(i-ql)/1e3)),Pi,Kc.matches,An),ql=i,c_(),requestAnimationFrame(tu)}et("solar-fallback").hidden=!$e.fallback||!$e.available;$e.available?requestAnimationFrame(tu):nt("O navegador não conseguiu desenhar a cena.");

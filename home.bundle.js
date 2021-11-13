(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(t,a,i){"use strict";i.r(a);var e=i(55),o=i(6),n=i(51),s={components:{Icon:o.a,Dots:n.a},methods:{mask:(t,a)=>{const i=a.createLinearGradient(0,0,t.width,0);i.addColorStop(0,"white"),i.addColorStop(.3,"white"),i.addColorStop(1,"transparent"),a.fillStyle=i,a.fillRect(0,0,t.width,t.height),a.fillStyle="white"}}},d=(i(70),i(0)),r=Object(d.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"slide",attrs:{id:"landing"}},[a("Dots",{attrs:{mask:this.mask}}),this._m(0),a("div",{staticClass:"monster",attrs:{"fade-in":""}}),this._m(1),a("div",{staticClass:"social",attrs:{"fade-in":""}},[a("a",{attrs:{href:"https://discord.gg/sucyFUs","aria-label":"Link to Discord guild"}},[a("Icon",[this._v("discord")])],1),a("a",{attrs:{href:"https://www.linkedin.com/company/everfall-games","aria-label":"Link to Linkedin"}},[a("Icon",[this._v("linkedin")])],1)])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"background octagons",attrs:{"fade-in":""}},[a("div",[a("div",{staticClass:"background octagon"}),a("div",{staticClass:"background octagon reverse"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"content",attrs:{"fade-in":""}},[a("div",{staticClass:"heading"},[a("h1",[this._v("We create")]),a("h1",{staticClass:"outline"},[this._v("The unique")])]),a("p",[this._v('"Our focus at '),a("b",[this._v("Everfall")]),this._v(" is to create visually stunning and immersive single-player games for both desktop systems and consoles. At "),a("b",[this._v("Everfall")]),this._v(', we highly value the art of making games while equally bringing innovative and unique mechanics that add genuine interaction between our players and the environments we craft." -Ricardo Valdes, Founder')])])}],!1,null,"7c9bf799",null).exports,l=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"background octagons",attrs:{"fade-in":""}},[a("div",[a("div",{staticClass:"background octagon"}),a("div",{staticClass:"background octagon reverse"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"content",attrs:{"fade-in":""}},[a("h1",[this._v("Memorable")]),a("h1",{staticClass:"outline"},[this._v("Experiences")]),a("p",[this._v("We want to become a main distributor of single-player, AAA quality games and with the launch of LB-2 we hope to gain valuable experience to help us transition to more ambitious projects.")]),a("div",{staticClass:"people"},[a("div",[a("img",{attrs:{src:i(72),alt:"Ricardo portrait"}}),a("div",[a("h5",[this._v("Ricardo Valdes")]),a("h6",[this._v("Co-Founder")])])]),a("div",[a("img",{attrs:{src:i(73),alt:"Ricardo portrait"}}),a("div",[a("h5",[this._v("Pedro Civa")]),a("h6",[this._v("Co-Founder")])])])])])}],p={components:{Icon:o.a,Dots:n.a},methods:{mask(t,a){const i=a.createLinearGradient(0,0,t.width,-t.height/2);i.addColorStop(0,"white"),i.addColorStop(.5,"transparent"),a.fillStyle=i,a.fillRect(0,0,t.width,t.height),a.fillStyle="white"}},mounted(){this.$refs.backgroundVideo.play()}},c=(i(74),Object(d.a)(p,(function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"slide",attrs:{id:"about"}},[this._m(0),a("div",{staticClass:"monster",attrs:{"fade-in":""}}),a("Dots",{attrs:{mask:this.mask}}),this._m(1)],1)}),l,!1,null,"2589b6ba",null).exports),h={components:{Scroller:e.a,Landing:r,About:c}},b=Object(d.a)(h,(function(){var t=this.$createElement,a=this._self._c||t;return a("Scroller",{attrs:{paths:["/","/#about"]}},[a("Landing")],1)}),[],!1,null,null,null);a.default=b.exports},50:function(t,a,i){var e=i(54);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(2).default)("693f7196",e,!0,{})},51:function(t,a,i){"use strict";i(52);var e={props:{mask:{type:Function}},data:()=>({renderInterval:null,dimensions:{x:0,y:0}}),methods:{resize(){this.$refs.canvas.width=window.innerWidth,this.$refs.canvas.height=window.innerHeight,this.offset=25+Math.max(window.innerWidth,window.innerHeight)/40,Object.assign(this.dimensions,{x:Math.ceil(window.innerWidth/this.offset)+2,y:Math.ceil(window.innerHeight/this.offset)+2}),context.fillStyle="white"}},mounted(){const{canvas:t}=this.$refs,{dimensions:a}=this,i=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight,i.fillStyle="white",window.context=i;this.offset=25+Math.max(window.innerWidth,window.innerHeight)/40,Object.assign(this.dimensions,{x:Math.ceil(window.innerWidth/this.offset)+2,y:Math.ceil(window.innerHeight/this.offset)+2}),window.addEventListener("resize",this.resize);let e=0;Math.random();const o=()=>{i.clearRect(0,0,t.width,t.height);for(let t=a.y;t--;){i.beginPath();for(let o=a.x;o--;){const n=o/a.x,s=t/a.y,d=e/100,r=4*(Math.floor(10*s)%3+1),l=Math.PI/2,p=Math.exp(Math.sin((n+s+d)*r*l))/4+.2;i.arc(Math.round((this.offset-4)*o),Math.round((this.offset-4)*t-50),4*p,0,2*Math.PI)}i.fill()}this.mask&&(i.globalCompositeOperation="destination-in",this.mask(t,i),i.globalCompositeOperation="source-over"),100===e&&(e=0),e+=1};o(),this.renderInterval=setInterval(o,1e3/30)},destroyed(){clearInterval(this.renderInterval),window.removeEventListener("resize",this.resize)}},o=(i(53),i(0)),n=Object(o.a)(e,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"dots"},[a("canvas",{ref:"canvas"})])}],!1,null,"3c8446c4",null);a.a=n.exports},52:function(t,a,i){(a=i(1)(!1)).push([t.i,"@keyframes dotScale{0%{transform:scale(1)}50%{transform:scale(0.5)}100%{transform:scale(1)}}.column{display:inline-block;width:10vmin;transform:translateY(-30px)}.row{height:6px;width:6px;background-color:#fff;clip-path:circle(50% at 50% 50%);margin-left:calc(10vmin - 6px);margin-top:calc(10vmin - 6px);transform:scale(1);animation:dotScale linear infinite 3s}",""]),t.exports=a},53:function(t,a,i){"use strict";i(50)},54:function(t,a,i){(a=i(1)(!1)).push([t.i,".dots[data-v-3c8446c4]{position:absolute;overflow:hidden;width:100%;height:100%;top:0;left:0;opacity:.3;pointer-events:none}canvas[data-v-3c8446c4]{width:100vw;height:100vh;top:100px;left:0}",""]),t.exports=a},55:function(t,a,i){"use strict";var e={props:{paths:{type:Array,required:!0}},data:()=>({snapPoints:[],lastPos:0,touchstartPos:null}),computed:{slide(){return this.$store.state.slide},path(){return this.$route.fullPath}},methods:{setSnapPoints(){const{scroller:t}=this.$refs;this.snapPoints=[];for(let a=0;a<Math.floor(t.clientHeight/t.children[0].clientHeight);a++)this.snapPoints.push(a*t.children[0].clientHeight+1)},move(t){this.slide+t<0||this.slide+t>this.snapPoints.length-1||(this.isScrolling=!0,this.$store.commit("setSlide",this.slide+t),this.$router.push(this.paths[this.slide]),setTimeout(()=>{this.isScrolling=!1},350),this.touchstartPos=null)},wheel(t){if(t.preventDefault(),this.isScrolling)return;const a=t.deltaY>0?1:-1;this.move(a),this.lastPos=window.scrollY},resize(){this.setSnapPoints(),window.scrollTo({top:this.snapPoints[this.slide]})},touchstart(t){const[a]=t.touches;this.touchstartPos=a.screenY},touchmove({touches:t}){if(null===this.touchstartPos)return;const[a]=t;a.screenY-this.touchstartPos>100&&this.move(-1),a.screenY-this.touchstartPos<-100&&this.move(1)},touchend(){this.touchstartPos=null},scroll(t){}},watch:{slide(t){window.scrollTo({top:this.snapPoints[t],behavior:"smooth"})}},mounted(){this.setSnapPoints(),this.lastPos=window.scrollY,requestAnimationFrame(()=>{this.$store.commit("setSlide",this.paths.indexOf(this.path)),/\#/.test(this.path)&&document.querySelector(this.path.replace("/","")).scrollIntoView()}),window.addEventListener("resize",this.resize),window.addEventListener("scroll",this.scroll)},destroyed(){window.removeEventListener("resize",this.resize)}},o=i(0),n=Object(o.a)(e,(function(){var t=this.$createElement;return(this._self._c||t)("section",{ref:"scroller",staticClass:"scroller",on:{touchstart:this.touchstart,touchmove:this.touchmove,touchend:this.touchend,wheel:this.wheel}},[this._t("default")],2)}),[],!1,null,null,null);a.a=n.exports},56:function(t,a,i){"use strict";i.r(a),a.default=i.p+"89c603e8a35dfa759193738422e0a141.svg"},58:function(t,a,i){t.exports=i.p+"7686410818db17bffd798b225e8f264b.webp"},59:function(t,a,i){var e=i(71);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(2).default)("5bf71c9e",e,!0,{})},60:function(t,a,i){var e=i(75);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,i(2).default)("3ca06d2c",e,!0,{})},70:function(t,a,i){"use strict";i(59)},71:function(t,a,i){var e=i(1),o=i(15),n=i(56),s=i(58);a=e(!1);var d=o(n),r=o(s);a.push([t.i,'@keyframes fade-in-data-v-7c9bf799{0%{opacity:0}100%{opacity:1}}*[fade-in][data-v-7c9bf799]{animation:fade-in-data-v-7c9bf799 1s}.slide[data-v-7c9bf799]{display:flex;flex-direction:column;height:100vh;justify-content:center;padding-top:100px;position:relative}.slide[data-v-7c9bf799]::before,.slide[data-v-7c9bf799]::after{height:80px;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);width:100%;position:absolute;content:"";opacity:.6}.slide[data-v-7c9bf799]::before{top:0;left:0}.slide[data-v-7c9bf799]::after{bottom:0;left:0;transform:rotate(180deg)}.slide .background[data-v-7c9bf799]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.slide .background video[data-v-7c9bf799],.slide .background img[data-v-7c9bf799]{width:100%;height:100%;object-fit:cover}.slide .content[data-v-7c9bf799],.slide .social[data-v-7c9bf799]{position:relative;z-index:4}.slide .bar[data-v-7c9bf799]{z-index:4}.slide h1[data-v-7c9bf799],.slide h3[data-v-7c9bf799]{text-transform:uppercase;font-size:110px;letter-spacing:5px;margin-bottom:-30px}.slide h1.outline[data-v-7c9bf799],.slide h3.outline[data-v-7c9bf799]{font-family:"MADETOMMY OUTLINE",sans-serif}.slide h3[data-v-7c9bf799]{font-size:40px;margin-bottom:10px;font-weight:600;letter-spacing:8px}.slide p[data-v-7c9bf799]{font-weight:200;font-size:20px;max-width:800px;letter-spacing:.5px;margin-top:70px;line-height:45px}@media(max-width: 1400px),(max-height: 900px){.slide[data-v-7c9bf799]{min-height:550px}.slide h1[data-v-7c9bf799]{font-size:80px;margin-bottom:-18px}.slide p[data-v-7c9bf799]{font-size:17px;margin-top:40px;line-height:40px;max-width:700px}.slide h3[data-v-7c9bf799]{font-size:30px;margin-bottom:5px;letter-spacing:6px}}@media(max-width: 900px),(max-height: 800px){.slide h1[data-v-7c9bf799]{font-size:60px;margin-bottom:-10px}.slide p[data-v-7c9bf799]{line-height:30px;font-size:16px;max-width:600px}.slide h3[data-v-7c9bf799]{font-size:25px;margin-bottom:2px;letter-spacing:4px}}@media(max-width: 700px),(max-height: 700px){.slide h1[data-v-7c9bf799]{font-size:50px;margin-bottom:-10px}.slide h3[data-v-7c9bf799]{font-size:20px;margin-bottom:2px;letter-spacing:3px}}@media(max-width: 500px),(max-height: 500px){.slide h1[data-v-7c9bf799]{font-size:30px}.slide p[data-v-7c9bf799]{font-size:14px;margin-top:25px}}@media(max-width: 320px),(max-height: 600px){.slide h1[data-v-7c9bf799]{font-size:25px;line-height:40px}}#home[data-v-7c9bf799]{overflow:hidden;max-width:100vw;width:100vw}@keyframes spin-data-v-7c9bf799{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.background.octagons[data-v-7c9bf799]{z-index:1;overflow:hidden}.background.octagons>div[data-v-7c9bf799]{position:absolute;top:0;left:0;width:100%;height:100%;transform:translateX(22vmin)}.background.octagon[data-v-7c9bf799]{background-image:url('+d+");width:95vmin;height:95vmin;background-size:contain;z-index:1;background-repeat:no-repeat;animation:spin-data-v-7c9bf799 15s linear infinite;background-position:center center;right:0vmin;left:auto;top:auto;bottom:0;transform-origin:center}.background.octagon.reverse[data-v-7c9bf799]{animation-direction:reverse;animation-duration:30s;animation-delay:-5s}@keyframes slideIn-data-v-7c9bf799{0%{transform:translateX(-100%)}100%{transform:translateX(0)}}.slide[data-v-7c9bf799]{background-color:#000}.slide .monster[data-v-7c9bf799]{background-image:url("+r+');position:absolute;bottom:0;right:0;width:90%;height:95%;background-size:contain;background-position:bottom right;background-repeat:no-repeat;z-index:1}.slide .content[data-v-7c9bf799]{border-left:10px solid var(--border);padding-left:150px;padding-right:60px;position:relative;margin-top:auto;position:relative;top:10px;display:flex;flex-direction:column;align-items:flex-start}.slide .social[data-v-7c9bf799]{fill:#fff;margin-left:160px;justify-self:flex-end;margin-top:auto;margin-bottom:70px;position:relative}.slide .social a[data-v-7c9bf799]{cursor:pointer;margin-right:26px;height:21px;display:inline-block;padding:2px;margin-left:-2px}.slide .social svg[data-v-7c9bf799]{height:inherit}@keyframes blink-data-v-7c9bf799{0%{opacity:.2}20%{opacity:.4}40%{opacity:.2}70%{opacity:.3}100%{opacity:.2}}@keyframes flicker-data-v-7c9bf799{0%{opacity:0}7%{opacity:0}8%{opacity:.3}10%{opacity:.1}14%{opacity:.1}15%{opacity:.3}17%{opacity:0}22%{opacity:0}30%{opacity:1}41%{opacity:1}42%{opacity:.9}50%{opacity:1}58%{opacity:1}59%{opacity:.9}60%{opacity:1}68%{opacity:1}69%{opacity:.9}70%{opacity:1}}.slide .heading[data-v-7c9bf799]{position:relative;display:flex;flex-direction:column}.slide .heading[data-v-7c9bf799]::before{content:"";position:absolute;background:radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 20%, transparent 70%);width:200%;height:300%;top:-100%;left:-50%;animation:blink-data-v-7c9bf799 linear infinite .4s;z-index:-1;pointer-events:none}@media(min-width: 1400px),(min-height: 900px){.slide h1[data-v-7c9bf799]:first-child{margin-top:-32px}.slide p[data-v-7c9bf799]{margin-bottom:-10px}}@media(max-width: 1400px),(max-height: 900px){.slide .content[data-v-7c9bf799]{padding-left:110px}.slide .social[data-v-7c9bf799]{margin-left:120px}.slide h1[data-v-7c9bf799]:first-child{margin-top:-22px}}@media(max-width: 900px),(max-height: 800px){.slide .content[data-v-7c9bf799]{padding:0 40px;border-width:6px}.slide .social[data-v-7c9bf799]{margin-left:45px}.slide h1[data-v-7c9bf799]:first-child{margin-top:-18px}}@media(max-width: 700px),(max-height: 700px){.slide h1[data-v-7c9bf799]:first-child{margin-top:-10px}}',""]),t.exports=a},72:function(t,a,i){t.exports=i.p+"8ada8693066cbb6dc5f8ecfa8d7eaab1.png"},73:function(t,a,i){t.exports=i.p+"ea4a99b2f1004c7fe6ede50169c15630.png"},74:function(t,a,i){"use strict";i(60)},75:function(t,a,i){var e=i(1),o=i(15),n=i(56),s=i(76);a=e(!1);var d=o(n),r=o(s);a.push([t.i,'@keyframes fade-in-data-v-2589b6ba{0%{opacity:0}100%{opacity:1}}*[fade-in][data-v-2589b6ba]{animation:fade-in-data-v-2589b6ba 1s}.slide[data-v-2589b6ba]{display:flex;flex-direction:column;height:100vh;justify-content:center;padding-top:100px;position:relative}.slide[data-v-2589b6ba]::before,.slide[data-v-2589b6ba]::after{height:80px;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);width:100%;position:absolute;content:"";opacity:.6}.slide[data-v-2589b6ba]::before{top:0;left:0}.slide[data-v-2589b6ba]::after{bottom:0;left:0;transform:rotate(180deg)}.slide .background[data-v-2589b6ba]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.slide .background video[data-v-2589b6ba],.slide .background img[data-v-2589b6ba]{width:100%;height:100%;object-fit:cover}.slide .content[data-v-2589b6ba],.slide .social[data-v-2589b6ba]{position:relative;z-index:4}.slide .bar[data-v-2589b6ba]{z-index:4}.slide h1[data-v-2589b6ba],.slide h3[data-v-2589b6ba]{text-transform:uppercase;font-size:110px;letter-spacing:5px;margin-bottom:-30px}.slide h1.outline[data-v-2589b6ba],.slide h3.outline[data-v-2589b6ba]{font-family:"MADETOMMY OUTLINE",sans-serif}.slide h3[data-v-2589b6ba]{font-size:40px;margin-bottom:10px;font-weight:600;letter-spacing:8px}.slide p[data-v-2589b6ba]{font-weight:200;font-size:20px;max-width:800px;letter-spacing:.5px;margin-top:70px;line-height:45px}@media(max-width: 1400px),(max-height: 900px){.slide[data-v-2589b6ba]{min-height:550px}.slide h1[data-v-2589b6ba]{font-size:80px;margin-bottom:-18px}.slide p[data-v-2589b6ba]{font-size:17px;margin-top:40px;line-height:40px;max-width:700px}.slide h3[data-v-2589b6ba]{font-size:30px;margin-bottom:5px;letter-spacing:6px}}@media(max-width: 900px),(max-height: 800px){.slide h1[data-v-2589b6ba]{font-size:60px;margin-bottom:-10px}.slide p[data-v-2589b6ba]{line-height:30px;font-size:16px;max-width:600px}.slide h3[data-v-2589b6ba]{font-size:25px;margin-bottom:2px;letter-spacing:4px}}@media(max-width: 700px),(max-height: 700px){.slide h1[data-v-2589b6ba]{font-size:50px;margin-bottom:-10px}.slide h3[data-v-2589b6ba]{font-size:20px;margin-bottom:2px;letter-spacing:3px}}@media(max-width: 500px),(max-height: 500px){.slide h1[data-v-2589b6ba]{font-size:30px}.slide p[data-v-2589b6ba]{font-size:14px;margin-top:25px}}@media(max-width: 320px),(max-height: 600px){.slide h1[data-v-2589b6ba]{font-size:25px;line-height:40px}}@keyframes slideIn-data-v-2589b6ba{0%{transform:translateX(100%)}100%{transform:translateX(0)}}@keyframes spin-data-v-2589b6ba{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.background.octagons[data-v-2589b6ba]{z-index:1;overflow:hidden}.background.octagons>div[data-v-2589b6ba]{position:absolute;top:0;left:0;width:100%;height:100%;transform:translateX(-5vmin) translateY(35vmin)}.background.octagon[data-v-2589b6ba]{background-image:url('+d+");width:80vmin;height:80vmin;background-size:contain;z-index:1;background-repeat:no-repeat;animation:spin-data-v-2589b6ba 15s linear infinite;background-position:center center;left:0;bottom:0;transform-origin:center}.background.octagon.reverse[data-v-2589b6ba]{animation-direction:reverse;animation-duration:30s;animation-delay:-5s}.monster[data-v-2589b6ba]{background-image:url("+r+");position:absolute;bottom:0;left:-10%;width:100%;height:70%;background-size:contain;background-position:bottom left;background-repeat:no-repeat;z-index:1}.content[data-v-2589b6ba]{text-align:left;margin-left:auto;border-right:10px solid var(--border);padding-right:150px;padding-left:60px}.slide[data-v-2589b6ba]{background-color:#000}.background>video[data-v-2589b6ba]{opacity:.7}.people[data-v-2589b6ba]{display:flex;margin-top:50px}.people div[data-v-2589b6ba]{display:flex;margin-right:50px}.people div div[data-v-2589b6ba]{flex-direction:column;justify-content:center;margin:0 20px}.people img[data-v-2589b6ba]{width:60px;height:60px;clip-path:circle(50% at 50% 50%);object-fit:cover;object-position:top}.people h5[data-v-2589b6ba]{text-transform:uppercase;letter-spacing:3px;margin-bottom:3px;font-size:14px}.people h6[data-v-2589b6ba]{font-weight:400;letter-spacing:1px;font-size:14px}@media(min-width: 1400px),(min-height: 900px){h1[data-v-2589b6ba]:first-child{margin-top:-32px}p[data-v-2589b6ba]{margin-bottom:-10px}}@media(max-width: 1400px),(max-height: 900px){.content[data-v-2589b6ba]{padding-right:110px}.social[data-v-2589b6ba]{margin-left:120px}h1[data-v-2589b6ba]:first-child{margin-top:-22px}}@media(max-width: 900px),(max-height: 800px){.content[data-v-2589b6ba]{padding:0 40px;border-width:6px}.social[data-v-2589b6ba]{margin-left:45px}h1[data-v-2589b6ba]:first-child{margin-top:-18px}.people img[data-v-2589b6ba]{width:50px;height:50px}.people h5[data-v-2589b6ba]{letter-spacing:3px;font-size:13px}.people h6[data-v-2589b6ba]{letter-spacing:1px;font-size:13px}}@media(max-width: 700px){.people[data-v-2589b6ba]{flex-direction:column}.people div[data-v-2589b6ba]{margin-right:0}.people div[data-v-2589b6ba]:first-of-type{margin-bottom:20px}}@media(max-width: 700px),(max-height: 700px){h1[data-v-2589b6ba]:first-child{margin-top:-10px}.people img[data-v-2589b6ba]{width:50px;height:50px}.people h5[data-v-2589b6ba]{letter-spacing:3px;font-size:12px}.people h6[data-v-2589b6ba]{letter-spacing:1px;font-size:12px}}@media(max-width: 500px),(max-height: 600px){.people img[data-v-2589b6ba]{width:40px;height:40px}.people h5[data-v-2589b6ba]{letter-spacing:3px;font-size:10px}.people h6[data-v-2589b6ba]{letter-spacing:1px;font-size:10px}}",""]),t.exports=a},76:function(t,a,i){t.exports=i.p+"724de773db73293a01dcde1847833243.webp"}}]);
//# sourceMappingURL=home.bundle.js.map
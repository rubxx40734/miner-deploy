(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb3b841a"],{2032:function(t,e,a){"use strict";a("4d64")},"4d64":function(t,e,a){},"7a74":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["g"])('<div class="nav bg-setting"><div class="container"><div class="row"><div class="col-md-2"><h1 class="mt-3 text-light">後台管理</h1></div></div></div></div>',1),o={class:"container mt-5"},l={class:"container mt-5"},s={class:"table table-sm"},i=Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[Object(c["f"])("th",{scope:"col",row:"2"},"PROJECT Name"),Object(c["f"])("th",{scope:"col"},"Token"),Object(c["f"])("th",{scope:"col"},"Fees"),Object(c["f"])("th",{scope:"col",class:"d-flex align-items-center"},[Object(c["f"])("div",{class:"sort d-flex flex-column me-2"},[Object(c["f"])("button",{type:"button",class:"btn btn-sm btn-light mb-1"}),Object(c["f"])("button",{type:"button",class:"btn btn-sm btn-light"})]),Object(c["h"])("Age")]),Object(c["f"])("th",{scope:"col"},"LaunchDate"),Object(c["f"])("th",{scope:"col"},"Daily ROI"),Object(c["f"])("th",{scope:"col"},"Risk Warning"),Object(c["f"])("th",{scope:"col"},"操作")])],-1),d={scope:"row"},r=["href"],b={class:""},p=["href"],m=["src"],u={class:"text-success"},f={class:"text-warning"},O={class:"text-success"},j={class:"text-danger"},h=["onClick"],g=["onClick"],y={class:"modal",tabindex:"-1",ref:"delmodal"},v={class:"modal-dialog"},x={class:"modal-content"},U=Object(c["f"])("div",{class:"modal-header"},[Object(c["f"])("h5",{class:"modal-title bg-light"},"修改資料"),Object(c["f"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),C={class:"modal-body"},k={class:"input-group mb-3"},A=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"miner",-1),w={class:"input-group mb-3"},V=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"minerUrl",-1),D={class:"input-group mb-3"},I=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"coin",-1),M={class:"input-group mb-3"},L=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"coinHref",-1),H={class:"input-group mb-3"},_=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"coinImgUrl",-1),$={class:"input-group mb-3"},E=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"fees",-1),J={class:"input-group mb-3"},R=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"age",-1),S={class:"input-group mb-3"},T=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"LaunchDate",-1),z={class:"input-group mb-3"},B=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"daily",-1),F={class:"input-group mb-3"},N=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"risk",-1),P=Object(c["h"])("> "),W={class:"modal-footer"},q=Object(c["f"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function G(t,e,a,G,K,Q){const X=Object(c["w"])("AddminerVue");return Object(c["r"])(),Object(c["e"])(c["a"],null,[n,Object(c["f"])("div",o,[Object(c["f"])("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...t)=>Q.addminer&&Q.addminer(...t))},"新增miner")]),Object(c["i"])(X,{ref:"modal",onEmitUpdate:Q.init},null,8,["onEmitUpdate"]),Object(c["f"])("div",l,[Object(c["f"])("table",s,[i,Object(c["f"])("tbody",null,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["v"])(K.miners,t=>(Object(c["r"])(),Object(c["e"])("tr",{key:t._id},[Object(c["f"])("th",d,[Object(c["f"])("a",{href:t.contentUrl,target:"_blank"},Object(c["y"])(t.content),9,r)]),Object(c["f"])("td",b,[Object(c["f"])("a",{href:t.coinHref,target:"_blank"},[Object(c["f"])("img",{src:t.coinImgUrl,alt:"",class:"icon me-2"},null,8,m)],8,p),Object(c["h"])(Object(c["y"])(t.coin),1)]),Object(c["f"])("td",u,Object(c["y"])(t.fees),1),Object(c["f"])("td",f,Object(c["y"])(Q.totalday(t.age))+"d",1),Object(c["f"])("td",O,Object(c["y"])(t.LaunchDate),1),Object(c["f"])("td",j,Object(c["y"])(t.daily)+"%",1),Object(c["f"])("td",null,Object(c["y"])(t.risk),1),Object(c["f"])("td",null,[Object(c["f"])("button",{type:"button",class:"btn btn-warning",onClick:e=>Q.putminer(t._id,t)},"編輯",8,h)]),Object(c["f"])("td",null,[Object(c["f"])("button",{type:"button",class:"btn btn-danger",onClick:e=>Q.deleteMiner(t._id)},"刪除",8,g)])]))),128))])])]),Object(c["f"])("div",y,[Object(c["f"])("div",v,[Object(c["f"])("div",x,[U,Object(c["f"])("div",C,[Object(c["f"])("div",k,[A,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"miner","onUpdate:modelValue":e[1]||(e[1]=t=>K.tempminer.content=t)},null,512),[[c["A"],K.tempminer.content]])]),Object(c["f"])("div",w,[V,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"minerUrl","onUpdate:modelValue":e[2]||(e[2]=t=>K.tempminer.contentUrl=t)},null,512),[[c["A"],K.tempminer.contentUrl]])]),Object(c["f"])("div",D,[I,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"coin","onUpdate:modelValue":e[3]||(e[3]=t=>K.tempminer.coin=t)},null,512),[[c["A"],K.tempminer.coin]])]),Object(c["f"])("div",M,[L,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"coinHref","onUpdate:modelValue":e[4]||(e[4]=t=>K.tempminer.coinHref=t)},null,512),[[c["A"],K.tempminer.coinHref]])]),Object(c["f"])("div",H,[_,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"coinImgUrl","onUpdate:modelValue":e[5]||(e[5]=t=>K.tempminer.coinImgUrl=t)},null,512),[[c["A"],K.tempminer.coinImgUrl]])]),Object(c["f"])("div",$,[E,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"fees","onUpdate:modelValue":e[6]||(e[6]=t=>K.tempminer.fees=t)},null,512),[[c["A"],K.tempminer.fees]])]),Object(c["f"])("div",J,[R,Object(c["C"])(Object(c["f"])("input",{type:"date",class:"form-control",placeholder:"age","onUpdate:modelValue":e[7]||(e[7]=t=>K.tempminer.age=t)},null,512),[[c["A"],K.tempminer.age]])]),Object(c["f"])("div",S,[T,Object(c["C"])(Object(c["f"])("input",{type:"date",class:"form-control",placeholder:"LaunchDate","onUpdate:modelValue":e[8]||(e[8]=t=>K.tempminer.LaunchDate=t)},null,512),[[c["A"],K.tempminer.LaunchDate]])]),Object(c["f"])("div",z,[B,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"daily","onUpdate:modelValue":e[9]||(e[9]=t=>K.tempminer.daily=t)},null,512),[[c["A"],K.tempminer.daily]])]),Object(c["f"])("div",F,[N,Object(c["C"])(Object(c["f"])("textarea",{class:"form-control",placeholder:"risk","onUpdate:modelValue":e[10]||(e[10]=t=>K.tempminer.risk=t)},null,512),[[c["A"],K.tempminer.risk]]),P])]),Object(c["f"])("div",W,[q,Object(c["f"])("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=t=>Q.editMiner(K.tempminer._id))},"Save changes")])])])],512)],64)}const K={class:"modal",tabindex:"-1",ref:"modal"},Q={class:"modal-dialog"},X={class:"modal-content"},Y=Object(c["f"])("div",{class:"modal-header"},[Object(c["f"])("h5",{class:"modal-title bg-light"},"新增資料"),Object(c["f"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Z={class:"modal-body"},tt={class:"input-group mb-3"},et=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"miner",-1),at={class:"input-group mb-3"},ct=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"minerUrl",-1),nt={class:"input-group mb-3"},ot=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"coin",-1),lt={class:"input-group mb-3"},st=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"coinHref",-1),it={class:"input-group mb-3"},dt=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"coinImgUrl",-1),rt={class:"input-group mb-3"},bt=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"fees",-1),pt={class:"input-group mb-3"},mt=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"age",-1),ut={class:"input-group mb-3"},ft=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"LaunchDate",-1),Ot={class:"input-group mb-3"},jt=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"daily",-1),ht={class:"input-group mb-3"},gt=Object(c["f"])("span",{class:"input-group-text",id:"basic-addon1"},"risk",-1),yt={class:"modal-footer"},vt=Object(c["f"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function xt(t,e,a,n,o,l){return Object(c["r"])(),Object(c["e"])("div",K,[Object(c["f"])("div",Q,[Object(c["f"])("div",X,[Y,Object(c["f"])("div",Z,[Object(c["f"])("div",tt,[et,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"miner","onUpdate:modelValue":e[0]||(e[0]=t=>o.data.content=t)},null,512),[[c["A"],o.data.content]])]),Object(c["f"])("div",at,[ct,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"minerUrl","onUpdate:modelValue":e[1]||(e[1]=t=>o.data.contentUrl=t)},null,512),[[c["A"],o.data.contentUrl]])]),Object(c["f"])("div",nt,[ot,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"coin","onUpdate:modelValue":e[2]||(e[2]=t=>o.data.coin=t)},null,512),[[c["A"],o.data.coin]])]),Object(c["f"])("div",lt,[st,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"coinHref","onUpdate:modelValue":e[3]||(e[3]=t=>o.data.coinHref=t)},null,512),[[c["A"],o.data.coinHref]])]),Object(c["f"])("div",it,[dt,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"coinImgUrl","onUpdate:modelValue":e[4]||(e[4]=t=>o.data.coinImgUrl=t)},null,512),[[c["A"],o.data.coinImgUrl]])]),Object(c["f"])("div",rt,[bt,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"fees","onUpdate:modelValue":e[5]||(e[5]=t=>o.data.fees=t)},null,512),[[c["A"],o.data.fees]])]),Object(c["f"])("div",pt,[mt,Object(c["C"])(Object(c["f"])("input",{type:"date",class:"form-control",placeholder:"age","onUpdate:modelValue":e[6]||(e[6]=t=>o.data.age=t)},null,512),[[c["A"],o.data.age]])]),Object(c["f"])("div",ut,[ft,Object(c["C"])(Object(c["f"])("input",{type:"date",class:"form-control",placeholder:"LaunchDate","onUpdate:modelValue":e[7]||(e[7]=t=>o.data.LaunchDate=t)},null,512),[[c["A"],o.data.LaunchDate]])]),Object(c["f"])("div",Ot,[jt,Object(c["C"])(Object(c["f"])("input",{type:"text",class:"form-control",placeholder:"daily","onUpdate:modelValue":e[8]||(e[8]=t=>o.data.daily=t)},null,512),[[c["A"],o.data.daily]])]),Object(c["f"])("div",ht,[gt,Object(c["C"])(Object(c["f"])("textarea",{class:"form-control",placeholder:"risk","onUpdate:modelValue":e[9]||(e[9]=t=>o.data.risk=t)},null,512),[[c["A"],o.data.risk]])])]),Object(c["f"])("div",yt,[vt,Object(c["f"])("button",{type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=(...t)=>l.sendMiner&&l.sendMiner(...t))},"Save changes")])])])],512)}var Ut=a("7c2b"),Ct=a.n(Ut),kt={data(){return{modal:{},data:{content:"",contentUrl:"",coin:"",coinHref:"",coinImgUrl:"",fees:"",age:"",daily:"",risk:"",LaunchDate:""}}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()},sendMiner(){this.axios.post("https://enigmatic-stream-43395.herokuapp.com/posts",this.data).then(t=>{console.log(t),this.data={},this.hideModal(),this.$emit("emit-update")})}},mounted(){this.modal=new Ct.a(this.$refs.modal)}},At=a("6b0d"),wt=a.n(At);const Vt=wt()(kt,[["render",xt]]);var Dt=Vt,It={data(){return{miners:[],tempminer:{},delmodal:{}}},components:{AddminerVue:Dt},methods:{init(){const t=window.localStorage.getItem("userToken");this.axios.defaults.headers.common.Authorization="Bearer "+t,this.axios.get("https://enigmatic-stream-43395.herokuapp.com/posts").then(t=>{console.log(t),this.miners=t.data.post})},deleteMiner(t){this.axios.delete("https://enigmatic-stream-43395.herokuapp.com/posts/post/"+t).then(t=>{console.log(t),this.init()}),console.log(t)},addminer(){this.$refs.modal.showModal()},putminer(t,e){console.log(t,e.content),this.tempminer={...e},this.delmodal.show()},editMiner(t){console.log(t);const e="https://enigmatic-stream-43395.herokuapp.com/posts/"+t;this.axios.patch(e,this.tempminer).then(t=>{console.log(t),this.delmodal.hide(),this.init()}).then(t=>{console.log(t)})},totalday(t){const e=Date.now(),a=new Date(t);if(console.log("newtime",e,"minerday",a),a>e){var c=parseInt(Math.abs(a-e)/1e3/60/60/24);return console.log(c),"coming soon "+c}var n=parseInt(Math.abs(a-e)/1e3/60/60/24);return console.log(n),n}},mounted(){this.delmodal=new Ct.a(this.$refs.delmodal),this.init()}};a("2032");const Mt=wt()(It,[["render",G]]);e["default"]=Mt}}]);
//# sourceMappingURL=chunk-fb3b841a.ed50823c.js.map
"use strict";(globalThis["webpackChunkriau_apps"]=globalThis["webpackChunkriau_apps"]||[]).push([[387],{6387:(e,a,s)=>{s.r(a),s.d(a,{default:()=>_});var l=s(1758);function t(e,a,s,t,n,o){const r=(0,l.g2)("LoginForm"),i=(0,l.g2)("q-page");return e.$q.platform.is.mobile?((0,l.uX)(),(0,l.Wv)(i,{key:0,class:"flex flex-center"},{default:(0,l.k6)((()=>[(0,l.bF)(r)])),_:1})):(0,l.Q3)("",!0)}const n={class:"q-pa-md flex flex-center"},o={key:0,class:"q-pa-md"},r={class:"q-mt-md"};function i(e,a,s,t,i,d){const u=(0,l.g2)("q-icon"),c=(0,l.g2)("q-input"),p=(0,l.g2)("q-btn"),m=(0,l.g2)("q-form");return(0,l.uX)(),(0,l.CE)("div",n,[e.$q.platform.is.mobile?((0,l.uX)(),(0,l.CE)("div",o,[(0,l.Lk)("div",null,[a[4]||(a[4]=(0,l.Lk)("div",{class:"q-mb-md flex flex-center"},[(0,l.Lk)("img",{src:"/images/login.png",alt:"Logo",style:{"max-width":"150px"}})],-1)),a[5]||(a[5]=(0,l.Lk)("div",{class:"text_login text-h6"},"Login sebagai Pelanggan",-1)),a[6]||(a[6]=(0,l.Lk)("div",{class:"text-caption"},"Masukkan username dan password anda",-1)),(0,l.bF)(m,{onSubmit:d.LoginSubmit,class:"q-mt-md"},{default:(0,l.k6)((()=>[(0,l.bF)(c,{modelValue:i.username,"onUpdate:modelValue":a[0]||(a[0]=e=>i.username=e),outlined:"",label:"username","label-color":"black",placeholder:"Masukkan username anda",dense:"",rounded:"",color:"green-8","input-class":"text-black","lazy-rules":"",rules:i.defaultRules},{append:(0,l.k6)((()=>[(0,l.bF)(u,{name:"person",class:"text-green-8"})])),_:1},8,["modelValue","rules"]),(0,l.bF)(c,{modelValue:i.password,"onUpdate:modelValue":a[2]||(a[2]=e=>i.password=e),outlined:"",label:"password","label-color":"black",placeholder:"Masukkan password anda",dense:"",rounded:"",color:"green-8","input-class":"text-black","lazy-rules":"",rules:i.defaultRules,type:i.isPwd?"password":"text"},{append:(0,l.k6)((()=>[(0,l.bF)(u,{name:i.isPwd?"visibility_off":"visibility",class:"cursor-pointer text-green-8",onClick:a[1]||(a[1]=e=>i.isPwd=!i.isPwd)},null,8,["name"])])),_:1},8,["modelValue","rules","type"]),a[3]||(a[3]=(0,l.Lk)("p",{class:"text-caption q-ma-none text-right"},"lupa password",-1)),(0,l.Lk)("div",r,[(0,l.bF)(p,{label:"Submit",type:"submit",color:"green-8",class:"text-capitalize text_login full-width flex flex-center",rounded:""})])])),_:1},8,["onSubmit"])])])):(0,l.Q3)("",!0)])}var d=s(989),u=s(594);const c={name:"LoginForm",data(){return{username:"",password:"",isPwd:!0,defaultRules:[e=>e&&e.length>0||"Tidak boleh kosong"]}},methods:{LoginSubmit(){"admin"===this.username&&"admin"===this.password?(this.$router.push({path:"/home_pelanggan"}),d.A.create({message:"Selamat datang!",position:"top",textColor:"green-9",spinner:u.A,color:"white"})):d.A.create({message:"Username atau password salah",color:"red",textColor:"white",position:"top"})}}};var p=s(2807),m=s(9200),g=s(2699),b=s(492),k=s(1693),x=s(8582),h=s.n(x);const f=(0,p.A)(c,[["render",i],["__scopeId","data-v-0bb26ce6"]]),w=f;h()(c,"components",{QForm:m.A,QInput:g.A,QIcon:b.A,QBtn:k.A});const v={components:{LoginForm:w}};var L=s(7716);const q=(0,p.A)(v,[["render",t]]),_=q;h()(v,"components",{QPage:L.A})}}]);
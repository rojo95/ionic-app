"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1162],{1162:(M,f,s)=>{s.r(f),s.d(f,{LoginPageModule:()=>I});var h=s(6895),t=s(4719),a=s(7609),g=s(9391),c=s(5861),e=s(6738),Z=s(8227);function b(o,i){1&o&&(e.TgZ(0,"span",14),e._uU(1,"El campo es requerido"),e.qZA())}function P(o,i){1&o&&(e.TgZ(0,"span",14),e._uU(1,"El campo es demasiado corto"),e.qZA())}function L(o,i){1&o&&(e.TgZ(0,"span",14),e._uU(1,"El campo es requerido"),e.qZA())}function x(o,i){1&o&&(e.TgZ(0,"span",14),e._uU(1,"El campo es demasiado corto"),e.qZA())}const y=[{path:"",component:(()=>{class o{constructor(n,r,d,m,u,v,l){this.tokenService=n,this.router=r,this.menu=d,this.alert=m,this.loadCtrlr=u,this.platform=v,this.formBuilder=l,this.form=this.formBuilder.group({email:new t.NI("user",[t.kI.required,t.kI.minLength(4)]),password:new t.NI("123456",[t.kI.required,t.kI.minLength(4)])}),this.loading=this.loadCtrlr.create(),this.platform.backButton.subscribeWithPriority(10,()=>{console.log("Handler was called!")})}ngOnInit(){}overrideHardwareBackAction(n){return(0,c.Z)(function*(){yield})()}ingresar(){var n=this;return(0,c.Z)(function*(){const r={email:n.form.get("email")?.value,password:n.form.get("password")?.value};n.form.invalid||((yield n.loading).present(),yield n.tokenService.loguearse(r).subscribe(function(){var m=(0,c.Z)(function*(u){if(u.users){const l=u.users.find(p=>(p.user===r.email||p.email===r.email)&&p.password===r.password);l?(n.menu.enable(!0),(yield n.loading).dismiss(),localStorage.setItem("token",l.token),localStorage.setItem("name",l.Usuario),localStorage.setItem("lastnames",l.lastnames),yield n.router.navigate(["/home"])):n.alertMessage("Por favor verifique sus datos de usuario.")}else n.alertMessage("Error al traer informaci\xf3n del servidor")});return function(u){return m.apply(this,arguments)}}()))})()}alertMessage(n){var r=this;return(0,c.Z)(function*(){yield(yield r.alert.create({header:"ERROR AL INGRESAR",message:n+".",buttons:["Aceptar"]})).present()})()}ionViewDidEnter(){this.menu.enable(!1)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(Z.e),e.Y36(g.F0),e.Y36(a._q),e.Y36(a.Br),e.Y36(a.HT),e.Y36(a.t4),e.Y36(t.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:28,vars:6,consts:[[1,"title"],["src","assets/img/dios_maquina.png","alt","","srcset",""],[1,"container"],["novalidate","",3,"formGroup","ngSubmit"],["lines","full"],["position","floating"],["name","user","required","","formControlName","email",1,"text"],["class","error",4,"ngIf"],["type","password","name","password","required","","formControlName","password",1,"text"],[1,"container-buttons"],[1,"col"],["ion-button","","color","primary",1,"btn",3,"disabled"],[1,"button-div"],["routerLink","/recuperar-password",1,"link"],[1,"error"]],template:function(n,r){1&n&&(e.TgZ(0,"ion-content")(1,"div",0)(2,"h2"),e._uU(3," LOGIN "),e.qZA(),e._UZ(4,"img",1),e.qZA(),e.TgZ(5,"div",2)(6,"form",3),e.NdJ("ngSubmit",function(){return r.ingresar()}),e.TgZ(7,"div")(8,"ion-item",4)(9,"ion-label",5),e._uU(10,"Correo/Usuario"),e.qZA(),e._UZ(11,"ion-input",6),e.qZA(),e.YNc(12,b,2,0,"span",7),e.YNc(13,P,2,0,"span",7),e.TgZ(14,"ion-item",4)(15,"ion-label",5),e._uU(16,"Contrase\xf1a"),e.qZA(),e._UZ(17,"ion-input",8),e.qZA(),e.YNc(18,L,2,0,"span",7),e.YNc(19,x,2,0,"span",7),e.qZA(),e.TgZ(20,"div",9)(21,"div",10)(22,"button",11),e._uU(23,"INGRESAR"),e.qZA()(),e.TgZ(24,"div",12)(25,"a",13),e._uU(26," recuperar clave "),e.qZA()()()(),e._UZ(27,"br"),e.qZA()()),2&n&&(e.xp6(6),e.Q6J("formGroup",r.form),e.xp6(6),e.Q6J("ngIf",r.form.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.form.get("email").hasError("minlength")),e.xp6(5),e.Q6J("ngIf",r.form.get("password").hasError("required")),e.xp6(1),e.Q6J("ngIf",r.form.get("password").hasError("minlength")),e.xp6(3),e.Q6J("disabled",r.form.invalid))},dependencies:[h.O5,t._Y,t.JJ,t.JL,t.Q7,t.sg,t.u,a.W2,a.pK,a.Ie,a.Q$,a.j9,a.Fo,g.yS],styles:[".container[_ngcontent-%COMP%]{position:absolute;left:20px;right:20px;top:43%;margin:20px}.btn[_ngcontent-%COMP%]{border-radius:3px;background-color:var(--ion-color-custom);color:var(--ion-color-custom-contrast);font-size:15px;padding:10px;width:120px;margin-top:10px}.btn[_ngcontent-%COMP%]:disabled{background-color:var(--ion-color-custom-disable);color:rgba(var(--ion-color-custom-rgb),.25)}.button-div[_ngcontent-%COMP%]{text-align:right;margin-right:20px;margin-top:20px;width:50%}.title[_ngcontent-%COMP%]{position:absolute;text-align:center;margin:0;padding:0;width:100%}img[_ngcontent-%COMP%]{border-radius:50%;width:180px}.link[_ngcontent-%COMP%]{font-size:medium;background-color:transparent;color:var(--ion-color-custom);text-decoration:none}.container-buttons[_ngcontent-%COMP%]{display:flex}.error[_ngcontent-%COMP%]{color:var(--ion-color-danger);font-size:14px}"]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(y),g.Bz]}),o})(),I=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.ez,t.u5,t.UX,a.Pc,A]}),o})()}}]);
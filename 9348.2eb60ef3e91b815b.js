"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9348],{9348:(v,g,n)=>{n.r(g),n.d(g,{CitiesPageModule:()=>P});var u=n(6895),m=n(4719),o=n(7609),l=n(9391),c=n(5861),p=n(4850),t=n(6738),h=n(529);const f=function(i){return["/city",i]};function C(i,r){if(1&i&&(t.TgZ(0,"ion-col",4)(1,"ion-card",5),t._UZ(2,"img",6),t.TgZ(3,"div",7),t._uU(4),t.qZA(),t.TgZ(5,"div",8),t._uU(6),t.qZA()()()),2&i){const e=r.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(5,f,e.id)),t.xp6(1),t.MGl("src","assets/img/cities/",e.image,".jpg",t.LSH),t.s9C("alt",e.name),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.hij("",e.description.split(" ").slice(0,9).join(" "),"...")}}const y=[{path:"",component:(()=>{class i{constructor(e,s,a,d){this.http=e,this.toastController=s,this.alertController=a,this.router=d,this.token=localStorage.getItem("token"),this.cities=[]}ngOnInit(){this.getCities().subscribe(e=>{this.cities=e})}getCities(){return this.http.get("assets/files/cities.json").pipe((0,p.U)(e=>e.data))}presentToast1(){var e=this;return(0,c.Z)(function*(){(yield e.toastController.create({message:"Ciudad seleccionada",duration:3e3,position:"bottom"})).present()})()}presentAlert1(){var e=this;return(0,c.Z)(function*(){const s=yield e.alertController.create({header:"Borrar Ciudad",message:"Se ha borrado la ciudad correctamente.",buttons:["OK"]});yield s.present();const a=yield s.onDidDismiss();console.log(a)})()}presentAlert2(){var e=this;return(0,c.Z)(function*(){const s=yield e.alertController.create({header:"Borrar Ciudad",message:"\xbfEst\xe1s seguro?",buttons:[{text:"No",handler:()=>{console.log("Cancelado.")}},{text:"S\xed",handler:()=>{console.log("Ciudad eliminada.")}}]});yield s.present();const a=yield s.onDidDismiss();console.log(a)})()}doRefresh(e){return(0,c.Z)(function*(){console.log("Begin async operation"),setTimeout(()=>{console.log("Async operation has ended"),e.target.complete()},2e3)})()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h.eN),t.Y36(o.yF),t.Y36(o.Br),t.Y36(l.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-cities"]],decls:11,vars:1,consts:[["color","custom"],["slot","start"],["slot","fixed",3,"ionRefresh"],["sizeLg","6","sizeMd","6","sizeXs","12",4,"ngFor","ngForOf"],["sizeLg","6","sizeMd","6","sizeXs","12"],[3,"routerLink"],[3,"src","alt"],[1,"card-title","card-text-margin"],[1,"card-text-margin"]],template:function(e,s){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"cities"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-refresher",2),t.NdJ("ionRefresh",function(d){return s.doRefresh(d)}),t._UZ(8,"ion-refresher-content"),t.qZA(),t.TgZ(9,"ion-row"),t.YNc(10,C,7,7,"ion-col",3),t.qZA()()),2&e&&(t.xp6(10),t.Q6J("ngForOf",s.cities))},dependencies:[u.sg,o.Sm,o.PM,o.wI,o.W2,o.Gu,o.fG,o.nJ,o.Wo,o.Nd,o.sr,o.wd,o.YI,l.rH],styles:[".card-title[_ngcontent-%COMP%]{font-size:23px;font-weight:700}.card-text-margin[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px;margin-left:8px}"]}),i})()}];let Z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.Bz.forChild(y),l.Bz]}),i})(),P=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,m.u5,o.Pc,Z]}),i})()}}]);
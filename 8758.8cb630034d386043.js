"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8758],{8758:(v,m,r)=>{r.r(m),r.d(m,{CustomersPageModule:()=>P});var a=r(6895),l=r(4719),o=r(7609),u=r(9391),g=r(4850),e=r(6738),h=r(529);function p(t,n){if(1&t&&(e.TgZ(0,"ion-item")(1,"ion-avatar",1),e._UZ(2,"img",5),e.qZA(),e.TgZ(3,"ion-label")(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"h3"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA()()()),2&t){const s=n.$implicit;e.xp6(2),e.MGl("src","assets/img/customers/",s.image,".png",e.LSH),e.xp6(3),e.Oqu(s.name),e.xp6(2),e.Oqu(s.state),e.xp6(2),e.Oqu(s.description)}}function C(t,n){if(1&t&&(e.TgZ(0,"ion-list")(1,"ion-list-header"),e._uU(2," Conversaciones Recientes "),e.qZA(),e.YNc(3,p,10,4,"ion-item",4),e.qZA()),2&t){const s=e.oxw();e.xp6(3),e.Q6J("ngForOf",s.searchedCustomer)}}function d(t,n){1&t&&(e.TgZ(0,"ion-label"),e._uU(1,"No posee permisos para ver a los clientes."),e.qZA())}const f=[{path:"",component:(()=>{class t{constructor(s,i){this.router=s,this.http=i,this.customers=[]}ngOnInit(){this.permission=!0,this.getCustomers().subscribe(s=>{this.customers=s,this.searchedCustomer=this.customers})}goToHome(){this.router.navigate(["/home"])}getCustomers(){return this.http.get("assets/files/customers.json").pipe((0,g.U)(s=>s.data))}searchCustomer(s){const i=s.target.value;this.searchedCustomer=this.customers,i&&""!==i.trim()&&(this.searchedCustomer=this.searchedCustomer.filter(c=>c.name.toLowerCase().indexOf(i.toLowerCase())>-1))}}return t.\u0275fac=function(s){return new(s||t)(e.Y36(u.F0),e.Y36(h.eN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-customers"]],decls:11,vars:2,consts:[["color","custom"],["slot","start"],["placeholder","Buscar","animated","",3,"ionChange"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"src"]],template:function(s,i){1&s&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"customers"),e.qZA()(),e.TgZ(6,"ion-toolbar",0)(7,"ion-searchbar",2),e.NdJ("ionChange",function(T){return i.searchCustomer(T)}),e.qZA()()(),e.TgZ(8,"ion-content"),e.YNc(9,C,4,1,"ion-list",3),e.YNc(10,d,2,0,"ion-label",3),e.qZA()),2&s&&(e.xp6(9),e.Q6J("ngIf",i.permission),e.xp6(1),e.Q6J("ngIf",!i.permission))},dependencies:[a.sg,a.O5,o.BJ,o.Sm,o.W2,o.Gu,o.Ie,o.Q$,o.q_,o.yh,o.fG,o.VI,o.sr,o.wd,o.j9],styles:[".text-primary[_ngcontent-%COMP%]{color:var(--ion-color-custom)}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(f),u.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,l.u5,o.Pc,Z]}),t})()}}]);
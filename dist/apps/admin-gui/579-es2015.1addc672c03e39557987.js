(self.webpackChunkperun_web_apps=self.webpackChunkperun_web_apps||[]).push([[579],{21575:function(t,e,i){"use strict";i.d(e,{A:function(){return r}});var s=i(17),n=i(31572),a=i(57629);let r=(()=>{class t{constructor(){}prepareRoute(t){return t&&t.activatedRouteData&&t.activatedRouteData.animation}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-animated-router-outlet"]],decls:3,vars:0,consts:[["outlet","outlet"]],template:function(t,e){1&t&&(n.TgZ(0,"div"),n._UZ(1,"router-outlet",null,0),n.qZA())},directives:[a.lC],styles:[""],data:{animation:[s.Ji]}}),t})()},40695:function(t,e,i){"use strict";i.d(e,{n:function(){return S}});var s=i(84608),n=i(4230),a=i(88426),r=i(33642),c=i(60611),o=(i(41939),i(31572)),l=i(48160),u=i(19139),d=i(61511),h=i(15980),b=i(39571),p=i(67806),g=i(41186);const f=["list"];function E(t,e){1&t&&(o.TgZ(0,"app-alert",10),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"DIALOGS.CREATE_ATTRIBUTE.ERROR_EMPTY_VALUE")," "))}function m(t,e){1&t&&o._UZ(0,"mat-spinner",11)}function y(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"perun-web-apps-attributes-list",12,13),o.NdJ("page",function(e){return o.CHM(t),o.oxw().pageChanged(e)}),o.qZA()}if(2&t){const t=o.oxw();o.Q6J("attributes",t.attributes)("filterValue",t.filterValue)("inDialog",!0)("pageSize",t.pageSize)("selection",t.selected)}}let S=(()=>{class t{constructor(t,e,i,s,a,r){this.dialogRef=t,this.data=e,this.attributesManager=i,this.notificator=s,this.tableConfigService=a,this.translate=r,this.selected=new n.Ov(!0,[]),this.showError=!1,this.filterValue="",this.tableId=c.rF,this.translate.get("DIALOGS.CREATE_ATTRIBUTE.SUCCESS_SAVE").subscribe(t=>this.saveSuccessMessage=t)}ngOnInit(){this.pageSize=this.tableConfigService.getTablePageSize(this.tableId);const t=new Array;let e,i,s,n,a,r,c,o;switch(this.data.notEmptyAttributes.forEach(e=>{t.push(e.id)}),this.data.entity){case"member":e=this.data.entityId;break;case"user":i=this.data.entityId;break;case"vo":s=this.data.entityId;break;case"group":n=this.data.entityId;break;case"resource":a=this.data.entityId;break;case"facility":r=this.data.entityId;break;case"host":c=this.data.entityId;break;case"ues":o=this.data.entityId}switch(this.data.secondEntity){case"member":e=this.data.secondEntityId;break;case"user":i=this.data.secondEntityId;break;case"vo":s=this.data.secondEntityId;break;case"group":n=this.data.secondEntityId;break;case"resource":a=this.data.secondEntityId;break;case"facility":r=this.data.secondEntityId;break;case"host":c=this.data.secondEntityId;break;case"ues":o=this.data.secondEntityId}this.loading=!0,this.attributesManager.getAttributesDefinitionWithRights(e,i,s,n,a,r,c,o).subscribe(e=>{this.attributes=e,this.attributes=this.attributes.filter(e=>!t.includes(e.id)&&this.twoEntityValid(e)),this.loading=!1})}onCancel(){this.dialogRef.close()}onSave(){this.list.updateMapAttributes();let t=!1;for(const e of this.selected.selected)"java.util.ArrayList"===e.type&&0===e.value.length&&(t=!0),void 0===e.value&&(t=!0);if(t)return this.showError=!0,void setTimeout(()=>{this.showError=!1},5e3);switch(this.data.entity){case"facility":this.attributesManager.setFacilityAttributes({facility:this.data.entityId,attributes:this.selected.selected}).subscribe(()=>{this.handleSuccess()});break;case"group":switch(this.data.secondEntity){case"resource":this.attributesManager.setGroupResourceAttributes({group:this.data.entityId,resource:this.data.secondEntityId,attributes:this.selected.selected}).subscribe(()=>{this.handleSuccess()});break;default:this.attributesManager.setGroupAttributes({group:this.data.entityId,attributes:this.selected.selected}).subscribe(()=>{this.handleSuccess()})}break;case"member":switch(this.data.secondEntity){case"resource":this.attributesManager.setMemberResourceAttributes({member:this.data.entityId,resource:this.data.secondEntityId,attributes:this.selected.selected}).subscribe(()=>{this.handleSuccess()});break;case"group":this.attributesManager.setMemberGroupAttributes({member:this.data.entityId,group:this.data.secondEntityId,attributes:this.selected.selected}).subscribe(()=>{this.handleSuccess()});break;default:this.attributesManager.setMemberAttributes({member:this.data.entityId,attributes:this.selected.selected}).subscribe(()=>{this.handleSuccess()})}break;case"resource":this.attributesManager.setResourceAttributes({resource:this.data.entityId,attributes:this.selected.selected}).subscribe(()=>{this.handleSuccess()});break;case"user":switch(this.data.secondEntity){case"facility":this.attributesManager.setUserFacilityAttributes({user:this.data.entityId,facility:this.data.secondEntityId,attributes:this.selected.selected}).subscribe(()=>{this.handleSuccess()});break;default:this.attributesManager.setUserAttributes({user:this.data.entityId,attributes:this.selected.selected}).subscribe(()=>{this.handleSuccess()})}break;case"vo":this.attributesManager.setVoAttributes({vo:this.data.entityId,attributes:this.selected.selected}).subscribe(()=>{this.handleSuccess()});break;case"host":this.attributesManager.setHostAttributes({host:this.data.entityId,attributes:this.selected.selected}).subscribe(()=>{this.handleSuccess()})}}applyFilter(t){this.filterValue=t}handleSuccess(){this.notificator.showSuccess(this.saveSuccessMessage),this.selected.clear(),this.dialogRef.close("saved")}pageChanged(t){this.pageSize=t.pageSize,this.tableConfigService.setTablePageSize(this.tableId,t.pageSize)}twoEntityValid(t){return!this.data.secondEntity||t.entity===`${this.data.entity}_${this.data.secondEntity}`}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(s.so),o.Y36(s.WI),o.Y36(r.H8),o.Y36(a.V6),o.Y36(c.dB),o.Y36(l.sK))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-create-attribute-dialog"]],viewQuery:function(t,e){if(1&t&&o.Gf(f,5),2&t){let t;o.iGM(t=o.CRH())&&(e.list=t.first)}},decls:17,vars:17,consts:[["mat-dialog-title",""],[1,"page-subtitle"],[1,"font-size-1rem",3,"placeholder","filter"],["class","ml-3 font-size-1rem","alert_type","error",4,"ngIf"],["mat-dialog-content",""],["class","ml-auto mr-auto",4,"ngIf"],[3,"attributes","filterValue","inDialog","pageSize","selection","page",4,"ngIf"],["mat-dialog-actions",""],["mat-flat-button","",1,"ml-auto",3,"click"],["color","accent","mat-flat-button","",1,"ml-2",3,"disabled","click"],["alert_type","error",1,"ml-3","font-size-1rem"],[1,"ml-auto","mr-auto"],[3,"attributes","filterValue","inDialog","pageSize","selection","page"],["list",""]],template:function(t,e){1&t&&(o.TgZ(0,"div"),o.TgZ(1,"div",0),o.TgZ(2,"h1",1),o._uU(3),o.ALo(4,"translate"),o.qZA(),o.TgZ(5,"perun-web-apps-immediate-filter",2),o.NdJ("filter",function(t){return e.applyFilter(t)}),o.qZA(),o.YNc(6,E,3,3,"app-alert",3),o.qZA(),o.TgZ(7,"div",4),o.YNc(8,m,1,0,"mat-spinner",5),o.YNc(9,y,2,5,"perun-web-apps-attributes-list",6),o.qZA(),o.TgZ(10,"div",7),o.TgZ(11,"button",8),o.NdJ("click",function(){return e.onCancel()}),o._uU(12),o.ALo(13,"translate"),o.qZA(),o.TgZ(14,"button",9),o.NdJ("click",function(){return e.onSave()}),o._uU(15),o.ALo(16,"translate"),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.Tol(e.data.style),o.xp6(3),o.Oqu(o.lcZ(4,11,"DIALOGS.CREATE_ATTRIBUTE.SET_NEW")),o.xp6(2),o.Q6J("placeholder","SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER"),o.xp6(1),o.Q6J("ngIf",e.showError),o.xp6(2),o.Q6J("ngIf",e.loading),o.xp6(1),o.Q6J("ngIf",void 0!==e.attributes&&!e.loading),o.xp6(3),o.hij(" ",o.lcZ(13,13,"DIALOGS.CREATE_ATTRIBUTE.CANCEL")," "),o.xp6(2),o.Q6J("disabled",0===e.selected.selected.length),o.xp6(1),o.hij(" ",o.lcZ(16,15,"DIALOGS.CREATE_ATTRIBUTE.SAVE")," "))},directives:[s.uh,u.L,d.O5,s.xY,s.H8,h.lW,b.w,p.$g,g.p],pipes:[l.X$],styles:[".font-size-1rem[_ngcontent-%COMP%]{font-size:1rem!important}"]}),t})()},13572:function(t,e,i){"use strict";i.d(e,{k:function(){return m}});var s=i(84608),n=i(67033),a=i(88426),r=i(33642),c=i(31572),o=i(48160),l=i(61511),u=i(15980),d=i(67806);function h(t,e){1&t&&c._UZ(0,"mat-spinner",6)}function b(t,e){1&t&&c._UZ(0,"th",15)}function p(t,e){if(1&t&&(c.TgZ(0,"td",16),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.hij(" ",t.displayName," ")}}function g(t,e){1&t&&c._UZ(0,"tr",17)}function f(t,e){1&t&&c._UZ(0,"tr",18)}function E(t,e){if(1&t&&(c.TgZ(0,"div",7),c.TgZ(1,"div"),c._uU(2),c.ALo(3,"translate"),c.qZA(),c.TgZ(4,"div",8),c._uU(5),c.ALo(6,"translate"),c.qZA(),c.TgZ(7,"table",9),c.ynx(8,10),c.YNc(9,b,1,0,"th",11),c.YNc(10,p,2,1,"td",12),c.BQk(),c.YNc(11,g,1,0,"tr",13),c.YNc(12,f,1,0,"tr",14),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(2),c.hij(" ",c.lcZ(3,5,"DIALOGS.DELETE_ATTRIBUTES.DESCRIPTION")," "),c.xp6(3),c.hij(" ",c.lcZ(6,7,"DIALOGS.DELETE_ATTRIBUTES.ASK")," "),c.xp6(2),c.Q6J("dataSource",t.dataSource),c.xp6(4),c.Q6J("matHeaderRowDef",t.displayedColumns),c.xp6(1),c.Q6J("matRowDefColumns",t.displayedColumns)}}let m=(()=>{class t{constructor(t,e,i,s,n){this.dialogRef=t,this.data=e,this.notificator=i,this.translate=s,this.attributesManager=n,this.displayedColumns=["name"],this.loading=!1}ngOnInit(){this.dataSource=new n.by(this.data.attributes),this.theme=this.data.theme}onCancel(){this.dialogRef.close(!1)}onSubmit(){const t=[];for(const i of this.data.attributes)t.push(i.id);const e={};switch(e[this.data.entity]=this.data.entityId,e.attributes=t,void 0!==this.data.secondEntity&&(e[this.data.secondEntity]=this.data.secondEntityId),this.loading=!0,this.data.entity){case"vo":this.attributesManager.removeVoAttributes(this.data.entityId,t).subscribe(()=>{this.onSuccess()},()=>this.loading=!1);break;case"group":switch(this.data.secondEntity){case"resource":this.attributesManager.removeGroupResourceAttributes(this.data.entityId,this.data.secondEntityId,t).subscribe(()=>{this.onSuccess()},()=>this.loading=!1);break;default:this.attributesManager.removeGroupAttributes(this.data.entityId,t).subscribe(()=>{this.onSuccess()},()=>this.loading=!1)}break;case"user":switch(this.data.secondEntity){case"facility":this.attributesManager.removeUserFacilityAttributes(this.data.entityId,this.data.secondEntityId,t).subscribe(()=>{this.onSuccess()},()=>this.loading=!1);break;default:this.attributesManager.removeUserAttributes(this.data.entityId,t).subscribe(()=>{this.onSuccess()},()=>this.loading=!1)}break;case"member":switch(this.data.secondEntity){case"resource":this.attributesManager.removeMemberResourceAttributes(this.data.entityId,this.data.secondEntityId,t).subscribe(()=>{this.onSuccess()},()=>this.loading=!1);break;case"group":this.attributesManager.removeMemberGroupAttributes(this.data.entityId,this.data.secondEntityId,t).subscribe(()=>{this.onSuccess()},()=>this.loading=!1);break;default:this.attributesManager.removeMemberAttributes(this.data.entityId,t).subscribe(()=>{this.onSuccess()},()=>this.loading=!1)}break;case"facility":this.attributesManager.removeFacilityAttributes(this.data.entityId,t).subscribe(()=>{this.onSuccess()},()=>this.loading=!1);break;case"host":this.attributesManager.removeHostAttributes(this.data.entityId,t).subscribe(()=>{this.onSuccess()},()=>this.loading=!1);break;case"ues":this.attributesManager.removeUesAttributes(this.data.entityId,t).subscribe(()=>{this.onSuccess()});break;case"resource":this.attributesManager.removeResourceAttributes(this.data.entityId,t).subscribe(()=>this.onSuccess())}}onSuccess(){this.translate.get("DIALOGS.DELETE_ATTRIBUTES.SUCCESS").subscribe(t=>{this.notificator.showSuccess(t),this.dialogRef.close(!0)})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(s.so),c.Y36(s.WI),c.Y36(a.V6),c.Y36(o.sK),c.Y36(r.H8))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-delete-attribute-dialog"]],decls:13,vars:15,consts:[["mat-dialog-title",""],["class","ml-auto mr-auto",4,"ngIf"],["mat-dialog-content","",4,"ngIf"],["mat-dialog-actions",""],["mat-flat-button","",1,"ml-auto",3,"click"],["mat-flat-button","","color","warn",1,"ml-2",3,"disabled","click"],[1,"ml-auto","mr-auto"],["mat-dialog-content",""],[1,"font-weight-bold"],["mat-table","",1,"w-100",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-row","","class","font-weight-bolder",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row","",1,"font-weight-bolder"],["mat-row",""]],template:function(t,e){1&t&&(c.TgZ(0,"div"),c.TgZ(1,"h1",0),c._uU(2),c.ALo(3,"translate"),c.qZA(),c.YNc(4,h,1,0,"mat-spinner",1),c.YNc(5,E,13,9,"div",2),c.TgZ(6,"div",3),c.TgZ(7,"button",4),c.NdJ("click",function(){return e.onCancel()}),c._uU(8),c.ALo(9,"translate"),c.qZA(),c.TgZ(10,"button",5),c.NdJ("click",function(){return e.onSubmit()}),c._uU(11),c.ALo(12,"translate"),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.Tol(e.theme),c.xp6(2),c.Oqu(c.lcZ(3,9,"DIALOGS.DELETE_ATTRIBUTES.TITLE")),c.xp6(2),c.Q6J("ngIf",e.loading),c.xp6(1),c.Q6J("ngIf",!e.loading),c.xp6(3),c.hij(" ",c.lcZ(9,11,"DIALOGS.DELETE_ATTRIBUTES.CANCEL")," "),c.xp6(2),c.Q6J("disabled",e.loading),c.xp6(1),c.hij(" ",c.lcZ(12,13,"DIALOGS.DELETE_ATTRIBUTES.DELETE")," "))},directives:[s.uh,l.O5,s.H8,u.lW,d.$g,s.xY,n.BZ,n.w1,n.fO,n.Dz,n.as,n.nj,n.ge,n.ev,n.XQ,n.Gk],pipes:[o.X$],styles:[""]}),t})()},541:function(t,e,i){"use strict";i.d(e,{t:function(){return A}});var s=i(33642),n=i(4230),a=i(27613),r=i(40695),c=i(81954),o=i(13572),l=(i(41939),i(60611)),u=i(31572),d=i(84608),h=i(59403),b=i(15980),p=i(19139),g=i(61511),f=i(67806),E=i(41186),m=i(48160);const y=["list"];function S(t,e){1&t&&u._UZ(0,"mat-spinner",7)}function I(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"perun-web-apps-attributes-list",8,9),u.NdJ("page",function(e){return u.CHM(t),u.oxw().pageChanged(e)}),u.qZA()}if(2&t){const t=u.oxw();u.Q6J("pageSize",t.pageSize)("filterValue",t.filterValue)("attributes",t.attributes)("selection",t.selection)}}let A=(()=>{class t{constructor(t,e,i){this.attributesManagerService=t,this.tableConfigService=e,this.dialog=i,this.attributes=[],this.selection=new n.Ov(!0,[]),this.filterValue="",this.tableId=l.rF,this.loading=!1}ngOnInit(){this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.refreshTable()}refreshTable(){switch(this.loading=!0,this.entity){case"member":this.attributesManagerService.getMemberAttributes(this.entityId).subscribe(t=>{this.attributes=t,this.selection.clear(),this.loading=!1});break;case"group":this.attributesManagerService.getGroupAttributes(this.entityId).subscribe(t=>{this.attributes=t,this.selection.clear(),this.loading=!1});break;case"user":this.attributesManagerService.getUserAttributes(this.entityId).subscribe(t=>{this.attributes=t,this.selection.clear(),this.loading=!1});break;case"resource":this.attributesManagerService.getResourceAttributes(this.entityId).subscribe(t=>{this.attributes=t,this.selection.clear(),this.loading=!1});break;case"facility":this.attributesManagerService.getFacilityAttributes(this.entityId).subscribe(t=>{this.attributes=t,this.selection.clear(),this.loading=!1});break;case"vo":this.attributesManagerService.getVoAttributes(this.entityId).subscribe(t=>{this.attributes=t,this.selection.clear(),this.loading=!1})}}applyFilter(t){this.filterValue=t}pageChanged(t){this.pageSize=t.pageSize,this.tableConfigService.setTablePageSize(this.tableId,t.pageSize)}onCreate(){const t=(0,a.kZ)();t.width="1050px",t.data={entityId:this.entityId,entity:this.entity,notEmptyAttributes:this.attributes,style:this.entity+"-theme"},this.dialog.open(r.n,t).afterClosed().subscribe(t=>{t&&this.refreshTable()})}onSave(){this.list.updateMapAttributes();const t=(0,a.kZ)();t.width="450px",t.data={entityId:this.entityId,entity:this.entity,attributes:this.selection.selected},this.dialog.open(c.wA,t).afterClosed().subscribe(t=>{t&&this.refreshTable()})}onDelete(){const t=(0,a.kZ)();t.width="450px",t.data={entityId:this.entityId,entity:this.entity,attributes:this.selection.selected},this.dialog.open(o.k,t).afterClosed().subscribe(t=>{t&&this.refreshTable()})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(s.H8),u.Y36(l.dB),u.Y36(d.uw))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-one-entity-attribute-page"]],viewQuery:function(t,e){if(1&t&&u.Gf(y,5),2&t){let t;u.iGM(t=u.CRH())&&(e.list=t.first)}},inputs:{entity:"entity",entityId:"entityId"},decls:13,vars:14,consts:[[1,"mt-2",3,"refresh"],["mat-flat-button","","color","accent",1,"mr-2","mt-2",3,"click"],["mat-flat-button","","color","accent",1,"mr-2","mt-2",3,"disabled","click"],["mat-flat-button","","color","warn",1,"mt-2",3,"disabled","click"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","filterValue","attributes","selection","page",4,"ngIf"],[1,"ml-auto","mr-auto"],[3,"pageSize","filterValue","attributes","selection","page"],["list",""]],template:function(t,e){1&t&&(u.TgZ(0,"perun-web-apps-refresh-button",0),u.NdJ("refresh",function(){return e.refreshTable()}),u.qZA(),u.TgZ(1,"button",1),u.NdJ("click",function(){return e.onCreate()}),u._uU(2),u.ALo(3,"translate"),u.qZA(),u.TgZ(4,"button",2),u.NdJ("click",function(){return e.onSave()}),u._uU(5),u.ALo(6,"translate"),u.qZA(),u.TgZ(7,"button",3),u.NdJ("click",function(){return e.onDelete()}),u._uU(8),u.ALo(9,"translate"),u.qZA(),u.TgZ(10,"perun-web-apps-immediate-filter",4),u.NdJ("filter",function(t){return e.applyFilter(t)}),u.qZA(),u.YNc(11,S,1,0,"mat-spinner",5),u.YNc(12,I,2,4,"perun-web-apps-attributes-list",6)),2&t&&(u.xp6(2),u.hij(" ",u.lcZ(3,8,"USER_DETAIL.SETTINGS.ATTRIBUTES.CREATE"),"\n"),u.xp6(2),u.Q6J("disabled",0===e.selection.selected.length),u.xp6(1),u.hij(" ",u.lcZ(6,10,"USER_DETAIL.SETTINGS.ATTRIBUTES.SAVE"),"\n"),u.xp6(2),u.Q6J("disabled",0===e.selection.selected.length),u.xp6(1),u.hij(" ",u.lcZ(9,12,"USER_DETAIL.SETTINGS.ATTRIBUTES.DELETE"),"\n"),u.xp6(2),u.Q6J("placeholder","SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER"),u.xp6(1),u.Q6J("ngIf",e.loading),u.xp6(1),u.Q6J("ngIf",!e.loading))},directives:[h.t,b.lW,p.L,g.O5,f.$g,E.p],pipes:[m.X$],styles:[""]}),t})()},69012:function(t,e,i){"use strict";i.d(e,{Y:function(){return O}});var s=i(33642),n=(i(41939),i(4230)),a=i(13572),r=i(27613),c=i(81954),o=i(40695),l=i(67004),u=i(31572),d=i(84608),h=i(61511),b=i(67806),p=i(39571),g=i(59403),f=i(15980),E=i(37665),m=i(44973),y=i(48160);let S=(()=>{class t{constructor(){this.resourceSelected=new u.vpe,this.nameFunction=t=>t.name}ngOnInit(){this.resources=this.resources.sort(r.aC)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["perun-web-apps-resource-search-select"]],inputs:{resources:"resources"},outputs:{resourceSelected:"resourceSelected"},decls:4,vars:12,consts:[[3,"entities","searchFunction","mainTextFunction","selectPlaceholder","findPlaceholder","noEntriesText","entitySelected"]],template:function(t,e){1&t&&(u.TgZ(0,"perun-web-apps-entity-search-select",0),u.NdJ("entitySelected",function(t){return e.resourceSelected.emit(t)}),u.ALo(1,"translate"),u.ALo(2,"translate"),u.ALo(3,"translate"),u.qZA()),2&t&&u.Q6J("entities",e.resources)("searchFunction",e.nameFunction)("mainTextFunction",e.nameFunction)("selectPlaceholder",u.lcZ(1,6,"SHARED_LIB.PERUN.COMPONENTS.RESOURCE_SEARCH_SELECT.SELECT_RESOURCE"))("findPlaceholder",u.lcZ(2,8,"SHARED_LIB.PERUN.COMPONENTS.RESOURCE_SEARCH_SELECT.FIND_RESOURCE"))("noEntriesText",u.lcZ(3,10,"SHARED_LIB.PERUN.COMPONENTS.RESOURCE_SEARCH_SELECT.NO_RESOURCE_FOUND"))},directives:[m.i],pipes:[y.X$],styles:[""]}),t})(),I=(()=>{class t{constructor(){this.memberSelected=new u.vpe,this.memberFullNameFunction=t=>(0,r.bD)(t.user)}ngOnInit(){this.members=this.members.sort(r.fx)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["perun-web-apps-member-search-select"]],inputs:{members:"members"},outputs:{memberSelected:"memberSelected"},decls:4,vars:12,consts:[[3,"entities","searchFunction","mainTextFunction","selectPlaceholder","findPlaceholder","noEntriesText","entitySelected"]],template:function(t,e){1&t&&(u.TgZ(0,"perun-web-apps-entity-search-select",0),u.NdJ("entitySelected",function(t){return e.memberSelected.emit(t)}),u.ALo(1,"translate"),u.ALo(2,"translate"),u.ALo(3,"translate"),u.qZA()),2&t&&u.Q6J("entities",e.members)("searchFunction",e.memberFullNameFunction)("mainTextFunction",e.memberFullNameFunction)("selectPlaceholder",u.lcZ(1,6,"SHARED_LIB.PERUN.COMPONENTS.MEMBER_SEARCH_SELECT.SELECT_MEMBER"))("findPlaceholder",u.lcZ(2,8,"SHARED_LIB.PERUN.COMPONENTS.MEMBER_SEARCH_SELECT.FIND_MEMBER"))("noEntriesText",u.lcZ(3,10,"SHARED_LIB.PERUN.COMPONENTS.MEMBER_SEARCH_SELECT.NO_MEMBER_FOUND"))},directives:[m.i],pipes:[y.X$],styles:[""]}),t})(),A=(()=>{class t{constructor(){this.facilitySelected=new u.vpe,this.nameFunction=t=>t.name}ngOnInit(){this.facilities=this.facilities.sort(r.aC)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["perun-web-apps-facility-search-select"]],inputs:{facilities:"facilities"},outputs:{facilitySelected:"facilitySelected"},decls:4,vars:12,consts:[[3,"entities","searchFunction","mainTextFunction","selectPlaceholder","findPlaceholder","noEntriesText","entitySelected"]],template:function(t,e){1&t&&(u.TgZ(0,"perun-web-apps-entity-search-select",0),u.NdJ("entitySelected",function(t){return e.facilitySelected.emit(t)}),u.ALo(1,"translate"),u.ALo(2,"translate"),u.ALo(3,"translate"),u.qZA()),2&t&&u.Q6J("entities",e.facilities)("searchFunction",e.nameFunction)("mainTextFunction",e.nameFunction)("selectPlaceholder",u.lcZ(1,6,"SHARED_LIB.PERUN.COMPONENTS.FACILITY_SEARCH_SELECT.SELECT_FACILITY"))("findPlaceholder",u.lcZ(2,8,"SHARED_LIB.PERUN.COMPONENTS.FACILITY_SEARCH_SELECT.FIND_FACILITY"))("noEntriesText",u.lcZ(3,10,"SHARED_LIB.PERUN.COMPONENTS.FACILITY_SEARCH_SELECT.NO_FACILITY_FOUND"))},directives:[m.i],pipes:[y.X$],styles:[""]}),t})();var T=i(7927),w=i(41186);const M=["list"];function Z(t,e){1&t&&u._UZ(0,"mat-spinner",4)}function v(t,e){if(1&t&&(u.TgZ(0,"app-alert",5),u._uU(1),u.qZA()),2&t){const t=u.oxw();u.xp6(1),u.Oqu(t.noEntityMessage)}}function C(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"perun-web-apps-group-search-select",17),u.NdJ("groupSelected",function(e){return u.CHM(t),u.oxw(2).specifySecondEntity(e)}),u.qZA()}if(2&t){const t=u.oxw(2);u.Q6J("groups",t.entityValues)}}function R(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"perun-web-apps-resource-search-select",18),u.NdJ("resourceSelected",function(e){return u.CHM(t),u.oxw(2).specifySecondEntity(e)}),u.qZA()}if(2&t){const t=u.oxw(2);u.Q6J("resources",t.entityValues)}}function x(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"perun-web-apps-member-search-select",19),u.NdJ("memberSelected",function(e){return u.CHM(t),u.oxw(2).specifySecondEntity(e)}),u.qZA()}if(2&t){const t=u.oxw(2);u.Q6J("members",t.entityValues)}}function _(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"perun-web-apps-facility-search-select",20),u.NdJ("facilitySelected",function(e){return u.CHM(t),u.oxw(2).specifySecondEntity(e)}),u.qZA()}if(2&t){const t=u.oxw(2);u.Q6J("facilities",t.entityValues)}}function L(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"perun-web-apps-user-search-select",21),u.NdJ("userSelected",function(e){return u.CHM(t),u.oxw(2).specifySecondEntity(e)}),u.qZA()}if(2&t){const t=u.oxw(2);u.Q6J("users",t.entityValues)}}function N(t,e){1&t&&u._UZ(0,"mat-spinner",4)}function k(t,e){if(1&t&&u._UZ(0,"perun-web-apps-attributes-list",22,23),2&t){const t=u.oxw(2);u.Q6J("attributes",t.attributes)("selection",t.selection)}}function U(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"div"),u.TgZ(1,"div",6),u.YNc(2,C,1,1,"perun-web-apps-group-search-select",7),u.YNc(3,R,1,1,"perun-web-apps-resource-search-select",8),u.YNc(4,x,1,1,"perun-web-apps-member-search-select",9),u.YNc(5,_,1,1,"perun-web-apps-facility-search-select",10),u.YNc(6,L,1,1,"perun-web-apps-user-search-select",11),u.qZA(),u.TgZ(7,"perun-web-apps-refresh-button",12),u.NdJ("refresh",function(){u.CHM(t);const e=u.oxw();return e.getAttributes(e.specificSecondEntity.id)}),u.qZA(),u.TgZ(8,"button",13),u.NdJ("click",function(){u.CHM(t);const e=u.oxw();return e.onAdd(e.specificSecondEntity.id)}),u._uU(9),u.ALo(10,"translate"),u.qZA(),u.TgZ(11,"button",14),u.NdJ("click",function(){u.CHM(t);const e=u.oxw();return e.onSave(e.specificSecondEntity.id)}),u._uU(12),u.ALo(13,"translate"),u.qZA(),u.TgZ(14,"button",15),u.NdJ("click",function(){u.CHM(t);const e=u.oxw();return e.onDelete(e.specificSecondEntity.id)}),u._uU(15),u.ALo(16,"translate"),u.qZA(),u.YNc(17,N,1,0,"mat-spinner",1),u.YNc(18,k,2,2,"perun-web-apps-attributes-list",16),u.qZA()}if(2&t){const t=u.oxw();u.xp6(2),u.Q6J("ngIf","group"===t.secondEntity),u.xp6(1),u.Q6J("ngIf","resource"===t.secondEntity),u.xp6(1),u.Q6J("ngIf","member"===t.secondEntity),u.xp6(1),u.Q6J("ngIf","facility"===t.secondEntity),u.xp6(1),u.Q6J("ngIf","user"===t.secondEntity),u.xp6(3),u.hij(" ",u.lcZ(10,12,"MEMBER_DETAIL.SETTINGS.ATTRIBUTES.CREATE")," "),u.xp6(2),u.Q6J("disabled",0===t.selection.selected.length),u.xp6(1),u.hij(" ",u.lcZ(13,14,"MEMBER_DETAIL.SETTINGS.ATTRIBUTES.SAVE")," "),u.xp6(2),u.Q6J("disabled",0===t.selection.selected.length),u.xp6(1),u.hij(" ",u.lcZ(16,16,"MEMBER_DETAIL.SETTINGS.ATTRIBUTES.DELETE")," "),u.xp6(2),u.Q6J("ngIf",t.innerLoading),u.xp6(1),u.Q6J("ngIf",!t.innerLoading)}}let O=(()=>{class t{constructor(t,e,i,s,a,r){this.attributesManagerService=t,this.resourcesManagerService=e,this.facilitiesManagerService=i,this.groupsManagerService=s,this.membersManager=a,this.dialog=r,this.entityValues=[],this.attributes=[],this.selection=new n.Ov(!0,[]),this.allowedStatuses=["INVALID","VALID"],this.loading=!1,this.innerLoading=!1}ngOnInit(){this.loadEntityValues(),this.setMessages(this.secondEntity.toLowerCase())}loadEntityValues(){switch(this.loading=!0,this.firstEntity){case"member":switch(this.secondEntity){case"resource":this.resourcesManagerService.getAllowedResources(this.firstEntityId).subscribe(t=>{this.entityValues=t,this.preselectEntity(),this.loading=!1});break;case"group":this.groupsManagerService.getMemberGroups(this.firstEntityId).subscribe(t=>{this.entityValues=t,this.preselectEntity(),this.loading=!1})}break;case"group":switch(this.secondEntity){case"resource":this.resourcesManagerService.getAssignedResourcesWithGroup(this.firstEntityId).subscribe(t=>{this.entityValues=t,this.preselectEntity(),this.loading=!1});break;case"member":this.membersManager.getCompleteRichMembersForGroup(this.firstEntityId,!1,this.allowedStatuses,null,[l.r.MEMBER_CORE_ID]).subscribe(t=>{this.entityValues=t,this.preselectEntity(),this.loading=!1})}break;case"user":this.facilitiesManagerService.getAssignedFacilitiesByUser(this.firstEntityId).subscribe(t=>{this.entityValues=t,this.preselectEntity(),this.loading=!1});break;case"resource":switch(this.secondEntity){case"member":this.resourcesManagerService.getAssignedRichMembers(this.firstEntityId).subscribe(t=>{this.entityValues=t,this.preselectEntity(),this.loading=!1});break;case"group":this.resourcesManagerService.getAssignedGroups(this.firstEntityId).subscribe(t=>{this.entityValues=t,this.preselectEntity(),this.loading=!1})}break;case"facility":this.facilitiesManagerService.getAssignedUsers(this.firstEntityId).subscribe(t=>{this.entityValues=t,this.preselectEntity(),this.loading=!1})}}preselectEntity(){0!==this.entityValues.length&&this.specifySecondEntity(this.entityValues[0])}getAttributes(t){switch(this.innerLoading=!0,this.firstEntity){case"member":switch(this.secondEntity){case"resource":this.attributesManagerService.getMemberResourceAttributes(this.firstEntityId,t).subscribe(t=>{this.attributes=t,this.innerLoading=!1});break;case"group":this.attributesManagerService.getMemberGroupAttributes(this.firstEntityId,t).subscribe(t=>{this.attributes=t,this.innerLoading=!1})}break;case"group":switch(this.secondEntity){case"resource":this.attributesManagerService.getGroupResourceAttributes(this.firstEntityId,t).subscribe(t=>{this.attributes=t,this.innerLoading=!1});break;case"member":this.attributesManagerService.getMemberGroupAttributes(t,this.firstEntityId).subscribe(t=>{this.attributes=t,this.innerLoading=!1})}break;case"user":this.attributesManagerService.getUserFacilityAttributes(this.firstEntityId,t).subscribe(t=>{this.attributes=t,this.innerLoading=!1});break;case"resource":switch(this.secondEntity){case"member":this.attributesManagerService.getMemberResourceAttributes(t,this.firstEntityId).subscribe(t=>{this.attributes=t,this.innerLoading=!1});break;case"group":this.attributesManagerService.getGroupResourceAttributes(t,this.firstEntityId).subscribe(t=>{this.attributes=t,this.innerLoading=!1})}break;case"facility":this.attributesManagerService.getUserFacilityAttributes(t,this.firstEntityId).subscribe(t=>{this.attributes=t,this.innerLoading=!1})}}setMessages(t){this.noEntityMessage=`No ${t} assigned`}onSave(t){this.list.updateMapAttributes();const e=(0,r.kZ)();e.width="450px",e.data={entityId:this.firstEntityId,entity:this.firstEntity,secondEntity:this.secondEntity,secondEntityId:t,attributes:this.selection.selected},this.dialog.open(c.wA,e).afterClosed().subscribe(e=>{e&&(this.selection.clear(),this.getAttributes(t))})}onDelete(t){const e=(0,r.kZ)();e.width="450px",e.data={entityId:this.firstEntityId,entity:this.firstEntity,secondEntity:this.secondEntity,secondEntityId:t,attributes:this.selection.selected,theme:`${this.firstEntity}-theme`},this.dialog.open(a.k,e).afterClosed().subscribe(e=>{e&&(this.selection.clear(),this.getAttributes(t))})}onAdd(t){const e=(0,r.kZ)();e.width="1050px",e.data={entityId:this.firstEntityId,entity:this.firstEntity,secondEntity:this.secondEntity,secondEntityId:t,notEmptyAttributes:this.attributes,style:`${this.firstEntity}-theme`},this.dialog.open(o.n,e).afterClosed().subscribe(e=>{e&&(this.selection.clear(),this.getAttributes(t))})}specifySecondEntity(t){t&&(this.specificSecondEntity=t,this.getAttributes(this.specificSecondEntity.id))}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(s.H8),u.Y36(s.xk),u.Y36(s.IQ),u.Y36(s.ff),u.Y36(s.uq),u.Y36(d.uw))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-two-entity-attribute-page"]],viewQuery:function(t,e){if(1&t&&u.Gf(M,5),2&t){let t;u.iGM(t=u.CRH())&&(e.list=t.first)}},inputs:{firstEntityId:"firstEntityId",firstEntity:"firstEntity",secondEntity:"secondEntity"},decls:4,vars:3,consts:[[1,"mt-3"],["class","ml-auto mr-auto",4,"ngIf"],["alert_type","warn",4,"ngIf"],[4,"ngIf"],[1,"ml-auto","mr-auto"],["alert_type","warn"],[1,"flex-row"],[3,"groups","groupSelected",4,"ngIf"],[3,"resources","resourceSelected",4,"ngIf"],[3,"members","memberSelected",4,"ngIf"],[3,"facilities","facilitySelected",4,"ngIf"],[3,"users","userSelected",4,"ngIf"],[3,"refresh"],["mat-flat-button","","color","accent",1,"mr-2",3,"click"],["mat-flat-button","","color","accent",1,"mr-2",3,"disabled","click"],["mat-flat-button","","color","warn",3,"disabled","click"],[3,"attributes","selection",4,"ngIf"],[3,"groups","groupSelected"],[3,"resources","resourceSelected"],[3,"members","memberSelected"],[3,"facilities","facilitySelected"],[3,"users","userSelected"],[3,"attributes","selection"],["list",""]],template:function(t,e){1&t&&(u.TgZ(0,"div",0),u.YNc(1,Z,1,0,"mat-spinner",1),u.YNc(2,v,2,1,"app-alert",2),u.YNc(3,U,19,18,"div",3),u.qZA()),2&t&&(u.xp6(1),u.Q6J("ngIf",e.loading),u.xp6(1),u.Q6J("ngIf",0===e.entityValues.length&&!e.loading),u.xp6(1),u.Q6J("ngIf",0!==e.entityValues.length))},directives:[h.O5,b.$g,p.w,g.t,f.lW,E.h,S,I,A,T.S,w.p],pipes:[y.X$],styles:[".w-35[_ngcontent-%COMP%]{width:35%}"]}),t})()},8557:function(t,e,i){"use strict";i.d(e,{L:function(){return h}});var s=i(31572),n=i(84608),a=i(57629),r=i(61511),c=i(71522),o=i(43691),l=i(48160);function u(t,e){if(1&t&&(s.TgZ(0,"div",3),s.TgZ(1,"a",4),s._UZ(2,"mat-icon",5),s._uU(3),s.ALo(4,"translate"),s.qZA(),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.Gre("",t.style," item-itself"),s.Q6J("routerLink",t.url),s.xp6(1),s.Q6J("svgIcon",t.cssIcon),s.xp6(1),s.hij(" ",s.lcZ(4,6,t.label)," ")}}function d(t,e){if(1&t&&(s.TgZ(0,"div",1),s.YNc(1,u,5,8,"div",2),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngForOf",t.items)}}let h=(()=>{class t{constructor(t,e){this.dialog=t,this.route=e,this.size="large"}ngOnInit(){this.route.params.subscribe(t=>{this.voId=t.voId})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(n.uw),s.Y36(a.gz))},t.\u0275cmp=s.Xpm({type:t,selectors:[["perun-web-apps-menu-buttons-field"]],inputs:{items:"items",size:"size"},decls:1,vars:1,consts:[["class","items-container",4,"ngIf"],[1,"items-container"],["class","item-itself-container","mat-ripple","",4,"ngFor","ngForOf"],["mat-ripple","",1,"item-itself-container"],["queryParamsHandling","merge",3,"routerLink"],[1,"item-pic","perun-icon",3,"svgIcon"]],template:function(t,e){1&t&&s.YNc(0,d,2,1,"div",0),2&t&&s.Q6J("ngIf","small"===e.size)},directives:[r.O5,r.sg,c.wG,a.yS,o.Hw],pipes:[l.X$],styles:[".items-container[_ngcontent-%COMP%]{display:grid;grid-gap:0;grid-template-columns:repeat(auto-fill,minmax(208px,1fr));margin:0 -8px}@media (max-width:768px){.items-container[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fill,minmax(148px,1fr))}}.item-pic[_ngcontent-%COMP%]{color:currentColor;transform:scale(3);height:74px;margin-bottom:22px}.item-itself-container[_ngcontent-%COMP%]{margin:8px}.item-itself[_ngcontent-%COMP%]{text-align:center;min-height:186px;height:100%;padding:20px;display:flex;flex-direction:column;align-items:center;font-size:1.25rem}.item-itself[_ngcontent-%COMP%]:hover{text-decoration:none}.item-itself[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:120px;margin-bottom:10px}@media (max-width:768px){.item-itself[_ngcontent-%COMP%]{min-height:150px;padding:10px}.item-itself[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80px;margin-bottom:10px}}"]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Fm3m:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var i=s("X2Q7"),r=s("Iydx"),c=s("EM62"),n=s("sEIs"),o=s("2kYt"),a=s("NU+N");function u(e,t){if(1&e&&c.Rb(0,"app-managers-page",1),2&e){const e=c.ic();c.oc("complementaryObject",e.resource)("complementaryObjectType",e.type)("theme",e.theme)("availableRoles",e.availableRoles)}}let l=(()=>{class e{constructor(e,t){this.route=e,this.resourceService=t,this.availableRoles=[r.a.RESOURCEADMIN],this.type="Resource",this.theme="resource-theme"}ngOnInit(){this.route.parent.parent.params.subscribe(e=>{this.resourceService.getResourceById(e.resourceId).subscribe(e=>{this.resource=e})})}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(n.a),c.Qb(i.m))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-resource-settings-managers"]],decls:1,vars:1,consts:[[3,"complementaryObject","complementaryObjectType","theme","availableRoles",4,"ngIf"],[3,"complementaryObject","complementaryObjectType","theme","availableRoles"]],template:function(e,t){1&e&&c.Jc(0,u,1,4,"app-managers-page",0),2&e&&c.oc("ngIf",t.resource)},directives:[o.t,a.a],styles:[""]}),e})()},GyaY:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var i=s("TkCa"),r=s("EM62"),c=s("ma6z");let n=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Kb({type:e,selectors:[["app-resource-settings"]],hostVars:2,hostBindings:function(e,t){2&e&&r.Gb("router-component",!0)},decls:1,vars:0,template:function(e,t){1&e&&r.Rb(0,"app-animated-router-outlet")},directives:[c.a],styles:[""],data:{animation:[i.a]}}),e})()},HUrR:function(e,t,s){"use strict";s.d(t,"a",(function(){return b}));var i=s("X2Q7"),r=s("EM62"),c=s("sEIs"),n=s("2kYt"),o=s("csyo"),a=s("ZG5M");function u(e,t){1&e&&r.Rb(0,"mat-spinner",2)}function l(e,t){if(1&e&&(r.Wb(0,"div"),r.Rb(1,"perun-web-apps-menu-buttons-field",3),r.Vb()),2&e){const e=r.ic();r.Cb(1),r.oc("items",e.items)("size","small")}}let b=(()=>{class e{constructor(e,t){this.route=e,this.resourceManager=t,this.items=[],this.loading=!1}ngOnInit(){this.loading=!0,this.route.parent.parent.params.subscribe(e=>{this.resourceManager.getResourceById(e.resourceId).subscribe(e=>{this.resource=e,this.initItems("facilities"!==this.route.parent.parent.parent.snapshot.url[0].path),this.loading=!1},()=>this.loading=!1)})}initItems(e){this.items=[{cssIcon:"perun-manager",url:`${e?"/organizations/"+this.resource.voId:"/facilities/"+this.resource.facilityId}/resources/${this.resource.id}/settings/managers`,label:"MENU_ITEMS.RESOURCE.MANAGERS",style:"resource-btn"}]}}return e.\u0275fac=function(t){return new(t||e)(r.Qb(c.a),r.Qb(i.m))},e.\u0275cmp=r.Kb({type:e,selectors:[["app-resource-settings-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&r.Gb("router-component",!0)},decls:2,vars:2,consts:[["class","mr-auto ml-auto",4,"ngIf"],[4,"ngIf"],[1,"mr-auto","ml-auto"],[3,"items","size"]],template:function(e,t){1&e&&(r.Jc(0,u,1,0,"mat-spinner",0),r.Jc(1,l,2,2,"div",1)),2&e&&(r.oc("ngIf",t.loading),r.Cb(1),r.oc("ngIf",!t.loading))},directives:[n.t,o.c,a.a],styles:[""]}),e})()},TNye:function(e,t,s){"use strict";s.d(t,"a",(function(){return y}));var i=s("X2Q7"),r=s("iyZ4"),c=s("cqs0"),n=s("8clQ"),o=s("/bE8"),a=s("ESXS"),u=s("Ssnw"),l=s("EM62"),b=s("sEIs"),h=s("OZ4H"),d=s("0XDM"),p=s("2kYt"),g=s("A8Ay"),f=s("PBFl"),m=s("csyo"),I=s("gcZR"),S=s("s2Ay");function E(e,t){if(1&e){const e=l.Xb();l.Wb(0,"button",7),l.ec("click",(function(){return l.Bc(e),l.ic().addService()})),l.Lc(1),l.jc(2,"translate"),l.Vb()}2&e&&(l.Cb(1),l.Nc(" ",l.kc(2,1,"RESOURCE_DETAIL.ASSIGNED_SERVICES.ADD_SERVICE"),"\n"))}function R(e,t){if(1&e){const e=l.Xb();l.Wb(0,"button",8),l.ec("click",(function(){return l.Bc(e),l.ic().removeServices()})),l.Lc(1),l.jc(2,"translate"),l.Vb()}if(2&e){const e=l.ic();l.oc("disabled",0===e.selected.selected.length),l.Cb(1),l.Nc(" ",l.kc(2,2,"RESOURCE_DETAIL.ASSIGNED_SERVICES.REMOVE_SERVICE"),"\n")}}function v(e,t){1&e&&l.Rb(0,"mat-spinner",9)}const C=function(){return[]},A=function(){return["select"]};function T(e,t){if(1&e){const e=l.Xb();l.Wb(0,"app-services-list",10),l.ec("page",(function(t){return l.Bc(e),l.ic().pageChanged(t)})),l.Vb()}if(2&e){const e=l.ic();l.oc("pageSize",e.pageSize)("services",e.assignedServices)("selection",e.selected)("filterValue",e.filterValue)("hideColumns",e.removeServiceAuth?l.sc(6,C):l.sc(7,A))("disableRouting",!e.serviceRoutingAuth)}}let y=(()=>{class e{constructor(e,t,s,i,n){this.route=e,this.resourcesManager=t,this.tableConfigService=s,this.dialog=i,this.guiAuthResolver=n,this.assignedServices=[],this.selected=new c.c(!0,[]),this.tableId=r.N,this.filterValue=""}ngOnInit(){this.loading=!0,this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe(e=>{this.resourceId=e.resourceId,this.resourcesManager.getResourceById(this.resourceId).subscribe(e=>{this.resource=e,this.getDataForAuthorization(),this.loadAllServices()})})}loadAllServices(){this.loading=!0,this.resourcesManager.getAssignedServicesToResource(this.resourceId).subscribe(e=>{this.assignedServices=e,this.selected.clear(),this.loading=!1})}addService(){const e=Object(n.k)();e.width="800px",e.data={theme:"resource-theme",resourceId:this.resourceId},this.dialog.open(o.a,e).afterClosed().subscribe(e=>{e&&this.loadAllServices()})}removeServices(){const e=Object(n.k)();e.width="500px",e.data={theme:"resource-theme",resourceId:this.resourceId,services:this.selected.selected},this.dialog.open(a.a,e).afterClosed().subscribe(e=>{e&&this.loadAllServices()})}applyFilter(e){this.filterValue=e}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}getDataForAuthorization(){this.assignServiceAuth=this.guiAuthResolver.isAuthorized("assignServices_Resource_List<Service>_policy",[this.resource]),this.removeServiceAuth=this.guiAuthResolver.isAuthorized("removeServices_Resource_List<Service>_policy",[this.resource]),this.serviceRoutingAuth=this.guiAuthResolver.isPerunAdmin()}}return e.\u0275fac=function(t){return new(t||e)(l.Qb(b.a),l.Qb(i.m),l.Qb(r.lb),l.Qb(h.b),l.Qb(u.g))},e.\u0275cmp=l.Kb({type:e,selectors:[["app-perun-web-apps-resource-assigned-services"]],decls:9,vars:8,consts:[[1,"page-subtitle"],[3,"refresh"],["color","accent","mat-flat-button","",3,"click",4,"ngIf"],["mat-flat-button","","color","warn","class","ml-2",3,"disabled","click",4,"ngIf"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","services","selection","filterValue","hideColumns","disableRouting","page",4,"ngIf"],["color","accent","mat-flat-button","",3,"click"],["mat-flat-button","","color","warn",1,"ml-2",3,"disabled","click"],[1,"ml-auto","mr-auto"],[3,"pageSize","services","selection","filterValue","hideColumns","disableRouting","page"]],template:function(e,t){1&e&&(l.Wb(0,"h1",0),l.Lc(1),l.jc(2,"translate"),l.Vb(),l.Wb(3,"perun-web-apps-refresh-button",1),l.ec("refresh",(function(){return t.loadAllServices()})),l.Vb(),l.Jc(4,E,3,3,"button",2),l.Jc(5,R,3,4,"button",3),l.Wb(6,"perun-web-apps-immediate-filter",4),l.ec("filter",(function(e){return t.applyFilter(e)})),l.Vb(),l.Jc(7,v,1,0,"mat-spinner",5),l.Jc(8,T,1,8,"app-services-list",6)),2&e&&(l.Cb(1),l.Mc(l.kc(2,6,"RESOURCE_DETAIL.ASSIGNED_SERVICES.TITLE")),l.Cb(3),l.oc("ngIf",!t.loadingResource&&t.assignServiceAuth),l.Cb(1),l.oc("ngIf",!t.loadingResource&&t.removeServiceAuth),l.Cb(1),l.oc("placeholder","RESOURCE_DETAIL.ASSIGNED_SERVICES.FILTER_SERVICES"),l.Cb(1),l.oc("ngIf",t.loading),l.Cb(1),l.oc("ngIf",!t.loading))},directives:[d.a,p.t,g.a,f.b,m.c,I.a],pipes:[S.d],styles:[""]}),e})()},gxIj:function(e,t,s){"use strict";s.d(t,"a",(function(){return A}));var i=s("Ssnw"),r=(s("HHEo"),s("cqs0")),c=s("mEf3"),n=s("8clQ"),o=s("X2Q7"),a=s("iyZ4"),u=s("+0js"),l=s("IDQ9"),b=s("EM62"),h=s("sEIs"),d=s("OZ4H"),p=s("s2Ay"),g=s("0XDM"),f=s("PBFl"),m=s("A8Ay"),I=s("2kYt"),S=s("csyo"),E=s("LKLE");const R=["list"];function v(e,t){1&e&&b.Rb(0,"mat-spinner",8)}function C(e,t){if(1&e){const e=b.Xb();b.Wb(0,"perun-web-apps-attributes-list",9,10),b.ec("page",(function(t){return b.Bc(e),b.ic().pageChanged(t)})),b.Vb()}if(2&e){const e=b.ic();b.oc("pageSize",e.pageSize)("filterValue",e.filterValue)("attributes",e.attributes)("selection",e.selection)}}let A=(()=>{class e{constructor(e,t,s,i,c,n){this.attributesManager=e,this.route=t,this.dialog=s,this.notificator=i,this.tableConfigService=c,this.translate=n,this.attributes=[],this.selection=new r.c(!0,[]),this.filterValue="",this.tableId=a.n,this.translate.get("RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE").subscribe(e=>this.saveSuccessMessage=e),this.translate.get("RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE").subscribe(e=>this.deleteSuccessMessage=e)}ngOnInit(){this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe(e=>{this.resourceId=e.resourceId,this.refreshTable()})}onDelete(){const e=Object(n.k)();e.width="450px",e.data={entityId:this.resourceId,entity:"resource",attributes:this.selection.selected,theme:"resource-theme"},this.dialog.open(c.a,e).afterClosed().subscribe(e=>{e&&this.refreshTable()})}onSave(){this.list.updateMapAttributes();const e=Object(n.k)();e.width="450px",e.data={entityId:this.resourceId,entity:"resource",attributes:this.selection.selected},this.dialog.open(u.d,e).afterClosed().subscribe(e=>{e&&this.refreshTable()})}onCreate(){const e=Object(n.k)();e.width="1050px",e.data={entityId:this.resourceId,entity:"resource",notEmptyAttributes:this.attributes,style:"resource-theme"},this.dialog.open(l.a,e).afterClosed().subscribe(e=>{"saved"===e&&this.refreshTable()})}refreshTable(){this.loading=!0,this.attributesManager.getResourceAttributes(this.resourceId).subscribe(e=>{this.attributes=e,this.selection.clear(),this.loading=!1})}applyFilter(e){this.filterValue=e}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(o.c),b.Qb(h.a),b.Qb(d.b),b.Qb(i.k),b.Qb(a.lb),b.Qb(p.e))},e.\u0275cmp=b.Kb({type:e,selectors:[["app-resource-attributes"]],viewQuery:function(e,t){var s;1&e&&b.Tc(R,!0),2&e&&b.wc(s=b.fc())&&(t.list=s.first)},hostVars:2,hostBindings:function(e,t){2&e&&b.Gb("router-component",!0)},decls:17,vars:17,consts:[[1,"page-subtitle"],[3,"refresh"],["mat-flat-button","","color","accent",1,"mr-2",3,"click"],["mat-flat-button","","color","accent",1,"mr-2",3,"disabled","click"],["mat-flat-button","","color","warn",3,"disabled","click"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","filterValue","attributes","selection","page",4,"ngIf"],[1,"ml-auto","mr-auto"],[3,"pageSize","filterValue","attributes","selection","page"],["list",""]],template:function(e,t){1&e&&(b.Wb(0,"div"),b.Wb(1,"h1",0),b.Lc(2),b.jc(3,"translate"),b.Vb(),b.Wb(4,"perun-web-apps-refresh-button",1),b.ec("refresh",(function(){return t.refreshTable()})),b.Vb(),b.Wb(5,"button",2),b.ec("click",(function(){return t.onCreate()})),b.Lc(6),b.jc(7,"translate"),b.Vb(),b.Wb(8,"button",3),b.ec("click",(function(){return t.onSave()})),b.Lc(9),b.jc(10,"translate"),b.Vb(),b.Wb(11,"button",4),b.ec("click",(function(){return t.onDelete()})),b.Lc(12),b.jc(13,"translate"),b.Vb(),b.Wb(14,"perun-web-apps-immediate-filter",5),b.ec("filter",(function(e){return t.applyFilter(e)})),b.Vb(),b.Jc(15,v,1,0,"mat-spinner",6),b.Jc(16,C,2,4,"perun-web-apps-attributes-list",7),b.Vb()),2&e&&(b.Cb(2),b.Mc(b.kc(3,9,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.TITLE")),b.Cb(4),b.Nc(" ",b.kc(7,11,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.CREATE")," "),b.Cb(2),b.oc("disabled",0===t.selection.selected.length),b.Cb(1),b.Nc(" ",b.kc(10,13,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SAVE")," "),b.Cb(2),b.oc("disabled",0===t.selection.selected.length),b.Cb(1),b.Nc(" ",b.kc(13,15,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.DELETE")," "),b.Cb(2),b.oc("placeholder","SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER"),b.Cb(1),b.oc("ngIf",t.loading),b.Cb(1),b.oc("ngIf",!t.loading))},directives:[g.a,f.b,m.a,I.t,S.c,E.a],pipes:[p.d],styles:[""]}),e})()},jblC:function(e,t,s){"use strict";s.d(t,"a",(function(){return k}));var i=s("X2Q7"),r=s("cqs0"),c=s("ILoV"),n=s("VEwN"),o=s("iyZ4"),a=s("8clQ"),u=s("Ssnw"),l=s("EM62"),b=s("sEIs"),h=s("OZ4H"),d=s("0XDM"),p=s("2kYt"),g=s("PBFl"),f=s("Y2X+"),m=s("FoxU"),I=s("csyo"),S=s("K9kF"),E=s("FcRk"),R=s("s2Ay");const v=["checkbox"];function C(e,t){if(1&e){const e=l.Xb();l.Wb(0,"button",9),l.ec("click",(function(){return l.Bc(e),l.ic().addGroup()})),l.Lc(1),l.jc(2,"translate"),l.Vb()}2&e&&(l.Cb(1),l.Nc(" ",l.kc(2,1,"RESOURCE_DETAIL.ASSIGNED_GROUPS.ADD_GROUP"),"\n"))}function A(e,t){1&e&&l.Rb(0,"mat-spinner",10)}const T=function(e){return[e]},y=function(){return["vo","menu"]};function M(e,t){if(1&e){const e=l.Xb();l.Wb(0,"div",11),l.Wb(1,"perun-web-apps-groups-list",12),l.ec("page",(function(t){return l.Bc(e),l.ic().pageChanged(t)})),l.Vb(),l.Vb()}if(2&e){const e=l.ic();l.Cb(1),l.oc("pageSize",e.pageSize)("groups",e.assignedGroups)("filter",e.filteredValue)("selection",e.selected)("disableMembers",!1)("disableRouting",!e.guiAuthResolver.isAuthorized("getGroupById_int_policy",l.tc(7,T,e.assignedGroups[0])))("hideColumns",l.sc(9,y))}}function _(e,t){1&e&&(l.Wb(0,"app-alert",13),l.Lc(1),l.jc(2,"translate"),l.Vb()),2&e&&(l.Cb(1),l.Nc(" ",l.kc(2,1,"RESOURCE_DETAIL.ASSIGNED_GROUPS.NO_GROUPS"),"\n"))}let k=(()=>{class e{constructor(e,t,s,i,c,n){this.route=e,this.resourcesManager=t,this.vosManagerService=s,this.tableConfigService=i,this.dialog=c,this.guiAuthResolver=n,this.assignedGroups=[],this.selected=new r.c(!0,[]),this.filteredValue="",this.tableId=o.M}ngOnInit(){this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.loading=!0,this.route.parent.params.subscribe(e=>{this.resourceId=e.resourceId,this.getDataForAuthorization(),this.loadAllGroups()})}loadAllGroups(){this.loading=!0,this.resourcesManager.getAssignedGroups(this.resourceId).subscribe(e=>{this.assignedGroups=e,this.selected.clear(),this.loading=!1})}addGroup(){const e=Object(a.k)();e.width="800px",e.data={theme:"resource-theme",resource:this.resource},this.dialog.open(n.a,e).afterClosed().subscribe(e=>{e&&this.loadAllGroups()})}removeGroups(){const e=Object(a.k)();e.width="500px",e.data={resourceId:this.resourceId,groups:this.selected.selected,theme:"resource-theme"},this.dialog.open(c.a,e).afterClosed().subscribe(e=>{e&&this.loadAllGroups()})}canRemoveGroups(){let e=!0;return this.selected.selected.forEach(t=>{this.guiAuthResolver.isAuthorized("removeGroupsFromResource_List<Group>_Resource_policy",[this.resource,t])||(e=!1)}),e}applyFilter(e){this.filteredValue=e}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}getDataForAuthorization(){this.loadingResource=!0,this.resourcesManager.getResourceById(this.resourceId).subscribe(e=>{this.resource=e,this.loadingResource=!1})}}return e.\u0275fac=function(t){return new(t||e)(l.Qb(b.a),l.Qb(i.m),l.Qb(i.q),l.Qb(o.lb),l.Qb(h.b),l.Qb(u.g))},e.\u0275cmp=l.Kb({type:e,selectors:[["app-perun-web-apps-resource-groups"]],viewQuery:function(e,t){var s;1&e&&l.Hc(v,!0),2&e&&l.wc(s=l.fc())&&(t.checkbox=s.first)},decls:14,vars:18,consts:[[1,"page-subtitle"],[3,"refresh"],["color","accent","mat-flat-button","",3,"click",4,"ngIf"],["color","warn","mat-flat-button","",1,"ml-2","mr-2",3,"disabled","click"],[3,"matTooltipDisabled","matTooltip"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],["class","mt-3",4,"ngIf"],["color","warn",4,"ngIf"],["color","accent","mat-flat-button","",3,"click"],[1,"ml-auto","mr-auto"],[1,"mt-3"],[3,"pageSize","groups","filter","selection","disableMembers","disableRouting","hideColumns","page"],["color","warn"]],template:function(e,t){1&e&&(l.Wb(0,"h1",0),l.Lc(1),l.jc(2,"translate"),l.Vb(),l.Wb(3,"perun-web-apps-refresh-button",1),l.ec("refresh",(function(){return t.loadAllGroups()})),l.Vb(),l.Jc(4,C,3,3,"button",2),l.Wb(5,"button",3),l.ec("click",(function(){return t.removeGroups()})),l.Wb(6,"span",4),l.jc(7,"translate"),l.Lc(8),l.jc(9,"translate"),l.Vb(),l.Vb(),l.Wb(10,"app-debounce-filter",5),l.ec("filter",(function(e){return t.applyFilter(e)})),l.Vb(),l.Jc(11,A,1,0,"mat-spinner",6),l.Jc(12,M,2,10,"div",7),l.Jc(13,_,3,3,"app-alert",8)),2&e&&(l.Cb(1),l.Mc(l.kc(2,10,"RESOURCE_DETAIL.ASSIGNED_GROUPS.TITLE")),l.Cb(3),l.oc("ngIf",!t.loadingResource&&t.guiAuthResolver.isAuthorized("assignGroupsToResource_List<Group>_Resource_policy",l.tc(16,T,t.resource))),l.Cb(1),l.oc("disabled",0===t.selected.selected.length||!t.canRemoveGroups()),l.Cb(1),l.pc("matTooltip",l.kc(7,12,"RESOURCE_DETAIL.ASSIGNED_GROUPS.REMOVE_TOOLTIP")),l.oc("matTooltipDisabled",t.canRemoveGroups()),l.Cb(2),l.Nc(" ",l.kc(9,14,"RESOURCE_DETAIL.ASSIGNED_GROUPS.REMOVE_GROUP")," "),l.Cb(2),l.oc("placeholder","RESOURCE_DETAIL.ASSIGNED_GROUPS.FILTER_GROUPS"),l.Cb(1),l.oc("ngIf",t.loading),l.Cb(1),l.oc("ngIf",!t.loading&&0!==t.assignedGroups.length),l.Cb(1),l.oc("ngIf",0===t.assignedGroups.length&&!t.loading))},directives:[d.a,p.t,g.b,f.a,m.a,I.c,S.a,E.a],pipes:[R.d],styles:[""]}),e})()},lfUW:function(e,t,s){"use strict";s.d(t,"a",(function(){return S}));var i=s("X2Q7"),r=s("iyZ4"),c=s("Ssnw"),n=s("EM62"),o=s("sEIs"),a=s("2kYt"),u=s("0XDM"),l=s("A8Ay"),b=s("csyo"),h=s("nz2m"),d=s("s2Ay");function p(e,t){if(1&e){const e=n.Xb();n.Wb(0,"perun-web-apps-refresh-button",5),n.ec("refresh",(function(){return n.Bc(e),n.ic().refreshTable()})),n.Vb()}}function g(e,t){if(1&e){const e=n.Xb();n.Wb(0,"perun-web-apps-immediate-filter",6),n.ec("filter",(function(t){return n.Bc(e),n.ic().applyFilter(t)})),n.Vb()}2&e&&n.oc("placeholder","RESOURCE_DETAIL.ASSIGNED_MEMBERS.FILTER")}function f(e,t){1&e&&n.Rb(0,"mat-spinner",7)}const m=function(){return["checkbox","email","status","organization","logins"]};function I(e,t){if(1&e){const e=n.Xb();n.Wb(0,"perun-web-apps-members-list",8),n.ec("page",(function(t){return n.Bc(e),n.ic().pageChanged(t)}))("updateTable",(function(){return n.Bc(e),n.ic().refreshTable()})),n.Vb()}if(2&e){const e=n.ic();n.oc("disableRouting",!e.routeAuth)("filter",e.filterValue)("hideColumns",n.sc(5,m))("members",e.members)("pageSize",e.pageSize)}}let S=(()=>{class e{constructor(e,t,s,i){this.route=e,this.resourceService=t,this.tableConfigService=s,this.authResolver=i,this.loading=!1,this.filterValue="",this.tableId=r.O}ngOnInit(){this.loading=!0,this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe(e=>{this.resourceId=e.resourceId,this.refreshTable()})}refreshTable(){this.loading=!0,this.resourceService.getAssignedRichMembers(this.resourceId).subscribe(e=>{this.members=e,this.setAuthRights(),this.loading=!1})}setAuthRights(){0!==this.members.length&&(this.routeAuth=this.authResolver.isAuthorized("getMemberById_int_policy",[this.members[0]]))}applyFilter(e){this.filterValue=e}pageChanged(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}return e.\u0275fac=function(t){return new(t||e)(n.Qb(o.a),n.Qb(i.m),n.Qb(r.lb),n.Qb(c.g))},e.\u0275cmp=n.Kb({type:e,selectors:[["app-resource-assigned-members"]],decls:7,vars:7,consts:[[1,"page-subtitle"],[3,"refresh",4,"ngIf"],[3,"placeholder","filter",4,"ngIf"],["class","ml-auto mr-auto",4,"ngIf"],[3,"disableRouting","filter","hideColumns","members","pageSize","page","updateTable",4,"ngIf"],[3,"refresh"],[3,"placeholder","filter"],[1,"ml-auto","mr-auto"],[3,"disableRouting","filter","hideColumns","members","pageSize","page","updateTable"]],template:function(e,t){1&e&&(n.Wb(0,"h1",0),n.Lc(1),n.jc(2,"translate"),n.Vb(),n.Jc(3,p,1,0,"perun-web-apps-refresh-button",1),n.Jc(4,g,1,1,"perun-web-apps-immediate-filter",2),n.Jc(5,f,1,0,"mat-spinner",3),n.Jc(6,I,1,6,"perun-web-apps-members-list",4)),2&e&&(n.Cb(1),n.Mc(n.kc(2,5,"RESOURCE_DETAIL.ASSIGNED_MEMBERS.TITLE")),n.Cb(2),n.oc("ngIf",!t.loading),n.Cb(1),n.oc("ngIf",!t.loading),n.Cb(1),n.oc("ngIf",t.loading),n.Cb(1),n.oc("ngIf",!t.loading))},directives:[a.t,u.a,l.a,b.c,h.a],pipes:[d.d],styles:[""]}),e})()},nSPi:function(e,t,s){"use strict";s.d(t,"a",(function(){return w}));var i=s("TkCa"),r=s("4sdY"),c=s("EkAj"),n=s("X2Q7"),o=s("8clQ"),a=s("Ssnw"),u=s("t47Z"),l=s("+0js"),b=s("EM62"),h=s("sEIs"),d=s("OZ4H"),p=s("EtYo"),g=s("2kYt"),f=s("ma6z"),m=s("csyo"),I=s("bFHC"),S=s("Y2X+"),E=s("PBFl"),R=s("s2Ay");function v(e,t){1&e&&b.Rb(0,"mat-spinner",3)}function C(e,t){if(1&e){const e=b.Xb();b.Wb(0,"button",14),b.ec("click",(function(){return b.Bc(e),b.ic(2).editResource()})),b.Wb(1,"mat-icon"),b.Lc(2,"edit"),b.Vb(),b.Vb()}}const A=function(e){return["/organizations",e]};function T(e,t){if(1&e&&(b.Wb(0,"a",8),b.Lc(1),b.Vb()),2&e){const e=b.ic(2);b.oc("routerLink",b.tc(2,A,e.resource.vo.id)),b.Cb(1),b.Mc(e.resource.vo.name)}}function y(e,t){if(1&e&&(b.Wb(0,"span"),b.Lc(1),b.Vb()),2&e){const e=b.ic(2);b.Cb(1),b.Nc(" ",e.resource.vo.name," ")}}const M=function(e){return["/facilities",e]};function _(e,t){if(1&e&&(b.Wb(0,"a",8),b.Lc(1),b.Vb()),2&e){const e=b.ic(2);b.oc("routerLink",b.tc(2,M,e.resource.facilityId)),b.Cb(1),b.Mc(e.resource.facility.name)}}function k(e,t){if(1&e&&(b.Wb(0,"span"),b.Lc(1),b.Vb()),2&e){const e=b.ic(2);b.Cb(1),b.Nc(" ",e.resource.facility.name," ")}}const V=function(){return{color:"black"}},O=function(e){return[e]};function L(e,t){if(1&e&&(b.Wb(0,"div",4),b.Rb(1,"mat-icon",5),b.jc(2,"translate"),b.Wb(3,"div",6),b.Wb(4,"div",7),b.Wb(5,"a",8),b.Lc(6),b.Vb(),b.Wb(7,"span",9),b.Lc(8),b.Vb(),b.Jc(9,C,3,0,"button",10),b.Vb(),b.Wb(10,"span",11),b.Lc(11),b.jc(12,"translate"),b.jc(13,"translate"),b.Jc(14,T,2,4,"a",12),b.Jc(15,y,2,1,"span",13),b.Lc(16),b.jc(17,"translate"),b.Jc(18,_,2,4,"a",12),b.Jc(19,k,2,1,"span",13),b.Lc(20),b.jc(21,"translate"),b.Vb(),b.Vb(),b.Vb()),2&e){const e=b.ic();b.Cb(1),b.pc("matTooltip",b.kc(2,17,"RESOURCE_DETAIL.ENTITY")),b.oc("ngStyle",b.sc(27,V)),b.Cb(4),b.oc("routerLink",b.tc(28,O,e.baseUrl)),b.Cb(1),b.Nc(" ",e.resource.name," "),b.Cb(2),b.Nc(" \xa0#",e.resource.id," "),b.Cb(1),b.oc("ngIf",e.editResourceAuth),b.Cb(2),b.Oc(" ",b.kc(12,19,"RESOURCE_DETAIL.ENTITY"),", ",b.kc(13,21,"RESOURCE_DETAIL.VO"),": "),b.Cb(3),b.oc("ngIf",e.voLinkAuth),b.Cb(1),b.oc("ngIf",!e.voLinkAuth),b.Cb(1),b.Oc(" #",e.resource.voId,", ",b.kc(17,23,"RESOURCE_DETAIL.FACILITY"),": "),b.Cb(2),b.oc("ngIf",e.facilityLinkAuth),b.Cb(1),b.oc("ngIf",!e.facilityLinkAuth),b.Cb(1),b.Pc(" #",e.resource.facilityId,", ",b.kc(21,25,"RESOURCE_DETAIL.DESCRIPTION"),": ",e.resource.description," ")}}let w=(()=>{class e{constructor(e,t,s,i,r,c,n,o){this.route=e,this.facilityManager=t,this.vosManagerService=s,this.resourcesManager=i,this.sideMenuService=r,this.sideMenuItemService=c,this.dialog=n,this.guiAuthResolver=o,this.baseUrl="",this.loading=!1}ngOnInit(){this.loading=!0,this.route.params.subscribe(e=>{this.resourcesManager.getRichResourceById(e.resourceId).subscribe(e=>{this.resource=e,this.setAuth(),"facilities"===this.route.parent.snapshot.url[0].path?(this.baseUrl=(new u.a).transform(e,!1),this.facilityManager.getFacilityById(e.facilityId).subscribe(t=>{const s=this.sideMenuItemService.parseFacility(t),i=this.sideMenuItemService.parseResource(e,!1);this.sideMenuService.setFacilityMenuItems([s,i]),this.loading=!1},()=>this.loading=!1)):(this.baseUrl=(new u.a).transform(e,!0),this.vosManagerService.getVoById(e.voId).subscribe(t=>{const s=this.sideMenuItemService.parseVo(t),i=this.sideMenuItemService.parseResource(e,!0);this.sideMenuService.setAccessMenuItems([s,i]),this.loading=!1},()=>this.loading=!1))})})}setAuth(){this.facilityLinkAuth=this.guiAuthResolver.isAuthorized("getFacilityById_int_policy",[this.resource]),this.editResourceAuth=this.guiAuthResolver.isAuthorized("updateResource_Resource_policy",[this.resource]),this.voLinkAuth=this.guiAuthResolver.isAuthorized("getVoById_int_policy",[this.resource])}editResource(){let e;this.resourcesManager.getResourceById(this.resource.id).subscribe(t=>{e=t;const s=Object(o.k)();s.width="450px",s.data={theme:"resource-theme",resource:e,dialogType:l.f.RESOURCE},this.dialog.open(l.e,s).afterClosed().subscribe(e=>{e&&this.resourcesManager.getRichResourceById(this.resource.id).subscribe(e=>{this.resource=e})})})}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(h.a),b.Qb(n.g),b.Qb(n.q),b.Qb(n.m),b.Qb(r.a),b.Qb(c.a),b.Qb(d.b),b.Qb(a.g))},e.\u0275cmp=b.Kb({type:e,selectors:[["app-resource-detail-page"]],decls:5,vars:2,consts:[[1,"container-fluid","pl-xl-5","pr-xl-5","resource-theme"],["class","mr-auto ml-auto",4,"ngIf"],["class","d-flex page-title-headtitle",4,"ngIf"],[1,"mr-auto","ml-auto"],[1,"d-flex","page-title-headtitle"],["svgIcon","perun-resource-black",1,"perun-icon","perun-icon-detail",3,"matTooltip","ngStyle"],[1,"page-title-block"],[1,"page-title-headline","d-flex","align-items-center"],[1,"resource-link",3,"routerLink"],[1,"text-muted"],["mat-icon-button","","aria-label","Edit resource",3,"click",4,"ngIf"],[1,"mt-1","entity-info"],["class","resource-link",3,"routerLink",4,"ngIf"],[4,"ngIf"],["mat-icon-button","","aria-label","Edit resource",3,"click"]],template:function(e,t){1&e&&(b.Wb(0,"div",0),b.Rb(1,"perun-web-apps-back-button"),b.Jc(2,v,1,0,"mat-spinner",1),b.Jc(3,L,22,30,"div",2),b.Rb(4,"app-animated-router-outlet"),b.Vb()),2&e&&(b.Cb(2),b.oc("ngIf",t.loading),b.Cb(1),b.oc("ngIf",!t.loading&&void 0!==t.resource))},directives:[p.a,g.t,f.a,m.c,I.a,S.a,g.w,h.i,E.b],pipes:[R.d],styles:[".break-line[_ngcontent-%COMP%]{display:inline-block}"],data:{animation:[i.a]}}),e})()},"y/MV":function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var i=s("X2Q7"),r=s("Ssnw"),c=s("EM62"),n=s("sEIs"),o=s("2kYt"),a=s("csyo"),u=s("ZG5M");function l(e,t){1&e&&c.Rb(0,"mat-spinner",2)}function b(e,t){if(1&e&&(c.Wb(0,"div"),c.Rb(1,"perun-web-apps-menu-buttons-field",3),c.Vb()),2&e){const e=c.ic();c.Cb(1),c.oc("items",e.navItems)("size","small")}}let h=(()=>{class e{constructor(e,t,s){this.resourcesManager=e,this.route=t,this.guiAuthResolver=s,this.navItems=[],this.loading=!1}ngOnInit(){this.loading=!0,this.route.params.subscribe(e=>{this.resourcesManager.getResourceById(e.resourceId).subscribe(e=>{this.resource=e,this.initItems("facilities"!==this.route.parent.parent.snapshot.url[0].path),this.loading=!1},()=>this.loading=!1)})}initItems(e){const t=e?"/organizations/"+this.resource.voId:"/facilities/"+this.resource.facilityId;this.navItems=[{cssIcon:"perun-attributes",url:`${t}/resources/${this.resource.id}/attributes`,label:"MENU_ITEMS.RESOURCE.ATTRIBUTES",style:"resource-btn"}],this.guiAuthResolver.isAuthorized("getAssignedGroups_Resource_policy",[this.resource])&&this.navItems.push({cssIcon:"perun-group",url:`${t}/resources/${this.resource.id}/groups`,label:"MENU_ITEMS.RESOURCE.ASSIGNED_GROUPS",style:"resource-btn"}),this.guiAuthResolver.isAuthorized("getAssignedServices_Resource_policy",[this.resource])&&this.navItems.push({cssIcon:"perun-service",url:`/${t}/resources/${this.resource.id}/services`,label:"MENU_ITEMS.RESOURCE.ASSIGNED_SERVICES",style:"resource-btn"}),this.guiAuthResolver.isAuthorized("getAssignedMembers_Resource_policy",[this.resource])&&this.navItems.push({cssIcon:"perun-user",url:`${t}/resources/${this.resource.id}/members`,label:"MENU_ITEMS.RESOURCE.ASSIGNED_MEMBERS",style:"resource-btn"}),this.navItems.push({cssIcon:"perun-settings2",url:`${t}/resources/${this.resource.id}/settings`,label:"MENU_ITEMS.RESOURCE.SETTINGS",style:"resource-btn"})}}return e.\u0275fac=function(t){return new(t||e)(c.Qb(i.m),c.Qb(n.a),c.Qb(r.g))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-resource-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&c.Gb("router-component",!0)},decls:2,vars:2,consts:[["class","mr-auto ml-auto",4,"ngIf"],[4,"ngIf"],[1,"mr-auto","ml-auto"],[3,"items","size"]],template:function(e,t){1&e&&(c.Jc(0,l,1,0,"mat-spinner",0),c.Jc(1,b,2,2,"div",1)),2&e&&(c.oc("ngIf",t.loading),c.Cb(1),c.oc("ngIf",!t.loading))},directives:[o.t,a.c,u.a],styles:[""]}),e})()}}]);
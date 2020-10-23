function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,r=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){a=!0,s=e},f:function(){try{r||null==n.return||n.return()}finally{if(a)throw s}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{BAI5:function(e,t,i){"use strict";i.d(t,"a",(function(){return T}));var n=i("Ssnw"),s=i("X2Q7"),r=i("iyZ4"),a=i("EM62"),c=i("sEIs"),o=i("2kYt"),u=i("0XDM"),l=i("A8Ay"),b=i("csyo"),f=i("K9kF"),p=i("s2Ay");function h(e,t){1&e&&(a.Wb(0,"h1",6),a.Lc(1),a.jc(2,"translate"),a.Vb()),2&e&&(a.Cb(1),a.Nc(" ",a.kc(2,1,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.YOU_ARE_MEMBER"),"\n"))}function d(e,t){1&e&&(a.Wb(0,"h1",6),a.Lc(1),a.jc(2,"translate"),a.Vb()),2&e&&(a.Cb(1),a.Nc(" ",a.kc(2,1,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.USER_IS_MEMBER"),"\n"))}function m(e,t){1&e&&a.Rb(0,"mat-spinner",7)}var g=function(){return["select","menu"]};function I(e,t){if(1&e){var i=a.Xb();a.Wb(0,"perun-web-apps-groups-list",8),a.ec("page",(function(e){return a.Bc(i),a.ic().pageChanged(e)})),a.Vb()}if(2&e){var n=a.ic();a.oc("pageSize",n.pageSize)("groups",n.membersGroups)("hideColumns",a.sc(5,g))("disableMembers",!1)("filter",n.memberFilterValue)}}function S(e,t){1&e&&a.Rb(0,"mat-spinner",7)}function v(e,t){if(1&e){var i=a.Xb();a.Wb(0,"perun-web-apps-groups-list",8),a.ec("page",(function(e){return a.Bc(i),a.ic(2).adminPageChanged(e)})),a.Vb()}if(2&e){var n=a.ic(2);a.oc("pageSize",n.adminPageSize)("groups",n.adminsGroups)("hideColumns",a.sc(5,g))("disableMembers",!1)("filter",n.adminFilterValue)}}function E(e,t){if(1&e){var i=a.Xb();a.Wb(0,"div",9),a.Wb(1,"h1",6),a.Lc(2),a.jc(3,"translate"),a.Vb(),a.Wb(4,"perun-web-apps-refresh-button",1),a.ec("refresh",(function(){return a.Bc(i),a.ic().refreshAdminTable()})),a.Vb(),a.Wb(5,"perun-web-apps-immediate-filter",2),a.ec("filter",(function(e){return a.Bc(i),a.ic().adminFilter(e)})),a.Vb(),a.Jc(6,S,1,0,"mat-spinner",3),a.Jc(7,v,1,6,"perun-web-apps-groups-list",4),a.Vb()}if(2&e){var n=a.ic();a.Cb(2),a.Nc(" ",a.kc(3,4,"SHARED.COMPONENTS.USER_DETAIL.GROUPS.USER_IS_ADMIN")," "),a.Cb(3),a.oc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Cb(1),a.oc("ngIf",n.adminRefresh),a.Cb(1),a.oc("ngIf",!n.adminRefresh)}}var T=function(){var e=function(){function e(t,i,n,s,a,c){_classCallCheck(this,e),this.usersService=t,this.memberService=i,this.tableConfigService=n,this.groupService=s,this.store=a,this.route=c,this.memberFilterValue="",this.adminFilterValue="",this.vos=[],this.membersGroups=[],this.adminsGroups=[],this.tableId=r.U,this.adminTableId=r.T}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.adminPageSize=this.tableConfigService.getTablePageSize(this.adminTableId),!0===(this.showPrincipal=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.params.subscribe((function(t){return e.userId=t.userId})),this.refreshAdminTable(),this.refreshMemberTable()}},{key:"pageChanged",value:function(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}},{key:"adminPageChanged",value:function(e){this.adminPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.adminTableId,e.pageSize)}},{key:"memberFilter",value:function(e){this.memberFilterValue=e}},{key:"adminFilter",value:function(e){this.adminFilterValue=e}},{key:"refreshAdminTable",value:function(){var e=this;this.adminRefresh=!0,this.usersService.getGroupsWhereUserIsAdmin(this.userId).subscribe((function(t){e.adminsGroups=t,e.adminRefresh=!1}))}},{key:"refreshMemberTable",value:function(){var e=this;this.memberRefresh=!0,this.membersGroups=[],this.usersService.getVosWhereUserIsMember(this.userId).subscribe((function(t){e.vos=t;var i,n=_createForOfIteratorHelper(e.vos);try{var s=function(){var t=i.value;e.memberService.getMemberByUser(t.id,e.userId).subscribe((function(i){e.groupService.getMemberGroups(i.id).subscribe((function(i){e.membersGroups=e.membersGroups.concat(i),e.vos.indexOf(t)===e.vos.length-1&&(e.memberRefresh=!1)}))}))};for(n.s();!(i=n.n()).done;)s()}catch(r){n.e(r)}finally{n.f()}}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Qb(s.p),a.Qb(n.i),a.Qb(r.lb),a.Qb(s.h),a.Qb(n.l),a.Qb(c.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-user-groups"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Gb("router-component",!0)},decls:7,vars:6,consts:[["class","page-subtitle",4,"ngIf"],[3,"refresh"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","groups","hideColumns","disableMembers","filter","page",4,"ngIf"],["class","mt-5",4,"ngIf"],[1,"page-subtitle"],[1,"ml-auto","mr-auto"],[3,"pageSize","groups","hideColumns","disableMembers","filter","page"],[1,"mt-5"]],template:function(e,t){1&e&&(a.Jc(0,h,3,3,"h1",0),a.Jc(1,d,3,3,"h1",0),a.Wb(2,"perun-web-apps-refresh-button",1),a.ec("refresh",(function(){return t.refreshMemberTable()})),a.Vb(),a.Wb(3,"perun-web-apps-immediate-filter",2),a.ec("filter",(function(e){return t.memberFilter(e)})),a.Vb(),a.Jc(4,m,1,0,"mat-spinner",3),a.Jc(5,I,1,6,"perun-web-apps-groups-list",4),a.Jc(6,E,8,6,"div",5)),2&e&&(a.oc("ngIf",t.showPrincipal),a.Cb(1),a.oc("ngIf",!t.showPrincipal),a.Cb(2),a.oc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Cb(1),a.oc("ngIf",t.memberRefresh),a.Cb(1),a.oc("ngIf",!t.memberRefresh),a.Cb(1),a.oc("ngIf",!t.showPrincipal))},directives:[o.t,u.a,l.a,b.c,f.a],pipes:[p.d],styles:[""]}),e}()},ECIY:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var n=i("X2Q7"),s=i("Ssnw"),r=i("EM62"),a=i("sEIs"),c=i("2kYt"),o=i("bdug"),u=i("csyo"),l=i("s2Ay");function b(e,t){if(1&e&&r.Rb(0,"app-two-entity-attribute-page",3),2&e){var i=r.ic();r.oc("entityValues",i.facilities)("firstEntity","user")("firstEntityId",i.userId)("secondEntity","facility")}}function f(e,t){1&e&&r.Rb(0,"mat-spinner",4)}var p=function(){var e=function(){function e(t,i,n,s){_classCallCheck(this,e),this.route=t,this.storage=i,this.facilitiesManagerService=n,this.store=s,this.facilities=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,!0===(this.showPrincipal=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.parent.params.subscribe((function(t){return e.userId=t.userId})),this.facilitiesManagerService.getAssignedFacilitiesByUser(this.userId).subscribe((function(t){e.facilities=t,e.loading=!1}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Qb(a.a),r.Qb(s.l),r.Qb(n.g),r.Qb(s.l))},e.\u0275cmp=r.Kb({type:e,selectors:[["app-user-settings-facility-attributes"]],decls:5,vars:5,consts:[[1,"page-subtitle"],[3,"entityValues","firstEntity","firstEntityId","secondEntity",4,"ngIf"],["class","ml-auto mr-auto",4,"ngIf"],[3,"entityValues","firstEntity","firstEntityId","secondEntity"],[1,"ml-auto","mr-auto"]],template:function(e,t){1&e&&(r.Wb(0,"h1",0),r.Lc(1),r.jc(2,"translate"),r.Vb(),r.Jc(3,b,1,4,"app-two-entity-attribute-page",1),r.Jc(4,f,1,0,"mat-spinner",2)),2&e&&(r.Cb(1),r.Mc(r.kc(2,3,"USER_DETAIL.SETTINGS.FACILITY_ATTRIBUTES.TITLE")),r.Cb(2),r.oc("ngIf",!t.loading),r.Cb(1),r.oc("ngIf",t.loading))},directives:[c.t,o.a,u.c],pipes:[l.d],styles:[""]}),e}()},"Q/gj":function(e,t,i){"use strict";i.d(t,"a",(function(){return C}));var n=i("Ssnw"),s=(i("HHEo"),i("cqs0")),r=i("8clQ"),a=i("mEf3"),c=i("X2Q7"),o=i("iyZ4"),u=i("+0js"),l=i("IDQ9"),b=i("EM62"),f=i("sEIs"),p=i("OZ4H"),h=i("s2Ay"),d=i("0XDM"),m=i("PBFl"),g=i("A8Ay"),I=i("2kYt"),S=i("csyo"),v=i("LKLE"),E=["list"];function T(e,t){1&e&&b.Rb(0,"mat-spinner",8)}function y(e,t){if(1&e){var i=b.Xb();b.Wb(0,"perun-web-apps-attributes-list",9,10),b.ec("page",(function(e){return b.Bc(i),b.ic().pageChanged(e)})),b.Vb()}if(2&e){var n=b.ic();b.oc("pageSize",n.pageSize)("filterValue",n.filterValue)("attributes",n.attributes)("selection",n.selection)}}var C=function(){var e=function(){function e(t,i,n,r,a,c,u){var l=this;_classCallCheck(this,e),this.route=t,this.attributesManager=i,this.notificator=n,this.dialog=r,this.translate=a,this.tableConfigService=c,this.store=u,this.selection=new s.c(!0,[]),this.attributes=[],this.filterValue="",this.tableId=o.n,this.translate.get("USER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE").subscribe((function(e){return l.saveSuccessMessage=e})),this.translate.get("USER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE").subscribe((function(e){return l.deleteSuccessMessage=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.params.subscribe((function(t){e.userId=t.userId,void 0===e.userId&&(e.userId=e.store.getPerunPrincipal().userId),e.refreshTable()}))}},{key:"onCreate",value:function(){var e=this,t=Object(r.k)();t.width="1050px",t.data={entityId:this.userId,entity:"user",notEmptyAttributes:this.attributes,style:"user-theme"},this.dialog.open(l.a,t).afterClosed().subscribe((function(t){t&&e.refreshTable()}))}},{key:"onSave",value:function(){var e=this;this.list.updateMapAttributes();var t=Object(r.k)();t.width="450px",t.data={entityId:this.userId,entity:"user",attributes:this.selection.selected},this.dialog.open(u.d,t).afterClosed().subscribe((function(t){t&&e.refreshTable()}))}},{key:"onDelete",value:function(){var e=this,t=Object(r.k)();t.width="450px",t.data={entityId:this.userId,entity:"user",attributes:this.selection.selected},this.dialog.open(a.a,t).afterClosed().subscribe((function(t){t&&e.refreshTable()}))}},{key:"refreshTable",value:function(){var e=this;this.loading=!0,this.attributesManager.getUserAttributes(this.userId).subscribe((function(t){e.attributes=t,e.selection.clear(),e.loading=!1}))}},{key:"applyFilter",value:function(e){this.filterValue=e}},{key:"pageChanged",value:function(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(b.Qb(f.a),b.Qb(c.c),b.Qb(n.k),b.Qb(p.b),b.Qb(h.e),b.Qb(o.lb),b.Qb(n.l))},e.\u0275cmp=b.Kb({type:e,selectors:[["app-user-settings-attributes"]],viewQuery:function(e,t){var i;1&e&&b.Tc(E,!0),2&e&&b.wc(i=b.fc())&&(t.list=i.first)},hostVars:2,hostBindings:function(e,t){2&e&&b.Gb("router-component",!0)},decls:16,vars:17,consts:[[1,"page-subtitle"],[3,"refresh"],["mat-flat-button","","color","accent",1,"mr-2",3,"click"],["mat-flat-button","","color","accent",1,"mr-2",3,"disabled","click"],["mat-flat-button","","color","warn",3,"disabled","click"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","filterValue","attributes","selection","page",4,"ngIf"],[1,"ml-auto","mr-auto"],[3,"pageSize","filterValue","attributes","selection","page"],["list",""]],template:function(e,t){1&e&&(b.Wb(0,"h1",0),b.Lc(1),b.jc(2,"translate"),b.Vb(),b.Wb(3,"perun-web-apps-refresh-button",1),b.ec("refresh",(function(){return t.refreshTable()})),b.Vb(),b.Wb(4,"button",2),b.ec("click",(function(){return t.onCreate()})),b.Lc(5),b.jc(6,"translate"),b.Vb(),b.Wb(7,"button",3),b.ec("click",(function(){return t.onSave()})),b.Lc(8),b.jc(9,"translate"),b.Vb(),b.Wb(10,"button",4),b.ec("click",(function(){return t.onDelete()})),b.Lc(11),b.jc(12,"translate"),b.Vb(),b.Wb(13,"perun-web-apps-immediate-filter",5),b.ec("filter",(function(e){return t.applyFilter(e)})),b.Vb(),b.Jc(14,T,1,0,"mat-spinner",6),b.Jc(15,y,2,4,"perun-web-apps-attributes-list",7)),2&e&&(b.Cb(1),b.Mc(b.kc(2,9,"USER_DETAIL.SETTINGS.ATTRIBUTES.TITLE")),b.Cb(4),b.Nc(" ",b.kc(6,11,"USER_DETAIL.SETTINGS.ATTRIBUTES.CREATE"),"\n"),b.Cb(2),b.oc("disabled",0===t.selection.selected.length),b.Cb(1),b.Nc(" ",b.kc(9,13,"USER_DETAIL.SETTINGS.ATTRIBUTES.SAVE"),"\n"),b.Cb(2),b.oc("disabled",0===t.selection.selected.length),b.Cb(1),b.Nc(" ",b.kc(12,15,"USER_DETAIL.SETTINGS.ATTRIBUTES.DELETE"),"\n"),b.Cb(2),b.oc("placeholder","SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER"),b.Cb(1),b.oc("ngIf",t.loading),b.Cb(1),b.oc("ngIf",!t.loading))},directives:[d.a,m.b,g.a,I.t,S.c,v.a],pipes:[h.d],styles:[""]}),e}()},QOlj:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i("EM62"),s=i("ZG5M"),r=function(){var e=function(){function e(){_classCallCheck(this,e),this.navItems=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.initNavItems()}},{key:"initNavItems",value:function(){this.navItems=[{cssIcon:"perun-attributes",url:"attributes",label:"MENU_ITEMS.USER.ATTRIBUTES",style:"user-btn"},{cssIcon:"perun-vo",url:"organizations",label:"MENU_ITEMS.ADMIN.ORGANIZATIONS",style:"user-btn"},{cssIcon:"perun-group",url:"groups",label:"MENU_ITEMS.ADMIN.GROUPS",style:"user-btn"}],window.location.pathname.startsWith("/admin")&&this.navItems.push({cssIcon:"perun-group",url:"identities",label:"MENU_ITEMS.USER.IDENTITIES",style:"user-btn"},{cssIcon:"perun-resource",url:"resources",label:"MENU_ITEMS.USER.RESOURCES",style:"user-btn"}),this.navItems.push({cssIcon:"perun-settings2",url:"settings",label:"MENU_ITEMS.ADMIN.SETTINGS",style:"user-btn"})}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Kb({type:e,selectors:[["app-user-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&n.Gb("router-component",!0)},decls:1,vars:2,consts:[[3,"items","size"]],template:function(e,t){1&e&&n.Rb(0,"perun-web-apps-menu-buttons-field",0),2&e&&n.oc("items",t.navItems)("size","small")},directives:[s.a],styles:[""]}),e}()},S5du:function(e,t,i){"use strict";i.d(t,"a",(function(){return E}));var n=i("X2Q7"),s=i("Ssnw"),r=i("iyZ4"),a=i("EM62"),c=i("sEIs"),o=i("2kYt"),u=i("0XDM"),l=i("A8Ay"),b=i("csyo"),f=i("WXqB"),p=i("s2Ay");function h(e,t){1&e&&(a.Wb(0,"h1",6),a.Lc(1),a.jc(2,"translate"),a.Vb()),2&e&&(a.Cb(1),a.Nc(" ",a.kc(2,1,"SHARED_LIB.PERUN.ORGANIZATIONS.YOU_ARE_MEMBER"),"\n"))}function d(e,t){1&e&&(a.Wb(0,"h1",6),a.Lc(1),a.jc(2,"translate"),a.Vb()),2&e&&(a.Cb(1),a.Nc(" ",a.kc(2,1,"SHARED_LIB.PERUN.ORGANIZATIONS.USER_IS_MEMBER"),"\n"))}function m(e,t){1&e&&a.Rb(0,"mat-spinner",7)}function g(e,t){if(1&e){var i=a.Xb();a.Wb(0,"perun-web-apps-vo-select-table",8),a.ec("page",(function(e){return a.Bc(i),a.ic().memberPageChanged(e)})),a.Vb()}if(2&e){var n=a.ic();a.oc("displayedColumns",n.displayedColumns)("pageSize",n.memberPageSize)("filterValue",n.memberFilterValue)("vos",n.vosWhereIsMember)}}function I(e,t){1&e&&a.Rb(0,"mat-spinner",7)}function S(e,t){if(1&e){var i=a.Xb();a.Wb(0,"perun-web-apps-vo-select-table",8),a.ec("page",(function(e){return a.Bc(i),a.ic(2).adminPageChanged(e)})),a.Vb()}if(2&e){var n=a.ic(2);a.oc("displayedColumns",n.displayedColumns)("pageSize",n.adminPageSize)("filterValue",n.adminFilterValue)("vos",n.vosWhereIsAdmin)}}function v(e,t){if(1&e){var i=a.Xb();a.Wb(0,"div",9),a.Wb(1,"h1",6),a.Lc(2),a.jc(3,"translate"),a.Vb(),a.Wb(4,"perun-web-apps-refresh-button",1),a.ec("refresh",(function(){return a.Bc(i),a.ic().refreshAdminTable()})),a.Vb(),a.Wb(5,"perun-web-apps-immediate-filter",2),a.ec("filter",(function(e){return a.Bc(i),a.ic().applyAdminFilter(e)})),a.Vb(),a.Jc(6,I,1,0,"mat-spinner",3),a.Jc(7,S,1,4,"perun-web-apps-vo-select-table",4),a.Vb()}if(2&e){var n=a.ic();a.Cb(2),a.Mc(a.kc(3,4,"SHARED_LIB.PERUN.ORGANIZATIONS.USER_IS_ADMIN")),a.Cb(3),a.oc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Cb(1),a.oc("ngIf",n.adminRefresh),a.Cb(1),a.oc("ngIf",!n.adminRefresh)}}var E=function(){var e=function(){function e(t,i,n,s,a){_classCallCheck(this,e),this.usersService=t,this.authResolver=i,this.tableConfigService=n,this.store=s,this.route=a,this.adminFilterValue="",this.memberFilterValue="",this.displayedColumns=["id","name"],this.adminTableId=r.V,this.memberTableId=r.ab}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.adminPageSize=this.tableConfigService.getTablePageSize(this.adminTableId),this.memberPageSize=this.tableConfigService.getTablePageSize(this.memberTableId),!0===(this.isMyProfile=this.route.snapshot.data.showPrincipal)?this.userId=this.store.getPerunPrincipal().user.id:this.route.parent.params.subscribe((function(t){return e.userId=t.userId})),this.refreshAdminTable(),this.refreshMemberTable()}},{key:"refreshMemberTable",value:function(){var e=this;this.memberRefresh=!0,this.usersService.getVosWhereUserIsMember(this.userId).subscribe((function(t){e.vosWhereIsMember=t,e.memberRefresh=!1}),(function(){return e.memberRefresh=!1}))}},{key:"refreshAdminTable",value:function(){var e=this;this.adminRefresh=!0,this.usersService.getVosWhereUserIsAdmin(this.userId).subscribe((function(t){e.vosWhereIsAdmin=t,e.adminRefresh=!1}),(function(){return e.adminRefresh=!1}))}},{key:"applyMemberFilter",value:function(e){this.memberFilterValue=e}},{key:"adminPageChanged",value:function(e){this.adminPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.adminTableId,e.pageSize)}},{key:"memberPageChanged",value:function(e){this.memberPageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.memberTableId,e.pageSize)}},{key:"applyAdminFilter",value:function(e){this.adminFilterValue=e}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Qb(n.p),a.Qb(s.g),a.Qb(r.lb),a.Qb(s.l),a.Qb(c.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-user-organizations"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Gb("router-component",!0)},decls:7,vars:6,consts:[["class","page-subtitle",4,"ngIf"],[3,"refresh"],[3,"placeholder","filter"],["class","mr-auto ml-auto",4,"ngIf"],[3,"displayedColumns","pageSize","filterValue","vos","page",4,"ngIf"],["class","mt-5",4,"ngIf"],[1,"page-subtitle"],[1,"mr-auto","ml-auto"],[3,"displayedColumns","pageSize","filterValue","vos","page"],[1,"mt-5"]],template:function(e,t){1&e&&(a.Jc(0,h,3,3,"h1",0),a.Jc(1,d,3,3,"h1",0),a.Wb(2,"perun-web-apps-refresh-button",1),a.ec("refresh",(function(){return t.refreshMemberTable()})),a.Vb(),a.Wb(3,"perun-web-apps-immediate-filter",2),a.ec("filter",(function(e){return t.applyMemberFilter(e)})),a.Vb(),a.Jc(4,m,1,0,"mat-spinner",3),a.Jc(5,g,1,4,"perun-web-apps-vo-select-table",4),a.Jc(6,v,8,6,"div",5)),2&e&&(a.oc("ngIf",t.isMyProfile),a.Cb(1),a.oc("ngIf",!t.isMyProfile),a.Cb(2),a.oc("placeholder","SHARED_LIB.PERUN.ORGANIZATIONS.FILTER"),a.Cb(1),a.oc("ngIf",t.memberRefresh),a.Cb(1),a.oc("ngIf",!t.memberRefresh),a.Cb(1),a.oc("ngIf",!t.isMyProfile))},directives:[o.t,u.a,l.a,b.c,f.a],pipes:[p.d],styles:[""]}),e}()},faZ6:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var n=i("EM62"),s=i("ma6z"),r=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Kb({type:e,selectors:[["app-user-settings"]],hostVars:2,hostBindings:function(e,t){2&e&&n.Gb("router-component",!0)},decls:1,vars:0,template:function(e,t){1&e&&n.Rb(0,"app-animated-router-outlet")},directives:[s.a],styles:[""]}),e}()},m1kt:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var n=i("X2Q7"),s=i("EM62"),r=i("sEIs"),a=i("2kYt"),c=i("csyo"),o=i("ZG5M");function u(e,t){1&e&&s.Rb(0,"mat-spinner",2)}function l(e,t){if(1&e&&(s.Wb(0,"div"),s.Rb(1,"perun-web-apps-menu-buttons-field",3),s.Vb()),2&e){var i=s.ic();s.Cb(1),s.oc("items",i.navItems)("size","small")}}var b=function(){var e=function(){function e(t,i){_classCallCheck(this,e),this.route=t,this.userManager=i,this.navItems=[],this.loading=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;window.location.pathname.startsWith("/admin")?(this.loading=!0,this.route.parent.parent.params.subscribe((function(t){e.userManager.getUserById(t.userId).subscribe((function(t){e.isServiceUser=t.serviceUser,e.initNavItems(),e.loading=!1}),(function(){return e.loading=!1}))}))):this.initNavItems()}},{key:"initNavItems",value:function(){this.navItems=[{cssIcon:"perun-attributes",url:"facilityAttributes",label:"MENU_ITEMS.USER.FACILITY_ATTRIBUTES",style:"user-btn"}],window.location.pathname.startsWith("/admin")?(this.navItems.push(this.isServiceUser?{cssIcon:"perun-service-identity",url:"associated-users",label:"MENU_ITEMS.USER.ASSOCIATED_USERS",style:"user-btn"}:{cssIcon:"perun-service-identity",url:"service-identities",label:"MENU_ITEMS.USER.SERVICE_IDENTITIES",style:"user-btn"}),this.navItems.push({cssIcon:"perun-group",url:"roles",label:"MENU_ITEMS.USER.ROLES",style:"user-btn"})):this.navItems.push({cssIcon:"perun-settings2",url:"passwordReset",label:"MENU_ITEMS.USER.PASSWORD_RESET",style:"user-btn"},{cssIcon:"perun-settings2",url:"guiConfig",label:"MENU_ITEMS.USER.GUI_CONFIG",style:"user-btn"})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Qb(r.a),s.Qb(n.p))},e.\u0275cmp=s.Kb({type:e,selectors:[["app-user-settings-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&s.Gb("router-component",!0)},decls:2,vars:2,consts:[["class","mr-auto ml-auto",4,"ngIf"],[4,"ngIf"],[1,"mr-auto","ml-auto"],[3,"items","size"]],template:function(e,t){1&e&&(s.Jc(0,u,1,0,"mat-spinner",0),s.Jc(1,l,2,2,"div",1)),2&e&&(s.oc("ngIf",t.loading),s.Cb(1),s.oc("ngIf",!t.loading))},directives:[a.t,c.c,o.a],styles:[""]}),e}()},zrcO:function(e,t,i){"use strict";i.r(t),i.d(t,"UsersModule",(function(){return de}));var n=i("2kYt"),s=i("sEIs"),r=i("S5du"),a=i("BAI5"),c=i("faZ6"),o=i("m1kt"),u=i("Q/gj"),l=i("ECIY"),b=i("HHEo"),f=i("8clQ"),p=i("iyZ4"),h=i("EM62"),d=i("29Wa"),m=i("R7+U"),g=i("mFH5"),I=i("s2Ay");function S(e,t){if(1&e&&(h.Wb(0,"mat-option",5),h.Lc(1),h.Vb()),2&e){var i=t.$implicit;h.oc("value",i),h.Cb(1),h.Nc(" ",i," ")}}var v,E=((v=function(){function e(t){_classCallCheck(this,e),this.guiConfigService=t,this.tablePageSizeOptions=f.a}return _createClass(e,[{key:"ngOnInit",value:function(){this.preferredTablePageSize=this.guiConfigService.getNumber(p.c)}},{key:"updatePreferredTablePageSize",value:function(){this.guiConfigService.setNumber(p.c,this.preferredTablePageSize)}}]),e}()).\u0275fac=function(e){return new(e||v)(h.Qb(p.b))},v.\u0275cmp=h.Kb({type:v,selectors:[["app-user-settings-app-configuration"]],decls:10,vars:8,consts:[[1,"page-subtitle"],[1,"col-12","col-lg-6","p-0"],[1,"w-100"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(h.Wb(0,"h1",0),h.Lc(1),h.jc(2,"translate"),h.Vb(),h.Wb(3,"div",1),h.Wb(4,"mat-form-field",2),h.Wb(5,"mat-label"),h.Lc(6),h.jc(7,"translate"),h.Vb(),h.Wb(8,"mat-select",3),h.ec("valueChange",(function(e){return t.preferredTablePageSize=e}))("valueChange",(function(){return t.updatePreferredTablePageSize()})),h.Jc(9,S,2,2,"mat-option",4),h.Vb(),h.Vb(),h.Vb()),2&e&&(h.Cb(1),h.Mc(h.kc(2,4,"USER_DETAIL.SETTINGS.GUI_CONFIG.TITLE")),h.Cb(5),h.Mc(h.kc(7,6,"USER_DETAIL.SETTINGS.GUI_CONFIG.PREF_TABLE_PAGE_SIZE")),h.Cb(2),h.oc("value",t.preferredTablePageSize),h.Cb(1),h.oc("ngForOf",t.tablePageSizeOptions))},directives:[d.c,d.g,m.a,n.s,g.l],pipes:[I.d],styles:[""]}),v),T=i("QOlj"),y=i("4sdY"),C=i("Ssnw"),R=i("EtYo"),A=i("bFHC"),U=i("Y2X+"),M=i("ma6z"),P=i("j+u3"),k=function(){return{color:"black"}},_=function(){return["/myProfile"]};function N(e,t){if(1&e&&(h.Wb(0,"div",1),h.Rb(1,"perun-web-apps-back-button"),h.Wb(2,"div",2),h.Rb(3,"mat-icon",3),h.jc(4,"translate"),h.Wb(5,"div",4),h.Wb(6,"div",5),h.Wb(7,"a",6),h.Lc(8),h.jc(9,"userFullName"),h.Vb(),h.Wb(10,"span",7),h.Lc(11),h.Vb(),h.Vb(),h.Wb(12,"span",8),h.Lc(13),h.jc(14,"translate"),h.jc(15,"translate"),h.Vb(),h.Vb(),h.Vb(),h.Rb(16,"app-animated-router-outlet"),h.Vb()),2&e){var i=h.ic();h.Cb(3),h.pc("matTooltip",h.kc(4,8,"MENU_ITEMS.USER.ENTITY")),h.oc("ngStyle",h.sc(16,k)),h.Cb(4),h.oc("routerLink",h.sc(17,_)),h.Cb(1),h.Nc(" ",h.kc(9,10,i.user)," "),h.Cb(3),h.Nc(" \xa0#",i.user.id," "),h.Cb(2),h.Pc(" ",h.kc(14,12,"MENU_ITEMS.USER.ENTITY"),", ",h.kc(15,14,"MENU_ITEMS.USER.USER_TYPE"),": ",i.getUserType()," ")}}var w,V,O,z=[{path:"",component:(w=function(){function e(t,i,n){_classCallCheck(this,e),this.sideMenuService=t,this.store=i,this.router=n}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.path=this.router.url,this.router.events.subscribe((function(t){e.path=e.router.url})),this.principal=this.store.getPerunPrincipal(),this.user=this.principal.user,this.sideMenuService.setUserItems([])}},{key:"getUserType",value:function(){return this.user.serviceUser?"Service":"Person"}}]),e}(),w.\u0275fac=function(e){return new(e||w)(h.Qb(y.a),h.Qb(C.l),h.Qb(s.f))},w.\u0275cmp=h.Kb({type:w,selectors:[["app-user-profile"]],decls:1,vars:1,consts:[["class","container-fluid pl-xl-5 pr-xl-5 user-theme",4,"ngIf"],[1,"container-fluid","pl-xl-5","pr-xl-5","user-theme"],[1,"d-flex","page-title-headtitle"],["svgIcon","perun-user-dark",1,"perun-icon","perun-icon-detail",3,"matTooltip","ngStyle"],[1,"page-title-block"],[1,"page-title-headline","d-flex","align-items-center"],[1,"user-link",3,"routerLink"],[1,"text-muted"],[1,"mt-1","entity-info"]],template:function(e,t){1&e&&h.Jc(0,N,17,18,"div",0),2&e&&h.oc("ngIf",void 0!==t.user)},directives:[n.t,R.a,A.a,U.a,n.w,s.i,M.a],pipes:[I.d,P.a],styles:[""]}),w),children:[{path:"",component:T.a,data:{animation:"UserOverviewPage"}},{path:"attributes",component:u.a,data:{animation:"UserAttributesPage"}},{path:"organizations",component:r.a,data:{animation:"UserOrganizationsPage",showPrincipal:!0}},{path:"groups",component:a.a,data:{animation:"UserGroupsPage",showPrincipal:!0}},{path:"settings",component:c.a,children:[{path:"",component:o.a,data:{animation:"UserSettingsOverviewPage"}},{path:"facilityAttributes",component:l.a,data:{animation:"UserSettingsFacilityAttributesPage",showPrincipal:!0}},{path:"passwordReset",component:b.b,data:{animation:"PasswordResetPage"}},{path:"guiConfig",component:E,data:{animation:"UserAppConfigurationPage"}}]}]}],L=((V=function e(){_classCallCheck(this,e)}).\u0275mod=h.Ob({type:V}),V.\u0275inj=h.Nb({factory:function(e){return new(e||V)},imports:[[s.j.forChild(z)],s.j]}),V),W=i("ulve"),F=i("Cd2c"),G=i("nIj0"),B=i("lQ7A"),Q=i("3Uyd"),D=i("PBFl"),j=i("cePI"),J=i("FlRo"),H=i("KZIX"),Z=i("QcI7"),X=i("+Tre"),Y=i("OZ4H"),x=i("W1gw"),K=i("csyo"),q=i("66mq"),$=i("k8N0"),ee=i("gcUQ"),te=i("F1o0"),ie=i("zmEM"),ne=i("iAde"),se=i("Meci"),re=i("x9Az"),ae=i("oqI+"),ce=i("S17y"),oe=i("Jb3d"),ue=i("mWkV"),le=i("qvOF"),be=i("KoHB"),fe=i("f3iV"),pe=i("t47Z"),he=i("PCNd"),de=((O=function e(t){_classCallCheck(this,e),this.translate=t,t.addLangs(["en","cs"])}).\u0275mod=h.Ob({type:O}),O.\u0275inj=h.Nb({factory:function(e){return new(e||O)(h.ac(I.e))},imports:[[n.c,L,W.b,F.c,d.e,G.A,G.k,A.b,B.g,Q.b,I.c.forChild({}),D.c,j.c,J.p,H.g,Z.e,D.c,X.b,Y.h,m.b,x.b,K.b,q.b,U.b,$.b,ee.g,g.j,te.c,ie.b,g.p,ne.b,se.j,re.g,ae.g,se.j,ce.g,oe.c,ue.b,le.g,be.a,fe.b,b.c,p.a,pe.b,he.a]]}),O)}}]);
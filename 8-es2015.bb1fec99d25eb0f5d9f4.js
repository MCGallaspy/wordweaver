(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{yPrK:function(e,t,c){"use strict";c.r(t),c.d(t,"SettingsModule",(function(){return A}));var n=c("An66"),i=c("PCNd"),a=c("1VvW"),o=c("ofez"),s=c("gjCG"),l=c("pKmL"),b=c("BnVf"),g=c("EMFo"),h=c("kZht"),r=c("ydE+"),m=c("NxuZ"),d=c("EmXI"),u=c("IOEv"),f=c("3kIJ"),p=c("7wPV"),T=c("UDV5"),w=c("pTnX"),v=c("aDqW");function U(e,t){if(1&e){const e=h.Vb();h.Ub(0,"mat-checkbox",12),h.cc("change",(function(c){h.tc(e);const n=t.$implicit;return h.gc(3).onHighlightSelect(c,n)})),h.Cc(1),h.hc(2,"translate"),h.Tb()}if(2&e){const e=t.$implicit,c=h.gc(2).ngIf;h.Db(e),h.mc("checked",c.highlight[e]),h.Bb(1),h.Ec(" ",h.ic(2,4,"ww.settings.general.highlighting."+e)," ")}}function k(e,t){if(1&e&&(h.Ub(0,"div",5),h.Ub(1,"h2"),h.Cc(2),h.hc(3,"translate"),h.Tb(),h.Ub(4,"div",16),h.Ac(5,U,3,6,"mat-checkbox",17),h.Tb(),h.Tb()),2&e){const e=h.gc().ngIf,t=h.gc();h.mc("ngClass",t.routeAnimationsElements),h.Bb(2),h.Dc(h.ic(3,3,"ww.settings.general.highlighting.title")),h.Bb(3),h.mc("ngForOf",t.objectkeys(e.highlight))}}function O(e,t){if(1&e){const e=h.Vb();h.Ub(0,"mat-checkbox",12),h.cc("change",(function(c){h.tc(e);const n=t.$implicit;return h.gc(3).onLevelSelect(c,n)})),h.Cc(1),h.hc(2,"translate"),h.Tb()}if(2&e){const e=t.$implicit,c=h.gc(2).ngIf;h.mc("checked",c.level[e]),h.Bb(1),h.Ec(" ",h.ic(2,2,"ww.settings.general.tiers."+e)," ")}}function C(e,t){if(1&e&&(h.Ub(0,"div",5),h.Ub(1,"h2"),h.Cc(2),h.hc(3,"translate"),h.Tb(),h.Ub(4,"div",16),h.Ac(5,O,3,4,"mat-checkbox",18),h.Tb(),h.Tb()),2&e){const e=h.gc().ngIf,t=h.gc();h.mc("ngClass",t.routeAnimationsElements),h.Bb(2),h.Dc(h.ic(3,3,"ww.settings.general.tiers.title")),h.Bb(3),h.mc("ngForOf",t.objectkeys(e.level))}}function E(e,t){if(1&e&&(h.Ub(0,"mat-option",19),h.Cc(1),h.hc(2,"translate"),h.Tb()),2&e){const e=t.$implicit;h.mc("value",e.value),h.Bb(1),h.Ec(" ",h.ic(2,2,e.label)," ")}}function j(e,t){if(1&e&&(h.Ub(0,"mat-option",19),h.Cc(1),h.hc(2,"translate"),h.Tb()),2&e){const e=t.$implicit;h.mc("value",e.value),h.Bb(1),h.Ec(" ",h.ic(2,2,e.label)," ")}}function M(e,t){if(1&e){const e=h.Vb();h.Sb(0),h.Ub(1,"div",1),h.Ac(2,k,6,5,"div",4),h.Tb(),h.Pb(3,"br"),h.Pb(4,"br"),h.Pb(5,"br"),h.Ub(6,"div",1),h.Ac(7,C,6,5,"div",4),h.Tb(),h.Pb(8,"br"),h.Pb(9,"br"),h.Ub(10,"div",1),h.Ub(11,"div",5),h.Ub(12,"h2"),h.Cc(13),h.hc(14,"translate"),h.Tb(),h.Ub(15,"div",6),h.Ub(16,"mat-icon",7),h.Pb(17,"fa-icon",8),h.Tb(),h.Ub(18,"mat-form-field"),h.Ub(19,"mat-select",9),h.cc("selectionChange",(function(t){return h.tc(e),h.gc().onLanguageSelect(t)})),h.hc(20,"translate"),h.Ac(21,E,3,4,"mat-option",10),h.Tb(),h.Tb(),h.Tb(),h.Ub(22,"div",6),h.Ub(23,"mat-icon",7),h.Pb(24,"fa-icon",11),h.Tb(),h.Ub(25,"mat-placeholder"),h.Cc(26),h.hc(27,"translate"),h.Tb(),h.Ub(28,"mat-slide-toggle",12),h.cc("change",(function(t){return h.tc(e),h.gc().onStickyHeaderToggle(t)})),h.Tb(),h.Tb(),h.Tb(),h.Tb(),h.Ub(29,"div",1),h.Ub(30,"div",5),h.Ub(31,"h2"),h.Cc(32),h.hc(33,"translate"),h.Tb(),h.Ub(34,"div",6),h.Ub(35,"mat-icon",7),h.Pb(36,"fa-icon",13),h.Tb(),h.Ub(37,"mat-form-field"),h.Ub(38,"mat-select",14),h.cc("selectionChange",(function(t){return h.tc(e),h.gc().onThemeSelect(t)})),h.hc(39,"translate"),h.Ac(40,j,3,4,"mat-option",10),h.Tb(),h.Tb(),h.Tb(),h.Ub(41,"div",6),h.Ub(42,"mat-icon",7),h.Pb(43,"fa-icon",15),h.Tb(),h.Ub(44,"mat-placeholder"),h.Cc(45),h.hc(46,"translate"),h.Tb(),h.Ub(47,"mat-slide-toggle",12),h.cc("change",(function(t){return h.tc(e),h.gc().onAutoNightModeToggle(t)})),h.Tb(),h.Tb(),h.Ub(48,"div",6),h.Ub(49,"mat-placeholder"),h.Cc(50),h.hc(51,"translate"),h.Tb(),h.Ub(52,"mat-slide-toggle",12),h.cc("change",(function(t){return h.tc(e),h.gc().onTestApiToggle(t)})),h.Cc(53),h.hc(54,"translate"),h.Tb(),h.Tb(),h.Tb(),h.Tb(),h.Rb()}if(2&e){const e=t.ngIf,c=h.gc();h.Bb(2),h.mc("ngIf",c.objectkeys(e.highlight).length>0),h.Bb(5),h.mc("ngIf",c.objectkeys(e.level).length>0),h.Bb(4),h.mc("ngClass",c.routeAnimationsElements),h.Bb(2),h.Dc(h.ic(14,19,"ww.settings.general.title")),h.Bb(6),h.mc("placeholder",h.ic(20,21,"ww.settings.general.placeholder"))("ngModel",e.language),h.Bb(2),h.mc("ngForOf",c.languages),h.Bb(5),h.Ec("",h.ic(27,23,"ww.settings.themes.sticky-header")," "),h.Bb(2),h.mc("checked",e.stickyHeader),h.Bb(2),h.mc("ngClass",c.routeAnimationsElements),h.Bb(2),h.Dc(h.ic(33,25,"ww.settings.themes.title")),h.Bb(6),h.mc("placeholder",h.ic(39,27,"ww.settings.themes.placeholder"))("ngModel",e.theme),h.Bb(2),h.mc("ngForOf",c.themes),h.Bb(5),h.Ec("",h.ic(46,29,"ww.settings.themes.night-mode")," "),h.Bb(2),h.mc("checked",e.autoNightMode),h.Bb(3),h.Ec("",h.ic(51,31,"ww.settings.advanced")," "),h.Bb(2),h.mc("checked",e.testApi),h.Bb(1),h.Ec(" ",h.ic(54,33,"ww.settings.testApi")," ")}}const P=[{path:"",component:(()=>{class e{constructor(e){this.store=e,this.objectkeys=Object.keys,this.routeAnimationsElements=l.f,this.themes=[{value:"DEFAULT-THEME",label:Object(s.a)("ww.settings.themes.blue")},{value:"LIGHT-THEME",label:Object(s.a)("ww.settings.themes.light")},{value:"PURPLE-LIGHT-THEME",label:Object(s.a)("ww.settings.themes.purple-light")},{value:"PURPLE-DARK-THEME",label:Object(s.a)("ww.settings.themes.purple-dark")},{value:"BLACK-THEME",label:Object(s.a)("ww.settings.themes.dark")},{value:"MONKEY-THEME",label:Object(s.a)("ww.settings.themes.fun")}],this.languages=[{value:"en",label:Object(s.a)("ww.settings.general.language.en")},{value:"fr",label:Object(s.a)("ww.settings.general.language.fr")}]}ngOnInit(){this.settings$=this.store.pipe(Object(o.t)(g.d))}onLanguageSelect({value:e}){this.store.dispatch(Object(b.h)({language:e}))}onLevelSelect({checked:e},t){this.store.dispatch(Object(b.i)({checked:e,key:t}))}onHighlightSelect({checked:e},t){this.store.dispatch(Object(b.f)({checked:e,key:t}))}onTestApiToggle({checked:e}){this.store.dispatch(Object(b.k)({testApi:e}))}onThemeSelect({value:e}){this.store.dispatch(Object(b.l)({theme:e}))}onAutoNightModeToggle({checked:e}){this.store.dispatch(Object(b.d)({autoNightMode:e}))}onStickyHeaderToggle({checked:e}){this.store.dispatch(Object(b.j)({stickyHeader:e}))}onPageAnimationsToggle({checked:e}){this.store.dispatch(Object(b.b)({pageAnimations:e}))}onElementsAnimationsToggle({checked:e}){this.store.dispatch(Object(b.a)({elementsAnimations:e}))}}return e.\u0275fac=function(t){return new(t||e)(h.Ob(o.h))},e.\u0275cmp=h.Ib({type:e,selectors:[["ww-settings"]],decls:9,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-sm-12"],[4,"ngIf"],["class","col-md-6 group",3,"ngClass",4,"ngIf"],[1,"col-md-6","group",3,"ngClass"],[1,"icon-form-field"],["color","accent"],["icon","language","color","accent"],["name","language",3,"placeholder","ngModel","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["icon","bars","color","accent"],[3,"checked","change"],["icon","paint-brush","color","accent"],["name","themes",3,"placeholder","ngModel","selectionChange"],["icon","lightbulb","color","accent"],[1,"icon-form-field","checkboxes"],[3,"class","checked","change",4,"ngFor","ngForOf"],[3,"checked","change",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(h.Ub(0,"div",0),h.Ub(1,"div",1),h.Ub(2,"div",2),h.Ub(3,"h1"),h.Cc(4),h.hc(5,"translate"),h.Tb(),h.Tb(),h.Tb(),h.Pb(6,"br"),h.Ac(7,M,55,35,"ng-container",3),h.hc(8,"async"),h.Tb()),2&e&&(h.Bb(4),h.Dc(h.ic(5,2,"ww.settings.title")),h.Bb(3),h.mc("ngIf",h.ic(8,4,t.settings$)))},directives:[n.k,n.i,r.a,m.a,d.b,u.a,f.l,f.o,n.j,d.f,p.a,T.a,w.i],pipes:[v.c,n.b],styles:[".container[_ngcontent-%COMP%]{margin-top:20px}h1[_ngcontent-%COMP%]{margin:0 0 20px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:flex;height:65.5px;align-items:center}.icon-form-field[_ngcontent-%COMP%]   mat-placeholder[_ngcontent-%COMP%]{flex:2 1 auto}mat-icon[_ngcontent-%COMP%]{margin:0 6px 6px 0;font-size:20px}mat-form-field[_ngcontent-%COMP%]{flex:1 0 auto}.checkboxes[_ngcontent-%COMP%]{display:grid}"],changeDetection:0}),e})(),data:{title:"ww.menu.settings"}}];let B=(()=>{class e{}return e.\u0275mod=h.Mb({type:e}),e.\u0275inj=h.Lb({factory:function(t){return new(t||e)},imports:[[a.j.forChild(P)],a.j]}),e})(),A=(()=>{class e{}return e.\u0275mod=h.Mb({type:e}),e.\u0275inj=h.Lb({factory:function(t){return new(t||e)},imports:[[n.c,i.a,B]]}),e})()}}]);
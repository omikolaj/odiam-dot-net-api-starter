!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{h3hH:function(e,o,a){"use strict";a.r(o),a.d(o,"FeatureListModule",function(){return E});var i=a("ofXK"),r=a("PCNd"),c=a("tyNb"),s=a("pKmL"),m=a("AytR"),u=[{name:"Angular",version:m.a.versions.angular,description:"odm.features.angular",github:"https://github.com/angular/angular",documentation:"https://angular.io/docs/ts/latest/"},{name:"Angular Material",version:m.a.versions.material,description:"odm.features.angular-material",github:"https://github.com/angular/material2/",documentation:"https://material.angular.io/"},{name:"Angular Cli",version:m.a.versions.angularCli,description:"odm.features.angular-cli",github:"https://github.com/angular/angular-cli",documentation:"https://cli.angular.io/"},{name:"NGXS",version:m.a.versions.ngxs,description:"odm.features.ngxs",github:"https://github.com/ngxs/store",documentation:"http://ngxs.io/",medium:"https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0"},{name:"RxJS",version:m.a.versions.rxjs,description:"odm.features.rxjs",github:"https://github.com/ReactiveX/RxJS",documentation:"http://reactivex.io/rxjs/",medium:"https://medium.com/@tomastrajan/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293"},{name:"Bootstrap",version:m.a.versions.bootstrap,description:"odm.features.bootstrap",github:"https://github.com/twbs/bootstrap",documentation:"https://getbootstrap.com/docs/4.0/layout/grid/",medium:"https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b"},{name:"Typescript",version:m.a.versions.typescript,description:"odm.features.typescript",github:"https://github.com/Microsoft/TypeScript",documentation:"https://www.typescriptlang.org/docs/home.html"},{name:"I18n",version:m.a.versions.ngxtranslate,description:"odm.features.ngxtranslate",github:"https://github.com/ngx-translate/core",documentation:"http://www.ngx-translate.com/"},{name:"Font Awesome 5",version:m.a.versions.fontAwesome,description:"odm.features.fontawesome",github:"https://github.com/FortAwesome/Font-Awesome",documentation:"https://fontawesome.com/icons"},{name:"Cypress",version:m.a.versions.cypress,description:"odm.features.cypress",github:"https://github.com/cypress-io/cypress",documentation:"https://www.cypress.io/"},{name:"odm.features.themes.title",description:"odm.features.themes.description",documentation:"https://material.angular.io/guide/theming",medium:"https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1"},{name:"odm.features.lazyloading.title",description:"odm.features.lazyloading.description",documentation:"https://angular.io/guide/router#lazy-loading-route-configuration"}],d=a("fXoL"),g=a("Wp6s"),l=a("bTqV"),p=a("6NWb"),b=a("sYmb");function h(t,n){if(1&t&&(d.Wb(0,"code"),d.Cc(1),d.Vb()),2&t){var e=d.hc().$implicit;d.Eb(1),d.Dc(e.version)}}var f=function(){return["fab","github"]};function v(t,n){if(1&t&&(d.Wb(0,"a",12),d.Rb(1,"fa-icon",13),d.Vb()),2&t){var e=d.hc().$implicit;d.mc("href",e.github,d.vc),d.Eb(1),d.mc("icon",d.nc(2,f))}}var w=function(){return["fab","medium-m"]};function C(t,n){if(1&t&&(d.Wb(0,"a",9),d.Rb(1,"fa-icon",13),d.Cc(2),d.ic(3,"translate"),d.Vb()),2&t){var e=d.hc().$implicit;d.mc("href",e.medium,d.vc),d.Eb(1),d.mc("icon",d.nc(5,w)),d.Eb(1),d.Ec("",d.jc(3,3,"odm.features.guide")," ")}}function x(t,n){if(1&t&&(d.Wb(0,"div",6),d.Wb(1,"mat-card"),d.Wb(2,"mat-card-title"),d.Ac(3,h,2,1,"code",7),d.Cc(4),d.ic(5,"translate"),d.Vb(),d.Wb(6,"mat-card-subtitle"),d.Cc(7),d.ic(8,"translate"),d.Vb(),d.Wb(9,"mat-card-actions"),d.Ac(10,v,2,3,"a",8),d.Wb(11,"a",9),d.Rb(12,"fa-icon",10),d.Cc(13),d.ic(14,"translate"),d.Vb(),d.Ac(15,C,4,6,"a",11),d.Vb(),d.Vb(),d.Vb()),2&t){var e=n.$implicit,o=d.hc();d.mc("ngClass",o.routeAnimationsElements),d.Eb(3),d.mc("ngIf",e.version),d.Eb(1),d.Ec("",d.jc(5,8,e.name)," "),d.Eb(3),d.Ec(" ",d.jc(8,10,e.description)," "),d.Eb(3),d.mc("ngIf",e.github),d.Eb(1),d.mc("href",e.documentation,d.vc),d.Eb(2),d.Ec("",d.jc(14,12,"odm.features.documentation")," "),d.Eb(2),d.mc("ngIf",e.medium)}}var _,y,O,M=[{path:"",component:(_=function(){function e(){t(this,e),this.routeAnimationsElements=s.e,this.features=u}var o,a,i;return o=e,(a=[{key:"openLink",value:function(t){window.open(t,"_blank")}}])&&n(o.prototype,a),i&&n(o,i),e}(),_.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=d.Kb({type:_,selectors:[["odm-feature-list"]],decls:8,vars:4,consts:[[1,"_container"],[1,"_row"],[1,"column-md-12"],[1,"main-heading"],[1,"_row","_align-items-end"],["class","column-md-6 column-lg-4",3,"ngClass",4,"ngFor","ngForOf"],[1,"column-md-6","column-lg-4",3,"ngClass"],[4,"ngIf"],["mat-icon-button","","rel","noopener noreferrer","target","_blank",3,"href",4,"ngIf"],["mat-button","","rel","noopener noreferrer","target","_blank",3,"href"],["icon","book"],["mat-button","","rel","noopener noreferrer","target","_blank",3,"href",4,"ngIf"],["mat-icon-button","","rel","noopener noreferrer","target","_blank",3,"href"],[3,"icon"]],template:function(t,n){1&t&&(d.Wb(0,"div",0),d.Wb(1,"div",1),d.Wb(2,"div",2),d.Wb(3,"h1",3),d.Cc(4),d.ic(5,"translate"),d.Vb(),d.Vb(),d.Vb(),d.Wb(6,"div",4),d.Ac(7,x,16,14,"div",5),d.Vb(),d.Vb()),2&t&&(d.Eb(4),d.Dc(d.jc(5,2,"odm.features.title")),d.Eb(3),d.mc("ngForOf",n.features))},directives:[i.j,i.i,g.a,g.h,i.k,g.g,g.b,l.a,p.a],pipes:[b.c],styles:["._container[_ngcontent-%COMP%]{margin-top:20px}.main-heading[_ngcontent-%COMP%]{text-transform:uppercase}.main-heading[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%]{margin:0 0 20px}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{position:relative}mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{position:absolute;top:11px;right:0;float:right;font-size:10px}mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:60px}@media (max-width:576px){mat-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{min-height:auto}}mat-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{position:relative;bottom:2px;font-size:16px;margin:6px}mat-card[_ngcontent-%COMP%]   a[mat-icon-button][_ngcontent-%COMP%]{position:relative;left:5px}"],changeDetection:0}),_),data:{title:"odm.menu.features"}}],j=((O=function n(){t(this,n)}).\u0275fac=function(t){return new(t||O)},O.\u0275mod=d.Ob({type:O}),O.\u0275inj=d.Nb({imports:[[c.l.forChild(M)],c.l]}),O),E=((y=function n(){t(this,n)}).\u0275fac=function(t){return new(t||y)},y.\u0275mod=d.Ob({type:y}),y.\u0275inj=d.Nb({imports:[[i.c,r.a,j]]}),y)}}])}();
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7LHO":function(n,l,e){"use strict";e.d(l,"a",function(){return o});var t=e("CcnG"),o=function(){function n(){this._listeners=[]}return n.prototype.notify=function(n,l){for(var e=0,t=this._listeners;e<t.length;e++)(0,t[e])(n,l)},n.prototype.listen=function(n){var l=this;return this._listeners.push(n),function(){l._listeners=l._listeners.filter(function(l){return n!==l})}},n.prototype.ngOnDestroy=function(){this._listeners=[]},n.ngInjectableDef=t.Q({factory:function(){return new n},token:n,providedIn:"root"}),n}()},A82G:function(n,l,e){"use strict";e.d(l,"a",function(){return i});var t=e("CcnG"),o=0,i=function(){function n(n){this._changeDetectorRef=n,this._checked=!1,this._disabled=!1,this.change=new t.m,this.inputId="checkbox-"+o++,this._onTouched=function(){},this._controlValueAccessorChangeFn=function(){}}return Object.defineProperty(n.prototype,"checked",{get:function(){return this._checked},set:function(n){n!==this.checked&&(this._checked=n,this._changeDetectorRef.markForCheck())},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){n!==this.disabled&&(this._disabled=n,this._changeDetectorRef.markForCheck())},enumerable:!0,configurable:!0}),n.prototype.writeValue=function(n){this.checked=!!n},n.prototype.registerOnChange=function(n){this._controlValueAccessorChangeFn=n},n.prototype.registerOnTouched=function(n){this._onTouched=n},n.prototype.handleChange=function(n){n.stopPropagation(),this.disabled||(this._toggle(),this._emitChangeEvent())},n.prototype._toggle=function(){this.checked=!this.checked},n.prototype._emitChangeEvent=function(){var n=new function(){};n.source=this,n.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(n)},n}()},LkVW:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=function(){},i=e("M6iX"),a=e("5rr3"),u=e("pMnS"),r=e("9BBb"),s=e("pKkm"),c=e("Ykqh"),d=e("I2vm"),h=e("RnHL"),g=e("2aLU"),p=e("0zsg"),b=e("R3mp"),f=e("7LHO"),m=e("gIcY"),_=e("Ip0R"),v=e("Xhfm"),C=e("A82G"),y=e("qh0z"),k=function(){this.colors=["primary","secondary","danger","warning","info","success","light","dark"],this.badgeText="New",this.isPill=!1},x=t.La({encapsulation:0,styles:[[""]],data:{}});function T(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,1,"it-radio-button",[],null,null,null,p.b,p.a)),t.Ma(1,245760,[[1,4]],0,b.a,[[2,b.b],t.h,f.a],{label:[0,"label"],value:[1,"value"]},null)],function(n,l){n(l,1,0,l.context.$implicit,l.context.$implicit)},null)}function P(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,33,"div",[["class","card w-50 mt-2"]],null,null,null,null,null)),(n()(),t.Na(1,0,null,null,32,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t.Na(2,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["Configurazione badge"])),(n()(),t.Na(4,0,null,null,29,"div",[["class","example-section"]],null,null,null,null,null)),(n()(),t.Na(5,0,null,null,2,"label",[["for","exampleInputText"]],null,null,null,null,null)),(n()(),t.Na(6,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),t.fb(-1,null,["Testo badge"])),(n()(),t.Na(8,0,null,null,5,"input",[["class","form-control"],["id","exampleInputText"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0,i=n.component;return"input"===l&&(o=!1!==t.Xa(n,9)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,9).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,9)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,9)._compositionEnd(e.target.value)&&o),"ngModelChange"===l&&(o=!1!==(i.badgeText=e)&&o),o},null,null)),t.Ma(9,16384,null,0,m.c,[t.B,t.k,[2,m.a]],null,null),t.cb(1024,null,m.m,function(n){return[n]},[m.c]),t.Ma(11,671744,null,0,m.r,[[8,null],[8,null],[8,null],[6,m.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,m.n,null,[m.r]),t.Ma(13,16384,null,0,m.o,[[4,m.n]],null,null),(n()(),t.Na(14,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.Na(15,0,null,null,2,"label",[["for","color"]],null,null,null,null,null)),(n()(),t.Na(16,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),t.fb(-1,null,["Colore Badge"])),(n()(),t.Na(18,0,null,null,8,"it-radio-group",[["id","color"]],[[1,"role",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.selectedColor=e)&&t),t},null,null)),t.Ma(19,1064960,null,1,b.b,[t.h],null,null),t.db(603979776,1,{_radios:1}),t.cb(1024,null,m.m,function(n){return[n]},[b.b]),t.Ma(22,671744,null,0,m.r,[[8,null],[8,null],[8,null],[6,m.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,m.n,null,[m.r]),t.Ma(24,16384,null,0,m.o,[[4,m.n]],null,null),(n()(),t.Ea(16777216,null,null,1,null,T)),t.Ma(26,278528,null,0,_.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t.Na(27,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t.Na(28,0,null,null,5,"it-checkbox",[["label","Pill"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,l,e){var t=!0;return"ngModelChange"===l&&(t=!1!==(n.component.isPill=e)&&t),t},v.b,v.a)),t.Ma(29,49152,null,0,C.a,[t.h],{label:[0,"label"]},null),t.cb(1024,null,m.m,function(n){return[n]},[C.a]),t.Ma(31,671744,null,0,m.r,[[8,null],[8,null],[8,null],[6,m.m]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,m.n,null,[m.r]),t.Ma(33,16384,null,0,m.o,[[4,m.n]],null,null),(n()(),t.Na(34,0,null,null,11,"div",[["class","card w-50 mt-2"]],null,null,null,null,null)),(n()(),t.Na(35,0,null,null,10,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),t.Na(36,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["Risultato badge"])),(n()(),t.Na(38,0,null,null,3,"h5",[],null,null,null,null,null)),(n()(),t.fb(-1,null,["Testo di esempio "])),(n()(),t.Na(40,0,null,null,1,"span",[],[[8,"innerText",0],[8,"className",0]],null,null,null,null)),t.Ma(41,16384,null,0,y.a,[t.k],{badgeColor:[0,"badgeColor"],badgeText:[1,"badgeText"],isPill:[2,"isPill"]},null),(n()(),t.Na(42,0,null,null,3,"h5",[],null,null,null,null,null)),(n()(),t.fb(-1,null,["Link di esempio "])),(n()(),t.Na(44,0,null,null,1,"a",[["href","#"],["it-badge","link"]],[[8,"innerText",0],[8,"className",0]],null,null,null,null)),t.Ma(45,16384,null,0,y.a,[t.k],{badgeColor:[0,"badgeColor"],badgeText:[1,"badgeText"]},null)],function(n,l){var e=l.component;n(l,11,0,e.badgeText),n(l,22,0,e.selectedColor),n(l,26,0,e.colors),n(l,29,0,"Pill"),n(l,31,0,e.isPill),n(l,41,0,e.selectedColor,e.badgeText,e.isPill),n(l,45,0,e.selectedColor,"link")},function(n,l){n(l,8,0,t.Xa(l,13).ngClassUntouched,t.Xa(l,13).ngClassTouched,t.Xa(l,13).ngClassPristine,t.Xa(l,13).ngClassDirty,t.Xa(l,13).ngClassValid,t.Xa(l,13).ngClassInvalid,t.Xa(l,13).ngClassPending),n(l,18,0,t.Xa(l,19).role,t.Xa(l,24).ngClassUntouched,t.Xa(l,24).ngClassTouched,t.Xa(l,24).ngClassPristine,t.Xa(l,24).ngClassDirty,t.Xa(l,24).ngClassValid,t.Xa(l,24).ngClassInvalid,t.Xa(l,24).ngClassPending),n(l,28,0,t.Xa(l,33).ngClassUntouched,t.Xa(l,33).ngClassTouched,t.Xa(l,33).ngClassPristine,t.Xa(l,33).ngClassDirty,t.Xa(l,33).ngClassValid,t.Xa(l,33).ngClassInvalid,t.Xa(l,33).ngClassPending),n(l,40,0,t.Xa(l,41).badgeText,t.Xa(l,41).hostClasses),n(l,44,0,t.Xa(l,45).badgeText,t.Xa(l,45).hostClasses)})}var N=e("xh2N"),M=e("HiJM"),X=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),w=t.La({encapsulation:0,styles:[[""]],data:{}});function G(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,1,"it-badge-example",[],null,null,null,P,x)),t.Ma(1,49152,null,0,k,[],null,null),(n()(),t.Na(2,0,null,null,1,"it-source-display",[["html",'\n  \n  <div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Configurazione badge</h4>\n\n    <div class="card-text" class="example-section">\n\n      <label for="exampleInputText"><strong>Testo badge</strong></label>\n      <input type="text" class="form-control" id="exampleInputText" [(ngModel)]="badgeText">\n      <hr>\n      <label for="color"><strong>Colore Badge</strong></label>\n      <it-radio-group id="color" [(ngModel)]="selectedColor">\n        <it-radio-button *ngFor="let color of colors" [value]="color" [label]="color"></it-radio-button>\n      </it-radio-group>\n      <hr>\n      <it-checkbox [(ngModel)]="isPill" label="Pill"></it-checkbox>\n    </div>\n  </div>\n</div>\n\n<div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Risultato badge</h4>\n\n    <h5>Testo di esempio <span [it-badge]="badgeText" [badgeColor]="selectedColor" [isPill]="isPill"></span></h5>\n\n    <h5>Link di esempio <a href="#" it-badge="link" [badgeColor]="selectedColor"></a></h5>\n  </div>\n</div>\n\n\n'],["typescript","\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-badge-example',\n  templateUrl: './badge-example.component.html',\n  styleUrls: ['./badge-example.component.scss']\n})\nexport class BadgeExampleComponent {\n  colors = [\n    'primary',\n    'secondary',\n    'danger',\n    'warning',\n    'info',\n    'success',\n    'light',\n    'dark'\n  ];\n\n  selectedColor;\n\n  badgeText = 'New';\n\n  isPill = false;\n}\n\n\n"]],null,null,null,N.b,N.a)),t.Ma(3,114688,null,0,M.a,[],{html:[0,"html"],typescript:[1,"typescript"]},null)],function(n,l){n(l,3,0,'\n  \n  <div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Configurazione badge</h4>\n\n    <div class="card-text" class="example-section">\n\n      <label for="exampleInputText"><strong>Testo badge</strong></label>\n      <input type="text" class="form-control" id="exampleInputText" [(ngModel)]="badgeText">\n      <hr>\n      <label for="color"><strong>Colore Badge</strong></label>\n      <it-radio-group id="color" [(ngModel)]="selectedColor">\n        <it-radio-button *ngFor="let color of colors" [value]="color" [label]="color"></it-radio-button>\n      </it-radio-group>\n      <hr>\n      <it-checkbox [(ngModel)]="isPill" label="Pill"></it-checkbox>\n    </div>\n  </div>\n</div>\n\n<div class="card w-50 mt-2">\n  <div class="card-body">\n    <h4 class="card-title">Risultato badge</h4>\n\n    <h5>Testo di esempio <span [it-badge]="badgeText" [badgeColor]="selectedColor" [isPill]="isPill"></span></h5>\n\n    <h5>Link di esempio <a href="#" it-badge="link" [badgeColor]="selectedColor"></a></h5>\n  </div>\n</div>\n\n\n',"\n  \n  import { Component } from '@angular/core';\n\n@Component({\n  selector: 'it-badge-example',\n  templateUrl: './badge-example.component.html',\n  styleUrls: ['./badge-example.component.scss']\n})\nexport class BadgeExampleComponent {\n  colors = [\n    'primary',\n    'secondary',\n    'danger',\n    'warning',\n    'info',\n    'success',\n    'light',\n    'dark'\n  ];\n\n  selectedColor;\n\n  badgeText = 'New';\n\n  isPill = false;\n}\n\n\n")},null)}var I=e("dxD6"),V=function(){return function(){this.directive=I.b.find(function(n){return"BadgeDirective"===n.name})}}(),O=t.La({encapsulation:0,styles:[[""]],data:{}});function F(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.fb(-1,null,["Badge"])),(n()(),t.Na(2,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),t.fb(-1,null,["Il componente Badge"])),(n()(),t.Na(4,0,null,null,13,"it-tab-group",[],null,null,null,r.b,r.a)),t.Ma(5,3325952,null,1,s.a,[t.h],null,null),t.db(603979776,1,{_tabs:1}),(n()(),t.Na(7,0,null,null,2,"it-tab",[["label","Descrizione"]],null,null,null,c.b,c.a)),t.Ma(8,704512,[[1,4]],0,d.a,[],{label:[0,"label"]},null),(n()(),t.Na(9,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),t.Na(10,0,null,null,3,"it-tab",[["label","API"]],null,null,null,c.b,c.a)),t.Ma(11,704512,[[1,4]],0,d.a,[],{label:[0,"label"]},null),(n()(),t.Na(12,0,null,0,1,"it-api-parameters",[],null,null,null,h.b,h.a)),t.Ma(13,49152,null,0,g.a,[],{component:[0,"component"]},null),(n()(),t.Na(14,0,null,null,3,"it-tab",[["label","Esempi"]],null,null,null,c.b,c.a)),t.Ma(15,704512,[[1,4]],0,d.a,[],{label:[0,"label"]},null),(n()(),t.Na(16,0,null,0,1,"it-badge-examples",[],null,null,null,G,w)),t.Ma(17,114688,null,0,X,[],null,null)],function(n,l){var e=l.component;n(l,8,0,"Descrizione"),n(l,11,0,"API"),n(l,13,0,e.directive),n(l,15,0,"Esempi"),n(l,17,0)},function(n,l){n(l,9,0,l.component.directive.description)})}var D=t.Ja("it-badge-index",V,function(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,1,"it-badge-index",[],null,null,null,F,O)),t.Ma(1,49152,null,0,V,[],null,null)],null,null)},{},{},[]),R=e("OQP5"),B=e("RyqK"),L=e("PCNd"),j=e("ZYCi"),E=function(){};e.d(l,"BadgeModuleNgFactory",function(){return z});var z=t.Ka(o,[],function(n){return t.Ua([t.Va(512,t.j,t.Z,[[8,[i.a,a.a,u.a,D]],[3,t.j],t.v]),t.Va(4608,_.l,_.k,[t.s,[2,_.t]]),t.Va(4608,m.z,m.z,[]),t.Va(5120,R.b,R.d,[R.e]),t.Va(1073742336,_.b,_.b,[]),t.Va(1073742336,m.w,m.w,[]),t.Va(1073742336,m.i,m.i,[]),t.Va(1073742336,B.a,B.a,[]),t.Va(1073742336,R.c,R.c,[]),t.Va(1073742336,L.a,L.a,[]),t.Va(1073742336,j.n,j.n,[[2,j.t],[2,j.k]]),t.Va(1073742336,E,E,[]),t.Va(1073742336,o,o,[]),t.Va(256,R.e,{theme:"agate"},[]),t.Va(1024,j.i,function(){return[[{path:"",component:V}]]},[])])})},R3mp:function(n,l,e){"use strict";e.d(l,"b",function(){return u}),e.d(l,"a",function(){return r});var t=e("CcnG"),o=(e("7LHO"),0);function i(n){return null!=n&&""+n!="false"}var a=function(n,l){this.source=n,this.value=l},u=function(){function n(n){this._changeDetector=n,this.role="radiogroup",this._value=null,this._name="it-radio-group-"+o++,this._selected=null,this._isInitialized=!1,this._disabled=!1,this.change=new t.m,this._controlValueAccessorChangeFn=function(){},this.onTouched=function(){}}return Object.defineProperty(n.prototype,"name",{get:function(){return this._name},set:function(n){this._name=n,this._updateRadioButtonNames()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"value",{get:function(){return this._value},set:function(n){this._value!==n&&(this._value=n,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())},enumerable:!0,configurable:!0}),n.prototype._checkSelectedRadioButton=function(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)},Object.defineProperty(n.prototype,"selected",{get:function(){return this._selected},set:function(n){this._selected=n,this.value=n?n.value:null,this._checkSelectedRadioButton()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=i(n),this._markRadiosForCheck()},enumerable:!0,configurable:!0}),n.prototype.ngAfterContentInit=function(){this._isInitialized=!0},n.prototype._touch=function(){this.onTouched&&this.onTouched()},n.prototype._updateRadioButtonNames=function(){var n=this;this._radios&&this._radios.forEach(function(l){l.name=n.name})},n.prototype._updateSelectedRadioFromValue=function(){var n=this;this._selected=null,this._radios.forEach(function(l){l.checked=n.value===l.value,l.checked&&(n._selected=l)})},n.prototype._emitChangeEvent=function(){this._isInitialized&&this.change.emit(new a(this._selected,this._value))},n.prototype._markRadiosForCheck=function(){this._radios&&this._radios.forEach(function(n){return n._markForCheck()})},n.prototype.writeValue=function(n){this.value=n,this._changeDetector.markForCheck()},n.prototype.registerOnChange=function(n){this._controlValueAccessorChangeFn=n},n.prototype.registerOnTouched=function(n){this.onTouched=n},n}(),r=function(){function n(n,l,e){var i=this;this._changeDetector=l,this._radioDispatcher=e,this.id="radio-"+o++,this.change=new t.m,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=function(){},this.radioGroup=n,this._removeUniqueSelectionListener=e.listen(function(n,l){n!==i.id&&l===i.name&&(i.checked=!1)})}return Object.defineProperty(n.prototype,"checked",{get:function(){return this._checked},set:function(n){var l=i(n);this._checked!==l&&(this._checked=l,l&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!l&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),l&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"value",{get:function(){return this._value},set:function(n){this._value!==n&&(this._value=n,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===n),this.checked&&(this.radioGroup.selected=this)))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled},set:function(n){var l=!!n;this._disabled!==l&&(this._disabled=l,this._changeDetector.markForCheck())},enumerable:!0,configurable:!0}),n.prototype._markForCheck=function(){this._changeDetector.markForCheck()},n.prototype.ngOnInit=function(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.name=this.radioGroup.name)},n.prototype.ngOnDestroy=function(){this._removeUniqueSelectionListener()},n.prototype._emitChangeEvent=function(){this.change.emit(new a(this,this._value))},n.prototype._onInputChange=function(n){n.stopPropagation();var l=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),this.radioGroup._touch(),l&&this.radioGroup._emitChangeEvent())},n}()},qh0z:function(n,l,e){"use strict";e.d(l,"a",function(){return i});var t=e("7TIR"),o=e("nEsh"),i=function(){function n(n){this.el=n,this._badgeColor=t.a.LIGHT,this._badgeText="",this._isPill=!1}return Object.defineProperty(n.prototype,"badgeColor",{get:function(){return this._badgeColor},set:function(n){this._badgeColor=t.b.is(n)?n:t.a.LIGHT},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"badgeText",{get:function(){return this._badgeText},set:function(n){this._badgeText=n||""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isPill",{get:function(){return this._isPill},set:function(n){this._isPill=o.a.coerceBooleanProperty(n)},enumerable:!0,configurable:!0}),n.prototype.getBadgeColorClassName=function(){return"badge-"+this._badgeColor},Object.defineProperty(n.prototype,"hostClasses",{get:function(){return["badge",this.getBadgeColorClassName(),this.isPill?"badge-pill":""].join(" ")},enumerable:!0,configurable:!0}),n}()}}]);
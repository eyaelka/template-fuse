function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var c,a=_getPrototypeOf(t);if(e){var n=_getPrototypeOf(this).constructor;c=Reflect.construct(a,arguments,n)}else c=a.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _createForOfIteratorHelper(t,e){var c;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(c=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){c&&(t=c);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,r=!1;return{s:function(){c=t[Symbol.iterator]()},n:function(){var t=c.next();return o=t.done,t},e:function(t){r=!0,i=t},f:function(){try{o||null==c.return||c.return()}finally{if(r)throw i}}}}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var c=0,a=new Array(e);c<e;c++)a[c]=t[c];return a}function _iterableToArrayLimit(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var c=[],a=!0,n=!1,i=void 0;try{for(var o,r=t[Symbol.iterator]();!(a=(o=r.next()).done)&&(c.push(o.value),!e||c.length!==e);a=!0);}catch(s){n=!0,i=s}finally{try{a||null==r.return||r.return()}finally{if(n)throw i}}return c}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var c=0;c<e.length;c++){var a=e[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,c){return e&&_defineProperties(t.prototype,e),c&&_defineProperties(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{B9zo:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var a=c("XNiG"),n=c("1G5W"),i=c("fXoL"),o=c("h2q7"),r=function(){var t=function(){function t(e,c,n){_classCallCheck(this,t),this._elementRef=e,this._fuseMediaMatchService=c,this._renderer=n,this._unsubscribeAll=new a.a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this._parent=this._renderer.parentNode(this._elementRef.nativeElement),this._parent&&(this._grandParent=this._renderer.parentNode(this._parent),this._fuseMediaMatchService.onMediaChange.pipe(Object(n.a)(this._unsubscribeAll)).subscribe((function(e){"xs"===e?t._removeClass():t._addClass()})))}},{key:"ngOnDestroy",value:function(){this._parent&&(this._removeClass(),this._unsubscribeAll.next(),this._unsubscribeAll.complete())}},{key:"_addClass",value:function(){this._renderer.addClass(this._grandParent,"inner-scroll")}},{key:"_removeClass",value:function(){this._renderer.removeClass(this._grandParent,"inner-scroll")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Vb(i.l),i.Vb(o.a),i.Vb(i.I))},t.\u0275dir=i.Qb({type:t,selectors:[["",8,"inner-scroll"]]}),t}()},NulH:function(t,e,c){"use strict";c.r(e),c.d(e,"ContactsModule",(function(){return It}));var a=c("tyNb"),n=c("bTqV"),i=c("bSwM"),o=c("FKr1"),r=c("iadO"),s=c("kmnG"),l=c("NFeN"),u=c("qFsG"),b=c("STbY"),d=c("+0xr"),f=c("/t3+"),m=c("5HBU"),h=c("LPQX"),p=c("3Pt+"),g=c("XNiG"),v=c("1G5W"),C=c("Kj3r"),y=c("/uUt"),x=c("PVWW"),_=c("0IaG"),w=c("jD4G"),k=function t(e){_classCallCheck(this,t),this.id=e.id||w.a.generateGUID(),this.name=e.name||"",this.lastName=e.lastName||"",this.avatar=e.avatar||"assets/images/avatars/profile.jpg",this.nickname=e.nickname||"",this.company=e.company||"",this.jobTitle=e.jobTitle||"",this.email=e.email||"",this.phone=e.phone||"",this.address=e.address||"",this.birthday=e.birthday||"",this.notes=e.notes||""},S=c("fXoL"),A=c("XiUz"),O=c("EwFO"),D=c("ofXK");function U(t,e){if(1&t){var c=S.cc();S.bc(0,"button",29),S.jc("click",(function(t){S.Kc(c);var e=S.nc();return e.matDialogRef.close(["delete",e.contactForm])})),S.Uc(1," DELETE "),S.ac()}}function P(t,e){if(1&t){var c=S.cc();S.bc(0,"button",30),S.jc("click",(function(t){S.Kc(c);var e=S.nc();return e.matDialogRef.close(e.contactForm)})),S.Uc(1," ADD "),S.ac()}if(2&t){var a=S.nc();S.uc("disabled",a.contactForm.invalid)}}function j(t,e){if(1&t){var c=S.cc();S.bc(0,"button",30),S.jc("click",(function(t){S.Kc(c);var e=S.nc();return e.matDialogRef.close(["save",e.contactForm])})),S.Uc(1," SAVE "),S.ac()}if(2&t){var a=S.nc();S.uc("disabled",a.contactForm.invalid)}}var H,I,T,M=((H=function(){function t(e,c,a){_classCallCheck(this,t),this.matDialogRef=e,this._data=c,this._formBuilder=a,this.action=c.action,"edit"===this.action?(this.dialogTitle="Edit Contact",this.contact=c.contact):(this.dialogTitle="New Contact",this.contact=new k({})),this.contactForm=this.createContactForm()}return _createClass(t,[{key:"createContactForm",value:function(){return this._formBuilder.group({id:[this.contact.id],name:[this.contact.name],lastName:[this.contact.lastName],avatar:[this.contact.avatar],nickname:[this.contact.nickname],company:[this.contact.company],jobTitle:[this.contact.jobTitle],email:[this.contact.email],phone:[this.contact.phone],address:[this.contact.address],birthday:[this.contact.birthday],notes:[this.contact.notes]})}}]),t}()).\u0275fac=function(t){return new(t||H)(S.Vb(_.f),S.Vb(_.a),S.Vb(p.c))},H.\u0275cmp=S.Pb({type:H,selectors:[["contacts-contact-form-dialog"]],decls:87,vars:11,consts:[[1,"dialog-content-wrapper"],["matDialogTitle","",1,"mat-accent","m-0"],["fxLayout","row","fxLayoutAlign","space-between center"],[1,"title","dialog-title"],["mat-icon-button","","aria-label","Close dialog",3,"click"],["fxLayout","column","fxLayoutAlign","center center",1,"toolbar-bottom","py-16"],[1,"avatar","contact-avatar","huge","m-0",3,"src","alt"],[1,"contact-name","mt-8"],["mat-dialog-content","","fusePerfectScrollbar","",1,"p-24","pb-0","m-0"],[3,"formGroup"],["fxLayout","row","fxLayoutAlign","start start"],["appearance","outline","fxFlex",""],["matSuffix","",1,"secondary-text"],["name","name","formControlName","name","matInput","","required",""],["name","lastName","formControlName","lastName","matInput",""],["name","nickname","formControlName","nickname","matInput",""],["formControlName","phone","matInput",""],["name","email","formControlName","email","matInput","","type","email"],["name","company","formControlName","company","matInput",""],["name","jobTitle","formControlName","jobTitle","matInput",""],["matInput","","name","birthday","formControlName","birthday",3,"matDatepicker"],["matSuffix","",3,"for"],["birthdayDatePicker",""],["name","address","formControlName","address","matInput",""],["fxLayout","row","fxLayoutAlign","start start",1,"textarea-wrapper"],["name","notes","formControlName","notes","matInput","","type","text","max-rows","4"],["mat-dialog-actions","","fxLayout","row","fxLayoutAlign","end center",1,"m-0","p-16"],["mat-button","","class","mr-8","aria-label","Delete","matTooltip","Delete",3,"click",4,"ngIf"],["mat-button","","class","save-button","aria-label","SAVE",3,"disabled","click",4,"ngIf"],["mat-button","","aria-label","Delete","matTooltip","Delete",1,"mr-8",3,"click"],["mat-button","","aria-label","SAVE",1,"save-button",3,"disabled","click"]],template:function(t,e){if(1&t&&(S.bc(0,"div",0),S.bc(1,"mat-toolbar",1),S.bc(2,"mat-toolbar-row",2),S.bc(3,"span",3),S.Uc(4),S.ac(),S.bc(5,"button",4),S.jc("click",(function(t){return e.matDialogRef.close()})),S.bc(6,"mat-icon"),S.Uc(7,"close"),S.ac(),S.ac(),S.ac(),S.bc(8,"mat-toolbar-row",5),S.Wb(9,"img",6),S.bc(10,"div",7),S.Uc(11),S.ac(),S.ac(),S.ac(),S.bc(12,"div",8),S.bc(13,"form",9),S.bc(14,"div",10),S.bc(15,"mat-form-field",11),S.bc(16,"mat-label"),S.Uc(17,"Name"),S.ac(),S.bc(18,"mat-icon",12),S.Uc(19,"account_circle"),S.ac(),S.Wb(20,"input",13),S.ac(),S.ac(),S.bc(21,"div",10),S.bc(22,"mat-form-field",11),S.bc(23,"mat-label"),S.Uc(24,"Lastname"),S.ac(),S.bc(25,"mat-icon",12),S.Uc(26,"account_circle"),S.ac(),S.Wb(27,"input",14),S.ac(),S.ac(),S.bc(28,"div",10),S.bc(29,"mat-form-field",11),S.bc(30,"mat-label"),S.Uc(31,"Nickname"),S.ac(),S.bc(32,"mat-icon",12),S.Uc(33,"star"),S.ac(),S.Wb(34,"input",15),S.ac(),S.ac(),S.bc(35,"div",10),S.bc(36,"mat-form-field",11),S.bc(37,"mat-label"),S.Uc(38,"Phone number"),S.ac(),S.bc(39,"mat-icon",12),S.Uc(40,"phone"),S.ac(),S.Wb(41,"input",16),S.ac(),S.ac(),S.bc(42,"div",10),S.bc(43,"mat-form-field",11),S.bc(44,"mat-label"),S.Uc(45,"Email"),S.ac(),S.bc(46,"mat-icon",12),S.Uc(47,"email"),S.ac(),S.Wb(48,"input",17),S.ac(),S.ac(),S.bc(49,"div",10),S.bc(50,"mat-form-field",11),S.bc(51,"mat-label"),S.Uc(52,"Company"),S.ac(),S.bc(53,"mat-icon",12),S.Uc(54,"domain"),S.ac(),S.Wb(55,"input",18),S.ac(),S.ac(),S.bc(56,"div",10),S.bc(57,"mat-form-field",11),S.bc(58,"mat-label"),S.Uc(59,"Job title"),S.ac(),S.bc(60,"mat-icon",12),S.Uc(61,"work"),S.ac(),S.Wb(62,"input",19),S.ac(),S.ac(),S.bc(63,"div",10),S.bc(64,"mat-form-field",11),S.bc(65,"mat-label"),S.Uc(66,"Birthday"),S.ac(),S.Wb(67,"input",20),S.Wb(68,"mat-datepicker-toggle",21),S.Wb(69,"mat-datepicker",null,22),S.ac(),S.ac(),S.bc(71,"div",10),S.bc(72,"mat-form-field",11),S.bc(73,"mat-label"),S.Uc(74,"Address"),S.ac(),S.bc(75,"mat-icon",12),S.Uc(76,"home"),S.ac(),S.Wb(77,"input",23),S.ac(),S.ac(),S.bc(78,"div",24),S.bc(79,"mat-form-field",11),S.bc(80,"mat-label"),S.Uc(81,"Notes"),S.ac(),S.Wb(82,"textarea",25),S.ac(),S.ac(),S.ac(),S.ac(),S.bc(83,"div",26),S.Sc(84,U,2,0,"button",27),S.Sc(85,P,2,1,"button",28),S.Sc(86,j,2,1,"button",28),S.ac(),S.ac()),2&t){var c=S.Gc(70);S.Hb(4),S.Vc(e.dialogTitle),S.Hb(5),S.uc("src",e.contact.avatar,S.Mc)("alt",e.contact.name),S.Hb(2),S.Xc("",e.contact.name," ",e.contact.lastName,""),S.Hb(2),S.uc("formGroup",e.contactForm),S.Hb(54),S.uc("matDatepicker",c),S.Hb(1),S.uc("for",c),S.Hb(16),S.uc("ngIf","edit"===e.action),S.Hb(1),S.uc("ngIf","edit"!==e.action),S.Hb(1),S.uc("ngIf","edit"===e.action)}},directives:[f.a,f.c,A.e,A.d,n.b,l.a,O.a,p.w,p.p,p.h,s.b,A.b,s.f,s.h,p.b,u.b,p.o,p.f,p.u,r.b,r.d,r.a,D.t],styles:["@media screen and (max-width:599px){.contact-form-dialog{width:100%}}@media screen and (min-width:600px){.contact-form-dialog{width:400px}}.contact-form-dialog .mat-dialog-container{padding:0}.contact-form-dialog .mat-dialog-container .mat-toolbar{flex:1 0 auto;min-height:0}.contact-form-dialog .mat-dialog-container .toolbar-bottom{height:auto}.contact-form-dialog .dialog-content-wrapper{max-height:85vh;display:flex;flex-direction:column}"],encapsulation:2}),H),L=c("2Vo4"),R=c("tk/3"),F=((I=function(){function t(e){_classCallCheck(this,t),this._httpClient=e,this.selectedContacts=[],this.onContactsChanged=new L.a([]),this.onSelectedContactsChanged=new L.a([]),this.onUserDataChanged=new L.a([]),this.onSearchTextChanged=new g.a,this.onFilterChanged=new g.a}return _createClass(t,[{key:"resolve",value:function(t,e){var c=this;return new Promise((function(t,e){Promise.all([c.getContacts(),c.getUserData()]).then((function(e){_slicedToArray(e,1)[0],c.onSearchTextChanged.subscribe((function(t){c.searchText=t,c.getContacts()})),c.onFilterChanged.subscribe((function(t){c.filterBy=t,c.getContacts()})),t()}),e)}))}},{key:"getContacts",value:function(){var t=this;return new Promise((function(e,c){t._httpClient.get("api/contacts-contacts").subscribe((function(c){t.contacts=c,"starred"===t.filterBy&&(t.contacts=t.contacts.filter((function(e){return t.user.starred.includes(e.id)}))),"frequent"===t.filterBy&&(t.contacts=t.contacts.filter((function(e){return t.user.frequentContacts.includes(e.id)}))),t.searchText&&""!==t.searchText&&(t.contacts=w.a.filterArrayByString(t.contacts,t.searchText)),t.contacts=t.contacts.map((function(t){return new k(t)})),t.onContactsChanged.next(t.contacts),e(t.contacts)}),c)}))}},{key:"getUserData",value:function(){var t=this;return new Promise((function(e,c){t._httpClient.get("api/contacts-user/5725a6802d10e277a0f35724").subscribe((function(c){t.user=c,t.onUserDataChanged.next(t.user),e(t.user)}),c)}))}},{key:"toggleSelectedContact",value:function(t){if(this.selectedContacts.length>0){var e=this.selectedContacts.indexOf(t);if(-1!==e)return this.selectedContacts.splice(e,1),void this.onSelectedContactsChanged.next(this.selectedContacts)}this.selectedContacts.push(t),this.onSelectedContactsChanged.next(this.selectedContacts)}},{key:"toggleSelectAll",value:function(){this.selectedContacts.length>0?this.deselectContacts():this.selectContacts()}},{key:"selectContacts",value:function(t,e){var c=this;this.selectedContacts=[],void 0!==t&&void 0!==e||(this.selectedContacts=[],this.contacts.map((function(t){c.selectedContacts.push(t.id)}))),this.onSelectedContactsChanged.next(this.selectedContacts)}},{key:"updateContact",value:function(t){var e=this;return new Promise((function(c,a){e._httpClient.post("api/contacts-contacts/"+t.id,Object.assign({},t)).subscribe((function(t){e.getContacts(),c(t)}))}))}},{key:"updateUserData",value:function(t){var e=this;return new Promise((function(c,a){e._httpClient.post("api/contacts-user/"+e.user.id,Object.assign({},t)).subscribe((function(t){e.getUserData(),e.getContacts(),c(t)}))}))}},{key:"deselectContacts",value:function(){this.selectedContacts=[],this.onSelectedContactsChanged.next(this.selectedContacts)}},{key:"deleteContact",value:function(t){var e=this.contacts.indexOf(t);this.contacts.splice(e,1),this.onContactsChanged.next(this.contacts)}},{key:"deleteSelectedContacts",value:function(){var t,e=this,c=_createForOfIteratorHelper(this.selectedContacts);try{var a=function(){var c=t.value,a=e.contacts.find((function(t){return t.id===c})),n=e.contacts.indexOf(a);e.contacts.splice(n,1)};for(c.s();!(t=c.n()).done;)a()}catch(n){c.e(n)}finally{c.f()}this.onContactsChanged.next(this.contacts),this.deselectContacts()}}]),t}()).\u0275fac=function(t){return new(t||I)(S.fc(R.b))},I.\u0275prov=S.Rb({token:I,factory:I.\u0275fac}),I),N=c("HX77"),W=c("B9zo"),V=c("znSr"),B=c("fE3o"),E=function(t){return{"active accent":t}},$=((T=function(){function t(e){_classCallCheck(this,t),this._contactsService=e,this._unsubscribeAll=new g.a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.filterBy=this._contactsService.filterBy||"all",this._contactsService.onUserDataChanged.pipe(Object(v.a)(this._unsubscribeAll)).subscribe((function(e){t.user=e}))}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}},{key:"changeFilter",value:function(t){this.filterBy=t,this._contactsService.onFilterChanged.next(this.filterBy)}}]),t}()).\u0275fac=function(t){return new(t||T)(S.Vb(F))},T.\u0275cmp=S.Pb({type:T,selectors:[["contacts-main-sidebar"]],decls:20,vars:12,consts:[[1,"sidebar-content"],[1,"card"],["fxLayout","row","fxLayoutAlign","start center",1,"header","p-24"],[1,"avatar","mr-16",3,"src","alt"],[1,"h5"],["fusePerfectScrollbar","",1,"content","py-16"],[1,"nav","material2"],["aria-label","inbox",1,"nav-item"],["matRipple","",1,"nav-link",3,"ngClass","click"],[1,"title"],["aria-label","frequently contacted",1,"nav-item",3,"click"],["matRipple","",1,"nav-link",3,"ngClass"],["aria-label","starred",1,"nav-item",3,"click"]],template:function(t,e){1&t&&(S.bc(0,"div",0),S.bc(1,"div",1),S.bc(2,"div",2),S.Wb(3,"img",3),S.bc(4,"span",4),S.Uc(5),S.ac(),S.ac(),S.bc(6,"div",5),S.bc(7,"div",6),S.bc(8,"div",7),S.bc(9,"a",8),S.jc("click",(function(t){return e.changeFilter("all")})),S.bc(10,"span",9),S.Uc(11,"All Contacts"),S.ac(),S.ac(),S.ac(),S.bc(12,"div",10),S.jc("click",(function(t){return e.changeFilter("frequent")})),S.bc(13,"a",11),S.bc(14,"div",9),S.Uc(15,"Freequently contacted"),S.ac(),S.ac(),S.ac(),S.bc(16,"div",12),S.jc("click",(function(t){return e.changeFilter("starred")})),S.bc(17,"a",11),S.bc(18,"div",9),S.Uc(19,"Starred Contacts"),S.ac(),S.ac(),S.ac(),S.ac(),S.ac(),S.ac(),S.ac()),2&t&&(S.Hb(3),S.uc("src",e.user.avatar,S.Mc)("alt",e.user.name),S.Hb(2),S.Vc(e.user.name),S.Hb(4),S.uc("ngClass",S.xc(6,E,"all"===e.filterBy)),S.Hb(4),S.uc("ngClass",S.xc(8,E,"frequent"===e.filterBy)),S.Hb(4),S.uc("ngClass",S.xc(10,E,"starred"===e.filterBy)))},directives:[A.e,A.d,O.a,o.r,D.q,V.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1 0 auto;height:100%}[_nghost-%COMP%]   .sidebar-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0}@media screen and (min-width:960px){[_nghost-%COMP%]   .sidebar-content[_ngcontent-%COMP%]{padding:24px 4px 24px 24px}}[_nghost-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:0 1 auto;padding:0;border-radius:8px}@media screen and (min-width:960px){[_nghost-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}}[_nghost-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] > .header[_ngcontent-%COMP%]{flex:0 1 auto;border-bottom:1px solid rgba(0,0,0,.12)}[_nghost-%COMP%]   .sidebar-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] > .content[_ngcontent-%COMP%]{flex:0 1 auto}"]}),T),G=c("0EQZ"),K=c("2nsM"),q=["dialogContent"];function X(t,e){1&t&&S.Wb(0,"mat-header-cell")}function Z(t,e){if(1&t){var c=S.cc();S.bc(0,"mat-cell"),S.bc(1,"mat-checkbox",20),S.jc("ngModelChange",(function(t){S.Kc(c);var a=e.$implicit;return S.nc().checkboxes[a.id]=t}))("ngModelChange",(function(t){S.Kc(c);var a=e.$implicit;return S.nc().onSelectedChange(a.id)}))("click",(function(t){return S.Kc(c),t.stopPropagation()})),S.ac(),S.ac()}if(2&t){var a=e.$implicit,n=S.nc();S.Hb(1),S.uc("ngModel",n.checkboxes[a.id])}}function Y(t,e){1&t&&S.Wb(0,"mat-header-cell")}function z(t,e){if(1&t&&S.Wb(0,"img",22),2&t){var c=S.nc().$implicit;S.uc("alt",c.name)("src",c.avatar,S.Mc)}}function J(t,e){if(1&t&&(S.bc(0,"mat-cell"),S.Sc(1,z,1,2,"img",21),S.ac()),2&t){var c=e.$implicit;S.Hb(1),S.uc("ngIf",c.avatar)}}function Q(t,e){1&t&&(S.bc(0,"mat-header-cell"),S.Uc(1,"Name"),S.ac())}function tt(t,e){if(1&t&&(S.bc(0,"mat-cell"),S.bc(1,"p",23),S.Uc(2),S.ac(),S.ac()),2&t){var c=e.$implicit;S.Hb(2),S.Xc("",c.name," ",c.lastName,"")}}function et(t,e){1&t&&(S.bc(0,"mat-header-cell",24),S.Uc(1,"Email"),S.ac())}function ct(t,e){if(1&t&&(S.bc(0,"mat-cell",24),S.bc(1,"p",25),S.Uc(2),S.ac(),S.ac()),2&t){var c=e.$implicit;S.Hb(2),S.Wc(" ",c.email," ")}}function at(t,e){1&t&&(S.bc(0,"mat-header-cell",26),S.Uc(1,"Phone"),S.ac())}function nt(t,e){if(1&t&&(S.bc(0,"mat-cell",26),S.bc(1,"p",27),S.Uc(2),S.ac(),S.ac()),2&t){var c=e.$implicit;S.Hb(2),S.Wc(" ",c.phone," ")}}function it(t,e){1&t&&(S.bc(0,"mat-header-cell",28),S.Uc(1,"Job title"),S.ac())}function ot(t,e){if(1&t&&(S.bc(0,"mat-cell",28),S.bc(1,"p",29),S.Uc(2),S.ac(),S.ac()),2&t){var c=e.$implicit;S.Hb(2),S.Wc(" ",c.jobTitle," ")}}function rt(t,e){1&t&&(S.bc(0,"mat-header-cell",28),S.Uc(1,"Company"),S.ac())}function st(t,e){if(1&t&&(S.bc(0,"mat-cell",28),S.bc(1,"p",30),S.Uc(2),S.ac(),S.ac()),2&t){var c=e.$implicit;S.Hb(2),S.Wc(" ",c.company," ")}}function lt(t,e){1&t&&S.Wb(0,"mat-header-cell")}function ut(t,e){1&t&&(S.bc(0,"mat-icon",39),S.Uc(1,"star"),S.ac())}function bt(t,e){1&t&&(S.bc(0,"mat-icon",36),S.Uc(1,"star_border"),S.ac())}function dt(t,e){if(1&t){var c=S.cc();S.bc(0,"mat-cell"),S.bc(1,"div",31),S.bc(2,"button",32),S.jc("click",(function(t){S.Kc(c);var a=e.$implicit,n=S.nc();return t.stopPropagation(),n.toggleStar(a.id)})),S.Sc(3,ut,2,0,"mat-icon",33),S.Sc(4,bt,2,0,"mat-icon",34),S.ac(),S.bc(5,"button",35),S.jc("click",(function(t){return S.Kc(c),t.stopPropagation()})),S.bc(6,"mat-icon",36),S.Uc(7,"more_vert"),S.ac(),S.ac(),S.bc(8,"mat-menu",null,37),S.bc(10,"button",38),S.jc("click",(function(t){S.Kc(c);var a=e.$implicit;return S.nc().deleteContact(a)})),S.bc(11,"mat-icon"),S.Uc(12,"delete"),S.ac(),S.bc(13,"span"),S.Uc(14,"Remove"),S.ac(),S.ac(),S.ac(),S.ac(),S.ac()}if(2&t){var a=e.$implicit,n=S.Gc(9),i=S.nc();S.Hb(3),S.uc("ngIf",i.user.starred.includes(a.id)),S.Hb(1),S.uc("ngIf",!i.user.starred.includes(a.id)),S.Hb(1),S.uc("matMenuTriggerFor",n)}}function ft(t,e){1&t&&S.Wb(0,"mat-header-row")}var mt=function(t){return{"accent-50":t}},ht=function(){return{y:"100%"}},pt=function(t){return{value:"*",params:t}};function gt(t,e){if(1&t){var c=S.cc();S.bc(0,"mat-row",40),S.jc("click",(function(t){S.Kc(c);var a=e.$implicit;return S.nc().editContact(a)})),S.ac()}if(2&t){var a=e.$implicit,n=S.nc();S.uc("ngClass",S.xc(2,mt,n.checkboxes[a.id]))("@animate",S.xc(5,pt,S.wc(4,ht)))}}var vt,Ct,yt=function(){return{value:"50"}},xt=((vt=function(){function t(e,c){_classCallCheck(this,t),this._contactsService=e,this._matDialog=c,this.displayedColumns=["checkbox","avatar","name","email","phone","jobTitle","buttons"],this._unsubscribeAll=new g.a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.dataSource=new _t(this._contactsService),this._contactsService.onContactsChanged.pipe(Object(v.a)(this._unsubscribeAll)).subscribe((function(e){t.contacts=e,t.checkboxes={},e.map((function(e){t.checkboxes[e.id]=!1}))})),this._contactsService.onSelectedContactsChanged.pipe(Object(v.a)(this._unsubscribeAll)).subscribe((function(e){for(var c in t.checkboxes)t.checkboxes.hasOwnProperty(c)&&(t.checkboxes[c]=e.includes(c));t.selectedContacts=e})),this._contactsService.onUserDataChanged.pipe(Object(v.a)(this._unsubscribeAll)).subscribe((function(e){t.user=e})),this._contactsService.onFilterChanged.pipe(Object(v.a)(this._unsubscribeAll)).subscribe((function(){t._contactsService.deselectContacts()}))}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}},{key:"editContact",value:function(t){var e=this;this.dialogRef=this._matDialog.open(M,{panelClass:"contact-form-dialog",data:{contact:t,action:"edit"}}),this.dialogRef.afterClosed().subscribe((function(c){if(c){var a=c[1];switch(c[0]){case"save":e._contactsService.updateContact(a.getRawValue());break;case"delete":e.deleteContact(t)}}}))}},{key:"deleteContact",value:function(t){var e=this;this.confirmDialogRef=this._matDialog.open(K.a,{disableClose:!1}),this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete?",this.confirmDialogRef.afterClosed().subscribe((function(c){c&&e._contactsService.deleteContact(t),e.confirmDialogRef=null}))}},{key:"onSelectedChange",value:function(t){this._contactsService.toggleSelectedContact(t)}},{key:"toggleStar",value:function(t){this.user.starred.includes(t)?this.user.starred.splice(this.user.starred.indexOf(t),1):this.user.starred.push(t),this._contactsService.updateUserData(this.user)}}]),t}()).\u0275fac=function(t){return new(t||vt)(S.Vb(F),S.Vb(_.b))},vt.\u0275cmp=S.Pb({type:vt,selectors:[["contacts-contact-list"]],viewQuery:function(t,e){var c;1&t&&S.Zc(q,!0),2&t&&S.Fc(c=S.kc())&&(e.dialogContent=c.first)},decls:28,vars:5,consts:[[3,"dataSource"],["table",""],["matColumnDef","checkbox"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","avatar"],["matColumnDef","name"],["matColumnDef","email"],["fxHide","","fxShow.gt-sm","",4,"matHeaderCellDef"],["fxHide","","fxShow.gt-sm","",4,"matCellDef"],["matColumnDef","phone"],["fxHide","","fxShow.gt-md","",4,"matHeaderCellDef"],["fxHide","","fxShow.gt-md","",4,"matCellDef"],["matColumnDef","jobTitle"],["fxHide","","fxShow.gt-lg","",4,"matHeaderCellDef"],["fxHide","","fxShow.gt-lg","",4,"matCellDef"],["matColumnDef","company"],["matColumnDef","buttons"],[4,"matHeaderRowDef"],["class","contact",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],[3,"ngModel","ngModelChange","click"],["class","avatar",3,"alt","src",4,"ngIf"],[1,"avatar",3,"alt","src"],[1,"text-truncate","font-weight-600"],["fxHide","","fxShow.gt-sm",""],[1,"email","text-truncate"],["fxHide","","fxShow.gt-md",""],[1,"phone","text-truncate"],["fxHide","","fxShow.gt-lg",""],[1,"job-title","text-truncate"],[1,"company","text-truncate"],["fxFlex","row","fxLayoutAlign","end center"],["mat-icon-button","","aria-label","Toggle star",3,"click"],["class","amber-fg",4,"ngIf"],["class","secondary-text",4,"ngIf"],["mat-icon-button","","aria-label","More",3,"matMenuTriggerFor","click"],[1,"secondary-text"],["moreMenu","matMenu"],["mat-menu-item","","aria-label","remove",3,"click"],[1,"amber-fg"],[1,"contact",3,"ngClass","click"]],template:function(t,e){1&t&&(S.bc(0,"mat-table",0,1),S.Zb(2,2),S.Sc(3,X,1,0,"mat-header-cell",3),S.Sc(4,Z,2,1,"mat-cell",4),S.Yb(),S.Zb(5,5),S.Sc(6,Y,1,0,"mat-header-cell",3),S.Sc(7,J,2,1,"mat-cell",4),S.Yb(),S.Zb(8,6),S.Sc(9,Q,2,0,"mat-header-cell",3),S.Sc(10,tt,3,2,"mat-cell",4),S.Yb(),S.Zb(11,7),S.Sc(12,et,2,0,"mat-header-cell",8),S.Sc(13,ct,3,1,"mat-cell",9),S.Yb(),S.Zb(14,10),S.Sc(15,at,2,0,"mat-header-cell",11),S.Sc(16,nt,3,1,"mat-cell",12),S.Yb(),S.Zb(17,13),S.Sc(18,it,2,0,"mat-header-cell",14),S.Sc(19,ot,3,1,"mat-cell",15),S.Yb(),S.Zb(20,16),S.Sc(21,rt,2,0,"mat-header-cell",14),S.Sc(22,st,3,1,"mat-cell",15),S.Yb(),S.Zb(23,17),S.Sc(24,lt,1,0,"mat-header-cell",3),S.Sc(25,dt,15,3,"mat-cell",4),S.Yb(),S.Sc(26,ft,1,0,"mat-header-row",18),S.Sc(27,gt,1,7,"mat-row",19),S.ac()),2&t&&(S.uc("dataSource",e.dataSource)("@animateStagger",S.wc(4,yt)),S.Hb(26),S.uc("matHeaderRowDef",e.displayedColumns),S.Hb(1),S.uc("matRowDefColumns",e.displayedColumns))},directives:[d.j,d.c,d.e,d.b,d.g,d.i,d.d,d.a,i.a,p.o,p.r,D.t,V.b,A.b,A.d,n.b,b.c,l.a,b.d,b.a,d.f,d.h,D.q,V.a],styles:["contacts-contact-list{display:flex;flex:1 1 auto;width:100%}contacts-contact-list .mat-table{width:100%;background:transparent;box-shadow:none}contacts-contact-list .mat-table .mat-column-checkbox{flex:0 1 64px;padding-left:18px}contacts-contact-list .mat-table .mat-column-avatar{flex:0 1 64px}contacts-contact-list .mat-table .mat-column-buttons{flex:0 1 80px}contacts-contact-list .mat-table .mat-row{position:relative;cursor:pointer;padding:8px}contacts-contact-list .mat-table .mat-row .mat-cell{min-width:0}contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button{flex:0 1 auto;padding:0 24px 0 0}@media screen and (min-width:1280px){contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button{display:none}}#add-contact-button{position:absolute;bottom:12px;right:12px;padding:0;z-index:99}@media screen and (max-width:599px){#add-contact-button{position:-webkit-sticky;position:sticky;top:calc(100vh - 120px);bottom:auto}}"],encapsulation:2,data:{animation:x.a}}),vt),_t=function(t){_inherits(c,t);var e=_createSuper(c);function c(t){var a;return _classCallCheck(this,c),(a=e.call(this))._contactsService=t,a}return _createClass(c,[{key:"connect",value:function(){return this._contactsService.onContactsChanged}},{key:"disconnect",value:function(){}}]),c}(G.b),wt=((Ct=function(){function t(e,c){_classCallCheck(this,t),this._contactsService=e,this._matDialog=c,this._unsubscribeAll=new g.a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this._contactsService.onSelectedContactsChanged.pipe(Object(v.a)(this._unsubscribeAll)).subscribe((function(e){t.selectedContacts=e,setTimeout((function(){t.hasSelectedContacts=e.length>0,t.isIndeterminate=e.length!==t._contactsService.contacts.length&&e.length>0}),0)}))}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}},{key:"selectAll",value:function(){this._contactsService.selectContacts()}},{key:"deselectAll",value:function(){this._contactsService.deselectContacts()}},{key:"deleteSelectedContacts",value:function(){var t=this;this.confirmDialogRef=this._matDialog.open(K.a,{disableClose:!1}),this.confirmDialogRef.componentInstance.confirmMessage="Are you sure you want to delete all selected contacts?",this.confirmDialogRef.afterClosed().subscribe((function(e){e&&t._contactsService.deleteSelectedContacts(),t.confirmDialogRef=null}))}}]),t}()).\u0275fac=function(t){return new(t||Ct)(S.Vb(F),S.Vb(_.b))},Ct.\u0275cmp=S.Pb({type:Ct,selectors:[["selected-bar"]],decls:27,vars:2,consts:[["fxFlex","","fxLayout","row","fxLayoutAlign","start center",1,"p-24"],["fxFlex","0 1 auto","fxFlex.gt-sm","220px",1,"close-button-wrapper",3,"click"],["mat-button","","fxLayout","row","fxLayoutAlign","start center",1,"p-8"],[1,"mr-8"],[1,"text-uppercase"],["fxFlex","","fxLayout","row","fxLayoutAlign","end center","fxLayoutAlign.gt-sm","space-between center"],[1,"selected-contacts-count"],[1,"mr-4"],["mat-icon-button","",3,"matMenuTriggerFor"],["selectMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"multi-select-actions"],["mat-icon-button","","aria-label","delete selected",3,"click"]],template:function(t,e){if(1&t&&(S.bc(0,"div",0),S.bc(1,"div",1),S.jc("click",(function(t){return e.deselectAll()})),S.bc(2,"button",2),S.bc(3,"mat-icon",3),S.Uc(4,"arrow_back"),S.ac(),S.bc(5,"span",4),S.Uc(6,"Back"),S.ac(),S.ac(),S.ac(),S.bc(7,"div",5),S.bc(8,"div"),S.bc(9,"span",6),S.bc(10,"span",7),S.Uc(11),S.ac(),S.bc(12,"span"),S.Uc(13,"selected"),S.ac(),S.ac(),S.bc(14,"button",8),S.bc(15,"mat-icon"),S.Uc(16,"arrow_drop_down"),S.ac(),S.ac(),S.bc(17,"mat-menu",null,9),S.bc(19,"button",10),S.jc("click",(function(t){return e.selectAll()})),S.Uc(20,"Select all"),S.ac(),S.bc(21,"button",10),S.jc("click",(function(t){return e.deselectAll()})),S.Uc(22,"Deselect all"),S.ac(),S.ac(),S.ac(),S.bc(23,"div",11),S.bc(24,"button",12),S.jc("click",(function(t){return e.deleteSelectedContacts()})),S.bc(25,"mat-icon"),S.Uc(26,"delete"),S.ac(),S.ac(),S.ac(),S.ac(),S.ac()),2&t){var c=S.Gc(18);S.Hb(11),S.Vc(e.selectedContacts.length),S.Hb(3),S.uc("matMenuTriggerFor",c)}},directives:[A.b,A.e,A.d,n.b,l.a,b.c,b.d,b.a],styles:["[_nghost-%COMP%]{flex:1;position:absolute;top:0;right:0;left:0;height:120px;z-index:99}"]}),Ct);function kt(t,e){1&t&&S.Wb(0,"selected-bar",17),2&t&&S.uc("@slideInTop",void 0)}var St,At,Ot=function(){return{delay:"50ms",scale:"0.2"}},Dt=function(t){return{value:"*",params:t}},Ut=function(){return{delay:"100ms",x:"-25px"}},Pt=function(){return{value:"*"}},jt=function(){return{delay:"300ms",scale:".2"}},Ht=[{path:"**",component:(St=function(){function t(e,c,a){_classCallCheck(this,t),this._contactsService=e,this._fuseSidebarService=c,this._matDialog=a,this.searchInput=new p.d(""),this._unsubscribeAll=new g.a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this._contactsService.onSelectedContactsChanged.pipe(Object(v.a)(this._unsubscribeAll)).subscribe((function(e){t.hasSelectedContacts=e.length>0})),this.searchInput.valueChanges.pipe(Object(v.a)(this._unsubscribeAll),Object(C.a)(300),Object(y.a)()).subscribe((function(e){t._contactsService.onSearchTextChanged.next(e)}))}},{key:"ngOnDestroy",value:function(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}},{key:"newContact",value:function(){var t=this;this.dialogRef=this._matDialog.open(M,{panelClass:"contact-form-dialog",data:{action:"new"}}),this.dialogRef.afterClosed().subscribe((function(e){e&&t._contactsService.updateContact(e.getRawValue())}))}},{key:"toggleSidebar",value:function(t){this._fuseSidebarService.getSidebar(t).toggleOpen()}}]),t}(),St.\u0275fac=function(t){return new(t||St)(S.Vb(F),S.Vb(N.a),S.Vb(_.b))},St.\u0275cmp=S.Pb({type:St,selectors:[["contacts"]],decls:28,vars:16,consts:[["id","contacts",1,"page-layout","simple","left-sidebar","inner-sidebar","inner-scroll"],["fxLayout","column","fxLayoutAlign","start","fxLayout.gt-xs","row","fxLayoutAlign.gt-xs","space-between center",1,"header","accent","p-16","p-sm-24"],["fxLayout","row","fxLayoutAlign","start center"],["mat-icon-button","","fxHide.gt-sm","",1,"sidebar-toggle","mr-12",3,"click"],["fxLayout","row","fxLayoutAlign","start center",1,"logo"],[1,"logo-icon","mr-16"],[1,"logo-text","h1"],["fxLayout","row","fxLayoutAlign","center center","fxFlex","",1,"ml-sm-32"],[1,"search-wrapper","mt-16","mt-sm-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center",1,"search"],["placeholder","Search for a contact",3,"formControl"],["class","accent-600",4,"ngIf"],[1,"content"],["name","contacts-main-sidebar","position","left","lockedOpen","gt-sm",1,"sidebar"],["fusePerfectScrollbar","",1,"content"],["fusePerfectScrollbar","",1,"center","p-24","pb-56","pr-sm-92"],["mat-fab","","id","add-contact-button","aria-label","add contact",1,"accent",3,"click"],[1,"accent-600"]],template:function(t,e){1&t&&(S.bc(0,"div",0),S.bc(1,"div",1),S.bc(2,"div",2),S.bc(3,"button",3),S.jc("click",(function(t){return e.toggleSidebar("contacts-main-sidebar")})),S.bc(4,"mat-icon"),S.Uc(5,"menu"),S.ac(),S.ac(),S.bc(6,"div",4),S.bc(7,"mat-icon",5),S.Uc(8,"account_box "),S.ac(),S.bc(9,"span",6),S.Uc(10," Contacts "),S.ac(),S.ac(),S.ac(),S.bc(11,"div",7),S.bc(12,"div",8),S.bc(13,"div",9),S.bc(14,"mat-icon"),S.Uc(15,"search"),S.ac(),S.Wb(16,"input",10),S.ac(),S.ac(),S.ac(),S.ac(),S.Sc(17,kt,1,1,"selected-bar",11),S.bc(18,"div",12),S.bc(19,"fuse-sidebar",13),S.bc(20,"div",14),S.Wb(21,"contacts-main-sidebar"),S.ac(),S.ac(),S.bc(22,"div",15),S.bc(23,"div",12),S.Wb(24,"contacts-contact-list"),S.ac(),S.ac(),S.ac(),S.ac(),S.bc(25,"button",16),S.jc("click",(function(t){return e.newContact()})),S.bc(26,"mat-icon"),S.Uc(27,"person_add"),S.ac(),S.ac()),2&t&&(S.Hb(7),S.uc("@animate",S.xc(7,Dt,S.wc(6,Ot))),S.Hb(2),S.uc("@animate",S.xc(10,Dt,S.wc(9,Ut))),S.Hb(7),S.uc("formControl",e.searchInput),S.Hb(1),S.uc("ngIf",e.hasSelectedContacts),S.Hb(4),S.uc("@animate",S.wc(12,Pt)),S.Hb(4),S.uc("@animate",S.xc(14,Dt,S.wc(13,jt))))},directives:[W.a,A.e,A.d,n.b,V.b,l.a,A.b,p.b,p.o,p.e,D.t,B.a,O.a,$,xt,wt],styles:["#contacts .header .search-wrapper{width:100%;max-width:480px;border-radius:28px;overflow:hidden;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}#contacts .header .search-wrapper .search{width:100%;height:48px;line-height:48px;padding:0 18px}#contacts .header .search-wrapper .search input{width:100%;height:48px;min-height:48px;max-height:48px;padding:0 16px;border:none;outline:none}#contacts .content{overflow:hidden}#contacts .content .sidebar:not(.locked-open){background:#fff}"],encapsulation:2,data:{animation:x.a}}),St),resolve:{contacts:F}}],It=((At=function t(){_classCallCheck(this,t)}).\u0275mod=S.Tb({type:At}),At.\u0275inj=S.Sb({factory:function(t){return new(t||At)},providers:[F],imports:[[a.k.forChild(Ht),n.c,i.b,r.c,s.d,l.b,u.c,b.b,o.s,d.k,f.b,m.a,h.a,h.i]]}),At)}}]);
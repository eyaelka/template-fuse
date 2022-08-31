(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"9aYX":function(e,t,n){"use strict";n.r(t),n.d(t,"AcademyModule",(function(){return R}));var c=n("tyNb"),o=n("bTqV"),s=n("kmnG"),r=n("NFeN"),a=n("qFsG"),i=n("d3UM"),u=n("5HBU"),g=n("XNiG"),d=n("1G5W"),l=n("PVWW"),p=n("fXoL"),h=n("2Vo4"),b=n("tk/3");let m=(()=>{class e{constructor(e){this._httpClient=e,this.onCategoriesChanged=new h.a({}),this.onCoursesChanged=new h.a({})}resolve(e,t){return new Promise((e,t)=>{Promise.all([this.getCategories(),this.getCourses()]).then(()=>{e()},t)})}getCategories(){return new Promise((e,t)=>{this._httpClient.get("api/academy-categories").subscribe(t=>{this.onCategoriesChanged.next(t),e(t)},t)})}getCourses(){return new Promise((e,t)=>{this._httpClient.get("api/academy-courses").subscribe(t=>{this.onCoursesChanged.next(t),e(t)},t)})}}return e.\u0275fac=function(t){return new(t||e)(p.fc(b.b))},e.\u0275prov=p.Rb({token:e,factory:e.\u0275fac}),e})();var C=n("XiUz"),f=n("3Pt+"),x=n("FKr1"),_=n("ofXK"),O=n("znSr");function y(e,t){if(1&e&&(p.bc(0,"mat-option",11),p.Uc(1),p.ac()),2&e){const e=t.$implicit;p.uc("value",e.value),p.Hb(1),p.Wc(" ",e.label," ")}}const P=function(){return{y:"100%"}},M=function(e){return{value:"*",params:e}};function v(e,t){if(1&e&&(p.bc(0,"div",16),p.bc(1,"div",17),p.bc(2,"div",18),p.bc(3,"div",19),p.Uc(4),p.ac(),p.bc(5,"div",20),p.bc(6,"mat-icon",21),p.Uc(7,"access_time"),p.ac(),p.bc(8,"div",22),p.Uc(9),p.ac(),p.ac(),p.ac(),p.bc(10,"div",23),p.bc(11,"div",24),p.Uc(12),p.ac(),p.bc(13,"div",25),p.Uc(14),p.ac(),p.ac(),p.bc(15,"div",26),p.bc(16,"button",27),p.Uc(17," START "),p.ac(),p.ac(),p.ac(),p.ac()),2&e){const e=t.$implicit;p.uc("ngClass",e.category)("@animate",p.xc(9,M,p.wc(8,P))),p.Hb(2),p.uc("ngClass",e.category+"-bg"),p.Hb(2),p.Wc(" ",e.category," "),p.Hb(5),p.Wc("",e.length," min"),p.Hb(3),p.Vc(e.title),p.Hb(2),p.Wc("Updated ",e.updated,""),p.Hb(2),p.uc("routerLink","/apps/academy/courses/"+e.id+"/"+e.slug)}}function w(e,t){1&e&&(p.bc(0,"div",28),p.Uc(1," No courses found! "),p.ac())}const S=function(){return{delay:"100ms",y:"25px"}},H=function(){return{value:"50"}};let L=(()=>{class e{constructor(e){this._academyCoursesService=e,this.currentCategory="all",this.searchTerm="",this._unsubscribeAll=new g.a}ngOnInit(){this._academyCoursesService.onCategoriesChanged.pipe(Object(d.a)(this._unsubscribeAll)).subscribe(e=>{this.categories=e}),this._academyCoursesService.onCoursesChanged.pipe(Object(d.a)(this._unsubscribeAll)).subscribe(e=>{this.filteredCourses=this.coursesFilteredByCategory=this.courses=e})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}filterCoursesByCategory(){"all"===this.currentCategory?(this.coursesFilteredByCategory=this.courses,this.filteredCourses=this.courses):(this.coursesFilteredByCategory=this.courses.filter(e=>e.category===this.currentCategory),this.filteredCourses=[...this.coursesFilteredByCategory]),this.filterCoursesByTerm()}filterCoursesByTerm(){const e=this.searchTerm.toLowerCase();this.filteredCourses=""===e?this.coursesFilteredByCategory:this.coursesFilteredByCategory.filter(t=>t.title.toLowerCase().includes(e))}}return e.\u0275fac=function(t){return new(t||e)(p.Vb(m))},e.\u0275cmp=p.Pb({type:e,selectors:[["academy-courses"]],decls:26,vars:16,consts:[["id","academy-courses",1,"page-layout","simple"],["fxLayout","column","fxLayoutAlign","center center",1,"header","accent","p-16","p-sm-24"],[1,"hero-text"],[1,"hero-icon"],[1,"content","p-24"],["fxLayout","column","fxLayoutAlign","center"],["fxLayout","column","fxLayoutAlign","center center","fxLayout.gt-xs","row","fxLayoutAlign.gt-xs","space-between center",1,"filters"],["appearance","outline","floatLabel","always",1,"course-search"],["matInput","","placeholder","Enter a keyword...",3,"ngModel","ngModelChange","input"],["appearance","outline",1,"category-selector"],[3,"ngModel","ngModelChange","selectionChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","row wrap","fxLayoutAlign","center",1,"courses"],["class","course","fxFlex","100","fxFlex.gt-xs","50","fxFlex.gt-sm","33",3,"ngClass",4,"ngFor","ngForOf"],["class","no-courses",4,"ngIf"],["fxFlex","100","fxFlex.gt-xs","50","fxFlex.gt-sm","33",1,"course",3,"ngClass"],["fxLayout","column","fxFlex","1 1 auto",1,"course-content"],["fxLayout","row","fxLayoutAlign","center center",1,"header",3,"ngClass"],["fxFlex","",1,"category"],["fxLayout","row","fxLayoutAlign","center center",1,"length"],[1,"length-icon","s-20"],[1,"min"],["fxLayout","column","fxLayoutAlign","center center","fxFlex","1 1 auto",1,"content"],[1,"h1"],[1,"updated"],["fxLayout","row","fxLayoutAlign","center center",1,"footer"],["mat-button","","color","accent",3,"routerLink"],[1,"no-courses"]],template:function(e,t){1&e&&(p.bc(0,"div",0),p.bc(1,"div",1),p.bc(2,"div",2),p.bc(3,"mat-icon",3),p.Uc(4,"school"),p.ac(),p.bc(5,"h1"),p.Uc(6," WELCOME TO ACADEMY "),p.ac(),p.bc(7,"h3"),p.Uc(8," Our courses will step you through the process of building a small application, or adding a new feature to an existing application. "),p.ac(),p.ac(),p.ac(),p.bc(9,"div",4),p.bc(10,"div",5),p.bc(11,"div",6),p.bc(12,"mat-form-field",7),p.bc(13,"mat-label"),p.Uc(14,"Search for a course"),p.ac(),p.bc(15,"input",8),p.jc("ngModelChange",(function(e){return t.searchTerm=e}))("input",(function(e){return t.filterCoursesByTerm()})),p.ac(),p.ac(),p.bc(16,"mat-form-field",9),p.bc(17,"mat-label"),p.Uc(18,"Category"),p.ac(),p.bc(19,"mat-select",10),p.jc("ngModelChange",(function(e){return t.currentCategory=e}))("selectionChange",(function(e){return t.filterCoursesByCategory()})),p.bc(20,"mat-option",11),p.Uc(21," All "),p.ac(),p.Sc(22,y,2,2,"mat-option",12),p.ac(),p.ac(),p.ac(),p.bc(23,"div",13),p.Sc(24,v,18,11,"div",14),p.Sc(25,w,2,0,"div",15),p.ac(),p.ac(),p.ac(),p.ac()),2&e&&(p.Hb(5),p.uc("@animate",p.xc(10,M,p.wc(9,S))),p.Hb(2),p.uc("@animate",p.xc(13,M,p.wc(12,S))),p.Hb(8),p.uc("ngModel",t.searchTerm),p.Hb(4),p.uc("ngModel",t.currentCategory),p.Hb(1),p.uc("value","all"),p.Hb(2),p.uc("ngForOf",t.categories),p.Hb(1),p.uc("@animateStagger",p.wc(15,H)),p.Hb(1),p.uc("ngForOf",t.filteredCourses),p.Hb(1),p.uc("ngIf",0===t.filteredCourses.length))},directives:[C.e,C.d,r.a,s.b,s.f,a.b,f.b,f.o,f.r,i.a,x.n,_.s,_.t,C.b,_.q,O.a,o.b,c.h],styles:["#academy-courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{position:relative;flex:1 0 auto;height:280px;max-height:280px;text-align:center;overflow:hidden}@media screen and (max-width:599px){#academy-courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{height:240px;padding:16px}}#academy-courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   .hero-icon[_ngcontent-%COMP%]{position:absolute;top:-64px;left:0;opacity:.04;font-size:512px!important;width:512px!important;height:512px!important}#academy-courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px;font-weight:300;letter-spacing:.01em;text-align:center;margin-top:0;margin-bottom:16px}@media screen and (max-width:599px){#academy-courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px}}#academy-courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{max-width:480px;text-align:center;font-weight:300;letter-spacing:.03em;margin:0}@media screen and (max-width:599px){#academy-courses[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px}}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category-selector[_ngcontent-%COMP%]{min-width:320px}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{width:100%;max-width:1040px;margin:24px auto;padding:0 20px}@media screen and (max-width:599px){#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{margin:0 auto}}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .course-search[_ngcontent-%COMP%]{width:320px}@media screen and (min-width:600px){#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .course-search[_ngcontent-%COMP%]{margin-right:16px}}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]{width:100%;max-width:1040px;margin:0 auto}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .no-courses[_ngcontent-%COMP%]{font-size:24px;margin:24px 0;text-align:center}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{padding:16px}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]:hover   .course-content[_ngcontent-%COMP%]{border:none;box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]{min-height:240px;border-radius:4px;overflow:hidden;transition:box-shadow .2s ease-in-out;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:16px 24px;height:64px!important;min-height:64px!important;max-height:64px!important}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .header.web-bg[_ngcontent-%COMP%]{background:#2196f3}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .header.android-bg[_ngcontent-%COMP%]{background:#4caf50}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .header.firebase-bg[_ngcontent-%COMP%]{background:#ff8f00}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .header.cloud-bg[_ngcontent-%COMP%]{background:#607d8b}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{text-transform:capitalize;text-align:left;font-weight:600}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .length[_ngcontent-%COMP%]   .length-icon[_ngcontent-%COMP%]{margin-right:8px}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .length[_ngcontent-%COMP%]   .min[_ngcontent-%COMP%]{font-size:16px}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:24px}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:16px;text-align:center}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .updated[_ngcontent-%COMP%]{font-size:13px;font-weight:600;margin-top:4px}#academy-courses[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .courses[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{padding:16px;height:48px!important;min-height:48px!important;max-height:48px!important;box-shadow:inset 0 1px 0 0 rgba(0,0,0,.12)}"],data:{animation:l.a}}),e})();var k=n("EwFO");let F=(()=>{class e{constructor(e){this._httpClient=e,this.onCourseChanged=new h.a({})}resolve(e,t){return new Promise((t,n)=>{Promise.all([this.getCourse(e.params.courseId,e.params.courseSlug)]).then(()=>{t()},n)})}getCourse(e,t){return new Promise((n,c)=>{this._httpClient.get("api/academy-course/"+e+"/"+t).subscribe(e=>{this.onCourseChanged.next(e),n(e)},c)})}}return e.\u0275fac=function(t){return new(t||e)(p.fc(b.b))},e.\u0275prov=p.Rb({token:e,factory:e.\u0275fac}),e})();var A=n("HX77"),U=n("B9zo"),z=n("fE3o");const D=function(e,t,n,c){return{current:e,completed:t,last:n,first:c}};function T(e,t){if(1&e){const e=p.cc();p.bc(0,"div",15),p.jc("click",(function(n){p.Kc(e);const c=t.index;return p.nc().gotoStep(c)})),p.bc(1,"div",16),p.bc(2,"span"),p.Uc(3),p.ac(),p.ac(),p.bc(4,"div",17),p.Uc(5),p.ac(),p.ac()}if(2&e){const e=t.$implicit,n=t.index,c=t.last,o=t.first,s=p.nc();p.uc("ngClass",p.Ac(3,D,s.currentStep===n,s.currentStep>n,c,o)),p.Hb(3),p.Vc(n+1),p.Hb(2),p.Vc(e.title)}}function V(e,t){if(1&e&&(p.bc(0,"div",19),p.Wb(1,"div",20),p.ac()),2&e){const e=p.nc().$implicit,t=p.nc();p.uc("@slideIn",t.animationDirection),p.Hb(1),p.uc("innerHTML",e.content,p.Lc)}}function j(e,t){if(1&e&&(p.Zb(0),p.Sc(1,V,2,2,"div",18),p.Yb()),2&e){const e=t.index,n=p.nc();p.Hb(1),p.uc("ngIf",n.currentStep===e)}}let B=(()=>{class e{constructor(e,t,n){this._academyCourseService=e,this._changeDetectorRef=t,this._fuseSidebarService=n,this.animationDirection="none",this.currentStep=0,this._unsubscribeAll=new g.a}ngOnInit(){this._academyCourseService.onCourseChanged.pipe(Object(d.a)(this._unsubscribeAll)).subscribe(e=>{this.course=e})}ngAfterViewInit(){this.courseStepContent=this.fuseScrollbarDirectives.find(e=>"course-step-content"===e.elementRef.nativeElement.id)}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}gotoStep(e){this.animationDirection=this.currentStep<e?"left":"right",this._changeDetectorRef.detectChanges(),this.currentStep=e}gotoNextStep(){this.currentStep!==this.course.totalSteps-1&&(this.animationDirection="left",this._changeDetectorRef.detectChanges(),this.currentStep++)}gotoPreviousStep(){0!==this.currentStep&&(this.animationDirection="right",this._changeDetectorRef.detectChanges(),this.currentStep--)}toggleSidebar(e){this._fuseSidebarService.getSidebar(e).toggleOpen()}}return e.\u0275fac=function(t){return new(t||e)(p.Vb(F),p.Vb(p.h),p.Vb(A.a))},e.\u0275cmp=p.Pb({type:e,selectors:[["academy-course"]],viewQuery:function(e,t){var n;1&e&&p.Zc(k.a,!0),2&e&&p.Fc(n=p.kc())&&(t.fuseScrollbarDirectives=n)},decls:28,vars:10,consts:[["id","academy-course",1,"page-layout","simple","left-sidebar","inner-scroll"],["name","academy-course-left-sidebar-1","position","left","lockedOpen","gt-md",1,"sidebar"],["fusePerfectScrollbar","",1,"content"],[1,"steps"],["class","step",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"center"],["fxLayout","row","fxLayoutAlign","start center",1,"header","accent","p-24"],["mat-icon-button","","fxHide.gt-md","",1,"sidebar-toggle","mr-16",3,"click"],["mat-icon-button","",1,"mr-16",3,"routerLink"],["id","course-content",1,"content"],[4,"ngFor","ngForOf"],[1,"step-navigation"],["mat-fab","",1,"previous","mat-accent","fuse-white-fg",3,"disabled","fxHide","click"],["mat-fab","",1,"next","mat-accent","fuse-white-fg",3,"disabled","fxHide","click"],["mat-fab","","routerLink","/apps/academy/courses",1,"done","green-600",3,"disabled","fxShow"],[1,"step",3,"ngClass","click"],[1,"index"],[1,"title"],["class","course-step","fusePerfectScrollbar","",4,"ngIf"],["fusePerfectScrollbar","",1,"course-step"],["id","course-step-content",1,"course-step-content",3,"innerHTML"]],template:function(e,t){1&e&&(p.bc(0,"div",0),p.bc(1,"fuse-sidebar",1),p.bc(2,"div",2),p.bc(3,"div",3),p.Sc(4,T,6,8,"div",4),p.ac(),p.ac(),p.ac(),p.bc(5,"div",5),p.bc(6,"div",6),p.bc(7,"button",7),p.jc("click",(function(e){return t.toggleSidebar("academy-course-left-sidebar-1")})),p.bc(8,"mat-icon"),p.Uc(9,"menu"),p.ac(),p.ac(),p.bc(10,"button",8),p.bc(11,"mat-icon"),p.Uc(12,"arrow_back"),p.ac(),p.ac(),p.bc(13,"div"),p.bc(14,"h2"),p.Uc(15),p.ac(),p.ac(),p.ac(),p.bc(16,"div",9),p.Sc(17,j,2,1,"ng-container",10),p.ac(),p.bc(18,"div",11),p.bc(19,"button",12),p.jc("click",(function(e){return t.gotoPreviousStep()})),p.bc(20,"mat-icon"),p.Uc(21,"chevron_left"),p.ac(),p.ac(),p.bc(22,"button",13),p.jc("click",(function(e){return t.gotoNextStep()})),p.bc(23,"mat-icon"),p.Uc(24,"chevron_right"),p.ac(),p.ac(),p.bc(25,"button",14),p.bc(26,"mat-icon"),p.Uc(27,"check"),p.ac(),p.ac(),p.ac(),p.ac(),p.ac()),2&e&&(p.Hb(4),p.uc("ngForOf",t.course.steps),p.Hb(6),p.uc("routerLink","/apps/academy/courses"),p.Hb(5),p.Vc(t.course.title),p.Hb(2),p.uc("ngForOf",t.course.steps),p.Hb(2),p.uc("disabled",0===t.currentStep)("fxHide",0===t.currentStep),p.Hb(3),p.uc("disabled",t.currentStep===t.course.totalSteps-1)("fxHide",t.currentStep===t.course.totalSteps-1),p.Hb(3),p.uc("disabled",t.currentStep!==t.course.totalSteps-1)("fxShow",t.currentStep===t.course.totalSteps-1))},directives:[U.a,z.a,k.a,_.s,C.e,C.d,o.b,O.b,r.a,c.h,_.q,O.a,_.t],styles:['#academy-course .sidebar .steps{padding:16px 0}#academy-course .sidebar .steps .step{position:relative;display:flex;justify-content:flex-start;align-items:center;padding:16px;cursor:pointer}#academy-course .sidebar .steps .step.current .index span{border:2px solid}#academy-course .sidebar .steps .step.current .title{font-weight:700}#academy-course .sidebar .steps .step.completed .index span{border:2px solid}#academy-course .sidebar .steps .step.first .index:before,#academy-course .sidebar .steps .step.last .index:after{display:none}#academy-course .sidebar .steps .step .index{display:flex;margin-right:12px}#academy-course .sidebar .steps .step .index:after,#academy-course .sidebar .steps .step .index:before{position:absolute;display:block;content:" ";border-left:1px solid;width:1px;height:50%;left:29px;z-index:8}#academy-course .sidebar .steps .step .index:before{top:0}#academy-course .sidebar .steps .step .index:after{bottom:0}#academy-course .sidebar .steps .step .index span{display:flex;align-items:center;justify-content:center;position:relative;width:28px;min-width:28px;max-width:28px;height:28px;border-radius:100%;border:2px solid;font-weight:700;font-size:12px;z-index:10}#academy-course .sidebar .steps .step .title{display:flex}#academy-course .center{position:relative;overflow:hidden}#academy-course .center .header{height:72px;min-height:72px;max-height:72px}#academy-course .center .content{position:relative;display:flex}#academy-course .center .content .course-step{position:absolute;top:0;right:0;bottom:0;left:0;padding:48px;overflow:auto;-webkit-overflow-scrolling:touch}#academy-course .center .content .course-step.ng-animating{overflow:hidden}@media (max-width:720px){#academy-course .center .content .course-step{padding:0 0 120px}}#academy-course .center .content .course-step .course-step-content{padding:24px;max-width:720px;margin:0 auto;width:100%;border-radius:8px;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}#academy-course .center .step-navigation{position:absolute;display:flex;align-items:center;justify-content:space-between;bottom:32px;max-width:944px;padding:0 24px;width:100%;left:50%;transform:translateX(-50%)}#academy-course .center .step-navigation .previous{margin-right:auto}#academy-course .center .step-navigation .done,#academy-course .center .step-navigation .next{margin-left:auto}'],encapsulation:2,data:{animation:l.a}}),e})();var I=n("LPQX");const N=[{path:"courses",component:L,resolve:{academy:m}},{path:"courses/:courseId/:courseSlug",component:B,resolve:{academy:F}},{path:"**",redirectTo:"courses"}];let R=(()=>{class e{}return e.\u0275mod=p.Tb({type:e}),e.\u0275inj=p.Sb({factory:function(t){return new(t||e)},providers:[m,F],imports:[[c.k.forChild(N),o.c,s.d,r.b,a.c,i.b,u.a,I.i]]}),e})()},B9zo:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("XNiG"),o=n("1G5W"),s=n("fXoL"),r=n("h2q7");let a=(()=>{class e{constructor(e,t,n){this._elementRef=e,this._fuseMediaMatchService=t,this._renderer=n,this._unsubscribeAll=new c.a}ngOnInit(){this._parent=this._renderer.parentNode(this._elementRef.nativeElement),this._parent&&(this._grandParent=this._renderer.parentNode(this._parent),this._fuseMediaMatchService.onMediaChange.pipe(Object(o.a)(this._unsubscribeAll)).subscribe(e=>{"xs"===e?this._removeClass():this._addClass()}))}ngOnDestroy(){this._parent&&(this._removeClass(),this._unsubscribeAll.next(),this._unsubscribeAll.complete())}_addClass(){this._renderer.addClass(this._grandParent,"inner-scroll")}_removeClass(){this._renderer.removeClass(this._grandParent,"inner-scroll")}}return e.\u0275fac=function(t){return new(t||e)(s.Vb(s.l),s.Vb(r.a),s.Vb(s.I))},e.\u0275dir=s.Qb({type:e,selectors:[["",8,"inner-scroll"]]}),e})()}}]);
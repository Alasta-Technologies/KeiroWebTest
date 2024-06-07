"use strict";(self.webpackChunkalasta_ui=self.webpackChunkalasta_ui||[]).push([[377],{4954:(b,E,d)=>{d.d(E,{m:()=>D});var t=d(3905),p=d(4004),y=d(262),m=d(2340),g=d(2027),f=d(1571),h=d(529);let D=(()=>{class e{constructor(l){this.http=l,this.serverUrl=m.N.apiServer,this.serverV2Url=m.N.v2apiServer}findReviewWindows(){return this.http.get(this.serverUrl+"window").pipe((0,p.U)(l=>({reviewWindows:l.windows})),(0,y.K)(l=>(console.error(l.error),[])))}getProgressBarStats(l,a){return(0,t.z)(this.http.put(this.serverV2Url+"statistics/progress-bar/"+l,a).pipe((0,p.U)(v=>({...v,reviewCycle:e.formatDates(v.reviewCycle)}))))}getTalentMapStats(l,a){return(0,t.z)(this.http.put(this.serverV2Url+"statistics/talent-map/"+l,a).pipe(v=>v))}static formatDates(l){if(l)return{...l,...l.startDate?{startDate:new g.p({ISODateString:l.startDate})}:{},...l.endDate?{endDate:new g.p({ISODateString:l.endDate})}:{}}}getAllReviewCycles(){return(0,t.z)(this.http.get(this.serverV2Url+"review-cycle").pipe((0,p.U)(l=>({reviewCycles:l.map(a=>e.formatDates(a))}))))}getCurrentReviewCycle(){return(0,t.z)(this.http.get(this.serverV2Url+"review-cycle/current").pipe((0,p.U)(l=>({reviewCycle:e.formatDates(l)}))))}createReviewCycle(l){return(0,t.z)(this.http.post(this.serverV2Url+"review-cycle",{...l.name?{name:l.name}:{},...l.startDate?{startDate:l.startDate}:{},...l.endDate?{endDate:l.endDate}:{}}).pipe((0,p.U)(a=>e.formatDates(a))))}editReviewCycle(l){return(0,t.z)(this.http.put(this.serverV2Url+"review-cycle/"+l._id,{...l.name?{name:l.name}:{},...l.startDate?{startDate:l.startDate}:{},...l.endDate?{endDate:l.endDate}:{}}).pipe((0,p.U)(a=>e.formatDates(a))))}deleteReviewCycle(l){return(0,t.z)(this.http.delete(this.serverV2Url+"review-cycle/"+l).pipe((0,p.U)(a=>a)))}static#e=this.\u0275fac=function(a){return new(a||e)(f.LFG(h.eN))};static#t=this.\u0275prov=f.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},6441:(b,E,d)=>{d.r(E),d.d(E,{ReviewsModule:()=>V});var t=d(6895),p=d(433),y=d(2714),m=d(4358),g=d(4175),f=d(3035),h=d(1740),D=d(9014),e=d(1571);function R(s,C){1&s&&(e.TgZ(0,"span"),e._uU(1,"Add "),e.qZA())}function l(s,C){1&s&&(e.TgZ(0,"span"),e._uU(1,"Edit "),e.qZA())}function a(s,C){if(1&s&&(e.TgZ(0,"div",13)(1,"form",14)(2,"div",15)(3,"div",16)(4,"h6",17),e._uU(5,"Review cycle name"),e.qZA(),e.TgZ(6,"div",18),e._UZ(7,"input",19),e.qZA()(),e.TgZ(8,"div",16)(9,"h6",17),e._uU(10,"Cycle Start Date"),e.qZA(),e.TgZ(11,"div",18),e._UZ(12,"p-calendar",20),e.qZA()(),e.TgZ(13,"div",16)(14,"h6",17),e._uU(15,"Cycle End Date"),e.qZA(),e.TgZ(16,"div",18),e._UZ(17,"p-calendar",21),e.qZA()()()()()),2&s){const n=e.oxw();e.xp6(1),e.Q6J("formGroup",n.addEditForm),e.xp6(11),e.Q6J("showIcon",!0)("minDate",n.today)("disabled",n.hasStarted),e.xp6(5),e.Q6J("showIcon",!0)("minDate",n.today)}}function v(s,C){if(1&s){const n=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return i.processing=!0,e.KtG(i.onDeleteClick.emit())}),e._UZ(1,"i",23),e._uU(2," Delete "),e.qZA()}}function o(s,C){1&s&&(e.TgZ(0,"span"),e._uU(1,"Add new cycle"),e.qZA())}function u(s,C){1&s&&(e.TgZ(0,"span"),e._uU(1,"Update cycle details"),e.qZA())}let A=(()=>{class s{constructor(n){this.fb=n,this.addingReviewCycle=!0,this.hasStarted=!1,this.canBeDeleted=!1,this.processing=!1,this.onSumbit=new e.vpe,this.onCloseModal=new e.vpe,this.onDeleteClick=new e.vpe,this.today=new Date}ngOnInit(){this.addEditForm=this.fb.group({name:[this.existing?.name,p.kI.required],startDate:[this.existing?.startDate.date,p.kI.required],endDate:[this.existing?.endDate.date,p.kI.required]}),this.existing?._id&&(this.addingReviewCycle=!1,this.hasStarted=!!this.existing.hasStarted&&this.existing.hasStarted,this.canBeDeleted=!this.hasStarted)}getFormValue(){let n=this.addEditForm?.value.name,r=this.addEditForm?.value.startDate,i=this.addEditForm?.value.endDate;return i.setHours(23),i.setMinutes(59),{...this.existing?._id?{_id:this.existing?._id}:{},...this.existing?.name===n?{}:{name:n},...this.existing?.startDate?.date?.valueOf()===r?.valueOf()?{}:{startDate:r},...this.existing?.endDate?.date?.valueOf()===i?.valueOf()?{}:{endDate:i}}}clearTalentFromForm(){this.addEditForm?.get("name")?.setValue(null),this.addEditForm?.get("name")?.markAsPristine(),this.addEditForm?.get("startDate")?.setValue(null),this.addEditForm?.get("startDate")?.markAsPristine(),this.addEditForm?.get("endDate")?.setValue(null),this.addEditForm?.get("endDate")?.markAsPristine()}static#e=this.\u0275fac=function(r){return new(r||s)(e.Y36(p.QS))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["reviews-add-edit-review-cycle-modal"]],inputs:{existing:"existing",processing:"processing"},outputs:{onSumbit:"onSumbit",onCloseModal:"onCloseModal",onDeleteClick:"onDeleteClick"},decls:20,vars:7,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],[4,"ngIf"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],["aria-hidden","true"],["class","modal-body",4,"ngIf"],[1,"modal-footer"],[1,"text-right"],["class","btn btn-danger",3,"click",4,"ngIf"],[1,"btn","btn-primary","ml-1",3,"click"],["aria-hidden","true",1,"fa","fa-times"],[1,"btn","btn-secondary","ml-1",3,"disabled","click"],["aria-hidden","true",1,"fa","fa-edit"],[1,"modal-body"],[3,"formGroup"],[1,"form-row"],[1,"col-12"],[1,"mb-0"],[1,"p-fluid"],["type","text","pInputText","","formControlName","name"],["formControlName","startDate","dateFormat","dd M yy","icon","fas fa-calendar-alt",3,"showIcon","minDate","disabled"],["formControlName","endDate","dateFormat","dd M yy","icon","fas fa-calendar-alt",3,"showIcon","minDate"],[1,"btn","btn-danger",3,"click"],["aria-hidden","true",1,"fa","fa-trash-alt"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"h4",1)(2,"span"),e.YNc(3,R,2,0,"span",2),e.YNc(4,l,2,0,"span",2),e._uU(5," Review Cycle "),e.qZA()(),e.TgZ(6,"button",3),e.NdJ("click",function(w){return i.onCloseModal.emit(w)}),e.TgZ(7,"span",4),e._uU(8,"\xd7"),e.qZA()()(),e.YNc(9,a,18,6,"div",5),e.TgZ(10,"div",6)(11,"div",7),e.YNc(12,v,3,0,"button",8),e.TgZ(13,"button",9),e.NdJ("click",function(w){return i.clearTalentFromForm(),i.onCloseModal.emit(w)}),e._UZ(14,"i",10),e._uU(15," Cancel "),e.qZA(),e.TgZ(16,"button",11),e.NdJ("click",function(){return i.processing=!0,i.onSumbit.emit(i.getFormValue())}),e._UZ(17,"i",12),e.YNc(18,o,2,0,"span",2),e.YNc(19,u,2,0,"span",2),e.qZA()()()),2&r&&(e.xp6(3),e.Q6J("ngIf",i.addingReviewCycle),e.xp6(1),e.Q6J("ngIf",!i.addingReviewCycle),e.xp6(5),e.Q6J("ngIf",i.addEditForm),e.xp6(3),e.Q6J("ngIf",i.canBeDeleted),e.xp6(4),e.Q6J("disabled",(null==i.addEditForm?null:i.addEditForm.invalid)||(null==i.addEditForm?null:i.addEditForm.pristine)),e.xp6(2),e.Q6J("ngIf",i.addingReviewCycle),e.xp6(1),e.Q6J("ngIf",!i.addingReviewCycle))},dependencies:[t.O5,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u,h.o,f.f]})}return s})();var M=d(727),S=d(8372),T=d(2027),U=d(4954),O=d(2733),P=d(805),F=d(171);function B(s,C){if(1&s&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"app-shared-review-cycle-progress",12),e.qZA()()),2&s){const n=e.oxw();e.xp6(2),e.Q6J("reviewCycle",n.progressBarStats.reviewCycle)("totalPossibleReviews",n.progressBarStats.totalPossibleReviews)("completedReviews",n.progressBarStats.completedReviews)}}function k(s,C){if(1&s){const n=e.EpF();e.TgZ(0,"div",13)(1,"button",14),e.NdJ("click",function(){e.CHM(n);const i=e.oxw(),c=e.MAs(23);return i.targetReviewCycle=void 0,e.KtG(i.modalsController.openModal(c))}),e._UZ(2,"i",15),e._uU(3," Add new Review Cycle "),e.qZA()()}}function N(s,C){1&s&&(e.TgZ(0,"div",16)(1,"h6"),e._uU(2,"More"),e.qZA()())}function J(s,C){1&s&&(e.TgZ(0,"span",18),e._uU(1,"Current Cycle"),e.qZA())}function Y(s,C){if(1&s){const n=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(n);const i=e.oxw(2).$implicit,c=e.oxw(),w=e.MAs(23);return c.targetReviewCycle=i,e.KtG(c.modalsController.openModal(w))}),e._UZ(1,"i",21),e._uU(2," Edit "),e.qZA()}}function K(s,C){if(1&s&&(e.TgZ(0,"div",16),e.YNc(1,Y,3,0,"button",19),e.qZA()),2&s){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",n.canBeEdited)}}function L(s,C){if(1&s&&(e.TgZ(0,"div",4)(1,"div",7)(2,"p"),e._uU(3),e.YNc(4,J,2,0,"span",17),e.qZA()(),e.TgZ(5,"div",8)(6,"p"),e._uU(7),e.qZA()(),e.TgZ(8,"div",8)(9,"p"),e._uU(10),e.qZA()(),e.YNc(11,K,2,1,"div",9),e.qZA()),2&s){const n=C.$implicit,r=e.oxw();e.xp6(3),e.hij(" ",n.name||"None on file"," "),e.xp6(1),e.Q6J("ngIf",n.hasStarted&&!n.hasEnded),e.xp6(3),e.AsE("",n.startDate||"None on file"," - ",n.startDate.displayTime(),""),e.xp6(3),e.AsE("",n.endDate||"None on file"," - ",n.endDate.displayTime(),""),e.xp6(1),e.Q6J("ngIf",r.canAddEditReviewCycles)}}function Q(s,C){if(1&s){const n=e.EpF();e.TgZ(0,"reviews-add-edit-review-cycle-modal",22),e.NdJ("onSumbit",function(i){e.CHM(n);const c=e.oxw();return e.KtG(c.handleAddEditSubmission(i))})("onCloseModal",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.modalsController.closeUpperModal())})("onDeleteClick",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.handleDelete(null==i.targetReviewCycle?null:i.targetReviewCycle._id))}),e.qZA()}if(2&s){const n=e.oxw();e.Q6J("existing",n.targetReviewCycle)("processing",n.processingModalRequest)}}var _=(()=>{return(s=_||(_={}))[s.CREATE=0]="CREATE",s[s.EDIT=1]="EDIT",s[s.DELETE=2]="DELETE",_;var s})();let I=(()=>{class s{constructor(n,r,i,c,w){this.reviewCycleServiceApi=n,this.modalsController=r,this.messageService=i,this.router=c,this.authStateService=w,this.subscriptions=new M.w0,this.today=new T.p,this.aMonthAgo=new T.p,this.canAddEditReviewCycles=!1,this.allReviewCycles=[],this.processingModalRequest=!1,this.searchInputControl=new p.p4,this.subscriptions.add(this.searchInputControl.valueChanges.pipe((0,S.b)(350)).subscribe(x=>{this.searchInputControl.valid&&(console.log("New v2 calls"),this.fetchReviewCycles())})),this.subscriptions.add(this.authStateService.authState.subscribe(x=>{let Z;x.identity&&(Z=x.identity),this.canAddEditReviewCycles="SuperAdmin"==Z?.role||"Admin"==Z?.role})),this.progressBarStats={completedReviews:0,totalPossibleReviews:0}}ngOnInit(){this.today=new T.p,this.aMonthAgo=new T.p,this.aMonthAgo.date.setMonth(this.aMonthAgo.date.getMonth()-1),this.fetchCurrentReviewCycle(),this.fetchReviewCycles()}ngOnDestroy(){this.subscriptions.unsubscribe()}fetchCurrentReviewCycle(){this.reviewCycleServiceApi.getCurrentReviewCycle().then(n=>{this.currentReviewCycle!==n.reviewCycle&&(this.currentReviewCycle=n.reviewCycle?n.reviewCycle:void 0,this.fetchReviewCycleStats(this.currentReviewCycle?._id?this.currentReviewCycle?._id:""))}).catch(n=>{console.error(n)})}fetchReviewCycleStats(n){this.reviewCycleServiceApi.getProgressBarStats(n,{}).then(r=>{r.reviewCycle?._id.toString()===this.currentReviewCycle?._id.toString()&&(this.progressBarStats.reviewCycle=r.reviewCycle,this.progressBarStats.completedReviews=r.completedReviews,this.progressBarStats.totalPossibleReviews=r.totalPossibleReviews)}).catch(r=>{console.error(r)})}fetchReviewCycles(){this.reviewCycleServiceApi.getAllReviewCycles().then(n=>{n.reviewCycles.length&&(this.allReviewCycles=[]);for(let r of n.reviewCycles){if(null===r._id)continue;const i={_id:r._id,name:r.name,org:r.org,startDate:r.startDate,endDate:r.endDate};i.hasStarted=i.startDate.date.valueOf()<this.today.date.valueOf(),i.hasEnded=i.endDate.date.valueOf()<this.today.date.valueOf(),i.canBeEdited=!1,i.hasStarted?i.endDate.date.valueOf()>this.aMonthAgo.date.valueOf()&&(i.canBeEdited=!0):i.canBeEdited=!0,this.allReviewCycles.push(i)}this.allReviewCycles=this.allReviewCycles.sort((r,i)=>r.startDate.date.valueOf()<i.endDate.date.valueOf()?1:-1)}).catch(n=>{console.error(n)})}handleAddEditSubmission(n){let r,i=void 0!==this.targetReviewCycle?._id?_.EDIT:_.CREATE,c=this.currentReviewCycle?._id===n?._id;switch(i){case _.EDIT:r=this.reviewCycleServiceApi.editReviewCycle(n);break;case _.CREATE:r=this.reviewCycleServiceApi.createReviewCycle(n)}this.processingModalRequest=!0,r.then(w=>this.handleSuccessAddEdit(w,i,c)).catch(w=>this.handleErrorAddEdit(w,i)).finally(()=>{this.processingModalRequest=!1})}handleDelete(n){this.processingModalRequest=!0,this.reviewCycleServiceApi.deleteReviewCycle(n).then(r=>this.handleSuccessAddEdit(r,_.DELETE,!1)).catch(r=>this.handleErrorAddEdit(r,_.DELETE)).finally(()=>{this.processingModalRequest=!1})}handleSuccessAddEdit(n,r,i){let c;switch(r){case _.EDIT:c="Edited Review Cycle";break;case _.CREATE:c="Created new Review Cycle";break;case _.DELETE:c="Deleted Review Cycle"}this.messageService.add({severity:"success",summary:c,detail:"With title "+n.name,life:3e3}),i&&this.fetchCurrentReviewCycle(),this.fetchReviewCycles(),this.modalsController.closeAllModals()}handleErrorAddEdit(n,r){let i,c;switch(r){case _.EDIT:i="Could not edit";break;case _.CREATE:i="Could not create";break;case _.DELETE:i="Could not delete"}switch(n.message?.keiroError){case"KE060400":c="Review cycle does not exist";break;case"KE060401":c="The start date must be in the future";break;case"KE060402":c="The start date must be before the end date";break;case"KE060403":c="The dates cannot overlap with other review cycles";break;case"KE060404":c="The review cycle has already ended more than a month ago, it can no longer be modified";break;case"KE060405":c="The start date can't be modified because this review cycle has already begun";break;case"KE060406":c="The end date must be in the future";break;case"KE060407":c="The review cycle has already begun, it can no longer be deleted";break;default:c="Please retry",this.modalsController.closeAllModals()}this.messageService.add({severity:"error",summary:i,detail:c,life:4e3})}static#e=this.\u0275fac=function(r){return new(r||s)(e.Y36(U.m),e.Y36(O.l),e.Y36(P.ez),e.Y36(y.F0),e.Y36(F.V))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-create-window"]],decls:24,vars:4,consts:[[1,"animated","fadeIn"],["class","card content-section-card",4,"ngIf"],[1,"card","content-section-card"],[1,"card-body"],[1,"row"],[1,"col-auto"],["class","col text-right",4,"ngIf"],[1,"col-4","col-md-3"],[1,"col-3","col-md-3"],["class","col-2 col-md-3",4,"ngIf"],["class","row",4,"ngFor","ngForOf"],["addEditWindowModal",""],["sectionHeader","Current Review Cycle",3,"reviewCycle","totalPossibleReviews","completedReviews"],[1,"col","text-right"],[1,"btn","btn-sm","btn-primary",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square"],[1,"col-2","col-md-3"],["class","badge badge-pill badge-primary",4,"ngIf"],[1,"badge","badge-pill","badge-primary"],["class","btn btn-sm btn-secondary",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-secondary",3,"click"],["aria-hidden","true",1,"fa","fa-pencil-alt"],[3,"existing","processing","onSumbit","onCloseModal","onDeleteClick"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0),e.YNc(1,B,3,3,"div",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4"),e._uU(7,"All Review Cycles"),e.qZA()(),e.YNc(8,k,4,0,"div",6),e.qZA(),e.TgZ(9,"div")(10,"div",4)(11,"div",7)(12,"h6"),e._uU(13,"Review cycle:"),e.qZA()(),e.TgZ(14,"div",8)(15,"h6"),e._uU(16,"Cycle start:"),e.qZA()(),e.TgZ(17,"div",8)(18,"h6"),e._uU(19,"Cycle end:"),e.qZA()(),e.YNc(20,N,3,0,"div",9),e.qZA(),e.YNc(21,L,12,7,"div",10),e.qZA()()()(),e.YNc(22,Q,1,2,"ng-template",null,11,e.W1O)),2&r&&(e.xp6(1),e.Q6J("ngIf",i.currentReviewCycle),e.xp6(7),e.Q6J("ngIf",i.canAddEditReviewCycles),e.xp6(12),e.Q6J("ngIf",i.canAddEditReviewCycles),e.xp6(1),e.Q6J("ngForOf",i.allReviewCycles))},encapsulation:2})}return s})();var q=d(9213);let V=(()=>{class s{static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({imports:[y.Bz.forChild([{path:"",component:I}]),t.ez,p.UX,m.nM,g.HC.forRoot(),h.j,f._8,D.l]})}return s})();e.B6R(I,function(){return[t.sg,t.O5,q.p,A]},[])},4175:(b,E,d)=>{d.d(E,{HC:()=>l,O1:()=>R});var t=d(1571),p=d(6895);const y=["*"];function m(a,v){1&a&&t.GkF(0)}function g(a,v){if(1&a&&(t.TgZ(0,"bar",3),t.Hsn(1),t.qZA()),2&a){const o=t.oxw();t.Q6J("type",o.type)("value",o._value)("max",o.max)("animate",o.animate)("striped",o.striped)}}function f(a,v){if(1&a&&(t.TgZ(0,"bar",3),t._uU(1),t.qZA()),2&a){const o=v.$implicit,u=t.oxw(2);t.Q6J("type",o.type)("value",o.value)("max",o.max||u.max)("animate",u.animate)("striped",u.striped),t.xp6(1),t.Oqu(o.label)}}function h(a,v){if(1&a&&t.YNc(0,f,2,6,"bar",4),2&a){const o=t.oxw();t.Q6J("ngForOf",o._values)}}let D=(()=>{class a{constructor(o,u){this.el=o,this.renderer=u,this.max=100,this.value=0,this.animate=!1,this.striped=!1,this.type="info",this.percent=100}ngOnChanges(o){(o.value||o.max)&&(this.percent=Number(o.value?.currentValue||this.value)/Number(o.max?.currentValue||this.max||100)*100),o.type&&this.applyTypeClasses()}applyTypeClasses(){if(this._prevType){const u=`bg-${this._prevType}`;this.renderer.removeClass(this.el.nativeElement,`progress-bar-${this._prevType}`),this.renderer.removeClass(this.el.nativeElement,u),this._prevType=void 0}if(this.type){const u=`bg-${this.type}`;this.renderer.addClass(this.el.nativeElement,`progress-bar-${this.type}`),this.renderer.addClass(this.el.nativeElement,u),this._prevType=this.type}}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(t.SBq),t.Y36(t.Qsj))},a.\u0275cmp=t.Xpm({type:a,selectors:[["bar"]],hostAttrs:["role","progressbar","aria-valuemin","0"],hostVars:13,hostBindings:function(o,u){2&o&&(t.uIk("aria-valuenow",u.value)("aria-valuetext",u.percent?u.percent.toFixed(0)+"%":"")("aria-valuemax",u.max),t.Udp("height","100","%")("width",u.percent,"%"),t.ekj("progress-bar",!0)("progress-bar-animated",u.animate)("progress-bar-striped",u.striped))},inputs:{max:"max",value:"value",animate:"animate",striped:"striped",type:"type"},features:[t.TTD],ngContentSelectors:y,decls:1,vars:0,template:function(o,u){1&o&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),a})(),e=(()=>{class a{constructor(){this.animate=!1,this.max=100}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})(),R=(()=>{class a{constructor(o){this.max=100,this.animate=!1,this.striped=!1,this.isStacked=!1,this._value=0,Object.assign(this,o)}set value(o){this.isStacked=Array.isArray(o),"number"==typeof o?(this._value=o,this._values=void 0):(this._value=void 0,this._values=o)}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(e))},a.\u0275cmp=t.Xpm({type:a,selectors:[["progressbar"]],hostVars:3,hostBindings:function(o,u){2&o&&(t.uIk("max",u.max),t.ekj("progress",!0))},inputs:{max:"max",animate:"animate",striped:"striped",type:"type",value:"value"},ngContentSelectors:y,decls:5,vars:3,consts:[[4,"ngIf","ngIfThen","ngIfElse"],["NotStacked",""],["Stacked",""],[3,"type","value","max","animate","striped"],[3,"type","value","max","animate","striped",4,"ngFor","ngForOf"]],template:function(o,u){if(1&o&&(t.F$t(),t.YNc(0,m,1,0,"ng-container",0),t.YNc(1,g,2,5,"ng-template",null,1,t.W1O),t.YNc(3,h,1,1,"ng-template",null,2,t.W1O)),2&o){const A=t.MAs(2),M=t.MAs(4);t.Q6J("ngIf",!u.isStacked)("ngIfThen",A)("ngIfElse",M)}},dependencies:[p.sg,p.O5,D],styles:["[_nghost-%COMP%]{width:100%;display:flex}"],changeDetection:0}),a})(),l=(()=>{class a{static forRoot(){return{ngModule:a,providers:[]}}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.ez]}),a})()},3891:(b,E,d)=>{d.d(E,{v:()=>y});var t=d(1571),p=d(7832);let y=(()=>{class m extends p.s{}return m.\u0275fac=function(){let g;return function(h){return(g||(g=t.n5z(m)))(h||m)}}(),m.\u0275cmp=t.Xpm({type:m,selectors:[["ChevronDownIcon"]],standalone:!0,features:[t.qOj,t.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(f,h){1&f&&(t.O4$(),t.TgZ(0,"svg",0),t._UZ(1,"path",1),t.qZA()),2&f&&(t.Tol(h.getClassNames()),t.uIk("aria-label",h.ariaLabel)("aria-hidden",h.ariaHidden)("role",h.role))},encapsulation:2}),m})()},162:(b,E,d)=>{d.d(E,{L:()=>y});var t=d(1571),p=d(7832);let y=(()=>{class m extends p.s{}return m.\u0275fac=function(){let g;return function(h){return(g||(g=t.n5z(m)))(h||m)}}(),m.\u0275cmp=t.Xpm({type:m,selectors:[["SpinnerIcon"]],standalone:!0,features:[t.qOj,t.jDz],decls:6,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["clip-path","url(#clip0_417_21408)"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],["id","clip0_417_21408"],["width","14","height","14","fill","white"]],template:function(f,h){1&f&&(t.O4$(),t.TgZ(0,"svg",0)(1,"g",1),t._UZ(2,"path",2),t.qZA(),t.TgZ(3,"defs")(4,"clipPath",3),t._UZ(5,"rect",4),t.qZA()()()),2&f&&(t.Tol(h.getClassNames()),t.uIk("aria-label",h.ariaLabel)("aria-hidden",h.ariaHidden)("role",h.role))},encapsulation:2}),m})()}}]);
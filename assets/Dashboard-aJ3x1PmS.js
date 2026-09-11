import{D as e,J as t,O as n,R as r,T as i,W as a,ft as o,g as s,h as c,ht as l,k as u,l as d,m as f,p,r as m,s as h,u as g,x as _}from"./runtime-core.esm-bundler-fG25Q0p4.js";import{pt as v,s as y,t as b}from"./button-D88OAD24.js";import{E as x,T as S,a as C,t as w}from"./index-OTjujz-Y.js";import{t as T}from"./dialog-CcyLp5yV.js";import{t as E}from"./toast-DmXIxFQf.js";var D=C.extend({name:`metergroup`,style:`
    .p-metergroup {
        display: flex;
        gap: dt('metergroup.gap');
    }

    .p-metergroup-meters {
        display: flex;
        background: dt('metergroup.meters.background');
        border-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-label-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-label {
        display: inline-flex;
        align-items: center;
        gap: dt('metergroup.label.gap');
    }

    .p-metergroup-label-marker {
        display: inline-flex;
        width: dt('metergroup.label.marker.size');
        height: dt('metergroup.label.marker.size');
        border-radius: 100%;
    }

    .p-metergroup-label-icon {
        font-size: dt('metergroup.label.icon.size');
        width: dt('metergroup.label.icon.size');
        height: dt('metergroup.label.icon.size');
    }

    .p-metergroup-horizontal {
        flex-direction: column;
    }

    .p-metergroup-label-list-horizontal {
        gap: dt('metergroup.label.list.horizontal.gap');
    }

    .p-metergroup-horizontal .p-metergroup-meters {
        height: dt('metergroup.meters.size');
    }

    .p-metergroup-horizontal .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-end-start-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-horizontal .p-metergroup-meter:last-of-type {
        border-start-end-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical {
        flex-direction: row;
    }

    .p-metergroup-label-list-vertical {
        flex-direction: column;
        gap: dt('metergroup.label.list.vertical.gap');
    }

    .p-metergroup-vertical .p-metergroup-meters {
        flex-direction: column;
        width: dt('metergroup.meters.size');
        height: 100%;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: flex-start;
    }

    .p-metergroup-vertical .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-start-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical .p-metergroup-meter:last-of-type {
        border-end-start-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }
`,classes:{root:function(e){var t=e.props;return[`p-metergroup p-component`,{"p-metergroup-horizontal":t.orientation===`horizontal`,"p-metergroup-vertical":t.orientation===`vertical`}]},meters:`p-metergroup-meters`,meter:`p-metergroup-meter`,labelList:function(e){var t=e.props;return[`p-metergroup-label-list`,{"p-metergroup-label-list-vertical":t.labelOrientation===`vertical`,"p-metergroup-label-list-horizontal":t.labelOrientation===`horizontal`}]},label:`p-metergroup-label`,labelIcon:`p-metergroup-label-icon`,labelMarker:`p-metergroup-label-marker`,labelText:`p-metergroup-label-text`}}),O={name:`MeterGroup`,extends:y,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},style:D,provide:function(){return{$pcMeterGroup:this,$parentInstance:this}}};function k(e){"@babel/helpers - typeof";return k=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},k(e)}function A(e,t,n){return(t=j(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){var t=M(e,`string`);return k(t)==`symbol`?t:t+``}function M(e,t){if(k(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(k(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var N={name:`MeterGroupLabel`,hostName:`MeterGroup`,extends:y,inheritAttrs:!1,inject:[`$pcMeterGroup`],props:{value:{type:Array,default:null},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},computed:{dataP:function(){return v(A({},this.$pcMeterGroup.labelOrientation,this.$pcMeterGroup.labelOrientation))}}},P=[`data-p`];function F(t,r,a,s,c,u){return i(),g(`ol`,_({class:t.cx(`labelList`),"data-p":u.dataP},t.ptm(`labelList`)),[(i(!0),g(m,null,e(a.value,function(e,r){return i(),g(`li`,_({key:r+`_label`,class:t.cx(`label`)},{ref_for:!0},t.ptm(`label`)),[n(t.$slots,`icon`,{value:e,class:o(t.cx(`labelIcon`))},function(){return[e.icon?(i(),g(`i`,_({key:0,class:[e.icon,t.cx(`labelIcon`)],style:{color:e.color}},{ref_for:!0},t.ptm(`labelIcon`)),null,16)):(i(),g(`span`,_({key:1,class:t.cx(`labelMarker`),style:{backgroundColor:e.color}},{ref_for:!0},t.ptm(`labelMarker`)),null,16))]}),h(`span`,_({class:t.cx(`labelText`)},{ref_for:!0},t.ptm(`labelText`)),l(e.label)+` (`+l(t.$parentInstance.percentValue(e.value))+`)`,17)],16)}),128))],16,P)}N.render=F;function I(e){"@babel/helpers - typeof";return I=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},I(e)}function L(e,t,n){return(t=R(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=z(e,`string`);return I(t)==`symbol`?t:t+``}function z(e,t){if(I(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(I(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var B={name:`MeterGroup`,extends:O,inheritAttrs:!1,methods:{getPTOptions:function(e,t,n){return this.ptm(e,{context:{value:t,index:n}})},percent:function(){var e=((arguments.length>0&&arguments[0]!==void 0?arguments[0]:0)-this.min)/(this.max-this.min)*100;return Math.max(0,Math.min(100,e))},roundedPercent:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Math.round(this.percent(e))},percentValue:function(e){return this.roundedPercent(e)+`%`},meterCalculatedStyles:function(e){return{backgroundColor:e.color,width:this.orientation===`horizontal`&&this.percent(e.value)+`%`,height:this.orientation===`vertical`&&this.percent(e.value)+`%`}}},computed:{totalPercent:function(){return this.roundedPercent(this.value.reduce(function(e,t){return e+t.value},0))},percentages:function(){var e=0,t=[];return this.value.forEach(function(n){e+=n.value,t.push(e)}),t},dataP:function(){return v(L({},this.orientation,this.orientation))}},components:{MeterGroupLabel:N}},V=[`aria-valuemin`,`aria-valuemax`,`aria-valuenow`,`data-p`],H=[`data-p`],U=[`data-p`];function W(t,r,a,s,l,f){var p=u(`MeterGroupLabel`);return i(),g(`div`,_({class:t.cx(`root`),role:`meter`,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":f.totalPercent,"data-p":f.dataP},t.ptmi(`root`)),[t.labelPosition===`start`?n(t.$slots,`label`,{key:0,value:t.value,totalPercent:f.totalPercent,percentages:f.percentages},function(){return[c(p,{value:t.value,labelPosition:t.labelPosition,labelOrientation:t.labelOrientation,unstyled:t.unstyled,pt:t.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]}):d(``,!0),n(t.$slots,`start`,{value:t.value,totalPercent:f.totalPercent,percentages:f.percentages}),h(`div`,_({class:t.cx(`meters`),"data-p":f.dataP},t.ptm(`meters`)),[(i(!0),g(m,null,e(t.value,function(e,r){return n(t.$slots,`meter`,{key:r,value:e,index:r,class:o(t.cx(`meter`)),orientation:t.orientation,size:f.percentValue(e.value),totalPercent:f.totalPercent},function(){return[f.roundedPercent(e.value)?(i(),g(`span`,_({key:0,class:t.cx(`meter`),style:f.meterCalculatedStyles(e),"data-p":f.dataP},{ref_for:!0},f.getPTOptions(`meter`,e,r)),null,16,U)):d(``,!0)]})}),128))],16,H),n(t.$slots,`end`,{value:t.value,totalPercent:f.totalPercent,percentages:f.percentages}),t.labelPosition===`end`?n(t.$slots,`label`,{key:1,value:t.value,totalPercent:f.totalPercent,percentages:f.percentages},function(){return[c(p,{value:t.value,labelPosition:t.labelPosition,labelOrientation:t.labelOrientation,unstyled:t.unstyled,pt:t.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]}):d(``,!0)],16,V)}B.render=W;var G={class:`dashboard-grid`},K={class:`card-item small-card`},q={class:`mt-3`},J={class:`card-item large-card`},Y={class:`operations-grid`},X={class:`operation-block`},Z={class:`task-strip`},Q={class:`task-strip`},$={class:`operation-block quick-actions`},ee={class:`actions-buttons-grid`},te=x(s({__name:`Dashboard`,setup(e){let n=S(),o=w(),s=a(!1),l=a(!1),u=a(!1),d=a(null),m=a([{label:`Головной офис`,value:45,color:`#6366f1`},{label:`Филиалы Ритейл`,value:35,color:`#10b981`},{label:`Бэк-офис`,value:20,color:`#f59e0b`}]),_=e=>{d.value={title:e},u.value=!0},v=e=>{u.value=!1,e===`approved`?o.add({severity:`success`,summary:`Успешно утверждено`,detail:`Приказ отправлен в архив кадров.`,life:3e3}):o.add({severity:`error`,summary:`Заявка отклонена`,detail:`Уведомление отправлено инициатору.`,life:3e3})},y=()=>{n.push(`/profile`)},x=()=>{s.value=!0,setTimeout(()=>{s.value=!1,o.add({severity:`info`,summary:`Черновик создан`,detail:`Новый шаблон приказа открыт в системе документооборота.`,life:3e3})},1e3)},C=()=>{l.value=!0,setTimeout(()=>{l.value=!1,o.add({severity:`success`,summary:`Экспорт завершен`,detail:`Файл hrm_report_2026.xlsx успешно скачан.`,life:3e3})},1500)};return(e,n)=>(i(),g(`div`,G,[c(t(E)),c(t(T),{visible:u.value,"onUpdate:visible":n[2]||=e=>u.value=e,modal:``,header:d.value?.title,style:{width:`25rem`}},{footer:r(()=>[c(t(b),{label:`Отклонить`,severity:`danger`,variant:`text`,size:`small`,onClick:n[0]||=e=>v(`rejected`)}),c(t(b),{label:`Утвердить`,severity:`success`,size:`small`,onClick:n[1]||=e=>v(`approved`)})]),default:r(()=>[n[5]||=h(`div`,{class:`dialog-body-content py-2`},[h(`p`,{class:`m-0 text-sm text-muted-color mb-4`},` Пожалуйста, подтвердите или отклоните операционную задачу сотрудника. Действие будет записано в логах супер-админа. `),h(`div`,{class:`employee-preview-info p-3 bg-surface-50 border rounded-lg mb-4 flex flex-column gap-1`},[h(`span`,{class:`text-xs text-muted-color`},`Сотрудник:`),h(`span`,{class:`font-semibold text-sm`},`Солдатов Алексей Игоревич`),h(`span`,{class:`text-xs text-muted-color mt-2`},`Тип операции:`),h(`span`,{class:`font-medium text-sm`},`Ежегодный оплачиваемый отпуск (14 дней)`)])],-1)]),_:1},8,[`visible`,`header`]),h(`div`,K,[n[6]||=p(`<div class="card-header-inline" data-v-3f3ca54c><h3 class="card-title" data-v-3f3ca54c>Штат сотрудников</h3><i class="pi pi-users text-primary" data-v-3f3ca54c></i></div><div class="metric-value" data-v-3f3ca54c>1,248 <span class="metric-trend positive" data-v-3f3ca54c>+4% <i class="pi pi-arrow-up-right" data-v-3f3ca54c></i></span></div>`,2),h(`div`,q,[c(t(B),{value:m.value},null,8,[`value`])])]),n[12]||=p(`<div class="card-item small-card" data-v-3f3ca54c><div class="card-header-inline" data-v-3f3ca54c><h3 class="card-title" data-v-3f3ca54c>Присутствие сегодня</h3><i class="pi pi-clock text-success" data-v-3f3ca54c></i></div><div class="metric-value" data-v-3f3ca54c>94.2% <span class="metric-label" data-v-3f3ca54c>от общего штата</span></div><div class="attendance-list mt-3" data-v-3f3ca54c><div class="attendance-item" data-v-3f3ca54c><span class="status-indicator online" data-v-3f3ca54c></span><span class="status-label" data-v-3f3ca54c>В офисе / Удаленно</span><span class="status-count" data-v-3f3ca54c>1,176</span></div><div class="attendance-item" data-v-3f3ca54c><span class="status-indicator vacation" data-v-3f3ca54c></span><span class="status-label" data-v-3f3ca54c>В отпуске</span><span class="status-count" data-v-3f3ca54c>42</span></div><div class="attendance-item" data-v-3f3ca54c><span class="status-indicator sick" data-v-3f3ca54c></span><span class="status-label" data-v-3f3ca54c>Больничный</span><span class="status-count" data-v-3f3ca54c>30</span></div></div></div>`,1),h(`div`,J,[n[11]||=h(`div`,{class:`card-header-inline mb-4`},[h(`div`,null,[h(`h3`,{class:`card-title m-0`},`Операционный центр HRM`),h(`p`,{class:`card-subtitle`},`Быстрые действия и критические задачи департаментов`)]),h(`i`,{class:`pi pi-sliders-h text-muted`})],-1),h(`div`,Y,[h(`div`,X,[n[9]||=h(`h4`,{class:`block-subtitle`},[h(`i`,{class:`pi pi-exclamation-circle text-warn mr-1`}),f(` Требует внимания `)],-1),h(`div`,Z,[n[7]||=h(`div`,{class:`task-info`},[h(`span`,{class:`task-name`},`Утверждение отпуска (Солдатов А.)`),h(`span`,{class:`task-date`},`Истекает сегодня`)],-1),c(t(b),{label:`Открыть`,size:`small`,variant:`outlined`,severity:`warn`,onClick:n[3]||=e=>_(`Утверждение отпуска`)})]),h(`div`,Q,[n[8]||=h(`div`,{class:`task-info`},[h(`span`,{class:`task-name`},`Анкета нового сотрудника (Джураев Ш.)`),h(`span`,{class:`task-date`},`Ожидает проверки ИТ`)],-1),c(t(b),{label:`Открыть`,size:`small`,variant:`outlined`,severity:`secondary`,onClick:n[4]||=e=>_(`Анкета Джураева Ш.`)})])]),h(`div`,$,[n[10]||=h(`h4`,{class:`block-subtitle`},[h(`i`,{class:`pi pi-bolt text-primary mr-1`}),f(` Быстрые действия`)],-1),h(`div`,ee,[c(t(b),{label:`Нанять сотрудника`,icon:`pi pi-user-plus`,severity:`primary`,class:`w-full text-sm`,onClick:y}),c(t(b),{label:`Создать приказ`,icon:`pi pi-file-edit`,severity:`secondary`,variant:`outlined`,class:`w-full text-sm`,loading:s.value,onClick:x},null,8,[`loading`]),c(t(b),{label:`Экспорт отчетов`,icon:`pi pi-download`,severity:`secondary`,variant:`outlined`,class:`w-full text-sm`,loading:l.value,onClick:C},null,8,[`loading`])])])])])]))}}),[[`__scopeId`,`data-v-3f3ca54c`]]);export{te as default};
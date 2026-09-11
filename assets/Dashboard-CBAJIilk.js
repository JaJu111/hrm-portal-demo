import{D as e,J as t,O as n,T as r,W as i,ct as a,dt as o,g as s,h as c,k as l,l as u,m as d,p as f,r as p,s as m,u as h,x as g}from"./runtime-core.esm-bundler-Dq5yDiGz.js";import{a as _,lt as v}from"./ripple-CvfQxL6C.js";import{E as y,a as b}from"./index-Wl2hiX9e.js";import{t as x}from"./button-B12dWiDs.js";var S=b.extend({name:`metergroup`,style:`
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
`,classes:{root:function(e){var t=e.props;return[`p-metergroup p-component`,{"p-metergroup-horizontal":t.orientation===`horizontal`,"p-metergroup-vertical":t.orientation===`vertical`}]},meters:`p-metergroup-meters`,meter:`p-metergroup-meter`,labelList:function(e){var t=e.props;return[`p-metergroup-label-list`,{"p-metergroup-label-list-vertical":t.labelOrientation===`vertical`,"p-metergroup-label-list-horizontal":t.labelOrientation===`horizontal`}]},label:`p-metergroup-label`,labelIcon:`p-metergroup-label-icon`,labelMarker:`p-metergroup-label-marker`,labelText:`p-metergroup-label-text`}}),C={name:`MeterGroup`,extends:_,props:{value:{type:Array,default:null},min:{type:Number,default:0},max:{type:Number,default:100},orientation:{type:String,default:`horizontal`},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},style:S,provide:function(){return{$pcMeterGroup:this,$parentInstance:this}}};function w(e){"@babel/helpers - typeof";return w=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},w(e)}function T(e,t,n){return(t=E(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){var t=D(e,`string`);return w(t)==`symbol`?t:t+``}function D(e,t){if(w(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(w(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var O={name:`MeterGroupLabel`,hostName:`MeterGroup`,extends:_,inheritAttrs:!1,inject:[`$pcMeterGroup`],props:{value:{type:Array,default:null},labelPosition:{type:String,default:`end`},labelOrientation:{type:String,default:`horizontal`}},computed:{dataP:function(){return v(T({},this.$pcMeterGroup.labelOrientation,this.$pcMeterGroup.labelOrientation))}}},k=[`data-p`];function A(t,i,s,c,l,u){return r(),h(`ol`,g({class:t.cx(`labelList`),"data-p":u.dataP},t.ptm(`labelList`)),[(r(!0),h(p,null,e(s.value,function(e,i){return r(),h(`li`,g({key:i+`_label`,class:t.cx(`label`)},{ref_for:!0},t.ptm(`label`)),[n(t.$slots,`icon`,{value:e,class:a(t.cx(`labelIcon`))},function(){return[e.icon?(r(),h(`i`,g({key:0,class:[e.icon,t.cx(`labelIcon`)],style:{color:e.color}},{ref_for:!0},t.ptm(`labelIcon`)),null,16)):(r(),h(`span`,g({key:1,class:t.cx(`labelMarker`),style:{backgroundColor:e.color}},{ref_for:!0},t.ptm(`labelMarker`)),null,16))]}),m(`span`,g({class:t.cx(`labelText`)},{ref_for:!0},t.ptm(`labelText`)),o(e.label)+` (`+o(t.$parentInstance.percentValue(e.value))+`)`,17)],16)}),128))],16,k)}O.render=A;function j(e){"@babel/helpers - typeof";return j=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},j(e)}function M(e,t,n){return(t=N(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){var t=P(e,`string`);return j(t)==`symbol`?t:t+``}function P(e,t){if(j(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(j(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var F={name:`MeterGroup`,extends:C,inheritAttrs:!1,methods:{getPTOptions:function(e,t,n){return this.ptm(e,{context:{value:t,index:n}})},percent:function(){var e=((arguments.length>0&&arguments[0]!==void 0?arguments[0]:0)-this.min)/(this.max-this.min)*100;return Math.max(0,Math.min(100,e))},roundedPercent:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Math.round(this.percent(e))},percentValue:function(e){return this.roundedPercent(e)+`%`},meterCalculatedStyles:function(e){return{backgroundColor:e.color,width:this.orientation===`horizontal`&&this.percent(e.value)+`%`,height:this.orientation===`vertical`&&this.percent(e.value)+`%`}}},computed:{totalPercent:function(){return this.roundedPercent(this.value.reduce(function(e,t){return e+t.value},0))},percentages:function(){var e=0,t=[];return this.value.forEach(function(n){e+=n.value,t.push(e)}),t},dataP:function(){return v(M({},this.orientation,this.orientation))}},components:{MeterGroupLabel:O}},I=[`aria-valuemin`,`aria-valuemax`,`aria-valuenow`,`data-p`],L=[`data-p`],R=[`data-p`];function z(t,i,o,s,d,f){var _=l(`MeterGroupLabel`);return r(),h(`div`,g({class:t.cx(`root`),role:`meter`,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":f.totalPercent,"data-p":f.dataP},t.ptmi(`root`)),[t.labelPosition===`start`?n(t.$slots,`label`,{key:0,value:t.value,totalPercent:f.totalPercent,percentages:f.percentages},function(){return[c(_,{value:t.value,labelPosition:t.labelPosition,labelOrientation:t.labelOrientation,unstyled:t.unstyled,pt:t.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]}):u(``,!0),n(t.$slots,`start`,{value:t.value,totalPercent:f.totalPercent,percentages:f.percentages}),m(`div`,g({class:t.cx(`meters`),"data-p":f.dataP},t.ptm(`meters`)),[(r(!0),h(p,null,e(t.value,function(e,i){return n(t.$slots,`meter`,{key:i,value:e,index:i,class:a(t.cx(`meter`)),orientation:t.orientation,size:f.percentValue(e.value),totalPercent:f.totalPercent},function(){return[f.roundedPercent(e.value)?(r(),h(`span`,g({key:0,class:t.cx(`meter`),style:f.meterCalculatedStyles(e),"data-p":f.dataP},{ref_for:!0},f.getPTOptions(`meter`,e,i)),null,16,R)):u(``,!0)]})}),128))],16,L),n(t.$slots,`end`,{value:t.value,totalPercent:f.totalPercent,percentages:f.percentages}),t.labelPosition===`end`?n(t.$slots,`label`,{key:1,value:t.value,totalPercent:f.totalPercent,percentages:f.percentages},function(){return[c(_,{value:t.value,labelPosition:t.labelPosition,labelOrientation:t.labelOrientation,unstyled:t.unstyled,pt:t.pt},null,8,[`value`,`labelPosition`,`labelOrientation`,`unstyled`,`pt`])]}):u(``,!0)],16,I)}F.render=z;var B={class:`dashboard-grid`},V={class:`card-item small-card`},H={class:`mt-3`},U={class:`card-item large-card`},W={class:`operations-grid`},G={class:`operation-block`},K={class:`task-strip`},q={class:`task-strip`},J={class:`operation-block quick-actions`},Y={class:`actions-buttons-grid`},X=y(s({__name:`Dashboard`,setup(e){let n=i([{label:`Головной офис`,value:45,color:`#6366f1`},{label:`Филиалы Ритейл`,value:35,color:`#10b981`},{label:`Бэк-офис`,value:20,color:`#f59e0b`}]);return(e,i)=>(r(),h(`div`,B,[m(`div`,V,[i[0]||=f(`<div class="card-header-inline" data-v-6db0ab1e><h3 class="card-title" data-v-6db0ab1e>Штат сотрудников</h3><i class="pi pi-users text-primary" data-v-6db0ab1e></i></div><div class="metric-value" data-v-6db0ab1e>1,248 <span class="metric-trend positive" data-v-6db0ab1e>+4% <i class="pi pi-arrow-up-right" data-v-6db0ab1e></i></span></div>`,2),m(`div`,H,[c(t(F),{value:n.value},null,8,[`value`])])]),i[6]||=f(`<div class="card-item small-card" data-v-6db0ab1e><div class="card-header-inline" data-v-6db0ab1e><h3 class="card-title" data-v-6db0ab1e>Присутствие сегодня</h3><i class="pi pi-clock text-success" data-v-6db0ab1e></i></div><div class="metric-value" data-v-6db0ab1e>94.2% <span class="metric-label" data-v-6db0ab1e>от общего штата</span></div><div class="attendance-list mt-3" data-v-6db0ab1e><div class="attendance-item" data-v-6db0ab1e><span class="status-indicator online" data-v-6db0ab1e></span><span class="status-label" data-v-6db0ab1e>В офисе / Удаленно</span><span class="status-count" data-v-6db0ab1e>1,176</span></div><div class="attendance-item" data-v-6db0ab1e><span class="status-indicator vacation" data-v-6db0ab1e></span><span class="status-label" data-v-6db0ab1e>В отпуске</span><span class="status-count" data-v-6db0ab1e>42</span></div><div class="attendance-item" data-v-6db0ab1e><span class="status-indicator sick" data-v-6db0ab1e></span><span class="status-label" data-v-6db0ab1e>Больничный</span><span class="status-count" data-v-6db0ab1e>30</span></div></div></div>`,1),m(`div`,U,[i[5]||=m(`div`,{class:`card-header-inline mb-4`},[m(`div`,null,[m(`h3`,{class:`card-title m-0`},`Операционный центр HRM`),m(`p`,{class:`card-subtitle`},`Быстрые действия и критические задачи департаментов`)]),m(`i`,{class:`pi pi-sliders-h text-muted`})],-1),m(`div`,W,[m(`div`,G,[i[3]||=m(`h4`,{class:`block-subtitle`},[m(`i`,{class:`pi pi-exclamation-circle text-warn mr-1`}),d(` Требует внимания `)],-1),m(`div`,K,[i[1]||=m(`div`,{class:`task-info`},[m(`span`,{class:`task-name`},`Утверждение отпуска (Солдатов А.)`),m(`span`,{class:`task-date`},`Истекает сегодня`)],-1),c(t(x),{label:`Открыть`,size:`small`,variant:`outlined`,severity:`warn`})]),m(`div`,q,[i[2]||=m(`div`,{class:`task-info`},[m(`span`,{class:`task-name`},`Анкета нового сотрудника (Джураев Ш.)`),m(`span`,{class:`task-date`},`Ожидает проверки ИТ`)],-1),c(t(x),{label:`Открыть`,size:`small`,variant:`outlined`,severity:`secondary`})])]),m(`div`,J,[i[4]||=m(`h4`,{class:`block-subtitle`},[m(`i`,{class:`pi pi-bolt text-primary mr-1`}),d(` Быстрые действия`)],-1),m(`div`,Y,[c(t(x),{label:`Нанять сотрудника`,icon:`pi pi-user-plus`,severity:`primary`,class:`w-full text-sm`}),c(t(x),{label:`Создать приказ`,icon:`pi pi-file-edit`,severity:`secondary`,variant:`outlined`,class:`w-full text-sm`}),c(t(x),{label:`Экспорт отчетов`,icon:`pi pi-download`,severity:`secondary`,variant:`outlined`,class:`w-full text-sm`})])])])])]))}}),[[`__scopeId`,`data-v-6db0ab1e`]]);export{X as default};
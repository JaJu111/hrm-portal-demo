import{A as e,C as t,D as n,J as r,L as i,O as a,R as o,T as s,W as c,c as l,ct as u,dt as d,g as f,h as p,j as m,k as h,l as g,o as _,r as v,s as y,u as b,x,z as S}from"./runtime-core.esm-bundler-Dq5yDiGz.js";import{$ as C,K as w,a as T,ut as E}from"./ripple-BJP2YFaz.js";import{D,T as ee,a as O,w as k}from"./index-COteakAF.js";import{n as A,r as j,t as M}from"./portal-kjDQjbBc.js";import{t as N}from"./button-X4O9m-dl.js";import{n as P,r as F,t as I}from"./utils-CG8f-47G.js";import{t as L}from"./avatar-CBfEZBTs.js";import{n as R,t as z}from"./inputicon-lXLdV4E9.js";import{t as B}from"./inputtext-CrfQWCAw.js";import{t as V}from"./select-B-ImgtH3.js";var H=O.extend({name:`drawer`,style:`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}}),U={name:`BaseDrawer`,extends:T,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:H,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function W(e){"@babel/helpers - typeof";return W=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},W(e)}function G(e,t,n){return(t=K(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){var t=q(e,`string`);return W(t)==`symbol`?t:t+``}function q(e,t){if(W(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(W(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var J={name:`Drawer`,extends:U,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&j.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&j.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&w(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&j.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&C(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&I()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&P()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return E(G(G(G({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:F},components:{Button:N,Portal:M,TimesIcon:A}},Y=[`data-p`],te=[`role`,`aria-modal`,`data-p`];function X(t,n,r,i,c,f){var _=h(`Button`),C=h(`Portal`),w=e(`focustrap`);return s(),l(C,null,{default:o(function(){return[c.containerVisible?(s(),b(`div`,x({key:0,ref:f.maskRef,onMousedown:n[0]||=function(){return f.onMaskClick&&f.onMaskClick.apply(f,arguments)},class:t.cx(`mask`),style:t.sx(`mask`,!0,{position:t.position,modal:t.modal}),"data-p":f.dataP},t.ptm(`mask`)),[p(D,x({name:`p-drawer`,onEnter:f.onEnter,onAfterEnter:f.onAfterEnter,onBeforeLeave:f.onBeforeLeave,onLeave:f.onLeave,onAfterLeave:f.onAfterLeave,appear:``},t.ptm(`transition`)),{default:o(function(){return[t.visible?S((s(),b(`div`,x({key:0,ref:f.containerRef,class:t.cx(`root`),style:t.sx(`root`),role:t.modal?`dialog`:`complementary`,"aria-modal":t.modal?!0:void 0,"data-p":f.dataP},t.ptmi(`root`)),[t.$slots.container?a(t.$slots,`container`,{key:0,closeCallback:f.hide}):(s(),b(v,{key:1},[y(`div`,x({ref:f.headerContainerRef,class:t.cx(`header`)},t.ptm(`header`)),[a(t.$slots,`header`,{class:u(t.cx(`title`))},function(){return[t.header?(s(),b(`div`,x({key:0,class:t.cx(`title`)},t.ptm(`title`)),d(t.header),17)):g(``,!0)]}),t.showCloseIcon?a(t.$slots,`closebutton`,{key:0,closeCallback:f.hide},function(){return[p(_,x({ref:f.closeButtonRef,type:`button`,class:t.cx(`pcCloseButton`),"aria-label":f.closeAriaLabel,unstyled:t.unstyled,onClick:f.hide},t.closeButtonProps,{pt:t.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:o(function(e){return[a(t.$slots,`closeicon`,{},function(){return[(s(),l(m(t.closeIcon?`span`:`TimesIcon`),x({class:[t.closeIcon,e.class]},t.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):g(``,!0)],16),y(`div`,x({ref:f.contentRef,class:t.cx(`content`)},t.ptm(`content`)),[a(t.$slots,`default`)],16),t.$slots.footer?(s(),b(`div`,x({key:0,ref:f.footerContainerRef,class:t.cx(`footer`)},t.ptm(`footer`)),[a(t.$slots,`footer`)],16)):g(``,!0)],64))],16,te)),[[w]]):g(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,Y)):g(``,!0)]}),_:3})}J.render=X;var Z=O.extend({name:`toolbar`,style:`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`,classes:{root:`p-toolbar p-component`,start:`p-toolbar-start`,center:`p-toolbar-center`,end:`p-toolbar-end`}}),Q={name:`Toolbar`,extends:{name:`BaseToolbar`,extends:T,props:{ariaLabelledby:{type:String,default:null}},style:Z,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},inheritAttrs:!1},ne=[`aria-labelledby`];function re(e,t,n,r,i,o){return s(),b(`div`,x({class:e.cx(`root`),role:`toolbar`,"aria-labelledby":e.ariaLabelledby},e.ptmi(`root`)),[y(`div`,x({class:e.cx(`start`)},e.ptm(`start`)),[a(e.$slots,`start`)],16),y(`div`,x({class:e.cx(`center`)},e.ptm(`center`)),[a(e.$slots,`center`)],16),y(`div`,x({class:e.cx(`end`)},e.ptm(`end`)),[a(e.$slots,`end`)],16)],16,ne)}Q.render=re;var ie={class:`hrm-layout`},ae={class:`mobile-header`},oe={class:`header-left`},$={class:`drawer-content`},se={class:`menu-list`},ce={class:`user-footer`},le={class:`main-container`},ue={class:`desktop-sidebar`},de={class:`sidebar-top`},fe={class:`menu-list`},pe={class:`user-footer`},me={class:`content-area`},he={class:`actions-wrapper`},ge=f({__name:`Home`,setup(e){let a=ee(),u=k(),d=c(!1),f=c([{label:`Главная страница`,icon:`pi pi-home`,active:!1,path:`/home`},{label:`Мой профиль`,icon:`pi pi-user`,active:!1,path:`/profile`},{label:`Структура банка`,icon:`pi pi-sitemap`,active:!1,path:`/structure`},{label:`Центр обращений`,icon:`pi pi-comments`,active:!1,path:`/requests`},{label:`Документы`,icon:`pi pi-file`,active:!1,path:`/documents`}]),m=c(`ru`),g=c([{name:`Русский`,code:`ru`},{name:`English`,code:`en`},{name:`O‘zbekcha`,code:`uz`}]),x=()=>{a.push(`/`)};_(()=>{let e=f.value.find(e=>e.active);return e?e.label:`Dashboard`});let S=e=>{d.value=!1,a.push(e.path)};return t(()=>{f.value.forEach(e=>{e.active=u.path===e.path})}),i(()=>u.path,e=>{f.value.forEach(t=>{t.active=e===t.path})},{immediate:!0}),(e,t)=>{let i=h(`RouterView`);return s(),b(`div`,ie,[y(`header`,ae,[y(`div`,oe,[p(r(N),{icon:`pi pi-bars`,severity:`secondary`,variant:`text`,onClick:t[0]||=e=>d.value=!0}),t[3]||=y(`span`,{class:`brand-title`},`HRM Portal`,-1)]),p(r(L),{label:`JM`,shape:`circle`})]),p(r(J),{visible:d.value,"onUpdate:visible":t[1]||=e=>d.value=e,class:`custom-drawer`},{header:o(()=>[...t[4]||=[y(`div`,{class:`logo-area`},[y(`div`,{class:`logo-box`},`I`),y(`span`,{class:`logo-text`},`HRM - portal`)],-1)]]),default:o(()=>[y(`div`,$,[y(`div`,se,[(s(!0),b(v,null,n(f.value,e=>(s(),l(r(N),{key:e.label,icon:e.icon,label:e.label,variant:`text`,severity:e.active?`primary`:`secondary`,class:`menu-btn`,onClick:t=>S(e)},null,8,[`icon`,`label`,`severity`,`onClick`]))),128))]),y(`div`,ce,[p(r(L),{label:`JM`,shape:`circle`}),t[5]||=y(`div`,{class:`user-info`},[y(`span`,{class:`user-name`},`Jaloliddin Musaboyev`),y(`span`,{class:`user-role`},`Super Admin`)],-1)])])]),_:1},8,[`visible`]),y(`div`,le,[y(`aside`,ue,[y(`div`,de,[t[6]||=y(`div`,{class:`logo-area`},[y(`div`,{class:`logo-box`},`I`),y(`span`,{class:`logo-text`},`HRM - portal`)],-1),y(`nav`,fe,[(s(!0),b(v,null,n(f.value,e=>(s(),l(r(N),{key:e.label,icon:e.icon,label:e.label,variant:`text`,severity:e.active?`primary`:`secondary`,class:`menu-btn`,onClick:t=>S(e)},null,8,[`icon`,`label`,`severity`,`onClick`]))),128))])]),y(`div`,pe,[p(r(L),{label:`JM`,shape:`circle`}),t[7]||=y(`div`,{class:`user-info`},[y(`span`,{class:`user-name`},`Jaloliddin Musaboyev`),y(`span`,{class:`user-role`},`Super Admin`)],-1)])]),y(`main`,me,[p(r(Q),{class:`custom-toolbar`},{start:o(()=>[p(r(R),{iconPosition:`left`,class:`custom-search`},{default:o(()=>[p(r(z),{class:`pi pi-search`}),p(r(B),{placeholder:`Поиск...`,class:`search-input`})]),_:1})]),end:o(()=>[y(`div`,he,[p(r(V),{modelValue:m.value,"onUpdate:modelValue":t[2]||=e=>m.value=e,options:g.value,optionLabel:`name`,optionValue:`code`,class:`lang-select`},null,8,[`modelValue`,`options`]),p(r(N),{label:`Выйти`,icon:`pi pi-sign-out`,severity:`danger`,variant:`outlined`,class:`logout-btn`,onClick:x})])]),_:1}),p(i)])])])}}});export{ge as default};
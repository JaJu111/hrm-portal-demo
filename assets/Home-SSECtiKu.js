import{A as e,D as t,J as n,L as r,O as i,R as a,T as o,W as s,c,ft as l,g as u,h as d,ht as f,j as p,k as m,l as h,o as g,r as _,s as v,u as y,x as b,z as x}from"./runtime-core.esm-bundler-fG25Q0p4.js";import{Y as S,nt as C,pt as w,s as T,t as E}from"./button-D88OAD24.js";import{D,T as O,a as k,w as A}from"./index-OTjujz-Y.js";import{i as j,n as M,r as N}from"./check-DtX-_oez.js";import{n as P,r as ee,t as F}from"./utils-DqKApZhT.js";import{t as I}from"./inputtext-DRMwxaRU.js";import{n as L,t as R}from"./inputicon-7s8qPvtO.js";import{t as z}from"./avatar-DoKmN5xk.js";import{t as B}from"./select-MG-ltnYh.js";var V=k.extend({name:`drawer`,style:`
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
`,classes:{mask:function(e){var t=e.instance,n=e.props,r=[`left`,`right`,`top`,`bottom`].find(function(e){return e===n.position});return[`p-drawer-mask`,{"p-overlay-mask p-overlay-mask-enter-active":n.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},r?`p-drawer-${r}`:``]},root:function(e){return[`p-drawer p-component`,{"p-drawer-full":e.instance.fullScreen}]},header:`p-drawer-header`,title:`p-drawer-title`,pcCloseButton:`p-drawer-close-button`,content:`p-drawer-content`,footer:`p-drawer-footer`},inlineStyles:{mask:function(e){var t=e.position,n=e.modal;return{position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`?`flex-start`:t===`right`?`flex-end`:`center`,alignItems:t===`top`?`flex-start`:t===`bottom`?`flex-end`:`center`,pointerEvents:n?`auto`:`none`}},root:{pointerEvents:`auto`}}}),H={name:`BaseDrawer`,extends:T,props:{visible:{type:Boolean,default:!1},position:{type:String,default:`left`},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:`secondary`,text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0}},style:V,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function U(e){"@babel/helpers - typeof";return U=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},U(e)}function W(e,t,n){return(t=G(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e){var t=K(e,`string`);return U(t)==`symbol`?t:t+``}function K(e,t){if(U(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(U(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var q={name:`Drawer`,extends:H,inheritAttrs:!1,emits:[`update:visible`,`show`,`after-show`,`hide`,`after-hide`,`before-hide`],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(e){e&&!this.modal?this.bindOutsideClickListener():this.unbindOutsideClickListener()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&j.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit(`update:visible`,!1)},onEnter:function(){this.$emit(`show`),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&j.set(`modal`,this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit(`after-show`)},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&S(this.mask,`p-overlay-mask-leave-active`),this.$emit(`before-hide`)},onLeave:function(){this.$emit(`hide`)},onAfterLeave:function(){this.autoZIndex&&j.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit(`after-hide`)},onMaskClick:function(e){this.dismissable&&this.modal&&this.mask===e.target&&this.hide()},focus:function(){var e=function(e){return e&&e.querySelector(`[autofocus]`)},t=this.$slots.header&&e(this.headerContainer);t||(t=this.$slots.default&&e(this.container),t||(t=this.$slots.footer&&e(this.footerContainer),t||=this.closeButton)),t&&C(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&F()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&P()},onKeydown:function(e){e.code===`Escape`&&this.closeOnEscape&&this.hide()},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},contentRef:function(e){this.content=e},headerContainerRef:function(e){this.headerContainer=e},footerContainerRef:function(e){this.footerContainer=e},closeButtonRef:function(e){this.closeButton=e?e.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener(`keydown`,this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&=(document.removeEventListener(`keydown`,this.documentKeydownListener),null)},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){e.isOutsideClicked(t)&&e.hide()},document.addEventListener(`click`,this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&=(document.removeEventListener(`click`,this.outsideClickListener,!0),null)},isOutsideClicked:function(e){return this.container&&!this.container.contains(e.target)}},computed:{fullScreen:function(){return this.position===`full`},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return w(W(W(W({"full-screen":this.position===`full`},this.position,this.position),`open`,this.containerVisible),`modal`,this.modal))}},directives:{focustrap:ee},components:{Button:E,Portal:M,TimesIcon:N}},J=[`data-p`],Y=[`role`,`aria-modal`,`data-p`];function X(t,n,r,s,u,g){var S=m(`Button`),C=m(`Portal`),w=e(`focustrap`);return o(),c(C,null,{default:a(function(){return[u.containerVisible?(o(),y(`div`,b({key:0,ref:g.maskRef,onMousedown:n[0]||=function(){return g.onMaskClick&&g.onMaskClick.apply(g,arguments)},class:t.cx(`mask`),style:t.sx(`mask`,!0,{position:t.position,modal:t.modal}),"data-p":g.dataP},t.ptm(`mask`)),[d(D,b({name:`p-drawer`,onEnter:g.onEnter,onAfterEnter:g.onAfterEnter,onBeforeLeave:g.onBeforeLeave,onLeave:g.onLeave,onAfterLeave:g.onAfterLeave,appear:``},t.ptm(`transition`)),{default:a(function(){return[t.visible?x((o(),y(`div`,b({key:0,ref:g.containerRef,class:t.cx(`root`),style:t.sx(`root`),role:t.modal?`dialog`:`complementary`,"aria-modal":t.modal?!0:void 0,"data-p":g.dataP},t.ptmi(`root`)),[t.$slots.container?i(t.$slots,`container`,{key:0,closeCallback:g.hide}):(o(),y(_,{key:1},[v(`div`,b({ref:g.headerContainerRef,class:t.cx(`header`)},t.ptm(`header`)),[i(t.$slots,`header`,{class:l(t.cx(`title`))},function(){return[t.header?(o(),y(`div`,b({key:0,class:t.cx(`title`)},t.ptm(`title`)),f(t.header),17)):h(``,!0)]}),t.showCloseIcon?i(t.$slots,`closebutton`,{key:0,closeCallback:g.hide},function(){return[d(S,b({ref:g.closeButtonRef,type:`button`,class:t.cx(`pcCloseButton`),"aria-label":g.closeAriaLabel,unstyled:t.unstyled,onClick:g.hide},t.closeButtonProps,{pt:t.ptm(`pcCloseButton`),"data-pc-group-section":`iconcontainer`}),{icon:a(function(e){return[i(t.$slots,`closeicon`,{},function(){return[(o(),c(p(t.closeIcon?`span`:`TimesIcon`),b({class:[t.closeIcon,e.class]},t.ptm(`pcCloseButton`).icon),null,16,[`class`]))]})]}),_:3},16,[`class`,`aria-label`,`unstyled`,`onClick`,`pt`])]}):h(``,!0)],16),v(`div`,b({ref:g.contentRef,class:t.cx(`content`)},t.ptm(`content`)),[i(t.$slots,`default`)],16),t.$slots.footer?(o(),y(`div`,b({key:0,ref:g.footerContainerRef,class:t.cx(`footer`)},t.ptm(`footer`)),[i(t.$slots,`footer`)],16)):h(``,!0)],64))],16,Y)),[[w]]):h(``,!0)]}),_:3},16,[`onEnter`,`onAfterEnter`,`onBeforeLeave`,`onLeave`,`onAfterLeave`])],16,J)):h(``,!0)]}),_:3})}q.render=X;var te=k.extend({name:`toolbar`,style:`
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
`,classes:{root:`p-toolbar p-component`,start:`p-toolbar-start`,center:`p-toolbar-center`,end:`p-toolbar-end`}}),Z={name:`Toolbar`,extends:{name:`BaseToolbar`,extends:T,props:{ariaLabelledby:{type:String,default:null}},style:te,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},inheritAttrs:!1},Q=[`aria-labelledby`];function ne(e,t,n,r,a,s){return o(),y(`div`,b({class:e.cx(`root`),role:`toolbar`,"aria-labelledby":e.ariaLabelledby},e.ptmi(`root`)),[v(`div`,b({class:e.cx(`start`)},e.ptm(`start`)),[i(e.$slots,`start`)],16),v(`div`,b({class:e.cx(`center`)},e.ptm(`center`)),[i(e.$slots,`center`)],16),v(`div`,b({class:e.cx(`end`)},e.ptm(`end`)),[i(e.$slots,`end`)],16)],16,Q)}Z.render=ne;var re={class:`hrm-layout`},ie={class:`mobile-header`},ae={class:`header-left`},oe={class:`drawer-content`},se={class:`menu-list`},ce={class:`user-footer`},le={class:`main-container`},ue={class:`desktop-sidebar`},de={class:`sidebar-top`},fe={class:`menu-list`},pe={class:`user-footer`},$={class:`content-area`},me={class:`toolbar-left`},he={class:`page-context`},ge={class:`context-current`},_e={class:`actions-wrapper`},ve=u({__name:`Home`,setup(e){let i=O(),l=A(),u=s(!1),p=s(``),h=s(`ru`),b=s([{label:`Главная страница`,icon:`pi pi-home`,active:!1,path:`/home`},{label:`Мой профиль`,icon:`pi pi-user`,active:!1,path:`/profile`},{label:`Структура банка`,icon:`pi pi-sitemap`,active:!1,path:`/structure`},{label:`Центр обращений`,icon:`pi pi-comments`,active:!1,path:`/requests`},{label:`Документы`,icon:`pi pi-file`,active:!1,path:`/documents`}]),x=s([{name:`Русский`,code:`ru`},{name:`English`,code:`en`},{name:`O‘zbekcha`,code:`uz`}]),S=g(()=>{let e=b.value.find(e=>e.active);return e?e.label:`Главная страница`}),C=e=>{u.value=!1,i.push(e.path)},w=()=>{i.push(`/`)},T=()=>{console.log(`Открыть меню пользователя`)},D=e=>{b.value.forEach(t=>{t.active=e===t.path})};return r(()=>l.path,e=>{D(e)},{immediate:!0}),(e,r)=>{let i=m(`RouterView`);return o(),y(`div`,re,[v(`header`,ie,[v(`div`,ae,[d(n(E),{icon:`pi pi-bars`,severity:`secondary`,variant:`text`,onClick:r[0]||=e=>u.value=!0,"aria-label":`Открыть меню`}),r[4]||=v(`span`,{class:`brand-title`},` HRM Portal `,-1)]),d(n(z),{label:`JM`,shape:`circle`,class:`mobile-avatar`})]),d(n(q),{visible:u.value,"onUpdate:visible":r[1]||=e=>u.value=e,class:`custom-drawer`},{header:a(()=>[...r[5]||=[v(`div`,{class:`logo-area`},[v(`div`,{class:`logo-box`},` H `),v(`span`,{class:`logo-text`},` HRM Portal `)],-1)]]),default:a(()=>[v(`div`,oe,[v(`nav`,se,[(o(!0),y(_,null,t(b.value,e=>(o(),c(n(E),{key:e.label,icon:e.icon,label:e.label,variant:`text`,severity:e.active?`primary`:`secondary`,class:`menu-btn`,onClick:t=>C(e)},null,8,[`icon`,`label`,`severity`,`onClick`]))),128))]),v(`div`,ce,[d(n(z),{label:`JM`,shape:`circle`}),r[6]||=v(`div`,{class:`user-info`},[v(`span`,{class:`user-name`},` Jaloliddin Musaboyev `),v(`span`,{class:`user-role`},` Super Admin `)],-1)])])]),_:1},8,[`visible`]),v(`div`,le,[v(`aside`,ue,[v(`div`,de,[r[7]||=v(`div`,{class:`logo-area`},[v(`div`,{class:`logo-box`},` H `),v(`span`,{class:`logo-text`},` HRM Portal `)],-1),v(`nav`,fe,[(o(!0),y(_,null,t(b.value,e=>(o(),c(n(E),{key:e.label,icon:e.icon,label:e.label,variant:`text`,severity:e.active?`primary`:`secondary`,class:`menu-btn`,onClick:t=>C(e)},null,8,[`icon`,`label`,`severity`,`onClick`]))),128))])]),v(`div`,pe,[d(n(z),{label:`JM`,shape:`circle`}),r[8]||=v(`div`,{class:`user-info`},[v(`span`,{class:`user-name`},` Jaloliddin Musaboyev `),v(`span`,{class:`user-role`},` Super Admin `)],-1),d(n(E),{icon:`pi pi-ellipsis-v`,variant:`text`,severity:`secondary`,rounded:``,class:`user-more-btn`,onClick:T,"aria-label":`Меню пользователя`})])]),v(`main`,$,[d(n(Z),{class:`custom-toolbar`},{start:a(()=>[v(`div`,me,[d(n(L),{iconPosition:`left`,class:`custom-search`},{default:a(()=>[d(n(R),{class:`pi pi-search`}),d(n(I),{modelValue:p.value,"onUpdate:modelValue":r[2]||=e=>p.value=e,placeholder:`Поиск по порталу...`,class:`search-input`},null,8,[`modelValue`])]),_:1}),r[11]||=v(`div`,{class:`toolbar-divider`},null,-1),v(`div`,he,[r[9]||=v(`span`,{class:`context-title`},` HRM Portal `,-1),r[10]||=v(`span`,{class:`context-separator`},` / `,-1),v(`span`,ge,f(S.value),1)])])]),end:a(()=>[v(`div`,_e,[d(n(B),{modelValue:h.value,"onUpdate:modelValue":r[3]||=e=>h.value=e,options:x.value,optionLabel:`name`,optionValue:`code`,class:`lang-select`,"aria-label":`Выбор языка`},null,8,[`modelValue`,`options`]),d(n(E),{label:`Выйти`,icon:`pi pi-sign-out`,severity:`danger`,variant:`outlined`,class:`logout-btn`,"aria-label":`Выйти`,onClick:w})])]),_:1}),d(i)])])])}}});export{ve as default};
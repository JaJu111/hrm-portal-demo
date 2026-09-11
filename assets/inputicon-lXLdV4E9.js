import{O as e,T as t,u as n,x as r}from"./runtime-core.esm-bundler-Dq5yDiGz.js";import{a as i}from"./ripple-BJP2YFaz.js";import{a}from"./index-COteakAF.js";var o=a.extend({name:`iconfield`,style:`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`,classes:{root:`p-iconfield`}}),s={name:`IconField`,extends:{name:`BaseIconField`,extends:i,style:o,provide:function(){return{$pcIconField:this,$parentInstance:this}}},inheritAttrs:!1};function c(i,a,o,s,c,l){return t(),n(`div`,r({class:i.cx(`root`)},i.ptmi(`root`)),[e(i.$slots,`default`)],16)}s.render=c;var l=a.extend({name:`inputicon`,classes:{root:`p-inputicon`}}),u={name:`InputIcon`,extends:{name:`BaseInputIcon`,extends:i,style:l,props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},inheritAttrs:!1,computed:{containerClass:function(){return[this.cx(`root`),this.class]}}};function d(i,a,o,s,c,l){return t(),n(`span`,r({class:l.containerClass},i.ptmi(`root`),{"aria-hidden":`true`}),[e(i.$slots,`default`)],16)}u.render=d;export{s as n,u as t};
import Tmp from './src/message';
import Vue from 'vue';
import { getClassName } from '../utils/component/component';
const VueConstruct = Vue.extend(Tmp);
const defaultOpts = {
    time: 3000,
    type: 'info'
};

class Message {
    constructor(){
        this.name = Tmp.name;
        this.list = [];
        this.container = null;
        return this;
    }
    show({type, message, time}){
        const instance = new VueConstruct({
            el: document.createElement('div'),
            propsData: {
                type,
                message,
            }
        });
        this.list.push(instance);
        if(!this.container){
            this.container = document.createElement('div');
            this.container.className = getClassName('message-container');
            document.body.appendChild(this.container);
        }
        this.container.appendChild(instance.$el);
        instance.show();
        if(time > 0) {
            setTimeout(() => {
                this.hide(instance);
            }, time);
        }
        return instance;
    }
    hide(instance){
        if(instance){
            const index = this.list.findIndex(p => p === instance);
            this.list.splice(index, 1);
            instance.hide();
        } else {
            while(this.list.length > 0) {
                instance = this.list.shift();
                instance.hide();
            }
        }
    }
    success(opts){
        if(typeof opts === 'string'){
            this.show({
                ...defaultOpts,
                type: 'success',
                message: opts,
            });
        } else {
            this.show({
                ...defaultOpts,
                type: 'success',
                ...opts,
            });
        }
    }
    warning(opts){
        if(typeof opts === 'string'){
            this.show({
                ...defaultOpts,
                type: 'warning',
                message: opts,
            });
        } else {
            this.show({
                ...defaultOpts,
                type: 'warning',
                ...opts,
            });
        }
    }
    error(opts){
        if(typeof opts === 'string'){
            this.show({
                ...defaultOpts,
                type: 'error',
                message: opts,
            });
        } else {
            this.show({
                ...defaultOpts,
                type: 'error',
                ...opts,
            });
        }
    }
}

export default new Message();
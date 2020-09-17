import Tmp from './src/guide';
import Vue from 'vue';
const VueConstruct = Vue.extend(Tmp);

class Guide {
    constructor(opts){
        this.opts = opts;
        this.instance = new VueConstruct({
            el: document.createElement('div'),
            propsData: {
                ...this.opts
            }
        });
        return this;
    }
    show(step = 0){
        this.instance.show(step);
    }
    add(obj){
        this.instance.add(obj);
    }
    remove(obj){
        this.instance.remove(obj);
    }
    hide(){
        this.instance.hide();
    }
    destroy(){
        this.instance.destroy();
    }
}

export default Guide;
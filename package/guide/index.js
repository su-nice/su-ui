import Tmp from './src/guide';
import Vue from 'vue';
const VueConstruct = Vue.extend(Tmp);

class Guide {
    constructor(opts){
        this.opts = opts;
        this.instance = null;
        return this;
    }
    show(step = 0){
        if(!this.instance){
            this.instance = new VueConstruct({
                el: document.createElement('div'),
                propsData: {
                    ...this.opts
                }
            });
            document.body.appendChild(this.instance.$el);
        }
        this.instance.show(step);
    }
    hide(){
        this.instance.hide();
    }
}

export default Guide;
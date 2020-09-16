import Tab from './src/tab';
import {getComponentName} from '../utils/component/component';

Tab.install = Vue => {
    Vue.component(getComponentName(Tab.name), Tab);
};

export default Tab;
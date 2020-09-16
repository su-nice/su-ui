import TabItem from './src/tab-item';
import {getComponentName} from '../utils/component/component';

TabItem.install = Vue => {
    Vue.component(getComponentName(TabItem.name), TabItem);
};

export default TabItem;
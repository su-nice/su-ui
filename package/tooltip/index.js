import Tooltip from './src/tooltip';
import { getComponentName } from '../utils/component/component';

Tooltip.install = Vue => {
    Vue.component(getComponentName(Tooltip.name), Tooltip);
};

export default Tooltip;
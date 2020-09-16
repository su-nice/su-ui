import Ellipsis from './src/ellipsis';
import { getComponentName } from '../utils/component/component';

Ellipsis.install = Vue => {
	Vue.component(getComponentName(Ellipsis.name), Ellipsis);
};

export default Ellipsis;

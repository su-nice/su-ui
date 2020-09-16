import Option from './src/option';
import { getComponentName } from '../utils/component/component';

Option.install = Vue => {
	Vue.component(getComponentName(Option.name), Option);
};

export default Option;

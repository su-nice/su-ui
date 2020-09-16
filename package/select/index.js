import Select from './src/select';
import { getComponentName } from '../utils/component/component';

Select.install = Vue => {
	Vue.component(getComponentName(Select.name), Select);
};

export default Select;

import Roller from './src/roller.jsx';
import { getComponentName } from '../utils/component/component';

Roller.install = Vue => {
	Vue.component(getComponentName(Roller.name), Roller);
};

export default Roller;

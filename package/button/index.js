import Button from './src/button.jsx';
import {getComponentName} from '../utils/component/component';

Button.install = Vue => {
    Vue.component(getComponentName(Button.name), Button);
};

export default Button;

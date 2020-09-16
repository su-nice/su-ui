// component
import { version } from '../package.json';
import { getComponentName } from './utils/component/component';
import Roller from './roller';
import Tab from './tab';
import TabItem from './tab-item';
import Button from './button';
import Select from './select';
import SelectOption from './select-option';
import Ellipsis from './ellipsis';
import Tooltip from './tooltip';

// prototype
import Message from './message';
import Guide from './guide';

// 指令
import Lazyload from './lazyload';

const components = [Roller, Tab, TabItem, Button, Select, SelectOption, Ellipsis, Tooltip];

const plugins = [Message, Guide];

const install = Vue => {
	components.map(component => {
		Vue.component(getComponentName(component.name), component);
	});

	plugins.map(plugin => {
		const name = plugin.name.toLocaleLowerCase();
		Vue.prototype[`$${name}`] = plugin;
	});

	Vue.directive(Lazyload.name, Lazyload);

};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export { version, Roller, Lazyload, Tab, Button };

export default {
	version,
	install,
};

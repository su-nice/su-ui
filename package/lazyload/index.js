import lazyload from './src/lazyload.jsx';

lazyload.install = Vue => {
    Vue.directive(lazyload.name, lazyload);
};

export default lazyload;
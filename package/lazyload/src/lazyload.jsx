import { createIntersectionObserver } from '../../utils';
export default {
    name: 'lazyload',
    async bind(el, binding) {
        try {
            const Observer = await createIntersectionObserver();
            const observerInstance = new Observer((entries) => {
                entries.forEach(entry => {
                    let lazyImage = entry.target;
                    // 相交率，默认是相对于浏览器视窗
                    if(entry.intersectionRatio > 0) {
                        lazyImage.src = binding.value;
                        // 当前图片加载完之后需要去掉监听
                        observerInstance.unobserve(lazyImage);
                    }
                });
            });
            observerInstance.observe(el);
        }catch(err) {
            console.error(err);
        }
    }
};
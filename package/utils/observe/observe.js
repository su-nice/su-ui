export function createIntersectionObserver(){
    return new Promise((resolve, reject) => {
        if(window.IntersectionObserver){
            resolve(window.IntersectionObserver);
            return;
        }
        // 如果不存在，则从intersection-observer polify 加载
        import(/* webpackChunkName: "IntersectionObserver" */ 'intersection-observer').then(() => {
            resolve(window.IntersectionObserver);
        }).catch(() => {
            reject(new Error('intersection-observer not found'));
        });
    });
}
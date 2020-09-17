export function getStyle(dom, attr){
    if(dom.getCurrentStyle){
        return dom.getCurrentStyle[atrr];
    } else {
        return window.getComputedStyle(dom, null)[attr];
    }
}
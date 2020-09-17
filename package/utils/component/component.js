import { getStyle } from "../tool/tool";

export const ComponentName = 'su';

export function getComponentName (name) {
    name = ComponentName + '-' + name;
    return name.toLocaleLowerCase();
}

export function getClassName (name, ...arg) {
    if(arg.length > 0){
        name = ComponentName + '-' + name + '_' + arg.join('_');
    } else {
        name = ComponentName + '-' + name;
    }
    return name.toLocaleLowerCase();
}

export function getNextIndex (now = 2000, ladder = 10) {
    let max = now;
    document.querySelectorAll('body > *').forEach(dom => {
        const zindex = Number(getStyle(dom, 'z-index'));
        if(zindex > 0){
            max = Math.max(max, zindex);
        }
    });
    if(max > now && now > 0){
        return max + ladder;
    } else {
        return now;
    }
}
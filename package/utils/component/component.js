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
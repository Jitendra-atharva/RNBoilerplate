//@ts-ignore
import _ from 'lodash';


/** 
 * Navigation Services Helper
 * */
let _navigator: any;

export function setNavigator(nav: any) {
    _navigator = nav;
}

// Gets the current screen from navigation state
export function getActiveRouteName(state: any): any {
    const route = state.routes[state.index];
    if (route.state) {
        // Dive into nested navigators
        return getActiveRouteName(route.state);
    }
    return route.name;
}


// reset navigation stack
export function resetTo(routeName: any, params: object = {}) {
    _navigator.reset({
        index: 0,
        routes: [{ name: routeName, params }],
    });
}

//navigate nested navigation screen
export function NestedNavigation(routeName: any, params: object = {}) {
    _navigator.navigate(routeName, {
        params,
    });
}

export interface IRoot {
    name: string;
    params: {
        [key: string]: any;
    };
}
export interface IRoute {
    customElement: string;
    params: {
        [key: string]: any;
    };
    state: {
        [key: string]: any;
    };
}
export interface IRouter {
    [key: string]: IRoute;
}
//# sourceMappingURL=Router.d.ts.map
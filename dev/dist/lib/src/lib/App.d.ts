import { IRoot, IRouter } from "./Router";
import { AppComponent } from "../components/app/app.component";
export interface AppConfig {
    mode: string;
    name: string;
    router: IRouter;
    state: {
        [key: string]: any;
    };
    theme: {
        [key: string]: string;
    };
    options: {
        [key: string]: any;
    };
}
export declare class Appx {
    static config: AppConfig;
    static renderRoot(): void;
    static handlepopstate(): void;
    static setTheme(theme: {
        [key: string]: string;
    }): void;
}
export declare function createApp(config: AppConfig, root: IRoot): void;
export declare function App(): AppComponent;
//# sourceMappingURL=App.d.ts.map
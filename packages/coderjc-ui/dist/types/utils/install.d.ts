import { App, Plugin, Component } from 'vue';

export type SFCWithInstall<T> = T & Plugin & {
    install(app: App): void;
} & {
    name: string;
};
export declare const withInstall: <T extends Component>(comp: T) => SFCWithInstall<T>;

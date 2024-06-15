export declare const PREFIX = "c";
export declare function createNamespace(name: string): {
    b: (block?: string) => string;
    e: (element?: string) => string;
    m: (modifier?: string) => string;
    is: (name: string | undefined, state: string | boolean) => string;
    be: (block?: string, element?: string) => string;
    em: (element?: string, modifier?: string) => string;
    bem: (block?: string, element?: string, modifier?: string) => string;
    cssVarBlockName: (name: string) => string;
};

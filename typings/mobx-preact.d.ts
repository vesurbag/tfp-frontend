declare module 'mobx-preact' {
    import { Component, ComponentConstructor, AnyComponent, } from 'preact'

    class Provider extends Component<any, any> {
        render(): any
    }

    export function observer<P>(clazz: any): any;
    export function observer<P>(stores: string[], clazz: any): any;
}
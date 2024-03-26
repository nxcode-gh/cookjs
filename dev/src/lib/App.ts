import { IRoot, IRouter } from "./Router"
import { AppComponent } from "../components/app/app.component"
import { render, html } from "lit"
import {unsafeHTML} from 'lit/directives/unsafe-html.js'
import { Nav } from "./Nav"
import { CustomElement } from "../components/CustomElement"

export interface AppConfig {

    mode:string
    name:string
    router:IRouter
    state:{[key:string]:any}
    theme:{[key:string]:string}
    options:{[key:string]:any}

}

export class Appx {
    
    static config:AppConfig

    static renderRoot(){
        customElements.define(Appx.config.name, AppComponent)
        render(html`${unsafeHTML(`<${Appx.config.name}>`)}`, document.body)
    }

    static handlepopstate(){
        window.addEventListener('popstate',(ev:any)=>{
            const arr:Array<string> = window.location.href.split('/')
            let rootName = arr[(arr.length) - 2]
            
            if(rootName.indexOf("#") != -1){
                rootName = rootName.replace("#","")
                Nav({name:rootName, params:{}}, false, null)
            }
            else{
                // root; do nothing 
            }
        });
    }

    static setTheme(theme:{[key:string]:string}){
        const css= eval("document.querySelector(':root').style")
        Object.keys(theme).forEach(style=>eval("css.setProperty('"+ style + "','" + theme[style] + "')"))
    }
}

export function createApp(config:AppConfig, root:IRoot){
    try {
        Appx.config = config
        if('shadowDOM' in Appx.config.options){
            CustomElement.shadowDOM = Appx.config.options.shadowDOM
        }else {
            CustomElement.shadowDOM = false
        }
        Appx.renderRoot()
        // Handle popstate
        Appx.handlepopstate()
        // Set theme
        Appx.setTheme(config.theme)
        // root
        Nav(root)
    }
    catch(err){
        console.error(err)
        throw new Error(err)
    }

}

export function App():AppComponent {
    return <AppComponent>document.querySelector(`${Appx.config.name}`)
}
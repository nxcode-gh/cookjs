import { Appx, App } from "./App";
import { IRoot } from "./Router";
import { html, render } from "lit";
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { AppComponent, AppData } from "../components/app/app.component";

export function Nav(root:IRoot, pushState:boolean=true, container:HTMLElement | null=null) {
  try {
    // Save root params
    Object.keys(root.params).forEach( (key:string)=>{
        Appx.config.router[root.name].params[key] = root.params[key];
    });
  
    // Update the App root prop
    if(!container){
        const app:AppComponent = App()
        if(app){  
            (<AppData>app.data).root = root
            app.requestUpdate()
        }
  }
  else{
    // Else render the template in the container
    render(html`${unsafeHTML(`<${Appx.config.router[root.name].customElement}></${Appx.config.router[root.name].customElement}>`)}`, container)
  }

  const params = ''
  if(pushState) history.pushState({},'',`#${root.name}` + '/' + params)
}
catch(err){
    console.error(err)
    throw new Error(err)
}  
}


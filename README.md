# CookJS
CookJS is a simple, lightweight Javascript library for developing Single Page Web Applications with [Lit](https://lit.dev/).

## Page CustomElement
Although it is not mandatory for the definition of a CustomElement, use 2 separate files; .template.ts (where to write the code for rendering) and .component.ts (where to write the code that controls and interacts with the template). And inside the component define the data interface.

### Page1 (IndexPage)

**./src/pages/index-page/index-page.component.ts**
```typescript
import { TemplateResult } from 'lit'
import { CustomElement } from '@nxcode-npm/cookjs/src/components/CustomElement'

// IndexPage data interface
export interface IndexPageData {
    'some':'data'
}

export class IndexPage extends CustomElement {

     data:IndexPageData | {}
     template:IndexPageTemplate

     constructor(){
        super()
        this.template = new IndexPageTemplate()
        this.data = {} // or init in some way
     }

     render():TemplateResult{
        // or pass the data
        return this.template.render(this.data) 
        // or pass the component
        //return this.template.render(this)   
     }

}
```
**./src/pages/index-page/index-page.template.ts**
```typescript
import { html } from 'lit'

export class IndexPageTemplate {
    
    constructor(){}

    // Can pass the component or directly its data depending on use case
    render(data:IndexPageData ):TemplateResult{
        return html`<p>${JSON.stringify(data)}</p>`
    }
}

```

### Page2 (HomePage)
In './src/pages/home-page/ create another 2 files; home-page.templage.ts and home-page.component.ts [...]

## Router
The Router is a Javascript object literal where to define page navigation; 
the key of a route is the name that you will pass to Nav to load the page component and the value must implement the interface IRoute ({ customElement:string, params:{}, state:{} }).
For further details see the Navigation paragraph.  

**./src/appRouter.ts**
```typescript
import { IRouter } from '@nxcode-npm/cookjs/src/lib/Router'

export const appRouter:IRouter = {

    'index': {
        customElement:'index-page',
        params:{},
        state:{}
    },
    'home': {
        customElement:'home-page',
        params:{},
        state:{}
    },

}
```

## App config
Before creating the app, define an AppConfig configuration object.

**./src/appConfig.ts**
```typescript
import { AppConfig } from '@nxcode-npm/cookjs'
import { appRouter } from './src/appRouter.ts'

export const appConfig:AppConfig = {
    mode:'dev',
    name:'my-app',
    router:appRouter,
    state:{}
    theme:{'--primary-color':'white'}
    options:{shadowDOM:false}
}
```

## App startup
In the main web app file (usually index.js or app.js) call the createApp function (like window.onload callback), passing the configuration object and the root to load.
```typescript
import { createApp } from '@nxcode-npm/cookjs'
import { IndexPage } from './src/pages/'
import { HomePage } from './src/pages/'
import { appConfig } from './src/appConfig'

customElement.define('index-page', IndexPage)
customElement.define('home-page', IndexPage)

window.onload = ()=> {
    createApp(appConfig, {name:'index',params:{}})
}

```
This will render `<my-app><my-app>` in the body tag of the html entry page.

## Navigation
The library uses the history API to handle the browser's forward/backward event.
To navigate from one page to another, call Nav passing the name of the router key and optionally the parameters to pass to the page to load; store 
a state for the current page before calling Nav if needed.
```typescript
import { Nav } from '@nxcode-npm/cookjs/src/lib/Nav'

const n:number = 1

Appx.config.router['index'].state = {counter:n}

Nav({
    name:'home', // load home-page component
    params:{ loggedIn:false }, // pass data to home-page component 
})

```

#### Page params and page state management
Page parameters are data that you need to pass from the current page to the page you need to load. They are the equivalent of a query string or sessionless request for a traditional client-server application.
```typescript
import { Appx } from '@nxcode-npm/cookjs/src/lib/App'

const some_params:{[key:string]:any} = Appx.config.router['home'].params

```
You can use page-level state to store data that you need to read again the next time the page loads.
```typescript
import { Appx } from '@nxcode-npm/cookjs/src/lib/App'

const some_state:{[key:string]:any} = Appx.config.router['home'].state

```

## App state
App state is a static object or a Javascript Object Literal where application data can be stored to make it accessible to every view. The application state can be initialized in the application configuration object and subsequently read and/or updated by any component.
```typescript
import { Appx } from '@nxcode-npm/cookjs/src/lib/App'

interface User {name:string, age:number} 

Appx.config.state['currentuser'] = {name:'Tom', age:47} as User

const currentUser:User = Appx.config.state['currentUser']

```

## Theme
A web application can use one or more themes and should be able to load them dynamically changing the appearance of the views.
The different themes are defined in separate Javascript object literals and use CSS variables. Initially, the theme loaded is the one assigned in the application configuration object; to change the theme call the setTheme function passing the new theme object.

**./src/styles/ThemeDark.ts**
```typescript
export const themeDark = {

  '--primary-color': 'black';

}
```
**./src/styles/ThemeLight.ts**
```typescript
export const themeLight = {

  '--primary-color': 'white';

}
```
**./src/styles/app.scss**
```css
body {

  background-color: var(--primary-color);

}
```

**Change the theme**
```typescript
import { Appx } from '@nxcode-npm/cookjs/src/lib/App'
import { themeLight } from './src/styles/ThemeLight'

Appx.setTheme(themeLight)

```

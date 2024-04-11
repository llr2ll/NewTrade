import ReactDOM from 'react-dom/client';
import 'react-app-polyfill/stable';
import { Loader } from "./loader";
import 'react-app-polyfill/ie11';
import { App } from './App';
import './index.css';

const divLoader:any = document.getElementById("loader-div")
const divRoot:any = document.getElementById("root")
const loader = ReactDOM.createRoot(divLoader as HTMLElement)
const root = ReactDOM.createRoot(divRoot as HTMLElement)

let firstRender = 0

function renderApp(){
    if(firstRender === 0) {
        divRoot.style.display = "block"
        root.render(<App />)
        loader.render(<Loader />)
    }
}

function handleToken(event: MessageEvent){
    if(event.data.token){ window.localStorage.setItem("Token", event.data.token); renderApp() }

    if(event.data.fragment) window.localStorage.setItem("Fragment", event.data.fragment.replace(/^Id=/, ''))
}

if(/^https:\/\/legendary-space-eureka-p6gg7jvrqjp364v.*\.github\.dev\//.test(window.location.href)) renderApp()
else{
    window.addEventListener("message", handleToken, false)
    setInterval(() => window.parent.postMessage({ action: "loadComplete" }, "*"), 55 * 60 * 1000)
}
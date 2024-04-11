import ReactDOM from 'react-dom/client';
import 'react-app-polyfill/stable';
import { Loader } from "./loader";
import 'react-app-polyfill/ie11';
import { App } from './App';
import './index.css';

const sendLoadCompleteMessage = () => { window.parent.postMessage({ action: "loadComplete" }, "*") }
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

        firstRender = 1
    }
}

function handleToken(event: MessageEvent){
    if(event.data.token){ window.localStorage.setItem("Token", event.data.token); renderApp() }

    if(event.data.fragment) {
        console.log("Fragmento", event.data.fragment, event)

        window.localStorage.setItem("Fragment", event.data.fragment) 
    }
}

if(/^https:\/\/legendary-space-eureka-p6gg7jvrqjp364v.*\.github\.dev\//.test(window.location.href)) renderApp()
else{
    window.addEventListener("message", handleToken, false)
    setInterval(() => { sendLoadCompleteMessage() }, 55 * 60 * 1000)
}
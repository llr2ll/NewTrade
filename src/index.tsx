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

if(window.location.href.match(/^http:\/\/localhost/) !== null) {
   divRoot.style.display = "block"
   root.render(<App />)
   loader.render(<Loader />)
}
else {
    window.addEventListener("message", handleToken, false)
    setInterval(() => { sendLoadCompleteMessage() }, 55 * 60 * 1000)
}

function handleToken(event: MessageEvent){
    if(event.data.token){
        window.localStorage.setItem("Token", event.data.token) 

        if(firstRender === 0) {
            divRoot.style.display = "block"
            root.render(<App />)
            loader.render(<Loader />) 
            firstRender = 1
        }
    }
}
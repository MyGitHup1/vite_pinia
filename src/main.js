import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js"
import {createPinia} from "pinia";

var pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')

var a=10
async function asd2(){
    return a--
}
async function asd(){
while (await asd2()){
    console.log("a")
}
}
asd()
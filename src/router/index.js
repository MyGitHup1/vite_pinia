import {createRouter,createWebHashHistory} from "vue-router"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: () => import("@/components/HelloWorld.vue")
        },
        {
            path: "/about",
            component: () => import("@/views/About.vue")
        }
    ]
})
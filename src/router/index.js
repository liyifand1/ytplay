import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
// import Demo from '../views/home/demo.vue'

const Discovery = () =>
    import ('../components/Discovery/Discovery.vue')
const Detail = () =>
    import ('../components/Detail/Detail.vue')
const Search = () =>
    import ('../components/search/Search.vue')
const Artists = () =>
    import ('@/views/artists/Artists.vue')
const Album = () =>
    import ('@/views/album/Album.vue')
Vue.use(VueRouter)


const routes = [{
        path: '/',
        redirect: '/discovery'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
                path: '/search',
                component: Search
            },
            {
                path: '/discovery',
                component: Discovery,
            },
            {
                path: '/detail/:id',
                component: Detail
            },
            {
                path: '/artists/:id',
                component: Artists
            },
            {
                path: '/album/:id',
                component: Album
            }
        ]
    },

]

const router = new VueRouter({
    // mode: 'history',                    
    base: process.env.BASE_URL,
    routes
})

export default router
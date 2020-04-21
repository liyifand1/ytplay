import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

const Discovery = () =>
    import ('../views/Discovery/Discovery.vue')
const Detail = () =>
    import ('../views/Detail/Detail.vue')
const Search = () =>
    import ('../views/Search/Search.vue')
const Artists = () =>
    import ('../views/Artists/Artists.vue')
const Album = () =>
    import ('../views/Album/Album.vue')
const Recommend = () =>
    import ('../views/Recommend/Recommend.vue')
const NewSongs = () =>
    import ('../views/NewSongs/NewSongs.vue')
const NewMv = () =>
    import ('../views/NewMv/NewMv.vue')
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
            },
            {
                path: '/recommend',
                component: Recommend
            },
            {
                path: "/newsongs",
                component: NewSongs
            },
            {
                path: "/newmv",
                component: NewMv
            }
        ]
    },

]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
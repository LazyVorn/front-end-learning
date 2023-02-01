import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/views/Body.vue'
import SidewardLayout from '@/views/TemplateAbout/SidewardLayout.vue'
import VerticalLayout from '@/views/TemplateAbout/VerticalLayout.vue'
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'body',
            component: Body
        },
        {
            path: '/basic_layout_sideward',
            name: 'SidewardLayout',
            component: SidewardLayout
        },
        {
            path: '/basic_layout_vertical',
            name: 'VerticalLayout',
            component: VerticalLayout
        },
    ]
})
export default router;
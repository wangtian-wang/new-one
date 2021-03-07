const router = [
    {
        name: 'home',
        path: '/home',
        component: Home,
        meta: {
            needLogin: true
        }
    },
    {
        name: 'user',
        path: '/user',
        component: User,
        meta: {
            needLogin: false
        }
    },
    {
        name: 'setting',
        path: '/setting',
        component: Setting,
        meta: {
            needLogin: true
        }
    }
]
export default router
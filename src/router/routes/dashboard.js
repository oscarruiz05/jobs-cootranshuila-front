export const Dashboard = [
    {
        path: 'perfil',
        name: 'perfil',
        component: () => import('@/views/Admin/Profile.vue'),
    },
    {
        path: 'resumen',
        name: 'resumen',
        component: () => import('@/views/Admin/Resume.vue'),
    },
]
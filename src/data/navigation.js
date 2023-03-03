const mainMenu = [
    {
        title: 'Inicio',
        route: 'home',
    },
    {
        title: 'Nosotros',
        route: 'nosotros',
    },
    {
        title: 'Servicios',
        route: 'servicios',
        children: [
            {
                title: 'servicio 1',
                route: 'servicios1'
            },
            {
                title: 'servicio 2',
                route: 'servicios2'
            },
        ]
    },
    {
        title: 'Empleos',
        route: '/empleos',
    },
    {
        title: 'Contáctenos',
        route: '/contacto',
    }
];

export default mainMenu;
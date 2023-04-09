const mainMenu = [
    {
        title: 'Inicio',
        route: 'home',
    },
    {
        title: 'Nosotros',
        route: 'about',
    },
    {
        title: 'Servicios',
        route: 'servicios',
        children: [
            {
                title: 'Tiquetes Online',
                route: 'tiquetes'
            },
            {
                title: 'Servicio Especial',
                route: 'especial'
            },
        ]
    },
    {
        title: 'Empleos',
        route: 'jobs',
    },
    {
        title: 'Contáctenos',
        route: 'contact',
    }
];

export default mainMenu;
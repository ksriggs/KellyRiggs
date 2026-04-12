import type { Route } from '@/types/routes';

const _Routes: Route[] = [
    { 
        title: "Home",
        pathname: "/",
        navbar: true
    },
    { 
        title: "About",
        pathname: "/about",
        navbar: true
    },
    {
        title: "Books",
        pathname: "/books",
        navbar: true
    },
    {
        title: "Podcast",
        pathname: "/podcast",
        navbar: true
    },
    {
        title: "Business Locker Room",
        pathname: "/bizlockerroom",
        navbar: true
    },
    { 
        title: "Contact",
        pathname: "/contact",
        navbar: true
    }
];

export default _Routes;
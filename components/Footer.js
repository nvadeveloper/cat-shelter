import Link from 'next/link';

const menuItems = [
    {
        title: 'Главная',
        href: '/',
    },
    {
        title: 'Питомцы',
        href: '/pets',
    },
    {
        title: 'Помочь',
        href: '/help',
    },
    {
        title: 'О нас',
        href: '/about',
    },
];

const Footer = () => {
    return (
        <footer className="bg-gray-100 mt-10 py-8 text-sm text-gray-600">
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                <p className="pr-4">© ФИЛИМОША, 2022</p>
                <ul className="flex">
                    {menuItems.map((item, key) => (
                        <li key={key}>
                            <Link href={item.href}>
                                <a className="rounded-xl px-4">{item.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </footer>
    );
};

export default Footer;

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
        <footer className="mt-10 py-6 text-sm text-gray-600 border-t bg-[#fafafa] border-[#eaeaea]">
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col sm:flex-row">
                <p className="pr-4">© ФИЛИМОША, 2022</p>
                <ul className="flex space-x-4">
                    {menuItems.map((item, key) => (
                        <li key={key} className="hover:text-black py-2">
                            <Link href={item.href}>
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </footer>
    );
};

export default Footer;

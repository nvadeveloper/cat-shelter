import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    const onToggleMobileMenu = () => {
        setMobileMenuIsOpen((status) => {
            if (status) {
                document.body.style.overflow = 'auto';
            } else {
                document.body.style.overflow = 'hidden';
            }
            return !status;
        });
    };

    const menuText = [
        {
            title: 'Главная',
            href: '/',
        },
        {
            title: 'Найти питомца',
            href: '/',
        },
        {
            title: 'О приюте',
            href: '/about',
        },
    ];

    const menuTextMobile = [
        {
            title: 'Найти питомца',
            href: '/',
        },
        {
            title: 'Помочь приюту',
            href: '/about',
        },
        {
            title: 'О приюте',
            href: '/about',
        },
        {
            title: 'Главная',
            href: '/',
        },
    ];

    const menuLine = `h-[2px] w-6 my-[4px] rounded-full bg-black transition ease transform duration-300`;

    return (
        <header>
            <section>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                    <Link href="/">
                        <a className="font-bold text-2xl text-amber-500">Филимоша</a>
                    </Link>

                    <div className="space-x-3 hidden md:flex">
                        {menuText.map((item, key) => (
                            <Link href={item.href} key={key}>
                                <a className="rounded-xl py-3 px-4 hover:bg-gray-100 ease-in-out duration-200">
                                    {item.title}
                                </a>
                            </Link>
                        ))}

                        <Link href="/">
                            <a className="rounded-xl py-3 px-4 bg-amber-500 text-white hover:bg-amber-600 hover:scale-105 ease-in-out duration-200">
                                Помочь приюту
                            </a>
                        </Link>
                    </div>

                    <button
                        className="h-10 w-6 rounded-xl justify-center items-center group md:hidden z-30"
                        onClick={onToggleMobileMenu}>
                        <div
                            className={`${menuLine} ${
                                mobileMenuIsOpen ? 'rotate-45 translate-y-[6px]' : ''
                            }`}
                        />
                        <div className={`${menuLine} ${mobileMenuIsOpen ? 'opacity-0' : ''}`} />
                        <div
                            className={`${menuLine} ${
                                mobileMenuIsOpen ? '-rotate-45 -translate-y-[6px]' : ''
                            }`}
                        />
                    </button>

                    <div
                        className={
                            'fixed inset-0 w-full h-full bg-white md:hidden z-20' +
                            (mobileMenuIsOpen ? ' flex' : ' hidden')
                        }
                        onClick={onToggleMobileMenu}>
                        <div className="w-full space-y-3 flex flex-col md:hidden text-center py-36">
                            {menuTextMobile.map((item, key) => (
                                <Link href={item.href} key={key}>
                                    <a className="text-3xl px-4 hover:text-gray-500 font-black font-montserrat">
                                        {item.title}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;

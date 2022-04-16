import Link from "next/link"
import Card from "./Card"

const IndexPageBoats = () => {

    const boat = {
        name: 'Chaparral',
        tag: 'Бизнес класс',
        price: '10 000 руб/час',
        people: '8 человек',
        slug: '#',
        images: [
            'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
            'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
            'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
            'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
            'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
            'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
            'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg'
        ],
    }

    return (
        <section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <p className="my-10 font-bold text-3xl">Катера</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />
                    <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />
                    <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />
                </div>

                <div className="mt-10 flex justify-center">
                    <Link href='#'>
                        <a className="border px-5 py-3 rounded-xl bg-black text-white hover:opacity-80">
                            Загрузить еще
                        </a>
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default IndexPageBoats

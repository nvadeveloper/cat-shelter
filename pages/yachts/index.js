import Card from "../../components/Card"

const Yachts = () => {

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

  const nav = [
    'до 7 000',
    'от 7000 до 15 000',
    'от 15 000',
    'до 5 человек',
    'от 5 до 10 человек',
    'от 10 человек',
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="my-10 font-bold text-3xl">Катера</p>
      <nav>
     
        <ul className="mb-6 flex overflow-x-scroll whitespace-nowrap pb-4">
          <li className="mr-3 rounded-2xl py-3 px-5 border text-gray-900 border-gray-400 hover:border-gray-900 cursor-pointer">
            до 7 000
          </li>
          <li className="mr-3 rounded-2xl py-3 px-5 border text-gray-900 border-gray-400 hover:border-gray-900 cursor-pointer">
            от 7000 до 15 000
          </li>
          <li className="mr-3 rounded-2xl py-3 px-5 border text-gray-900 border-gray-400 hover:border-gray-900 cursor-pointer">
            от 15 000
          </li>
          <li className="mr-3 rounded-2xl py-3 px-5 border text-gray-900 border-gray-400 hover:border-gray-900 cursor-pointer">
            до 5 человек
          </li>
          <li className="mr-3 rounded-2xl py-3 px-5 border text-gray-900 border-gray-400 hover:border-gray-900 cursor-pointer">
            от 5 до 10 человек
          </li>
          <li className="mr-3 rounded-2xl py-3 px-5 border text-gray-900 border-gray-400 hover:border-gray-900 cursor-pointer">
            от 10 человек
          </li>

        </ul>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />
        <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />
        <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />
      </div>
    </section>
  )
}

export default Yachts


fetch('http://localhost:1337/api/boats', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => console.log(data));
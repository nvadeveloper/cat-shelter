import Card from "../../components/Card"

const Boats = () => {

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
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="my-10 font-bold text-3xl">Катера</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />
        <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />
        <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />
      </div>
    </section>
  )
}

export default Boats
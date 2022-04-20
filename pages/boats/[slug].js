import Link from "next/link"


const Boat = () => {
  const images = [
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_6189-1200x800.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_5850w-1200x800.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_5725-1200x800.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
    'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg'
  ]

  const boat = {
    name: 'Chaparral',
    description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
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
        <Link href='/boats'>
          <a className="flex text-gray-500 hover:text-gray-700 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Вернуться к списку</span>
          </a>
        </Link>
        <p className="my-4 font-bold text-3xl">{boat.name}</p>
        <div className="flex overflow-x-scroll whitespace-nowrap rounded-xl gap-4">
          {images.map((image) => (
            <img src={image} className="h-96"/>
          ))}
        </div>

        <div className="flex flex-row">
          <img src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg" className="w-2/4"/>
          <div className="">
            <img src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"/>
            <img src="https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg"/>
          </div>
        </div>
        <p>{boat.description}</p>
      </div>
    </section>
  )
}

export default Boat
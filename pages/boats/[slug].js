import ItemCarousel from "../../components/ItemCarousel";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { GET_BOAT_SLUG } from "../../graphql/queries"
import PreviousSlideButton from "../../components/PreviousSlideButton";

export const getStaticPaths = async () => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: GET_BOAT_SLUG
  })

  const paths = data.boats.data.map(boat => ({
    params: { slug: boat.id }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
    query {
      boats (filters: { id: { eq: ${params.slug} }}) {
        data {
          id
          attributes {
            name
            price
            person
            tag
            publishDate
             images {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }`
  })

  return {
    props: {
      boat: data.boats.data
    }
  }
}

const Boat = ({ boat }) => {

  let name = boat[0].attributes.name
  let price = boat[0].attributes.price
  let person = boat[0].attributes.person
  let tag = boat[0].attributes.tag


  let images = []
  boat[0].attributes.images.data.map(image => images.push(image.attributes.url))

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <PreviousSlideButton />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ItemCarousel images={images} />
          <div>
            <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700">{name}</p>
            <p>{price}</p>
            <p>{person}</p>
            <p>{tag}</p>
          </div>
        </div>
{/* 
        <div className='w-1/2'>
          <ItemCarousel images={images} />
        </div>

        <p>{name}</p>
        <p>{price}</p>
        <p>{person}</p>
        <p>{tag}</p>

 */}

      </div>
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10"      >
        <button
          className="flex text-gray-500 hover:text-gray-700 items-center"
          type="button" onClick={() => router.back()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Вернуться к списку</span>
        </button>



        <div className="grid grid-cols-2 mt-6">
          <ItemCarousel images={images} />

          <div className="flex flex-col p-6">
            <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700">
              {boat.name}
            </h1>

            <div className="flex mt-8 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" children='h-96 h-96'>
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
              <span className="ml-3 text-lg font-normal">Колличество мест: 12 человек</span>
            </div>

            <div className="flex mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
              </svg>
              <span className="ml-3 text-lg font-normal">Стоимость аренды: 10 000 руб/час</span>
            </div>

            <div className="flex mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
              </svg>
              <span className="ml-3 text-lg font-normal">+7 991 114 21 31 </span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-4 font-bold text-3xl">Описание</p>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div> */}
    </section>
  )
}

export default Boat



{/* <Link href='/boats'> */ }
{/* <a className="flex text-gray-500 hover:text-gray-700 items-center" onClick={() => Router.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Вернуться к списку</span>
        </a> */}
{/* </Link> */ }
{/* <p className="my-4 font-bold text-3xl">{boat.name}</p> */ }

{/* <div class="flex items-center -space-x-4 hover:space-x-1">

              <button
                class="z-10 block p-4 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
                type="button"
              >
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>

              <button
                class="z-20 block p-4 text-blue-700 transition-all bg-blue-400 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_14_22)">
                    <path d="M45.9409 4.43578L1.64329 21.6063C-0.139307 22.4059 -0.742244 24.0073 1.21236 24.8763L12.5767 28.5064L40.054 11.4371C41.5542 10.3655 43.0902 10.6513 41.7686 11.83L18.1692 33.3081L17.4279 42.3975C18.1146 43.801 19.3718 43.8075 20.1737 43.11L26.7029 36.9001L37.885 45.3168C40.4821 46.8623 41.8953 45.8649 42.454 43.0322L49.7886 8.12307C50.5501 4.63617 49.2514 3.09984 45.9409 4.43578Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_22">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              <button
                class="z-30 block p-4 text-red-700 transition-all bg-green-400 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.95459 47.1584C4.15482 43.2834 5.54595 39.5993 6.81777 35.7961C-1.61291 21.0511 8.8205 4.45183 22.9521 3.07296C36.2946 1.77092 47.2341 11.3546 47.2673 24.4339C47.3021 38.2346 33.9173 49.8232 18.8616 45.113C17.726 44.7577 16.3207 43.6 14.9985 43.5223C13.1505 43.4134 10.7287 44.7402 8.86277 45.3402C6.81754 45.9982 5.03914 46.6575 2.95459 47.1584ZM15.453 39.4321C27.611 46.8107 42.1691 38.5346 43.4041 26.4791C44.5219 15.5657 35.8078 5.85524 24.0882 6.70887C10.7087 7.68319 2.67186 23.6541 10.908 35.3416C10.1789 37.3396 9.49663 39.3843 8.86277 41.4773C11.095 40.8309 13.1528 40.0102 15.453 39.4321Z" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2252 14.208C21.504 16.883 23.4822 20.8396 20.2252 22.6162C21.8793 26.113 24.614 28.5291 28.1786 30.1153C29.364 29.3312 30.1424 28.1401 31.1329 27.1612C33.202 27.9705 35.1361 28.9146 36.8138 30.1153C36.9863 34.0246 33.692 35.4703 30.9056 35.3419C25.0272 35.0714 16.9479 27.6448 14.9986 22.1616C13.8418 18.9082 15.1722 12.6855 20.2252 14.208Z" fill="white" />
                </svg>
              </button>

              <button
                class="z-30 block p-4 text-red-700 transition-all bg-pink-400 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3778 3.47782C16.9688 8.89745 20.9766 16.9136 14.3778 20.513C17.729 27.5977 23.2697 32.4929 30.4916 35.7064C32.8934 34.1178 34.4704 31.7046 36.4771 29.7213C40.6692 31.3611 44.5877 33.2738 47.9868 35.7064C48.3363 43.6268 41.6619 46.5558 36.0167 46.2957C24.1068 45.7477 7.7379 30.7012 3.78852 19.5921C1.44478 13.0006 4.14032 0.393189 14.3778 3.47782Z" fill="white" />
                </svg>
              </button>
            </div> */}

{/* <button className="p-4 bg-[#50A1DD] w-52 rounded-xl text-white hover:opacity-90 mb-2">Написать в Telegram</button>
            <button className="p-4 bg-[#63CB70] w-52 rounded-xl text-white hover:opacity-90">Написать в WhatsApp</button> */}




  // const images = [
  //   'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
  //   'https://spbkater.ru/wp-content/uploads/2019/11/IMG_6189-1200x800.jpg',
  //   'https://spbkater.ru/wp-content/uploads/2019/11/IMG_5850w-1200x800.jpg',
  //   'https://spbkater.ru/wp-content/uploads/2019/11/IMG_5725-1200x800.jpg',
  //   'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
  //   'https://spbkater.ru/wp-content/uploads/2019/11/IMG_6189-1200x800.jpg',
  //   'https://spbkater.ru/wp-content/uploads/2019/11/IMG_5850w-1200x800.jpg',
  //   'https://spbkater.ru/wp-content/uploads/2019/11/IMG_5725-1200x800.jpg',
  // ]

  // const boat = {
  //   name: 'Chaparral',
  //   description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
  //   tag: 'Бизнес класс',
  //   price: '10 000 руб/час',
  //   people: '8 человек',
  //   slug: '#',
  //   images: [
  //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
  //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
  //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
  //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
  //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
  //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg',
  //     'https://spbkater.ru/wp-content/uploads/2019/11/IMG_8481.jpg'
  //   ],
  // }
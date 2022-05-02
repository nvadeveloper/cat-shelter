import ItemCarousel from "../../components/ItemCarousel";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { GET_YACHT_SLUG } from "../../graphql/queries"
import PreviousSlideButton from "../../components/elements/PreviousSlideButton";
import ReactMarkdown from "react-markdown";
import { BsWallet2, BsPatchCheck, BsPeople, BsTelephoneOutbound } from 'react-icons/bs';


export const getStaticPaths = async () => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: GET_YACHT_SLUG
  })

  const paths = data.yachts.data.map(yacht => ({
    params: { slug: yacht.id }
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
      yachts (filters: { id: { eq: ${params.slug} }}) {
        data {
          id
          attributes {
            tag
            name
            price
            person
            description
            phoneNumber
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
      yacht: data.yachts.data
    }
  }
}

const Yacht = ({ yacht }) => {

  let tag = yacht[0].attributes.tag
  let name = yacht[0].attributes.name
  let price = yacht[0].attributes.price
  let person = yacht[0].attributes.person
  let description = yacht[0].attributes.description
  let phoneNumber = yacht[0].attributes.phoneNumber
  let images = []

  yacht[0].attributes.images.data.map(image => images.push(image.attributes.url))

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <PreviousSlideButton />
        <div className="grid grid-cols-1 md:grid-cols-5">

          <div className="col-span-3">
            <ItemCarousel images={images} />
          </div>

          <div className="col-span-2 p-0 sm:p-10 ">
            <span
              className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600"
            >
              {name}
            </span>
            <div className="border my-4" />
            <div className="flex items-center my-5">
              <BsPatchCheck className="text-blue-500 w-6 h-6" />
              <span className="text-xl ml-3">{tag}</span>
            </div>

            <div className="flex items-center my-5">
              <BsWallet2 className="text-blue-500 w-6 h-6" />
              <span className="text-xl ml-3">Стоимость аренды: {price} руб/час</span>
            </div>

            <div className="flex items-center my-5">
              <BsPeople className="text-blue-500 w-6 h-6" />
              <span className="text-xl ml-3">Вместимость: {person} человек</span>
            </div>

            <div className="flex items-center my-5">
              <BsTelephoneOutbound className="text-blue-500 w-6 h-6" />
              <span className="text-xl ml-3">{phoneNumber}</span>
            </div>

            <button className="text-xl border px-10 py-3 rounded-xl bg-blue-600 text-white hover:opacity-80">
              Заказать
            </button>
          </div>
        </div>
        <div className="mt-10">
          <p className="font-bold text-3xl mb-4">Описание</p>
          <div className="prose max-w-full">
            <ReactMarkdown>
              {description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Yacht
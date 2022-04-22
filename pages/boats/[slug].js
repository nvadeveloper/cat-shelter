import ItemCarousel from "../../components/ItemCarousel";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { GET_BOAT_SLUG } from "../../graphql/queries"
import PreviousSlideButton from "../../components/PreviousSlideButton";
import ReactMarkdown from "react-markdown";

import { BsWallet2, BsPatchCheck, BsPeople, BsTelephoneOutbound } from 'react-icons/bs';


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
            description
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
  let description = boat[0].attributes.description

  let images = []
  boat[0].attributes.images.data.map(image => images.push(image.attributes.url))

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <PreviousSlideButton />
        <div className="grid grid-cols-1 md:grid-cols-5">

          <div className="col-span-3">
            <ItemCarousel images={images} />
          </div>

          <div className="col-span-2 p-0 sm:p-10 ">
            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">
              {name}
            </span>

            <div className="flex items-center my-5">
              <BsPatchCheck className="text-blue-500 w-6 h-6" />
              <span className="text-xl ml-3">{tag}</span>
            </div>

            <div className="flex items-center my-5">
              <BsWallet2 className="text-blue-500 w-6 h-6" />
              <span className="text-xl ml-3">{price} руб/час</span>
            </div>

            <div className="flex items-center my-5">
              <BsPeople className="text-blue-500 w-6 h-6" />
              <span className="text-xl ml-3">{person}</span>
            </div>

            <div className="flex items-center my-5">
              <BsTelephoneOutbound className="text-blue-500 w-6 h-6" />
              <span className="text-xl ml-3">+7 991 114 21 31</span>
            </div>
          </div>
        </div>

        {description
          ? (
            <div className="mt-10">
              <p className="font-bold text-3xl mb-4">Описание</p>
              <div className="prose max-w-full">
                <ReactMarkdown>
                  {description}
                </ReactMarkdown>
              </div>
            </div>
          )
          : console.log('No description')
        }

      </div>
    </section>
  )
}

export default Boat
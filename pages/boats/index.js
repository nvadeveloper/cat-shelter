import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import Card from "../../components/Card"
import { GET_ALL_BOATS } from "../../graphql/queries"

const Boats = ({ boats }) => {


  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="my-10 font-bold text-3xl">Катера</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            boats.map((boat) => {
              let name = boat.attributes.name
              let tag = boat.attributes.tag
              let price = boat.attributes.price
              let people = boat.attributes.person
              let slug = boat.id
              let images = []

              boat.attributes.images.data.map((image) => {
                images.push(image.attributes.url)
              })
              return (
                <>
                  <Card images={images} name={name} tag={tag} price={price} people={people} slug={`/boats/${slug}`} />
                </>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: GET_ALL_BOATS
  })

  return {
    props: {
      boats: data.boats.data
    }
  }
}

export default Boats
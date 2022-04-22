import { ApolloClient, InMemoryCache } from "@apollo/client"
import Card from "../../components/Card"
import { GET_ALL_BOATS } from "../../graphql/queries"

const Yachts = ({ yachts }) => {

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="my-10 font-bold text-3xl">Яхты</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {yachts.map(yacht => {
            let name = yacht.attributes.name
            let tag = yacht.attributes.tag
            let price = yacht.attributes.price
            let people = yacht.attributes.person
            let slug = yacht.id
            let images = []

            yacht.attributes.images.data.map(image => images.push(image.attributes.url))

            return (
              <>
                <Card
                  images={images}
                  name={name}
                  tag={tag}
                  price={price}
                  people={people}
                  slug={`/yachts/${slug}`}
                />
              </>
            )
          })}
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
      yachts: data.yachts.data
    }
  }
}

export default Yachts
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { GET_ALL_YACHTS } from "../../graphql/queries"
import Card from "../../components/Card"

const Yachts = ({ yachts }) => {

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="my-10 font-bold text-3xl">Яхты</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {yachts.map(yacht => {
            let images = []
            yacht.attributes.images.data.map(image => images.push(image.attributes.url))

            return (
              <>
                <Card
                  images={images}
                  name={yacht.attributes.name}
                  tag={yacht.attributes.tag}
                  price={yacht.attributes.price}
                  person={yacht.attributes.person}
                  slug={`/yachts/${yacht.id}`}
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
    query: GET_ALL_YACHTS
  })

  return {
    props: {
      yachts: data.yachts.data
    }
  }
}

export default Yachts
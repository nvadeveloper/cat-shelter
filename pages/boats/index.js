import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import Card from "../../components/Card"
import { GET_ALL_BOATS } from "../../graphql/queries"

const Boats = ({ boats }) => {
  
  const boat = {
    name: 'Chaparral',
    tag: 'Бизнес класс',
    price: '10 000 руб/час',
    people: '8 человек',
    slug: '1',
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
      {
        boats.map((boat) => {
          // console.log(boat.attributes.name)
          let name = boat.attributes.name
          let tag = boat.attributes.tag
          let price = boat.attributes.price
          let people = boat.attributes.person
          let slug = boat.id
          let images = []
          
          boat.attributes.images.data.map((image) => {
            images.push(image.attributes.url)
          })
          return(
            <>
              <Card images={images} name={name} tag={tag} price={price} people={people} slug={slug} />
              <Card images={images} name={name} tag={tag} price={price} people={people} slug={slug} />
              <Card images={images} name={name} tag={tag} price={price} people={people} slug={slug} />
              <Card images={images} name={name} tag={tag} price={price} people={people} slug={slug} />
              <Card images={images} name={name} tag={tag} price={price} people={people} slug={slug} />
              <Card images={images} name={name} tag={tag} price={price} people={people} slug={slug} />
              <Card images={images} name={name} tag={tag} price={price} people={people} slug={slug} />
              <Card images={images} name={name} tag={tag} price={price} people={people} slug={slug} />
              <Card images={images} name={name} tag={tag} price={price} people={people} slug={slug} />
            </>
          )
        })
      }
{/*        
        <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />
        <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />
        <Card images={boat.images} name={boat.name} tag={boat.tag} price={boat.price} people={boat.people} slug={boat.slug} />   */}

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
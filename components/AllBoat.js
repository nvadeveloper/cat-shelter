

const getBoatList = async () => {

    const param = {
        method: 'post',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            query: `{
            boats {
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
            }}`
        })
    }

    const res = await fetch(`${env.process.NEXT_PUBLIC_STRAPI_BASE_URL}/graphql`, param)
    const data = await res.json()

    return {
        props: data
    }
}
  
export getBoatList



const AllBoat = (data) => {
    console.log(data)
    

    return (
        <div>
            AllBoat
        </div>
    )
}
  
export default AllBoat

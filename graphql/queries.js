import { gql } from "@apollo/client";

const GET_ALL_BOATS = gql`
query {
	boats {
    data {
      id
      attributes {
        name 
        price
				person
        tag
        images {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}`

export { GET_ALL_BOATS }
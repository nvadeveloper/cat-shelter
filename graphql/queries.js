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

const GET_BOAT_SLUG = gql`
query {
	boats {
    data {
      id
    }
  }
}`

export { GET_ALL_BOATS, GET_BOAT_SLUG }
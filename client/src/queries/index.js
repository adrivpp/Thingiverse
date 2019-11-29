import gql from 'graphql-tag';

export const GET_THINGS = gql`
  query getThingsByCategory($category: String!) {
    things(category: $category) {
        id,
        name,
        image,
        creator {
            firstName,
            image
        }
    }
  }
`;

export const GET_THING_BY_ID = gql`
  query getThingByID($thingId: ID!) {
    thingById(thingId: $thingId) {
        id,
        name,
        image,
        creator {
            firstName,
            image
        }
    }
  }
`;
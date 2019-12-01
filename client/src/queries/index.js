import gql from 'graphql-tag';

export const THING_DATA = gql`
  fragment ThingData on Thing {
    id,
    name,
    image,
    creator {
        firstName,
        image
    }
  }
`;

export const GET_THINGS = gql`
  query getThingsByCategory($category: String!) {
    things(category: $category) {
      ...ThingData
    }
  }
  ${THING_DATA}
`;

export const GET_THING_BY_ID = gql`
  query getThingByID($thingId: ID!) {
    thingById(thingId: $thingId) {
      ...ThingData,
      collectCount,
      likes,
      added,
      defaultImage,
      details,
      downloadCount,
      viewCount,
      images {
        url
      }
    }
  }
  ${THING_DATA}
`;
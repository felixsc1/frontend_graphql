import gql from "graphql-tag";

export const ALL_CONSULTANTS_QUERY = gql`
  query AllConsultants {
    consultants {
      id
      name
      age
      projects {
        company
        year
      }
    }
  }
`;

export const PROJECTS_OF_CONSULTANT_QUERY = gql`
  query Projects($consultantId: ID!) {
    consultant(id: $consultantId) {
      projects {
        id
        company
        description
        year
      }
    }
  }
`;

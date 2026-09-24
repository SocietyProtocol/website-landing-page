export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PostsPartsFragmentDoc = gql`
    fragment PostsParts on Posts {
  __typename
  title
  slug
  description
  date
  author
  image
  cardImage
  isIntro
  order
  body
}
    `;
export const RolesPartsFragmentDoc = gql`
    fragment RolesParts on Roles {
  __typename
  title
  slug
  emoji
  commitment
  responsibilities
  requirements
}
    `;
export const RoadmapPartsFragmentDoc = gql`
    fragment RoadmapParts on Roadmap {
  __typename
  title
  slug
  description
  body
}
    `;
export const WhitepaperPartsFragmentDoc = gql`
    fragment WhitepaperParts on Whitepaper {
  __typename
  title
  slug
  description
  body
}
    `;
export const GlossaryPartsFragmentDoc = gql`
    fragment GlossaryParts on Glossary {
  __typename
  title
  slug
  description
  body
}
    `;
export const IdeologyPartsFragmentDoc = gql`
    fragment IdeologyParts on Ideology {
  __typename
  title
  slug
  description
  body
}
    `;
export const TeamPartsFragmentDoc = gql`
    fragment TeamParts on Team {
  __typename
  title
  slug
  role
  jobTitle
  image
  order
  xUrl
  farcasterUrl
  lensUrl
}
    `;
export const PostsDocument = gql`
    query posts($relativePath: String!) {
  posts(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostsParts
  }
}
    ${PostsPartsFragmentDoc}`;
export const PostsConnectionDocument = gql`
    query postsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostsFilter) {
  postsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostsParts
      }
    }
  }
}
    ${PostsPartsFragmentDoc}`;
export const RolesDocument = gql`
    query roles($relativePath: String!) {
  roles(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...RolesParts
  }
}
    ${RolesPartsFragmentDoc}`;
export const RolesConnectionDocument = gql`
    query rolesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: RolesFilter) {
  rolesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...RolesParts
      }
    }
  }
}
    ${RolesPartsFragmentDoc}`;
export const RoadmapDocument = gql`
    query roadmap($relativePath: String!) {
  roadmap(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...RoadmapParts
  }
}
    ${RoadmapPartsFragmentDoc}`;
export const RoadmapConnectionDocument = gql`
    query roadmapConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: RoadmapFilter) {
  roadmapConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...RoadmapParts
      }
    }
  }
}
    ${RoadmapPartsFragmentDoc}`;
export const WhitepaperDocument = gql`
    query whitepaper($relativePath: String!) {
  whitepaper(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...WhitepaperParts
  }
}
    ${WhitepaperPartsFragmentDoc}`;
export const WhitepaperConnectionDocument = gql`
    query whitepaperConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: WhitepaperFilter) {
  whitepaperConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...WhitepaperParts
      }
    }
  }
}
    ${WhitepaperPartsFragmentDoc}`;
export const GlossaryDocument = gql`
    query glossary($relativePath: String!) {
  glossary(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GlossaryParts
  }
}
    ${GlossaryPartsFragmentDoc}`;
export const GlossaryConnectionDocument = gql`
    query glossaryConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GlossaryFilter) {
  glossaryConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GlossaryParts
      }
    }
  }
}
    ${GlossaryPartsFragmentDoc}`;
export const IdeologyDocument = gql`
    query ideology($relativePath: String!) {
  ideology(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...IdeologyParts
  }
}
    ${IdeologyPartsFragmentDoc}`;
export const IdeologyConnectionDocument = gql`
    query ideologyConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: IdeologyFilter) {
  ideologyConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...IdeologyParts
      }
    }
  }
}
    ${IdeologyPartsFragmentDoc}`;
export const TeamDocument = gql`
    query team($relativePath: String!) {
  team(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TeamParts
  }
}
    ${TeamPartsFragmentDoc}`;
export const TeamConnectionDocument = gql`
    query teamConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TeamFilter) {
  teamConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TeamParts
      }
    }
  }
}
    ${TeamPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    posts(variables, options) {
      return requester(PostsDocument, variables, options);
    },
    postsConnection(variables, options) {
      return requester(PostsConnectionDocument, variables, options);
    },
    roles(variables, options) {
      return requester(RolesDocument, variables, options);
    },
    rolesConnection(variables, options) {
      return requester(RolesConnectionDocument, variables, options);
    },
    roadmap(variables, options) {
      return requester(RoadmapDocument, variables, options);
    },
    roadmapConnection(variables, options) {
      return requester(RoadmapConnectionDocument, variables, options);
    },
    whitepaper(variables, options) {
      return requester(WhitepaperDocument, variables, options);
    },
    whitepaperConnection(variables, options) {
      return requester(WhitepaperConnectionDocument, variables, options);
    },
    glossary(variables, options) {
      return requester(GlossaryDocument, variables, options);
    },
    glossaryConnection(variables, options) {
      return requester(GlossaryConnectionDocument, variables, options);
    },
    ideology(variables, options) {
      return requester(IdeologyDocument, variables, options);
    },
    ideologyConnection(variables, options) {
      return requester(IdeologyConnectionDocument, variables, options);
    },
    team(variables, options) {
      return requester(TeamDocument, variables, options);
    },
    teamConnection(variables, options) {
      return requester(TeamConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

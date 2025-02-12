export const mutations = `
    type Mutation {
        addWishlist(location_id: String!, user_id: String!): Location!
        removeWishlist(location_id: String!, user_id: String!): Location!
    }
`;
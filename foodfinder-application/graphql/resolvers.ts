import { locationMutations } from "@/graphql/locations/mutations";
import { locationQueries } from "@/graphql/locations/queries";

export const resolvers = {
    Query: {
        ...locationQueries,
    },
    Mutation: {
        ...locationMutations,
    },
};
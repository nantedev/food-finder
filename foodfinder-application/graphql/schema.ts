import { gql } from "graphql-tag"; // Assurez-vous d'importer gql
import { queries } from "@/graphql/locations/queries.gql";
import { mutations } from "@/graphql/locations/mutations.gql";
import { typeDefs as customTypes } from "@/graphql/locations/custom.gql"; // Types personnalisés

export const typeDefs = gql`
    ${customTypes} 
    ${queries}      
    ${mutations}     
`;

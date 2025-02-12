import { gql } from "graphql-tag"; // Assurez-vous d'importer gql
import { queries } from "./locations/queries.gql";
import { mutations } from "./locations/mutations.gql";
import { typeDefs as customTypes } from "./locations/custom.gql"; // Types personnalisés

export const typeDefs = gql`
    ${customTypes} 
    ${queries}      
    ${mutations}     
`;

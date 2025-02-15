import { LocationType } from "@/mongoose/locations/schema";
import styled from "styled-components";
import { JSX } from "react";
import { LocationsListItem } from "@/app/components/locations-list-items/LocationsListItem";

interface PropsInterface {
    locations: LocationType[];
}

export const LocationsList = ( props : PropsInterface): JSX.Element => {
        return (
            <LocationListStyled>
              {props.locations.map((location) => {
                return (
                    <LocationsListItem
                        location={location}
                        key={location.location_id}
                    />
                );
            })}
            </LocationListStyled>
        );
    };

const LocationListStyled = styled.ul`
    margin: 0;
    padding: 0;
`
import Link from "next/link";
import styled from "styled-components";
import { LocationType } from "mongoose/locations/schema";


import { JSX } from "react";

interface PropsInterface {
    location: LocationType;
}


export const LocationsListItem = (props : PropsInterface): JSX.Element => {
    const location = props.location;
    return (
        <>
            {location && (
                <LocationsListItemStyled>
                    <Link href={`/location/${location.location_id}`}>
                        <h2>
                            {location.name}
                            <small>{location.cuisine} in {location.borough}</small>
                        </h2>
                    </Link>
                </LocationsListItemStyled>
            )}
        </>
    );
};


const LocationsListItemStyled = styled.li`
    background-color: #fff;
    border-radius: 5px;
    color: #1d1f21;
    cursor: pointer;
    list-style: none;
    margin: 0.5rem 0;
    padding: 0.5rem;
    transition: background-color 0.25s ease-in, color 0.25s ease-in;
    
    &:hover {
        background-color: rgba(0, 118, 255, 0.9);
        color: #fff;
    }

    h2 {
        margin: 0;
        padding: 0;
    }

    small {
        font-weight: 300;
        padding: 0 1rem;
    }
`;
"use client"
import { LocationType } from "@/mongoose/locations/schema";
import { JSX } from "react";
import styled from "styled-components";

interface PropsInterface {
    location: LocationType;
}

export const LocationDetail = (props: PropsInterface): JSX.Element => {
    let location = props.location;
    return (
        <div>
            {location && (
                <LocationDetailStyled>
                    <li>
                        <b>Address: </b>
                        {location.address}
                    </li>
                    <li>
                        <b>Zipcode: </b>
                        {location.zipcode}
                    </li>
                    <li>
                        <b>Borough: </b>
                        {location.borough}
                    </li>
                    <li>
                        <b>Cuisine: </b>
                        {location.cuisine}
                    </li>
                    <li>
                        <b>Grade: </b>
                        {location.grade}
                    </li>
                </LocationDetailStyled>
            )}
        </div>
    );
};

const LocationDetailStyled = styled.ul`
margin: 0 0 2rem 0;
padding: 0;

li {
    list-style: none;
    margin: 0 0 0.5rem 0;
}
`
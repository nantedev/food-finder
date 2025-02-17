"use client";

import { LocationType } from "@/mongoose/locations/schema";
import { LocationsList } from "@/app/components/locations-list/LocationsList";
import Head from "next/head";

interface Props {
    locations: LocationType[];
    isCurrentUsers: boolean;
}

const WishlistPage = ({ locations, isCurrentUsers }: Props) => {
    const title = `The Food Finder - ${isCurrentUsers ? "Your" : "A"} Wish List`;

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="The Food Finder. A personal wish list." />
            </Head>
            <h1>{isCurrentUsers ? "Your" : "A"} wish list!</h1>

            {isCurrentUsers && locations.length === 0 && (
                <>
                    <h2>Your list is currently empty! :(</h2>
                    <p>Start adding locations to your wish list!</p>
                </>
            )}

            <LocationsList locations={locations} />
        </div>
    );
};

export default WishlistPage;

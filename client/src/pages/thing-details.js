import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_THING_BY_ID } from '../queries';
import { ThingCard } from '../components';

function ThingDetails() {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_THING_BY_ID, {
        variables: { thingId: id }
    })

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;
    return (
        <>
            {data && data.thingById &&
                <ThingCard thing={data.thingById} />
            }
        </>
    )
}

export default ThingDetails;
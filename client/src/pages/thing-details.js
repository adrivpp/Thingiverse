import React from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_THING_BY_ID } from '../queries';
import { ThingCard } from '../components';

function ThingDetails({ match }) {
    const thingId = match.params.id;
    const { data, loading, error } = useQuery(GET_THING_BY_ID, {
        variables: { thingId }
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

export default withRouter(ThingDetails);
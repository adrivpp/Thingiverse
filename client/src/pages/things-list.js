import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useLocation } from 'react-router-dom';

import { GET_THINGS } from '../queries';
import { ThingCard } from '../components';
import { ThingsContainer } from '../components/containers/styles';
import { Loading, Error } from '../components';

function ThingsList() {
    const location = useLocation();
    const category = location.pathname.replace(/\//g, '');
    const { data, loading, error } = useQuery(GET_THINGS, {
        variables: { category }
    })

    if (loading) return <Loading/>
    if (error) return <Error message={error.message}/>
    return (
        <>
            <ThingsContainer>
                {data && data.things &&
                    data.things.map((thing) => {
                        return (
                            <ThingCard key={`thing-${thing.id}`} thing={thing} />
                        )
                    })
                }
            </ThingsContainer>
        </>
    )
}

export default ThingsList;
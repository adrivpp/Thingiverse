import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useLocation } from 'react-router-dom';

import styled from 'react-emotion';

import { GET_THINGS } from '../queries';
import { ThingCard } from '../components';

function ThingsList() {
    const location = useLocation();
    const category = location.pathname.replace(/\//g, '');
    const { data, loading, error } = useQuery(GET_THINGS, {
        variables: { category }
    })

    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;
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

const ThingsContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
});

export default ThingsList;
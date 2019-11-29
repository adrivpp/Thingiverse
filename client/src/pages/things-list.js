import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import styled from 'react-emotion';

import { GET_THINGS } from '../queries';
import { ThingCard } from '../components';

function ThingsList({ history }) {
    const category = history.location.pathname.replace(/\//g, '');
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

export default withRouter(ThingsList);
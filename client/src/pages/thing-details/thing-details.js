import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_THING_BY_ID } from '../../queries';
import ThingHeader from '../../components/thing-header/thing-header';
import { DefaultImage, Row, ThingAnalytics } from './styles';
import AnalyticItem from '../../components/analityc-item/analityc-item';

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
                <>
                    <ThingHeader thing={data.thingById} />
                    <Row>
                        <DefaultImage src={data.thingById.defaultImage} />
                        <ThingAnalytics>
                            <AnalyticItem icon={null} title={'views'} count={data.thingById.viewCount} />
                        </ThingAnalytics>
                    </Row>
                    <div dangerouslySetInnerHTML={{ __html: data.thingById.details }} />
                </>
            }
        </>
    )
}

export default ThingDetails;
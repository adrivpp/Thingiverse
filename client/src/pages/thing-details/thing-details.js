import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_THING_BY_ID } from '../../queries';
import ThingHeader from '../../components/thing-header/thing-header';
import { DefaultImage, Row, SmallContainer, DetailsContainer, Image, ImagesContainer } from './styles';
import AnalyticItem from '../../components/analityc-item';
import Loading from '../../components/loading/loading';

function ThingDetails() {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_THING_BY_ID, {
        variables: { thingId: id }
    })

    if (loading) return <Loading/>;
    if (error) return <p>error</p>;
    return (
        <>
            {data && data.thingById &&
                <>
                    <ThingHeader thing={data.thingById} />
                    <Row>
                        <DefaultImage src={data.thingById.defaultImage} />
                        <SmallContainer>
                            <AnalyticItem title={'Views'} count={data.thingById.viewCount} />
                            <AnalyticItem title={'Likes'} count={data.thingById.likes} />
                            <AnalyticItem title={'Downloads'} count={data.thingById.downloadCount} />
                        </SmallContainer>
                    </Row>
                    <Row>
                        <ImagesContainer>
                            {
                                data.thingById.images.map((image, index) => {
                                    return <Image key={`image-${index}`} src={image.url} alt={data.thingById.name}/>
                                })
                            }
                        </ImagesContainer>
                        <DetailsContainer dangerouslySetInnerHTML={{ __html: data.thingById.details }} />
                    </Row>
                </>
            }
        </>
    )
}

export default ThingDetails;
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_THING_BY_ID } from '../../queries';
import { DefaultImage, Row, SmallContainer, DetailsContainer, Image, ImagesContainer, DefaultImageContainer } from './styles';
import { AnalyticItem, Loading, ThingHeader, Error } from '../../components';

function ThingDetails() {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_THING_BY_ID, {
        variables: { thingId: id }
    })

    if (loading) return <Loading/>
    if (error) return <Error message={error.message}/>
    return (
        <>
            {data && data.thingById &&
                <>
                    <ThingHeader thing={data.thingById} />
                    <Row>
                        <DefaultImageContainer>
                            <DefaultImage src={data.thingById.defaultImage} />
                        </DefaultImageContainer>
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
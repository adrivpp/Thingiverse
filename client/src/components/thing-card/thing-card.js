import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Title, CreatorImage, TextContainer, CreatorInfo, ThingImage } from './styles'

export default function ThingCard({ thing }) {
    const history = useHistory();
    const { name, image, id, creator } = thing;
    return (
        <Card onClick={() => history.push(`/things/${id}`)}>
            <ThingImage src={image} alt={name} />
            <TextContainer>
                <Title>{name}</Title>
                <CreatorInfo>
                    <CreatorImage src={creator.image} alt={creator.firstName} />
                    <p>{creator.firstName}</p>
                </CreatorInfo>
            </TextContainer>
        </Card>
    )
}
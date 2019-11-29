import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'react-emotion';
import { unit } from '../styles';
import { size } from 'polished';

export default function ThingCard({ thing }) {
    const { name, image, id, creator } = thing;
    return (
        <Link to={`/things/${id}`} style={{ margin: '0', minWidth: '48%', textDecoration: 'none' }}>
            <Card>
                <ThingImage src={image} alt={name} />
                <TextContainer>
                    <h3>{name}</h3>
                    <CreatorInfo>
                        <CreatorImage src={creator.image} alt={creator.firstName} />
                        <p>{creator.firstName}</p>
                    </CreatorInfo>
                </TextContainer>
            </Card>
        </Link>
    )
}

const Card = styled('div')({
    display: 'flex',
    alignItems: 'center',
    maxHeight: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    marginBottom: unit * 2,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
});

const ThingImage = styled('img')({
    maxHeight: 150,
    minHeight: 150,
    minWidth: 150,
    maxWidth: 150,
    borderRadius: 20,
});

const CreatorImage = styled('img')(size(40), () => ({
    marginRight: unit * 2.5,
    borderRadius: '50%',
}));

const TextContainer = styled('div')({
    padding: unit * 2
});

const CreatorInfo = styled('div')({
    marginTop: unit * 2,
    display: 'flex',
    alignItems: 'center'
});
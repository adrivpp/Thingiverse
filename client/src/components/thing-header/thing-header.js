import React from 'react';
import { Header, Column, CreatorName } from './styles';
import { CreatorImage } from '../thing-card/styles';
import moment from 'moment';

export default function ThingHeader({ thing }) {
    const { creator, name, added } = thing;
    return (
        <Header>
            <CreatorImage src={creator.image} alt={creator.name} />
            <Column>
                <h2>{name}</h2>
                <p>by <CreatorName>{creator.firstName}</CreatorName> on {moment(added, 'YYYYMMDD').format('LL')}</p>
            </Column>
        </Header>

    );
}



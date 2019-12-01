import styled from 'react-emotion';
import { unit } from '../../styles';
import { size } from 'polished';

const Card = styled('div')({
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 250,
    marginRight: unit * 2,
    marginBottom: unit * 2,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
});

const ThingImage = styled('img')({
    minHeight: '60%',
    maxHeight: '80%',
    minWidth: '100%',
    maxWidth: '100%',
    borderRadius: 20,
});

const CreatorImage = styled('img')(size(40), () => ({
    marginRight: unit * 2,
    borderRadius: '50%',
}));

const TextContainer = styled('div')({
    padding: unit * 2,
    height: '40%'
});

const CreatorInfo = styled('div')({
    marginTop: unit * 2,
    display: 'flex',
    alignItems: 'center'
});

const Title = styled('h3')({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
});

export { Card, Title, CreatorImage, TextContainer, CreatorInfo, ThingImage };
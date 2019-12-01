import styled from 'react-emotion';
import { colors, unit } from '../../styles';

const Row = styled('div')({
    display: 'flex',
    width: '100%',
    marginBottom: unit * 4
});

const DefaultImage = styled('img')({
    maxWidth: '70%',
    minWidth: '70%',
    marginRight: '5%'
});

const ThingAnalytics = styled('div')({
    backgroundColor: 'white',
    width: '25%',
    padding: unit * 1.5
});

export { Row, DefaultImage, ThingAnalytics }; 
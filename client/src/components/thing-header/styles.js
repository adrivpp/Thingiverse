import styled from '@emotion/styled';
import { colors, unit } from '../../styles';

const Header = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: unit * 4
});

const Column = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

const CreatorName = styled('span')({
    color: colors.primary
});

export { Header, Column, CreatorName }; 
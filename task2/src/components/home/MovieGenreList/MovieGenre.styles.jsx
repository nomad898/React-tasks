import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Colors } from '@utils';

const MovieGenre = styled.a`
    padding: 10px 15px; //TODO: change to em and percent
    text-decoration: none;
    &:link, &:visited {
        color: ${Colors.WHITE}
    }
    border-bottom: ${({isActive}) =>
        isActive && `5px solid ${Colors.PRIMARY_RED}`
    }
`;

MovieGenre.propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element
    ])
};

export { MovieGenre };
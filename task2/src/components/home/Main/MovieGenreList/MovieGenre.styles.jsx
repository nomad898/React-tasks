import PropTypes from 'prop-types';
import styled from 'styled-components';
import color from '@styles/modules/_colors.module.scss';

const MovieGenre = styled.a`
    padding: 10px 15px; //TODO: change to em and percent
    text-decoration: none;
    &:link, &:visited {
        color: ${color.white}
    }
    border-bottom: ${({isActive}) =>
        isActive && `5px solid ${color.primaryRed}`
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
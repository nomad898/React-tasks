import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Colors } from '@utils';

const MovieGenre = styled.div`
    padding: 10px 15px; //TODO: change to em and percent
    border-bottom: ${({isActive}) => 
        isActive && `5px solid ${Colors.PRIMARY_RED}`
    }
`;

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
};

export { MovieGenre };
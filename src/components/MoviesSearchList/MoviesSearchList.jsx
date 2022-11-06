import { Link, useLocation } from 'react-router-dom';
import css from '../MoviesSearchList/MoviesSearchList.module.css';
import PropTypes from 'prop-types';
import defaultImage from '../../default/default-placeholder.png'


export const MoviesSearchList = ({ movieBySearch }) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
    const location = useLocation();
    return (
        <ul className={css.ul}>
            {movieBySearch.map(({ id, title, poster_path }) => (
                <li key={id}>
                    <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
                        <img className={css.movieSearchImg} alt={title} 
                        src={
                            poster_path ? 
                            `${IMAGE_PATH}${poster_path}`
                        : defaultImage} />
                        <span>{title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

MoviesSearchList.propTypes = {
    movieBySearch: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string
        })
    )
}
import { Link, useLocation } from "react-router-dom";
import css from '../MoviesList/MovieList.module.css';
import PropTypes from 'prop-types';

export const MovieList = ({ popularMovies }) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
    const location = useLocation();
    return (
        <div className={css.movieList}>
            <ul className={css.ul}>
                {popularMovies.map(({ id, title, poster_path }) => (
                    <li key={id}>
                        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
                            <img className={css.movieListImg} alt={title} src={`${IMAGE_PATH}${poster_path}`} />
                            <span>{title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

MovieList.propTypes = {
    popularMovies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired
        })
    )
}
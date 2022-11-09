import css from '../MovieDetailShow/MovieDetailShow.module.css';
import Moment from 'moment';
import PropTypes from 'prop-types';

export const MovieDetailShow = ({ movieDetail }) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
    const releaseDate = Moment(movieDetail.release_date).format('YYYY');

    return (
        <div>
            {movieDetail && (
                <div className={css.container}>
                    <img className={css.movieDetailImg} alt={movieDetail.original_title} src={`${IMAGE_PATH}${movieDetail.poster_path}`} />
                    <div className={css.movieDetailInfo}>
                        <p><b>{movieDetail.original_title}({releaseDate})</b></p>
                        <p>User score: {((movieDetail.vote_average) * 10).toFixed(0) + '%'}</p>
                        <div><b>Overview:</b>
                            <p>{movieDetail.overview}</p>
                        </div>
                        <div><b>Genres:</b>
                            {movieDetail.genres.map((genre) => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

MovieDetailShow.propTypes = {
    original_title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    )
}
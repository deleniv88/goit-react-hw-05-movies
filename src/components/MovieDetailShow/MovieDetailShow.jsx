import css from '../MovieDetailShow/MovieDetailShow.module.css'


export const MovieDetailShow = ({ movieDetail }) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className={css.container}>
            <img className={css.movieDetailImg} alt={movieDetail.original_title} src={`${IMAGE_PATH}${movieDetail.poster_path}`} />
            <div className={css.movieDetailInfo}>
                <p><b>{movieDetail.original_title}({movieDetail.release_date})</b></p>
                <p>User score: {((movieDetail.vote_average) * 10).toFixed(0) + '%'}</p>
                <div><b>Overview:</b>
                    <p>{movieDetail.overview}</p>
                </div>
                <div><b>Genres:</b>

                </div>
            </div>

        </div>

    )
}
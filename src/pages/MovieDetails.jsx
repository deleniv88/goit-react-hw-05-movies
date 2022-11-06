import Loader from "components/Loader/Loader";
import { MovieDetailShow } from "components/MovieDetailShow/MovieDetailShow";
import { useState, useEffect, Suspense } from "react";
import { Outlet, useLocation, useParams } from "react-router"
import { fetchMovieById } from "services/fetchMovieById";
import { Link } from "react-router-dom";
import css from '../pages/MovieDetails/MovieDetail.module.css'

export default function MoviesDetail() {
    const { moviesId } = useParams();
    const [movieDetail, setMovieDetail] = useState([]);
    const [status, setStatus] = useState('idle');
    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    useEffect(() => {
        const fetch = async () => {
            try {
                setStatus('pending');
                const fetchMovies = await fetchMovieById(moviesId);

                setStatus('resolved');
                setMovieDetail(fetchMovies.data);

                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });

            } catch (e) {
                setStatus('rejected');
            }
        }
        fetch()
    }, [moviesId]);

    return (
        <div>
            <Link to={backLink}><button className={css.btnBack}>Go back</button></Link>

            <MovieDetailShow movieDetail={movieDetail} />
            {status === 'pending' && <Loader />}

            <h2>Additional information</h2>
            <div className={css.movieCastReviews}>
                <ul className={css.ul}>
                    <li className={css.li}> 
                        <Link className={css.li} to='cast'>Cast</Link>
                    </li>
                    <li className={css.li}>
                        <Link className={css.li} to='reviews'>Reviews</Link>
                    </li>
                </ul>

            </div>
            <Suspense fallback="null">
                <Outlet />
            </Suspense>
        </div>
    )
}
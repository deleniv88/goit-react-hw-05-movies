import { fetchPopular } from '../../services/fetchPopularMovies'
import { useState, useEffect } from "react"
import { MovieList } from '../../components/MoviesList/MovieList'
import css from '../../components/MoviesList/MovieList.module.css';
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'components/Loader/Loader';

export const Home = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        const fetch = async () => {
            try {
                setStatus('pending');
                const fetchMovies = await fetchPopular();

                setStatus('resolved');
                setPopularMovies(fetchMovies.data.results);

                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });

            } catch (e) {
                setStatus('rejected');
                return toast.e('uppps')
            }
        }
        fetch()
    }, [])

    return (
        <div className={css.movieListContainer}>
            <h2>Trending today</h2>
            <MovieList popularMovies={popularMovies} />
            {status === 'pending' && <Loader />}
            <Toaster />
        </div>
    )
}

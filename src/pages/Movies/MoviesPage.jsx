import { MoviesSearchList } from "components/MoviesSearchList/MoviesSearchList";
import { useEffect } from "react";
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import { fetchSearch } from '../../services/fetchQuery'
import css from '../Movies/MoviesPage.module.css';
import toast, { Toaster } from 'react-hot-toast';
import Loader from "components/Loader/Loader";

export default function Movies() {

    const [movieBySearch, setMovieBySearch] = useState([]);
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams('');
    const search = searchParams.get('search') ?? '';
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        if (!search) {
            return;
        }

        const fetchMoviesBySearch = async () => {
            try {
                setStatus('pending');

                const movies = await fetchSearch(search);

                setStatus('resolved');
                setMovieBySearch(movies.data.results);

                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            } catch (e) {
                setStatus('rejected');
                return toast.e('upps')
            }
        }
        fetchMoviesBySearch()
    }, [search]);

    const handelOnChange = e => setQuery(e.target.value)

    const handelOnSubmit = e => {
        e.preventDefault();
        const { value } = e.target.elements.query;

        value ? setSearchParams({ search: value }) : setSearchParams({})
    }

    return (
        <div className={css.moviesSearch}>

            <form onSubmit={handelOnSubmit} >
                <input 
                    className={css.searchForm}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    aria-label="search"
                    name="query"
                    value={query}
                    onChange={handelOnChange} />
                <button className={css.searchBtn} type="submit">Search</button>
            </form>

            {movieBySearch.length > 0 ? (
                <div>
                    <MoviesSearchList movieBySearch={movieBySearch} />
                    {status === 'pending' && <Loader />}
                </div>
            ) : (<h2>Please write the name of film or check is the entered name of film currect</h2>)}

            <Toaster />
        </div>
    )
}
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchCast } from "services/fetchCast";
import Loader from "../Loader/Loader";
import css from '../Cast/Cast.module.css'
import defaultImage from '../../default/default-placeholder.png';
import PropTypes from 'prop-types';

export default function Cast() {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w300/";

    const { moviesId } = useParams();
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState('idle');


    useEffect(() => {
        const fetch = async () => {
            try {
                setStatus('pending');
                const fetchMovies = await fetchCast(moviesId);

                setStatus('resolved');
                setCast(fetchMovies.data.cast);

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
        <div className={css.castContainer}>
            <ul className={css.ul}>
                {cast &&
                    cast.map((cast) => (
                        <li key={cast.id}>
                            <img
                                className={css.castImg}
                                alt={cast.name}
                                src={
                                    cast.profile_path
                                        ? `${IMAGE_PATH}${cast.profile_path}`
                                        : defaultImage
                                }
                            />
                            <p >{cast.name}</p>
                            <p>{cast.character}</p>
                        </li>
                    ))}
                {cast.length === 0 && <p>No casts</p>}
            </ul>
            {status === 'pending' && <Loader />}
        </div>
    )
}

Cast.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            profile_path: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired
        })
    )
}
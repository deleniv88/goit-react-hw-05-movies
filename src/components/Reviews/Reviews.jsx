import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";
import css from '../Reviews/Reviews.module.css'
import { fetchReviews } from "../../services/fetchReviews";

export default function Reviews(){

    const { moviesId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        const fetch = async () => {
            try {
                setStatus('pending');
                const fetchMovies = await fetchReviews(moviesId);

                setStatus('resolved');
                setReviews(fetchMovies.data.results);
                console.log(fetchMovies.data.author);

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
        <div className={css.reviewContainer}>
            <ul className={css.ul}>
                {reviews &&
                    reviews.map((reviews) => (
                        <li key={reviews.id}>
                            <p className={css.author}>{reviews.author}</p>
                            <p className={css.content}>{reviews.content}</p>
                        </li>
                    ))}
                {reviews.length === 0 && <p>No reviews</p>}
            </ul>
            {status === 'pending' && <Loader />}
        </div>
    )
}
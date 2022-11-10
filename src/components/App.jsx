import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/HomePage/HomePage';
import { lazy } from 'react';
import { Suspense } from "react"
import { AppBar } from "./AppBar/AppBar"

const Movies = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MoviesDetail = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'))

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppBar />
      <Routes>
        <Route path='/goit-react-hw-05-movies/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:moviesId' element={<MoviesDetail />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </Suspense>
  )
}
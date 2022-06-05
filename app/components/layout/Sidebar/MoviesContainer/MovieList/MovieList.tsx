import Link from 'next/link'
import { FC } from 'react'

import MovieItem from '@/components/layout/Sidebar/MoviesContainer/MovieList/MovieItem'
import { IMovieList } from '@/components/layout/Sidebar/MoviesContainer/MovieList/movie-list.interface'

import s from './MovieList.module.scss'

const MovieList: FC<IMovieList> = ({ link, movies, title }) => {
	return (
		<div className={s.list}>
			<div className={s.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<a className={s.button}>Посмотреть все</a>
			</Link>
		</div>
	)
}

export default MovieList

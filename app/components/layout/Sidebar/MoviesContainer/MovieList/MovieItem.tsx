import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import { getGenresListEach } from '@/utils/movie/getGenresListEach'
import { translitWord } from '@/utils/string/translitWord'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'

import s from './MovieList.module.scss'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={s.item}>
			<Link href={getMovieUrl(translitWord(movie.slug))}>
				<a>
					<Image
						src={movie.poster}
						draggable={false}
						alt={movie.title}
						width={65}
						height={97}
						priority
					/>
				</a>
			</Link>
			<div className={s.info}>
				<div className={s.title}>{movie.title}</div>
				<div className={s.genres}>
					{movie.genres.map((genre, idx) => (
						<Link href={getGenreUrl(translitWord(genre.slug))} key={genre._id}>
							<a>{getGenresListEach(idx, movie.genres.length, genre.name)}</a>
						</Link>
					))}
				</div>
				<div className={s.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem

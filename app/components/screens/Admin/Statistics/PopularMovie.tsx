import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SubHeading from '@/ui/heading/SubHeading'
import CustomSkeleton from '@/ui/skeleton-loader/CustomSkeleton'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

import { translitWord } from '@/utils/string/translitWord'

import { getMovieUrl } from '@/config/url.config'

import s from '../admin.module.scss'

const PopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Most popular movie in admin',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	)

	return (
		<div className={cn(s.block, s.popular)}>
			<SubHeading title="Самый популярный фильм" />
			{isLoading ? (
				<CustomSkeleton className="h-48" />
			) : (
				movie && (
					<>
						<h3>Открыт: {movie.countOpened} раза</h3>
						<Link href={getMovieUrl(translitWord(movie.slug))}>
							<a>
								<Image
									width={285}
									height={176}
									src={movie.bigPoster}
									alt={movie.title}
									className={s.image}
									unoptimized
								/>
								<p>{movie.title}</p>
							</a>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default PopularMovie

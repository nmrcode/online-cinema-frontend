import { useQuery } from 'react-query'

import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu.interface'

import { GenreService } from '@/services/genre.service'

import { translitWord } from '@/utils/translitWord'

import { getGenreUrl } from '@/config/url.config'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(translitWord(genre.slug)),
								title: genre.name,
							} as IMenuItem)
					)
					.splice(0, 4),
		}
	)

	return queryData
}

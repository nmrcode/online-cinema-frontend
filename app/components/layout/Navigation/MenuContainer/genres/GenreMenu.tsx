import { FC } from 'react'

import Menu from '@/components/layout/Navigation/MenuContainer/Menu/Menu'
import { usePopularGenres } from '@/components/layout/Navigation/MenuContainer/genres/usePopularGenres'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb6"> Loading</div>
	) : (
		<Menu menu={{ title: 'По жанрам', items: data || [] }} />
	)
}

export default GenreMenu

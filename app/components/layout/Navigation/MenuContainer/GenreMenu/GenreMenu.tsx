import { FC } from 'react'

import Menu from '@/components/layout/Navigation/MenuContainer/Menu/Menu'

import CustomSkeleton from '@/ui/skeleton-loader/CustomSkeleton'

import { usePopularGenres } from '@/hooks/usePopularGenres'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb6">
			<CustomSkeleton count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu menu={{ title: 'По жанрам', items: data || [] }} />
	)
}

export default GenreMenu

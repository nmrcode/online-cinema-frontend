import { FC } from 'react'

import { useMovies } from '@/screens/Admin/movies/useMovies'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const MovieList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useMovies()

	return (
		<Meta title="Фильмы">
			<AdminNavigation />
			<Heading title="Фильмы" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Название', 'Жанр', 'Рейтинг']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default MovieList

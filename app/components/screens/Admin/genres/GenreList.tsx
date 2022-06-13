import { FC } from 'react'

import { useGenres } from '@/screens/Admin/genres/useGenres'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const GenreList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useGenres()

	return (
		<Meta title="Жанры">
			<AdminNavigation />
			<Heading title="Жанры" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Имя', 'Слаг']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default GenreList

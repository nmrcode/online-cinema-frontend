import { FC } from 'react'

import { useActors } from '@/screens/Admin/actors/useActors'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const ActorList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useActors()

	return (
		<Meta title="Актеры">
			<AdminNavigation />
			<Heading title="Актеры" />

			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Имя', 'Количество фильмов']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default ActorList

import { FC } from 'react'

import Statistics from '@/screens/Admin/home/Statistics/Statistics'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Статистика" />
			<Statistics />
		</Meta>
	)
}

export default Admin

import { FC } from 'react'

import AdminTableHeader from '@/ui/admin-table/AdminTable/AdminTableHeader'
import AdminTableItem from '@/ui/admin-table/AdminTable/AdminTableItem'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import CustomSkeleton from '@/ui/skeleton-loader/CustomSkeleton'

import s from './AdminTable.module.scss'

interface IAdminTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = ({
	tableItems,
	headerItems,
	removeHandler,
	isLoading,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<CustomSkeleton count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<AdminTableItem
						tableItem={tableItem}
						removeHandler={() => removeHandler(tableItem._id)}
						key={tableItem._id}
					/>
				))
			) : (
				<div className={s.notFound}>Элементы не найдены</div>
			)}
		</div>
	)
}

export default AdminTable

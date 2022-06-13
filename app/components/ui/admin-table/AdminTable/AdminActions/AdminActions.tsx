import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon/MaterialIcon'

import s from './AdminActions.module.scss'

interface IAdminActions {
	editUrl: string
	removeHandler: () => void
}

const AdminActions: FC<IAdminActions> = ({ removeHandler, editUrl }) => {
	const { push } = useRouter()

	return (
		<div className={s.actions}>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>

			<button onClick={removeHandler}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	)
}

export default AdminActions

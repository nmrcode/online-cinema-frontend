import { FC } from 'react'

import CountUsers from '@/screens/Admin/Statistics/CountUsers'
import PopularMovie from '@/screens/Admin/Statistics/PopularMovie'

import s from '../admin.module.scss'

const Statistics: FC = () => {
	return (
		<div className={s.statistics}>
			<CountUsers />
			<PopularMovie />
		</div>
	)
}

export default Statistics

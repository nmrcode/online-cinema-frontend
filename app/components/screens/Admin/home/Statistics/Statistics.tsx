import { FC } from 'react'

import CountUsers from '@/screens/Admin/home/Statistics/CountUsers'
import PopularMovie from '@/screens/Admin/home/Statistics/PopularMovie'

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

import { FC } from 'react'

import Search from '@/components/layout/Sidebar/Search/Search'

import s from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={s.sidebar}>
			<Search />
		</div>
	)
}

export default Sidebar

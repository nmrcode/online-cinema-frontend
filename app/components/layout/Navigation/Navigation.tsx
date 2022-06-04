import { FC } from 'react'

import Logo from '@/components/layout/Navigation/Logo/Logo'
import MenuContainer from '@/components/layout/Navigation/MenuContainer/MenuContainer'

import s from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={s.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation

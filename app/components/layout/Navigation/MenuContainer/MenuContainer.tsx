import { FC } from 'react'

import Menu from '@/components/layout/Navigation/MenuContainer/Menu/Menu'
import {
	firstMenu,
	userMenu,
} from '@/components/layout/Navigation/MenuContainer/data/menu.data'
import GenreMenu from '@/components/layout/Navigation/MenuContainer/genres/GenreMenu'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer

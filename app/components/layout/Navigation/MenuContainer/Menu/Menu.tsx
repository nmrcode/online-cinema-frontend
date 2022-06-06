import { FC } from 'react'

import AuthItems from '@/components/layout/Navigation/MenuContainer/AuthItems/AuthItems'
import MenuItem from '@/components/layout/Navigation/MenuContainer/Menu/MenuItem'
import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface'

import s from './Menu.module.scss'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={s.menu}>
			<div className={s.heading}>{title}</div>
			<ul className={s.list}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'Общее' ? <AuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu

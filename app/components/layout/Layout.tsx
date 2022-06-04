import { FC } from 'react'

import Navigation from '@/components/layout/Navigation/Navigation'
import Sidebar from '@/components/layout/Sidebar/Sidebar'

import s from './Layout.module.scss'

interface TLayoutProps {
	children: JSX.Element
}

const Layout: FC<TLayoutProps> = ({ children }) => {
	return (
		<div className={s.layout}>
			<Navigation />
			<div className={s.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout

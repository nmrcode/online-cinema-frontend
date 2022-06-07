import { FC } from 'react'

import LogoutButton from '@/components/layout/Navigation/MenuContainer/LogoutButton/LogoutButton'
import MenuItem from '@/components/layout/Navigation/MenuContainer/Menu/MenuItem'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{ icon: 'MdSettings', link: '/profile', title: 'Профиль' }}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Войти' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Админ панель',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems

import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import CustomSkeleton from '@/ui/skeleton-loader/CustomSkeleton'

import { AdminService } from '@/services/admin.service'

import s from '../admin.module.scss'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	)

	return (
		<div className={cn(s.block, s.countUsers)}>
			<div>
				{isLoading ? (
					<CustomSkeleton />
				) : (
					<div className={s.number}> {response?.data}</div>
				)}
				<div className={s.description}>пользователя</div>
			</div>
		</div>
	)
}

export default CountUsers

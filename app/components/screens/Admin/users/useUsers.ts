import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { UserService } from '@/services/user.service'

import { toastrError } from '@/utils/toastrError'

import { getAdminUrl } from '@/config/url.config'

import { convertMongoDbDate } from '@/store/date/convertMongoDbDate'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['users list', debouncedSearch],
		() => UserService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						items: [user.email, convertMongoDbDate(user.createdAt)],
					})
				),

			onError: (e) => {
				toastrError(e, 'Лист пользователей')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: string) => UserService.deleteUser(userId),
		{
			onError: (e) => {
				toastrError(e, 'Удаление пользователя')
			},
			onSuccess: () => {
				toastr.success('Удаление', 'Удаление прошло успешно')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	)
}

import { ChangeEvent, FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon/MaterialIcon'

import s from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={s.search}>
			<MaterialIcon name="MdSearch" />
			<input
				type="text"
				placeholder="Найти"
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchField

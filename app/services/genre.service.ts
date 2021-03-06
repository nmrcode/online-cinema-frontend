import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/config/api.config'

import axios, { axiosClassic } from '../api/interceptors'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},
}

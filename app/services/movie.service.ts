import { IMovie } from '@/shared/types/movie.types'

import { getGenresUrl, getMoviesUrl } from '@/config/api.config'

import { axiosClassic } from '../api/interceptors'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
}
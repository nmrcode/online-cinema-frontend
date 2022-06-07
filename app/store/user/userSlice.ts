import { createSlice } from '@reduxjs/toolkit'

import { getStoreLocalStorage } from '@/utils/local-storage'

import { IInitialState } from '@/store/user/user.interface'
import { checkAuth, login, logout, register } from '@/store/user/userActions'

const initialState: IInitialState = {
	user: getStoreLocalStorage('user'),
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// registration
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, (state, { payload }) => {
				state.isLoading = false
				state.user = null
			})
			// login
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.isLoading = false
				state.user = null
			})
			// logout
			.addCase(logout.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = null
			})
			// checkAuth
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
	},
})

export const { reducer } = userSlice

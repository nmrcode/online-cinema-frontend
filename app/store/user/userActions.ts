import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { toastrError } from '@/utils/toastrError'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { errorCatch } from '../../api/api.helpers'

// register
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Регистрация', 'Завершена успешно')
			return response.data
		} catch (e) {
			toastrError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

// login
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login/',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Авторизация', 'Завершена успешно')
			return response.data
		} catch (e) {
			toastrError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

// logout
export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
	await AuthService.logout()
})

// checkAuth
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (e) {
			if (errorCatch(e) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Ваша авторизация истекла, пожалуйста, авторизуйтесь снова'
				)
				thunkApi.dispatch(logout())
			}

			return thunkApi.rejectWithValue(e)
		}
	}
)

import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import AuthFields from '@/screens/Auth/AuthFields'
import { IAuthInput } from '@/screens/Auth/auth.interface'
import { useAuthRedirect } from '@/screens/Auth/useAuthRedirect'

import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import s from './Auth.module.scss'

const Auth: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login')

	useAuthRedirect()

	const { isLoading } = useAuth()

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const login = (data: any) => {
		alert(`Login ${JSON.stringify(data)}`)
	}
	const register = (data: any) => {
		alert(`Login ${JSON.stringify(data)}`)
	}

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<Meta title="Авторизация">
			<section className={s.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Авторизация" className="mb-6" />

					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>

					<div className={s.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Авторизация
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Регистрация
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth

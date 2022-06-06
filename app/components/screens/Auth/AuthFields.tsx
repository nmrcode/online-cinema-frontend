import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	formState: { errors },
	isPasswordRequired = false,
	register,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email - это обязательное поле',
					pattern: {
						value: validEmail,
						message: 'Пожалуйста, введите валидный Email',
					},
				})}
				placeholder="Email"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Пароль - это обязательное поле',
								minLength: {
									value: 6,
									message: 'Пароль не может быть меньше 6 символов',
								},
						  }
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields

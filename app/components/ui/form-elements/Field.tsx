import cn from 'classnames'
import { forwardRef } from 'react'

import { IField } from '@/ui/form-elements/form.interface'

import s from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, placeholder, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(s.common, s.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...rest} />
				</label>
				{error && <div className={s.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field

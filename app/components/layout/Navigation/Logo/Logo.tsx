import Link from 'next/link'
import { FC } from 'react'

import s from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className={s.logo}>nmrcode</a>
		</Link>
	)
}

export default Logo

import { FC } from 'react'

import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Error500: FC = () => {
	return (
		<Meta title="Страница не найдена">
			<Heading title="500- Server-side error occurred" />
		</Meta>
	)
}

export default Error500

import { FC } from 'react'

import { IHome } from '@/screens/home/home.interface'

import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Онлайн кинотеатр"
			description="Смотрите фильмы и сериалы онлайн"
		>
			<Heading
				title="Смотрите фильмы онлайн !"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home

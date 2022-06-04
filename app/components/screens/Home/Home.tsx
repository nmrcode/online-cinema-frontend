import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import { IHome } from '@/screens/Home/home.interface'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>home page</h1>
		</Layout>
	)
}

export default Home

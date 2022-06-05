import NextProgressBar from 'nextjs-progressbar'
import { FC } from 'react'

import { accentColor } from '@/config/constants'

const HeadProvider: FC<{ children: any }> = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			{children}
		</>
	)
}

export default HeadProvider

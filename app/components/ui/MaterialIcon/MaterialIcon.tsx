import { FC } from 'react'
import * as MDIcons from 'react-icons/md'

import { useRenderClient } from '@/hooks/useRenderClient'

import { TMaterialIconName } from '@/shared/types/icon.types'

const MaterialIcon: FC<{ name: TMaterialIconName }> = ({ name }) => {
	const { isRenderClient } = useRenderClient()

	const IconComponent = MDIcons[name]

	if (isRenderClient) return <IconComponent /> || <MDIcons.MdDragIndicator />
	else return null
}

export default MaterialIcon

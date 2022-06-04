import { FC } from 'react'
import * as MDIcons from 'react-icons/md'

import { TMaterialIconName } from '@/shared/types/icon.types'

const MaterialIcon: FC<{ name: TMaterialIconName }> = ({ name }) => {
	const IconComponent = MDIcons[name]

	return <IconComponent /> || <MDIcons.MdDragIndicator />
}

export default MaterialIcon

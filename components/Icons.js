import { Icon } from 'react-icons-kit'

import { play3 } from 'react-icons-kit/icomoon/play3'
import { cross } from 'react-icons-kit/icomoon/cross'
import { plus } from 'react-icons-kit/icomoon/plus'
import { minus } from 'react-icons-kit/icomoon/minus'
import { spinner11 } from 'react-icons-kit/icomoon/spinner11'
import { stop2 } from 'react-icons-kit/icomoon/stop2'
import { stopwatch } from 'react-icons-kit/icomoon/stopwatch'

export const Plus = () => <Icon icon={plus} />
export const Minus = () => <Icon icon={minus} />
export const Cross = () => <Icon icon={cross} />
export const Play = () => <Icon icon={play3} />
export const Stop = () => <Icon icon={stop2} />
export const Retry = () => <Icon icon={spinner11} />
export const Timer = ({ size }) => <Icon icon={stopwatch} size={size} />
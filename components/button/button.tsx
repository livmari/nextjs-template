import type { FC } from 'react'

import type { btnProps } from './button.types'
import styles from './button.module.scss'

const Button: FC<btnProps> = () => <button className={styles.btn}></button>

export default Button

import React, { FC } from 'react'
import classNames from 'classnames'
import { Layout } from 'antd'

import Logo from '../Logo'

import styles from './styles.module.scss'

const { Header: HeaderBase } = Layout

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  navigationSlot?: React.ReactNode
}

const Header: FC<HeaderProps> = ({ className, navigationSlot, ...props }) => {
  return (
    <HeaderBase className={classNames(className, styles.Header)} {...props}>
      <Logo />
      {navigationSlot}
    </HeaderBase>
  )
}

export default Header

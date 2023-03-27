import React, { FC } from 'react'
import { Layout } from 'antd'

const { Sider } = Layout

interface SidebarProps {
  children?: React.ReactNode
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sider style={{ background: 'white' }} width={260}>
      {children}
    </Sider>
  )
}

export default Sidebar

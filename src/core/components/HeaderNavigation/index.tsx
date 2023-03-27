import { Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

import styles from './styles.module.scss'

const HeaderNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Menu
      className={styles.HeaderNavigation}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[location.pathname]}
      items={[
        { key: '/', label: 'Dashboard', onClick: () => navigate('/') },
        { key: '/users', label: 'Users', onClick: () => navigate('/users') },
        { key: '/about', label: 'About', onClick: () => navigate('/about') },
      ]}
    />
  )
}

export default HeaderNavigation

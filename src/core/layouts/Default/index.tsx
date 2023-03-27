import React from 'react'
import { Outlet } from 'react-router-dom'
import { Breadcrumb, Layout } from 'antd'

import Header from '../../components/Header'
import HeaderNavigation from '../../components/HeaderNavigation'
import Sidebar from '../../components/Sidebar'
import SidebarNavigation from '../../components/SidebarNavigation'
import Footer from '../../components/Footer'

import styles from './styles.module.scss'

const { Content } = Layout

const DefaultLayout = () => {
  return (
    <Layout className={styles.DefaultLayout}>
      <Header className={styles.DefaultLayout__Header} navigationSlot={<HeaderNavigation />} />
      <Content className={styles.DefaultLayout__Container}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <Layout className={styles.DefaultLayout__ContentContainer}>
          <Sidebar>
            <SidebarNavigation />
          </Sidebar>
          <Content className={styles.DefaultLayout__OutletContainer}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer />
    </Layout>
  )
}

export default DefaultLayout

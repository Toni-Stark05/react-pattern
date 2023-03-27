import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import Footer from '../../components/Footer'

import styles from './styles.module.scss'

const { Content } = Layout

const EmptyLayout = () => {
  return (
    <Layout className={styles.EmptyLayout}>
      <Content className={styles.EmptyLayout__Container}>
        <Layout className={styles.EmptyLayout__ContentContainer}>
          <Content className={styles.EmptyLayout__OutletContainer}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer />
    </Layout>
  )
}

export default EmptyLayout

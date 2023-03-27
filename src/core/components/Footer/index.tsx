import React from 'react'
import { Layout } from 'antd'

import styles from './styles.module.scss'

const { Footer: FooterBase } = Layout

const Footer = () => {
  return (
    <FooterBase className={styles.Footer}>Footer</FooterBase>
  )
}

export default Footer

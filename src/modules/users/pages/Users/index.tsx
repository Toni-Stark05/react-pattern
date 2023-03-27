import { useEffect } from 'react'

import { useAppDispatch } from '@/core/app.hook'

import { fetchUsers } from '../../users.actions'
import { clearUsers } from '../../users.slice'

import UsersTable from '../../components/UsersTable'

import styles from './styles.module.scss'

const UsersPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchUsers())

    return () => {
      dispatch(clearUsers())
    }
  }, [dispatch])

  return (
    <div className={styles.UsersPage}>
      <UsersTable />
    </div>
  )
}

export default UsersPage

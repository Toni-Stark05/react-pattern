import { Table } from 'antd'

import { useAppSelector } from '@/core/app.hook'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'E-Mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
]

const UsersTable = () => {
  const { users } = useAppSelector((state) => state.users)

  return <Table dataSource={users.items} columns={columns} />
}

export default UsersTable

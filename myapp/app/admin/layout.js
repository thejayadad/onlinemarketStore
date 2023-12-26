import AdminNavbar from '@/components/admin/AdminNavbar/AdminNavbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <AdminNavbar />
        {children}
    </div>
  )
}

export default layout
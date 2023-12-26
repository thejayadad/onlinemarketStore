import Link from 'next/link'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const AdminCart = ({session}) => {
  return (
    <>
    {session.user.email === 'thejayadad@gmail.com' ? (
      <Link href={'/admin'}>
        <span>Admin</span>
      </Link>
    ) : (
      <FiShoppingCart />
    )}
  </>
  )
}

export default AdminCart
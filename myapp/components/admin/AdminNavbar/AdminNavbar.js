import HeadingText from '@/components/ui/HeadingText'
import getServerUser from '@/lib/getServerUser'
import Link from 'next/link'
import React from 'react'
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi'

const AdminNavbar = async () => {
    const user = await  getServerUser()
    console.log("User " + user.email)
  return (
    <header>
    <div className='max-w-screen-xl mx-auto flex flex-col p-4 py-8'>
        <div className='flex justify-between w-full items-center'>
        <HeadingText
          title={`Welcome ${user.name}`}
          description='Check Out Our Up To Date Store Management'
        />
        <div className='flex items-center px-4'>
        <Link className='links flex items-center flex-col cursor-pointer adjustment' href={'/admin/products'}>
              <FiShoppingCart size={20} className='' />
              Products
            </Link>
            <Link className='links flex-col items-center cursor-pointer adjustment' href={'/'}>
              <FiShoppingBag size={20} className='' />
              Shop
            </Link>
        </div>
        </div>
      <div className='seperator'></div>

      </div>
    </header>
  )
}

export default AdminNavbar
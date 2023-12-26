
import React from 'react'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import {getServerSession} from "next-auth";
import Link from "next/link";
import LoginWithGoogle from '@/components/Button/LoginWithGoogle'
import LogoutButton from '@/components/Button/LogoutButton'
import { FiShoppingCart } from 'react-icons/fi';
import AdminCart from './AdminCart';

const AuthLinks = async () => {
    const session = await getServerSession(authOptions)

  return (
    <div className='flex items-center justify-between w-full gap-2'>
      {!!session && (
        <>
          {session.user.email === 'thejayadad@gmail.com' ? (
            <AdminCart session={session} />
          ) : (
            <Link href={'/shopping-cart'}>
              <FiShoppingCart className='h-6 w-6 hover:text-gray-400' />
            </Link>
          )}
        <div className='flex gap-2'>
        <Link 
        className=''
        href='/profile'>
            <Avatar imageUrl={session.user.image} alt={session.user.name} />
          </Link>
          <LogoutButton />
        </div>
        </>
      )}
      {!session && (
        <>
          <LoginWithGoogle />
        </>
      )}
    </div>
  )
}

const Avatar = ({ imageUrl, alt }) => {
    return (
      <img
        src={imageUrl}
        alt={alt}
        className="rounded-full w-8 h-8 cursor-pointer"
      />
    );
  };

export default AuthLinks
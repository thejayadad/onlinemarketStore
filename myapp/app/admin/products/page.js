import { SubmitButton } from '@/components/Button/SubmitButton'
import CustomNumberInput from '@/components/ui/CustomNumberInput'
import HeadingText from '@/components/ui/HeadingText'
import ImageInput from '@/components/ui/ImageInput'
import Modal from '@/components/ui/Modal'
import PriceInput from '@/components/ui/PriceInput'
import Link from 'next/link'
import { Input } from 'postcss'
import React from 'react'
import { FiPlusCircle, FiShoppingCart } from 'react-icons/fi'

const ProductsPage = ()  => {

    async function create(){
        'use server'
        console.log('create')
    }
  return (
    <section className='flex flex-col px-4 py-8'>
        <div className='flex justify-between max-w-screen-xl mx-auto w-full px-4 py-8'>
        <HeadingText
        title='Products Invetory'
        description={
            <span>
              See Our Latest Inventory{' '}
              <FiShoppingCart size={20} className='inline-block ml-1' />
            </span>
          }

       />
    <div className='flex items-center'>
        <Modal
        opening={<div className='flex-col items-center flex'><FiPlusCircle className='h-8 w-8  adjustment' /><span className='adjustment'>Add ShowCase</span> </div>}
        title={'Showcase'}
        description={'Start Building Your ShowCase Below'}
        className='rounded-full hover:bg-gray-700 flex items-center gap-2 p-2 hover:text-white'>
                    <form
        // action={createShowcase}
        className='flex flex-col'
        >
      <label className="form-control w-full max-w-xs">
      <div className="label">
      <span className="label-text">What is your name?</span>
      <input type="text" name='text' placeholder="Title..." className="input input-bordered w-full max-w-xs" />

      </div>
      </label>
            <label>Description</label>
            <textarea
            placeholder='Description'
            name='description'
            type='text'
            className='textarea textarea-bordered textarea-lg w-full max-w-xl'
            />
            {/* <ImageInput
            type={'file'}
            name={'images'}
            /> */}

            <label className='text-center'>Price$</label>
          <CustomNumberInput
            placeholder='$0'
            name='price'
            type='number'
          />
            <SubmitButton
            />
        </form>
        </Modal>
     
        </div>
        <form
        action={create}

        >
            <input
            type='file'
            placeholder='Image'

            />
            <button type='submit'>Submit</button>
        </form>
        </div>
    </section>
  )
}

export default ProductsPage
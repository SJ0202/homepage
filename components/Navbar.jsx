import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div
            className='fixed w-full h-16 shadow-md z-[100] bg-white flex justify-center'>
            <div className='full-screen flex items-center justify-between px-5 2xl:px-16'>
                <div>
                    <Image src="/assets/logo.svg" alt="/" width='161' height='40'></Image>
                </div>
                <div>
                    <ul className='hidden md:flex uppercase'>
                        <Link href="/">
                            <li className='ml-10 text-sm hover:border-b'>About</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm hover:border-b'>Products</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm hover:border-b'>News</li>
                        </Link>
                        <Link href="/">
                            <li className='ml-10 text-sm hover:border-b'>Contact</li>
                        </Link>
                    </ul>

                    <div onClick={handleNav} className='md:hidden cursor-pointer'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            {/* drawable menu */}
            <div
                className={nav
                    ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                    : ''}>
                <div
                    className={nav
                        ? 'fixed left-0 top-0 w-[75%] h-screen bg-white p-5 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-5 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src="/assets/logo.svg" alt="/" width='161' height='40'></Image>
                            <div onClick={handleNav} className='cursor-pointer'>
                                <AiOutlineClose size={25}/>
                            </div>
                        </div>

                        <div className='border-b border-gray-300 my-4'/>
                    </div>

                    <div className='py-4 flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b'>Products</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b'>News</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm hover:border-b'>Contact</li>
                            </Link>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
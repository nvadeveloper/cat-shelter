import Link from "next/link"
import { Popover } from '@headlessui/react'

const Haeder = () => {
    return (
        <header>
            <div className="border-b-2 border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                    <div>
                        <Link href='/'>
                            <a className="font-bold text-2xl text-blue-600">Rent Boat</a>
                        </Link>
                    </div>
                    <div className="space-x-3 hidden sm:flex">
                        <Link href='/boat'>
                            <a className='rounded-xl py-3 px-4 hover:bg-gray-100'>Катера</a>
                        </Link>
                        <Link href='/yacht'>
                            <a className='rounded-xl py-3 px-4 hover:bg-gray-100'>Яхты</a>
                        </Link>
                        <Link href='/about'>
                            <a className='rounded-xl py-3 px-4 hover:bg-gray-100'>О нас</a>
                        </Link>
                        <div className='rounded-xl py-3 px-4 hover:bg-gray-100 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 22 22" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                    </div>
                    {/* <div className="bg-yellow-900 flex sm:hidden w-10 h-10">
                        
                    </div> */}
                </div>
            </div>
        </header>
    )
}
  
export default Haeder




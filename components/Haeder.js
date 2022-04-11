import Link from "next/link"


const Haeder = () => {
    return (
        <header>
            <div className="border-b-2 border-gray-100">
                <div className="container mx-auto flex items-center justify-between h-20">
                    <div className="">
                        <Link href='/'>
                            <a className="font-bold text-2xl text-blue-600">Rent Boat</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/boat'>
                            <a className='mx-8'>Катера</a>
                        </Link>
                        <Link href='/yacht'>
                            <a className='mx-8'>Яхты</a>
                        </Link>
                        <Link href='/'>
                            <a className='mx-8'>Контакты</a>
                        </Link>
                        <Link href='/'>
                            <a className='mx-8'>О нас</a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
  
export default Haeder

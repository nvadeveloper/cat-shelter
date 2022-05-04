import Image from "next/image"


const About = () => {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="mt-10 font-bold text-3xl">О нас</p>
      <div className="sm:grid  sm:grid-cols-2 sm:gap-10 mt-6 flex flex-wrap-reverse">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className='h-96 w-full relative'>
          <Image
            src='https://res.cloudinary.com/llc-lama/image/upload/v1650640425/b_65_b5f44f961f.jpg'
            layout='fill'
            objectFit='cover'
            alt='Rent Boat image'
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="space-y-4 mt-10 ">
        <details className="group" open>
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
            <h5 className="font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
          </p>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50" >
            <h5 className="font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h5>

            <svg
              className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
            earum similique!
          </p>
        </details>

        
      </div>
    </div>
  )
}

export default About
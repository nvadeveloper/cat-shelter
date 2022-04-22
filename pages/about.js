import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const About = () => {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <p className="mt-10 font-bold text-3xl">О нас</p>
      
    </div>
  )
}

export default About


// const Yacht = () => {
//     return (
//       <> 
//         Yacht
//       </>
//     )
//   }
  
//   export default Yacht

/* This example requires Tailwind CSS v2.0+ */

import { Menu } from '@headlessui/react'

export default function MyDropdown() {
  return (
    <Menu>
      <Menu.Button>
        <div className='bg-red-100 p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          <p>Hahaha</p>
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
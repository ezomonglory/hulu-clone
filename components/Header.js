import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {HomeIcon, CheckBadgeIcon, RectangleStackIcon, BoltIcon, MagnifyingGlassIcon, UserIcon} from "@heroicons/react/24/outline"

function Header() {
  return (
    <header className='flex-col flex items-center sm:flex-row m-5 justify-between '>
        <div className='flex justify-evenly flex-grow max-w-2xl'>
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={BoltIcon} />
            <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
            <HeaderItem title="COLLECTIONS" Icon={RectangleStackIcon} />
            <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>

        <Image 
        className='object-contain'
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        />
    </header>
  )
}

export default Header
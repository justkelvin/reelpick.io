'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { SidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'


function MobileNav() {
  const pathName = usePathname();
  return (
    <section className='w-full max-w-[264]'>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/menu.svg"
            width={36}
            height={36}
            alt='menu'
            className='cursor-pointer sm:hidden'
          />
        </SheetTrigger>
        <SheetContent side="left" className='border-none bg-dark-1'>
          <Link href="/" className='flex items-center gap-1'>
            <Image
              src="/reelpick-logo.png"
              alt='reelpick-logo'
              width={32}
              height={32}
              className='max-sm:size-10'
            />
            <p className='text-[26px] font-extrabold text-white'>ReelPick.io</p>
          </Link>
          <div className='flex h-[calc(100vh-72)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
              <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                {SidebarLinks.map((link) => {
                  const isActive = pathName === link.route;

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60', {
                          'bg-red-1': isActive,
                        })}
                      >
                        <Image
                          className='color-white'
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className='font-semibold'>
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  )
                })}
              </section>
            </SheetClose>

          </div>
        </SheetContent>
      </Sheet>

    </section>
  )
}

export default MobileNav
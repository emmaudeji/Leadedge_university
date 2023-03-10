import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import Link from 'next/link';
import { navlinks } from '@/data/navlinks';
import { dropdownVariants } from './animations/DropdownVariants';
import UseOnClickOutside from '../hooks/useOnClickOutside';

const MobileNav = ({setClick, active, setActive, click }) => {
  return (
    <AnimatePresence>
      {click && <motion.div
        variants={dropdownVariants}
        initial='hidden'
        animate='visible'
        exit='exit'

        className='mobile-nav -z-0'
      >
        <UseOnClickOutside
          show={click}
          onClickOutside={() => setClick(false)}
          component={
             <div className='grid gap-8'>
                {
                  navlinks.map(({id, title, link}) => {
                    return (
                        <div key={id}
                        onClick={() => setClick(false)}>
                          <Link href={link}>
                            <div className={`hover:font-bold duration-300 ${(active === title) ? 'font-bold' : ''} cursor-pointer border-b border-white`}
                            onClick={() => setActive(title)}>
                              {title}
                            </div>
                          </Link>
                      </div>
                    )
                  })
                }
            </div>
          }
        />
      </motion.div>}
    </AnimatePresence>
  )
}

export default MobileNav
  
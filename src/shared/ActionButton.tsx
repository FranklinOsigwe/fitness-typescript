import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {SelectedPage} from './types';

type Props = {
    children : React.ReactNode;
    setSelectedPage: (value: SelectedPage.Benefits | SelectedPage.ContactUs | SelectedPage.Home | SelectedPage.OurClasses) => void;
}

const ActionButton = ({children, setSelectedPage} : Props) => {
  return (
    <AnchorLink className='rounded-md bg-orange-200 px-10 py-2 hover:bg-red-300 hover:text-white ' onClick={() => setSelectedPage(SelectedPage.ContactUs)} href='#contactus'>
        {children}
    </AnchorLink>
  )
}

export default ActionButton
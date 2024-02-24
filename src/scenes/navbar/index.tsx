import { useState } from "react";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";


type Props = {
  selectedPage: SelectedPage.Benefits | SelectedPage.ContactUs | SelectedPage.Home | SelectedPage.OurClasses;
  setSelectedPage: (value: SelectedPage.Benefits | SelectedPage.ContactUs | SelectedPage.Home | SelectedPage.OurClasses) => void;
  isTopOfPage: boolean;
}


const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const [isMenuToggled, setIsMenuToggled] = useState <boolean> (false); 
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';
  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
      <div className='flex items-center justify-between gap-16 w-full'>
        <img src={Logo} alt='logo'/>
        {isAboveMediumScreens ?    (
        <div className='flex items-center justify-between w-full'> 
            <div className='flex items-center justify-between gap-8 text-sm'>
             <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page='Home'/>
              <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page='Benefits'/>
              <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page='Our Classes'/>
              <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page='Contact Us'/>
            </div>
            <div className='flex justify-between gap-8'>
              <p>Sign In</p>
              <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
            </div> 
        </div>
       ) : (
          <button className='rounded-full bg-orange-500 p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <Bars3Icon className='h-6 w-6 text-white' />
          </button>
        )}
      </div>
     
      </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='  ml-[33%] flex flex-col gap-10 text-2xl'>
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-6 w-6 text-gray-400'/>
            </button>
          </div>

          {/* MENU ITEM */}
          <div className='ml-[33%] flex items-center justify-between gap-8 text-sm'>
             <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page={SelectedPage.Home}/>
              <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page={SelectedPage.Benefits}/>
              <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page={SelectedPage.OurClasses}/>
              <Link selectedPage={selectedPage} setSelectedPage={setSelectedPage} page={SelectedPage.ContactUs}/>
            </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar;
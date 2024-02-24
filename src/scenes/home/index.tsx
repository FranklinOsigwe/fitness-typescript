import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')
  return (
 <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
    <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6' onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/* main Header */}
        <div className='z-10 mt-32 md:basis-3/5'>
                {/* Headings */}
            <motion.div className="md:-mt-20" initial='hidden' whileInView='visible' viewport={{once:true,amount: 0.5}} transition={{duration:0.5}} variants={{ hidden:{opacity: 0, x:-50},
        visible: {opacity:1, x: 0}}}>
                    <div className='relative'>
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img alt='home-page-text' src={HomePageText}/>
                        </div>
                    </div>
                    <p className="mt-8 text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit cupiditate rerum dignissimos adipisci corporis incidunt magnam provident expedita earum, sed deleniti dolor, consectetur sequi explicabo modi sapiente enim consequatur.</p>
            </motion.div>
            {/* actions */}
            <div className='mt-8 flex items-center gap-8'>
                <ActionButton setSelectedPage={setSelectedPage}>
                        Join now
                </ActionButton>

                <AnchorLink className="text-sm font-bold text-red-300 underline hover:text-yellow-500" onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
                        <p>Learn More</p>
                </AnchorLink>
            </div>
        </div>

        {/* image */}
        <div>
            <img src={HomePageGraphic} alt='home-pageGraphic' />
        </div>
    </motion.div>

    {/* sponsors */}
        {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-pink-100 py-10'>
                <div className="mx-auto w-5/6">
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img alt='redbull-sponsor' src={SponsorRedBull} />
                        <img alt='forbes-sponsor' src={SponsorForbes} />
                        <img alt='fortune-sponsor' src={SponsorFortune} />
                    </div>
                </div>
            </div>
        )}
 </section>
  )
}

export default Home


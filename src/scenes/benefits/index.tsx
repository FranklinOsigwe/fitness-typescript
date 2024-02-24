import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import {motion} from 'framer-motion';
import Benefit from "./Benefit";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import ActionButton from "@/shared/ActionButton";


const benefits : Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: 'State of the Art Facilities',
        description: 'Neque adipiscing amet enim. Feugiat lorem Neque adipiscing lorem Neque adipiscing amet enim. Feugiat lorem Neque adipiscing amet enim. Feugiat lorem'
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Diverse Classes",
        description: 'Feugiat lorem Neque iscing amet enim. Feugiat adipiscing amet enim. Feugiat lorem'
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: 'Expert and pro Trainers',
        description: 'Neque adipiscing amet enim. Feugiat lorem Neque adipiscing amet enim. Feugiat lorem Neque adipiscing amet enim Feugiat lorem'
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEader */}
            <motion.div className='md:my-5 md:w-3/5'>
                <HText>MORE THAN JUST A GYM.</HText>
                <p className='my-5 text-sm'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, molestiae. Dolores praesentium adipisci quos iusto harum delectus quidem architecto porro, odit animi provident in vitae, dolor sit, amet</p>
            </motion.div>
        {/* Benefit */}
            <motion.div className='md:flex items-center justify-between gap-8 mt-5 initial' initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} variants={container}>
                {benefits.map((benefit : BenefitType) => (
                    <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
                ))}
            </motion.div>

            {/* Graphics */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* Graphic */}
                <img  src={BenefitsPageGraphic} alt='benefits-page-graphic' className='mx-auto'/>

                {/* Description */}
                <div>
                    {/* title */}
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                            <div>
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING <span className='text-pink-400'>FIT</span></HText>
                            </div>
                        </div>

                    </div>
                    {/* description */}
                    <div>
                        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae eius modi adipisci libero nulla maxime est? Suscipit, nisi qui provident, vitae quas nesciunt error porro id quis consequatur magnam.</p>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae eius modi adipisci libero nulla maxime est? Suscipit, nisi qui provident, vitae quas nesciunt error porro id quis consequatur magnam.</p>
                    </div>
                    {/* button */}
                    <div className='relative mt-16'>
                        <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                            <ActionButton setSelectedPage={setSelectedPage}>
                               Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
      </motion.div>
    </section>
  )
}

export default Benefits
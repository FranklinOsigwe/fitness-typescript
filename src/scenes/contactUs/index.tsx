import { SelectedPage } from "@/shared/types";
import {useForm} from 'react-hook-form';
import {motion} from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HText from "@/shared/HText";

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-pink-200 px-5 py-3 placeholder-black outline-none`
    const {register,trigger,formState: {errors}} = useForm();
    const onSubmit = async (e : any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }
  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* Header */}
        <motion.div className="md:w-3/5" initial='hidden' whileInView='visible' viewport={{once:true,amount: 0.5}} transition={{duration:0.5}} variants={{ hidden:{opacity: 0, x:-50}, visible: {opacity:1, x: 0}, }}>
        <HText>
            <span className='text-pink-500'>JOIN NOW</span>
            <p className='my-5'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum obcaecati possimus quaerat ullam blanditiis quis corporis doloribus, nihil aut. Quo fuga earum iste voluptatem illo nobis at. Dolorum, quo
            </p>
        </HText>
        </motion.div>

         {/* Form and Image */}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <div className='mt-10 basis-3/5 md:mt-0'>
                    <form target='_blank' onSubmit={onSubmit} action='https://formsubmit.co/48c1c40367ace54c9778f785d9644cca' method='POST'>
                        <input type='text' className={inputStyles} placeholder="NAME" {...register('name', {required:true, maxLength:100,})}/>
                        {errors.name && (
                            <p className='mt-1 text-red-500'>
                                {errors.name.type === 'required' && 'This field is required'}
                                {errors.name.type === 'maxLength' && 'Max Length is 100 char'}
                            </p>
                        )}
                        <input type='text' className={inputStyles} placeholder="EMAIL" {...register('email', {required:true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,})}/>
                        {errors.email && (
                            <p className='mt-1 text-red-500'>
                                {errors.email.type === 'required' && 'This field is required'}
                                {errors.email.type === 'pattern' && 'invalid email address'}
                            </p>
                        )}

              <textarea rows={4} cols={50} className={inputStyles} placeholder="MESSAGE" {...register('message', {required:true, maxLength:2000,})}/>
                        {errors.message && (
                            <p className='mt-1 text-red-500'>
                                {errors.message.type === 'required' && 'This field is required'}
                                {errors.message.type === 'maxLength' && 'Max Length is 100 char'}
                            </p>
                        )}
                        <button type='submit' className='mt-5 rounded-lg bg-yellow-500 py-3 px-5 transition duration-500 hover:text-white'>
                                    SUBMIT
                        </button>
                    </form>
                </div>
                
                <motion.div className='relative mt-16 basis-2/5 md:mt-0' initial='hidden' whileInView='visible' viewport={{once:true,amount: 0.5}} transition={{delay:0.2, duration:0.5}} variants={{ hidden:{opacity: 0, y:50}, visible: {opacity: 1, y: 0},}}> 
                    <div className="before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] ">
                        <img className='w-full' alt='contact-us-page-graphic' src={ContactUsPageGraphic}/>
                    </div>
                </motion.div>
                
            </div>

        </motion.div>
    </section>
  )
}

export default ContactUs
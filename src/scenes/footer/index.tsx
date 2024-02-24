import Logo from '@/assets/Logo.png';


const Footer = () => {
  return (
    <footer className='bg-pink-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
          <div className='mt-16 basis-1/2 md:mt-0'>
            <img alt='logo' src={Logo} />
            <p className='my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ratione saepe ex ipsum tenetur ad temporibus quia asperiores eligendi in, nostrum blanditiis dolorum ducimus facilis libero qui. Minus, est itaque.</p>
            <p>Evogym All Right Reserved.</p>
          </div>
          <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='mt-16 basis-1/4 md:mt-0'>Links</h4>
            <p className='my-5'>Massa orci senectus</p>
            <p className='my-5'> Et gravida Massa orci senectus</p>
            <p> sit optio non totam aliquam</p>
          </div>
          <div>
          <h4 className='mt-16 basis-1/4 md:mt-0'>Contact us</h4>
            <p className='my-5'>Lorem ipsum dolor sit  Suscipi </p>
            <p className='my-5'> (333)425-6825</p>
            
          
          </div>
        </div>
    </footer>
  )
}

export default Footer
import 'tailwindcss/tailwind.css';
import Image from 'next/image'

export default function Home() {
  return ( 

  <div className="bg-gray-200 h-screen  flex flex-col items-center justify-center" >
    
    <div className="taxt-3xl w-1/2 px-10 ">
      <Image className='items-center mx-auto' src={"/pic/fpic.svg"} width={350} height={80} alt='facebook'/>
      {/* <p className='ml-8 -mt-3'>Facebook help you connect and share with the peopele in your life</p> */}
    </div>
    
    <div className="bg-white flex flex-col p-20 rounded-xl w-1/3">
      <p className='text-center text-2xl  my-4'>
      Log in to Facebook
      </p>
    
      <input className='m-1 border broder-1 broder bg-gray-200  p-4 rounded-md focus:outline-1 outline-blue-800'  type="text" placeholder="email address or phon number"/>
      <input className='m-1 border broder-1 broder bg-gray-200 p-4 rounded-md focus:outline-1 outline-blue-800' type="text" placeholder="password" />
      <button className=' bg-blue-600 font-extrabold  text-white mx-1 my-2 py-4  rounded-md hover:bg-blue-700'>log in</button>
      
      <span className='my-2'>
        <div className='flex space-x-2 justify-center'>
        <p className='text-blue-700 text-center cursor-pointer hover:underline my-0 text-sm'>Forgotten account?</p>
        <p className='text-blue-700 text-center cursor-pointer hover:underline my-0 text-sm'>Sign up for Facebook</p>
        </div>
        <hr />
      </span>
      <button className='bg-green-800 text-white p-2 rounded-md w-fit mx-auto my-2  hover:bg-green-500'>creat new account</button>
    </div>
  </div>
  )
}

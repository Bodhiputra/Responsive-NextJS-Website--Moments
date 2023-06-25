import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1493962621260-74cc5a3baf89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' alt='/' style={{objectFit:"responsive"}} width='677' height='451'/>

            </div>
        <div className='w-full h-full'>
        <Image src= 'https://images.unsplash.com/photo-1600073956897-4fc08a2b27d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' width='215' height='217' style={{objectFit:"responsive, cover"}} />
        </div>
        <div className='w-full h-full'>
        <Image src= 'https://images.unsplash.com/photo-1605025169915-987049301f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' width='215' height='217' style={{objectFit:"responsive, cover"}} />
        </div>
        <div className='w-full h-full'>
        <Image src= 'https://images.unsplash.com/photo-1613956644521-81a9cbe99a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' width='215' height='217' style={{objectFit:"responsive, cover"}} />
        </div>
        <div className='w-full h-full'>
        <Image src= 'https://images.unsplash.com/photo-1506282253012-317dd5a8265a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80' width='215' height='217' style={{objectFit:"responsive, cover"}} />
        </div>
        <div className='w-full h-full'>
        <Image src= 'https://images.unsplash.com/photo-1600073956897-4fc08a2b27d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' width='215' height='217' style={{objectFit:"responsive, cover"}} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
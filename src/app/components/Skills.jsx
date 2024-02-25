import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5196e5]'>Skills- Languages & Frameworks</p>
        <h2 className='py-4'>Languages-Database</h2>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/Cpp.png' alt='/' width='40' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>C++</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/java.png' alt='/' width='40' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JAVA</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/python.png' alt='/' width='40' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>PYTHON</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/mysql.png' alt='/' width='40' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MySql</h3>
                    </div>
                </div>
            </div>
        </div>

        <h2 className='py-4'>Frameworks</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/next.png' alt='/' width='40' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Next.js</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/react.png' alt='/' width='40' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/js.png' alt='/' width='40' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
            </div>
        </div>

        <h2 className='py-4'>Frontend</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/html.png' alt='/' width='50' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/css.png' alt='/' width='35' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
            
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/boot.jpg' alt='/' width='45' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bootstrap</h3>
                    </div>
                </div>
            </div>
        </div>

        <h2 className='py-4'>Backend</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/php.png' alt='/' width='40' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>PHP</h3>
                    </div>
                </div>
            </div>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/node.png' alt='/' width='40' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Node.js</h3>
                    </div>
                </div>
            </div>
            
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/express.png' alt='/' width='55' height='0' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Express.js</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

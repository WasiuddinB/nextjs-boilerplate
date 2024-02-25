import React from 'react'

const Publication = () => {
  return (
    <div>
      <div id='publication' className='w-full py-12'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5196e5]'>
              Publications
            </p>
            <h2 className='py-4'>
              Submissions-
            </h2>
            <p>
              <span className='text-[#5196e5]'>Authors:</span> Tamanna Shermin, Wasi Uddin Bhuyian, Asif Uddin Ahmed, Latin Chakma, Nurzihan Fatema Reya and Abdullah Al Jobair. 
            </p>
            <p>
              <span className='text-[#5196e5]'>Title:</span> Harmonizing the Future: LSTM-Powered Precision in Software Development Effort Estimation with Harmony Search Symphony.
            </p>
            <p>
              <span className='text-[#5196e5]'>Submitted:</span> EASE 2024, The 28th International Conference on Evaluation and Assessment in Software Engineering, 18–21 June, 2024, Salerno, Italy.
            </p>
            
            <p className='mt-8'>
              <span className='text-[#5196e5]'>Authors:</span> Abtahi Ahmed, Farzana Akter Nipa, Wasi Uddin Bhuyian, Khaled Md Mushfique and Dewan Md. Farid.
            </p>
            <p>
              <span className='text-[#5196e5]'>Title:</span> Students’ Performance Prediction with Machine Learning.  
            </p>
            <p>
              <span className='text-[#5196e5]'>Submitted:</span> 6th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT), MIST, Bangladesh, 02-04 May, 2024.
            </p>
            
        </div>
      </div>
    </div>
    </div>
  )
}

export default Publication

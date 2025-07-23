import React, { useState } from 'react'
import abstract from '../assets/Abstract Design.png'
import container from '../assets/Container.png'

const Admission = () => {
    const [data, setData] = useState([
        {
            num: "01",
            name: "Inquiry",
            bio: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy."
        },
        {
            num: "02",
            name: "School Tour",
            bio: "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment."
        },
        {
            num: "03",
            name: "Application Form",
            bio: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable)."
        },
        {
            num: "04",
            name: "Parent Interview",
            bio: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations."
        },
        {
            num: "05",
            name: "Student Assessment",
            bio: "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement."
        },
        {
            num: "06",
            name: "Acceptance",
            bio: "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy."
        }
    ])
    return (
        <main className='mt-[20px]'>
            <section style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='bg-white text-center border-[2px] border-[#262626] lg:text-start lg:h-[485px] lg:px-[100px] py-[50px] gap-[30px] px-[10px] flex flex-col lg:flex-row items-center justify-center rounded-[12px] relative w-[100%]'>
                <aside className='flex flex-col items-center gap-[10px] lg:items-start'>
                    <img className='absolute w-[100px] lg:w-[10%] top-0 left-0' src={abstract} alt="" />
                    <button className='border-[2px] border-[#262626] py-[10px] px-[20px] rounded-[8px]'>Admission</button>
                    <h1 className='lg:text-[48px] text-[28px] font-[700]'>Join Our Family of Young Learners</h1>
                </aside>
                <aside>
                    <p className='lg:w-[700px]'>At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school</p>
                </aside>
            </section>
            <section>
                <div className='text-center flex flex-col gap-[20px] items-center mt-[75px]'>
                    <button className='bg-white border-[2px] py-[10px] px-[20px] font-[500] border-black rounded-[8px]'>Process</button>
                    <h1 className='font-[700] lg:text-[58px]'>Admission Process</h1>
                    <p className='font-[500] lg:text-[20px] lg:w-[992px]'>Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school</p>
                </div>
                <div className='flex flex-wrap gap-[30px] justify-center mt-[50px]'>
                    {data.map((e) => {
                        return (
                            <article>
                                <div className='flex flex-col lg:items-start items-center'>
                                    <button style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='border-[2px] border-[#262626] lg:py-[14px] lg:px-[30px] p-[10px] rounded-[12px] lg:text-[60px] text-[40px] font-[700] bg-white'>{e.num}</button>
                                    <img src={container} alt="" />
                                </div>
                                <div style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='p-[20px] lg:h-[322px] flex flex-col items-start justify-evenly border-[2px] border-[#262626] lg:w-[420px] rounded-[12px] bg-white'>
                                    <h1 className='font-[700] text-[23px] lg:text-[36px]'>{e.name}</h1>
                                    <p className='text-[14px] lg:text-[20px] font-[500]'>{e.bio}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
            <section>
                <div className='text-center flex flex-col gap-[20px] items-center mt-[76px]'>
                    <button className='bg-white border-[2px] py-[10px] px-[20px] font-[500] border-black rounded-[8px]'>Our Features</button>
                    <h1 className='font-[700] lg:text-[58px]'>Fee Structure</h1>
                    <p className='font-[500] lg:text-[20px] lg:w-[992px]'>Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.</p>
                </div>
            </section>
        </main>
    )
}

export default Admission
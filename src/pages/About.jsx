import React, { useState } from 'react'
import abstract from '../assets/Abstract Design.png'
import kooh from '../assets/kooh.png'
import doorbeen from '../assets/doorbeen.png'
import pizza from '../assets/pizza.png'
import analitika from '../assets/analitika.png'
import energy from '../assets/energy.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import kvadrat from '../assets/kvadrat.png'


const About = () => {
    const [data, setData] = useState([
        {
            img: pizza,
            name: "Outstanding Early Childhood Education Awar",
            bio: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
        },
        {
            img: analitika,
            name: "Innovative STEAM Education Award",
            bio: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
        },
        {
            img: energy,
            name: "Environmental Stewardship Award",
            bio: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
        }
    ])
    return (
        <main className='mt-[20px]'>
            <section style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='bg-white border-[2px] border-[#262626] text-center lg:text-start lg:h-[485px] lg:px-[100px] py-[50px] gap-[30px] px-[10px] flex flex-col lg:flex-row items-center justify-center rounded-[12px] relative w-[100%]'>
                <aside className='flex flex-col items-center gap-[10px] lg:items-start'>
                    <img className='absolute w-[100px] lg:w-[10%] top-0 left-0' src={abstract} alt="" />
                    <button className='border-[2px] border-[#262626] py-[10px] px-[20px] rounded-[8px]'>Overview</button>
                    <h1 className='lg:text-[48px] text-[28px] font-[700]'>Welcome to Little Learners Academy</h1>
                </aside>
                <aside>
                    <p className='lg:w-[700px]'>A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.</p>
                </aside>
            </section>
            <section>
                <div className='text-center flex flex-col gap-[20px] items-center mt-[75px]'>
                    <button className='bg-white border-[2px] py-[10px] px-[20px] font-[500] border-black rounded-[8px]'>Mission & Visions</button>
                    <h1 className='font-[700] lg:text-[58px]'>Our Mission & Visions</h1>
                    <p className='font-[500] lg:text-[20px] lg:w-[992px]'>We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.</p>
                </div>
                <div className='flex items-center lg:gap-[15px] gap-[30px] flex-col lg:flex-row mt-[50px] justify-evenly'>
                    <article style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='bg-white border-[2px] border-[#262626] p-[30px] lg:p-[60px] flex flex-col justify-center lg:justify-between gap-[20px] lg:gap-[50px] w-[100%] lg:w-[600px] h-[430px] rounded-[12px]'>
                        <div className='flex justify-between items-center'>
                            <b className='font-[700] text-[24px] lg:text-[48px]'>Mission</b>
                            <img className='w-[50px] lg:w-[80px]' src={kooh} alt="" />
                        </div>
                        <p className='text-[16px] lg:text-[18px] font-[500] text-[#333333]'>At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.</p>
                    </article>
                    <article style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='bg-white border-[2px] border-[#262626] p-[30px] lg:p-[60px] flex flex-col justify-center lg:justify-between w-[100%] gap-[20px] lg:w-[600px] h-[430px] rounded-[12px]'>
                        <div className='flex justify-between items-center'>
                            <b className='font-[700] text-[24px] lg:text-[48px]'>Vision</b>
                            <img className='w-[50px] lg:w-[106px]' src={doorbeen} alt="" />
                        </div>
                        <p className='text-[16px] lg:text-[18px] font-[500] text-[#333333]'>Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.</p>
                    </article>
                </div>
            </section>
            <section>
                <div className='text-center flex flex-col gap-[20px] items-center mt-[75px]'>
                    <button className='bg-white border-[2px] py-[10px] px-[20px] font-[500] border-black rounded-[8px]'>Our Achievements</button>
                    <h1 className='font-[700] lg:text-[58px]'>Our Awards and Recognitions</h1>
                    <p className='font-[500] lg:text-[20px] lg:w-[992px]'>Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.</p>
                </div>
                <div className='flex justify-center lg:mt-[75px] mt-[50px] gap-[90px] flex-wrap'>
                    {data.map((e, i) => {
                        return (
                            <article key={i} style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='flex border-[2px] border-[#262626] relative rounded-[12px] pt-[80px] pb-[50px] px-[50px] flex-col gap-[10px] bg-white lg:w-[404px] items-start'>
                                <img className='absolute top-[-40px] left-[30px]' src={e.img} alt="" />
                                <h1 className='lg:text-[28px] font-[700]'>{e.name}</h1>
                                <p className='lg:text-[20px]'>{e.bio}</p>
                            </article>
                        )
                    })}
                </div>
                <div className='flex items-center justify-between px-[10px] mt-[25px]'>
                    <b>8 More Awards</b>
                    <div className='flex items-center gap-[20px]'>
                        <img className='w-[30px] lg:w-[60px]' src={left} alt="" />
                        <img className='w-[30px] lg:w-[60px]' src={right} alt="" />
                    </div>
                </div>
            </section>
            <section>
                <div className='text-center flex flex-col gap-[20px] items-center mt-[75px]'>
                    <button className='bg-white border-[2px] py-[10px] px-[20px] font-[500] border-black rounded-[8px]'>Our Progressive Journey</button>
                    <h1 className='font-[700] lg:text-[58px]'>Our History</h1>
                    <p className='font-[500] lg:text-[20px] lg:w-[992px]'>Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment</p>
                </div>
                <div className='bg-white flex lg:mt-[50px] mt-[25px] m-auto flex-col gap-[20px] lg:gap-[50px] w-[100%] lg:w-[90%] p-[10px] border-[2px] border-[#262626] lg:p-[100px] rounded-[12px]' style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }}>
                    <article className='flex flex-col justify-center lg:p-[0px] p-[20px] gap-[25px] items-start lg:items-center lg:flex-row bg-white'>
                        <aside>
                            <button className='flex items-center justify-center lg:w-[364px] lg:px-[0px] px-[20px] py-[20px] rounded-[12px] border-[2px] border-[#262626] gap-[30px]' style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }}>
                                <img className='w-[50px]' src={kvadrat} alt="" /> 
                                <b className='font-[700] text-[20px] lg:text-[68px]'>2023</b>
                            </button>
                        </aside>
                        <aside className='flex flex-col gap-[10px] lg:gap-[0px] lg:w-[700px]'>
                            <b className='lg:text-[28px] font-[700]'>Resilience and Future Horizons</b>
                            <p className='lg:text-[20px] font-[500]'>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
                        </aside>
                    </article>
                    <article className='flex flex-col justify-center lg:p-[0px] p-[20px] gap-[25px] items-start lg:items-center lg:flex-row bg-white'>
                        <aside>
                            <button className='flex items-center justify-center lg:w-[364px] lg:px-[0px] px-[20px] py-[20px] rounded-[12px] border-[2px] border-[#262626] gap-[30px]' style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }}>
                                <img className='w-[50px]' src={kvadrat} alt="" />
                                <b className='font-[700] text-[20px] lg:text-[68px]'>2017</b>
                            </button>
                        </aside>
                        <aside className='flex flex-col gap-[10px] lg:gap-[0px] lg:w-[700px]'>
                            <b className='lg:text-[28px] font-[700]'>Innovation and Technology</b>
                            <p className='lg:text-[20px] font-[500]'>Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.</p>
                        </aside>
                    </article>
                    <article className='flex flex-col justify-center lg:p-[0px] p-[20px] gap-[25px] items-start lg:items-center lg:flex-row bg-white'>
                        <aside>
                            <button className='flex items-center justify-center lg:w-[364px] lg:px-[0px] px-[20px] py-[20px] rounded-[12px] border-[2px] border-[#262626] gap-[30px]' style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }}>
                                <img className='w-[50px]' src={kvadrat} alt="" />
                                <b className='font-[700] text-[20px] lg:text-[68px]'>2012</b>
                            </button>
                        </aside>
                        <aside className='flex flex-col gap-[10px] lg:gap-[0px] lg:w-[700px]'>
                            <b className='lg:text-[28px] font-[700]'>Expansion and Recognition</b>
                            <p className='lg:text-[20px] font-[500]'>These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.</p>
                        </aside>
                    </article>
                    <article className='flex flex-col justify-center lg:p-[0px] p-[20px] gap-[25px] items-start lg:items-center lg:flex-row bg-white'>
                        <aside>
                            <button className='flex items-center justify-center lg:w-[364px] lg:px-[0px] px-[20px] py-[20px] rounded-[12px] border-[2px] border-[#262626] gap-[30px]' style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }}>
                                <img className='w-[50px]' src={kvadrat} alt="" />
                                <b className='font-[700] text-[20px] lg:text-[68px]'>2005</b>
                            </button>
                        </aside>
                        <aside className='flex flex-col gap-[10px] lg:gap-[0px] lg:w-[700px]'>
                            <b className='lg:text-[28px] font-[700]'>Resilience and Future Horizons</b>
                            <p className='lg:text-[20px] font-[500]'>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
                        </aside>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default About
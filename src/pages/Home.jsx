import React, { useState } from 'react'
import imageContainer from '../assets/Image Container.png'
import toqi from '../assets/toqi.png'
import korona from '../assets/korona.png'
import piyola from '../assets/piyola.png'
import flag from '../assets/flag.png'
import krug from '../assets/krug.png'
import persons from '../assets/persons.png'
import girl from '../assets/girl.png'
import man from '../assets/man.png'
import woman from '../assets/woman.png'
import stars from '../assets/stars.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import plus from '../assets/plus.png'
import tire from '../assets/tire.png'

const Home = () => {
    const [data, setData] = useState([
        {
            img: toqi,
            name: "Holistic Learning Approach",
            bio: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
        },
        {
            img: korona,
            name: "Experienced Educators",
            bio: "Our passionate and qualified teachers create a supportive and stimulating learning environment."
        },
        {
            img: piyola,
            name: "Nurturing Environment",
            bio: "We prioritize safety and provide a warm and caring atmosphere for every child."
        },
        {
            img: flag,
            name: "Play-Based Learning",
            bio: "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
        },
        {
            img: krug,
            name: "Individualized Attention",
            bio: "Our small class sizes enable personalized attention, catering to each child's unique needs."
        },
        {
            img: persons,
            name: "Parent Involvement",
            bio: "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
        }
    ]);
    const [data2, setData2] = useState([
        {
            img: girl,
            name: "Jennifer B",
            bio: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
        },
        {
            img: man,
            name: "David K",
            bio: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
        },
        {
            img: woman,
            name: "Emily L",
            bio: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
        }
    ]);
    const [data3, setData3] = useState([
        {
            name: "What are the school hours at Little Learners Academy?"
        },
        {
            name: "Is there a uniform policy for students?"
        },
        {
            name: "What extracurricular activities are available for students?"
        },
        {
            name: "What extracurricular activities are available for students?"
        },
        {
            name: "How do you handle food allergies and dietary restrictions?"
        },
        {
            name: "What is the teacher-to-student ratio at Little Learners Academy?"
        },
        {
            name: "How do you handle discipline and behavior management?"
        },
        {
            name: "How do I apply for admission to Little Learners Academy?"
        }
    ])
    const [data4, setData4] = useState([
        {
            name: "About Us",
            bio: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."
        },
        {
            name: "Academics",
            bio: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development."
        },
        {
            name: "Student Life",
            bio: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable."
        },
        {
            name: "Admissions",
            bio: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces."
        }
    ])
    return (
        <main>
            <section className='flex pt-[25px] lg:flex-nowrap flex-wrap lg:justify-evenly flex-col lg:flex-row items-center gap-[20px] lg:gap-[50px] lg:px-[50px]'>
                <aside>
                    <img src={imageContainer} alt="" />
                </aside>
                <aside className='flex text-center lg:text-start flex-col gap-[10px]'>
                    <div className='flex flex-col gap-[10px]'>
                        <b className='border-b-[2px] lg:w-[357px] pb-[5px] lg:text-[22px] font-[500]'>Welcome to Little Learners Academy</b>
                        <div className='lg:text-[54px] text-[30px] font-[800] lg:w-[600px]'>
                            <span>Where Young Minds Blossom and </span>
                            <span className='text-[#FF8D4D]'>Dreams Take Flight. </span>
                        </div>
                    </div>
                    <p className='lg:text-[20px] font-[500] lg:w-[600px]'>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                    <div style={{ boxShadow: '6px 6px 0px 2px #FFBE99' }} className='bg-[#FFEFE5] mt-[10px] gap-[10px]  flex lg:flex-row justify-between flex-col py-[24px] px-[50px] border-[2px] lg:w-[600px] rounded-[12px] border-[#262626]'>
                        <article className='text-center'>
                            <h1 className='lg:text-[32px] font-[800]'>+ 7000</h1>
                            <span>Students Passed Out</span>
                        </article>
                        <article className='text-center'>
                            <h1 className='lg:text-[32px] font-[800]'>+ 37</h1>
                            <span>Awards & Recognitions</span>
                        </article>
                        <article className='text-center'>
                            <h1 className='lg:text-[32px] font-[800]'>+ 15</h1>
                            <span>Experience Educators</span>
                        </article>
                    </div>
                </aside>
            </section>
            <section>
                <div className='text-center flex flex-col gap-[20px] items-center mt-[75px]'>
                    <button className='bg-white border-[2px] py-[10px] px-[20px] font-[500] border-black rounded-[8px]'>Children Deserve Bright Future</button>
                    <h1 className='font-[700] lg:text-[58px]'>Our Benefits</h1>
                    <p className='font-[500] lg:text-[20px] lg:w-[992px]'>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
                    <div className='flex justify-center lg:mt-[75px] mt-[50px] gap-[90px] flex-wrap'>
                        {data.map((e, i) => {
                            return (
                                <article key={i} style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='flex relative border-[2px] border-[#262626] rounded-[12px] pt-[80px] pb-[50px] px-[50px] flex-col gap-[10px] bg-white lg:w-[404px] items-start'>
                                    <img className='absolute top-[-40px] left-[30px]' src={e.img} alt="" />
                                    <h1 className='lg:text-[28px] font-[700]'>{e.name}</h1>
                                    <p className='lg:text-[20px]'>{e.bio}</p>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section>
                <div className='text-center flex flex-col gap-[20px] items-center mt-[75px]'>
                    <button className='bg-white border-[2px] py-[10px] px-[20px] font-[500] border-black rounded-[8px]'>Their Happy Words 🤗</button>
                    <h1 className='font-[700] lg:text-[58px]'>Our Testimonials</h1>
                    <p className='font-[500] lg:text-[20px] lg:w-[992px]'>Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.</p>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-[50px] mt-[75px]'>
                    <img className='hidden lg:block' src={left} alt="" />
                    {data2.map((e, i) => {
                        return (
                            <article style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='lg:w-[325px] h-[462px] border-[2px] border-[#262626] rounded-[12px] p-[50px] bg-white flex flex-col gap-[30px] items-center text-center' key={i}>
                                <img src={e.img} alt="" />
                                <b>{e.name}</b>
                                <img src={stars} alt="" />
                                <p>{e.bio}</p>
                            </article>
                        )
                    })}
                    <img className='hidden lg:block' src={right} alt="" />
                </div>
            </section>
            <section>
                <div className='text-center flex flex-col gap-[20px] items-center mt-[75px]'>
                    <button className='bg-white border-[2px] py-[10px] px-[20px] font-[500] border-black rounded-[8px]'>Solutions For The Doubts</button>
                    <h1 className='font-[700] lg:text-[58px]'>Frequently Asked Questions</h1>
                    <p className='font-[500] lg:text-[20px] lg:w-[992px]'>Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.</p>
                </div>
                <div className='flex flex-wrap justify-center mt-[50px] gap-[20px]'>
                    {data3.map((e, i) => {
                        return (
                            <article key={i} className='flex items-center gap-[10px] justify-between lg:w-[600px] bg-[#FFEFE5] py-[17px] px-[20px] rounded-[12px] border-[2px] border-[#262626]'>
                                <b>{e.name}</b>
                                <img src={plus} alt="" />
                            </article>
                        )
                    })}
                </div>
            </section>
            <section>
                <div className='text-center flex flex-col gap-[20px] items-center mt-[75px]'>
                    <button className='bg-white border-[2px] py-[10px] px-[20px] font-[500] border-black rounded-[8px]'>Explore More</button>
                    <h1 className='font-[700] lg:text-[58px]'>Navigate through our Pages</h1>
                    <p className='font-[500] lg:text-[20px] lg:w-[992px]'>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>
                </div>
                <div className='flex flex-wrap justify-center gap-[50px] mt-[50px]'>
                    {data4.map((e, i) => {
                        return (
                            <article key={i} style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='bg-white border-[2px] border-[#262626] justify-between p-[20px] rounded-[12px] lg:p-[80px] text-center lg:w-[600px] flex flex-col gap-[40px] lg:gap-[80px]'>
                                <div className='flex flex-col gap-[30px]'>
                                    <h1 className='lg:text-[48px] font-[700]'>{e.name}</h1>
                                    <img src={tire} alt="" />
                                    <p className='font-[500] lg:text-[20px]'>{e.bio}</p>
                                </div>
                                <button className='bg-[#FFDECC] border-[2px] py-[18px] text-[20px] font-[500] border-[#262626] rounded-[10px]' style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }}>Learn More</button>
                            </article>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Home
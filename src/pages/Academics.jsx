import React, { useState } from 'react'
import abstract from '../assets/Abstract Design.png'
import pizza from '../assets/pizza.png'
import analitika from '../assets/analitika.png'
import energy from '../assets/energy.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import left from '../assets/left.png'
import right from '../assets/right.png'


const Academics = () => {
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
        },
        {
            img: energy,
            name: "Art and Creativity",
            bio: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."
        },
        {
            img: analitika,
            name: "Outdoor Education",
            bio: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."
        },
        {
            img: pizza,
            name: "Play-Based Learning",
            bio: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."
        }
    ])
    const [data2, setData2] = useState([
        {
            img: img1,
            name: "Language Arts",
            bio: "Reading, writing, storytelling, and communication skills."
        },
        {
            img: img2,
            name: "Mathematics",
            bio: "Number sense, basic operations, problem-solving, and logic."
        },
        {
            img: img3,
            name: "Science",
            bio: "Exploring the natural world through hands-on experiments and investigations."
        },
        {
            img: img4,
            name: "Social Studies",
            bio: "Cultivating an understanding of diverse cultures and communities."
        },
        {
            img: img5,
            name: "Arts and Crafts",
            bio: "Encouraging creativity through various art forms and crafts."
        },
        {
            img: img6,
            name: "Physical Education",
            bio: "Promoting physical fitness, coordination, and teamwork."
        }
    ])
    return (
        <main className='mt-[20px]'>
            <section style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='bg-white text-center border-[2px] border-[#262626] lg:text-start lg:h-[485px] lg:px-[100px] py-[50px] gap-[30px] px-[10px] flex flex-col lg:flex-row items-center justify-center rounded-[12px] relative w-[100%]'>
                <aside className='flex flex-col items-center gap-[10px] lg:items-start'>
                    <img className='absolute w-[100px] lg:w-[10%] top-0 left-0' src={abstract} alt="" />
                    <button className='border-[2px] border-[#262626] py-[10px] px-[20px] rounded-[8px]'>Academics</button>
                    <h1 className='lg:text-[48px] text-[28px] font-[700]'>Nurturing Young Minds for Success</h1>
                </aside>
                <aside>
                    <p className='lg:w-[700px]'>Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.</p>
                </aside>
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
                            <article key={i} style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='flex relative border-[2px] border-[#262626] rounded-[12px] p-[20px] pt-[50px] lg:pt-[80px] lg:pb-[50px] lg:px-[50px] flex-col gap-[10px] bg-white lg:w-[404px] items-start'>
                                <img className='absolute top-[-40px] left-[30px]' src={e.img} alt="" />
                                <h1 className='lg:text-[28px] font-[700]'>{e.name}</h1>
                                <p className='lg:text-[20px]'>{e.bio}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
            <section>
                <div className='text-center flex flex-col gap-[20px] items-center mt-[75px]'>
                    <button className='bg-white border-[2px] py-[10px] px-[20px] font-[500] border-black rounded-[8px]'>Our Features</button>
                    <h1 className='font-[700] lg:text-[58px]'>What Students Learn</h1>
                    <p className='font-[500] lg:text-[20px] lg:w-[992px]'>At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include</p>
                </div>
                <div className='flex justify-center lg:mt-[75px] mt-[50px] gap-[90px] flex-wrap'>
                    {data2.map((e, i) => {
                        return (
                            <article key={i} style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='flex relative border-[2px] border-[#262626] rounded-[12px] p-[20px] lg:pt-[80px] lg:pb-[50px] lg:px-[50px] flex-col gap-[10px] bg-white lg:w-[404px] items-center text-center'>
                                <img src={e.img} alt="" />
                                <h1 className='lg:text-[28px] font-[700]'>{e.name}</h1>
                                <p className='lg:text-[20px]'>{e.bio}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
            <section>
                <div className='text-center flex flex-col gap-[20px] items-center mt-[75px]'>
                    <button className='bg-white border-[2px] py-[10px] px-[20px] font-[500] border-black rounded-[8px]'>Our Gallery</button>
                    <h1 className='font-[700] lg:text-[58px]'>Our Rooms Gallery</h1>
                    <p className='font-[500] lg:text-[20px] lg:w-[992px]'>Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.</p>
                </div>
                <div className='flex flex-wrap justify-center gap-[10px] mt-[20px]'>
                    <button className='bg-white border-[#333333] border-[2px] p-[5px] lg:py-[14px] lg:px-[20px] rounded-[8px] text-[#1A1A1A] lg:text-[20px] font-[600]'>
                        All
                    </button>
                    <button className='bg-white border-[#333333] border-[2px] p-[5px] lg:py-[14px] lg:px-[20px] rounded-[8px] text-[#1A1A1A] lg:text-[20px] font-[600]'>
                        Classrooms
                    </button>
                    <button className='bg-white border-[#333333] border-[2px] p-[5px] lg:py-[14px] lg:px-[20px] rounded-[8px] text-[#1A1A1A] lg:text-[20px] font-[600]'>
                        Library
                    </button>
                    <button className='bg-white border-[#333333] border-[2px] p-[5px] lg:py-[14px] lg:px-[20px] rounded-[8px] text-[#1A1A1A] lg:text-[20px] font-[600]'>
                        Science Lab
                    </button>
                    <button className='bg-white border-[#333333] border-[2px] p-[5px] lg:py-[14px] lg:px-[20px] rounded-[8px] text-[#1A1A1A] lg:text-[20px] font-[600]'>
                        Computer Lab
                    </button>
                    <button className='bg-white border-[#333333] border-[2px] p-[5px] lg:py-[14px] lg:px-[20px] rounded-[8px] text-[#1A1A1A] lg:text-[20px] font-[600]'>
                        Garden and Nature Area
                    </button>
                </div>
                <div>
                    <div className='flex gap-[30px] relative top-[110px] justify-center'>
                        <img className='w-[200px] lg:w-[200px]' src={img1} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img2} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img3} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img4} alt="" />
                    </div>
                    <div style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='bg-white border-[2px] px-[20px] lg:px-[53px] gap-[20px] flex flex-col lg:gap-[50px] border-[#262626] h-[414px] rounded-[12px]'>
                        <div className='flex items-center flex-col lg:flex-col justify-between mt-[125px] lg:gap-[0px] gap-[10px] lg:mt-[125px]'>
                            <b className='lg:text-[40px] font-[700]'>Classrooms</b>
                            <div className='flex items-center gap-[20px]'>
                                <img className='w-[30px] lg:w-[60px]' src={left} alt="" />
                                <img className='w-[30px] lg:w-[60px]' src={right} alt="" />
                            </div>
                        </div>
                        <p className='lg:text-[22px] text-center font-[500]'>Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.</p>
                    </div>
                </div>
                <div>
                    <div className='flex gap-[30px] relative top-[110px] justify-center'>
                        <img className='w-[200px] lg:w-[200px]' src={img4} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img3} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img2} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img1} alt="" />
                    </div>
                    <div style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='bg-white border-[2px] px-[20px] lg:px-[53px] gap-[20px] flex flex-col lg:gap-[50px] border-[#262626] h-[414px] rounded-[12px]'>
                        <div className='flex items-center flex-col lg:flex-col justify-between mt-[125px] lg:gap-[0px] gap-[10px] lg:mt-[125px]'>
                            <b className='lg:text-[40px] font-[700]'>Library</b>
                            <div className='flex items-center gap-[20px]'>
                                <img className='w-[30px] lg:w-[60px]' src={left} alt="" />
                                <img className='w-[30px] lg:w-[60px]' src={right} alt="" />
                            </div>
                        </div>
                        <p className='lg:text-[22px] text-center font-[500]'>Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.</p>
                    </div>
                </div>
                <div>
                    <div className='flex gap-[30px] relative top-[110px] justify-center'>
                        <img className='w-[200px] lg:w-[200px]' src={img1} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img2} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img3} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img4} alt="" />
                    </div>
                    <div style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='bg-white border-[2px] px-[20px] lg:px-[53px] gap-[20px] flex flex-col lg:gap-[50px] border-[#262626] h-[414px] rounded-[12px]'>
                        <div className='flex items-center flex-col lg:flex-col justify-between mt-[125px] lg:gap-[0px] gap-[10px] lg:mt-[125px]'>
                            <b className='lg:text-[40px] font-[700]'>Science Lab</b>
                            <div className='flex items-center gap-[20px]'>
                                <img className='w-[30px] lg:w-[60px]' src={left} alt="" />
                                <img className='w-[30px] lg:w-[60px]' src={right} alt="" />
                            </div>
                        </div>
                        <p className='lg:text-[22px] text-center font-[500]'>Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.</p>
                    </div>
                </div>
                <div>
                    <div className='flex gap-[30px] relative top-[110px] justify-center'>
                        <img className='w-[200px] lg:w-[200px]' src={img3} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img1} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img2} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img4} alt="" />
                    </div>
                    <div style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='bg-white border-[2px] px-[20px] lg:px-[53px] gap-[20px] flex flex-col lg:gap-[50px] border-[#262626] h-[414px] rounded-[12px]'>
                        <div className='flex items-center flex-col lg:flex-col justify-between mt-[125px] lg:gap-[0px] gap-[10px] lg:mt-[125px]'>
                            <b className='lg:text-[40px] font-[700]'>Computer Lab</b>
                            <div className='flex items-center gap-[20px]'>
                                <img className='w-[30px] lg:w-[60px]' src={left} alt="" />
                                <img className='w-[30px] lg:w-[60px]' src={right} alt="" />
                            </div>
                        </div>
                        <p className='lg:text-[22px] text-center font-[500]'>Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills</p>
                    </div>
                </div>
                <div>
                    <div className='flex gap-[30px] relative top-[110px] justify-center'>
                        <img className='w-[200px] lg:w-[200px]' src={img1} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img3} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img4} alt="" />
                        <img className='hidden lg:block w-[200px]' src={img2} alt="" />
                    </div>
                    <div style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='bg-white border-[2px] px-[20px] lg:px-[53px] gap-[20px] flex flex-col lg:gap-[50px] border-[#262626] h-[414px] rounded-[12px]'>
                        <div className='flex items-center flex-col lg:flex-col justify-between mt-[125px] lg:gap-[0px] gap-[10px] lg:mt-[125px]'>
                            <b className='lg:text-[40px] font-[700]'>Garden and Nature Area</b>
                            <div className='flex items-center gap-[20px]'>
                                <img className='w-[30px] lg:w-[60px]' src={left} alt="" />
                                <img className='w-[30px] lg:w-[60px]' src={right} alt="" />
                            </div>
                        </div>
                        <p className='lg:text-[22px] text-center font-[500]'>Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Academics
import React, { useState } from 'react'
import logo from '../assets/Top Banner.png'
import shape from '../assets/shape-14.png'
import { NavLink, Outlet } from 'react-router-dom'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'
import geo from '../assets/geo.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedIn from '../assets/linkedIn.png'
import sideBar from '../assets/SideBar.png'

const Layout = () => {
    const [modal, setModal] = useState(false)
    function showModal() {
        setModal(true);
        console.log(1);
    }
    return (
        <>
            <div className={`fixed inset-0 z-50 ${modal ? '' : 'pointer-events-none'}`}>
                <div
                    className={`absolute inset-0 bg-black/30 backdrop-blur-[5px] transition-opacity duration-300 ${modal ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setModal(false)}
                ></div>

                <div
                    className={`absolute right-0 top-0 h-full w-[250px] bg-white border-l-[2px] border-[#262626] shadow-lg p-[20px] flex flex-col gap-[15px]
        transform transition-transform duration-300 ease-in-out
        ${modal ? 'translate-x-0' : 'translate-x-full'}
        `}
                >
                    <NavLink
                        to="/"
                        onClick={() => setModal(false)}
                        className={({ isActive }) =>
                            isActive
                                ? 'bg-[#FFEFE5] py-[12px] px-[12px] border-x-[2px] rounded'
                                : 'py-[12px] px-[12px] rounded'
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={() => setModal(false)}
                        className={({ isActive }) =>
                            isActive
                                ? 'bg-[#FFEFE5] py-[12px] px-[12px] border-x-[2px] rounded'
                                : 'py-[12px] px-[12px] rounded'
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/academics"
                        onClick={() => setModal(false)}
                        className={({ isActive }) =>
                            isActive
                                ? 'bg-[#FFEFE5] py-[12px] px-[12px] border-x-[2px] rounded'
                                : 'py-[12px] px-[12px] rounded'
                        }
                    >
                        Academics
                    </NavLink>

                    <button
                        onClick={() => setModal(false)}
                        className="mt-auto  text-left border-[2px] font-boldcd text-red-500 bg-white border-red-500 p-[10px] rounded-[10px]"
                    >
                        Close
                    </button>
                </div>
            </div>

            <div className='p-[20px] bg-[#FFF5F0]'>
                <header>
                    <img className='w-[100%] rounded-[6px] lg:h-[100%] h-[25px] object-cover' src={logo} alt="" />
                    <nav className='flex items-center bg-white border-[2px] mt-[10px] rounded-[12px] justify-between border-[#262626]'>
                        <button className='flex gap-[5px] bg-[#FF8D4D] rounded-l-[12px] border-r-[2px] py-[12px] lg:py-[10px] px-[12px] items-center'>
                            <img src={shape} alt="" />
                            <b className='text-[15px]'>Little Learners</b>
                        </button>
                        <ul className='lg:flex hidden text-center items-center gap-[30px]'>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-[#FFEFE5] py-[18px] px-[12px] border-x-[2px]'
                                        : 'py-[18px] px-[12px]'
                                }
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-[#FFEFE5] py-[18px] px-[12px] border-x-[2px]'
                                        : 'py-[18px] px-[12px]'
                                }
                            >
                                About
                            </NavLink>

                            <NavLink
                                to="/academics"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-[#FFEFE5] py-[18px] px-[12px] border-x-[2px]'
                                        : 'py-[18px] px-[12px] border-x-[2px]'
                                }
                            >
                                Academics
                            </NavLink>

                            <li className='py-[18px] px-[12px]'>Admissions</li>
                            <li className='py-[18px] px-[12px] border-l-[2px]'>Student Life</li>
                            <li className='bg-[#FFAE80] py-[18px] px-[12px] rounded-r-[12px] border-l-[2px]'>Contact</li>
                        </ul>
                        <img onClick={() => showModal()} src={sideBar} className='lg:hidden block bg-[#FFEFE5] p-[18px] rounded-r-[10px] border-l-[2px]' alt="" />
                    </nav>
                </header>
                <Outlet />
                <footer style={{ boxShadow: '6px 6px 0px 2px #1E1E1E' }} className='lg:p-[75px] mt-[50px] flex flex-col gap-[20px] p-[25px] bg-white rounded-[12px] border-[2px]'>
                    <div className='flex gap-[20px] flex-wrap text-[14px] lg:text-[18px] lg:flex-row flex-col justify-between'>
                        <article className='flex flex-col gap-[30px]'>
                            <div className='flex flex-col gap-[10px]'>
                                <button className='flex gap-[5px] items-center'>
                                    <img src={shape} alt="" />
                                    <b>Little Learners</b>
                                </button>
                                <p className='text-[#4C4C4D] text-[20px] font-[500] lg:w-[519px]'>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                            </div>
                            <div className='flex flex-col gap-[20px]'>
                                <button className='flex items-center gap-[5px]'>
                                    <img src={mail} alt="" />
                                    <b>hello@littlelearners.com</b>
                                </button>
                                <button className='flex items-center gap-[5px]'>
                                    <img src={phone} alt="" />
                                    <b>+91 91813 23 2309</b>
                                </button>
                                <button className='flex items-center gap-[5px]'>
                                    <img src={geo} alt="" />
                                    <b>Somewhere in the World</b>
                                </button>
                            </div>
                        </article>
                        <article className='flex flex-col gap-[10px]'>
                            <b>Home</b>
                            <ul className='flex flex-col gap-[5px]'>
                                <li>Features</li>
                                <li>Our Testimonials</li>
                                <li>FAQ</li>
                            </ul>
                        </article>
                        <article className='flex flex-col gap-[10px]'>
                            <b>About Us</b>
                            <ul className='flex flex-col gap-[5px]'>
                                <li>Our Mission</li>
                                <li>Our Vission</li>
                                <li>Awards and Recognitions</li>
                                <li>History</li>
                                <li>Teachers</li>
                            </ul>
                        </article>
                        <article className='flex flex-col gap-[10px]'>
                            <b>Academics</b>
                            <ul className='flex flex-col gap-[5px]'>
                                <li>Special Features</li>
                                <li>Gallery</li>
                            </ul>
                        </article>
                        <article className='flex flex-col gap-[10px]'>
                            <b>Contact Us</b>
                            <ul className='flex flex-col gap-[5px]'>
                                <li>Information</li>
                                <li>Map & Direction</li>
                            </ul>
                        </article>
                    </div>
                    <div className='flex items-center gap-[20px] lg:flex-row flex-col mt-[25px] justify-between border-y-[2px] py-[25px]'>
                        <div className='flex text-[14px] lg:text-[18px] items-center gap-[10px]'>
                            <b>Terms of Service</b>
                            <b className='border-x-[2px] px-[10px]'>Privacy Policy</b>
                            <b>Cookie Policy</b>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={linkedIn} alt="" />
                        </div>
                    </div>
                    <p className='text-center mt-[25px]'>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
                </footer>
            </div>
        </>
    )
}

export default Layout
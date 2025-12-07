import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ isSidebarOpen, handleToggleSidebar }) => {
    return (
        <>
            {/* ======= Sidebar Menu ======= */}
            {isSidebarOpen && (
                <section className='fixed md:static inset-0 z-50 md:z-auto'>
                    <div className='w-full md:w-[240px] h-screen bg-[#F4F4F5] py-8 px-5 flex flex-col justify-between'>
                        <div className=''>
                            <div className='flex justify-between items-center'>
                                <div className='relative w-fit'>
                                    <div className='w-[50px] h-[30px] bg-[#27104A] flex items-center justify-center'>
                                        <p className='text-white font-bold text-[15px] left-[15%] z-10 absolute top-[15%]'>Super</p>
                                    </div>
                                    <div className='w-[50px] h-[30px] bg-[#27104A] -z-10 flex items-center justify-end transform rotate-[-8deg] origin-top-left translate-x-2 -translate-y-2'>
                                        <p className='text-white font-bold text-[15px] mt-3'>board</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='cursor-pointer'>
                                        <img src="Frame.svg" alt="" className='w-[24px] h-[24px]' />
                                    </div>
                                    <button onClick={handleToggleSidebar} className='md:hidden mx-2 cursor-pointer'>
                                        {isSidebarOpen ? <IoClose className='w-[24px] h-[24px]' /> : <IoMenu className='w-[24px] h-[24px]' />}
                                    </button>
                                </div>
                            </div>
                            <div className='py-[54px] '>
                                <div className='w-[200px] flex px-2 items-center h-[36px] bg-[#E7E7E9] rounded-[10px]'>
                                    <img src="star.svg" alt="" className='w-[20] h-[20px]' />
                                    <h3 className='text-sm font-medium px-2'>Quests</h3>
                                </div>
                                <div className='w-[200px] flex px-2 items-center h-[36px] hover:bg-[#E7E7E9] cursor-pointer my-4 rounded-[10px]'>
                                    <img src="network.svg" alt="" className='w-[20] h-[20px]' />
                                    <h3 className='text-sm font-medium px-2'>Leaderboard</h3>
                                </div>
                                <div className='w-[200px] flex px-2 items-center h-[36px] hover:bg-[#E7E7E9] my-4 cursor-pointer rounded-[10px]'>
                                    <img src="save.svg" alt="" className='w-[20] h-[20px]' />
                                    <h3 className='text-sm font-medium px-2'>Your activity</h3>
                                </div>
                                <div className='w-[200px] flex px-2 items-center h-[36px] hover:bg-[#E7E7E9] my-4 cursor-pointer rounded-[10px]'>
                                    <img src="play.svg" alt="" className='w-[20] h-[20px]' />
                                    <h3 className='text-sm font-medium px-2'>Mini Games</h3>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex cursor-pointer'>
                                <img src="support.svg" alt="" className='w-[20px] h-[20px]' />
                                <h2 className='font-medium text-sm ml-2'>Support</h2>
                            </div>
                            <div className='flex cursor-pointer my-5'>
                                <img src="Lightmode.svg" alt="" className='w-[20px] h-[20px]' />
                                <h2 className='font-medium text-sm ml-2'>Light Mode</h2>
                            </div>
                            <div className='border border-b-[#00000000]'></div>

                            <div className='flex justify-between items-center'>
                                <div className='flex cursor-pointer my-5'>
                                    <img src="Profile.svg" alt="" className='w-[20px] h-[20px]' />
                                    <div className=''>
                                        <h2 className='font-medium text-sm ml-2'>Profile</h2>
                                        <p className='text-xs ml-2 font-medium text-[#A3A3A3]'>0x81D...886C7</p>
                                    </div>
                                </div>
                                <div className='cursor-pointer'>
                                    <img src="Arror.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Sidebar
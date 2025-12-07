import React, { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const campaignData = [
        {
            id: 1,
            bgGradient: 'from-[#D8FF98] to-[#FAFAFA]',
            image: 'CampaignPass.svg',
            title: '1. Mint Campaign Pass',
            description: 'Mint the campaign pass, make a bridge, and get ranked by your bridging amount — minimum $5 to appear on the leaderboard.',
            reward: '50 SUPR',
            buttonWidth: 'w-[167px]',
            buttonText: 'Mint Campaign Pass',
            showIcon: false
        },
        {
            id: 2,
            bgGradient: 'from-[#FFA5FF] to-[rgba(255,165,255,0)]',
            image: 'Bridge.svg',
            title: '2. Bridge Assets',
            description: 'Mint the campaign pass, make a bridge, and get ranked by your bridging amount — minimum $5 to appear on the leaderboard.',
            reward: '50 SUPR',
            buttonWidth: 'w-[161px]',
            showIcon: true,
            iconImage: "Look.svg",
            buttonText: 'Bridge Assets'
        },
        {
            id: 3,
            bgGradient: 'from-[#68FF9F] to-[#22C55E00]',
            image: 'Trade.svg',
            title: '3. Trade',
            description: 'Mint the campaign pass, make a bridge, and get ranked by your bridging amount — minimum $5 to appear on the leaderboard.',
            reward: '50 SUPR',
            showIcon: true,
            buttonWidth: 'w-[103px]',
            iconImage: "Look.svg",
            buttonText: 'Trade'
        },
    ]

    const boostData = [
        {
            id: 1,
            boostValue: '1.25x',
            description: 'Do a min volume of 10,000 USD every week for a min of 4 weeks to apply this boost'
        },
        {
            id: 2,
            boostValue: '1.25x',
            description: 'Do a min volume of 10,000 USD every week for a min of 4 weeks to apply this boost'
        },
        {
            id: 3,
            boostValue: '1.25x',
            description: 'Achieve 50,000 USD trading volume over 8 weeks for maximum boost'
        }
    ]

    const tableData = [
        {
            rant: 1,
            User: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
            DefxPointsBoost: "1",
            BridgedVolume: "$250.00",
        },
        {
            rant: 2,
            User: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
            DefxPointsBoost: "1",
            BridgedVolume: "$250.00",
        },
        {
            rant: 3,
            User: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
            DefxPointsBoost: "1",
            BridgedVolume: "$250.00",
        },
        {
            rant: 4,
            User: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
            DefxPointsBoost: "1",
            BridgedVolume: "$250.00",
        },
        {
            rant: 5,
            User: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
            DefxPointsBoost: "1",
            BridgedVolume: "$250.00",
        },
        {
            rant: 6,
            User: "0x81D21D4A310f3D7680aA286f306ABA2D566886C7",
            DefxPointsBoost: "1",
            BridgedVolume: "$250.00",
        },
    ]


    return (
        <>
            <div className='md:flex'>

                {/* ======= Left Sidebar Wrapper ======= */}

                <div className='md:w-[240px] md:flex-shrink-0'>
                    <Sidebar 
                        isSidebarOpen={isSidebarOpen} 
                        handleToggleSidebar={handleToggleSidebar} 
                    />
                </div>

                <div className='flex flex-col w-full'>

                    {/* ======= Quests Hero Section (Search Bar, Actions, Banner) ======= */}

                    <section className='px-4 py-4'>
                        <div className='flex justify-between items-center mb-4'>
                            <div className='w-[170px] md:w-[375px] flex items-center px-3 h-[43px] rounded-2xl bg-[#F4F4F5]'>
                                <img src="search.svg" alt="" className='w-[18px] h-[18px]' />
                                <input
                                    type="text"
                                    className='w-full border-none bg-transparent text-[16px] py-2 px-2 focus:outline-none placeholder:text-[#A3A3A3]'
                                    placeholder='Search Quests'
                                />
                            </div>


                            <div className='flex items-center gap-3'>
                                <div className='hidden  md:flex items-center py-2 px-4 rounded-2xl border border-[#D4D4D4] cursor-pointer hover:bg-gray-50'>
                                    <img src="Unlock.svg" alt="" className='w-[20px] h-[20px]' />
                                    <h2 className='ml-2 text-[16px] font-medium text-[#737373] font-sm whitespace-nowrap'>Unlock Daily Treats</h2>
                                </div>

                                <div className='px-2 rounded-[10px] md:px-6 flex justify-center items-center py-1 md:rounded-3xl bg-[#86EFAC] cursor-pointer hover:bg-[#6EE7A0]'>
                                    <button className='text-[10px] md:text-[16px] font-medium cursor-pointer'>Sign In</button>
                                </div>

                                <button onClick={handleToggleSidebar} className='md:hidden mx-2 cursor-pointer'>
                                    {isSidebarOpen ? <IoClose className='w-[24px] h-[24px]' /> : <IoMenu className='w-[24px] h-[24px]' />}
                                </button>


                            </div>
                        </div>

                        <div className='bg-gradient-to-b w-[1,200px] h-[398px] from-[#4948FF] to-[rgba(73,72,255,0)] p-4 rounded-2xl'>
                            <div className='flex justify-between text-white items-center mx-10 my-10'>
                                <div className='bg-[#FFFFFF1A] cursor-pointer font-bold  w-[70px] h-[30px] flex justify-center items-center rounded-2xl'>
                                    <img src="arrowback.svg" alt="" />
                                    <button className='text-[12px] cursor-pointer'>Back</button>
                                </div>
                                <div className='bg-[#FFFFFF1A] cursor-pointer font-bold  w-[70px] h-[30px] flex justify-center items-center rounded-2xl'>
                                    <button className='cursor-pointer text-[12px]'>Share</button>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div>
                                    <img src="banner.svg" alt="" className='w-[211px] h-[211px]' />
                                </div>

                                <div className='mx-5'>
                                    <div className='bg-[#FFFFFF80] flex items-center w-[279.89px] h-[40px] rounded-3xl'>
                                        <img className='ml-3 w-[24px] h-[24px]' src="gift.svg" alt="" />
                                        <p className='text-[12px] font-bold'>$10000 USDC + Boosted Defx Points</p>
                                        <img src="rightarrow.svg" alt="" className='m-2' />
                                    </div>
                                    <div className='my-4'>
                                        <h2 className='text-2xl mx-2 md:mx-0 md:text-3xl mb-2 font-bold'>Defx's Fee-Free Frenzy</h2>
                                        <p className='text-sm mx-2 md:mx-0 font-medium max-w-80'>Join Defx's Fee-Free Frenzy — trade perpetuals on a purpose-built CLOB L1 with zero fees and sub-millisecond execution.</p>
                                    </div>
                                    <div className='flex mx-2 md:mx-0'>
                                        <div className='mr-10 flex'>
                                            <img src="mens.svg" alt="" />
                                            <p className='ml-2 font-semibold'>27,213 chads</p>
                                        </div>
                                        <div className='mr-10 flex'>
                                            <img src="Defx.svg" alt="" />
                                            <p className='ml-1 text-[14px] font-semibold'>Defx</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ======= Campaign Section ======= */}

                    <section className='mx-5 md:px-4 py-4'>
                        <div className='flex justify-between items-center md:mx-5'>
                            <div className=' flex'>
                                <div className='w-[30px] h-[30px] md:w-[48px] flex justify-center items-center md:h-[48px] rounded-2xl bg-[#DCFCE7]'>
                                    <img src="playgreen.svg" alt="" className='w-[20px]' />
                                </div>
                                <div className='mx-2'>
                                    <h2 className='md:text-2xl text-[#404040] font-bold'>Get Started</h2>
                                    <p className='text-[12px] md:text-sm text-[#737373]'>Get started by Minting the Campaign Pass</p>
                                </div>
                            </div>
                            <div className='w-[75px] flex justify-center items-center h-[39px] rounded-2xl bg-[#7C3DC8]'>
                                <p className='text-white'>Trade</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                            {
                                campaignData.map((items, index) => (
                                    <div key={index} className='my-5 mx-auto md:mx-5 w-full max-w-[350px] md:w-[350px]'>
                                        <div className={`bg-gradient-to-b flex justify-center items-center w-full md:w-[354px] h-[200px] ${items.bgGradient}`}>
                                            <img src={items.image} alt="" className="max-w-full h-auto" />
                                        </div>
                                        <div>
                                            <h2 className='text-lg font-bold  text-[#404040] mt-3'>{items.title}</h2>
                                            <p className='w-full md:w-[322px] font-medium text-sm text-[#737373]'>{items.description}</p>
                                        </div>
                                        <div>
                                            <div className='md:flex justify-between flex-col md:flex-row  items-center'>
                                                <div className='flex my-4 sm:my-10'>
                                                    <img src="game.svg" alt="" />
                                                    <h2 className='ml-2 text-sm font-semibold'>{items.reward}</h2>
                                                </div>
                                                <div className={`bg-[#7C3DC8] font-semibold px-4 cursor-pointer flex justify-center items-center w-[500px] h-[38px] rounded-2xl w-full sm:w-auto`}>
                                                    {items.iconImage && <img src={items.iconImage} alt="" className='mx-1' />}
                                                    <p className='text-white text-sm mr-2 px-1'>{items.buttonText}</p>
                                                    <img src="rightwhite.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>

                    {/* ======= Boost Section (Header + Boost Cards) ======= */}

                    <section className='mx-5 px-4 py-4 mb-3 border rounded-2xl bg-[#FAFAFA] border-[#81818114]'>
                        <div className='flex w-full'>
                            <div className='bg-[#FEE2E2] flex justify-center items-center w-[48px] h-[48px] rounded-[9.6px]'>
                                <div>
                                    <img src="Boost.svg" alt="" />
                                </div>
                            </div>
                            <div className='mx-2'>
                                <h2 className='text-[#404040] text-2xl font-bold'>Boost</h2>
                                <p className='text-[11px] text-[#737373]'>Get started by Minting the Campaign Pass</p>
                            </div>
                        </div>

                        <div className='md:flex justify-between items-center'>
                            {
                                boostData.map((items, index) => (
                                    <div key={index} className='my-8'>
                                        <div className='md:w-[363px] relative h-[135px] bg-[#F0BAFF] rounded-2xl '>
                                            <div className='relative'>
                                                <img src="Boostdesign.svg" className='w-[141px] h-[135px] ' />
                                                <img src="boostInnerdesign.svg" alt="" className='absolute top-3 left-5' />
                                                <div className='w-[100px] flex justify-center absolute top-10 left-5 -skew-x-[15deg] items-center h-[49px] bg-[#FFDE82] border border-[#EC931E]'>
                                                    <p className='text-[#A349CD] font-bold md:text-[35px]'>{items.boostValue}</p>
                                                </div>
                                            </div>
                                            <div className='md:w-[222px] h-[135px] bg-[#FD92FF] rounded-r-2xl z-10 absolute top-0  left-35'>
                                                <img src="Group 2147211724.svg" alt="" />
                                                <p className='text-[11px] md:text-[14px] font-semibold my-2 px-1'>{items.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>



                    </section>


                    {/* ======= Leaderboard Overview Section ======= */}

                    <section className='mx-5 px-4 py-4'>
                        <div className='md:flex justify-between items-center'>
                            <div className='flex border-r-[#00000014]'>
                                <div className='w-[48px] h-[48px] flex justify-center items-center rounded-[9.6px] border border-[#FEE2E2] bg-[#FEE2E2]'>
                                    <img src="leaderboardLock.svg" alt="" />
                                </div>
                                <div className='mx-5 font-bold text-xl'>
                                    <h3>#340</h3>
                                    <p className='text-sm font-medium text-[#737373]'>Your leaderboard rank</p>
                                </div>
                            </div>

                            <div className='mx-5 font-bold text-xl my-5'>
                                <h3 className='text-[#171717] font-bold text-xl '>$213,129</h3>
                                <p className='text-sm font-medium text-[#737373]'>Volume Traded</p>
                            </div>

                            <div className='mx-5  font-bold text-xl  my-5'>
                                <h3 className='text-[#404040]'>2 <span className='text-[#404040]'>:</span> 24 <span className='text-[#404040]'>:</span> 14 </h3>
                                <p className='text-sm font-medium text-[#737373]'>Leaderboard Refresh</p>
                            </div>

                            <div>
                                <div
                                    className="w-[268px] relative h-[104px] flex justify-center  items-center bg-[#AEFF97] [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)] max-md:[clip-path:none] md:rounded-r-2x "

                                >
                                    <button className='w-[169px] flex  border border-[#0DA83A] justify-center items-center cursor-pointer px-1 rounded-full h-[42px] bg-[#34C759]'>
                                        <h2 className='font-semibold text-sm text-[#171717]'>How to rank higher</h2>
                                        <img src="rightarrow.svg" alt="" className='mt-1' />
                                    </button>
                                    <div>
                                        <img src="arrorBig.svg" alt="" className='absolute top-18 left-3' />
                                        <img src="StarIcon.svg" alt="" className='absolute top-10 left-5' />
                                        <img src="colorarror.svg" alt="" className='absolute top-1 left-18' />
                                        <img src="Starsmall.svg" alt="" className='absolute top-3 left-32 w-[8px] h-[8px]' />
                                        <img src="arrorBig.svg" alt="" className='absolute top-1 right-18' />
                                        <img src="Starsmall.svg" alt="" className='absolute top-8 right-10 w-[8px] h-[8px]' />
                                        <img src="arrorBig.svg" alt="" className='absolute right-7 top-16' />
                                        <img src="Starsmall.svg" alt="" className='absolute top-20 left-30 w-[8px] h-[8px]' />
                                        <img src="colorarror.svg" alt="" className='absolute top-[77px] left-18' />
                                        <img src="StarIcon.svg" alt="" className='absolute top-20 right-20' />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>

                    {/* ======= Leaderboard Table ======= */}

                    <section className="md:mx-5 px-4 py-4">
                        <div className="w-full bg-white rounded-xl shadow-sm  ">
                            <div className="w-full overflow-x-auto">
                                <table className="w-full min-w-[600px]">
                                    {/* Header */}
                                    <thead>
                                        <tr className="text-[#71717A] font-medium border-b border-[#E4E4E7]">
                                            <th className="py-3 text-left pl-6">Rank</th>
                                            <th className="py-3 text-left">User</th>
                                            <th className="py-3 text-center">Defx Points Boost</th>
                                            <th className="py-3 text-right pr-6">Bridged Volume</th>
                                        </tr>
                                    </thead>

                                    {/* Body */}
                                    <tbody>
                                        {
                                            tableData.map((items, index) => (
                                                <tr key={index} className="border-b border-[#F2F2F3]">
                                                    <td className="py-3 pl-6 relative text-[14px] font-[500] text-[#09090B]">
                                                        <img
                                                            src="round.svg"
                                                            alt="round"
                                                            className="absolute left-[22px] top-1/2 -translate-y-1/2 w-6 h-6"
                                                        />
                                                        <span className="pl-8 absolute left-0 top-3">{items.rant}</span>
                                                    </td>

                                                    <td className="py-3 text-[14px] font-[500] text-[#09090B]">
                                                        {items.User}
                                                    </td>

                                                    <td className="py-3 text-[14px] text-center font-[500] text-[#09090B]">{items.DefxPointsBoost}</td>

                                                    <td className="py-3 text-[14px] font-[500] text-right pr-6 text-[#09090B]">
                                                        {items.BridgedVolume}
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* ======= About & Info Cards Section ======= */}

                    <section className="mx-5 md:px-4 py-4">
                        <div className='bg-neutral-50 md:px-4 border-zinc-200 rounded-2xl md:py-5 md:pr-5'>
                            <div className=' flex justify-between items-center '>
                                <div>
                                    <h2 className='font-bold md:text-[29px] text-[#404040]'>About</h2>
                                </div>
                                <button className='border flex px-2 py-2 border-[#E5E5E5] w-[155px] h-[39px] rounded-full'>
                                    <img src="report.svg" alt="" className='w-[14px] h-[14px] mt-1 mx-1' />
                                    <h2 className='text-[#737373] cursor-pointer font-semibold text-medium text-sm'>Report a problem</h2>
                                </button>
                            </div>
                            <div className='border-b my-5 border-zinc-200'></div>
                            <div className='my-5'>
                                <p className='font[500] text-[16px] text-[#525252]'>Earn your share of an impressive $3 million in rewards by diving into the leading DeFi protocols on Etherlink. Engage in providing liquidity, trading, and a variety of other activities. Are you ready to reap the benefits and harvest your Apples? 🍏</p>
                            </div>

                            <div className='md:flex justify-between items-center'>

                                <div className='md:w-[344px] h-[216px] text-center rounded-2xl  border border-solid border-[rgba(129,129,129,0.078)] shadow-[0_1px_2px_0_rgba(0,0,0,0.051)] '>
                                    <div className='flex justify-center my-5 items-center'>
                                        <img src="Logo.svg" alt="" />
                                    </div>
                                    <div>
                                        <h2 className='text-[#404040] font-bold text-lg'>Superboard</h2>
                                        <p className='text-[#737373] text-xs font-medium'>Curator</p>
                                    </div>
                                </div>



                                <div className='md:w-[344px] h-[216px] rounded-2xl my-5 md:my-0  border border-solid border-[rgba(129,129,129,0.078)] shadow-[0_1px_2px_0_rgba(0,0,0,0.051)] '>
                                    <div className='flex justify-between my-5 items-center mx-5'>
                                        <div>
                                            <h2 className='font-bold text-lg text-[#404040]'>Timeline</h2>
                                            <p>Duration</p>
                                        </div>
                                        <div className='flex'>
                                            <img src="ComingIcon.svg" alt="" className='w-[14px]' />
                                            <p className='text-[#0000FF87] font-bold text-[12px]'>Coming soon</p>
                                        </div>
                                    </div>
                                    <div className='mx-5'>
                                        <h2 className='text-[#404040] font-bold text-lg'>21 June 2025</h2>
                                        <p className='text-[#737373] text-xs font-medium'>Start</p>
                                    </div>
                                    <div className='border-b my-4 mx-5 border-zinc-200'></div>
                                    <div className='mx-5'>
                                        <h2 className='text-[#404040] font-bold text-lg'>28 June 2025</h2>
                                        <p className='text-[#737373] text-xs font-medium'>End</p>
                                    </div>
                                </div>


                                <div className='md:w-[344px] h-[216px]  rounded-2xl my-5 md:my-0 border border-solid border-[rgba(129,129,129,0.078)] shadow-[0_1px_2px_0_rgba(0,0,0,0.051)] '>
                                    <div className='my-10 md:mx-10 mx-5'>
                                        <h2 className='text-lg font-bold text-[#404040]'>How to perform this quest?</h2>
                                        <p className='text-[#737373] text-xs'>Watch a tutorial.</p>
                                    </div>

                                    <button className='border md:mx-10 flex px-5 justify-center cursor-pointer items-center  border-[#BFDBFE] w-[180px] py-2 px-3 h-[40px] rounded-2xl mx-5'>
                                        <img src="playblue.svg" alt="" className='w-[20] h-[20px]' />
                                        <p className='px-2'>Play Video</p>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>

            </div>
        </>
    )
}

export default Home
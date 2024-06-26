import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Team = () => {
    const cases = [
        {
            imageUrl: "/assets/people1.png",
            name: "Timothy Judge",
            jobTitle: "CO-FOUNDER, DEVELOPER"
        },
        {
            imageUrl: "/assets/people2.png",
            name: "John Judge",
            jobTitle: "CO-FOUNDER, DEVELOPER  "
        },
        {
            imageUrl: "/assets/people1.png",
            name: "Our Deployment on Meter",
            jobTitle: "collab with meter foundation"
        },
        {
            imageUrl: "/assets/people2.png",
            name: "Our Deployment on Fuse",
            jobTitle: "Collab with fuse labs"
        },
        {
            imageUrl: "/assets/people1.png",
            name: "Our Deployment on Fuse",
            jobTitle: "Collab with fuse labs"
        },
    ]
    return (
        <section className='pt-16 pb-28 bg-dark relative z-0'>
            <div className='container bg-teamBg bg-center bg-contain bg-no-repeat flex items-center justify-between'>
                <div className=''>
                    <h4 className="font-bold flex items-center gap-1 uppercase text-textGrey"><span className="text-red">*</span> out team <span className="text-red">*</span></h4>
                    <h2 className="title text-white pt-6 pb-1">the Leadership Team</h2>
                </div>
                <div className='flex items-center gap-5'>
                    <button className="size-12 font-medium flex bg-white items-center justify-center border border-border rounded-full"><IoIosArrowBack /></button>
                    <button className="size-12 font-medium flex items-center justify-center border border-purple text-white bg-purple rounded-full"><IoIosArrowForward /></button>
                </div>
            </div>

            {/* this is down div  */}
            <div className='container overflow-x-scroll h-[57dvh] flex items-center gap-6 pt-[70px]'>
                {
                    cases.map(cas => (
                        <div key={cas.name} className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 h-full pt-40 min-w-96'>
                            <img src={cas?.imageUrl} alt={cas?.name} className="absolute inset-0 h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30"></div>
                            <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
                            {/* <img src={cas.imageUrl} alt="" className="w-full h-full  rounded-2xl object-cover" />
                            <div className='absolute bottom-6 left-6 right-6 rounded-2xl bg-bgGray px-8 py-6 flex items-center justify-between cursor-pointer hover:transition-all hover:rounded-br-[60px] hover:rounded-tl-[60px]'>
                                <div className='space-y-2'>
                                    <h2 className="text-xl font-bold text-dark">{cas?.name}</h2>
                                    <p className="text-textGrey uppercase text-sm">{cas?.jobTitle}</p>
                                </div>
                                <button className="size-10 flex items-center justify-center rounded-full border border-border"><FiArrowUpRight /></button>
                            </div> */}
                        </div>
                    ))
                }
            </div>

            <img src="/assets/left-top.png" alt="" className="absolute -z-10 top-0 left-0" />
        </section>
    );
};

export default Team;
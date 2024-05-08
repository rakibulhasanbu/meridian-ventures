import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Works = () => {
    const cases = [
        {
            imageUrl: "/assets/testimonial1.png",
            title: "Our Deployment on Fuse",
            subTitle: "Collab with fuse labs"
        },
        {
            imageUrl: "/assets/testimonial2.png",
            title: "Our Deployment on TelosEVM",
            subTitle: "collab with telos foundation"
        },
        {
            imageUrl: "/assets/testimonial3.png",
            title: "Our Deployment on Meter",
            subTitle: "collab with meter foundation"
        },
        {
            imageUrl: "/assets/testimonial1.png",
            title: "Our Deployment on Fuse",
            subTitle: "Collab with fuse labs"
        },
    ]
    return (
        <section className='pt-16 pb-28'>
            <div className='container flex items-center justify-between'>
                <div className=''>
                    <h4 className="font-bold flex items-center gap-1 text-textGrey"><span className="text-red">*</span> PAST WORKS <span className="text-red">*</span></h4>
                    <h2 className="title pt-6 pb-1">our latest cases</h2>
                </div>
                <div className='flex items-center gap-5'>
                    <button className="size-12 font-medium flex items-center justify-center border border-border rounded-full"><IoIosArrowBack /></button>
                    <button className="size-12 font-medium flex items-center justify-center border border-dark text-white bg-dark rounded-full"><IoIosArrowForward /></button>
                </div>
            </div>

            {/* this is down div  */}
            <div className='flex items-center gap-6 pt-[70px]'>
                {
                    cases.map(cas => (
                        <div key={cas.title} className='relative'>
                            <img src={cas.imageUrl} alt="" className="w-full h-full  rounded-2xl object-cover" />
                            <div className='absolute bottom-6 left-6 right-6 rounded-2xl bg-bgGray px-8 py-6 flex items-center justify-between cursor-pointer hover:transition-all hover:rounded-br-[60px] hover:rounded-tl-[60px]'>
                                <div className='space-y-2'>
                                    <h2 className="text-xl font-bold text-dark">{cas?.title}</h2>
                                    <p className="text-textGrey uppercase text-sm">{cas?.subTitle}</p>
                                </div>
                                <button className="size-10 flex items-center justify-center rounded-full border border-border"><FiArrowUpRight /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Works;
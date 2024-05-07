import { IoPlayCircleOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <div className='py-2 2xl:py-4 px-4 md:px-16 2xl:px-20 bg-bgGray'>
            <div className='bg-dark py-14 w-full h-[87dvh] rounded-br-[64px] rounded-tl-[64px]'>
                <div className='bg-bannerBg bg-contain bg-center text-center flex items-center justify-center flex-col max-w-5xl mx-auto h-full bg-no-repeat text-white'>
                    <h1 className="font-bold text-[80px] leading-[90px] capitalize">Pioneers of a Decentralized Future</h1>
                    <p className="text-lg font-medium pt-12 pb-14 max-w-md mx-auto">Delivering decentralized, cross-chain, financial solutions for the blockchain industry. </p>
                    <div className='flex items-center gap-8'>
                        <button className="font-bold px-8 py-4 uppercase rounded-full bg-dark">Get Started now</button>
                        <button className="font-bold flex items-center gap-5 px-8 py-4 uppercase bg-transparent" ><IoPlayCircleOutline className="text-7xl" /> WHAT IS MERIDIAN</button>
                    </div>
                </div>
            </div>

            {/* this is coleborating div  */}
            <div className='py-20 flex items-start gap-5'>
                <h2 className="text-lg pt-4 font-bold text-dark">Collaborating Closely With</h2>
                <img src="/assets/logos.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
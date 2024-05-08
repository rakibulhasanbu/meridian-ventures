import { MdArrowForward } from "react-icons/md";

const DiscoverProducts = () => {
    const productsCard = [
        {
            imgUrl: "/assets/product1.png",
            title: "Stablecoin",
            description: "Over-collateralized and fully decentralized stablecoin that leverages a networks’ native token to bring non-custodial, secured lending based on Liquity codebase.",
        },
        {
            imgUrl: "/assets/product2.png",
            title: "Lending",
            description: "A decentralized platform connects lenders and borrowers. Depositors earn passive income by providing liquidity, while borrowers secure overcollateralized loans against their whitelisted assets.",
        },
        {
            imgUrl: "/assets/product3.png",
            title: "perpetuals trading",
            description: "Leveraged Trading is a popular form of derivative trading that enables investors to speculate on the price movements of crypto assets, without owning the underlying asset.",
        },
    ];

    return (
        <div className='relative bg-dark py-20 z-0'>
            <div className='container z-50'>
                {/* this is title section  */}
                <div className='bg-serviceBg bg-no-repeat flex flex-col items-center justify-center'>
                    <h4 className="font-bold flex items-center gap-1 text-textGrey"><span className="text-red">*</span> Why Choose us <span className="text-red">*</span></h4>
                    <h2 className="title text-white pt-6 pb-1">Discover Our products</h2>
                    <p className="text-white pb-12">Three of DeFi's favorite products, carefully crafted into one unified solution</p>
                </div>
                {/* this is card div  */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {productsCard?.map(product => (
                        <div key={product?.title} className='bg-bgDarkGrey text-white p-12 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:transition-all hover:rounded-bl-[80px] hover:rounded-tr-[80px]'>
                            <img src={product?.imgUrl} alt="" className="" />
                            <h2 className="text-lg pt-2 pb-3 font-bold">{product?.title}</h2>
                            <p className="text-textGrey text-center px-8">{product?.description}</p>
                            <p className="flex items-center gap-2 hover:underline cursor-pointer text-white pt-16">Learn more <MdArrowForward /></p>
                        </div>
                    ))}
                </div>
            </div>

            <img src="/assets/left-top.png" alt="" className="absolute z-10 top-0 left-0" />
            <img src="/assets/bottom-right.png" alt="" className="absolute -z-10 bottom-0 right-0" />
        </div>
    );
};

export default DiscoverProducts;
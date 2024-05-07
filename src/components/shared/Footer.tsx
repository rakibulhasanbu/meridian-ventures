import { GrSend } from "react-icons/gr";

const Footer = () => {
    const productsLink = [
        {
            label: "Stablecoin (Mint)"
        },
        {
            label: "Lending (Lend)"
        },
        {
            label: "Perpetuals (Trade)"
        },
    ]

    const quickLinks = [
        {
            label: "Home"
        },
        {
            label: "About"
        },
        {
            label: "US Main"
        },
        {
            label: "Services"
        },
        {
            label: "Pricing"
        },
        {
            label: "Contact Us"
        },
    ];
    const communityLinks = [
        {
            label: "Our Product"
        },
        {
            label: "Documentation"
        },
        {
            label: "Our Services"
        },
        {
            label: "Company"
        },
        {
            label: "What We Do?"
        },
    ];
    return (
        <div className='bg-dark'>
            <div className='container'>
                <div className='py-20 grid grid-cols-1 md:grid-cols-5'>
                    {/* this is newsletter div  */}
                    <div className='col-span-2'>
                        <h2 className="text-white text-xl font-bold">Newsletter</h2>
                        <p className="text-textGrey font-medium pt-8 pb-12 max-w-80">Sign up to Meridian Ventures monthly newsletter to get the latest updates.</p>
                        <div className='rounded-tl-3xl rounded-br-3xl border border-textGrey bg-bgDarkGrey text-textGrey flex items-center max-h-14 max-w-80'>
                            <input type="text" className="bg-transparent px-4 h-14 focus:outline-0 w-full" placeholder="Enter your Email" />
                            <button className="size-14 bg-purple rounded-br-3xl flex items-center justify-center text-white"><GrSend /></button>
                        </div>
                    </div>
                    {/* this is popular div   */}
                    <div className=''>
                        <h2 className="text-white text-xl font-bold">Newsletter</h2>
                        <div className='pt-8 space-y-3'>
                            {productsLink.map(link => (
                                <h2 className="hover:text-purple text-textGrey cursor-pointer">{link?.label}</h2>
                            ))}
                        </div>
                    </div>
                    {/* this is popular div   */}
                    <div className=''>
                        <h2 className="text-white text-xl font-bold">Quick Links</h2>
                        <div className='pt-8 space-y-3'>
                            {quickLinks.map(link => (
                                <h2 className="hover:text-purple text-textGrey cursor-pointer">{link?.label}</h2>
                            ))}
                        </div>
                    </div>
                    {/* this is popular div   */}
                    <div className=''>
                        <h2 className="text-white text-xl font-bold">Community</h2>
                        <div className='pt-8 space-y-3'>
                            {communityLinks.map(link => (
                                <h2 className="hover:text-purple text-textGrey cursor-pointer">{link?.label}</h2>
                            ))}
                        </div>
                    </div>
                </div>

                {/* bottom section here  */}
                <div className='pt-4 pb-6 border-t border-textDarkGrey flex items-center justify-between'>
                    <p className="text-textGrey font-medium">Copyright © 2024 Meridian Ventures. All rights reserved.</p>
                    <p className="text-textGrey font-medium">Terms of Use  .  Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
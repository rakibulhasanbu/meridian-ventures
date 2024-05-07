const About = () => {
    return (
        <div className='py-20 container grid grid-cols-2 gap-24 '>
            <div className='grid grid-cols-2 '>
                <div className='bg-blue flex space-y-3 justify-center flex-col rounded-3xl p-10 h-[90%] my-auto'>
                    <h2 className="text-white font-bold text-5xl capitalize">13+</h2>
                    <p className="text-white">Financial dApps Deployed by Meridian Ventures for the MeridianDAO across multiple EVM-Compatible Networks</p>
                    <div className="flex -space-x-3">
                        <img className="inline-block bg-border size-10 rounded-full" src="/assets/image 20.png" alt="Image Description" />
                        <img className="inline-block size-10 rounded-full" src="/assets/image 21.png" alt="Image Description" />
                        <img className="inline-block bg-border size-10 rounded-full" src="/assets/image 22.png" alt="Image Description" />
                    </div>
                </div>
                <img src="/assets/about.png" alt="" className="h-[90%] object-cover my-auto" />
            </div>
            <div className='space-y-10 '>
                <p className="text-sm uppercase text-textGrey font-bold">why choose us</p>
                <h2 className="text-dark font-bold text-5xl capitalize"> chosen By <br /> the Meridian Finance DAO</h2>
                <p className="text-textGrey text-lg">Meridian is a suite of decentralized financial services non-custodial, including stablecoin, lending and trading services all within one unified and user friendly application.

                    <br /><br />The MeridianDAO voted Meridian Ventures as the development company creating new integrations for Meridian and building business connections for its deployed products.</p>

                <button className="bg-blue rounded-md text-white uppercase px-8 py-4 font-bold">Learn More</button>
            </div>
        </div>
    );
};

export default About;
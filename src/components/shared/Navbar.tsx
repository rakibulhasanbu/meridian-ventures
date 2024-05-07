const Navbar = () => {
    const navLinks = [
        {
            label: "Home"
        },
        {
            label: "About US"
        },
        {
            label: "Products"
        },
        {
            label: "Blog"
        },
        {
            label: "Contact"
        },
    ]
    return (
        <div className='bg-bgGray flex items-center justify-between py-2 2xl:py-4 px-4 md:px-16 2xl:px-20'>
            <div className='flex items-center gap-2'>
                <img src="/assets/logo.png" alt="" className="size-16 object-cover" />
                <h2 className="text-red font-bold text-4xl">Meridian Ventures</h2>
            </div>
            <div className='flex items-center gap-6 font-medium'>
                {navLinks.map(nav => (
                    <h2 className="text-dark uppercase cursor-pointer">{nav?.label}</h2>
                ))}
            </div>
            <p className="text-white">.</p>
        </div>
    );
};

export default Navbar;
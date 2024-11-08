import banner from "../../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="relative  bg-white h-[650px] lg:h-[994px] px-5">
            <div className="hero bg-[#9538E2] text-white p-5 lg:px-36 rounded-b-lg h-[500px] lg:h-[694px]">
                <div className="hero-content text-center">
                    <div className="max-w-xs lg:max-w-4xl lg:max-h-[500px] absolute top-3 lg:top-10 space-y-1">
                        <h1 className="text-4xl lg:text-5xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="lg:py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-primary bg-white text-[#9538E2] rounded-full px-6">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className="absolute max-w-xs lg:max-w-4xl mx-auto p-5 bg-[#ffffff86] rounded-lg border-2 border-white top-[380px] lg:top-[310px] left-0 right-0 h-[300px]lg:h-[563px]">
                <img className="w-full h-full rounded-lg"src={banner} alt="banner picture" />
            </div>
           
        </div>
    );
};

export default Banner;
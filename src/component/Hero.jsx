const Hero = () => {
    return (
        <div>
            <div className="hero pt-10 bg-base-100 h-[45vh]">
                <div className="hero-content text-center">
                    <div className=" ">
                        <h1 className=" md:text-4xl sm:text-2xl text-2xl lg:text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6  mx-auto">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                        <button className="btn bg-green-900 rounded-lg text-white">
                            <span className="fa fa-plus"></span> Add a Friend</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
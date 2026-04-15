import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight:"400",
});
const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="footer footer-horizontal footer-center bg-neutral text-primary-content p-10">
                <aside>

                    <p className="font-bold text-3xl">KeenKeeper</p>
                    <p>
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                </aside>
                <nav>
                    <p className='font-bold text-xl'>Social Links</p>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <span className='fa-brands fa-facebook text-2xl'></span>
                        </a>
                        <a>
                            <span className='fa-brands fa-youtube text-2xl'></span>
                        </a>
                        <a>
                            <span className='fa-brands fa-twitter text-2xl'></span>
                        </a>
                    </div>
                </nav>
            </footer>
            
            <footer className={`${poppins.className} footer flex-wrap flex justify-between footer-center bg-neutral text-primary-content p-10`}>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
            </footer>


        </div>
    );
};

export default Footer;
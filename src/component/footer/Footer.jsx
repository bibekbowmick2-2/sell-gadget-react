

const Footer = () => {
    return (
        <div className="bg-white text-black ">
        <br/>
        <br/>
        <div className="mx-auto text-center">
         <h1 className="font-bold">Gadget Heaven</h1>
         
         <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>

         </div>
            <footer className="footer  p-10 max-w-7xl mx-auto text-center">
           
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
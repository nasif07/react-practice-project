import banner from "../../assets/marqee-image/bannerimage.png"
import logo from "../../../public/Logo.svg"

const Home = () => {
    const myInlineStyles = {
        borderRadius: '90px',
        border: '1px solid #004E98'
        // Add more CSS properties as needed
    };
    return (
        <div className="min-h-screen">
            <div className="max-w-[1200px] mx-auto flex justify-between pt-[30px] pb-[50px]">
                <img src={logo} alt="" />
                <div className="flex justify-center items-center gap-[11px]">
                    <p className="text-[#000] text-[14px] font-light">yourmail@mail.com</p>
                    <button style={myInlineStyles} className="px-[22px] text-[#004E98] py-[10px] font-bold text-[12px]">Accept payments today!</button>
                </div>
            </div>
            <div className="text-center max-w-[933px] mx-auto">
                <p className="text-[#004E98] text-4 font-light text-center">To All Business Owners Proccesesing Credit Cards:</p>
                {/* <h1 className="text-[#272932] font-bold text-[46px] py-[10px]  font-spaceGrotesk">Your current payment processor
                    may be a ticking time bomb for your business! 💣</h1> */}
                <h1 className="text-[#272932] font-bold text-[46px] py-[10px]  font-spaceGrotesk">Your current payment processor
                    may be a</h1>
                <h1 className="text-[#272932] font-bold text-[46px] py-[10px]  font-spaceGrotesk -mt-8"> ticking time bomb for your business! 💣</h1>
                <p className="text-[#000] font-light text-[12px] max-w-[544px] mx-auto">Watch the video below to find out why billion dollar companies around the world use North Summit Payments to empower their payment systems and protect their businesses.</p>
            </div>
            <div className="flex items-center justify-center pt-[50px]">
                <img className="w-[768px] h-[432px] rounded-2xl" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Home;
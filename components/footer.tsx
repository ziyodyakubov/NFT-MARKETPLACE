import Image from "next/image"
import {Discord,Insta,YouTube,Twitter,Extra,Logo} from "@/svg"

const Index = () => {
    const logos = [Discord,YouTube,Twitter,Insta]
  return (
    <footer className="py-[40px] bg-[#3B3B3B]">
        <div className="container-2">
            <div className="last-div flex items-start justify-between pb-[30px] mb-[20px] border-b-[1px] border-b-[#CCCCCC]">
        <ul className="flex flex-col gap-[15px] w-[243px]">
            <li><Image src={Logo} alt="logo"/></li>

            <li className="text-[16px] text-[#CCCCCC] leading-[140%] mt-[15px] mb-[5px]">NFT marketplace UI created with Anima for Figma.</li>

            <li className="text-[16px] text-[#CCCCCC]">Join our community</li>

            <li className="flex items-center gap-[15px]">
                {logos.map((item,index)=>(
                    <Image className="cursor-pointer" src={item} key={index} alt="logo"/>
                ))}
            </li>
        </ul>

        <ul className="flex flex-col gap-[20px] w-[133px]">
            <li className="monosans mb-[5px]">Explore</li>

            <li className="text-[16px] text-[#CCCCCC]">Marketplace</li>

            <li className="text-[16px] text-[#CCCCCC]">Rankings</li>

            <li className="text-[16px] text-[#CCCCCC]">Connect a wallet</li>
        </ul>

        <ul className="flex flex-col gap-[20px] w-[420px]">
            <li className="monosans mb-[5px]">Join our weekly digest</li>

            <li className="text-[16px] text-[#CCCCCC] w-[297px]">Get exclusive promotions & updates straight to your inbox.</li>

            <li>
                    <form>
                        <div className="flex pl-[19px] w-[420px] justify-between gap-[12px] rounded-[20px] bg-[#fff]">
                            <input type="email" className="outline-none w-[220px]" placeholder="Enter your email here" />
                            <button type="submit" className="py-[19px] px-[50px] rounded-[20px] transition-all  hover:bg-[#a159ffe1] active:bg-[#A259FF] bg-[#A259FF] text-[#fff] font-[600]">Subscribe</button>
                        </div>
                    </form>
            </li>
        </ul>
            </div>

            <Image src={Extra} alt="extra info"/>
        </div>


    </footer>
  )
}

export default Index

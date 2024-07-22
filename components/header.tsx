import Image from "next/image"
import {Logo} from "@/svg"

const Index = () => {
  return (
    <header className="container py-[34px] flex items-center justify-between sm:p-[20px]">
        <a href="#"><Image src={Logo} alt="logo"/></a>
        <ul className="flex gap-[50px] items-center">
            <li className="text-[#fff] sm:hidden font-[600] text-[16px] cursor-pointer">Marketplace</li>
            <li className="text-[#fff] sm:hidden font-[600] text-[16px] cursor-pointer">Rankings</li>
            <li className="text-[#fff] sm:hidden font-[600] text-[16px] cursor-pointer">Connect a wallet</li>
            <li className="ml-[-20px] sm:hidden">
                <button className="flex items-center gap-[12px] text-[#fff] font-[600] text-[16px] py-[19px] hover:bg-[#a159ffe1] active:bg-[#A259FF] transition bg-[#A259FF] pl-[34px] pr-[30px] rounded-[20px]"><i className='bx bx-user text-[20px] font-[1000px]'></i> Sign Up</button>
            </li>

            <li className="cursor-pointer hidden text-[34px] sm:flex text-[#fff]"><i className='bx bx-menu'></i></li>
        </ul>
    </header>
  )
}

export default Index

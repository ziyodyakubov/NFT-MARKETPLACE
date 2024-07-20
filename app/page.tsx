import Image from "next/image";
import {Intro,twentyfive,Bear,Cat,DogBig,MushroomBig,MushroomLittleOne,MushroomLittleTwo,PersonBig,PersonLittleOne,PersonLittleTwo} from "@/png"
import { Avatar,FoxAva,RoboAva,ChinaAva } from "@/svg";

export default function Home() {
  const nimadir = [
    {title: "240k+",desc: "Total Sale"},
    {title: "100k+",desc: "Auctions"},
    {title: "240k+",desc: "Artists"},
  ]

  const dogs = [Cat,Bear,twentyfive]

  const mushrooms = [MushroomLittleOne,MushroomLittleTwo,twentyfive]

  const robots = [PersonLittleOne,PersonLittleTwo,twentyfive]
  return (
      <>
        <div className="container-2">

            {/* INTRO SECTION STARTED */}
            <section id="intro-section" className="py-[80px] flex justify-between">
            <div className="text w-[510px] flex flex-col items-start gap-[20px]">
            <h2 className="text-[66px] leading-[74px] text-[#ffff] font-[600]">Discover Digital Art & Collect NFTs</h2>

              <p className="text-[22px] leading-[35px] mb-[10px] text-[#Fff]">NFT Marketplace UI Created with Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.</p>

              <button className="flex mb-[10px] items-center gap-[12px] py-[19px] px-[50px] rounded-[20px] transition-all hover:bg-[#a159ffe1] active:bg-[#A259FF] text-[#fff] font-[600] text-[16px] bg-[#A259FF]"><i className='bx bx-rocket' ></i>Get Started</button>
            
                <ul className="flex items-center gap-[30px]">
                  {
                    nimadir.map((item,index)=>(
                      <li key={index} className="w-[150px]" >
                        <h3 className="text-[28px] text-[#fff] font-[700] monosans-2">{item.title}</h3>
                        <p className="text-[24px] text-[#Fff] font-[400]">{item.desc}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="image">
                <Image src={Intro} className="h-[410px] " alt="intro image"/>
                <div className="text-img p-[20px] bg-[#3B3B3B] rounded-b-[20px]">
                  <h3 className="text-[22px] text-[#fff] font-[600]">Space Walking</h3>

                  <div className="user flex items-center gap-[12px] mt-[10px]">
                    <Image src={Avatar} alt="avatar"/>
                    <h4 className="text-[16px] text-[#fff]">Animakid</h4>
                  </div>
                </div>
              </div>
            </section>
            {/* INTRO SECTION ENDED */}
            
            {/* SECTION-2 STARTED */}
            <section id="section-2" className="py-[80px]">
                <h2 className="text-[#fff] text-[38px] font-[600] mb-[10px]">Trending Collection</h2>
                <p className="text-[#ffffffe2] text-[22px] font-[400]">Checkout Our Weekly Updated Trending Collection.</p>

              <div className="wrapper flex items-center gap-[30px] justify-between mt-[60px]">
                  <div className="card">
                    <Image src={DogBig} alt="dog"/>

                    <div className="flex items-center gap-[15px] mt-[15px]">
                        {
                          dogs.map((item,index)=>(
                            <Image key={index} src={item} alt="hayvonlar"/>
                          ))
                        }
                    </div>

                    <h4 className="text-[#Fff] mt-[15px] mb-[10px] text-[22px] font-[600]">DSGN Animals</h4>

                    <div className="flex items-center gap-[12px]">
                      <Image src={FoxAva} alt="fox"/>
                        <h5 className="text-[#Fff] text-[16px] font-[400]">MrFox</h5>
                    </div>
                  </div>

                  <div className="card">
                    <Image src={MushroomBig} alt="mushroom big"/>

                    <div className="flex items-center gap-[15px] mt-[15px]">
                        {
                          mushrooms.map((item,index)=>(
                            <Image key={index} src={item} alt="mushrooms"/>
                          ))
                        }
                    </div>

                    <h4 className="text-[#Fff] mt-[15px] mb-[10px] text-[22px] font-[600]">Magic Mushrooms</h4>

                    <div className="flex items-center gap-[12px]">
                      <Image src={ChinaAva} alt="china ava"/>
                        <h5 className="text-[#Fff] text-[16px] font-[400]">Shroomie</h5>
                    </div>
                  </div>


                <div className="card">
                    <Image src={PersonBig} alt="robots"/>

                    <div className="flex items-center gap-[15px] mt-[15px]">
                        {
                          robots.map((item,index)=>(
                            <Image key={index} src={item} alt="robots"/>
                          ))
                        }
                    </div>

                    <h4 className="text-[#Fff] mt-[15px] mb-[10px] text-[22px] font-[600]">Disco Machines</h4>

                    <div className="flex items-center gap-[12px]">
                      <Image src={RoboAva} alt="Robot ava"/>
                        <h5 className="text-[#Fff] text-[16px] font-[400]">BeKind2Robots</h5>
                    </div>
                  </div>
              </div>
            </section>
            {/* SECTION-2 ENDED */}

            {/* SECTION-3 STARTED */}
            <section id="section-3" className="py-[80px]">
                 <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-[#fff] text-[38px] font-[600] mb-[10px]">Top creators</h2>
                    <p className="text-[#ffffffe2] text-[22px] font-[400]">Checkout Top Rated Creators on the NFT Marketplace</p>
                  </div>

                   <button className="flex mb-[10px] items-center gap-[12px] py-[19px] px-[50px] rounded-[20px] border-[2px] border-[#a159ff6d] transition-all hover:bg-[#a159ff60] active:bg-transparent text-[#fff] font-[600] text-[16px] hover:text-[#fff]"><i className='bx bx-rocket text-[#A259FF]' ></i>View Rankings</button>
                  
                 </div>

                 <div className="mt-[60px] flex justify-between gap-[30px] items-center">
                  {/* <div className="card">
                    <div className="number">
                      <h3>1</h3>
                    </div>

                    <Image src={} alt="person-1"/>
                  </div> */}
                 </div>
            </section>
            {/* SECTION-3 ENDED */}
        </div>
      </>
  );
}

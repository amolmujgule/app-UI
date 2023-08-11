import React, { useEffect, useState } from 'react'

const Navbar = () => {
const [show, setShow] = useState(false)
  const [users, setusers] = useState([
    { img1: "https://akashskillhub.github.io/app-ui/src/assets/images/testimonials/testimonial-03/image-01.png", text: "But the majority have suffered alteration in some form, injected humour, or randomised words which don't look slightly believable, If you are to passage." , name:"Kamala Harish", post:"Founder - ProductHunt" },
    { img1: "https://akashskillhub.github.io/app-ui/src/assets/images/testimonials/testimonial-03/image-02.png", text: "Ipsum available, but the majority have suffered alteration in some form, injected humour, or randomised words which don't look slightly believable, If you are to passage." , name:"Healther Bennit",post:"Founder - Dailousm" }
  ])
  const [index, setIndex] = useState(0)
  


 
  return <>

    <div >
      <div className="  w-full mx-auto bg-blur bg-slate-50 backdrop-blur-0  bg-opacity-90  sticky top-0  z-50">
        <div className='container relative -mx-4 h-[100px] flex items-center  justify-between'>
          <div className='flex items-center gap-5 justify-between'>
            <div className='w-60 max-w-full px-4  '>
              <a href="">
                <img src="https://akashskillhub.github.io/app-ui/src/assets/images/logo/logo.svg" alt="" className='w-full' />
              </a>
            </div>
            <div className=' lg:block hidden mx-4 text-black font-medium'>
              <a className='mx-4' >Home</a >
              <a className='mx-4' >About</a >
              <a className='mx-4' >Pricing</a >
              <a className='mx-4' >Features</a >
            </div>
          </div>

          <div
          className={`${
            show
              ? "absolute top-[6rem] right-5 w-2/4 py-3 border-0 shadow-lg bg-white sm:hidden"
              : "hidden"
          }`}
        >
          <div className=" flex flex-col gap-2 px-5">
            <a href="#" className="hover:text-blue-800">
              Home
            </a>
            <a href="#" className="hover:text-blue-800">
              About
            </a>
            <a href="#" className="hover:text-blue-800">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-800">
              Features
            </a>
          </div>
        </div>

          

          <div className='  sm:block hidden justify-end pr-1  lg-pr-0'>
            <a href="" className='py-3 px-7  text-base  font-medium  text-black  hover:text-blue-700' >Login</a>
            <button> <a href="" className='text-base font-medium text-black hover:bg-blue-600 hover:text-white bg-gray-300 px-3 py-2 rounded ' >Download</a></button>
          </div>
          <div className='lg:hidden '>
            <button onClick={e=> setShow(!show)}><i class="bi bi-list fs-1 px-4"></i></button>
          </div>
        </div>
      </div>

      <div className=' grid lg:grid-cols-2  overflow-hidden '>
        <div className='  lg:bg-slate-200   px-4 flex lg:items-center justify-center lg:rounded-br-[30%] lg:h-[800px] '>
          <div>
            <div className='   lg:w-[60%]'>
              <h1 className='text-blue-500 font-bold text-xl mb-2'>App Landing Page Example</h1>
              <p className='text-4xl font-bold mb-3'>Crafted with MATIC UI Components</p>
              <p className='text-gray-500 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
              </p>
            </div>
            <div className='lg:flex  lg:justify-start md:justify-start justify-center sm:justify-start gap-4 mt-10 '>
              <button className=' shadow-xl rounded-lg p-4 mb-3  text-xl bg-slate-100'>
                <i className='bi bi-apple m-2 bg-black text-white p-2 px-3 rounded-lg'></i>
                Add Store</button>
              <button className='  rounded-lg mb-3    p-4 text-xl hover:bg-slate-50    '>
                <i className='bi bi-google-play m-2 bg-black text-white p-2 px-3 rounded-lg'></i>
                Play Store</button>
            </div>
          </div>
        </div>
        <div >
          <div className='w-full  px-4 text-center'>
            <div className='mt-28 relative z-10  inline-block '>
              <img src="https://akashskillhub.github.io/app-ui/src/assets/images/hero/hero-image-06.svg" alt="" className='  max-w-full' />
              <div className='absolute -top-10 z-[-1] -left-10'>
                <img src="https://akashskillhub.github.io/app-ui/src/assets/images/hero/hero6-shape-1.svg" alt="" />
              </div>
              <div className='absolute top-1/2 -left-20 z-[-1] '>
                <i class="bi bi-triangle text-5xl  text-green-500"></i>
              </div>
              <div className='absolute  -right-20 z-[-1] bottom-10 '>
                <i class="bi bi-triangle text-5xl  text-green-500"></i>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='mt-[12%] mb-[10%]'>
        <div className=' flex flex-wrap  justify-center items-center  '>
          <button className='flex items-center justify-center hover:border-2 rounded-full   hover:bg-blue-300 hover:bg-opacity-30  px-7 h-20 text-center'><img src="https://akashskillhub.github.io/app-ui/src/assets/images/brands/graygrids.svg" alt="" className='h-10 max-w-full' />
          </button>
          <button className='flex items-center justify-center hover:border-2 rounded-full  hover:bg-blue-300 hover:bg-opacity-30  px-7 h-20 text-center'><img src="https://akashskillhub.github.io/app-ui/src/assets/images/brands/lineicons.svg" alt="" />
          </button>
          <button className='flex items-center justify-center  rounded-full  hover:bg-blue-300 hover:bg-opacity-30  px-7 h-20 text-center'><img src="https://akashskillhub.github.io/app-ui/src/assets/images/brands/uideck.svg" alt="" />
          </button>
          <button className='flex items-center justify-center hover:border-2 rounded-full  hover:bg-blue-300 hover:bg-opacity-30  px-7 h-20 text-center'><img src="https://akashskillhub.github.io/app-ui/src/assets/images/brands/ayroui.svg" alt="" />
          </button>
        </div>
      </div>

      <div className='grid lg:grid-cols-2 ml-4 mb-9 '>
        <div>
          <div className=' w-[70%] mb-20'>
            <h1 className='font-bold text-blue-700 text-2xl mb-2'>About Our App</h1>
            <h1 className='font-bold text-4xl'>All You Need to Know About The App</h1>
          </div>
          <div className=' -mx-4 flex flex-wrap justify-center  '>
            <div className='  px-4 sm:w-1/2 '>
              <div className='mb-10 w-[90%]'>
                <div className='bg-blue-400 flex  w-[70px] mb-4 h-[70px] justify-center items-center rounded-[20px]'><i class="bi bi-lock text-3xl text-white"></i></div>
                <div>
                  <h1 className='font-bold mb-3 text-2xl'>Security Maintenance</h1>
                  <p className='text-slate-500  text-lg'>The little rotter bevvy I gormless mush golly gosh cras.</p>
                </div>
              </div>

            </div>
            <div className='  px-4 sm:w-1/2 '>
              <div className='mb-10 w-[90%]'>
                <div className='bg-orange-300 flex  w-[70px] mb-4 h-[70px] justify-center items-center rounded-[20px]'><i class="bi bi-database text-3xl text-white"></i></div>
                <div>
                  <h1 className='font-bold mb-3 text-2xl '>Backup Database</h1>
                  <h1 className='text-slate-500 text-lg'>The little rotter bevvy I gormless mush golly gosh cras.</h1>
                </div>
              </div>

            </div>
            <div className='  px-4 sm:w-1/2 '>
              <div className='mb-10 w-[90%]'>
                <div className='bg-indigo-400 flex  w-[70px] mb-4 h-[70px] justify-center items-center rounded-[20px]'><i className='bi bi-layers text-3xl text-white'></i></div>
                <div>
                  <h1 className='font-bold mb-3 text-2xl'>Server Maintenance</h1>
                  <p className='text-slate-500 text-lg'>The little rotter bevvy I gormless mush golly gosh cras.</p>
                </div>
              </div>

            </div>
            <div className='  px-4 sm:w-1/2 '>
              <div className='mb-10 w-[90%]'>
                <div className='bg-green-400 flex  w-[70px] mb-4 h-[70px] justify-center items-center rounded-[20px]'><i className='bi bi-bezier2 text-3xl text-white'></i></div>
                <div>
                  <h1 className='font-bold mb-3 text-2xl'>No Risk Protestable</h1>
                  <p className='text-slate-500 text-lg'>The little rotter bevvy I gormless mush golly gosh cras.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src="https://akashskillhub.github.io/app-ui/src/assets/images/services/services-08/image-01.svg" alt="" />
        </div>
      </div>
      {/* ṭable start*/}
      <div className=' container mx-auto lg:pt-[120px]'>
        <div className='mx-auto mb-[60px] max-w-[512px] text-center '>
          <span className='mb-2 block text-2xl font-semibold text-blue-800'>Pricing Table</span>
          <h2 className='mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]'>Awesome Pricing Plan</h2>
          <p className=' text-gray-500 text-lg'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form</p>
        </div>
        <div className='w-full px-3'>
          <div className='relative z-10 shadow-lg p-11  bg-white rounded-xl '>
            <div className="w-full overflow-x-auto">
              <table className="table-auto ">
                {/* head */}
                <thead>
                  <tr>
                    <th className='w-1/4 min-w-[200px] px-5 bg-blue-600'></th>
                    <th className='w-1/4 min-w-[300px] px-5'>
                      <div className='mb-10 text-left '>
                        <span className='mb-5 text-lg font-medium  text-black'>Starter</span>
                        <h4 className='mb-4 text-[28px] font-bold text-black lg:text-[32px]'>
                          $59
                          <span className='text-base font-medium  text-gray-500'> Per Month</span>
                        </h4>
                        <p className='mb-4 text-base  font-normal text-gray-500'>Best suited for freelancers who works individually.</p>
                        <button className='block w-full rounded bg-blue-700 p-3 text-center text-base font-semibold text-white transition hover:bg-opacity-90 '>Purchase Now</button>
                      </div>
                    </th>
                    <th className='w-1/4 min-w-[300px] px-5'>
                      <div className='mb-10 text-left '>
                        <span className='mb-5 text-lg font-medium  text-black'>Agency</span>
                        <h4 className='mb-4 text-[28px] font-bold text-black lg:text-[32px]'>
                          $99
                          <span className='text-base font-medium  text-gray-500'> Per Month</span>
                        </h4>
                        <p className='mb-4 text-base  font-normal text-gray-500'>Best suited for agencies and small business.</p>
                        <a href='' className='block w-full rounded bg-green-500 p-3 text-center text-base font-semibold text-white transition hover:bg-opacity-90 '>Purchase Now</a>
                      </div>
                    </th>
                    <th className='w-1/4 min-w-[300px] px-5'>
                      <div className='mb-10 text-left '>
                        <span className='mb-5 text-lg font-medium  text-black'>Extended</span>
                        <h4 className='mb-4 text-[28px] font-bold text-black lg:text-[32px]'>
                          $149
                          <span className='text-base font-medium  text-gray-500'> Per Month</span>
                        </h4>
                        <p className='mb-4 text-base  font-normal text-gray-500'>Best suited for agencies and large business.</p>
                        <button className='block w-full rounded bg-blue-700 p-3 text-center text-base font-semibold text-white transition hover:bg-opacity-90 '>Purchase Now</button>
                      </div>
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className='text-center'>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base font-medium text-black '>Key Features</h1>
                    </td>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base font-medium text-black '>Features Limits</h1>
                    </td>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base font-medium text-black '>Features Limits</h1>
                    </td>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base font-medium text-black '>Features Limits</h1>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr className='text-center'>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base text-gray-600 '>Seats</h1>
                    </td>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base text-gray-600 '>1 Developer</h1>
                    </td>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base text-gray-600 '>5 Developer</h1>
                    </td>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base text-gray-600 '>20 Developer</h1>
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr className='text-center'>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base text-gray-600 '>Domains/Products</h1>
                    </td>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base text-gray-600 '>5 Products </h1>
                    </td>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base text-gray-600 '>5 Products</h1>
                    </td>
                    <td className='border-t border-stroke py-3 px-5 '>
                      <h1 className='text-base text-gray-600 '>5 Products</h1>
                    </td>
                  </tr>

                  {/* row 4 */}
                  <tr className='text-center'>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-gray-600 '>Email Support</h1>
                    </td>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-gray-600 '>6 Months </h1>
                    </td>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-gray-600 '>6 Months</h1>
                    </td>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-gray-600 '>6 Months</h1>
                    </td>
                  </tr>

                  {/* row 5 */}
                  <tr className='text-center'>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-gray-600 '>All Pro Components</h1>
                    </td>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-green-500 '><i class="bi bi-check-circle text-3xl"></i> </h1>
                    </td>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-green-500 '><i class="bi bi-check-circle text-3xl"></i></h1>
                    </td>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-green-500 '><i class="bi bi-check-circle text-3xl"></i></h1>
                    </td>
                  </tr>

                  {/* row 6 */}
                  <tr className='text-center'>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-gray-600 '>Design Source Files</h1>
                    </td>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-red-600 '><i class="bi bi-x-circle text-3xl"></i> </h1>
                    </td>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-green-500 '><i class="bi bi-check-circle text-3xl"></i></h1>
                    </td>
                    <td className='border-t border-stroke py-2 px-5 '>
                      <h1 className='text-base text-green-500 '><i class="bi bi-check-circle text-3xl"></i></h1>
                    </td>
                  </tr>

                </tbody>


              </table>
            </div>
          </div>
        </div>
      </div>
      {/* ṭable end */}

      {/* team start  */}

      <div className=" mx-auto pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className='mx-4  flex  flex-wrap '>
          <div className='w-full px-4'>
            <div className='mx-auto text-center mb-[60px] max-w-[510px] '>
              <span className='mb-2 block font-medium text-blue-600'>Our Team</span>
              <span className='mb-4  text-3xl sm:text-4xl md:text-[40px] font-bold '> Meet Our Team</span>
              <p className='text-lg text-gray-600'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
          </div>
        </div>

        <div className='mx-4   grid lg:grid-cols-3 md:grid-cols-2  gap-5 '>
          <div className='px-4 relative group  p-3 border-2 overflow-hidden'>
            <div className='bg-green-500 group-hover:block hidden h-20 w-20 rounded-full  absolute z-10 -right-2 -top-10 '></div>
            <div className='bg-blue-600 h-20 w-20 rounded-full group-hover:block hidden  absolute -right-10 -top-2 '></div>
            <div className='mb-3 '>
              <div className='mb-6 h-20 w-20 overflow-hidden rounded-lg '>
                <img src="https://akashskillhub.github.io/app-ui/src/assets/images/team/team-03/image-01.jpg" alt="" />
              </div>
            </div>
            <div>
              <h2 className='font-medium text-black mb-1 text-lg  '>Jackie Sanders</h2>
              <h6 className='uppercase text-md mb-4 font-medium text-gray-500'>CONTENT WRITER</h6>
              <p className='mb-3 text-lg text-gray-500'>Fermentum massa justo sit amet risus morbi leo.</p>
            </div>
            <div className='flex items-center  gap-4'>
              <i class="bi bi-pinterest text-xl"></i>
              <i class="bi bi-twitter text-xl"></i>
              <i class="bi bi-whatsapp text-xl"></i>
            </div>
          </div>
          <div className=' px-4 relative p-3 border-2 group overflow-hidden'>
            <div className='bg-green-500 h-20 w-20 group-hover:block hidden rounded-full  absolute z-10 -right-2 -top-10 '></div>
            <div className='bg-blue-600 h-20 w-20 group-hover:block hidden rounded-full  absolute -right-10 -top-2 '></div>
            <div className='mb-3 '>
              <div className='mb-6 h-20 w-20 overflow-hidden rounded-lg '>
                <img src="https://akashskillhub.github.io/app-ui/src/assets/images/team/team-03/image-02.jpg" alt="" />
              </div>
            </div>
            <div>
              <h2 className='font-medium text-black mb-1 text-lg  '>Andrieo Gloree</h2>
              <h6 className='uppercase text-md mb-4 font-medium text-gray-500'>CONTENT WRITER</h6>
              <p className='mb-3 text-lg text-gray-500'>Fermentum massa justo sit amet risus morbi leo</p>
            </div>
            <div className='flex items-center  gap-4'>
              <i class="bi bi-pinterest text-xl"></i>
              <i class="bi bi-twitter text-xl"></i>
              <i class="bi bi-whatsapp text-xl"></i>
            </div>
          </div>
          <div className=' px-4 p-3 relative group border-2 overflow-hidden'>
            <div className='bg-green-500 h-20 w-20 group-hover:block hidden rounded-full  absolute z-10 -right-2 -top-10 '></div>
            <div className='bg-blue-600 h-20 w-20 rounded-full group-hover:block hidden  absolute -right-10 -top-2 '></div>
            <div className='mb-3 '>
              <div className='mb-6 h-20 w-20 overflow-hidden rounded-lg '>
                <img src="https://akashskillhub.github.io/app-ui/src/assets/images/team/team-03/image-03.jpg" alt="" />
              </div>
            </div>
            <div>
              <h2 className='font-medium text-black mb-1 text-lg  '>Adveen Desuza</h2>
              <h6 className='uppercase text-md mb-4 font-medium text-gray-500'>DIGITAL MARKETER</h6>
              <p className='mb-3 text-lg text-gray-500'>Fermentum massa justo sit amet risus morbi leo.</p>
            </div>
            <div className='flex items-center  gap-4'>
              <i class="bi bi-pinterest text-xl"></i>
              <i class="bi bi-twitter text-xl"></i>
              <i class="bi bi-whatsapp text-xl"></i>
            </div>
          </div>

        </div>
      </div>
      {/* team end */}

      <div className='mx-4'>
      <div className=' lg:pb-0 pb-3 md:pb-0 sm:pb-0   relative z-50 overflow-hidden bg-slate-100 flex pt-16 '>

        <div className='lg:ml-20  flex items-center z-50  lg:text-start  lg:w-[34%] '>
          <div className=''>
            <h1 className=' text-3xl lg:text-4xl md:text-4xl  py-4  mb-8 font-bold '>Download Now and Get Started Immediately!</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
            <div className='lg:flex  lg:justify-start md:justify-start justify-center sm:justify-start gap-4 mt-10 '>
              <button className=' shadow-xl rounded-lg p-4 mb-3  text-xl bg-white'>
                <i className='bi bi-apple m-2 bg-black text-white p-2 px-3 rounded-lg'></i>
                Add Store</button>
              <button className='shadow-xl   rounded-lg mb-3    p-4 text-xl hover:bg-white    '>
                <i className='bi bi-google-play m-2 bg-black text-white p-2 px-3 rounded-lg'></i>
                Play Store</button>
            </div>
          </div>
        </div>
        <div className=' ml-[23%] hidden z-40 pt-16 lg:block justify-end items-end'>
          <img src="https://akashskillhub.github.io/app-ui/src/assets/images/cta/mobile-01.svg" alt="" />
        </div>
        
        <div className='bg-green-600    lg:block hidden sm:block md:block absolute -top-16   h-80 w-80 rounded-full -right-[2rem] '> </div>
        <div className='bg-blue-700 lg:block hidden sm:block md:block z-0 absolute top-44  h-40 w-40 rounded-full -right-[4rem]'></div>
      </div>

      </div>


      <div className='mx-4 pt-20 lg:pt-[120px] text-center lg:pb-20  '>
        <div className='mx-4  flex  flex-wrap '>
          <div className='w-full px-4'>
            <div className='mx-auto text-center mb-[60px] max-w-[510px] '>
              <span className='mb-2 block font-bold text-xl text-blue-600'>What People Says</span>
              <span className='mb-4  text-3xl sm:text-4xl md:text-[40px] font-bold '> Client Testimonials</span>
              <p className='text-xl mt-2 text-gray-600'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center  mx-auto'>
          <div className='bg-green-50 relative    lg:flex justify-around lg:w-[60%]   p-9   '>

            <div className='flex lg:block justify-center mb-5'>
              <div className='relative '>
                <div className='z-10 relative'>
                  <img src={users[index].img1} alt="" />
                </div>
                <div className='bg-green-500 h-52  w-9 left-16  -top-5  rotate-[-40deg]   rounded-full absolute'></div>
                <div className='bg-blue-500 h-48 w-7   left-12 rotate-[-40deg] top-0   rounded-full absolute  '></div>

              </div>

            </div>
            <div className='lg:w-[50%]  lg:text-start'>
              <p className='text-lg text-gray-500'>{users[index].text}</p>
              <h1 className='mt-2 text-lg font-bold text-blue-700'>{users[index].name}</h1>
              <h1 className='text-gray-400'>{users[index].post}</h1>
            </div>



            <div className='w-8 h-8 bg-green-500 absolute rounded-tr-full -right-3 top-1'></div>
            <div className='w-16 h-16 border-2 border-blue-600 absolute rounded-tl-full -right-5 -top-9'></div>
          </div>
        </div>
        <button onClick={e => setIndex(index === 0 ? 0 : index - 1)} className='w-3 h-3 m-3 text-center rounded-full hover:bg-green-600 border-2 border-blue-600'></button>
        <button onClick={e => setIndex(index === users.length-1 ? index : index + 1)} className='w-3 h-3 m-3 text-center rounded-full hover:bg-green-600 border-2 border-blue-600'></button>
      </div>


      {/* <div className=' bg-green-50 mx-4 my-4'>
        <div className='grid lg:grid-cols-12'>
          <div className='col-span-3 overflow-hidden'>

            <div className='bg-blue-700 w-full relative h-[100%] '>

              <div className='bg-emerald-500 h-[100%] absolute w-full   -bottom-[55%]'></div>
              <div className='bg-green-500 absolute   -bottom-9  -left-7 rounded-tl-full h-[55%]  w-[409px]     '></div>
            </div>

          </div>
          <div className='col-span-9  bg-white  px-5 py-5  '>
            <div >
              <div className='lg:w-[460px]  mb-10'>
                <h1 className='text-3xl  font-bold mb-4'>Get In Touch With Us</h1>
                <p className='text-lg text-gray-500'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
              </div>

              <div className='  grid lg:grid-cols-12 '>
                <div className='col-span-6 w-full pr-5 py-2  mb:w-1/2'>
                  <input type="text" placeholder='Full Name' className='w-full border-b py-3 text-sm text-gray-500 outline-none focus:border-blue-700 ' name="" id="" />
                </div>
                <div className='col-span-6 w-full pr-5 py-2  mb:w-1/2'>
                  <input type="text" placeholder='Email Address' className='w-full border-b py-3 text-sm text-gray-500 outline-none focus:border-blue-700 ' name="" id="" />
                </div>
                <div className='col-span-6 w-full pr-5 py-2    mb:w-1/2'>
                  <input type="text" placeholder='Phone Number' className='w-full border-b py-3 text-sm text-gray-500 outline-none focus:border-blue-700 ' name="" id="" />
                </div>
                <div className='col-span-6 w-full  pr-5 py-2   mb:w-1/2'>

                  <input type="text" placeholder='Subject' className='w-full border-b py-3 text-sm text-gray-500 outline-none focus:border-blue-700 ' name="" id="" />
                </div>
              </div>
              <div className='w-full pr-5 mt-8  mb:w-1/2'>
                <textarea placeholder='Type Your Message' className='w-full border-b text-sm text-gray-500 outline-none focus:border-blue-700  ' rows="5"></textarea>
              </div>
              <button className='bg-blue-700 font-bold mt-10 text-white px-4 py-2'>Secd Message</button>

            </div>
          </div>
        </div>
      </div> */}


<div class="relative z-40 bg-white py-20 lg:py-[120px] overflow-hidden ">
      <div class="container mx-auto ">
        <div class="relative bg-white shadow-contact-3">
          <div class="-mx-4 flex flex-wrap items-stretch lg:flex-row">
            <div class="w-full px-4 lg:w-4/12">
              <div class="relative z-40 flex h-full w-full items-end overflow-hidden bg-primary 2xl:max-w-[370px]">
                <div>
                  <div class="top-[120px] -left-8 p-10 lg:absolute lg:-rotate-90 lg:p-0">
                    <h2 class="inline-flex items-center text-xl font-bold uppercase text-white">
                      <span class="mr-2 inline-block h-[2px] w-6 bg-white"></span>
                      CONTACT US
                    </h2>
                  </div>
                  <div class="w-full p-10">
                    <span class="mb-5 block text-base font-semibold text-white">
                      Follow Us On
                    </span>
                    <div class="flex items-center">
                      <a href="" class="mr-7 text-white hover:opacity-70">
                        <i class="bi bi-facebook"></i>
                      </a>
                      <a href="" class="mr-7 text-white hover:opacity-70">
                        <i class="bi bi-twitter"></i>
                      </a>
                      <a href="" class="mr-7 text-white hover:opacity-70">
                        <i class="bi bi-instagram"></i>
                      </a>
                      <a href="" class="mr-7 text-white hover:opacity-70">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div>

                  <span class="absolute bottom-0 left-0   z-[-1]">
                    <svg width="370" height="339" viewBox="0 0 370 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 192.445L370 0V339H0V192.445Z" fill="#13C296"></path>
                    </svg>
                  </span>
                  <span class="absolute bottom-[140px] left-0 z-[-1]">
                    <svg width="152" height="174" viewBox="0 0 152 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M152 93.5L0 173.5V0L152 93.5Z" fill="#13C296" fill-opacity="0.44"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="w-full px-4 lg:w-8/12">
              <div class="p-10 md:p-[70px] lg:p-14 xl:p-[70px]">
                <h2 class="mb-5 text-[28px] font-bold text-black">
                  Get In Touch With Us
                </h2>
                <p class="mb-[60px] max-w-[490px] text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>

                <form>
                  <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4 md:w-1/2">
                      <div class="mb-4">
                        <input type="text" placeholder="Full Name" class="w-full border-b border-[#ececec] py-4 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
                      </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2">
                      <div class="mb-4">
                        <input type="email" placeholder="Email Address" class="w-full border-b border-[#ececec] py-4 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
                      </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2">
                      <div class="mb-4">
                        <input type="text" placeholder="Phone Number" class="w-full border-b border-[#ececec] py-4 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
                      </div>
                    </div>
                    <div class="w-full px-4 md:w-1/2">
                      <div class="mb-4">
                        <input type="text" placeholder="Subject" class="w-full border-b border-[#ececec] py-4 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
                      </div>
                    </div>
                    <div class="w-full px-4">
                      <div class="mb-10">
                        <textarea rows="4" placeholder="Type Your Message" class="w-full resize-none border-b border-[#ececec] py-4 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none"></textarea>
                      </div>
                    </div>

                    <div class="w-full px-4">
                      <button type="submit" class="rounded bg-primary py-3 px-9 text-base font-medium text-white transition hover:bg-opacity-90">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      {/* footr start */}
      <div className='bg-blue-700 relative text-white overflow-hidden pt-28 pb-16'>
        <div className='bg-blue-600 w-44 h-44 rounded-full  -right-10 -top-11 absolute  '></div>
        <div className='grid lg:grid-cols-12 mx-4   '>
          <div className='lg:col-span-3 md:col-span-12 mb-5 sm:col-span-12 sm:mb-7 lg:w-[90%] sm:w-[50%] md:w-[50%] '>
            <img src="https://akashskillhub.github.io/app-ui/src/assets/images/logo/logo-white.svg" alt="" className='mb-4' />
            <p className='text-lg  mb-4'>Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.</p>
            <span><i className='bi bi-phone'></i> +012 (345) 678 99</span>
          </div>
          <div className='lg:col-span-2 sm:col-span-6 mb-5 md:col-span-6'>
            <h2 className='text-lg font-bold mb-4'>Resources</h2>
            <h1 className='hover:text-gray-400 text-lg mb-3'>SaaS Development</h1>
            <h2 className='hover:text-gray-400 text-lg mb-3'>Our Products</h2>
            <h2 className='hover:text-gray-400 text-lg mb-3'>User Flow</h2>
            <h2 className='hover:text-gray-400 text-lg mb-3'>User Strategy</h2>

          </div>
          <div className='lg:col-span-2 sm:col-span-6 mb-5 md:col-span-6'>
            <h2 className='text-lg font-bold mb-4'>Company</h2>
            <h3 className='hover:text-gray-400 text-lg mb-3'>About Matic UI</h3>
            <h3 className='hover:text-gray-400 text-lg mb-3'>Contact & Support</h3>
            <h3 className='hover:text-gray-400 text-lg mb-3'>Success History</h3>
            <h3 className='hover:text-gray-400 text-lg mb-3'>Setting & Privacy</h3>
          </div>

          <div className='lg:col-span-2 sm:col-span-6 mb-5 md:col-span-6'>
            <h2 className='text-lg font-bold mb-4'>Quick Links</h2>
            <h3 className='hover:text-gray-400 text-lg mb-3'>Premium Support</h3>
            <h3 className='hover:text-gray-400 text-lg mb-3'>Our Services</h3>
            <h3 className='hover:text-gray-400 text-lg mb-3'>Know Our Team</h3>
            <h3 className='hover:text-gray-400 text-lg mb-3'>Download App </h3>
          </div>


          <div className='lg:col-span-3 sm:col-span-6 mb-5 md:col-span-6'>
            <h2 className='text-lg font-bold mb-4'> Follow Us On</h2>
            <div className='flex gap-3 mb-4'>
              <h2 className='hover:bg-white border-2 h-7 w-7 hover:text-black text-center rounded-full'><i class="bi bi-telegram"></i></h2>
              <h2 className='hover:bg-white border-2 h-7 w-7 hover:text-black text-center rounded-full'><i class="bi bi-twitter"></i></h2>
              <h2 className='hover:bg-white border-2 h-7 w-7 hover:text-black text-center rounded-full'><i class="bi bi-linkedin"></i></h2>
              <h2 className='hover:bg-white border-2 h-7 w-7 hover:text-black text-center rounded-full'><i class="bi bi-instagram"></i></h2>
            </div>
            <h2 className='text-lg font-bold'>© 2025 Matic UI</h2>
          </div>
        </div>
      </div>
      {/* footr  end*/}
    </div>
  </>
}

export default Navbar
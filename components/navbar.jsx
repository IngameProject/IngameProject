'use client'

import ModalApp from "./Modal";
import SelectApp from "./Select";
import SelectCourseApp from "./SelectCourse";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { BsBarChart } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

import {
     Navbar,
     NavbarBrand,
     NavbarContent,
     NavbarItem,
     Link,
     Input,
     DropdownItem,
     DropdownTrigger,
     Dropdown,
     DropdownMenu,
     Avatar,
} from "@nextui-org/react";
import { useState } from "react";


export const SearchIcon = ({ size = 24, strokeWidth = 1.5, width, height, ...props }) => {

     return (
          <svg
               aria-hidden="true"
               fill="none"
               focusable="false"
               height={height || size}
               role="presentation"
               viewBox="0 0 24 24"
               width={width || size}
               {...props}
          >
               <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={strokeWidth}
               />
               <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={strokeWidth}
               />
          </svg>
     );
};

export default function NavbarMain() {
     const [isSearch, setIsSearch] = useState(false)
     return (
          <>
               <Navbar className="bg-slate-900 text-white">
                    <NavbarContent justify="" className="container">
                         <NavbarBrand className="mr-4">
                              <p className="hidden sm:block font-bold text-2xl text-red-700">InGame<span className="text-white">.uz</span></p>
                         </NavbarBrand>
                         <NavbarContent className="hidden sm:flex ">
                              <NavbarItem>
                                   <Dropdown placement="bottom-end">
                                        <DropdownTrigger>
                                             <p>Xizmatlar</p>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Profile Actions" >
                                             <DropdownItem>
                                                  <Link className="font-semibold " href="/service/1">
                                                       Kompyuterlarni kuchaytirish {">"}
                                                  </Link>
                                             </DropdownItem>
                                             <DropdownItem>
                                                  <Link className="text-black font-semibold >" href="/service/2">
                                                       Kompyuterlarga hizmat korsatish {">"}
                                                  </Link>
                                             </DropdownItem>
                                             <DropdownItem>
                                                  <Link className="text-black font-semibold >" href="/service/3">
                                                       Modding va kastomizatsiya {">"}
                                                  </Link>
                                             </DropdownItem>
                                             <DropdownItem>
                                                  <Link className="text-black font-semibold >" href="/service/4">
                                                       Kompyuterlarga hizmat korsatish {">"}
                                                  </Link>
                                             </DropdownItem>
                                        </DropdownMenu>
                                   </Dropdown>
                              </NavbarItem>
                              <NavbarItem>
                                   <Link color="foreground" href="#" className="text-white">
                                        Integrations
                                   </Link>
                              </NavbarItem>
                              <NavbarItem >
                                   <Link aria-current="page" className="text-white" href="#">
                                        Biz Haqimizda
                                   </Link>
                              </NavbarItem>
                              <NavbarItem >
                                   <ModalApp />
                              </NavbarItem>
                              <NavbarItem >
                                   <SelectApp />
                              </NavbarItem>
                              <NavbarItem className="flex items-center space-x-5">
                                   <SelectCourseApp />
                                   <BsBarChart className="text-white cursor-pointer" size={25} />
                                   <IoSearch className="text-white cursor-pointer" size={25} onClick={() => setIsSearch(!isSearch)} />
                                   <FaCartShopping className="text-white cursor-pointer" size={25} />
                              </NavbarItem>
                         </NavbarContent>
                    </NavbarContent>
               </Navbar>
               {isSearch ? (
                    <div className="w-full bg-pink-900 flex items-center justify-center py-3">
                         <form className="flex items-center space-x-3">
                              <input type="text" className="w-[600px] px-2 py-1 rounded-sm bg-black outline-none text-white" />
                              <button type="submit">
                                   <IoSearch className="cursor-pointer" size={20} />
                              </button>
                              <ImCancelCircle className="cursor-pointer" onClick={() => setIsSearch(!isSearch)} />
                         </form>
                    </div>
               ) : null}
          </>
     );
}

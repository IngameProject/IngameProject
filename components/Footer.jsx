import Link from "next/link";
import React from "react";
import { FaPhone, FaClock, FaMapMarkerAlt, FaInstagram, FaTelegram } from "react-icons/fa";

const ContactSection = () => {
     return (
          <>
               <div className="flex justify-between bg-gray-900 text-white p-6 font-sans">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                         <h3 className="text-lg mb-4">Kontaktlar</h3>
                         <ul className="space-y-4">
                              <li className="flex items-center">
                                   <FaPhone className="mr-2" /> +998 97 034 77 73
                              </li>
                              <li className="flex items-center">
                                   <FaPhone className="mr-2" /> +998 97 461 00 99
                              </li>
                              <li className="flex items-center">
                                   <FaPhone className="mr-2" /> +998 97 481 00 99
                              </li>
                              <li className="flex items-center">
                                   <FaClock className="mr-2" /> 10:00–20:00
                              </li>
                              <li className="flex items-center">
                                   <FaMapMarkerAlt className="mr-2" /> Toshkent shahri, Yunusobod tumani, Kichik halqa yo'li, 50-uy
                              </li>
                         </ul>
                    </div>
                    <div className="w-full md:w-1/2 mb-6 md:mb-0">
                         <h3 className="text-lg mb-4">Ijtimoiy tarmoqlar</h3>
                         <ul className="space-y-4">
                              <li>
                                   <Link href={'https://instagram.com/wenaco_gc'} target="_blank" className="flex items-center">
                                        <FaInstagram className="mr-2" /> Instagram
                                   </Link>
                              </li>
                              <li>
                                   <Link href={'https://t.me/@wgsm3'} target="_blank" className="flex items-center">
                                        <FaTelegram className="mr-2" /> Telegram
                                   </Link>
                              </li>
                         </ul>
                    </div>
                    <div className="w-[100%]">
                         <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.813361249084!2d69.51978051190757!3d41.312923671189736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae577c591c6223%3A0x2a4384b06c718475!2sYangibozor%20Dehqon%20bozori!5e0!3m2!1sru!2s!4v1734883615511!5m2!1sru!2s"
                              width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                         ></iframe>
                    </div>
               </div>

          </>

     );
};

export default ContactSection;

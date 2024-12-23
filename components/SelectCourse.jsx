"use client"
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

export const paymentCourse = [
     { key: "Usd", label: "Usd" },
     { key: "Uzs", label: "Uzs" }
];

function SelectCourseApp() {
     const [isOpen, setIsOpen] = React.useState(false);

     return (
          <div className="gap-2 rounded-lg px-1 bg-inherit shadow-lg w-32">
               <Select
                    defaultSelectedKeys={["Uzs"]}
                    isOpen={isOpen}
                    onOpenChange={(open) => open !== isOpen && setIsOpen(open)}
               >
                    {paymentCourse.map((Pay) => (
                         <SelectItem key={Pay.key}>{Pay.label}</SelectItem>
                    ))}
               </Select>
          </div>
     );
}

export default SelectCourseApp

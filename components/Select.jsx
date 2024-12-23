"use client"
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

export const languages = [
     { key: "Uz", label: "Uz" },
     { key: "Eng", label: "Eng" }
];

function SelectApp() {
     const [isOpen, setIsOpen] = React.useState(false);

     return (
          <div className="gap-2 rounded-lg px-1 bg-inherit shadow-lg w-32">
               <Select
                    defaultSelectedKeys={["Uz"]}
                    isOpen={isOpen}
                    onOpenChange={(open) => open !== isOpen && setIsOpen(open)}
               >
                    {languages.map((lang) => (
                         <SelectItem key={lang.key}>{lang.label}</SelectItem>
                    ))}
               </Select>
          </div>
     );
}

export default SelectApp

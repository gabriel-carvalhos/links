import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import ThemeButton from "./ThemeButton";
import { useState } from "react";

function ThemeDropdown() {
    const [theme, setTheme] = useState('dark');

    const handleTheme = () => setTheme()

    return (
        <div className="fixed top-6 right-6 opacity-0 animate-opacity">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="flex gap-1 items-center bg-[#333] hover:bg-[#0a0a0a] active:bg-black focus:bg-black transition-colors rounded-md border p-2 mb-2 cursor-pointer">
                    {theme == 'dark' ? 
                        <MoonIcon className="size-5 text-white"/> :
                        <SunIcon className="size-5 text-white"/>
                    }
                    <ChevronDownIcon className="size-5 text-white"/>
                </div>

                <ul tabIndex={0} className="dropdown-content bg-[#333] rounded-box w-32 p-2 flex flex-col gap-2">
                    <ThemeButton>
                        <MoonIcon className="size-5 text-white"/>
                        Escuro
                    </ThemeButton>

                    <ThemeButton>
                        <SunIcon className="size-5 text-white"/>
                        Claro
                    </ThemeButton>
                </ul>
            </div>
        </div>
    )
};

export default ThemeDropdown;
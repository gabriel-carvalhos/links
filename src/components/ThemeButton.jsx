function ThemeButton({ children }) {
    return (
        <>
            <li className="flex gap-2 p-2 rounded-md bg-[#333] hover:bg-[#0a0a0a] active:bg-black transition-colors cursor-pointer font-mono">
                {children}
            </li>
        </>
    )
};

export default ThemeButton;
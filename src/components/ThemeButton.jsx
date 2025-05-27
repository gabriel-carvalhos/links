function ThemeButton({ children, ...props }) {
    return (
        <>
            <li className="flex gap-2 p-2 rounded-md hover:text-white active:text-white dark:bg-[#333] bg-[#F0F0F0] hover:bg-[#0a0a0a] active:bg-black transition-colors cursor-pointer font-mono" {...props}>
                {children}
            </li>
        </>
    )
};

export default ThemeButton;
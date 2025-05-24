function Button({children, ...props}) {
    return (
        <> 
            <li>
                <a {...props} target="_blank" className="block font-mono text-xl text-center bg-[#333] border hover:bg-[#0a0a0a] active:bg-black py-2 px-3 transition-colors rounded-md cursor-pointer">
                    {children}
                </a>
            </li>
        </>
    )
}

export default Button
function Button({children, ...props}) {
    return (
        <> 
            <li>
                <a {...props} target="_blank" className="block relative font-mono text-xl text-center dark:text-white text-[#333] hover:text-white active:text-white dark:bg-[#333] bg-[#F0F0F0] hover:bg-[#0a0a0a] active:bg-black border dark:hover:border-white hover:border-[#333] active:border-white py-2 px-3 overflow-hidden transition-colors rounded-md cursor-pointer hover:*:bottom-0 active:*:bottom-0">
                    {children}

                    {props.unvailable &&
                        <p className="bg-[#0a0a0a] w-full h-full flex justify-center items-center absolute left-0 -bottom-full transition-all duration-300">Site em construção</p>
                    }
                </a>
            </li>
        </>
    )
}

export default Button
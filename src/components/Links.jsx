import Button from "./Button"

function Links() {
    return (
        <>
            <ul className="flex flex-col gap-2">
                <Button href="https://www.linkedin.com/in/gabrielcarvalhosnt">LinkedIn</Button>
                <Button href="https://www.github.com/gabriel-carvalhos">GitHub</Button>
                <Button href="mailto:gabrielcarvalhos.snt@gmail.com">Email</Button>
                <Button unvailable>Portifolio</Button>
            </ul>
        </>
    )
}

export default Links
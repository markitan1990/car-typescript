interface ImageProps {
    className?: string
    src: string
    alt: string
}

export const Image = ({ className, src, alt }: Readonly<ImageProps>) => {
    return <img className={className} src={src} alt={alt}></img>
}

import {useState} from 'react'

export type ReadMoreType = {
    lessText?: string
    maxLength: number
    moreText?: string
    text: string
    className?: string
}

export const ReadMoreButton = ({
                                   lessText = 'Hide',
                                   maxLength,
                                   moreText = 'Show more',
                                   text,
                                   className
                               }: ReadMoreType) => {
    const [isTrimmed, setIsTrimmed] = useState(true)
    const toggleReadMore = () => {
        setIsTrimmed(!isTrimmed)
    }

    if (text.length <= maxLength) {
        return <>{text}</>
    }

    const trimmedText = `${text.slice(0, maxLength)}...`
    const textToShow = isTrimmed ? trimmedText : text
    const buttonText = isTrimmed ? moreText : lessText

    return (
        <>
            {textToShow}
            <button className={className} onClick={toggleReadMore}>{buttonText}</button>
        </>
    )
}
import React from "react"
import "./styles.css";

interface AvatarProps {
src: string;
alt?: string;
}

export function Avatar({src, alt}: AvatarProps) {
    return (
        <>
            {/* <img className='avatar' src='https://github.com/Gilbertoaleite.png' /> */}
            <img className="avatar" src={src} alt={alt} />
            
        </>
    )


}
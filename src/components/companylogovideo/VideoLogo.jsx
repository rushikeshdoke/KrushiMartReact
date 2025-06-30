import React from 'react'
import SignupVideo from "../companylogovideo/videoKrushiMart.mp4";
export default function VideoLogo() {
    return (
        <div>
            <video className="logoimg" loop autoPlay muted>
                <source src={SignupVideo} type="video/mp4" />
            </video>
        </div>
    )
}

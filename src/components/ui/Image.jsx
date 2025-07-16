import React, { useState } from 'react'

export default function Image({ src, alt, className = ''}) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {!loaded && (
                <div className="absolute top-0 left-0 right-0 bottom-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
            )}

            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                className={`w-full h-full object-contain ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    )
}

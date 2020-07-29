import React from 'react'

export default function DragPreviewImage({connect,src}) {
    return <img ref={connect} src={src} alt="img"/>
}
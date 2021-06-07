import React from 'react'

const Header = ({setName}) => {
    return (
        <div className="flex w-full h-16 justify-center mt-10">
        <div className="pr-5">
        <h3  onClick={()=>setName('character')}  className="text-2xl cursor-pointer">Character</h3>
        </div>
        <div className="pr-5">
        <h3   onClick={()=>setName('location')}  className="text-2xl cursor-pointer">Location</h3>
        </div>
        <div>
        <h3  onClick={()=>setName('episode')} className="text-2xl cursor-pointer">Episode</h3>
        </div>
        </div>
    )
}

export default Header

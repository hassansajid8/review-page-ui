import React from 'react'

const ThumbsUpDown = () => {
    return (
        <div className='flex justify-start thumbs'>
                <input type="radio" className='hidden' name='recommend' id='down' />
                <label htmlFor="down" className='flex items-end mr-12 mt-2'>
                    <i className='iconoir-thumbs-down' />
                    <p className=''>No</p>
                </label>
                
                <input type="radio" className='hidden' name='recommend' id='up' />
                <label htmlFor="up" className='flex items-end mt-2'>
                <i className='iconoir-thumbs-up' />
                    <p className=''>Yes</p>
                </label>
        </div>
    )
}

export default ThumbsUpDown
import React from 'react'

export default function WorkoutDetail({ item }) {
    return (
        <div className='w-full border-b-4 m-2 my-12 shadow-sm'>
            <div className='p-1'>
                <h1 className='text-2xl font-bold'>{item.name}  : <span className=' p-2 py-1 font-normal'>{item.difficulty}</span></h1>
            </div>

            <div className='flex justify-between p-2'>
                <h1 className='text-xl font-semibold'>Equipment: <span className='text-l font-light'>{item.equipment}</span></h1>
                <h1 className='text-xl font-semibold'>Type: <span className='text-l font-light'>{item.type}</span></h1>
            </div>
            <p className='text-xl font-semibold p-2 pb-6 mb-6'>Instructions: <span className='text-l font-light'> {item.instructions}</span></p>
        </div>
    );
}
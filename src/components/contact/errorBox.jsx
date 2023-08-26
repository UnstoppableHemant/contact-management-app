const NoContactFoundBox = () => {
    return (
        <div className='mt-6 mx-auto py-2 px-3 rounded-lg grid grid-cols-4 w-3/6 shadow-lg text-xl'>
            <button>X</button>
            <p className='col-span-3'> No Contact Found <br />
                Please add contact from Create Contact button
            </p>
        </div>
    )
}

export default NoContactFoundBox;
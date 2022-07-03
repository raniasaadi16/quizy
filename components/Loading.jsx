export default function Loading() {
    return (
        <div className='absolute z-40 top-0 left-0 bg-black opacity-60 h-full w-full'>
            <div className='h-screen relative z-50 flex justify-center items-center'>
                <h1 className='text-xl text-blue-400 text-center'>Loading...</h1>
            </div>
        </div>
    )
}
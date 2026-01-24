function ContactUs() {
    return (
        <div className='p-4'>
            <div className='text-2xl font-bold'>Contact Us</div>
            <form className='flex flex-col gap-4'>
                <input className='border-2 border-gray-300 rounded-md p-2' type='text' placeholder='Name' />
                <input className='border-2 border-gray-300 rounded-md p-2' type='email' placeholder='Email' />
                <textarea className='border-2 border-gray-300 rounded-md p-2' placeholder='Message' />
                <button className='bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactUs;
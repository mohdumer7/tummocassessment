import React from 'react'

const AddCityForm = ({setShowModal}) => {
  return (
    <div className="w-full">
    <div className='h-screen w-full flex flex-col justify-center items-center'>
        <div className='w-1/4  shadow-2xl  flex flex-col rounded-lg '>
            <h1 className='w-full bg-gray-800 text-white p-2 text-center rounded-tl-lg rounded-tr-lg'>Add City</h1>
            <div className='flex justify-center p-3 w-full'>

            <form className='w-full'>
        
        <label htmlFor="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name of the city</label>
        <input type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bangalore" required/>

        <label htmlFor="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <input type="text" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Awesome City" required/>

        <label htmlFor="file" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload an image</label>
        <input type="file" id="file" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>

        <div className='flex justify-between'>
        <button type="submit" class="text-white rounded-lg mt-4 transition bg-green-600 p-2 hover:bg-green-800 w-1/3">Submit</button>
        <button type="cancel" class="text-white rounded-lg mt-4 transition bg-red-600 p-2 hover:bg-red-800 w-1/3 " onClick={()=>setShowModal(false)}>cancel</button>
        </div>
     </form>
        </div>
        </div>

    </div>
    </div>
   
  )
}

export default AddCityForm
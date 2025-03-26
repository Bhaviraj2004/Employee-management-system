import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <div className="bg-[#1c1c1c] h-[75%] w-full p-5 mt-5 rounded-xl">
        <form className="flex justify-between">
            <div  className="w-[30%] h-full p-3 rounded-xl">
            <div className="">
            <h3 className="text-2xl font-semibold mb-1">Task Title</h3>
            <input type="text" placeholder="Make a UI design" required className="rounded w-[300px] py-1 px-2  text-black"/>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-1 mt-5">Date</h3>
            <input type="date" required className="rounded w-[300px] py-1 px-2  text-black"/>
            <h3 className="text-2xl font-semibold mb-1 mt-5">Assign To</h3>
            <input type="text" required className="rounded w-[300px] py-1 px-2  text-black"/>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-1 mt-5">Category</h3>
            <input
              type="text"
              placeholder="Design, Development, etc..."
              required className="rounded w-[300px] py-1 px-2  text-black"
            />
          </div>
            </div>
          <div className="w-[30%] h-full p-3 rounded-xl">
            <div>
            <h3 className="text-2xl font-semibold mb-1">Description</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write a description"
              required className="rounded w-[400px] py-1 px-2 text-black"
            ></textarea>
          </div>
          <button className="mt-5 bg-blue-500 w-full rounded py-2 font-semibold text-lg">Create Task</button>
          </div>
        </form>   
      </div>
    </div>
  )
}

export default CreateTask
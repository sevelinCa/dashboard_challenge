import React from 'react'

const OrderListAnalytic = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">Orders List</h2>
      <div className="flex space-x-2">
        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>

    <div className="flex  justify-center h-[30vh] space-x-16  items-center">
      <div className="flex flex-col items-center h-full">
        <div className="w-24 bg-purple-100 h-full flex flex-col-reverse">
          <div className="bg-purple-800 h-[10px]"></div>
          <div className="bg-purple-600 h-[20px]"></div>
          <div className="bg-purple-400 h-[40px]"></div>
          <div className="bg-purple-200 h-[30px]"></div>
        </div>
        <span className="mt-2 text-sm text-gray-600">January</span>
      </div>
      <div className="flex flex-col items-center h-full">
        <div className="w-24 bg-purple-100 h-full flex flex-col-reverse">
          <div className="bg-purple-800 h-[15%]"></div>
          <div className="bg-purple-600 h-[25%]"></div>
          <div className="bg-purple-400 h-[35%]"></div>
          <div className="bg-purple-200 h-[25%]"></div>
        </div>
        <span className="mt-2 text-sm text-gray-600">February</span>
      </div>
    </div>

    <div className="flex justify-center space-x-4 mt-6">
      <span className="px-2 py-1 bg-purple-800 text-white text-xs rounded">
        10%
      </span>
      <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded">
        20%
      </span>
      <span className="px-2 py-1 bg-purple-400 text-white text-xs rounded">
        40%
      </span>
      <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded">
        60%
      </span>
      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
        80%
      </span>
    </div>
  </div>
  )
}

export default OrderListAnalytic
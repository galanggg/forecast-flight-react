import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const InputForm = () => {
  const [startDate, setStartDate] = useState(new Date())
  const handleChange = (date) => {
    setStartDate(date)
  }
  return (
    <div className="container">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label htmlFor="name" className="bg-white text-gray-600 px-1">
                  From
                </label>
              </p>
            </div>
            <p>
              <input
                id="name"
                autoComplete="false"
                tabIndex="0"
                type="text"
                className="py-1 px-1 text-gray-900 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label
                  htmlFor="username"
                  className="bg-white text-gray-600 px-1"
                >
                  To
                </label>
              </p>
            </div>
            <p>
              <input
                id="username"
                autoComplete="false"
                tabIndex="0"
                type="text"
                className="py-1 px-1 outline-none block h-full w-full"
              />
            </p>
          </div>
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label
                  htmlFor="username"
                  className="bg-white text-gray-600 px-1"
                >
                  Departure
                </label>
              </p>
            </div>
            <DatePicker selected={startDate} onChange={handleChange} />
          </div>
        </div>
        <div className="border-t mt-6 pt-3">
          <button className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default InputForm

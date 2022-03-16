import React, { useState } from "react"
import "./searchForm.css"

const SearchForm = props => {
  const [enteredAddress, setEnteredAddress] = useState("")

  const addressChangeHandler = event => {
    setEnteredAddress(event.target.value)
  }

  // Sends the submitted IP address to index.js for processing
  const submitHandler = event => {
    event.preventDefault()
    const submitData = enteredAddress
    if (submitData.length < 1) {
      alert("IP search cannot be empty")
    } else {
      props.onSaveSearchData(submitData)
      setEnteredAddress("")
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-search__controls">
        <div className="new-search__control">
          <label>IP Address Search</label>
          <input
            type="text"
            value={enteredAddress}
            onChange={addressChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-search__actions">
        <button type="submit">Search</button>
      </div>
    </form>
  )
}

export default SearchForm

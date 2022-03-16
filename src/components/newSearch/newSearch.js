import React from "react"
import SearchForm from "./searchForm"
import "./newSearch.css"

const newSearch = props => {
  const saveSearchDataHandler = enteredSearchData => {
    const searchData = enteredSearchData
    props.onSearch(searchData)
  }
  return (
    <div className="new-search">
      <SearchForm onSaveSearchData={saveSearchDataHandler} />
    </div>
  )
}

export default newSearch

import React from "react"
import "./searches.css"

// Returns a table of previous searches
const Searches = props => {
  return (
    <table className="searches">
      <tbody>
        <tr>
          <th>IP</th>
          <th>Country</th>
          <th>City</th>
        </tr>
        {props.items.map((search, index) => (
          <tr key={index}>
            <td>{search.ip}</td>
            <td>{search.country}</td>
            <td>{search.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Searches

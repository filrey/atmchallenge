import React from "react"

import NewSearch from "../components/newSearch/newSearch"
import Searches from "../components/searches/searches"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country: "",
      city: "",
      ip: "",
      searches: [],
    }
  }
  // Sends new IP request to GeoJs and stores result in state
  searchIpHandler(address) {
    fetch("https://get.geojs.io/v1/ip/geo/" + address + ".json")
      .then(response => {
        return response.json()
      })
      .then(json => {
        let countryJson = json.country ? json.country : "N/A"
        let cityJson = json.city ? json.city : "N/A"
        let ipJson = json.ip ? json.ip : "N/A"
        let newSearch = { country: countryJson, city: cityJson, ip: ipJson }

        this.setState({
          country: countryJson,
          city: cityJson,
          ip: ipJson,
          searches: [newSearch, ...this.state.searches],
        })
      })
      .catch(error => {
        alert("Invalid Input")
      })
  }
  // On app startup sends new IP request to GeoJs and stores result of current user in state
  componentDidMount() {
    fetch("https://get.geojs.io/v1/ip/geo.json")
      .then(response => {
        return response.json()
      })
      .then(json => {
        let countryJson = json.country ? json.country : "N/A"
        let cityJson = json.city ? json.city : "N/A"
        let ipJson = json.ip ? json.ip : "N/A"
        let newSearch = { country: countryJson, city: cityJson, ip: ipJson }
        this.setState({
          country: countryJson,
          city: cityJson,
          ip: ipJson,
          searches: [newSearch],
        })
      })
      .catch(error => {
        alert("Invalid Input")
      })
  }

  render() {
    let { country, city, ip } = this.state

    // Passes a new IP search to the search handler
    const addSearchHandler = search => {
      this.searchIpHandler(search)
    }

    return (
      <Layout>
        <Seo title="Home" />
        <h1>Where am I?</h1>
        <p>Your IP address: {ip}</p>
        <p>Country: {country}</p>
        <p>City: {city}</p>
        <NewSearch onSearch={addSearchHandler} />
        <Searches items={this.state.searches} />
      </Layout>
    )
  }
}

export default IndexPage

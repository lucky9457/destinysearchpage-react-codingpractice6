// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  a = ''

  state = {
    searchInput: '',
    PlacesList: this.a,
  }

  onchange = event => {
    const searchinput = event.target.value

    this.setState({
      searchInput: searchinput,
    })
  }

  render() {
    const {destinationsList} = this.props
    this.state.PlacesList = destinationsList

    const {searchInput, PlacesList} = this.state
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main">
        <h1>Destination Search</h1>
        <div className="inputcontainer">
          <input
            onChange={this.onchange}
            className="searchinput"
            type="search"
          />
          <img
            className="searchimg"
            alt="Search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>

        <ul className="itemsCon">
          {searchResults.map(each => (
            <DestinationItem userDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

import React from "react";
import { SearchBar } from "SearchBar.css"

export class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton">SEARCH</button>
    </div>
  }
}
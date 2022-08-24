import React from "react";
import { SearchResults } from "./SearchResults.css"

export class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    <div class="Playlist">
      <input value="New Playlist" />
      <!-- Add a TrackList component -->
      <button class="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  }
}
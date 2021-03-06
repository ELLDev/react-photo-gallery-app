import React, { Component } from "react";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// App components
import Search from "./components/Search";
import PhotoContainer from "./components/PhotoContainer";
import Nav from "./components/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      queryName: "",
    };
  }

  performSearch = (query) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_MY_API_KEY}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          photos: response.data.photos.photo,
          queryName: query,
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route
              path="*"
              element={
                <>
                  <Search onSearch={this.performSearch} />
                  <Nav onSearch={this.performSearch} />
                  <PhotoContainer data={this.state.photos} queryName={this.state.queryName} />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

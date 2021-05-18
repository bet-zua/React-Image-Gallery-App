import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

/* App Components */
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';
import NotFound from './Components/NotFound';

/* API Imports */
import axios from 'axios';
import apiKey from './config';
const api_key = apiKey;

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      cats: [],
      dogs: [],
      computers: [],
      search: [],
      loading: true,
      term: ''
    };
  };
 
  /* Handle Data Fetching for Nav Categories */
  componentDidMount() {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        cats: res.data.photos.photo
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        dogs: res.data.photos.photo
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      this.setState({
        computers: res.data.photos.photo
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err);
    });    

    this.performSearch();
  }

  /* Handle Search */
  performSearch = (term) => {
    this.setState({
      loading: true
    });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${term}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          search: res.data.photos.photo,
          loading: false,
        });
      })
      .catch(err => {
        console.log('Error fetching and parsing data', err);
      });
  };

  /* Render Components */
  render() { 
    const { cats, dogs, computers, search } = this.state;
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch}/>
          <Nav />  
          <Switch>
            <Route exact path='/'>
                { (this.state.loading)
                  ? <p>Loading...</p>
                  : <Gallery data={cats} />
                }
            </Route>
            <Route exact path='/search/:term'>
                { (this.state.loading)
                  ? <p>Loading...</p>
                  : <Gallery data={search} />
                }
            </Route>
            <Route path='/cats' render={ () => <Gallery data={cats} />} />
            <Route path='/dogs' render={ () => <Gallery data={dogs} />} />
            <Route path='/computers' render={ () => <Gallery data={computers} />} />
            <Route component={NotFound} />
          </Switch>   
        </div>
      </BrowserRouter>
    );
  }
}

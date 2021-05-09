import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateGameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      developer:'',
      producer:'',
      genre:'',
      operatingSystem:'',
      dateReleased:'',
      coverImage:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/games/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, game: res.data})
        this.setState({
          title: res.data.title,
          developer: res.data.developer,
          producer: res.data.producer,
          genre: res.data.genre,
          operatingSystem: res.data.operatingSystem,
          dateReleased: res.data.dateReleased,
          coverImage: res.data.coverImage
        })
      })
      .catch(err => {
        console.log("Error from UpdateGameInfo");
      })
  };

  onChange = element => {
    this.setState({ [element.target.name]: element.target.value });
  };

  onSubmit = element => {
    element.preventDefault();

    const data = {
      title: this.state.title,
      developer: this.state.developer,
      producer: this.state.producer,
      genre: this.state.genre,
      operatingSystem: this.state.operatingSystem,
      dateReleased: this.state.dateReleased,
      coverImage: this.state.coverImage
    };

    axios
      .put('http://localhost:8082/api/games/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-game/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateGameInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateGameInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Game List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Game</h1>
              <p className="lead text-center">
                  Update Game's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Game'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="developer">Developer</label>
              <input
                type='text'
                placeholder='developer'
                name='developer'
                className='form-control'
                value={this.state.developer}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="producer">Producer</label>
              <input
                type='text'
                placeholder='producer'
                name='producer'
                className='form-control'
                value={this.state.producer}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="genre">Genre</label>
              <input
                type='text'
                placeholder='Describe this game'
                name='genre'
                className='form-control'
                value={this.state.genre}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="operatingSystem">Operating System</label>
              <input
                type='text'
                placeholder='operatingSystem'
                name='operatingSystem'
                className='form-control'
                value={this.state.operatingSystem}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="dateReleased">Date Released</label>
              <input
                type='date'
                placeholder='dateReleased of this Game'
                name='dateReleased'
                className='form-control'
                value={this.state.dateReleased}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="coverImage">Cover Image (URL)</label>
              <input
                type='text'
                placeholder='Cover Image for this Game'
                name='coverImage'
                className='form-control'
                value={this.state.coverImage}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Game</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateGameInfo;
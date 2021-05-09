import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      developer:'',
      producer:'',
      genre:'',
      operatingSystem:'',
      dateReleased:''
    };
  }

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
      dateReleased: this.state.dateReleased
    };

    axios
      .post('http://localhost:8082/api/books', data)
      .then(res => {
        this.setState({
          title: '',
          developer:'',
          producer:'',
          genre:'',
          operatingSystem:'',
          dateReleased:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Book</h1>
              <p className="lead text-center">
                  Create new book
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Developer'
                    name='developer'
                    className='form-control'
                    value={this.state.developer}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Producer'
                    name='producer'
                    className='form-control'
                    value={this.state.producer}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Genre'
                    name='genre'
                    className='form-control'
                    value={this.state.genre}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='Operating System'
                    name='operatingSystem'
                    className='form-control'
                    value={this.state.operatingSystem}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Date Released'
                    name='dateReleased'
                    className='form-control'
                    value={this.state.dateReleased}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBook;
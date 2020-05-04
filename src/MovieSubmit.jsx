import React, { Component } from "react";
import axios from "axios";

export class MovieSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    axios
      .post(url, this.state)
      .then((res) => {
        alert(
          `Tu as bien ajouté ${this.state.title} à la base de donnée. L'ID de ton post est le ${res.data.id}`
        );
      })
      .catch((e) => {
        console.error(e);
        alert(`Problème lors de l'ajout de ton film : ${e.message}`);
      });
  }

  render() {
    return (
      <div>
        <div className="MovieForm">
          <h1>Propose ton film</h1>

          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Informations</legend>
              <div className="form-data">
                <label htmlFor="title">Titre</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  onChange={this.onChange}
                  value={this.state.title}
                />
              </div>

              <div className="form-data">
                <label htmlFor="poster">Affiche</label>
                <input
                  type="text"
                  id="poster"
                  name="poster"
                  onChange={this.onChange}
                  value={this.state.poster}
                />
              </div>

              <div className="form-data txt-area">
                <label htmlFor="comment">Commentaire</label>
                <textarea
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={this.onChange}
                  value={this.state.comment}
                  rows="5"
                  cols="40"
                />
              </div>
              <hr />
              <div className="form-data">
                <input type="submit" value="Envoyer" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default MovieSubmit;

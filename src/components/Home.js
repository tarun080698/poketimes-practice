import React, { Component } from "react";
import { connect } from "react-redux";
import "./form.css";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

class Home extends Component {
  state = {
    form: false,
    title: "",
    body: "",
  };

  handleAdd = (e) => {
    e.preventDefault();
    const post = {
      id: Math.random(),
      title: this.state.title,
      body: this.state.body,
    };
    console.log(post);
    console.log(this.props);
    this.props.addPost(post);
    this.setState({
      form: !this.state.form,
      title: "",
      body: "",
    });
    this.props.history.push("/");
  };

  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <div>
            <h4 className="center">Home</h4>
            {this.state.form ? (
              <button
                className="btn red darken-3"
                onClick={() => {
                  this.setState({
                    form: !this.state.form,
                  });
                }}
              >
                close
              </button>
            ) : (
              <button
                className="btn red darken-3"
                onClick={() => {
                  this.setState({
                    form: !this.state.form,
                  });
                }}
              >
                add
              </button>
            )}
          </div>
          {this.state.form && (
            <div className="modal card">
              <div className="modal-content">
                <div className="modal-header center red darken-3">
                  <h4>Add Post</h4>
                </div>
                <div className="modal-body">
                  <form
                    onSubmit={(e) => this.handleAdd(e)}
                    className="form-container"
                  >
                    <label htmlFor="title">
                      <b>Title</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter title"
                      name="title"
                      onChange={(e) => {
                        this.setState({
                          title: e.target.value,
                        });
                      }}
                      value={this.state.title}
                      required
                    />
                    <label for="body">
                      <b>Description</b>
                    </label>
                    <input
                      type="text"
                      className="body"
                      placeholder="describe your post..."
                      name="body"
                      onChange={(e) => {
                        this.setState({
                          body: e.target.value,
                        });
                      }}
                      value={this.state.body}
                      required
                    >
                    </input>
                    <button className="btn red darken-3">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          )}
          {postList}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch({ type: "ADD_POST", post: post });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

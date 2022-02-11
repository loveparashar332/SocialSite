import React, { Component } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import SimpleImage from "@editorjs/simple-image";
export default class MyEditor extends Component {
  state = {
    tags: [],
  };
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        tags: [...this.state.tags, e.target.value],
      });
      this.refs.tag.value = "";
    }
  };
  handleClick = (e) => {
    console.log(e.tag);
    var new_tags = [...this.state.tags];
    var index = new_tags.indexOf(e);
    if (index !== -1) {
      new_tags.splice(index, 1);
      this.setState({ tags: new_tags });
    }
  };
  render() {
    const editor = new EditorJS({
      holderId: "editorjs",
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: ["link", "bold"],
        },
        embed: {
          class: Embed,
          inlineToolbar: false,
          config: {
            services: {
              youtube: true,
              coub: true,
            },
          },
        },
        image: SimpleImage,
      },
    });

    function handleSave() {
      alert('Your Article Has been submitted for Evaluation')
    }

    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-8 my-5">
            <h3>NARI: Ministry of Women and Child Development</h3>
            <h6>Your Network is Your Net Worth</h6>
            <a href="">
              <p style={{ fontSize: "14px" }}>Change Language भाषा बदलो</p>
            </a>
          </div>
          <div class="col-lg-4 my-5" style={{ textAlign: "right" }}>
            <h5>
              <a href="">Love parashar</a>
            </h5>
            <h6><a href="/dashboard">Return to Dashboard</a></h6>
            <TwitterFollowButton screenName={"ministrywcd"} />
          </div>
        </div>
        <h3>DRAFT </h3>
        <h6>Tell your story ✨ to inspire others </h6>
        <input
          id="tags"
          name="tags"
          class="form-control"
          placeholder="Add Tags separated by Comma"
        ></input>
        <br />
        <div
          id="editorjs"
          style={{
            background: "white",
            paddingTop: "50px",
            color: "#000000",
            borderRadius: "5px",
          }}
        ></div>
        <a href="/dashboard">
        <button
          className="btn btn-success my-3 btn-sm"
          style={{ background: "#F4508D", border: "0px" }}
          onClick={handleSave}
        >
        Save Article
        </button>
        </a>
      </div>
    );
  }
}

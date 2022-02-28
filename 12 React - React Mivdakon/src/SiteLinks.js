import React, { Component } from 'react'

export default class SiteLinks extends React.Component {
  state = {
    imgUrl: '',
    siteUrl: '',
    list: [],
  }

  render() {
    let ret = (
      <div>
        Link;
        <input
          placeholder="please enter img url"
          onChange={(eve) => {
            let v = eve.target.value
            this.setState({ imgUrl: v })
          }}
        />
        <input
          placeholder="please enter site url"
          onChange={(eve) => {
            let v = eve.target.value
            this.setState({ siteUrl: v })
          }}
        />
        <br />
        <a href={this.state.siteUrl}>
          <img src={this.state.imgUrl} />
        </a>
        <button
          onClick={(e) => {
            let val = e.target.value
            let url1 = this.setState({ imgUrl: val })

            console.log(url1)
          }}
        >
          add
        </button>
      </div>
    )

    return ret
  }
}

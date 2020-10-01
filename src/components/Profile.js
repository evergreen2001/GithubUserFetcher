import React, { Component } from "react";
import List from "./List";
import Link from './Link'


export default class Profile extends Component {
  state = {
    data: [],
    loading: true,
  };
  async componentDidMount() {
    const fetchProfileData = await fetch(
      "https://api.github.com/users/octocat"
    );
    const profileJson = await fetchProfileData.json();
    if (profileJson) {
      this.setState({
        data: profileJson,
        loading: false,
      });
    }

    console.log(profileJson);
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading</div>;
    }

    const items = [
     
      { label: "Url", value:<Link url={data.html_url} title='Github url'/>},

      { label: "Name", value: data.name },
      { label: "Location", value: data.location },
      { label: "Twitter", value: data.twitter_username },
      { label: "Company", value: data.company },
      { label: "User Profile", value: data.html_url },
    ];
    return (
      <div>
        <h1>User Profile CMP</h1>

        <img src={data.avatar_url} />

        <List items={items} />
        <Link/>
      </div>
    );
  }
}

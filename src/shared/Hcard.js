import React, { Component } from "react";
import PropTypes from "prop-types";

global.React = React;
const HcardComponent = require("../shared/hCard.min.js").default;


class Hcard extends Component {
  constructor(props) {
    super(props);

    let cardData;
    if (__isBrowser__) {
      cardData = window.__HCARD_DATA__;
      delete window.__HCARD_DATA__;
    } else {
      cardData = this.props.staticContext;
    }
    console.log('HcardList#27->>>', Array.isArray(cardData), cardData);

    this.state = {
      cardData,
      loading: cardData ? false : true
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    if (!this.state.cardData) {
      this.fetchData(this.props.match.params.id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData(this.props.match.params.id);
    }
  }
  fetchData(card) {
    this.setState(() => ({
      loading: true
    }));

    this.props.fetchInitialData(card)
      .then((cardData) => this.setState(() => ({
        cardData,
        loading: false
      })));
  }
  render() {
    const { loading, cardData } = this.state;

    if (loading === true) {
      return <p>LOADING</p>;
    }

    return (
      <HcardComponent {...cardData} />
    );
  }
}


Hcard.propTypes = {
  match: PropTypes.object,
  staticContext: PropTypes.object,
  fetchInitialData: PropTypes.func
};

export default Hcard;
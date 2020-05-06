import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class HcardList extends Component {
  constructor(props) {
    super(props);

    let cardData;
    if (__isBrowser__) {
      cardData = window.__HCARD_DATA__;
      delete window.__HCARD_DATA__;
    } else {
      cardData = this.props.staticContext;
    }
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
        .then((cardData) => {
          this.setState(() => ({
            cardData,
            loading: false
          }));
        });
  }

  render() {
    const { loading, cardData } = this.state;

    if (loading === true) {
      return (<p>LOADING</p>);
    }

    return (
      <BootstrapTable data={cardData} options={{ noDataText: "Please create a hCard" }} striped hover condensed >
        <TableHeaderColumn dataField='id' isKey={true} dataAlign='center' dataSort={true}>Id</TableHeaderColumn>
        <TableHeaderColumn dataField='givenName' dataSort={true}>Given Name</TableHeaderColumn>
        <TableHeaderColumn dataField='surname' dataSort={true}>Surname</TableHeaderColumn>
        <TableHeaderColumn dataField='email' dataSort={true} >Email</TableHeaderColumn>
        <TableHeaderColumn dataField='phone' >Phone</TableHeaderColumn>
      </BootstrapTable >);
  };
}

export default HcardList;

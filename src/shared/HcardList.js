import React, { Component } from "react";
import { BootstrapTable as Table, TableHeaderColumn as Header } from "react-bootstrap-table";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";


class HcardList extends Component {
  constructor(props) {
    super(props);

    let cardData;
    if (__isBrowser__) {
      cardData = window.__HCARD_DATA__;
      delete window.__HCARD_DATA__;
    } else {
      // converting staticContextArray back to an array
      const staticContextArray = Object.values(this.props.staticContext);
      cardData = staticContextArray;
    }
    this.state = {
      cardData,
      loading: cardData ? false : true
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    if (!this.state.cardData) {
      this.fetchData();
    }
  }
  async fetchData() {
    this.setState(() => ({
      loading: true
    }));

    const cardData = await this.props.fetchInitialData();
    this.setState(() => ({
      cardData,
      loading: false
    }));
  }

  addEditLink(cell) {
    return (<NavLink to={`/card/${cell}`} > Edit</NavLink >);
  }

  render() {
    const { loading, cardData } = this.state;

    if (loading === true) {
      return (<p>LOADING</p>);
    }

    return (
      <Table data={cardData} options={{ noDataText: "Please create a hCard" }} striped hover>
        <Header dataField='id' isKey={true} dataAlign='center' dataSort={true}>Id</Header>
        <Header dataField='givenName' dataSort={true}>Given Name</Header>
        <Header dataField='surname' dataSort={true}>Surname</Header>
        <Header dataField='email' dataSort={true}>Email</Header>
        <Header dataField='phone'>Phone</Header>
        <Header dataField='id' dataFormat={this.addEditLink}></Header>
      </Table >);
  };
}

HcardList.propTypes = {
  staticContext: PropTypes.object,
  fetchInitialData: PropTypes.func
};

export default HcardList;

import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import ImageResults from "./ImageResults";
import * as actions from '../actions';
import {connect} from 'react-redux';

class Search extends Component {
  state = {
    searchText: "",
    num: ""
  };
  
  onAmountChange = (e, index, value) => {this.setState({ num: value });};
  render() {
    console.log('this is data from search',this.props.data);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={(e)=>{this.setState({searchText:e.target.value})}}
          floatingLabelText="Search for Images"
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          onChange={this.onAmountChange}
          value={this.state.num}
          
        >
        
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />
        <br />
        <br />
        <button onClick={()=>{this.props.getPics(this.state)}}>Search</button>
        <br />
        {Object.keys(this.props.data).length ? (
          <ImageResults images={this.props.data.hits} />
        ) : []}
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    data:state.data.data
  }
}
export default connect(mapStateToProps,{getPics:actions.fetchData})(Search);

import React from "react";


class AddContact extends React.Component {
  state = {
    name: "",
    address:"",
    contact:"",
    email: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      adultsCount: 1,
      childrenCount: 0,
      phoneNumber: ''
    };
  }

  handleAdultsCountChange = (e) => {
    this.setState({ adultsCount: e.target.value });
  };

  handleChildrenCountChange = (e) => {
    this.setState({ childrenCount: e.target.value });
  };

  handlePhoneNumberChange = (e) => {
    this.setState({ phoneNumber: e.target.value });
  };

  

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.address ==="" ||  this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", address:"",  email: "" });
  };


  render() {
    return (
      <div className="ui main">
        <h2>Fill Your Details Below</h2>
        <form className="ui form" onSubmit={this.add}>

          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>


          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="address"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>


          <div className="field">
          <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={this.state.phoneNumber}
          onChange={this.handlePhoneNumberChange}
          placeholder="Enter your phone number"
        />
          </div>


          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>


          <div className="field">
          <label htmlFor="adultsCount">Adults:</label>
        <input
          type="number"
          id="adultsCount"
          name="adultsCount"
          value={this.state.adultsCount}
          onChange={this.handleAdultsCountChange}
          min="1"
        />
        </div>


        <div className="field">
        <label htmlFor="childrenCount">Children:</label>
        <input
          type="number"
          id="childrenCount"
          name="childrenCount"
          value={this.state.childrenCount}
          onChange={this.handleChildrenCountChange}
          min="0"
        />
        </div>
          
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}


export default AddContact;
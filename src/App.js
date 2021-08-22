import React from 'react';
import './App.css';
import Form from './Components/Form';
import MainTable from './Components/MainTable'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableitems: []
    }
  }

  createTableItem = (name, email, phone) => {
      name = name.trim();
      email = email.trim();
      phone = phone.trim();
      // PUT
      // fetch('https://jsonplaceholder.typicode.com/users', {
      //         method: 'PUT',
      //         body: {name, email, phone}
      //     }).then((response) => {
      //       if( response.json().status === 200) {
      //         this.setState({
      //           tableitems: [
      //             ...this.state.tableitems,
      //           {id: Date.now(), name, email, phone}
      //           ]
      //         });
      //         console.log('succes');
      //       }
      //     })
      this.setState({
        tableitems: [
          ...this.state.tableitems,
        {id: Date.now(), name, email, phone}
        ]
      });
  }

  deleteTableItem = (key) => {
    this.setState({
      tableitems: this.state.tableitems.filter(item => item.id !== key)
    })
  }

  onEditSubmit = (name, email, phone, key) => {
    this.setState({
      tableitems: this.state.tableitems.map( item =>
        {
          if(item.id === key) {
            // POST CHECK
            fetch('https://jsonplaceholder.typicode.com/users', {
              method: 'POST',
              body: item
          }).then((response) => {
            
            if( response.json().status === 201) {
              item.name = name;
              item.email = email;
              item.phone = phone;
              console.log('succes');
            }
          })
          }
          return item;
        }),
      isEditing: false})
  }

  editTableItem = (key) => {

    let EdditingItem = this.state.tableitems.find(item => item.id === key);
    this.setState({
      isEditing: true,
      editId: key,
      valueName: EdditingItem.name,
      valueMail: EdditingItem.email,
      valueNumber: EdditingItem.phone
    })
  }

  cancel = () => {
    console.log('flex');
    this.setState({
        isEditing: false,
        valueNumber: "",
        valueName: "",
        valueMail: "",
      })
  }

  onChange = (val) => {
    this.setState(val)
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.valueName && this.state.valueMail && this.state.valueNumber) {

        if(this.state.isEditing) {
            this.onEditSubmit(
                this.state.valueName, 
                this.state.valueMail, 
                this.state.valueNumber, 
                this.state.editId
            )
        }
        else {
            this.createTableItem(
                this.state.valueName, 
                this.state.valueMail, 
                this.state.valueNumber
                )   
            }
                                      
        this.setState({
            valueNumber: "",
            valueName: "",
            valueMail: ""
        })
    }
  }

  makeCorrectKeysValues(data) {
    return {
      name: data.name,
      email: data.email,
      phone: data.phone,
      id: data.id
    }  
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {

      this.setState({
        tableitems:  data.map(item => this.makeCorrectKeysValues(item))
      })
    });
  }

  render () {
    return (
      <div className="container">
        <MainTable 
          tableitems={this.state.tableitems} 
          deleteTableItem={this.deleteTableItem} 
          editTableItem={this.editTableItem}
        />
        <Form 
          valueName={this.state.valueName}
          valueNumber={this.state.valueNumber}
          valueMail={this.state.valueMail}
          tableitems={this.state.tableitems} 
          createTableItem={this.createTableItem} 
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          cancel={this.cancel}
          editTableItem={this.editTableItem}
          isEditing={this.state.isEditing}
          editId={this.state.editId}
        />
      </div>
    )
  }
  
}

export default App;

import React from "react"
import AaronCard from "./AaronCard"
import "./App.css"

class App extends React.Component {
  state = {
    userCard: {},
  }
  componentDidMount() {
    fetch("https://api.github.com/users/flowersa29")
      .then((res) => res.json())
      .then((json) => {
        console.log("results App with just json", json)
        console.log("results App with login", json.login)
       
        
          this.setState({userCard: json })
          console.log("this is usercard",this.state.userCard)
         
         
        
      })
      // .catch((err) => console.error("unable to retrieve data"))
  }

  render() {
    return (
      <div className="App">
        <h1>Github user project</h1>

        <AaronCard    userCard={this.state.userCard} />
        
      

      </div>

    )
  }
}

export default App

import React, { Component }from 'react'

class BeerItem extends Component {
    state = {
        count: 0
       
    }
    //Adding 
    incrementMe = () => {
        const { count } = this.state;
        this.setState({
          count: count + 1
        });
      }
    render() {
        return (
          <body style={{ backgroundColor: '#3ec18f' }}>
            <div style={{ border: '2px solid black', padding: '50px' }}> 
              <p>{this.props.info.name}</p>
              <p style={{ fontStyle: 'italic', color: '#4b4944'}}>{this.props.info.brewers_tips}</p>
              <button style={{ backgroundColor: '#a7ada8', boxShadow: '7px 7px 7px black'}} onClick={ this.incrementMe }> Likes: {this.state.count} </button>
            </div>
          </body>
     )
    }
}

    export default BeerItem



    //*** Saving this code for future references ***//

     //liked: false

      //likePost = () => this.setState({ liked: !this.state.liked})

  // const message = this.state.liked ? 'you liked this post' : 'this post has no likes'
        // const color = this.state.liked ? 'green': '#fa0507'       
        

       /* <button style={{ backgroundColor: '#a7ada8', boxShadow: '7px 7px 7px black'}} onClick={this.likePost}>Like</button> */
            /* <p style= {{ color : color }}>{message}</p> */
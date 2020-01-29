import React, { Component } from 'react'
import BeerItem from './BeerItem'

class BeerList extends Component {
    state = {
        beers: []
    }

fetchBeers = () => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(data => {
        this.setState({beers: data})
    })
}

 render() {
    
    return (
    
        <div style={{ backgroundColor: '#010101'}}>
            <button style={{ backgroundColor: '#f2ea0d', boxShadow: '5px 5px 5px white', opacity: '1px', fontWeight: 'bold', marginTop: '20px', marginBottom: '15px', padding: '10px' }} onClick={this.fetchBeers}>List Beers</button>
            {
                this.state.beers.map(beer => {
                return <BeerItem key={beer.id} info ={beer} />
                })
            }
        </div>
       
    )
 }
}
export default BeerList
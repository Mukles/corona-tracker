import React,{ Component } from 'react';
import NavbarMoible from  './Componetns/NavbarMoible';
import Card from './Componetns/Card';
import MobileNav from './Componetns/MobileNav';
import GrapChart from './Componetns/GrapChart';
import Tilte from './Componetns/Tilte';
import TableCountry from './Componetns/TableCountry';
import { Provider } from './Componetns/context';
import { fetchData } from './Componetns/Data/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class  App extends Component {
  state ={
    data: {},
    country: '',
    isOpen: false,
  }

  chageCountryName = async (country) =>{
    const data = await fetchData(country);
      this.setState({country: country, data: data});
  }

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }
  render(){
    const { data } = this.state;

    return(
      <React.Fragment>
        <Provider value={{onchage: this.chageCountryName, handleClick: this.handleClick, ...this.state}}>
          <div className="App">
            <NavbarMoible />
            {this.state.isOpen ? <MobileNav /> : null}
            <Tilte />
            <Card data={data} onchage ={this.chageCountryName}/>
            <GrapChart />
            <TableCountry />
          </div>
        </Provider>
      </React.Fragment>
    )
  }
}

export default App;

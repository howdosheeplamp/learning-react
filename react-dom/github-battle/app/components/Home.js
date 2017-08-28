var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render(){
    return(
      <div className='home-container'>
        <h1>Battle Your Friends</h1>
        <Link className='button' to='/battle'>
          Battle
        </Link>
      </div>
    )
  }
}

//module.expots = Home;
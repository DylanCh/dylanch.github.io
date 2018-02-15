import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

function VevoIframe(props){
    if(props.show){
      return (<div>
      <iframe width="640" height="360" 
        src="https://embed.vevo.com?isrc=GB1108700010&autoplay=true" 
        allowfullscreen=""></iframe>
       </div>);
    }
    else return (<div></div>);
  }
  
  class Root extends React.Component{
      constructor(props) {
        super(props);
        this.state = { valentineName: '', displayIFrame : false };
        this.handleClick = this.handleClick.bind(this);
      }
      
      handleClick = (e)=>{
          this.setState({
            displayIFrame : true
          });
      }
  
      render() {
          return (
              <div className="row">
              <button id="root_btn"  className='btn btn-primary' onClick={this.handleClick} 
                style={{display: (this.state.displayIFrame) ? 'none':'block'}}>
                Generate Random Love Song
              </button >
              <VevoIframe show={this.state.displayIFrame}/>
            </div>
          );
      }
  }
  
  ReactDOM.render(<Root/>, document.getElementById('root'));

import React,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class  MapUse extends Component{
  render(){
    return(
<Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
   
 </InfoWindow>
</Map>
    );
  }

}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAiICi1mT02PdwFP6QCkmL7aOidnZ6x3So")
})(MapUse)
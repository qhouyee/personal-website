import { React } from 'react';
import { NavLink } from "react-router-dom";
import Route from './Route';

export interface IWebgisProps { }

const Webgis: React.FC<IWebgisProps> = (props: IWebgisProps) => {

  return (
    <Route>
      <NavLink to="/" end>
        <div className="close-button"></div>
      </NavLink>
      <div id='center-page-container'>
        <h2>Cycling culture in Xiamen</h2>
        <p>
          <b>Description:</b> <br />The goal of this school project is to collect and process datasets for visualization on a web GIS platform. Our team has chosen to use a dataset from Xiamen, which includes information about public transport and cycling infrastructure, as well as cycling journeys. We specifically use the ArcGIS API to develop map views with interactive elements and embed them in a HTML and CSS website.
          <br /><br />Please see the video below for our demo:
        </p>
        <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/6LlBX-7IFb0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </Route>
  );
};

export default Webgis;
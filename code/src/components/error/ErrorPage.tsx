import React from 'react';
import { useRouteError, NavLink } from "react-router-dom";
import FigureComponent from '../figure/FigureComponent';
import NotFoundImage from '../../assets/png/404.png';
import { ReactComponent as HomeLinkIcon } from '../../assets/svg/homenav.svg';


export interface IErrorPageProps { }

const ErrorPage: React.FC<IErrorPageProps> = (props: IErrorPageProps) => {
  const error = useRouteError();
  if (error.status === 404) {

    return (
      <div id="error-page">
        <FigureComponent url={NotFoundImage} alt={'404 illustration'} cssClass="error-fig" />
        <p>
          <span>Oops, it seems like you wandered too far to a non-existent page...</span>
          <br /><br />Oh me? I come here to ponder at times. Feel free to join me or go back
        </p>
        <div style={{ height: '2.4vw' }}>
          <NavLink to="/" end>
            <HomeLinkIcon className="home" />
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}


export default ErrorPage;
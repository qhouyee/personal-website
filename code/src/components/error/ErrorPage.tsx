import React from 'react';
import { useRouteError, NavLink } from "react-router-dom";
import FigureComponent from '../figure/FigureComponent';
import { ReactComponent as HomeLinkIcon } from '../../svg/homenav.svg';

export interface IErrorPageProps { }

const ErrorPage: React.FC<IErrorPageProps> = (props: IErrorPageProps) => {
  const error: unknown = useRouteError();
  let NotFoundImage: string = '../../assets/png/404.png';
  if ((error as { status?: number })?.status === 404) {

    return (
      <div id="center-page-container">
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
        <i>{(error as { statusText?: string })?.statusText || (error as Error)?.message}</i>
      </p>
    </div>
  );
}


export default ErrorPage;
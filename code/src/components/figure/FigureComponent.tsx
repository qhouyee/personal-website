import React from 'react';

export interface IFigureComponentProps {
  url: string | undefined;
  alt: string;
  cssClass?: string;
}

const FigureComponent: React.FC<IFigureComponentProps> = ({ url, alt, cssClass }: IFigureComponentProps) => {
  return (
    <img src={url} alt={alt} className = {cssClass} />
  );
};

export default FigureComponent;
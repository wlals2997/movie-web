import React from 'react';
import * as Detail from './Detail.style';

export const Detail = ({children}) => {
  return <Detail.DetailContainer>{children}</Detail.DetailContainer>;
};
export const DetailImg = ({children}) => {
  return <Detail.DetailImg>{children}</Detail.DetailImg>;
};
export const DetailDes = ({children}) => {
  return <Detail.DetailDe>{children}</Detail.DetailDe>;
};
export const DetailInfoCon = ({children}) => {
  return <Detail.DetailInfoCon>{children}</Detail.DetailInfoCon>;
};
export const  DetailTitle = ({children}) => {
  return <Detail.DetailTitle>{children}</Detail.DetailTitle>;
};
export const  DetailInfo = ({children}) => {
  return <Detail.DetailInfo>{children}</Detail.DetailInfo>;
};
export const  BookContainer = ({children}) => {
  return <Detail.BookContainer>{children}</Detail.BookContainer>;
};
export const  BookInfo = ({children}) => {
  return <Detail.BookInfo>{children}</Detail.BookInfo>;
};
export const  MovieBookCon = ({children}) => {
  return <Detail.MovieBookCon>{children}</Detail.MovieBookCon>;
};
 


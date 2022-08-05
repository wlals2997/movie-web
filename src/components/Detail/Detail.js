import React from 'react';
import * as DetailCon from './Detail.style';

export const DetailContainer = ({children}) => {
  return <DetailCon.DetailContainer>{children}</DetailCon.DetailContainer>;
};
export const DetailImg = ({children}) => {
  return <DetailCon.DetailImg>{children}</DetailCon.DetailImg>;
};
export const DetailDes = ({children}) => {
  return <DetailCon.DetailDes>{children}</DetailCon.DetailDes>;
};
export const DetailInfoCon = ({children}) => {
  return <DetailCon.DetailInfoCon>{children}</DetailCon.DetailInfoCon>;
};
export const  DetailTitle = ({children}) => {
  return <DetailCon.DetailTitle>{children}</DetailCon.DetailTitle>;
};
export const  DetailInfo = ({children}) => {
  return <DetailCon.DetailInfo>{children}</DetailCon.DetailInfo>;
};
export const  BookContainer = ({children}) => {
  return <DetailCon.BookContainer>{children}</DetailCon.BookContainer>;
};
export const  BookInfo = ({children}) => {
  return <DetailCon.BookInfo>{children}</DetailCon.BookInfo>;
};
export const  MovieBookCon = ({children}) => {
  return <DetailCon.MovieBookCon>{children}</DetailCon.MovieBookCon>;
};
export const  BookLogin = ({children}) => {
  return <DetailCon.BookLogin>{children}</DetailCon.BookLogin>;
};
 


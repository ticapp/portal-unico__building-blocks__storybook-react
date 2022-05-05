import React from 'react';
import { Loader } from './loader';

export const DefaultLoader = () => {
  return <Loader></Loader>;
};

export const SpinnerTwoHalfLoader = () => {
  return <Loader type='spinner-two-half'></Loader>;
};

export const SpinnerHalfLoader = () => {
  return <Loader type='spinner-half'></Loader>;
};

export const DotsLoader = () => {
  return <Loader type='dots'></Loader>;
};

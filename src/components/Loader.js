import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <div className="w-full flex justify-center items-center">
    <InfinitySpin color="grey" />
  </div>
);

export default Loader;


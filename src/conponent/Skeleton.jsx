import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => {
  return (
    <ContentLoader 
    speed={2}
    
    width={1000}
    height={500}
    viewBox="0 0 1000 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="168" y="375" rx="0" ry="0" width="9" height="2" /> 
    <rect x="14" y="30" rx="0" ry="0" width="590" height="121" /> 
    <rect x="14" y="168" rx="0" ry="0" width="590" height="121" /> 
    <rect x="12" y="308" rx="0" ry="0" width="590" height="121" />
  </ContentLoader>
  );
};

export default Skeleton;

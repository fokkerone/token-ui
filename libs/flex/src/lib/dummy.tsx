import React from 'react';

const Dummy = (props: any) => {
  return (
    <div style={{ width: '100%', height: '30px', backgroundColor: '#0ff' }}>
      {props.children}
    </div>
  );
};

export default Dummy;

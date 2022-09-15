import React from 'react';


import {useTextField} from '@react-aria/textfield'

function UseTextField(props) {
   let {label} = props;
  let ref = React.useRef();
  let {labelProps, inputProps} = useTextField(props, ref);
    return (
     <div>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
    </div>
    );
};



export default UseTextField;

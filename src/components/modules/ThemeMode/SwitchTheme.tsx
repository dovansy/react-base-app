import React from 'react';

interface ISwitchTheme {
  onChange: () => void;
}
export default function SwitchTheme(props: ISwitchTheme) {
  return (
    <div>
      <input type="checkbox" className="checkbox" id="chk" {...props} />
      <label className="label" htmlFor="chk">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </div>
  );
}

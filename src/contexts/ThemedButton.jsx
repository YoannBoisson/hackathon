import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton({ children }) {
  const { theme } = useContext(ThemeContext);
  return <button style={theme}>{children}</button>;
}

export default ThemedButton;

import { Switch } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/hooks/useRedux';
import { setTheme } from '~/store/reducers/theme';
import SwitchTheme from './SwitchTheme';

export default function ToggleThemeMode() {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.theme);

  const handleToggleTheme = () => {
    if (mode === 'dark') {
      document.getElementsByTagName('HTML')[0].setAttribute('data-theme', 'light');
      dispatch(setTheme('light'));
    } else {
      document.getElementsByTagName('HTML')[0].setAttribute('data-theme', 'dark');
      dispatch(setTheme('dark'));
    }
  };

  useEffect(() => {
    document.getElementsByTagName('HTML')[0].setAttribute('data-theme', mode);
  }, []);

  return <SwitchTheme onChange={handleToggleTheme} />;

  // <h1 onClick={handleToggleTheme}>{mode}</h1>;
}

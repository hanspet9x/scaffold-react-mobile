import {useEffect} from 'react';
import {useState} from 'react';
import {fonts} from '../assets/assets';
import * as Splash from 'expo-splash-screen';
import {loadObjFonts} from '../utils/utils';
import {LogService} from '../services/log/LogService';

export const useOnAppRender = (loads?: Promise<any>[]) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        await Splash.preventAutoHideAsync();
        await loadObjFonts(fonts);
        loads && await Promise.all(loads);
        await Splash.hideAsync();
      } catch (error) {
        LogService.error(error);
      } finally {
        setLoaded(true);
      }
    })();
  });
  return loaded;
};

import React, {createContext, useReducer, useEffect, useRef} from 'react';
import Storage from './StorageProvider';

type Action = {
  type: string;
  payload: Record<string, any>;
};

type State = {
  isConnected: boolean;
  isLogin: boolean;
};

const initState: State = {
  isConnected: false,
  isLogin: false,
};

export const AppContext: any = createContext({
  state: initState,
  dispatch: () => {},
});

function appReducer(state = initState, action: Action) {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const Provider: React.FC = ({children}) => {
  const isMounted = useRef(false);
  const [state, dispatch] = useReducer(appReducer, initState);

  useEffect(() => {
    if (isMounted.current) {
      const storageData = JSON.stringify(state);
      Storage.set('data', storageData);
    }
    isMounted.current = true;
  }, [state?.isConnected, state?.isLogin]);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;

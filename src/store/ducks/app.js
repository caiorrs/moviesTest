export const Types = {
  FETCH_CONFIGURATION: 'APP/FETCH_CONFIGURATION',
  SET_CONFIGURATION: 'APP/SET_CONFIGURATION',
  FAILED_CONFIGURATION: 'APP/FAILED_CONFIGURATION',
};

const initialState = {
  configuration: null,
  loading: false,
  error: null,
};

export const setConfiguration = (configuration) => ({
  type: Types.SET_CONFIGURATION,
  configuration,
});

export const fetchConfiguration = () => ({
  type: Types.FETCH_CONFIGURATION,
});

export const failedConfiguration = (error) => ({
  type: Types.FAILED_CONFIGURATION,
});

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_CONFIGURATION:
      return {
        ...state, configuration: action.configuration, loading: false, error: null,
      };
    case Types.FETCH_CONFIGURATION:
      return { ...state, loading: true, error: null };
    case Types.FAILED_CONFIGURATION:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default AppReducer;

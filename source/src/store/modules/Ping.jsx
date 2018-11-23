const PING = 'PING';

const initialState = {
  ping: 'ping',
};

export const Ping = (state = initialState, action) => {
  switch (action.type) {
    case PING:
      return {
        ping: 'pong',
      };
    default:
      return state;
  }
};

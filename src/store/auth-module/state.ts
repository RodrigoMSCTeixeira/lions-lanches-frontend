export interface AuthUserState {
  status: boolean;
  user: object | null;
}

const state = (): AuthUserState => {
  return {
    status: false,
    user: null,
  };
};

export default state;

export interface ListCompositeOrdersState {
  status: boolean;
  items: object | null;
}

const state = (): ListCompositeOrdersState => {
  return {
    status: false,
    items: null,
  };
};

export default state;

export interface itemsState {
  items: object[];
}

const inititalState = {
  items: [
    {
      id: "1",
      title: "The Starry Night Replica",
      description:
        "An oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh",
      price: "949.99",
      section: "Art",
      qty: 0,
    },
  ],
};

export const itemReducer = (state: itemsState = inititalState) => {
  return state;
};

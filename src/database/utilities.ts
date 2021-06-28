export const withDefaults = (items) =>
  items.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

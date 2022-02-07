type GridSize = {
  container: {
    columns: number;
  };
  item: {
    lg: number;
    md: number;
    sm: number;
    xs: number;
  };
};

const xs: GridSize = {
  container: {
    columns: 20,
  },
  item: {
    lg: 4,
    md: 5,
    sm: 10,
    xs: 20,
  },
};

const sm: GridSize = {
  container: {
    columns: 4,
  },
  item: {
    lg: 1,
    md: 1,
    sm: 2,
    xs: 4,
  },
};

const md: GridSize = {
  container: {
    columns: 6,
  },
  item: {
    lg: 2,
    md: 3,
    sm: 6,
    xs: 6,
  },
};

const lg: GridSize = {
  container: {
    columns: 2,
  },
  item: {
    lg: 1,
    md: 2,
    sm: 2,
    xs: 2,
  },
};

const full: GridSize = {
  container: {
    columns: 1,
  },
  item: {
    lg: 1,
    md: 1,
    sm: 1,
    xs: 1,
  },
};

export const grids = Object({
  sizes: {
    full,
    lg,
    md,
    sm,
    xs,
  },
  spacing: {
    md: 3,
    sm: 2,
  },
});

export type Grids = typeof grids;

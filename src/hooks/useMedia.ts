const useMediaQuery = <T>(queries: string[], values: T[], defaultValue: T) => {
  // Array contendo a lista de mediaqueries
  const mediaQuerieList = queries.map((query) => window.matchMedia(query));

  // função que vai retornar o valor baseado na media query
  const getValue = () => {
    const index = mediaQuerieList.findIndex((mql) => mql.matches);
    return values?.[index] || defaultValue;
  };
};

export default useMediaQuery;

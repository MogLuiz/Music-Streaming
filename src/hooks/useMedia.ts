const useMediaQuery = <T>(queries: string[], values: T[], defaultValue: T) => {
    // Array contendo a lista de mediaqueries
    const mediaQuerieList = queries.map(query => window.matchMedia(query))
}
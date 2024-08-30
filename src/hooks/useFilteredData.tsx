// import { useState, useEffect, useCallback } from 'react'

// type FilterFunction<T> = (
//   item: T,
//   filters: string[],
//   searchQuery: string
// ) => boolean
// type SortFunction<T> = (a: T, b: T, sortOption: string | null) => number

// export const useFilteredData = <T>( //+
//   data: Record<number, T>, //+
//   filters: string[], //+
//   sortOption: string | null, //+
//   searchQuery: string, //+
//   filterFn: FilterFunction<T>, //+
//   sortFn: SortFunction<T> //+
// ) => {
//   //
//   const [filteredData, setFilteredData] = useState<T[]>(Object.values(data))

//   const applyFiltersSortAndSearch = useCallback(() => {
//     let filtered = Object.values(data)

//     // Apply filtering based on the provided filter function
//     if (filters.length > 0 || searchQuery) {
//       filtered = filtered.filter(item => filterFn(item, filters, searchQuery))
//     }

//     // Apply sorting based on the provided sort function
//     if (sortOption) {
//       filtered = [...filtered].sort((a, b) => sortFn(a, b, sortOption))
//     }

//     setFilteredData(filtered)
//   }, [filters, sortOption, searchQuery, data, filterFn, sortFn])

//   useEffect(() => {
//     applyFiltersSortAndSearch()
//   }, [applyFiltersSortAndSearch])

//   return filteredData
// }

function mergSortAlogaritham(array1, array2) {
    let combined = []
    let i = 0
    let j = 0
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i])
            i++
        } else {
            combined.push(array2[j])
            j++
        }
    }

    while (i < array1.length) {
        combined.push(array1[i])
        i++
    }
    while (j < array2.length) {
        combined.push(array2[j])
        j++
    }
    return combined;
}
console.log("Giving Multiple Arrays",mergSortAlogaritham([1, 3, 6, 8, 9], [2, 4, 7, 5]))


function mergeSortOneArray(oneArray) {
    if (oneArray.length === 1) return oneArray
    let mid=Math.floor(oneArray.length/2)
    let left=oneArray.slice(0,mid)
    let right=oneArray.slice(mid)

    return mergSortAlogaritham(mergeSortOneArray(left),mergeSortOneArray(right))

}
console.log("Giving Single Array",mergeSortOneArray([1,7,5,3,9,5,8]))

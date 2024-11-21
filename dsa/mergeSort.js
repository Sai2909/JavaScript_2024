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
console.log(mergSortAlogaritham([1, 3, 6, 8, 9], [2, 4, 7, 5]))

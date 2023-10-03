let arr = [4,5,1,3,10]

console.log("Array Inicial: " + arr)
console.log("")

function swap(arraySwap, leftSwap, rightSwap){
    var temp = arraySwap[leftSwap];
    arraySwap[leftSwap] = arraySwap[rightSwap];
    arraySwap[rightSwap] = temp;
    console.log(`Troca: ${arraySwap[leftSwap]} <--> ${arraySwap[rightSwap]}`)
}

function quickSortStart(array){
    quickSort(array, 0, array.length-1, "Partição inicial")
}

function quickSort(array, start_pos, end_pos, mensagem){
    let pivot = array[start_pos]
    let left = start_pos
    let right = end_pos
    
    console.log(mensagem)
    console.log("Pivot: " + pivot)
    console.log("Start Position: " + start_pos)
    console.log("End Position: " + end_pos)

    while(left <= right){
        while (array[left] < pivot) left++;
        while (array[right] > pivot) right--;

        if(left <= right){
            swap(array, left, right)
            left++
            right--
        }
    }

    console.log("Left: " + left)
    console.log("Right: " + right)
    console.log("Array: " + array)
    console.log("")

    if(start_pos < right) quickSort(array, start_pos, right, "Partição da esquerda")
    if(left < end_pos) quickSort(array, left, end_pos, "Partição da direita")
}

quickSortStart(arr)
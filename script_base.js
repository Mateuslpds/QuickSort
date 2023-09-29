let arr = [3,8,7,10,0,23,2,1,77,7]

function swap(arraySwap, leftSwap, rightSwap){
    var temp = arraySwap[leftSwap];
    arraySwap[leftSwap] = arraySwap[rightSwap];
    arraySwap[rightSwap] = temp;
    console.log(`Troca: ${arraySwap[leftSwap]} <--> ${arraySwap[rightSwap]}`)
}

function quickSortStart(array){
    quickSort(array, 0, array.length-1)
}

function quickSort(array, start_pos, end_pos){
    let pivot = array[start_pos]
    let left = start_pos
    let right = end_pos
    
    while(left <= right){
        while (array[left] < pivot) left++;
        while (array[right] > pivot) right--;

        if(left <= right){
            swap(array, left, right)
            left++
            right--
        }
    }

    if(start_pos < right) quickSort(array, start_pos, right)
    if(left < end_pos) quickSort(array, left, end_pos)
}

quickSortStart(arr)
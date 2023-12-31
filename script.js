let arr = [];
let container = document.getElementById('array-container');
let leftPointer;
let rightPointer;

function createArrayElements(arr, left, right, pivot) {
    container.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        let element = document.createElement('div');
        element.className = 'array-element';
        element.textContent = arr[i];

        if (i === left || i === right) {
            element.classList.add('highlight');
        }

        if (i === pivot) {
            element.classList.add('pivot');
        }

        container.appendChild(element);
    }
}

function inputHandle(){
    const arrayInput = document.getElementById('arrayInput').value;
    const arrayInputParsed = arrayInput.split(',').map(Number);
    arr = arrayInputParsed
    quickSortStart(arr)
}

function swap(arraySwap, leftSwap, rightSwap) {
    var temp = arraySwap[leftSwap];
    arraySwap[leftSwap] = arraySwap[rightSwap];
    arraySwap[rightSwap] = temp;
}

function quickSortStart(array) {
    createArrayElements(array, -1, -1, -1);
    quickSort(array, 0, array.length - 1);
}

async function quickSort(array, start_pos, end_pos) {
    let pivot = array[start_pos];
    let left = start_pos;
    let right = end_pos;

    while (left <= right) {
        while (array[left] < pivot) {
            createArrayElements(array, left, right, start_pos);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            left++;
        }
        while (array[right] > pivot) {
            createArrayElements(array, left, right, start_pos);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            right--;
        }

        if (left <= right) {
            swap(array, left, right);
            createArrayElements(array, left, right, start_pos);

            await new Promise((resolve) => setTimeout(resolve, 3000));

            left++;
            right--;
        }
    }

    if (start_pos < right) await quickSort(array, start_pos, right);
    if (left < end_pos) await quickSort(array, left, end_pos);
}
function reverseArray(n, array) {
    let newArray = array.slice(0, n);
    let reversedArray = newArray.reverse();
    return reversedArray.join(" ");
}
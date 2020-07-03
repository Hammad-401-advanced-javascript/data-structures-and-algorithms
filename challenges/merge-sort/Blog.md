# Merge Sort

## Challenge

**Merge sort is an example of a divide-and-conquer type sorting-algorithm. The input for merge sort is an array of integers of length n, which needs to be sorted, typically from least to greatest.**

### phase one
**we wanna check If the array is 1 element long, return the given array because it’s already sorted.**

 DECLARE n <-- arr.length

### phase two
**Lets say that we have an array = [8,4,23,42,16,15], Our mergeSort function is responsible for finding the midpoint of an array, slicing our array into two halves at the midpoint, and recursively calling itself on each half :**

 if n > 1
      DECLARE mid <-- n/2

### phase three
**This recursive call is done until the entire original collection has been split at the midpoints and return arrays each with a length of one.**

DECLARE left <-- arr[0...mid]
DECLARE right <-- arr[mid...n]
  Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)


### phase four
**Here is where the heavy lifting of our Merge Sort algorithm takes place. The merge function pushes the smallest item of our two halves into a single output array in a while loop until one of our halves is empty**

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1



### phase five
**the rest of the remaining half them being added to our output array.**

  if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left




#### Big O :
* Time : O(nlogn)



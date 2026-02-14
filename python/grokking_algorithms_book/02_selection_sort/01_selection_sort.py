# Finds the smallest value in an array
def findSmallest(arr):
    # Stares the smallest value
    smallest = arr[0]
    # Stares the index of the smallest value
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest_index  = i
            smallest = arr[i]
    return smallest_index

# Sort array
def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        # Finds the smallest element in the array and adds it to the new array
        smallest = findSmallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr

def gen_arr(n):
    arr= []
    for i in range(0, 2000):
        arr.append(i)
    return arr

ressult_arr = gen_arr(200)

print(selectionSort(ressult_arr))

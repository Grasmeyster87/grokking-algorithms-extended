def find_max(arr):
    if len(arr) == 0:
        return 0
    elif len(arr) == 1:
        return arr[0]
    elif len (arr) == 2:
        return arr[0] if arr[0] > arr[1] else arr [1]
    sub_max = find_max(arr[1:])
    return arr[0] if arr[0] > sub_max else sub_max

arr1 = [1, 2, 3, 4, 5, 12]
print(find_max(arr1))
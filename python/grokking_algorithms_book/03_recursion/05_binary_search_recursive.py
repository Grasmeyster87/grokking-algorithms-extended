def binary_search(arr, target):
    if len(arr) == 0:
        return None
    
    mid = len(arr) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        return binary_search(arr[:mid], target)
    else:
        recursive_response = binary_search(arr[(mid + 1) :], target)
        return (
            (mid + 1) + recursive_response
            if recursive_response is not None
            else recursive_response
        )
    
"""
# Оптимальна версія через індекси

def binary_search(arr, target, left=0, right=None):
    if right is None:
        right = len(arr) - 1

    if left > right:
        return None

    mid = (left + right) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        return binary_search(arr, target, left, mid - 1)
    else:
        return binary_search(arr, target, mid + 1, right)

"""
    
print(binary_search([6, 7, 8, 9, 10], 8))
print(binary_search([6, 7, 8, 9, 10], 6))
package main

func Similarity(listA, listB []int) int {
	list_b_count := map[int]int{}

	for _, num := range listB {
		current := list_b_count[num] | 0
		list_b_count[num] = current + 1
	}

	result := 0
	for _, num := range listA {
		result = result + (num*list_b_count[num] | 0)
	}

	return result
}

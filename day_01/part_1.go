package main

import (
	"sort"
)

func Abs(num int) int {
	if num > 0 {
		return num
	}
	return -num
}

func DistanceGet(inputA, inputB []int) int {
	distance := 0

	sort.Slice(inputA, func(i, j int) bool {
		return inputA[i] < inputA[j]
	})

	sort.Slice(inputB, func(i, j int) bool {
		return inputB[i] < inputB[j]
	})

	for index, _ := range inputA {
		num_a := inputA[index]
		num_b := inputB[index]
		distance = distance + Abs(num_a-num_b)
	}

	return distance
}

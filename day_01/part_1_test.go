package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
	"testing"
)

func TestDistanceGetExample(t *testing.T) {
	fmt.Print("=== Test Start: Distance Get Example ===\n")
	inputA := []int{3, 4, 2, 1, 3, 3}
	inputB := []int{4, 3, 5, 3, 9, 3}
	expected := 11

	subject := DistanceGet(inputA, inputB)

	fmt.Printf("Subject: %d; Expected: %d\n", subject, expected)
	fmt.Print("=== Test End ===\n\n")
}

func TestDistanceGetOfficial(t *testing.T) {
	fmt.Print("=== Test Start: Distance Get Official ===\n")
	file, err := os.Open("part_1_official_input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	sc := bufio.NewScanner(file)

	inputA := []int{}
	inputB := []int{}

	for sc.Scan() {
		nums := strings.Split(sc.Text(), "   ")

		num_a, num_a_err := strconv.Atoi(nums[0])
		num_b, num_b_err := strconv.Atoi(nums[1])

		if num_a_err != nil {
			panic(num_a_err)
		}
		if num_b_err != nil {
			panic(num_b_err)
		}

		inputA = append(inputA, num_a)
		inputB = append(inputB, num_b)
	}

	if err := sc.Err(); err != nil {
		log.Fatal(err)
	}

	subject := DistanceGet(inputA, inputB)

	fmt.Printf("Subject: %d\n", subject)
	fmt.Print("=== Test Finished ===\n\n")
}

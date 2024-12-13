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

func TestSimilarityExample(t *testing.T) {
	fmt.Print("=== Test Start: Similarity Example ===\n")
	inputA := []int{3, 4, 2, 1, 3, 3}
	inputB := []int{4, 3, 5, 3, 9, 3}
	expected := 31

	subject := Similarity(inputA, inputB)

	fmt.Printf("Subject: %d, Expected: %d\n", subject, expected)
	fmt.Print("=== Test Finished ===\n\n")
}

func TestSimilarityOfficial(t *testing.T) {
	fmt.Print("=== Test Start: Similarity Official ===\n")
	file, err := os.Open("input_part_1.txt")
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

	fmt.Printf("Result: %d\n", Similarity(inputA, inputB))
	fmt.Print("=== Test End ===\n\n")
}

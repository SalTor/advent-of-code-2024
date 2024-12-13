package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	RunExample()
}

func RunExample() {
	fmt.Print("Begin: Example\n")

	file, err := os.Open("part_1_example_input.txt")
	if err != nil {
		log.Fatal(err)
	}

	input, err := ParseInputFile(file)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Print("Input: ", input, "\n")

	for _, report := range input {
		fmt.Print("Report: ", report, "  ->  IsReportSafe: ", IsReportSafe(report), "\n")
	}
}

func IsReportSafe(report []int) bool {
	num_1 := report[0]
	num_n := report[len(report)-1]
	suggests_descending := num_1 > num_n
	suggests_ascending := num_1 < num_n

	if num_1 == num_n {
		return false
	}

	for index := 0; index < len(report)-1; index++ {
		num := report[index]
		next_num := report[index+1]
		if num == next_num || diff(num, next_num) > 3 {
			return false
		}
		if suggests_ascending && num > next_num {
			return false
		}
		if suggests_descending && num < next_num {
			return false
		}
	}

	return true
}

func ParseInputFile(file *os.File) ([][]int, error) {
	input := [][]int{}

	sc := bufio.NewScanner(file)

	for sc.Scan() {
		line := sc.Text()
		num_strings := strings.Split(line, " ")
		nums := []int{}
		for _, num_string := range num_strings {
			num, err := strconv.Atoi(num_string)
			if err != nil {
				return nil, err
			}
			nums = append(nums, num)
		}
		input = append(input, nums)
	}

	return input, nil
}

func diff(a, b int) int {
	diff := a - b
	if diff > 0 {
		return diff
	}
	return -diff
}

package main

import (
  "fmt"
  "testing"
)

func main() {
  fmt.Println("Hello, World!")
}

func DistanceGet(inputA, inputB []int) int {
  distance := 0

  for i := 0; i < len(inputA); i++ {
    distance = distance + (inputA[i] - inputB[i])
  }

  return distance
}

func TestDistanceGet(t *testing.T) {
  inputA := []int{3, 4, 2, 1, 3, 3}
  inputB := []int{4, 3, 5, 3, 9, 3}
  subject := DistanceGet(inputA, inputB)
  if subject != 11 {
    t.Errorf("Invalid answer %d", subject)
  } else {
    fmt.Println("Success")
  }
}

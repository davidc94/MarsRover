# Mars Rover

## Initial thoughts

  If movement is L:

  Get the current facing direction and map it to an array [NESW] and iterate through the array by -1

  If movement is R:

  Get the current facing direction and map it to an array [NESW] and iterate through the array by +1

  If movement is M:

  Get the curent facing direction and if it is E or W then +1 or -1 to X respectively

  Get the curent facing direction and if it is N or W then +1 or -1 to Y respectively

  Once the new coords are created, they need to be checked to ensure they do not breach the bounds of the plateau.

  Also need a way to determine which way the rover is facing.

## Improvements
### Tests
  If I had more time I would implement a set of unit tests that check for some scenarios.

  * When given a specific input it produces the appropriate output
  * When given an incorrect input (out of bounds) it returns the invalid input message
  
  When testing the functions independently I would test that the appropriate values are returned when given a specific input.

### Additional functionality
I would also add some input checks (of type) to the start of the program to ensure that the input is valid.

## Things I would do different
To make better use of my time I think I should have broken down the problem first, rather than just jumping into it and trying to solve it. 
Once I had written down the [above](#Initial-thoughts), I was able to navigate the problem much more easily.
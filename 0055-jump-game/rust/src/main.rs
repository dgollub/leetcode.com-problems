fn main() {
    println!("Use 'cargo test' instead.");
}

#[allow(dead_code)]
fn algorithm(input: &Vec<usize>) -> bool {
    debug_assert!(!input.is_empty(), "input array is empty");
    debug_assert!(input.len() <= 104, "input array has more than 104 elements");
    debug_assert!(
        input.iter().all(|&x| x <= 105),
        "elements in input array must be between 0 and 105"
    );

    fn jump(curr_index: usize, target_index: usize, input: &Vec<usize>) -> bool {
        if curr_index >= target_index {
            return curr_index == target_index;
        }

        let max_jumps = input[curr_index];

        for jump_dist in (0..=max_jumps).rev() {
            if jump_dist + curr_index == target_index {
                return true;
            }
            if jump_dist > 0 && jump(curr_index + jump_dist, target_index, input) {
                return true;
            }
        }

        false
    }

    let target_index = input.len() - 1;

    jump(0, target_index, input)
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    #[should_panic(expected = "input array is empty")]
    fn test_example_empty() {
        let input = vec![];
        let _ = algorithm(&input);
    }

    #[test]
    #[should_panic(expected = "input array has more than 104 elements")]
    fn test_example_too_many() {
        let input = vec![1; 105];
        let _ = algorithm(&input);
    }

    #[test]
    fn test_example_element_value_0() {
        let input = vec![0];
        let _ = algorithm(&input);
    }

    #[test]
    #[should_panic(expected = "elements in input array must be between 0 and 105")]
    fn test_example_element_value_105() {
        let input = vec![106];
        let _ = algorithm(&input);
    }

    #[test]
    fn test_example_1() {
        let input = vec![2, 3, 1, 1, 4];
        let result = algorithm(&input);
        // Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
        assert_eq!(result, true);
    }

    #[test]
    fn test_example_2() {
        let input = vec![3, 2, 1, 0, 4];
        let result = algorithm(&input);
        // Explanation: You will always arrive at index 3 no matter what.
        // Its maximum jump length is 0, which makes it impossible to reach the last index.
        assert_eq!(result, false);
    }

    // TODO(dkg): not sure if 1 element actually makes sense
    #[test]
    fn test_example_3() {
        let input = vec![3];
        let result = algorithm(&input);
        assert_eq!(result, true);
    }
}

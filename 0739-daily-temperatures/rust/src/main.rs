fn main() {
    println!("Use 'cargo test' instead.");
}

#[allow(dead_code)]
fn algorithm(input: &Vec<usize>) -> Vec<usize> {
    debug_assert!(!input.is_empty(), "input array is empty");
    debug_assert!(
        input.len() <= 10usize.pow(5),
        "input array has more than 10^5 elements"
    );
    debug_assert!(
        input.iter().all(|&x| x >= 30 && x <= 100),
        "elements in input array must be between 30 and 100"
    );

    let last_index = input.len() - 1;
    input
        .iter()
        .enumerate()
        .map(|(index, temp)| {
            if index >= last_index {
                0
            } else {
                'outer: loop {
                    for day_index in index..=last_index {
                        let other_temp = input[day_index];
                        if other_temp > *temp {
                            break 'outer day_index - index;
                        }
                    }

                    break 0;
                }
            }
        })
        .collect()
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
    #[should_panic(expected = "input array has more than 10^5 elements")]
    fn test_example_too_many() {
        let input = vec![30; 10usize.pow(5) + 1];
        let _ = algorithm(&input);
    }

    #[test]
    #[should_panic(expected = "elements in input array must be between 30 and 100")]
    fn test_example_element_value_0() {
        let input = vec![0];
        let _ = algorithm(&input);
    }

    #[test]
    #[should_panic(expected = "elements in input array must be between 30 and 100")]
    fn test_example_element_value_105() {
        let input = vec![101];
        let _ = algorithm(&input);
    }

    #[test]
    fn test_example_1() {
        let input = vec![73, 74, 75, 71, 69, 72, 76, 73];
        let result = algorithm(&input);
        let expected = vec![1, 1, 4, 2, 1, 1, 0, 0];

        assert_eq!(result, expected);
    }

    #[test]
    fn test_example_2() {
        let input = vec![30, 40, 50, 60];
        let result = algorithm(&input);
        let expected = vec![1, 1, 1, 0];

        assert_eq!(result, expected);
    }

    #[test]
    fn test_example_3() {
        let input = vec![30, 60, 90];
        let result = algorithm(&input);
        let expected = vec![1, 1, 0];

        assert_eq!(result, expected);
    }
}

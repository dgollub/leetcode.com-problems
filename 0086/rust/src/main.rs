#![allow(dead_code)]

fn main() {
    println!("Run 'cargo test' instead");
}

fn algorithm(linked_list_input: &Vec<usize>, partition_value: usize) -> Vec<usize> {
    todo!();
}


#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_example_empty() {
        let input = vec![];
        let partition_value = 1;
        let result = algorithm(&input, partition_value);

        assert_eq!(result, vec![]);
    }

    #[test]
    fn test_example_one() {
        let input = vec![42];
        let partition_value = 1;
        let result = algorithm(&input, partition_value);
        assert_eq!(result, vec![42]);
    }

    #[test]
    fn test_example_two() {
        let input = vec![3];
        let partition_value = 5;
        let result = algorithm(&input, partition_value);
        assert_eq!(result, vec![3]);
    }

    #[test]
    fn test_example_three() {
        let input = vec![1,4,3,2,5,2];
        let partition_value = 3;
        let result = algorithm(&input, partition_value);
        assert_eq!(result, vec![1,2,2,4,3,5]);
    }

    #[test]
    fn test_example_four() {
        let input = vec![2,1];
        let partition_value = 2;
        let result = algorithm(&input, partition_value);
        assert_eq!(result, vec![1,2]);
    }
}

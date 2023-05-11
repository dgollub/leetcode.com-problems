public class Solution
{
    public string Solve(string s)
    {
        var input = s.ToLowerInvariant().Replace(" ", "");
        if (String.IsNullOrEmpty(input))
        {
            throw new ArgumentException("input must not be empty or null");
        }
        if (input.Length > 1000)
        {
            throw new ArgumentException("input must not exceed 1000 characters");
        }
        if (input.Length == 1)
        {
            return input;
        }

        bool isPalindrome(string s)
        {
            var chars = s.ToCharArray();
            Array.Reverse(chars);
            var reverse = new String(chars);
            return reverse.Equals(s);
        }

        string solution = "";

        for (var i = 0; i < input.Length; i++)
        {
            for (var j = i; j <= input.Length; j++)
            {
                var length = j - i;
                if (length <= 0)
                {
                    continue;
                }
                var test = input.Substring(i, length);
                if (isPalindrome(test) && test.Length > solution.Length)
                {
                    solution = test;
                }
            }
        }

        return solution;
    }
}

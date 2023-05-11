using System.Diagnostics;

Console.WriteLine("LeetCode.com: Longest Palindromic Substring");
Console.WriteLine("");

void test(string label, string a, string b)
{
    Console.Write($"Test '{label}': ");
    Debug.Assert(a.Equals(b), $"Failed test {label}.");
    Console.WriteLine($"Ok");
}

var solution = new Solution();

var result1 = solution.Solve("babad");
var expected1 = "bab";

test("babad", result1, expected1);

var result2 = solution.Solve("cbbd");
var expected2 = "bb";

test("cbbd", result2, expected2);

var result3 = solution.Solve("a");
var expected3 = "a";

test("a", result3, expected3);

var result4 = solution.Solve("ac");
var expected4 = "a";

test("ac", result4, expected4);

// The Finnish word for “soapstone vendor” is supposedly the longest palindrome in 
// everyday use: saippuakivikauppias.
var result5 = solution.Solve("saippuakivikauppias");
var expected5 = "saippuakivikauppias";

test("saippuakivikauppias", result5, expected5);

var result6 = solution.Solve("A man a plan a canal Panama");
var expected6 = "amanaplanacanalpanama";

test("Panama", result6, expected6);

Console.WriteLine("");
Console.WriteLine("All test succeeded.");
Console.WriteLine("Done");

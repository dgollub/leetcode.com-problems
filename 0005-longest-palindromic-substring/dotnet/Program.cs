using System.Diagnostics;

Console.WriteLine("LeetCode.com: Longest Palindromic Substring");

var solution = new Solution();

var result1 = solution.Solve("babad");
var expected1a = "bab";
var expected1b = "aba";

Debug.Assert(result1 == expected1a || result1 == expected1b);

var result2 = solution.Solve("cbbd");
var expected2 = "bb";

Debug.Assert(result2 == expected2);

var result3 = solution.Solve("a");
var expected3 = "a";

Debug.Assert(result3 == expected3);

var result4 = solution.Solve("ac");
var expected4 = "a";

Debug.Assert(result4 == expected4);

Console.WriteLine("Done");

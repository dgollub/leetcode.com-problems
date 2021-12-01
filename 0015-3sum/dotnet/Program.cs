using System.Diagnostics;

Console.WriteLine("LeetCode.com: 3Sum");

var solution = new Solution();

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
var example1 = solution.ThreeSum(new [] { -1, 0, 1, 2, -1, -4 });
var ex1str = Solution.AsString(example1);
Console.WriteLine("Example 1: [-1, 0, 1, 2, -1, -4]");
Console.WriteLine(ex1str);
Console.WriteLine("");

var example2 = solution.ThreeSum(new int[] {});
var ex2str = Solution.AsString(example2);
Console.WriteLine("Example 2: []");
Console.WriteLine(ex2str);
Console.WriteLine("");

var example3 = solution.ThreeSum(new [] { 0 });
var ex3str = Solution.AsString(example3);
Console.WriteLine("Example 3: [0]");
Console.WriteLine(ex3str);
Console.WriteLine("");

var expected1 = "-1,-1,2\n-1,0,1\n";
var expected2 = "";
var expected3 = "";

Debug.Assert(ex1str == expected1);
Debug.Assert(ex2str == expected2);
Debug.Assert(ex3str == expected3);

Console.WriteLine("Done");

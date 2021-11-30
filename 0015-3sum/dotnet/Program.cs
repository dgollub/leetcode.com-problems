using System.Diagnostics;

Console.WriteLine("LeetCode.com: 3Sum");

var solution = new Solution();
var example1 = solution.ThreeSum(new [] { -1, 0, 1, 2,-1, -4 });
var example2 = solution.ThreeSum(new int[] {});
var example3 = solution.ThreeSum(new [] { 0 });

Console.WriteLine(example1.ToString());
Console.WriteLine(example2.ToString());
Console.WriteLine(example3.ToString());

var expected1 = new List<IList<int>> {
    new [] { -1, -1, 2 },
    new [] { -1, 0, 1 },
};
var expected2 = new List<IList<int>> {};
var expected3 = new List<IList<int>> { new [] { 0 } };

// TODO(dkg): fix these
// Debug.Assert(example1.Count == expected1.Count);
// Debug.Assert(example2 == expected2);
// Debug.Assert(example3 == expected3);

Console.WriteLine("Done");

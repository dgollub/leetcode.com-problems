using System.Text;

public class Solution {
    public IList<IList<int>> ThreeSum(int[] nums) {
        var count = nums.Length;
        if (count > 3000) {
            throw new ArgumentException($"nums must not exceed 3000 entries");
        }

        // NOTE(dkg): This is required to filter out duplicate triplets.
        Array.Sort(nums);

        IList<IList<int>> result = new List<IList<int>>();
        var alreadyFound = new Dictionary<string, bool>();
        for (var i = 0; i < count; i++)
            for (var j = 1; j < count; j++)
                for (var k = 2; k < count; k++) {
                    if (i != j && i != k && j != k && (nums[i] + nums[j] + nums[k] == 0)) {
                        // NOTE(dkg): This is required to filter out duplicate triplets.
                        var tmpList = new [] { nums[i], nums[j], nums[k] };
                        Array.Sort(tmpList);

                        var key = $"{tmpList[0]}, {tmpList[1]}, {tmpList[2]}";
                        if (!alreadyFound.ContainsKey(key)) {
                            alreadyFound.Add(key, true);
                            result.Add(new [] { nums[i], nums[j], nums[k] });
                        }
                    }
                }   

        return result;
    }

    public static string AsString(IList<IList<int>> list) {
        var s = new StringBuilder();
        foreach (var item in list)
        {
            s.AppendLine($"{string.Join(",", item)}");
        }
        return s.ToString();
    }
}
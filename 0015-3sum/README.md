# Problem

[URL](https://leetcode.com/problems/3sum/)

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

_Comment by dkg_
> The requirements do not list that different element order still counts as duplicate triples.
> E.g. these two are counted as one solution, not two:
> [[-1,-1,2],[-1,2,-1]]

## Example 1
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

## Example 2

```
Input: nums = []
Output: []
```

## Example 3

```
Input: nums = [0]
Output: []
```

## Constraints

```
0 <= nums.length <= 3000
-10^5 <= nums[i] <= 10^5
```

# Build instructions

Implementations are available in the following languages/frameworks:

## .NET Core

This is the .NET Core 6.x implementation using the most recent version of C#.

You will need to have [.NET Core 8.x](https://dotnet.microsoft.com/download) (or newer) installed and working.

Run the following command to compile and run the program

```bash
cd dotnet
dotnet run
```

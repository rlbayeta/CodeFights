// TRIPLET SUM

// Note: Write a solution with O(n2) time complexity, since this is what you would be asked to do during a real interview.

// You have an array a composed of exactly n elements. Given a number x, determine whether or not a contains three elements for which the sum is exactly x.

// Example

// For x = 15 and a = [14, 1, 2, 3, 8, 15, 3], the output should be
// tripletSum(x, a) = false;

// For x = 8 and a = [1, 1, 2, 5, 3], the output should be
// tripletSum(x, a) = true.

// The given array contains the elements 1,2, and 5, which add up to 8.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] integer x

// Guaranteed constraints:
// 1 ≤ x ≤ 105.

// [input] array.integer a

// Guaranteed constraints:
// 3 ≤ a.length ≤ 6 · 105,

// 1 ≤ a[i] ≤ 105.

// [output] boolean

// Return true if the array contains three elements that add up to x and false otherwise.

function tripletSum(x, a) {
    
    var hasha = {};
    
    a.forEach(function (num) { hasha[num] = true; });
    
    for(var i = 0 ; i < a.length; i++){
        if(a[i]>x) continue;
        for(var j = 0 ; j < a.length; j++){
            if(i==j) continue;
            
            var diff = x - (a[i]+a[j]); 
            if(hasha[diff] && diff != a[i] && diff != a[j]) return true;
        }
    }
    
    return false;
    
}

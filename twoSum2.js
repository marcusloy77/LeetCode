/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let obj = {}
    
    
    for (let i = 0; i < nums.length; i++){
        
        let complement = target - nums[i]
        
        if(obj[complement] !== undefined){
            return [i, obj[complement]]
        }
        else{
            obj[nums[i]] = i
        }
    }
    

    

    
};

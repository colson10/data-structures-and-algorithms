def move_zeroes(nums)
  for i in 0..nums.length - 1
      if (nums[i] != 0) 
          for j in 0..i
              if (nums[j] == 0)
                  temp = nums[i]
                  nums[i] = nums[j]
                  nums[j] = temp
              end
          end
      end
  end
end
# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
def even_odd_nums (num)
    if num % 2 == 0
         "#{num} is even"
    else
         "#{num} is odd" 
    end
end

p even_odd_nums(num1)
p even_odd_nums(num2)
p even_odd_nums(num3)



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels (album)
  album.delete('aeiouAEIOU')
end

p no_vowels(beatles_album1)
p no_vowels(beatles_album2)
p no_vowels(beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_check(palindrome)
    if palindrome.reverse == palindrome
        "#{palindrome} is  a palindrome"
    else
        "#{palindrome} is not a palindrome"
    end
end

p palindrome_check(palindrome_tester1)
p palindrome_check(palindrome_tester2)
p palindrome_check(palindrome_tester3)

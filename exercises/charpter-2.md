# Chapter 1 Exercises

1. **Exercise 2.1**  
  Answer: Since I will have many insertions, using linked lists is better, as the insertion time is O(1)

2. **Exercise 2.2**  
  Answer: Linked lists are better in this situation since you’ll be working with many insertions and deletions and will rarely need to access elements in the middle

3. **Exercise 2.3**  
  Answer: In this case, an array would be practically the only viable option, as the number of accesses is much higher than the number of insertion and deletion operations

4. **Exercise 2.4**  
  Answer: The problem with adding new items to an array is the need to relocate all items to a new memory space, as the array must be sequential. Inserting an element in the middle of the array, for instance, would require shifting at least the latter half of the elements.

5. **Exercise 2.5**  
  Answer: It depends a lot on the context. For example, if all users start with the letter A, then it will practically function as a linked list; or if each letter has only one name, the structure will work like an array, since the linked lists will only have one item. But to answer the question, I’d say it’s a middle ground between an array and a linked list for insertion and deletion. Access can be faster than with a linked list, and insertion and deletion can be faster than with an array.

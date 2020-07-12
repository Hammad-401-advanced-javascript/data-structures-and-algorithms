# Breadth first

## Challenge 

**Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key') and explores the neighbor nodes first, before moving to the next level neighbors.**

## Approach & Efficiency:

#### Big O :space(n) time(n^2) 


### Problem Domain :

**Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.**

### Algorithm :

* Idicates that a node is not reachable from the start node
* The distance of the root node from the root node is set to 0
* Keep track of nodes we visit
* Keep track of the current node we are traversing 
* loop will keep traversing nodes in the queue until we have no other node to traverse
* Removes the first element in the array
* We get all the nodes connected to the current node
* Gets the index of the first node connected to the current node because the number one in our array shows that the node is connected to another node on that index
* If there is no node at the index of one, the index variable will be set to -1. 
* So while index does not equals to -1, push our index onto our list of neighbors
* line searches for the next connected node.
* Now that we know all the nodes connected to the current node, we loop through this connected nodes, and get the distance
* We push the neighbor to the queue so the next time we go through the while loop, we will check the neighbors of that node too.

### Visual :
 ![gif](https://camo.githubusercontent.com/b8073f26dfdf1644e8a92312fff100341987a8f5/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f352f35642f427265616474682d46697273742d5365617263682d416c676f726974686d2e676966)




'use strict';


import Node from '../node';
import BinaryTree from '../binarytree';
import fizzBuzzTree from '../fizzbuzztree';

describe('Testing the function fizzBuzzTree', () => {
  test('check if a tree returns the correct mutated values', () => {
    const one = new Node(1);
    const seven = new Node(7);
    const nine = new Node(9);
    const fifteen = new Node(15);
    const fortyFive = new Node(45);
    const nine2 = new Node(9);
    const ten = new Node(10);
    const tree = new BinaryTree(one);

    one.left = seven;
    one.right = fortyFive;
    
    seven.left = nine;
    seven.right = fifteen;

    fortyFive.left = nine2;
    fortyFive.right = ten;


    fizzBuzzTree(tree.root);

    expect(one.value).toEqual(1);
    expect(seven.value).toEqual(7);
    expect(nine.value).toEqual('Fizz');
    expect(fifteen.value).toEqual('FizzBuzz');
    expect(fortyFive.value).toEqual('FizzBuzz');
    expect(nine2.value).toEqual('Fizz');
    expect(ten.value).toEqual('Buzz');
  });
});

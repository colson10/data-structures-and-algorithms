'use strict';

export default class KAaryNode {
  constructor(value) {
    this.value = value;
    this.level = null;
    this.children = [];
  }

  appendChild(value) {
    const nodeToAppend = new KAaryNode(value);
    this.children.push(nodeToAppend);
  }
}

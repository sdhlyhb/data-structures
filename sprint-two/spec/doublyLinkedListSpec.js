describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToHead" and "removeTail","addToTail", "removeHead","contains"', function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new head when new nodes are added to head', function() {
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.head.value).to.equal(6);
  });

  it('should designate a new tail when new nodes are added to tail', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    doublyLinkedList.addToTail(6);
    expect(doublyLinkedList.tail.value).to.equal(6);
  });


  it('should remove the tail from the list when removeHead is called', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.head.value).to.equal(6);
    expect(doublyLinkedList.removeHead()).to.equal(6);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.tail.value).to.equal(4);
    expect(doublyLinkedList.removeTail()).to.equal(4);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    doublyLinkedList.addToHead(7);
    doublyLinkedList.addToHead(8);
    doublyLinkedList.addToHead(9);
    expect(doublyLinkedList.removeTail()).to.equal(7);
    expect(doublyLinkedList.removeTail()).to.equal(8);
    expect(doublyLinkedList.removeTail()).to.equal(9);
  });

  it('should check if a value is in a list when contains is called', function() {
    doublyLinkedList.addToHead(7);
    doublyLinkedList.addToHead(8);
    doublyLinkedList.addToHead(9);
    expect(doublyLinkedList.contains(7)).to.equal(true);
    expect(doublyLinkedList.contains(11)).to.equal(false);
  });


});

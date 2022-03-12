describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should add values to a set and capable of handling numbers and strings', function() {
    set.add('this is a string');
    set.add(1);
    set.add('10');
    expect(set.contains('this is a string')).to.equal(true);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains('10')).to.equal(true);
    expect(set.contains(10)).to.equal(false);
  });

  it('should add values to a set and capable of handling objects of any type', function() {
    set.add({'key1': 123, 'key2': true});
    set.add(null);

    expect(set.contains({'key1': 123, 'key2': true})).to.equal(true);
    expect(set.contains('{\'key1\': 123, \'key2\': true}')).to.equal(false);
    expect(set.contains(null)).to.equal(true);
    expect(set.contains('null')).to.equal(false);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

});

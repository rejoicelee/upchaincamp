const W1_2 = artifacts.require("W1_2");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("W1_2", function (/* accounts */) {
  var counterInstance
  it("W1_2", async function () {
    // await W1_2.deployed();
    // return assert.isTrue(true);
    return W1_2.deployed().then(function(instance, count){
      counterInstance = instance;
      return counterInstance.add(count);
    }).then(function(){
      return counterInstance.count();
    }).then(function(count){
      assert.equal(count, 1);
    });
  });
});

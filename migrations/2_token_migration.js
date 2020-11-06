const ERC20 = artifacts.require("ERC20");

module.exports = async function (deployer) {
  
  deployer.deploy(ERC20).then(async function(){
    var instance = await ERC20.deployed();
    await instance.mint("0x7c1Eb5415FFC60Db6a0E8C62E95f2143fb95fEB6", 100)
    var addressBalance = await instance.balanceOf("0x7c1Eb5415FFC60Db6a0E8C62E95f2143fb95fEB6")
    console.log(addressBalance);
  });
 
};


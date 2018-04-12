import web3 from '../js/web3'


      const abi = [{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x60fe47b1"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6d4ce63c"}]
      export const Scaffold = new web3.eth.Contract(abi, '0x95901b052ce5aE17CfE862d96C9F733d1bF3ac0A')
    
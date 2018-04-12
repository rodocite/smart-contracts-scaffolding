const Web3 = require('web3')
const decode = require('abi-decoder')
const compiledContracts = require('../contracts/contracts.json')
const deployedAddresses = require('../contracts/addresses.json')

describe('Scaffold :: Contracts :: Todo', () => {
  let Scaffold

  beforeAll(async () => {
    // init web3 library with local RPC endpoint
    web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))

    // get the available Ethereum test accounts
    accounts = await web3.eth.getAccounts()

    // create a new instance of the Todo contract
    Scaffold = new web3.eth.Contract(compiledContracts.Scaffold.abi, deployedAddresses.Scaffold)
  })

  describe('Scaffold set and get', () => {
    it('', async () => {
      const address = accounts[1]
      const options = {
        from: address
      }
      const expected = "12390"
      await Scaffold.methods.set(expected).send(options)
      const actual = await Scaffold.methods.get().call(options)

      expect(actual).toEqual(expected)
    })
  })
})
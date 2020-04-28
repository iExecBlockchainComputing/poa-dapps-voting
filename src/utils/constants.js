let constants = {}
constants.organization = 'iExecBlockchainComputing'
constants.repoName = 'poa-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json',
  PoaNetworkConsensus: 'PoaNetworkConsensus.abi.json',
  BallotStorage: 'BallotsStorage.abi.json',
  EmissionFunds: 'EmissionFunds.abi.json',
  ProxyStorage: 'ProxyStorage.abi.json',
  ValidatorMetadata: 'ValidatorMetadata.abi.json',
  VotingToChangeKeys: 'VotingToChangeKeys.abi.json',
  VotingToChangeMinThreshold: 'VotingToChangeMinThreshold.abi.json',
  VotingToChangeProxyAddress: 'VotingToChangeProxyAddress.abi.json',
  VotingToManageEmissionFunds: 'VotingToManageEmissionFunds.abi.json'
}

constants.NEW_MINING_KEY = {
  label: 'New Mining Key',
  lastNameAndKey: '',
  fullName: '',
  value: '0x0000000000000000000000000000000000000000'
}

constants.minBallotDurationInHours = 1
constants.startTimeOffsetInMinutes = 5
constants.endTimeDefaultInMinutes = 2890
constants.getTransactionReceiptInterval = 5000
constants.rootPath = '/poa-dapps-voting'

constants.navigationData = [
  {
    icon: 'all',
    title: 'All',
    url: `${constants.rootPath}`
  },
  {
    icon: 'active',
    title: 'Active',
    url: `${constants.rootPath}/active`
  },
  {
    icon: 'finalize',
    title: 'To Finalize',
    url: `${constants.rootPath}/tofinalize`
  },
  {
    disabled: true,
    title: 'New Ballot',
    url: `${constants.rootPath}/new`
  }
]

constants.SOKOL = 'sokol'
constants.CORE = 'core'
constants.DAI = 'dai'
constants.KOVAN = 'kovan'
constants.VIVIANI = 'viviani'
constants.BELLECOUR = 'bellecour'
constants.SANDBOX = 'sandbox'

constants.NETWORKS = {
  '42': {
    NAME: 'Kovan',
    RPC: 'https://kovan.infura.io/v3/1125fe73d87c4e5396678f4e3089b3dd',
    BRANCH: constants.KOVAN,
    TESTNET: true
  },
  '77': {
    NAME: 'Sokol',
    RPC: 'https://sokol.poa.network',
    BRANCH: constants.SOKOL,
    TESTNET: true
  },
  '99': {
    NAME: 'Core',
    RPC: 'https://core.poa.network',
    BRANCH: constants.CORE,
    TESTNET: false
  },
  '100': {
    NAME: 'Dai',
    RPC: 'https://dai.poa.network',
    BRANCH: constants.DAI,
    TESTNET: false
  },
  '133': {
    NAME: 'vRLC',
    RPC: 'https://viviani.iex.ec',
    BRANCH: constants.VIVIANI,
    TESTNET: true
  },
  '134': {
    NAME: 'xRLC',
    RPC: 'https://bellecour.iex.ec',
    BRANCH: constants.BELLECOUR,
    TESTNET: false
  },
  '138': {
    NAME: 'test',
    RPC: 'https://sandbox.iex.ec',
    BRANCH: constants.SANDBOX,
    TESTNET: false
  }
}

module.exports = {
  constants
}

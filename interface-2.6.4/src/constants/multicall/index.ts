import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {  
  [ChainId.BSC]: process.env.BSC_MULTICALL_ADDRESS || '0x350B31e811b2A20c08BDb22E3cba7b6fD1D1f475'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

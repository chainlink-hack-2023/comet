import { SupportedChainId } from 'ccip-sdk'

const composableCowAddress = '0xfdaFc9d1902f4e0b84f65F49f244b32b31013b74'
export const COMPOSABLE_COW_ADDRESS: Record<SupportedChainId, string> = {
  1: composableCowAddress,
  100: composableCowAddress,
  5: composableCowAddress,
  1442: composableCowAddress,
  43113: composableCowAddress,
  80001: composableCowAddress,
  11155111: composableCowAddress,
  11155420: composableCowAddress,
}

const extensibleHandlerAddress = '0x2f55e8b20D0B9FEFA187AA7d00B6Cbe563605bF5'
export const SAFE_EXTENSIBLE_HANDLER_ADDRESS: Record<SupportedChainId, string> = {
  1: extensibleHandlerAddress,
  100: extensibleHandlerAddress,
  5: extensibleHandlerAddress,
  1442: extensibleHandlerAddress,
  43113: extensibleHandlerAddress,
  80001: extensibleHandlerAddress,
  11155111: extensibleHandlerAddress,
  11155420: extensibleHandlerAddress,
}

const currentBlockFactoryAddress = '0x52eD56Da04309Aca4c3FECC595298d80C2f16BAc'
export const CURRENT_BLOCK_FACTORY_ADDRESS: Record<SupportedChainId, string> = {
  1: currentBlockFactoryAddress,
  100: currentBlockFactoryAddress,
  5: currentBlockFactoryAddress,
  1442: currentBlockFactoryAddress,
  43113: currentBlockFactoryAddress,
  80001: currentBlockFactoryAddress,
  11155111: currentBlockFactoryAddress,
  11155420: currentBlockFactoryAddress,
}

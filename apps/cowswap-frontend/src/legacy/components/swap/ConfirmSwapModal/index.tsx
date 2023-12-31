import { useCallback, useMemo } from 'react'

import { TokenAmount } from '@cowprotocol/ui'
import { useWalletDetails } from '@cowprotocol/wallet'
import { Percent } from '@uniswap/sdk-core'

import { Trans } from '@lingui/macro'

import { SwapModalFooter } from 'legacy/components/swap/SwapModalFooter'
import TradeGp from 'legacy/state/swap/TradeGp'

import { SwapConfirmState } from 'modules/swap/state/swapConfirmAtom'

import { RateInfoParams } from 'common/pure/RateInfo'
import { TransactionErrorContent } from 'common/pure/TransactionErrorContent'
import { TradeAmounts } from 'common/types'

import { useButtonText } from './hooks'

import { ConfirmOperationType } from '../../../state/types'
import { TransactionConfirmationModal } from '../../TransactionConfirmationModal'
import { LegacyConfirmationModalContent } from '../../TransactionConfirmationModal/LegacyConfirmationModalContent'
import { SwapModalHeader } from '../SwapModalHeader'

type ConfirmSwapModalProps = {
  swapConfirmState: SwapConfirmState
  trade: TradeGp | undefined
  recipient: string | null
  priceImpact?: Percent
  allowedSlippage: Percent
  onAcceptChanges: () => void
  onConfirm: () => void
  onDismiss: () => void
  rateInfoParams: RateInfoParams
}

export function ConfirmSwapModal({
  trade,
  swapConfirmState,
  onAcceptChanges,
  allowedSlippage,
  onConfirm,
  onDismiss,
  recipient,
  priceImpact,
  rateInfoParams,
}: ConfirmSwapModalProps) {
  const { swapErrorMessage, showConfirm, attemptingTxn, txHash, tradeToConfirm: originalTrade } = swapConfirmState
  const { allowsOffchainSigning } = useWalletDetails()
  const showAcceptChanges = useMemo(
    () => Boolean(trade && originalTrade && tradeMeaningfullyDiffers(trade, originalTrade)),
    [originalTrade, trade]
  )

  const modalHeader = useCallback(() => {
    return trade ? (
      <SwapModalHeader
        trade={trade}
        rateInfoParams={rateInfoParams}
        allowsOffchainSigning={allowsOffchainSigning}
        allowedSlippage={allowedSlippage}
        priceImpact={priceImpact}
        recipient={recipient}
        showAcceptChanges={showAcceptChanges}
        onAcceptChanges={onAcceptChanges}
      />
    ) : null
  }, [
    trade,
    allowsOffchainSigning,
    allowedSlippage,
    priceImpact,
    recipient,
    showAcceptChanges,
    onAcceptChanges,
    rateInfoParams,
  ])

  const slippageAdjustedSellAmount = trade?.maximumAmountIn(allowedSlippage)
  const buttonText = useButtonText(slippageAdjustedSellAmount)

  const modalBottom = useCallback(() => {
    return trade ? (
      <SwapModalFooter
        onConfirm={onConfirm}
        disabledConfirm={showAcceptChanges}
        swapErrorMessage={swapErrorMessage}
        buttonText={buttonText}
      />
    ) : null
  }, [buttonText, onConfirm, showAcceptChanges, swapErrorMessage, trade])

  // TODO: use TradeConfirmModal
  const confirmationContent = useCallback(
    () =>
      swapErrorMessage ? (
        <TransactionErrorContent onDismiss={onDismiss} message={swapErrorMessage} />
      ) : (
        <LegacyConfirmationModalContent
          title={<Trans>Confirm Swap</Trans>}
          onDismiss={onDismiss}
          topContent={modalHeader}
          bottomContent={modalBottom}
        />
      ),
    [swapErrorMessage, onDismiss, modalHeader, modalBottom]
  )

  const tradeAmounts: TradeAmounts | undefined = useMemo(
    () =>
      trade ? { inputAmount: trade.inputAmountWithoutFee, outputAmount: trade.outputAmountWithoutFee } : undefined,
    [trade]
  )

  return (
    <TransactionConfirmationModal
      isOpen={showConfirm}
      onDismiss={onDismiss}
      attemptingTxn={attemptingTxn}
      hash={txHash}
      content={confirmationContent}
      pendingText={<PendingText trade={trade} />}
      currencyToAdd={trade?.outputAmount.currency}
      operationType={ConfirmOperationType.ORDER_SIGN}
      tradeAmounts={tradeAmounts}
      swapConfirmState={swapConfirmState}
    />
  )
}

function PendingText(props: { trade: TradeGp | undefined }): JSX.Element {
  const { trade } = props
  const inputAmount = trade?.inputAmount
  const outputAmount = trade?.outputAmount

  return (
    <Trans>
      Swapping <TokenAmount amount={inputAmount} tokenSymbol={inputAmount?.currency} /> for{' '}
      <TokenAmount amount={outputAmount} tokenSymbol={outputAmount?.currency} />
    </Trans>
  )
}

/**
 * Returns true if the trade requires a confirmation of details before we can submit it
 * @param tradeA trade A
 * @param tradeB trade B
 */
function tradeMeaningfullyDiffers(tradeA: TradeGp, tradeB: TradeGp): boolean {
  return (
    tradeA.tradeType !== tradeB.tradeType ||
    !tradeA.inputAmount.currency.equals(tradeB.inputAmount.currency) ||
    !tradeA.inputAmount.equalTo(tradeB.inputAmount) ||
    !tradeA.outputAmount.currency.equals(tradeB.outputAmount.currency) ||
    !tradeA.outputAmount.equalTo(tradeB.outputAmount)
  )
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface GPv2SettlementInterface extends utils.Interface {
  functions: {
    "setPreSignature(bytes,bool)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "setPreSignature"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "setPreSignature",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(
    functionFragment: "setPreSignature",
    data: BytesLike
  ): Result;

  events: {
    "Trade(address,address,address,uint256,uint256,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Trade"): EventFragment;
}

export interface TradeEventObject {
  owner: string;
  sellToken: string;
  buyToken: string;
  sellAmount: BigNumber;
  buyAmount: BigNumber;
  feeAmount: BigNumber;
  orderUid: string;
}
export type TradeEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, string],
  TradeEventObject
>;

export type TradeEventFilter = TypedEventFilter<TradeEvent>;

export interface GPv2Settlement extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GPv2SettlementInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    setPreSignature(
      orderUid: PromiseOrValue<BytesLike>,
      signed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  setPreSignature(
    orderUid: PromiseOrValue<BytesLike>,
    signed: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    setPreSignature(
      orderUid: PromiseOrValue<BytesLike>,
      signed: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Trade(address,address,address,uint256,uint256,uint256,bytes)"(
      owner?: PromiseOrValue<string> | null,
      sellToken?: null,
      buyToken?: null,
      sellAmount?: null,
      buyAmount?: null,
      feeAmount?: null,
      orderUid?: null
    ): TradeEventFilter;
    Trade(
      owner?: PromiseOrValue<string> | null,
      sellToken?: null,
      buyToken?: null,
      sellAmount?: null,
      buyAmount?: null,
      feeAmount?: null,
      orderUid?: null
    ): TradeEventFilter;
  };

  estimateGas: {
    setPreSignature(
      orderUid: PromiseOrValue<BytesLike>,
      signed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setPreSignature(
      orderUid: PromiseOrValue<BytesLike>,
      signed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
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

export declare namespace GPv2Order {
  export type DataStruct = {
    sellToken: PromiseOrValue<string>;
    buyToken: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    sellAmount: PromiseOrValue<BigNumberish>;
    buyAmount: PromiseOrValue<BigNumberish>;
    validTo: PromiseOrValue<BigNumberish>;
    appData: PromiseOrValue<BytesLike>;
    feeAmount: PromiseOrValue<BigNumberish>;
    kind: PromiseOrValue<BytesLike>;
    partiallyFillable: PromiseOrValue<boolean>;
    sellTokenBalance: PromiseOrValue<BytesLike>;
    buyTokenBalance: PromiseOrValue<BytesLike>;
  };

  export type DataStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    string,
    BigNumber,
    string,
    boolean,
    string,
    string
  ] & {
    sellToken: string;
    buyToken: string;
    receiver: string;
    sellAmount: BigNumber;
    buyAmount: BigNumber;
    validTo: number;
    appData: string;
    feeAmount: BigNumber;
    kind: string;
    partiallyFillable: boolean;
    sellTokenBalance: string;
    buyTokenBalance: string;
  };
}

export declare namespace ICoWSwapOnchainOrders {
  export type OnchainSignatureStruct = {
    scheme: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<BytesLike>;
  };

  export type OnchainSignatureStructOutput = [number, string] & {
    scheme: number;
    data: string;
  };
}

export declare namespace EthFlowOrder {
  export type DataStruct = {
    buyToken: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    sellAmount: PromiseOrValue<BigNumberish>;
    buyAmount: PromiseOrValue<BigNumberish>;
    appData: PromiseOrValue<BytesLike>;
    feeAmount: PromiseOrValue<BigNumberish>;
    validTo: PromiseOrValue<BigNumberish>;
    partiallyFillable: PromiseOrValue<boolean>;
    quoteId: PromiseOrValue<BigNumberish>;
  };

  export type DataStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    number,
    boolean,
    BigNumber
  ] & {
    buyToken: string;
    receiver: string;
    sellAmount: BigNumber;
    buyAmount: BigNumber;
    appData: string;
    feeAmount: BigNumber;
    validTo: number;
    partiallyFillable: boolean;
    quoteId: BigNumber;
  };
}

export interface CoWSwapEthFlowInterface extends utils.Interface {
  functions: {
    "cowSwapSettlement()": FunctionFragment;
    "createOrder((address,address,uint256,uint256,bytes32,uint256,uint32,bool,int64))": FunctionFragment;
    "invalidateOrder((address,address,uint256,uint256,bytes32,uint256,uint32,bool,int64))": FunctionFragment;
    "invalidateOrdersIgnoringNotAllowed((address,address,uint256,uint256,bytes32,uint256,uint32,bool,int64)[])": FunctionFragment;
    "isValidSignature(bytes32,bytes)": FunctionFragment;
    "orders(bytes32)": FunctionFragment;
    "unwrap(uint256)": FunctionFragment;
    "wrap(uint256)": FunctionFragment;
    "wrapAll()": FunctionFragment;
    "wrappedNativeToken()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cowSwapSettlement"
      | "createOrder"
      | "invalidateOrder"
      | "invalidateOrdersIgnoringNotAllowed"
      | "isValidSignature"
      | "orders"
      | "unwrap"
      | "wrap"
      | "wrapAll"
      | "wrappedNativeToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cowSwapSettlement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [EthFlowOrder.DataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "invalidateOrder",
    values: [EthFlowOrder.DataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "invalidateOrdersIgnoringNotAllowed",
    values: [EthFlowOrder.DataStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "orders",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrap",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "wrap",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "wrapAll", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wrappedNativeToken",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cowSwapSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "invalidateOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "invalidateOrdersIgnoringNotAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unwrap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wrap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wrapAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrappedNativeToken",
    data: BytesLike
  ): Result;

  events: {
    "OrderInvalidation(bytes)": EventFragment;
    "OrderPlacement(address,tuple,tuple,bytes)": EventFragment;
    "OrderRefund(bytes,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OrderInvalidation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderPlacement"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderRefund"): EventFragment;
}

export interface OrderInvalidationEventObject {
  orderUid: string;
}
export type OrderInvalidationEvent = TypedEvent<
  [string],
  OrderInvalidationEventObject
>;

export type OrderInvalidationEventFilter =
  TypedEventFilter<OrderInvalidationEvent>;

export interface OrderPlacementEventObject {
  sender: string;
  order: GPv2Order.DataStructOutput;
  signature: ICoWSwapOnchainOrders.OnchainSignatureStructOutput;
  data: string;
}
export type OrderPlacementEvent = TypedEvent<
  [
    string,
    GPv2Order.DataStructOutput,
    ICoWSwapOnchainOrders.OnchainSignatureStructOutput,
    string
  ],
  OrderPlacementEventObject
>;

export type OrderPlacementEventFilter = TypedEventFilter<OrderPlacementEvent>;

export interface OrderRefundEventObject {
  orderUid: string;
  refunder: string;
}
export type OrderRefundEvent = TypedEvent<
  [string, string],
  OrderRefundEventObject
>;

export type OrderRefundEventFilter = TypedEventFilter<OrderRefundEvent>;

export interface CoWSwapEthFlow extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CoWSwapEthFlowInterface;

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
    cowSwapSettlement(overrides?: CallOverrides): Promise<[string]>;

    createOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    invalidateOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    invalidateOrdersIgnoringNotAllowed(
      orderArray: EthFlowOrder.DataStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isValidSignature(
      orderHash: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    orders(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, number] & { owner: string; validTo: number }>;

    unwrap(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wrap(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wrapAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wrappedNativeToken(overrides?: CallOverrides): Promise<[string]>;
  };

  cowSwapSettlement(overrides?: CallOverrides): Promise<string>;

  createOrder(
    order: EthFlowOrder.DataStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  invalidateOrder(
    order: EthFlowOrder.DataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  invalidateOrdersIgnoringNotAllowed(
    orderArray: EthFlowOrder.DataStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isValidSignature(
    orderHash: PromiseOrValue<BytesLike>,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  orders(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[string, number] & { owner: string; validTo: number }>;

  unwrap(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wrap(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wrapAll(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wrappedNativeToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cowSwapSettlement(overrides?: CallOverrides): Promise<string>;

    createOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    invalidateOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    invalidateOrdersIgnoringNotAllowed(
      orderArray: EthFlowOrder.DataStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    isValidSignature(
      orderHash: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    orders(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string, number] & { owner: string; validTo: number }>;

    unwrap(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    wrap(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    wrapAll(overrides?: CallOverrides): Promise<void>;

    wrappedNativeToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OrderInvalidation(bytes)"(orderUid?: null): OrderInvalidationEventFilter;
    OrderInvalidation(orderUid?: null): OrderInvalidationEventFilter;

    "OrderPlacement(address,tuple,tuple,bytes)"(
      sender?: PromiseOrValue<string> | null,
      order?: null,
      signature?: null,
      data?: null
    ): OrderPlacementEventFilter;
    OrderPlacement(
      sender?: PromiseOrValue<string> | null,
      order?: null,
      signature?: null,
      data?: null
    ): OrderPlacementEventFilter;

    "OrderRefund(bytes,address)"(
      orderUid?: null,
      refunder?: PromiseOrValue<string> | null
    ): OrderRefundEventFilter;
    OrderRefund(
      orderUid?: null,
      refunder?: PromiseOrValue<string> | null
    ): OrderRefundEventFilter;
  };

  estimateGas: {
    cowSwapSettlement(overrides?: CallOverrides): Promise<BigNumber>;

    createOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    invalidateOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    invalidateOrdersIgnoringNotAllowed(
      orderArray: EthFlowOrder.DataStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isValidSignature(
      orderHash: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orders(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unwrap(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wrap(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wrapAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wrappedNativeToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cowSwapSettlement(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    invalidateOrder(
      order: EthFlowOrder.DataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    invalidateOrdersIgnoringNotAllowed(
      orderArray: EthFlowOrder.DataStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isValidSignature(
      orderHash: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orders(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unwrap(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wrap(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wrapAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wrappedNativeToken(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

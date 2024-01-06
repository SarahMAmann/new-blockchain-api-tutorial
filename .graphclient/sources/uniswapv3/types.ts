// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace Uniswapv3Types {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type Account = {
  /**  Address of the account  */
  id: Scalars['ID'];
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};

export type Account_orderBy =
  | 'id';

export type ActiveAccount = {
  /**  { Address of the account }-{ Days since Unix epoch }-{ [Optional] HH: hour of the day }  */
  id: Scalars['ID'];
};

export type ActiveAccount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ActiveAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ActiveAccount_filter>>>;
};

export type ActiveAccount_orderBy =
  | 'id';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Deposit = Event & {
  /**  deposit-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol;
  /**  Address that received the tokens  */
  to: Scalars['String'];
  /**  Address that sent the tokens  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Input tokens of the pool. E.g. WETH and USDC to a WETH-USDC pool  */
  inputTokens: Array<Token>;
  /**  Output token of the pool. E.g. the UNI-LP token  */
  outputToken?: Maybe<Token>;
  /**  Amount of input tokens in the token's native unit  */
  inputTokenAmounts: Array<Scalars['BigInt']>;
  /**  Amount of output tokens in the token's native unit  */
  outputTokenAmount?: Maybe<Scalars['BigInt']>;
  /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens deposited into a pool)  */
  amountUSD: Scalars['BigDecimal'];
  /**  The pool involving this transaction  */
  pool: LiquidityPool;
};


export type DepositinputTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};

export type Deposit_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<DexAmmProtocol_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokens?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_?: InputMaybe<Token_filter>;
  outputToken?: InputMaybe<Scalars['String']>;
  outputToken_not?: InputMaybe<Scalars['String']>;
  outputToken_gt?: InputMaybe<Scalars['String']>;
  outputToken_lt?: InputMaybe<Scalars['String']>;
  outputToken_gte?: InputMaybe<Scalars['String']>;
  outputToken_lte?: InputMaybe<Scalars['String']>;
  outputToken_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_contains?: InputMaybe<Scalars['String']>;
  outputToken_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_contains?: InputMaybe<Scalars['String']>;
  outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_?: InputMaybe<Token_filter>;
  inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenAmount?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<LiquidityPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
};

export type Deposit_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__totalPoolCount'
  | 'protocol___regenesis'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'inputTokens'
  | 'outputToken'
  | 'outputToken__id'
  | 'outputToken__name'
  | 'outputToken__symbol'
  | 'outputToken__decimals'
  | 'outputToken__lastPriceUSD'
  | 'outputToken__lastPriceBlockNumber'
  | 'inputTokenAmounts'
  | 'outputTokenAmount'
  | 'amountUSD'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__totalValueLockedUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__outputTokenSupply'
  | 'pool__outputTokenPriceUSD'
  | 'pool__stakedOutputTokenAmount';

export type DexAmmProtocol = Protocol & {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ID'];
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String'];
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String'];
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String'];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String'];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String'];
  /**  The blockchain network this subgraph is indexing on  */
  network: Network;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType;
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  All historical volume in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int'];
  /**  This is a boolean to indicate whether or not the pools have been instantiated the were initialized before Optimism regenesis  */
  _regenesis: Scalars['Boolean'];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>;
  /**  All pools that belong to this protocol  */
  pools: Array<LiquidityPool>;
};


export type DexAmmProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
};


export type DexAmmProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
};


export type DexAmmProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
};


export type DexAmmProtocolpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPool_filter>;
};

export type DexAmmProtocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion?: InputMaybe<Scalars['String']>;
  schemaVersion_not?: InputMaybe<Scalars['String']>;
  schemaVersion_gt?: InputMaybe<Scalars['String']>;
  schemaVersion_lt?: InputMaybe<Scalars['String']>;
  schemaVersion_gte?: InputMaybe<Scalars['String']>;
  schemaVersion_lte?: InputMaybe<Scalars['String']>;
  schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion?: InputMaybe<Scalars['String']>;
  subgraphVersion_not?: InputMaybe<Scalars['String']>;
  subgraphVersion_gt?: InputMaybe<Scalars['String']>;
  subgraphVersion_lt?: InputMaybe<Scalars['String']>;
  subgraphVersion_gte?: InputMaybe<Scalars['String']>;
  subgraphVersion_lte?: InputMaybe<Scalars['String']>;
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion?: InputMaybe<Scalars['String']>;
  methodologyVersion_not?: InputMaybe<Scalars['String']>;
  methodologyVersion_gt?: InputMaybe<Scalars['String']>;
  methodologyVersion_lt?: InputMaybe<Scalars['String']>;
  methodologyVersion_gte?: InputMaybe<Scalars['String']>;
  methodologyVersion_lte?: InputMaybe<Scalars['String']>;
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Network>;
  network_not?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<Network>>;
  network_not_in?: InputMaybe<Array<Network>>;
  type?: InputMaybe<ProtocolType>;
  type_not?: InputMaybe<ProtocolType>;
  type_in?: InputMaybe<Array<ProtocolType>>;
  type_not_in?: InputMaybe<Array<ProtocolType>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount?: InputMaybe<Scalars['Int']>;
  totalPoolCount_not?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  _regenesis?: InputMaybe<Scalars['Boolean']>;
  _regenesis_not?: InputMaybe<Scalars['Boolean']>;
  _regenesis_in?: InputMaybe<Array<Scalars['Boolean']>>;
  _regenesis_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  financialMetrics_?: InputMaybe<FinancialsDailySnapshot_filter>;
  pools_?: InputMaybe<LiquidityPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DexAmmProtocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DexAmmProtocol_filter>>>;
};

export type DexAmmProtocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeVolumeUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'cumulativeUniqueUsers'
  | 'totalPoolCount'
  | '_regenesis'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics'
  | 'pools';

/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type Event = {
  /**  { Event type }-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol;
  /**  Address that received the tokens  */
  to: Scalars['String'];
  /**  Address that sent the tokens  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
};

export type Event_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<DexAmmProtocol_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Event_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Event_filter>>>;
};

export type Event_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__totalPoolCount'
  | 'protocol___regenesis'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp';

export type FinancialsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol;
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  All trade volume occurred in a given day, in USD  */
  dailyVolumeUSD: Scalars['BigDecimal'];
  /**  All historical trade volume in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  dailySupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  dailyProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  dailyTotalRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
};

export type FinancialsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<DexAmmProtocol_filter>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_filter>>>;
};

export type FinancialsDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__totalPoolCount'
  | 'protocol___regenesis'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'dailyVolumeUSD'
  | 'cumulativeVolumeUSD'
  | 'dailySupplySideRevenueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'dailyProtocolSideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'dailyTotalRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'blockNumber'
  | 'timestamp';

export type LiquidityPool = {
  /**  Smart contract address of the pool  */
  id: Scalars['ID'];
  /**  The protocol this pool belongs to  */
  protocol: DexAmmProtocol;
  /**  Name of liquidity pool (e.g. Curve.fi DAI/USDC/USDT)  */
  name?: Maybe<Scalars['String']>;
  /**  Symbol of liquidity pool (e.g. 3CRV)  */
  symbol?: Maybe<Scalars['String']>;
  /**  Tokens that need to be deposited to take a position in protocol. e.g. WETH and USDC to deposit into the WETH-USDC pool. Array to account for multi-asset pools like Curve and Balancer  */
  inputTokens: Array<Token>;
  /**  Token that is minted to track ownership of position in protocol  */
  outputToken?: Maybe<Token>;
  /**  Aditional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<RewardToken>>;
  /**  Fees per trade incurred to the user. Should include all fees that apply to a pool (e.g. Curve has a trading fee AND an admin fee, which is a portion of the trading fee. Uniswap only has a trading fee and no protocol fee. )  */
  fees: Array<LiquidityPoolFee>;
  /**  Whether this pool is single-sided (e.g. Bancor, Platypus's Alternative Pool). The specifics of the implementation depends on the protocol.  */
  isSingleSided: Scalars['Boolean'];
  /**  Creation timestamp  */
  createdTimestamp: Scalars['BigInt'];
  /**  Creation block number  */
  createdBlockNumber: Scalars['BigInt'];
  /**  Current TVL (Total Value Locked) of this pool in USD  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal'];
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']>;
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['BigDecimal']>;
  /**  Total supply of output token. Note that certain DEXes don't have an output token (e.g. Bancor)  */
  outputTokenSupply?: Maybe<Scalars['BigInt']>;
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
  /**  Liquidity pool daily snapshots  */
  dailySnapshots: Array<LiquidityPoolDailySnapshot>;
  /**  Liquidity pool hourly snapshots  */
  hourlySnapshots: Array<LiquidityPoolHourlySnapshot>;
  /**  All deposit (add liquidity) events occurred in this pool  */
  deposits: Array<Deposit>;
  /**  All withdraw (remove liquidity) events occurred in this pool  */
  withdraws: Array<Withdraw>;
  /**  All trade (swap) events occurred in this pool  */
  swaps: Array<Swap>;
};


export type LiquidityPoolinputTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type LiquidityPoolrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
};


export type LiquidityPoolfeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPoolFee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPoolFee_filter>;
};


export type LiquidityPooldailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPoolDailySnapshot_filter>;
};


export type LiquidityPoolhourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>;
};


export type LiquidityPooldepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type LiquidityPoolwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
};


export type LiquidityPoolswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
};

export type LiquidityPoolDailySnapshot = {
  /**  { Smart contract address of the pool }-{ # of days since Unix epoch time }  */
  id: Scalars['ID'];
  /**  The protocol this snapshot belongs to  */
  protocol: DexAmmProtocol;
  /**  The pool this snapshot belongs to  */
  pool: LiquidityPool;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  Current TVL (Total Value Locked) of this pool  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Daily revenue generated by the liquidity pool, accrued to the supply side.  */
  dailySupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  Daily revenue generated by the liquidity pool, accrued to the protocol.  */
  dailyProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Daily revenue generated by the liquidity pool.  */
  dailyTotalRevenueUSD: Scalars['BigDecimal'];
  /**  All trade volume occurred in a given day, in USD  */
  dailyVolumeUSD: Scalars['BigDecimal'];
  /**  All trade volume occurred in a given day for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  dailyVolumeByTokenAmount: Array<Scalars['BigInt']>;
  /**  All trade volume occurred in a given day for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  dailyVolumeByTokenUSD: Array<Scalars['BigDecimal']>;
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal'];
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']>;
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['BigDecimal']>;
  /**  Total supply of output token. Note that certain DEXes don't have an output token (e.g. Bancor)  */
  outputTokenSupply?: Maybe<Scalars['BigInt']>;
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
};

export type LiquidityPoolDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<DexAmmProtocol_filter>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<LiquidityPool_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolumeByTokenAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolumeByTokenAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolumeByTokenAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolumeByTokenAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyVolumeByTokenUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeByTokenUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeByTokenUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeByTokenUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyVolumeByTokenUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPoolDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPoolDailySnapshot_filter>>>;
};

export type LiquidityPoolDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__totalPoolCount'
  | 'protocol___regenesis'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__totalValueLockedUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__outputTokenSupply'
  | 'pool__outputTokenPriceUSD'
  | 'pool__stakedOutputTokenAmount'
  | 'blockNumber'
  | 'timestamp'
  | 'totalValueLockedUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'dailySupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'dailyProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'dailyTotalRevenueUSD'
  | 'dailyVolumeUSD'
  | 'dailyVolumeByTokenAmount'
  | 'dailyVolumeByTokenUSD'
  | 'cumulativeVolumeUSD'
  | 'inputTokenBalances'
  | 'inputTokenWeights'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'stakedOutputTokenAmount'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD';

export type LiquidityPoolFee = {
  /**  { Fee type }-{ Pool address }  */
  id: Scalars['ID'];
  /**  Fee as a percentage of the trade (swap) amount. Does not always apply  */
  feePercentage: Scalars['BigDecimal'];
  /**  Type of fee this pool uses  */
  feeType: LiquidityPoolFeeType;
};

export type LiquidityPoolFeeType =
  /**  Total fixed fee paid by the user per trade, as a percentage of the traded amount. e.g. 0.3% for Uniswap v2, 0.3% for Sushiswap, 0.04% for Curve v1.  */
  | 'FIXED_TRADING_FEE'
  /**  Some protocols use tiered fees instead of fixed fee (e.g. DYDX, DODO). Set `feePercentage` as 0 but handle the tiered fees in the mapping code.  */
  | 'TIERED_TRADING_FEE'
  /**  Some protocols use dynamic fees instead of fixed fee (e.g. Balancer v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  | 'DYNAMIC_TRADING_FEE'
  /**  Fixed fee that's paid to the LP, as a percentage of the traded amount. e.g. 0.25% for Sushiswap, 0.02% for Curve v1.  */
  | 'FIXED_LP_FEE'
  /**  Some protocols use dynamic LP fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  | 'DYNAMIC_LP_FEE'
  /**  Fixed fee that's paid to the protocol, as a percentage of the traded amount. e.g. 0.05% for Sushiswap, 0.02% for Curve v1.  */
  | 'FIXED_PROTOCOL_FEE'
  /**  Some protocols use dynamic protocol fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  | 'DYNAMIC_PROTOCOL_FEE'
  /**  One-time fee charged by the protocol during deposit, in percentages of the deposit token  */
  | 'DEPOSIT_FEE'
  /**  One-time fee charged by the protocol (e.g. Bancor v3) during withdrawal, in percentages of the withdrawal token  */
  | 'WITHDRAWAL_FEE';

export type LiquidityPoolFee_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  feePercentage?: InputMaybe<Scalars['BigDecimal']>;
  feePercentage_not?: InputMaybe<Scalars['BigDecimal']>;
  feePercentage_gt?: InputMaybe<Scalars['BigDecimal']>;
  feePercentage_lt?: InputMaybe<Scalars['BigDecimal']>;
  feePercentage_gte?: InputMaybe<Scalars['BigDecimal']>;
  feePercentage_lte?: InputMaybe<Scalars['BigDecimal']>;
  feePercentage_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feePercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feeType?: InputMaybe<LiquidityPoolFeeType>;
  feeType_not?: InputMaybe<LiquidityPoolFeeType>;
  feeType_in?: InputMaybe<Array<LiquidityPoolFeeType>>;
  feeType_not_in?: InputMaybe<Array<LiquidityPoolFeeType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPoolFee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPoolFee_filter>>>;
};

export type LiquidityPoolFee_orderBy =
  | 'id'
  | 'feePercentage'
  | 'feeType';

export type LiquidityPoolHourlySnapshot = {
  /**  { Smart contract address of the pool }-{ # of hours since Unix epoch time }  */
  id: Scalars['ID'];
  /**  The protocol this snapshot belongs to  */
  protocol: DexAmmProtocol;
  /**  The pool this snapshot belongs to  */
  pool: LiquidityPool;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  Current TVL (Total Value Locked) of this pool  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Hourly revenue generated by the liquidity pool, accrued to the supply side.  */
  hourlySupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  Hourly revenue generated by the liquidity pool, accrued to the protocol.  */
  hourlyProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Hourly revenue generated by the liquidity pool.  */
  hourlyTotalRevenueUSD: Scalars['BigDecimal'];
  /**  All trade volume occurred in a given hour, in USD  */
  hourlyVolumeUSD: Scalars['BigDecimal'];
  /**  All trade volume occurred in a given hour for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  hourlyVolumeByTokenAmount: Array<Scalars['BigInt']>;
  /**  All trade volume occurred in a given hour for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  hourlyVolumeByTokenUSD: Array<Scalars['BigDecimal']>;
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal'];
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']>;
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['BigDecimal']>;
  /**  Total supply of output token. Note that certain DEXes don't have an output token (e.g. Bancor)  */
  outputTokenSupply?: Maybe<Scalars['BigInt']>;
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
};

export type LiquidityPoolHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<DexAmmProtocol_filter>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<LiquidityPool_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyVolumeByTokenAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyVolumeByTokenAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyVolumeByTokenAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyVolumeByTokenAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  hourlyVolumeByTokenUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeByTokenUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeByTokenUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeByTokenUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyVolumeByTokenUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPoolHourlySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPoolHourlySnapshot_filter>>>;
};

export type LiquidityPoolHourlySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__totalPoolCount'
  | 'protocol___regenesis'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__totalValueLockedUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__outputTokenSupply'
  | 'pool__outputTokenPriceUSD'
  | 'pool__stakedOutputTokenAmount'
  | 'blockNumber'
  | 'timestamp'
  | 'totalValueLockedUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'hourlySupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'hourlyProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'hourlyTotalRevenueUSD'
  | 'hourlyVolumeUSD'
  | 'hourlyVolumeByTokenAmount'
  | 'hourlyVolumeByTokenUSD'
  | 'cumulativeVolumeUSD'
  | 'inputTokenBalances'
  | 'inputTokenWeights'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'stakedOutputTokenAmount'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD';

export type LiquidityPool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<DexAmmProtocol_filter>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  inputTokens?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_?: InputMaybe<Token_filter>;
  outputToken?: InputMaybe<Scalars['String']>;
  outputToken_not?: InputMaybe<Scalars['String']>;
  outputToken_gt?: InputMaybe<Scalars['String']>;
  outputToken_lt?: InputMaybe<Scalars['String']>;
  outputToken_gte?: InputMaybe<Scalars['String']>;
  outputToken_lte?: InputMaybe<Scalars['String']>;
  outputToken_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_contains?: InputMaybe<Scalars['String']>;
  outputToken_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_contains?: InputMaybe<Scalars['String']>;
  outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_?: InputMaybe<Token_filter>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_?: InputMaybe<RewardToken_filter>;
  fees?: InputMaybe<Array<Scalars['String']>>;
  fees_not?: InputMaybe<Array<Scalars['String']>>;
  fees_contains?: InputMaybe<Array<Scalars['String']>>;
  fees_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fees_not_contains?: InputMaybe<Array<Scalars['String']>>;
  fees_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fees_?: InputMaybe<LiquidityPoolFee_filter>;
  isSingleSided?: InputMaybe<Scalars['Boolean']>;
  isSingleSided_not?: InputMaybe<Scalars['Boolean']>;
  isSingleSided_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isSingleSided_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailySnapshots_?: InputMaybe<LiquidityPoolDailySnapshot_filter>;
  hourlySnapshots_?: InputMaybe<LiquidityPoolHourlySnapshot_filter>;
  deposits_?: InputMaybe<Deposit_filter>;
  withdraws_?: InputMaybe<Withdraw_filter>;
  swaps_?: InputMaybe<Swap_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPool_filter>>>;
};

export type LiquidityPool_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__totalPoolCount'
  | 'protocol___regenesis'
  | 'name'
  | 'symbol'
  | 'inputTokens'
  | 'outputToken'
  | 'outputToken__id'
  | 'outputToken__name'
  | 'outputToken__symbol'
  | 'outputToken__decimals'
  | 'outputToken__lastPriceUSD'
  | 'outputToken__lastPriceBlockNumber'
  | 'rewardTokens'
  | 'fees'
  | 'isSingleSided'
  | 'createdTimestamp'
  | 'createdBlockNumber'
  | 'totalValueLockedUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'cumulativeVolumeUSD'
  | 'inputTokenBalances'
  | 'inputTokenWeights'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'stakedOutputTokenAmount'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'dailySnapshots'
  | 'hourlySnapshots'
  | 'deposits'
  | 'withdraws'
  | 'swaps';

export type Network =
  | 'ARBITRUM_ONE'
  | 'ARWEAVE_MAINNET'
  | 'AURORA'
  | 'AVALANCHE'
  | 'BOBA'
  | 'BSC'
  | 'CELO'
  | 'COSMOS'
  | 'CRONOS'
  | 'MAINNET'
  | 'FANTOM'
  | 'FUSE'
  | 'HARMONY'
  | 'JUNO'
  | 'MOONBEAM'
  | 'MOONRIVER'
  | 'NEAR_MAINNET'
  | 'OPTIMISM'
  | 'OSMOSIS'
  | 'MATIC'
  | 'XDAI';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Protocol = {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ID'];
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String'];
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String'];
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String'];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String'];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String'];
  /**  The blockchain network this subgraph is indexing on  */
  network: Network;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType;
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int'];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>;
};


export type ProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
};


export type ProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
};


export type ProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
};

export type ProtocolType =
  | 'EXCHANGE'
  | 'LENDING'
  | 'YIELD'
  | 'BRIDGE'
  | 'GENERIC';

export type Protocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion?: InputMaybe<Scalars['String']>;
  schemaVersion_not?: InputMaybe<Scalars['String']>;
  schemaVersion_gt?: InputMaybe<Scalars['String']>;
  schemaVersion_lt?: InputMaybe<Scalars['String']>;
  schemaVersion_gte?: InputMaybe<Scalars['String']>;
  schemaVersion_lte?: InputMaybe<Scalars['String']>;
  schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion?: InputMaybe<Scalars['String']>;
  subgraphVersion_not?: InputMaybe<Scalars['String']>;
  subgraphVersion_gt?: InputMaybe<Scalars['String']>;
  subgraphVersion_lt?: InputMaybe<Scalars['String']>;
  subgraphVersion_gte?: InputMaybe<Scalars['String']>;
  subgraphVersion_lte?: InputMaybe<Scalars['String']>;
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion?: InputMaybe<Scalars['String']>;
  methodologyVersion_not?: InputMaybe<Scalars['String']>;
  methodologyVersion_gt?: InputMaybe<Scalars['String']>;
  methodologyVersion_lt?: InputMaybe<Scalars['String']>;
  methodologyVersion_gte?: InputMaybe<Scalars['String']>;
  methodologyVersion_lte?: InputMaybe<Scalars['String']>;
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Network>;
  network_not?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<Network>>;
  network_not_in?: InputMaybe<Array<Network>>;
  type?: InputMaybe<ProtocolType>;
  type_not?: InputMaybe<ProtocolType>;
  type_in?: InputMaybe<Array<ProtocolType>>;
  type_not_in?: InputMaybe<Array<ProtocolType>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount?: InputMaybe<Scalars['Int']>;
  totalPoolCount_not?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  financialMetrics_?: InputMaybe<FinancialsDailySnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Protocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Protocol_filter>>>;
};

export type Protocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'cumulativeUniqueUsers'
  | 'totalPoolCount'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics';

export type Query = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  liquidityPoolFee?: Maybe<LiquidityPoolFee>;
  liquidityPoolFees: Array<LiquidityPoolFee>;
  dexAmmProtocol?: Maybe<DexAmmProtocol>;
  dexAmmProtocols: Array<DexAmmProtocol>;
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  liquidityPool?: Maybe<LiquidityPool>;
  liquidityPools: Array<LiquidityPool>;
  liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>;
  liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>;
  liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>;
  liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activeAccount?: Maybe<ActiveAccount>;
  activeAccounts: Array<ActiveAccount>;
  liquidityPoolAmount?: Maybe<_LiquidityPoolAmount>;
  liquidityPoolAmounts: Array<_LiquidityPoolAmount>;
  helperStore?: Maybe<_HelperStore>;
  helperStores: Array<_HelperStore>;
  tokenWhitelist?: Maybe<_TokenWhitelist>;
  tokenWhitelists: Array<_TokenWhitelist>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPoolFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPoolFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPoolFee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPoolFee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydexAmmProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydexAmmProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DexAmmProtocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DexAmmProtocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPoolDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPoolDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPoolDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPoolHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPoolHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActiveAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPoolAmountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPoolAmountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_LiquidityPoolAmount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_LiquidityPoolAmount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhelperStoreArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhelperStoresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_HelperStore_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_HelperStore_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenWhitelistArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenWhitelistsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_TokenWhitelist_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_TokenWhitelist_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RewardToken = {
  /**  { Reward token type }-{ Smart contract address of the reward token }  */
  id: Scalars['ID'];
  /**  Reference to the actual token  */
  token: Token;
  /**  The type of the reward token  */
  type: RewardTokenType;
};

export type RewardTokenType =
  /**  For reward tokens awarded to LPs/lenders  */
  | 'DEPOSIT'
  /**  For reward tokens awarded to borrowers  */
  | 'BORROW';

export type RewardToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  type?: InputMaybe<RewardTokenType>;
  type_not?: InputMaybe<RewardTokenType>;
  type_in?: InputMaybe<Array<RewardTokenType>>;
  type_not_in?: InputMaybe<Array<RewardTokenType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RewardToken_filter>>>;
};

export type RewardToken_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__name'
  | 'token__symbol'
  | 'token__decimals'
  | 'token__lastPriceUSD'
  | 'token__lastPriceBlockNumber'
  | 'type';

export type Subscription = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  liquidityPoolFee?: Maybe<LiquidityPoolFee>;
  liquidityPoolFees: Array<LiquidityPoolFee>;
  dexAmmProtocol?: Maybe<DexAmmProtocol>;
  dexAmmProtocols: Array<DexAmmProtocol>;
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  liquidityPool?: Maybe<LiquidityPool>;
  liquidityPools: Array<LiquidityPool>;
  liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>;
  liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>;
  liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>;
  liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activeAccount?: Maybe<ActiveAccount>;
  activeAccounts: Array<ActiveAccount>;
  liquidityPoolAmount?: Maybe<_LiquidityPoolAmount>;
  liquidityPoolAmounts: Array<_LiquidityPoolAmount>;
  helperStore?: Maybe<_HelperStore>;
  helperStores: Array<_HelperStore>;
  tokenWhitelist?: Maybe<_TokenWhitelist>;
  tokenWhitelists: Array<_TokenWhitelist>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  event?: Maybe<Event>;
  events: Array<Event>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPoolFeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPoolFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPoolFee_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPoolFee_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondexAmmProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondexAmmProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DexAmmProtocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DexAmmProtocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPoolDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPoolDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPoolDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPoolHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPoolHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Swap_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Swap_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActiveAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPoolAmountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPoolAmountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_LiquidityPoolAmount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_LiquidityPoolAmount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhelperStoreArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhelperStoresArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_HelperStore_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_HelperStore_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenWhitelistArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenWhitelistsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_TokenWhitelist_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_TokenWhitelist_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioneventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Event_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Event_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Swap = Event & {
  /**  swap-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol;
  /**  Address that received the tokens  */
  to: Scalars['String'];
  /**  Address that sent the tokens  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Token deposited into pool  */
  tokenIn: Token;
  /**  Amount of token deposited into pool in native units  */
  amountIn: Scalars['BigInt'];
  /**  Amount of token deposited into pool in USD  */
  amountInUSD: Scalars['BigDecimal'];
  /**  Token withdrawn from pool  */
  tokenOut: Token;
  /**  Amount of token withdrawn from pool in native units  */
  amountOut: Scalars['BigInt'];
  /**  Amount of token withdrawn from pool in USD  */
  amountOutUSD: Scalars['BigDecimal'];
  /**  The pool involving this transaction  */
  pool: LiquidityPool;
};

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<DexAmmProtocol_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenIn?: InputMaybe<Scalars['String']>;
  tokenIn_not?: InputMaybe<Scalars['String']>;
  tokenIn_gt?: InputMaybe<Scalars['String']>;
  tokenIn_lt?: InputMaybe<Scalars['String']>;
  tokenIn_gte?: InputMaybe<Scalars['String']>;
  tokenIn_lte?: InputMaybe<Scalars['String']>;
  tokenIn_in?: InputMaybe<Array<Scalars['String']>>;
  tokenIn_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenIn_contains?: InputMaybe<Scalars['String']>;
  tokenIn_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_contains?: InputMaybe<Scalars['String']>;
  tokenIn_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_starts_with?: InputMaybe<Scalars['String']>;
  tokenIn_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_ends_with?: InputMaybe<Scalars['String']>;
  tokenIn_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenIn_?: InputMaybe<Token_filter>;
  amountIn?: InputMaybe<Scalars['BigInt']>;
  amountIn_not?: InputMaybe<Scalars['BigInt']>;
  amountIn_gt?: InputMaybe<Scalars['BigInt']>;
  amountIn_lt?: InputMaybe<Scalars['BigInt']>;
  amountIn_gte?: InputMaybe<Scalars['BigInt']>;
  amountIn_lte?: InputMaybe<Scalars['BigInt']>;
  amountIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountInUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountInUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountInUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountInUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountInUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountInUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountInUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountInUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenOut?: InputMaybe<Scalars['String']>;
  tokenOut_not?: InputMaybe<Scalars['String']>;
  tokenOut_gt?: InputMaybe<Scalars['String']>;
  tokenOut_lt?: InputMaybe<Scalars['String']>;
  tokenOut_gte?: InputMaybe<Scalars['String']>;
  tokenOut_lte?: InputMaybe<Scalars['String']>;
  tokenOut_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOut_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenOut_contains?: InputMaybe<Scalars['String']>;
  tokenOut_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_contains?: InputMaybe<Scalars['String']>;
  tokenOut_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_starts_with?: InputMaybe<Scalars['String']>;
  tokenOut_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenOut_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_ends_with?: InputMaybe<Scalars['String']>;
  tokenOut_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenOut_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenOut_?: InputMaybe<Token_filter>;
  amountOut?: InputMaybe<Scalars['BigInt']>;
  amountOut_not?: InputMaybe<Scalars['BigInt']>;
  amountOut_gt?: InputMaybe<Scalars['BigInt']>;
  amountOut_lt?: InputMaybe<Scalars['BigInt']>;
  amountOut_gte?: InputMaybe<Scalars['BigInt']>;
  amountOut_lte?: InputMaybe<Scalars['BigInt']>;
  amountOut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountOut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountOutUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountOutUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountOutUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountOutUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountOutUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountOutUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountOutUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountOutUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<LiquidityPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Swap_filter>>>;
};

export type Swap_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__totalPoolCount'
  | 'protocol___regenesis'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'tokenIn'
  | 'tokenIn__id'
  | 'tokenIn__name'
  | 'tokenIn__symbol'
  | 'tokenIn__decimals'
  | 'tokenIn__lastPriceUSD'
  | 'tokenIn__lastPriceBlockNumber'
  | 'amountIn'
  | 'amountInUSD'
  | 'tokenOut'
  | 'tokenOut__id'
  | 'tokenOut__name'
  | 'tokenOut__symbol'
  | 'tokenOut__decimals'
  | 'tokenOut__lastPriceUSD'
  | 'tokenOut__lastPriceBlockNumber'
  | 'amountOut'
  | 'amountOutUSD'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__totalValueLockedUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__outputTokenSupply'
  | 'pool__outputTokenPriceUSD'
  | 'pool__stakedOutputTokenAmount';

export type Token = {
  /**  Smart contract address of the token  */
  id: Scalars['ID'];
  /**  Name of the token, mirrored from the smart contract  */
  name: Scalars['String'];
  /**  Symbol of the token, mirrored from the smart contract  */
  symbol: Scalars['String'];
  /**  The number of decimal places this token uses, default to 18  */
  decimals: Scalars['Int'];
  /**  Optional field to track the price of a token, mostly for caching purposes  */
  lastPriceUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Optional field to track the block number of the last token price  */
  lastPriceBlockNumber?: Maybe<Scalars['BigInt']>;
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'decimals'
  | 'lastPriceUSD'
  | 'lastPriceBlockNumber';

export type UsageMetricsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol;
  /**  Number of unique daily active users  */
  dailyActiveUsers: Scalars['Int'];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Total number of transactions occurred in a day. Transactions include all entities that implement the Event interface.  */
  dailyTransactionCount: Scalars['Int'];
  /**  Total number of deposits (add liquidity) in a day  */
  dailyDepositCount: Scalars['Int'];
  /**  Total number of withdrawals (remove liquidity) in a day  */
  dailyWithdrawCount: Scalars['Int'];
  /**  Total number of trades (swaps) in a day  */
  dailySwapCount: Scalars['Int'];
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
};

export type UsageMetricsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<DexAmmProtocol_filter>;
  dailyActiveUsers?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_not?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyTransactionCount?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_not?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_gt?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_lt?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_gte?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_lte?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyDepositCount?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_not?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_gt?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_lt?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_gte?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_lte?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyWithdrawCount?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailySwapCount?: InputMaybe<Scalars['Int']>;
  dailySwapCount_not?: InputMaybe<Scalars['Int']>;
  dailySwapCount_gt?: InputMaybe<Scalars['Int']>;
  dailySwapCount_lt?: InputMaybe<Scalars['Int']>;
  dailySwapCount_gte?: InputMaybe<Scalars['Int']>;
  dailySwapCount_lte?: InputMaybe<Scalars['Int']>;
  dailySwapCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailySwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount?: InputMaybe<Scalars['Int']>;
  totalPoolCount_not?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_filter>>>;
};

export type UsageMetricsDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__totalPoolCount'
  | 'protocol___regenesis'
  | 'dailyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'dailyTransactionCount'
  | 'dailyDepositCount'
  | 'dailyWithdrawCount'
  | 'dailySwapCount'
  | 'totalPoolCount'
  | 'blockNumber'
  | 'timestamp';

export type UsageMetricsHourlySnapshot = {
  /**  { # of hours since Unix epoch time }  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol;
  /**  Number of unique hourly active users  */
  hourlyActiveUsers: Scalars['Int'];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Total number of transactions occurred in an hour. Transactions include all entities that implement the Event interface.  */
  hourlyTransactionCount: Scalars['Int'];
  /**  Total number of deposits (add liquidity) in an hour  */
  hourlyDepositCount: Scalars['Int'];
  /**  Total number of withdrawals (remove liquidity) in an hour  */
  hourlyWithdrawCount: Scalars['Int'];
  /**  Total number of trades (swaps) in an hour  */
  hourlySwapCount: Scalars['Int'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
};

export type UsageMetricsHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<DexAmmProtocol_filter>;
  hourlyActiveUsers?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_not?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_gt?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_lt?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_gte?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_lte?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyTransactionCount?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_not?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyDepositCount?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_not?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyWithdrawCount?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlySwapCount?: InputMaybe<Scalars['Int']>;
  hourlySwapCount_not?: InputMaybe<Scalars['Int']>;
  hourlySwapCount_gt?: InputMaybe<Scalars['Int']>;
  hourlySwapCount_lt?: InputMaybe<Scalars['Int']>;
  hourlySwapCount_gte?: InputMaybe<Scalars['Int']>;
  hourlySwapCount_lte?: InputMaybe<Scalars['Int']>;
  hourlySwapCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlySwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UsageMetricsHourlySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UsageMetricsHourlySnapshot_filter>>>;
};

export type UsageMetricsHourlySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__totalPoolCount'
  | 'protocol___regenesis'
  | 'hourlyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'hourlyTransactionCount'
  | 'hourlyDepositCount'
  | 'hourlyWithdrawCount'
  | 'hourlySwapCount'
  | 'blockNumber'
  | 'timestamp';

export type Withdraw = Event & {
  /**  withdraw-{ Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol;
  /**  Address that received the tokens  */
  to: Scalars['String'];
  /**  Address that sent the tokens  */
  from: Scalars['String'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
  inputTokens: Array<Token>;
  /**  Output token of the pool (not output token of the event/transaction). E.g. the UNI-LP token  */
  outputToken?: Maybe<Token>;
  /**  Amount of input tokens in the token's native unit  */
  inputTokenAmounts: Array<Scalars['BigInt']>;
  /**  Amount of output tokens in the token's native unit  */
  outputTokenAmount?: Maybe<Scalars['BigInt']>;
  /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens withdrawn from a pool)  */
  amountUSD: Scalars['BigDecimal'];
  /**  The pool involving this transaction  */
  pool: LiquidityPool;
};


export type WithdrawinputTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};

export type Withdraw_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<DexAmmProtocol_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokens?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_?: InputMaybe<Token_filter>;
  outputToken?: InputMaybe<Scalars['String']>;
  outputToken_not?: InputMaybe<Scalars['String']>;
  outputToken_gt?: InputMaybe<Scalars['String']>;
  outputToken_lt?: InputMaybe<Scalars['String']>;
  outputToken_gte?: InputMaybe<Scalars['String']>;
  outputToken_lte?: InputMaybe<Scalars['String']>;
  outputToken_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_contains?: InputMaybe<Scalars['String']>;
  outputToken_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_contains?: InputMaybe<Scalars['String']>;
  outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_?: InputMaybe<Token_filter>;
  inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenAmount?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<LiquidityPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
};

export type Withdraw_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__totalPoolCount'
  | 'protocol___regenesis'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'inputTokens'
  | 'outputToken'
  | 'outputToken__id'
  | 'outputToken__name'
  | 'outputToken__symbol'
  | 'outputToken__decimals'
  | 'outputToken__lastPriceUSD'
  | 'outputToken__lastPriceBlockNumber'
  | 'inputTokenAmounts'
  | 'outputTokenAmount'
  | 'amountUSD'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__totalValueLockedUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__outputTokenSupply'
  | 'pool__outputTokenPriceUSD'
  | 'pool__stakedOutputTokenAmount';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/**   Used to keep track of the price of Ether/TVL in USD, pool deposit count, and total unique users  */
export type _HelperStore = {
  id: Scalars['ID'];
  /**  price of ETH/TVL in USD  */
  valueDecimal?: Maybe<Scalars['BigDecimal']>;
  /**  # of deposits, # of unique users  */
  valueInt?: Maybe<Scalars['Int']>;
};

export type _HelperStore_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  valueDecimal?: InputMaybe<Scalars['BigDecimal']>;
  valueDecimal_not?: InputMaybe<Scalars['BigDecimal']>;
  valueDecimal_gt?: InputMaybe<Scalars['BigDecimal']>;
  valueDecimal_lt?: InputMaybe<Scalars['BigDecimal']>;
  valueDecimal_gte?: InputMaybe<Scalars['BigDecimal']>;
  valueDecimal_lte?: InputMaybe<Scalars['BigDecimal']>;
  valueDecimal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  valueDecimal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  valueInt?: InputMaybe<Scalars['Int']>;
  valueInt_not?: InputMaybe<Scalars['Int']>;
  valueInt_gt?: InputMaybe<Scalars['Int']>;
  valueInt_lt?: InputMaybe<Scalars['Int']>;
  valueInt_gte?: InputMaybe<Scalars['Int']>;
  valueInt_lte?: InputMaybe<Scalars['Int']>;
  valueInt_in?: InputMaybe<Array<Scalars['Int']>>;
  valueInt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<_HelperStore_filter>>>;
  or?: InputMaybe<Array<InputMaybe<_HelperStore_filter>>>;
};

export type _HelperStore_orderBy =
  | 'id'
  | 'valueDecimal'
  | 'valueInt';

export type _LiquidityPoolAmount = {
  /**  Smart contract address of the pool  */
  id: Scalars['ID'];
  /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
  inputTokens: Array<Token>;
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigDecimal']>;
  tokenPrices: Array<Scalars['BigDecimal']>;
};


export type _LiquidityPoolAmountinputTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};

export type _LiquidityPoolAmount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  inputTokens?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  inputTokens_?: InputMaybe<Token_filter>;
  inputTokenBalances?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenPrices?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenPrices_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenPrices_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenPrices_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenPrices_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tokenPrices_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<_LiquidityPoolAmount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<_LiquidityPoolAmount_filter>>>;
};

export type _LiquidityPoolAmount_orderBy =
  | 'id'
  | 'inputTokens'
  | 'inputTokenBalances'
  | 'tokenPrices';

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

/**  This is used to keep tract of the derived price of tokens in ethereum and the whitelisted pools to which it belongs */
export type _TokenWhitelist = {
  /**  Token Address  */
  id: Scalars['ID'];
  /**  pools token is in that are white listed for USD pricing  */
  whitelistPools: Array<LiquidityPool>;
};


/**  This is used to keep tract of the derived price of tokens in ethereum and the whitelisted pools to which it belongs */
export type _TokenWhitelistwhitelistPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPool_filter>;
};

export type _TokenWhitelist_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  whitelistPools?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  whitelistPools_?: InputMaybe<LiquidityPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<_TokenWhitelist_filter>>>;
  or?: InputMaybe<Array<InputMaybe<_TokenWhitelist_filter>>>;
};

export type _TokenWhitelist_orderBy =
  | 'id'
  | 'whitelistPools';

  export type QuerySdk = {
      /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  rewardToken: InContextSdkMethod<Query['rewardToken'], QueryrewardTokenArgs, MeshContext>,
  /** null **/
  rewardTokens: InContextSdkMethod<Query['rewardTokens'], QueryrewardTokensArgs, MeshContext>,
  /** null **/
  liquidityPoolFee: InContextSdkMethod<Query['liquidityPoolFee'], QueryliquidityPoolFeeArgs, MeshContext>,
  /** null **/
  liquidityPoolFees: InContextSdkMethod<Query['liquidityPoolFees'], QueryliquidityPoolFeesArgs, MeshContext>,
  /** null **/
  dexAmmProtocol: InContextSdkMethod<Query['dexAmmProtocol'], QuerydexAmmProtocolArgs, MeshContext>,
  /** null **/
  dexAmmProtocols: InContextSdkMethod<Query['dexAmmProtocols'], QuerydexAmmProtocolsArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshot: InContextSdkMethod<Query['usageMetricsDailySnapshot'], QueryusageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshots: InContextSdkMethod<Query['usageMetricsDailySnapshots'], QueryusageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshot: InContextSdkMethod<Query['usageMetricsHourlySnapshot'], QueryusageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshots: InContextSdkMethod<Query['usageMetricsHourlySnapshots'], QueryusageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  financialsDailySnapshot: InContextSdkMethod<Query['financialsDailySnapshot'], QueryfinancialsDailySnapshotArgs, MeshContext>,
  /** null **/
  financialsDailySnapshots: InContextSdkMethod<Query['financialsDailySnapshots'], QueryfinancialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  liquidityPool: InContextSdkMethod<Query['liquidityPool'], QueryliquidityPoolArgs, MeshContext>,
  /** null **/
  liquidityPools: InContextSdkMethod<Query['liquidityPools'], QueryliquidityPoolsArgs, MeshContext>,
  /** null **/
  liquidityPoolDailySnapshot: InContextSdkMethod<Query['liquidityPoolDailySnapshot'], QueryliquidityPoolDailySnapshotArgs, MeshContext>,
  /** null **/
  liquidityPoolDailySnapshots: InContextSdkMethod<Query['liquidityPoolDailySnapshots'], QueryliquidityPoolDailySnapshotsArgs, MeshContext>,
  /** null **/
  liquidityPoolHourlySnapshot: InContextSdkMethod<Query['liquidityPoolHourlySnapshot'], QueryliquidityPoolHourlySnapshotArgs, MeshContext>,
  /** null **/
  liquidityPoolHourlySnapshots: InContextSdkMethod<Query['liquidityPoolHourlySnapshots'], QueryliquidityPoolHourlySnapshotsArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Query['deposit'], QuerydepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Query['deposits'], QuerydepositsArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Query['withdraw'], QuerywithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Query['withdraws'], QuerywithdrawsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Query['swap'], QueryswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Query['swaps'], QueryswapsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>,
  /** null **/
  activeAccount: InContextSdkMethod<Query['activeAccount'], QueryactiveAccountArgs, MeshContext>,
  /** null **/
  activeAccounts: InContextSdkMethod<Query['activeAccounts'], QueryactiveAccountsArgs, MeshContext>,
  /** null **/
  liquidityPoolAmount: InContextSdkMethod<Query['liquidityPoolAmount'], QueryliquidityPoolAmountArgs, MeshContext>,
  /** null **/
  liquidityPoolAmounts: InContextSdkMethod<Query['liquidityPoolAmounts'], QueryliquidityPoolAmountsArgs, MeshContext>,
  /** null **/
  helperStore: InContextSdkMethod<Query['helperStore'], QueryhelperStoreArgs, MeshContext>,
  /** null **/
  helperStores: InContextSdkMethod<Query['helperStores'], QueryhelperStoresArgs, MeshContext>,
  /** null **/
  tokenWhitelist: InContextSdkMethod<Query['tokenWhitelist'], QuerytokenWhitelistArgs, MeshContext>,
  /** null **/
  tokenWhitelists: InContextSdkMethod<Query['tokenWhitelists'], QuerytokenWhitelistsArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<Query['protocol'], QueryprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Query['protocols'], QueryprotocolsArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<Query['event'], QueryeventArgs, MeshContext>,
  /** null **/
  events: InContextSdkMethod<Query['events'], QueryeventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  rewardToken: InContextSdkMethod<Subscription['rewardToken'], SubscriptionrewardTokenArgs, MeshContext>,
  /** null **/
  rewardTokens: InContextSdkMethod<Subscription['rewardTokens'], SubscriptionrewardTokensArgs, MeshContext>,
  /** null **/
  liquidityPoolFee: InContextSdkMethod<Subscription['liquidityPoolFee'], SubscriptionliquidityPoolFeeArgs, MeshContext>,
  /** null **/
  liquidityPoolFees: InContextSdkMethod<Subscription['liquidityPoolFees'], SubscriptionliquidityPoolFeesArgs, MeshContext>,
  /** null **/
  dexAmmProtocol: InContextSdkMethod<Subscription['dexAmmProtocol'], SubscriptiondexAmmProtocolArgs, MeshContext>,
  /** null **/
  dexAmmProtocols: InContextSdkMethod<Subscription['dexAmmProtocols'], SubscriptiondexAmmProtocolsArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshot: InContextSdkMethod<Subscription['usageMetricsDailySnapshot'], SubscriptionusageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshots: InContextSdkMethod<Subscription['usageMetricsDailySnapshots'], SubscriptionusageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshot: InContextSdkMethod<Subscription['usageMetricsHourlySnapshot'], SubscriptionusageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshots: InContextSdkMethod<Subscription['usageMetricsHourlySnapshots'], SubscriptionusageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  financialsDailySnapshot: InContextSdkMethod<Subscription['financialsDailySnapshot'], SubscriptionfinancialsDailySnapshotArgs, MeshContext>,
  /** null **/
  financialsDailySnapshots: InContextSdkMethod<Subscription['financialsDailySnapshots'], SubscriptionfinancialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  liquidityPool: InContextSdkMethod<Subscription['liquidityPool'], SubscriptionliquidityPoolArgs, MeshContext>,
  /** null **/
  liquidityPools: InContextSdkMethod<Subscription['liquidityPools'], SubscriptionliquidityPoolsArgs, MeshContext>,
  /** null **/
  liquidityPoolDailySnapshot: InContextSdkMethod<Subscription['liquidityPoolDailySnapshot'], SubscriptionliquidityPoolDailySnapshotArgs, MeshContext>,
  /** null **/
  liquidityPoolDailySnapshots: InContextSdkMethod<Subscription['liquidityPoolDailySnapshots'], SubscriptionliquidityPoolDailySnapshotsArgs, MeshContext>,
  /** null **/
  liquidityPoolHourlySnapshot: InContextSdkMethod<Subscription['liquidityPoolHourlySnapshot'], SubscriptionliquidityPoolHourlySnapshotArgs, MeshContext>,
  /** null **/
  liquidityPoolHourlySnapshots: InContextSdkMethod<Subscription['liquidityPoolHourlySnapshots'], SubscriptionliquidityPoolHourlySnapshotsArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Subscription['deposit'], SubscriptiondepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Subscription['deposits'], SubscriptiondepositsArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Subscription['withdraw'], SubscriptionwithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Subscription['withdraws'], SubscriptionwithdrawsArgs, MeshContext>,
  /** null **/
  swap: InContextSdkMethod<Subscription['swap'], SubscriptionswapArgs, MeshContext>,
  /** null **/
  swaps: InContextSdkMethod<Subscription['swaps'], SubscriptionswapsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Subscription['account'], SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Subscription['accounts'], SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  activeAccount: InContextSdkMethod<Subscription['activeAccount'], SubscriptionactiveAccountArgs, MeshContext>,
  /** null **/
  activeAccounts: InContextSdkMethod<Subscription['activeAccounts'], SubscriptionactiveAccountsArgs, MeshContext>,
  /** null **/
  liquidityPoolAmount: InContextSdkMethod<Subscription['liquidityPoolAmount'], SubscriptionliquidityPoolAmountArgs, MeshContext>,
  /** null **/
  liquidityPoolAmounts: InContextSdkMethod<Subscription['liquidityPoolAmounts'], SubscriptionliquidityPoolAmountsArgs, MeshContext>,
  /** null **/
  helperStore: InContextSdkMethod<Subscription['helperStore'], SubscriptionhelperStoreArgs, MeshContext>,
  /** null **/
  helperStores: InContextSdkMethod<Subscription['helperStores'], SubscriptionhelperStoresArgs, MeshContext>,
  /** null **/
  tokenWhitelist: InContextSdkMethod<Subscription['tokenWhitelist'], SubscriptiontokenWhitelistArgs, MeshContext>,
  /** null **/
  tokenWhitelists: InContextSdkMethod<Subscription['tokenWhitelists'], SubscriptiontokenWhitelistsArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<Subscription['protocol'], SubscriptionprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Subscription['protocols'], SubscriptionprotocolsArgs, MeshContext>,
  /** null **/
  event: InContextSdkMethod<Subscription['event'], SubscriptioneventArgs, MeshContext>,
  /** null **/
  events: InContextSdkMethod<Subscription['events'], SubscriptioneventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["uniswapv3"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}

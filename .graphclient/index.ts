// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { EnsTypes } from './sources/ENS/types';
import type { Uniswapv3Types } from './sources/uniswapv3/types';
import * as importedModule$0 from "./sources/ENS/introspectionSchema";
import * as importedModule$1 from "./sources/uniswapv3/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type Query = {
  domain?: Maybe<Domain>;
  domains: Array<Domain>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  newOwner?: Maybe<NewOwner>;
  newOwners: Array<NewOwner>;
  newResolver?: Maybe<NewResolver>;
  newResolvers: Array<NewResolver>;
  newTTL?: Maybe<NewTTL>;
  newTTLs: Array<NewTTL>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  registration?: Maybe<Registration>;
  registrations: Array<Registration>;
  nameRegistered?: Maybe<NameRegistered>;
  nameRegistereds: Array<NameRegistered>;
  nameRenewed?: Maybe<NameRenewed>;
  nameReneweds: Array<NameRenewed>;
  nameTransferred?: Maybe<NameTransferred>;
  nameTransferreds: Array<NameTransferred>;
  resolver?: Maybe<Resolver>;
  resolvers: Array<Resolver>;
  addrChanged?: Maybe<AddrChanged>;
  addrChangeds: Array<AddrChanged>;
  multicoinAddrChanged?: Maybe<MulticoinAddrChanged>;
  multicoinAddrChangeds: Array<MulticoinAddrChanged>;
  nameChanged?: Maybe<NameChanged>;
  nameChangeds: Array<NameChanged>;
  abiChanged?: Maybe<AbiChanged>;
  abiChangeds: Array<AbiChanged>;
  pubkeyChanged?: Maybe<PubkeyChanged>;
  pubkeyChangeds: Array<PubkeyChanged>;
  textChanged?: Maybe<TextChanged>;
  textChangeds: Array<TextChanged>;
  contenthashChanged?: Maybe<ContenthashChanged>;
  contenthashChangeds: Array<ContenthashChanged>;
  interfaceChanged?: Maybe<InterfaceChanged>;
  interfaceChangeds: Array<InterfaceChanged>;
  authorisationChanged?: Maybe<AuthorisationChanged>;
  authorisationChangeds: Array<AuthorisationChanged>;
  domainEvent?: Maybe<DomainEvent>;
  domainEvents: Array<DomainEvent>;
  registrationEvent?: Maybe<RegistrationEvent>;
  registrationEvents: Array<RegistrationEvent>;
  resolverEvent?: Maybe<ResolverEvent>;
  resolverEvents: Array<ResolverEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
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
};


export type QuerydomainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewResolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewResolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewResolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewResolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewTTLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewTTLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewTTL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewTTL_filter>;
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


export type QueryregistrationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRegisteredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRegistered_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRegistered_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRenewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRenewed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRenewed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Resolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Resolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymulticoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymulticoinAddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MulticoinAddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MulticoinAddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryabiChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryabiChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AbiChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AbiChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypubkeyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PubkeyChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PubkeyChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytextChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytextChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TextChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TextChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontenthashChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontenthashChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContenthashChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContenthashChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterfaceChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterfaceChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterfaceChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterfaceChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorisationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorisationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorisationChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorisationChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
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

export type Subscription = {
  domain?: Maybe<Domain>;
  domains: Array<Domain>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  newOwner?: Maybe<NewOwner>;
  newOwners: Array<NewOwner>;
  newResolver?: Maybe<NewResolver>;
  newResolvers: Array<NewResolver>;
  newTTL?: Maybe<NewTTL>;
  newTTLs: Array<NewTTL>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  registration?: Maybe<Registration>;
  registrations: Array<Registration>;
  nameRegistered?: Maybe<NameRegistered>;
  nameRegistereds: Array<NameRegistered>;
  nameRenewed?: Maybe<NameRenewed>;
  nameReneweds: Array<NameRenewed>;
  nameTransferred?: Maybe<NameTransferred>;
  nameTransferreds: Array<NameTransferred>;
  resolver?: Maybe<Resolver>;
  resolvers: Array<Resolver>;
  addrChanged?: Maybe<AddrChanged>;
  addrChangeds: Array<AddrChanged>;
  multicoinAddrChanged?: Maybe<MulticoinAddrChanged>;
  multicoinAddrChangeds: Array<MulticoinAddrChanged>;
  nameChanged?: Maybe<NameChanged>;
  nameChangeds: Array<NameChanged>;
  abiChanged?: Maybe<AbiChanged>;
  abiChangeds: Array<AbiChanged>;
  pubkeyChanged?: Maybe<PubkeyChanged>;
  pubkeyChangeds: Array<PubkeyChanged>;
  textChanged?: Maybe<TextChanged>;
  textChangeds: Array<TextChanged>;
  contenthashChanged?: Maybe<ContenthashChanged>;
  contenthashChangeds: Array<ContenthashChanged>;
  interfaceChanged?: Maybe<InterfaceChanged>;
  interfaceChangeds: Array<InterfaceChanged>;
  authorisationChanged?: Maybe<AuthorisationChanged>;
  authorisationChangeds: Array<AuthorisationChanged>;
  domainEvent?: Maybe<DomainEvent>;
  domainEvents: Array<DomainEvent>;
  registrationEvent?: Maybe<RegistrationEvent>;
  registrationEvents: Array<RegistrationEvent>;
  resolverEvent?: Maybe<ResolverEvent>;
  resolverEvents: Array<ResolverEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
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
};


export type SubscriptiondomainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewResolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewResolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewResolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewResolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewTTLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewTTLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewTTL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewTTL_filter>;
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


export type SubscriptionregistrationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRegisteredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRegistered_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRegistered_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRenewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRenewed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRenewed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Resolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Resolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmulticoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmulticoinAddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MulticoinAddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MulticoinAddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionabiChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionabiChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AbiChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AbiChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpubkeyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PubkeyChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PubkeyChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontextChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontextChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TextChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TextChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontenthashChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontenthashChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContenthashChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContenthashChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterfaceChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterfaceChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterfaceChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterfaceChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorisationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorisationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorisationChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorisationChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
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

export type AbiChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  contentType: Scalars['BigInt'];
};

export type AbiChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  contentType?: InputMaybe<Scalars['BigInt']>;
  contentType_not?: InputMaybe<Scalars['BigInt']>;
  contentType_gt?: InputMaybe<Scalars['BigInt']>;
  contentType_lt?: InputMaybe<Scalars['BigInt']>;
  contentType_gte?: InputMaybe<Scalars['BigInt']>;
  contentType_lte?: InputMaybe<Scalars['BigInt']>;
  contentType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contentType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AbiChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AbiChanged_filter>>>;
};

export type AbiChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'contentType';

export type Account = {
  /**  Address of the account  */
  id: Scalars['ID'];
  domains: Array<Domain>;
  registrations?: Maybe<Array<Registration>>;
};


export type AccountdomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
};


export type AccountregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
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
  domains_?: InputMaybe<Domain_filter>;
  registrations_?: InputMaybe<Registration_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};

export type Account_orderBy =
  | 'id'
  | 'domains'
  | 'registrations';

export type AddrChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  addr: Account;
};

export type AddrChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  addr?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AddrChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AddrChanged_filter>>>;
};

export type AddrChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'addr'
  | 'addr__id';

export type AuthorisationChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Scalars['Bytes'];
  target: Scalars['Bytes'];
  isAuthorized: Scalars['Boolean'];
};

export type AuthorisationChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  isAuthorized?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_not?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAuthorized_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuthorisationChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AuthorisationChanged_filter>>>;
};

export type AuthorisationChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'owner'
  | 'target'
  | 'isAuthorized';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type ContenthashChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  hash: Scalars['Bytes'];
};

export type ContenthashChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  hash?: InputMaybe<Scalars['Bytes']>;
  hash_not?: InputMaybe<Scalars['Bytes']>;
  hash_gt?: InputMaybe<Scalars['Bytes']>;
  hash_lt?: InputMaybe<Scalars['Bytes']>;
  hash_gte?: InputMaybe<Scalars['Bytes']>;
  hash_lte?: InputMaybe<Scalars['Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_contains?: InputMaybe<Scalars['Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ContenthashChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ContenthashChanged_filter>>>;
};

export type ContenthashChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'hash';

export type Domain = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  labelName?: Maybe<Scalars['String']>;
  labelhash?: Maybe<Scalars['Bytes']>;
  parent?: Maybe<Domain>;
  subdomains: Array<Domain>;
  resolvedAddress?: Maybe<Account>;
  owner: Account;
  resolver?: Maybe<Resolver>;
  ttl?: Maybe<Scalars['BigInt']>;
  isMigrated: Scalars['Boolean'];
  createdAt: Scalars['BigInt'];
  events: Array<DomainEvent>;
};


export type DomainsubdomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
};


export type DomaineventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
};

export type DomainEvent = {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type DomainEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DomainEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DomainEvent_filter>>>;
};

export type DomainEvent_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'blockNumber'
  | 'transactionID';

export type Domain_filter = {
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
  labelName?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelhash?: InputMaybe<Scalars['Bytes']>;
  labelhash_not?: InputMaybe<Scalars['Bytes']>;
  labelhash_gt?: InputMaybe<Scalars['Bytes']>;
  labelhash_lt?: InputMaybe<Scalars['Bytes']>;
  labelhash_gte?: InputMaybe<Scalars['Bytes']>;
  labelhash_lte?: InputMaybe<Scalars['Bytes']>;
  labelhash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelhash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelhash_contains?: InputMaybe<Scalars['Bytes']>;
  labelhash_not_contains?: InputMaybe<Scalars['Bytes']>;
  parent?: InputMaybe<Scalars['String']>;
  parent_not?: InputMaybe<Scalars['String']>;
  parent_gt?: InputMaybe<Scalars['String']>;
  parent_lt?: InputMaybe<Scalars['String']>;
  parent_gte?: InputMaybe<Scalars['String']>;
  parent_lte?: InputMaybe<Scalars['String']>;
  parent_in?: InputMaybe<Array<Scalars['String']>>;
  parent_not_in?: InputMaybe<Array<Scalars['String']>>;
  parent_contains?: InputMaybe<Scalars['String']>;
  parent_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_not_contains?: InputMaybe<Scalars['String']>;
  parent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_starts_with?: InputMaybe<Scalars['String']>;
  parent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent_not_starts_with?: InputMaybe<Scalars['String']>;
  parent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent_ends_with?: InputMaybe<Scalars['String']>;
  parent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_not_ends_with?: InputMaybe<Scalars['String']>;
  parent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_?: InputMaybe<Domain_filter>;
  subdomains_?: InputMaybe<Domain_filter>;
  resolvedAddress?: InputMaybe<Scalars['String']>;
  resolvedAddress_not?: InputMaybe<Scalars['String']>;
  resolvedAddress_gt?: InputMaybe<Scalars['String']>;
  resolvedAddress_lt?: InputMaybe<Scalars['String']>;
  resolvedAddress_gte?: InputMaybe<Scalars['String']>;
  resolvedAddress_lte?: InputMaybe<Scalars['String']>;
  resolvedAddress_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_?: InputMaybe<Account_filter>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isMigrated?: InputMaybe<Scalars['Boolean']>;
  isMigrated_not?: InputMaybe<Scalars['Boolean']>;
  isMigrated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isMigrated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  events_?: InputMaybe<DomainEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Domain_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Domain_filter>>>;
};

export type Domain_orderBy =
  | 'id'
  | 'name'
  | 'labelName'
  | 'labelhash'
  | 'parent'
  | 'parent__id'
  | 'parent__name'
  | 'parent__labelName'
  | 'parent__labelhash'
  | 'parent__ttl'
  | 'parent__isMigrated'
  | 'parent__createdAt'
  | 'subdomains'
  | 'resolvedAddress'
  | 'resolvedAddress__id'
  | 'owner'
  | 'owner__id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'ttl'
  | 'isMigrated'
  | 'createdAt'
  | 'events';

export type InterfaceChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  interfaceID: Scalars['Bytes'];
  implementer: Scalars['Bytes'];
};

export type InterfaceChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  interfaceID?: InputMaybe<Scalars['Bytes']>;
  interfaceID_not?: InputMaybe<Scalars['Bytes']>;
  interfaceID_gt?: InputMaybe<Scalars['Bytes']>;
  interfaceID_lt?: InputMaybe<Scalars['Bytes']>;
  interfaceID_gte?: InputMaybe<Scalars['Bytes']>;
  interfaceID_lte?: InputMaybe<Scalars['Bytes']>;
  interfaceID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  interfaceID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  interfaceID_contains?: InputMaybe<Scalars['Bytes']>;
  interfaceID_not_contains?: InputMaybe<Scalars['Bytes']>;
  implementer?: InputMaybe<Scalars['Bytes']>;
  implementer_not?: InputMaybe<Scalars['Bytes']>;
  implementer_gt?: InputMaybe<Scalars['Bytes']>;
  implementer_lt?: InputMaybe<Scalars['Bytes']>;
  implementer_gte?: InputMaybe<Scalars['Bytes']>;
  implementer_lte?: InputMaybe<Scalars['Bytes']>;
  implementer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementer_contains?: InputMaybe<Scalars['Bytes']>;
  implementer_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<InterfaceChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<InterfaceChanged_filter>>>;
};

export type InterfaceChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'interfaceID'
  | 'implementer';

export type MulticoinAddrChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  coinType: Scalars['Int'];
  addr: Scalars['Bytes'];
};

export type MulticoinAddrChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  coinType?: InputMaybe<Scalars['Int']>;
  coinType_not?: InputMaybe<Scalars['Int']>;
  coinType_gt?: InputMaybe<Scalars['Int']>;
  coinType_lt?: InputMaybe<Scalars['Int']>;
  coinType_gte?: InputMaybe<Scalars['Int']>;
  coinType_lte?: InputMaybe<Scalars['Int']>;
  coinType_in?: InputMaybe<Array<Scalars['Int']>>;
  coinType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  addr?: InputMaybe<Scalars['Bytes']>;
  addr_not?: InputMaybe<Scalars['Bytes']>;
  addr_gt?: InputMaybe<Scalars['Bytes']>;
  addr_lt?: InputMaybe<Scalars['Bytes']>;
  addr_gte?: InputMaybe<Scalars['Bytes']>;
  addr_lte?: InputMaybe<Scalars['Bytes']>;
  addr_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addr_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addr_contains?: InputMaybe<Scalars['Bytes']>;
  addr_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MulticoinAddrChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MulticoinAddrChanged_filter>>>;
};

export type MulticoinAddrChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'coinType'
  | 'addr';

export type NameChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  name: Scalars['String'];
};

export type NameChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameChanged_filter>>>;
};

export type NameChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'name';

export type NameRegistered = RegistrationEvent & {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  registrant: Account;
  expiryDate: Scalars['BigInt'];
};

export type NameRegistered_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<Account_filter>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameRegistered_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameRegistered_filter>>>;
};

export type NameRegistered_orderBy =
  | 'id'
  | 'registration'
  | 'registration__id'
  | 'registration__registrationDate'
  | 'registration__expiryDate'
  | 'registration__cost'
  | 'registration__labelName'
  | 'blockNumber'
  | 'transactionID'
  | 'registrant'
  | 'registrant__id'
  | 'expiryDate';

export type NameRenewed = RegistrationEvent & {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  expiryDate: Scalars['BigInt'];
};

export type NameRenewed_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameRenewed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameRenewed_filter>>>;
};

export type NameRenewed_orderBy =
  | 'id'
  | 'registration'
  | 'registration__id'
  | 'registration__registrationDate'
  | 'registration__expiryDate'
  | 'registration__cost'
  | 'registration__labelName'
  | 'blockNumber'
  | 'transactionID'
  | 'expiryDate';

export type NameTransferred = RegistrationEvent & {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  newOwner: Account;
};

export type NameTransferred_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner?: InputMaybe<Scalars['String']>;
  newOwner_not?: InputMaybe<Scalars['String']>;
  newOwner_gt?: InputMaybe<Scalars['String']>;
  newOwner_lt?: InputMaybe<Scalars['String']>;
  newOwner_gte?: InputMaybe<Scalars['String']>;
  newOwner_lte?: InputMaybe<Scalars['String']>;
  newOwner_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_contains?: InputMaybe<Scalars['String']>;
  newOwner_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_contains?: InputMaybe<Scalars['String']>;
  newOwner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameTransferred_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameTransferred_filter>>>;
};

export type NameTransferred_orderBy =
  | 'id'
  | 'registration'
  | 'registration__id'
  | 'registration__registrationDate'
  | 'registration__expiryDate'
  | 'registration__cost'
  | 'registration__labelName'
  | 'blockNumber'
  | 'transactionID'
  | 'newOwner'
  | 'newOwner__id';

export type NewOwner = DomainEvent & {
  id: Scalars['ID'];
  parentDomain: Domain;
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Account;
};

export type NewOwner_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  parentDomain?: InputMaybe<Scalars['String']>;
  parentDomain_not?: InputMaybe<Scalars['String']>;
  parentDomain_gt?: InputMaybe<Scalars['String']>;
  parentDomain_lt?: InputMaybe<Scalars['String']>;
  parentDomain_gte?: InputMaybe<Scalars['String']>;
  parentDomain_lte?: InputMaybe<Scalars['String']>;
  parentDomain_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_not_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_contains?: InputMaybe<Scalars['String']>;
  parentDomain_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_?: InputMaybe<Domain_filter>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewOwner_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewOwner_filter>>>;
};

export type NewOwner_orderBy =
  | 'id'
  | 'parentDomain'
  | 'parentDomain__id'
  | 'parentDomain__name'
  | 'parentDomain__labelName'
  | 'parentDomain__labelhash'
  | 'parentDomain__ttl'
  | 'parentDomain__isMigrated'
  | 'parentDomain__createdAt'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'blockNumber'
  | 'transactionID'
  | 'owner'
  | 'owner__id';

export type NewResolver = DomainEvent & {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  resolver: Resolver;
};

export type NewResolver_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewResolver_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewResolver_filter>>>;
};

export type NewResolver_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'blockNumber'
  | 'transactionID'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash';

export type NewTTL = DomainEvent & {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  ttl: Scalars['BigInt'];
};

export type NewTTL_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewTTL_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewTTL_filter>>>;
};

export type NewTTL_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'blockNumber'
  | 'transactionID'
  | 'ttl';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PubkeyChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  x: Scalars['Bytes'];
  y: Scalars['Bytes'];
};

export type PubkeyChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  x?: InputMaybe<Scalars['Bytes']>;
  x_not?: InputMaybe<Scalars['Bytes']>;
  x_gt?: InputMaybe<Scalars['Bytes']>;
  x_lt?: InputMaybe<Scalars['Bytes']>;
  x_gte?: InputMaybe<Scalars['Bytes']>;
  x_lte?: InputMaybe<Scalars['Bytes']>;
  x_in?: InputMaybe<Array<Scalars['Bytes']>>;
  x_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  x_contains?: InputMaybe<Scalars['Bytes']>;
  x_not_contains?: InputMaybe<Scalars['Bytes']>;
  y?: InputMaybe<Scalars['Bytes']>;
  y_not?: InputMaybe<Scalars['Bytes']>;
  y_gt?: InputMaybe<Scalars['Bytes']>;
  y_lt?: InputMaybe<Scalars['Bytes']>;
  y_gte?: InputMaybe<Scalars['Bytes']>;
  y_lte?: InputMaybe<Scalars['Bytes']>;
  y_in?: InputMaybe<Array<Scalars['Bytes']>>;
  y_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  y_contains?: InputMaybe<Scalars['Bytes']>;
  y_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PubkeyChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PubkeyChanged_filter>>>;
};

export type PubkeyChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'x'
  | 'y';

export type Registration = {
  id: Scalars['ID'];
  domain?: Maybe<Domain>;
  registrationDate: Scalars['BigInt'];
  expiryDate: Scalars['BigInt'];
  cost?: Maybe<Scalars['BigInt']>;
  registrant: Account;
  labelName?: Maybe<Scalars['String']>;
  events: Array<RegistrationEvent>;
};


export type RegistrationeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
};

export type RegistrationEvent = {
  id: Scalars['ID'];
  registration: Registration;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type RegistrationEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RegistrationEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RegistrationEvent_filter>>>;
};

export type RegistrationEvent_orderBy =
  | 'id'
  | 'registration'
  | 'registration__id'
  | 'registration__registrationDate'
  | 'registration__expiryDate'
  | 'registration__cost'
  | 'registration__labelName'
  | 'blockNumber'
  | 'transactionID';

export type Registration_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  registrationDate?: InputMaybe<Scalars['BigInt']>;
  registrationDate_not?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_lt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_lte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrationDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost?: InputMaybe<Scalars['BigInt']>;
  cost_not?: InputMaybe<Scalars['BigInt']>;
  cost_gt?: InputMaybe<Scalars['BigInt']>;
  cost_lt?: InputMaybe<Scalars['BigInt']>;
  cost_gte?: InputMaybe<Scalars['BigInt']>;
  cost_lte?: InputMaybe<Scalars['BigInt']>;
  cost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<Account_filter>;
  labelName?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  events_?: InputMaybe<RegistrationEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Registration_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Registration_filter>>>;
};

export type Registration_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'registrationDate'
  | 'expiryDate'
  | 'cost'
  | 'registrant'
  | 'registrant__id'
  | 'labelName'
  | 'events';

export type Resolver = {
  id: Scalars['ID'];
  domain?: Maybe<Domain>;
  address: Scalars['Bytes'];
  addr?: Maybe<Account>;
  contentHash?: Maybe<Scalars['Bytes']>;
  texts?: Maybe<Array<Scalars['String']>>;
  coinTypes?: Maybe<Array<Scalars['Int']>>;
  events: Array<ResolverEvent>;
};


export type ResolvereventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
};

export type ResolverEvent = {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
};

export type ResolverEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ResolverEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ResolverEvent_filter>>>;
};

export type ResolverEvent_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID';

export type Resolver_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  addr?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<Account_filter>;
  contentHash?: InputMaybe<Scalars['Bytes']>;
  contentHash_not?: InputMaybe<Scalars['Bytes']>;
  contentHash_gt?: InputMaybe<Scalars['Bytes']>;
  contentHash_lt?: InputMaybe<Scalars['Bytes']>;
  contentHash_gte?: InputMaybe<Scalars['Bytes']>;
  contentHash_lte?: InputMaybe<Scalars['Bytes']>;
  contentHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contentHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contentHash_contains?: InputMaybe<Scalars['Bytes']>;
  contentHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  texts?: InputMaybe<Array<Scalars['String']>>;
  texts_not?: InputMaybe<Array<Scalars['String']>>;
  texts_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  coinTypes?: InputMaybe<Array<Scalars['Int']>>;
  coinTypes_not?: InputMaybe<Array<Scalars['Int']>>;
  coinTypes_contains?: InputMaybe<Array<Scalars['Int']>>;
  coinTypes_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  coinTypes_not_contains?: InputMaybe<Array<Scalars['Int']>>;
  coinTypes_not_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
  events_?: InputMaybe<ResolverEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Resolver_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Resolver_filter>>>;
};

export type Resolver_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'address'
  | 'addr'
  | 'addr__id'
  | 'contentHash'
  | 'texts'
  | 'coinTypes'
  | 'events';

export type TextChanged = ResolverEvent & {
  id: Scalars['ID'];
  resolver: Resolver;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  key: Scalars['String'];
};

export type TextChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  key?: InputMaybe<Scalars['String']>;
  key_not?: InputMaybe<Scalars['String']>;
  key_gt?: InputMaybe<Scalars['String']>;
  key_lt?: InputMaybe<Scalars['String']>;
  key_gte?: InputMaybe<Scalars['String']>;
  key_lte?: InputMaybe<Scalars['String']>;
  key_in?: InputMaybe<Array<Scalars['String']>>;
  key_not_in?: InputMaybe<Array<Scalars['String']>>;
  key_contains?: InputMaybe<Scalars['String']>;
  key_contains_nocase?: InputMaybe<Scalars['String']>;
  key_not_contains?: InputMaybe<Scalars['String']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']>;
  key_starts_with?: InputMaybe<Scalars['String']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_ends_with?: InputMaybe<Scalars['String']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TextChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TextChanged_filter>>>;
};

export type TextChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'key';

export type Transfer = DomainEvent & {
  id: Scalars['ID'];
  domain: Domain;
  blockNumber: Scalars['Int'];
  transactionID: Scalars['Bytes'];
  owner: Account;
};

export type Transfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
};

export type Transfer_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'blockNumber'
  | 'transactionID'
  | 'owner'
  | 'owner__id';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  AbiChanged: ResolverTypeWrapper<AbiChanged>;
  AbiChanged_filter: AbiChanged_filter;
  AbiChanged_orderBy: AbiChanged_orderBy;
  Account: ResolverTypeWrapper<Account>;
  Account_filter: Account_filter;
  Account_orderBy: Account_orderBy;
  AddrChanged: ResolverTypeWrapper<AddrChanged>;
  AddrChanged_filter: AddrChanged_filter;
  AddrChanged_orderBy: AddrChanged_orderBy;
  AuthorisationChanged: ResolverTypeWrapper<AuthorisationChanged>;
  AuthorisationChanged_filter: AuthorisationChanged_filter;
  AuthorisationChanged_orderBy: AuthorisationChanged_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  ContenthashChanged: ResolverTypeWrapper<ContenthashChanged>;
  ContenthashChanged_filter: ContenthashChanged_filter;
  ContenthashChanged_orderBy: ContenthashChanged_orderBy;
  Domain: ResolverTypeWrapper<Domain>;
  DomainEvent: ResolversTypes['NewOwner'] | ResolversTypes['NewResolver'] | ResolversTypes['NewTTL'] | ResolversTypes['Transfer'];
  DomainEvent_filter: DomainEvent_filter;
  DomainEvent_orderBy: DomainEvent_orderBy;
  Domain_filter: Domain_filter;
  Domain_orderBy: Domain_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  InterfaceChanged: ResolverTypeWrapper<InterfaceChanged>;
  InterfaceChanged_filter: InterfaceChanged_filter;
  InterfaceChanged_orderBy: InterfaceChanged_orderBy;
  MulticoinAddrChanged: ResolverTypeWrapper<MulticoinAddrChanged>;
  MulticoinAddrChanged_filter: MulticoinAddrChanged_filter;
  MulticoinAddrChanged_orderBy: MulticoinAddrChanged_orderBy;
  NameChanged: ResolverTypeWrapper<NameChanged>;
  NameChanged_filter: NameChanged_filter;
  NameChanged_orderBy: NameChanged_orderBy;
  NameRegistered: ResolverTypeWrapper<NameRegistered>;
  NameRegistered_filter: NameRegistered_filter;
  NameRegistered_orderBy: NameRegistered_orderBy;
  NameRenewed: ResolverTypeWrapper<NameRenewed>;
  NameRenewed_filter: NameRenewed_filter;
  NameRenewed_orderBy: NameRenewed_orderBy;
  NameTransferred: ResolverTypeWrapper<NameTransferred>;
  NameTransferred_filter: NameTransferred_filter;
  NameTransferred_orderBy: NameTransferred_orderBy;
  NewOwner: ResolverTypeWrapper<NewOwner>;
  NewOwner_filter: NewOwner_filter;
  NewOwner_orderBy: NewOwner_orderBy;
  NewResolver: ResolverTypeWrapper<NewResolver>;
  NewResolver_filter: NewResolver_filter;
  NewResolver_orderBy: NewResolver_orderBy;
  NewTTL: ResolverTypeWrapper<NewTTL>;
  NewTTL_filter: NewTTL_filter;
  NewTTL_orderBy: NewTTL_orderBy;
  OrderDirection: OrderDirection;
  PubkeyChanged: ResolverTypeWrapper<PubkeyChanged>;
  PubkeyChanged_filter: PubkeyChanged_filter;
  PubkeyChanged_orderBy: PubkeyChanged_orderBy;
  Registration: ResolverTypeWrapper<Registration>;
  RegistrationEvent: ResolversTypes['NameRegistered'] | ResolversTypes['NameRenewed'] | ResolversTypes['NameTransferred'];
  RegistrationEvent_filter: RegistrationEvent_filter;
  RegistrationEvent_orderBy: RegistrationEvent_orderBy;
  Registration_filter: Registration_filter;
  Registration_orderBy: Registration_orderBy;
  Resolver: ResolverTypeWrapper<Resolver>;
  ResolverEvent: ResolversTypes['AbiChanged'] | ResolversTypes['AddrChanged'] | ResolversTypes['AuthorisationChanged'] | ResolversTypes['ContenthashChanged'] | ResolversTypes['InterfaceChanged'] | ResolversTypes['MulticoinAddrChanged'] | ResolversTypes['NameChanged'] | ResolversTypes['PubkeyChanged'] | ResolversTypes['TextChanged'];
  ResolverEvent_filter: ResolverEvent_filter;
  ResolverEvent_orderBy: ResolverEvent_orderBy;
  Resolver_filter: Resolver_filter;
  Resolver_orderBy: Resolver_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  TextChanged: ResolverTypeWrapper<TextChanged>;
  TextChanged_filter: TextChanged_filter;
  TextChanged_orderBy: TextChanged_orderBy;
  Transfer: ResolverTypeWrapper<Transfer>;
  Transfer_filter: Transfer_filter;
  Transfer_orderBy: Transfer_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  ActiveAccount: ResolverTypeWrapper<ActiveAccount>;
  ActiveAccount_filter: ActiveAccount_filter;
  ActiveAccount_orderBy: ActiveAccount_orderBy;
  Deposit: ResolverTypeWrapper<Deposit>;
  Deposit_filter: Deposit_filter;
  Deposit_orderBy: Deposit_orderBy;
  DexAmmProtocol: ResolverTypeWrapper<DexAmmProtocol>;
  DexAmmProtocol_filter: DexAmmProtocol_filter;
  DexAmmProtocol_orderBy: DexAmmProtocol_orderBy;
  Event: ResolversTypes['Deposit'] | ResolversTypes['Swap'] | ResolversTypes['Withdraw'];
  Event_filter: Event_filter;
  Event_orderBy: Event_orderBy;
  FinancialsDailySnapshot: ResolverTypeWrapper<FinancialsDailySnapshot>;
  FinancialsDailySnapshot_filter: FinancialsDailySnapshot_filter;
  FinancialsDailySnapshot_orderBy: FinancialsDailySnapshot_orderBy;
  LiquidityPool: ResolverTypeWrapper<LiquidityPool>;
  LiquidityPoolDailySnapshot: ResolverTypeWrapper<LiquidityPoolDailySnapshot>;
  LiquidityPoolDailySnapshot_filter: LiquidityPoolDailySnapshot_filter;
  LiquidityPoolDailySnapshot_orderBy: LiquidityPoolDailySnapshot_orderBy;
  LiquidityPoolFee: ResolverTypeWrapper<LiquidityPoolFee>;
  LiquidityPoolFeeType: LiquidityPoolFeeType;
  LiquidityPoolFee_filter: LiquidityPoolFee_filter;
  LiquidityPoolFee_orderBy: LiquidityPoolFee_orderBy;
  LiquidityPoolHourlySnapshot: ResolverTypeWrapper<LiquidityPoolHourlySnapshot>;
  LiquidityPoolHourlySnapshot_filter: LiquidityPoolHourlySnapshot_filter;
  LiquidityPoolHourlySnapshot_orderBy: LiquidityPoolHourlySnapshot_orderBy;
  LiquidityPool_filter: LiquidityPool_filter;
  LiquidityPool_orderBy: LiquidityPool_orderBy;
  Network: Network;
  Protocol: ResolversTypes['DexAmmProtocol'];
  ProtocolType: ProtocolType;
  Protocol_filter: Protocol_filter;
  Protocol_orderBy: Protocol_orderBy;
  RewardToken: ResolverTypeWrapper<RewardToken>;
  RewardTokenType: RewardTokenType;
  RewardToken_filter: RewardToken_filter;
  RewardToken_orderBy: RewardToken_orderBy;
  Swap: ResolverTypeWrapper<Swap>;
  Swap_filter: Swap_filter;
  Swap_orderBy: Swap_orderBy;
  Token: ResolverTypeWrapper<Token>;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  UsageMetricsDailySnapshot: ResolverTypeWrapper<UsageMetricsDailySnapshot>;
  UsageMetricsDailySnapshot_filter: UsageMetricsDailySnapshot_filter;
  UsageMetricsDailySnapshot_orderBy: UsageMetricsDailySnapshot_orderBy;
  UsageMetricsHourlySnapshot: ResolverTypeWrapper<UsageMetricsHourlySnapshot>;
  UsageMetricsHourlySnapshot_filter: UsageMetricsHourlySnapshot_filter;
  UsageMetricsHourlySnapshot_orderBy: UsageMetricsHourlySnapshot_orderBy;
  Withdraw: ResolverTypeWrapper<Withdraw>;
  Withdraw_filter: Withdraw_filter;
  Withdraw_orderBy: Withdraw_orderBy;
  _HelperStore: ResolverTypeWrapper<_HelperStore>;
  _HelperStore_filter: _HelperStore_filter;
  _HelperStore_orderBy: _HelperStore_orderBy;
  _LiquidityPoolAmount: ResolverTypeWrapper<_LiquidityPoolAmount>;
  _LiquidityPoolAmount_filter: _LiquidityPoolAmount_filter;
  _LiquidityPoolAmount_orderBy: _LiquidityPoolAmount_orderBy;
  _TokenWhitelist: ResolverTypeWrapper<_TokenWhitelist>;
  _TokenWhitelist_filter: _TokenWhitelist_filter;
  _TokenWhitelist_orderBy: _TokenWhitelist_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  AbiChanged: AbiChanged;
  AbiChanged_filter: AbiChanged_filter;
  Account: Account;
  Account_filter: Account_filter;
  AddrChanged: AddrChanged;
  AddrChanged_filter: AddrChanged_filter;
  AuthorisationChanged: AuthorisationChanged;
  AuthorisationChanged_filter: AuthorisationChanged_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  ContenthashChanged: ContenthashChanged;
  ContenthashChanged_filter: ContenthashChanged_filter;
  Domain: Domain;
  DomainEvent: ResolversParentTypes['NewOwner'] | ResolversParentTypes['NewResolver'] | ResolversParentTypes['NewTTL'] | ResolversParentTypes['Transfer'];
  DomainEvent_filter: DomainEvent_filter;
  Domain_filter: Domain_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  InterfaceChanged: InterfaceChanged;
  InterfaceChanged_filter: InterfaceChanged_filter;
  MulticoinAddrChanged: MulticoinAddrChanged;
  MulticoinAddrChanged_filter: MulticoinAddrChanged_filter;
  NameChanged: NameChanged;
  NameChanged_filter: NameChanged_filter;
  NameRegistered: NameRegistered;
  NameRegistered_filter: NameRegistered_filter;
  NameRenewed: NameRenewed;
  NameRenewed_filter: NameRenewed_filter;
  NameTransferred: NameTransferred;
  NameTransferred_filter: NameTransferred_filter;
  NewOwner: NewOwner;
  NewOwner_filter: NewOwner_filter;
  NewResolver: NewResolver;
  NewResolver_filter: NewResolver_filter;
  NewTTL: NewTTL;
  NewTTL_filter: NewTTL_filter;
  PubkeyChanged: PubkeyChanged;
  PubkeyChanged_filter: PubkeyChanged_filter;
  Registration: Registration;
  RegistrationEvent: ResolversParentTypes['NameRegistered'] | ResolversParentTypes['NameRenewed'] | ResolversParentTypes['NameTransferred'];
  RegistrationEvent_filter: RegistrationEvent_filter;
  Registration_filter: Registration_filter;
  Resolver: Resolver;
  ResolverEvent: ResolversParentTypes['AbiChanged'] | ResolversParentTypes['AddrChanged'] | ResolversParentTypes['AuthorisationChanged'] | ResolversParentTypes['ContenthashChanged'] | ResolversParentTypes['InterfaceChanged'] | ResolversParentTypes['MulticoinAddrChanged'] | ResolversParentTypes['NameChanged'] | ResolversParentTypes['PubkeyChanged'] | ResolversParentTypes['TextChanged'];
  ResolverEvent_filter: ResolverEvent_filter;
  Resolver_filter: Resolver_filter;
  String: Scalars['String'];
  TextChanged: TextChanged;
  TextChanged_filter: TextChanged_filter;
  Transfer: Transfer;
  Transfer_filter: Transfer_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  ActiveAccount: ActiveAccount;
  ActiveAccount_filter: ActiveAccount_filter;
  Deposit: Deposit;
  Deposit_filter: Deposit_filter;
  DexAmmProtocol: DexAmmProtocol;
  DexAmmProtocol_filter: DexAmmProtocol_filter;
  Event: ResolversParentTypes['Deposit'] | ResolversParentTypes['Swap'] | ResolversParentTypes['Withdraw'];
  Event_filter: Event_filter;
  FinancialsDailySnapshot: FinancialsDailySnapshot;
  FinancialsDailySnapshot_filter: FinancialsDailySnapshot_filter;
  LiquidityPool: LiquidityPool;
  LiquidityPoolDailySnapshot: LiquidityPoolDailySnapshot;
  LiquidityPoolDailySnapshot_filter: LiquidityPoolDailySnapshot_filter;
  LiquidityPoolFee: LiquidityPoolFee;
  LiquidityPoolFee_filter: LiquidityPoolFee_filter;
  LiquidityPoolHourlySnapshot: LiquidityPoolHourlySnapshot;
  LiquidityPoolHourlySnapshot_filter: LiquidityPoolHourlySnapshot_filter;
  LiquidityPool_filter: LiquidityPool_filter;
  Protocol: ResolversParentTypes['DexAmmProtocol'];
  Protocol_filter: Protocol_filter;
  RewardToken: RewardToken;
  RewardToken_filter: RewardToken_filter;
  Swap: Swap;
  Swap_filter: Swap_filter;
  Token: Token;
  Token_filter: Token_filter;
  UsageMetricsDailySnapshot: UsageMetricsDailySnapshot;
  UsageMetricsDailySnapshot_filter: UsageMetricsDailySnapshot_filter;
  UsageMetricsHourlySnapshot: UsageMetricsHourlySnapshot;
  UsageMetricsHourlySnapshot_filter: UsageMetricsHourlySnapshot_filter;
  Withdraw: Withdraw;
  Withdraw_filter: Withdraw_filter;
  _HelperStore: _HelperStore;
  _HelperStore_filter: _HelperStore_filter;
  _LiquidityPoolAmount: _LiquidityPoolAmount;
  _LiquidityPoolAmount_filter: _LiquidityPoolAmount_filter;
  _TokenWhitelist: _TokenWhitelist;
  _TokenWhitelist_filter: _TokenWhitelist_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  domain?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<QuerydomainArgs, 'id' | 'subgraphError'>>;
  domains?: Resolver<Array<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<QuerydomainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransferArgs, 'id' | 'subgraphError'>>;
  transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newOwner?: Resolver<Maybe<ResolversTypes['NewOwner']>, ParentType, ContextType, RequireFields<QuerynewOwnerArgs, 'id' | 'subgraphError'>>;
  newOwners?: Resolver<Array<ResolversTypes['NewOwner']>, ParentType, ContextType, RequireFields<QuerynewOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newResolver?: Resolver<Maybe<ResolversTypes['NewResolver']>, ParentType, ContextType, RequireFields<QuerynewResolverArgs, 'id' | 'subgraphError'>>;
  newResolvers?: Resolver<Array<ResolversTypes['NewResolver']>, ParentType, ContextType, RequireFields<QuerynewResolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  newTTL?: Resolver<Maybe<ResolversTypes['NewTTL']>, ParentType, ContextType, RequireFields<QuerynewTTLArgs, 'id' | 'subgraphError'>>;
  newTTLs?: Resolver<Array<ResolversTypes['NewTTL']>, ParentType, ContextType, RequireFields<QuerynewTTLsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registration?: Resolver<Maybe<ResolversTypes['Registration']>, ParentType, ContextType, RequireFields<QueryregistrationArgs, 'id' | 'subgraphError'>>;
  registrations?: Resolver<Array<ResolversTypes['Registration']>, ParentType, ContextType, RequireFields<QueryregistrationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRegistered?: Resolver<Maybe<ResolversTypes['NameRegistered']>, ParentType, ContextType, RequireFields<QuerynameRegisteredArgs, 'id' | 'subgraphError'>>;
  nameRegistereds?: Resolver<Array<ResolversTypes['NameRegistered']>, ParentType, ContextType, RequireFields<QuerynameRegisteredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRenewed?: Resolver<Maybe<ResolversTypes['NameRenewed']>, ParentType, ContextType, RequireFields<QuerynameRenewedArgs, 'id' | 'subgraphError'>>;
  nameReneweds?: Resolver<Array<ResolversTypes['NameRenewed']>, ParentType, ContextType, RequireFields<QuerynameRenewedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameTransferred?: Resolver<Maybe<ResolversTypes['NameTransferred']>, ParentType, ContextType, RequireFields<QuerynameTransferredArgs, 'id' | 'subgraphError'>>;
  nameTransferreds?: Resolver<Array<ResolversTypes['NameTransferred']>, ParentType, ContextType, RequireFields<QuerynameTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolver?: Resolver<Maybe<ResolversTypes['Resolver']>, ParentType, ContextType, RequireFields<QueryresolverArgs, 'id' | 'subgraphError'>>;
  resolvers?: Resolver<Array<ResolversTypes['Resolver']>, ParentType, ContextType, RequireFields<QueryresolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  addrChanged?: Resolver<Maybe<ResolversTypes['AddrChanged']>, ParentType, ContextType, RequireFields<QueryaddrChangedArgs, 'id' | 'subgraphError'>>;
  addrChangeds?: Resolver<Array<ResolversTypes['AddrChanged']>, ParentType, ContextType, RequireFields<QueryaddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  multicoinAddrChanged?: Resolver<Maybe<ResolversTypes['MulticoinAddrChanged']>, ParentType, ContextType, RequireFields<QuerymulticoinAddrChangedArgs, 'id' | 'subgraphError'>>;
  multicoinAddrChangeds?: Resolver<Array<ResolversTypes['MulticoinAddrChanged']>, ParentType, ContextType, RequireFields<QuerymulticoinAddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameChanged?: Resolver<Maybe<ResolversTypes['NameChanged']>, ParentType, ContextType, RequireFields<QuerynameChangedArgs, 'id' | 'subgraphError'>>;
  nameChangeds?: Resolver<Array<ResolversTypes['NameChanged']>, ParentType, ContextType, RequireFields<QuerynameChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  abiChanged?: Resolver<Maybe<ResolversTypes['AbiChanged']>, ParentType, ContextType, RequireFields<QueryabiChangedArgs, 'id' | 'subgraphError'>>;
  abiChangeds?: Resolver<Array<ResolversTypes['AbiChanged']>, ParentType, ContextType, RequireFields<QueryabiChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pubkeyChanged?: Resolver<Maybe<ResolversTypes['PubkeyChanged']>, ParentType, ContextType, RequireFields<QuerypubkeyChangedArgs, 'id' | 'subgraphError'>>;
  pubkeyChangeds?: Resolver<Array<ResolversTypes['PubkeyChanged']>, ParentType, ContextType, RequireFields<QuerypubkeyChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  textChanged?: Resolver<Maybe<ResolversTypes['TextChanged']>, ParentType, ContextType, RequireFields<QuerytextChangedArgs, 'id' | 'subgraphError'>>;
  textChangeds?: Resolver<Array<ResolversTypes['TextChanged']>, ParentType, ContextType, RequireFields<QuerytextChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  contenthashChanged?: Resolver<Maybe<ResolversTypes['ContenthashChanged']>, ParentType, ContextType, RequireFields<QuerycontenthashChangedArgs, 'id' | 'subgraphError'>>;
  contenthashChangeds?: Resolver<Array<ResolversTypes['ContenthashChanged']>, ParentType, ContextType, RequireFields<QuerycontenthashChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  interfaceChanged?: Resolver<Maybe<ResolversTypes['InterfaceChanged']>, ParentType, ContextType, RequireFields<QueryinterfaceChangedArgs, 'id' | 'subgraphError'>>;
  interfaceChangeds?: Resolver<Array<ResolversTypes['InterfaceChanged']>, ParentType, ContextType, RequireFields<QueryinterfaceChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  authorisationChanged?: Resolver<Maybe<ResolversTypes['AuthorisationChanged']>, ParentType, ContextType, RequireFields<QueryauthorisationChangedArgs, 'id' | 'subgraphError'>>;
  authorisationChangeds?: Resolver<Array<ResolversTypes['AuthorisationChanged']>, ParentType, ContextType, RequireFields<QueryauthorisationChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  domainEvent?: Resolver<Maybe<ResolversTypes['DomainEvent']>, ParentType, ContextType, RequireFields<QuerydomainEventArgs, 'id' | 'subgraphError'>>;
  domainEvents?: Resolver<Array<ResolversTypes['DomainEvent']>, ParentType, ContextType, RequireFields<QuerydomainEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registrationEvent?: Resolver<Maybe<ResolversTypes['RegistrationEvent']>, ParentType, ContextType, RequireFields<QueryregistrationEventArgs, 'id' | 'subgraphError'>>;
  registrationEvents?: Resolver<Array<ResolversTypes['RegistrationEvent']>, ParentType, ContextType, RequireFields<QueryregistrationEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolverEvent?: Resolver<Maybe<ResolversTypes['ResolverEvent']>, ParentType, ContextType, RequireFields<QueryresolverEventArgs, 'id' | 'subgraphError'>>;
  resolverEvents?: Resolver<Array<ResolversTypes['ResolverEvent']>, ParentType, ContextType, RequireFields<QueryresolverEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  rewardToken?: Resolver<Maybe<ResolversTypes['RewardToken']>, ParentType, ContextType, RequireFields<QueryrewardTokenArgs, 'id' | 'subgraphError'>>;
  rewardTokens?: Resolver<Array<ResolversTypes['RewardToken']>, ParentType, ContextType, RequireFields<QueryrewardTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPoolFee?: Resolver<Maybe<ResolversTypes['LiquidityPoolFee']>, ParentType, ContextType, RequireFields<QueryliquidityPoolFeeArgs, 'id' | 'subgraphError'>>;
  liquidityPoolFees?: Resolver<Array<ResolversTypes['LiquidityPoolFee']>, ParentType, ContextType, RequireFields<QueryliquidityPoolFeesArgs, 'skip' | 'first' | 'subgraphError'>>;
  dexAmmProtocol?: Resolver<Maybe<ResolversTypes['DexAmmProtocol']>, ParentType, ContextType, RequireFields<QuerydexAmmProtocolArgs, 'id' | 'subgraphError'>>;
  dexAmmProtocols?: Resolver<Array<ResolversTypes['DexAmmProtocol']>, ParentType, ContextType, RequireFields<QuerydexAmmProtocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usageMetricsDailySnapshot?: Resolver<Maybe<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsDailySnapshotArgs, 'id' | 'subgraphError'>>;
  usageMetricsDailySnapshots?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usageMetricsHourlySnapshot?: Resolver<Maybe<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsHourlySnapshotArgs, 'id' | 'subgraphError'>>;
  usageMetricsHourlySnapshots?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  financialsDailySnapshot?: Resolver<Maybe<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryfinancialsDailySnapshotArgs, 'id' | 'subgraphError'>>;
  financialsDailySnapshots?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryfinancialsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPool?: Resolver<Maybe<ResolversTypes['LiquidityPool']>, ParentType, ContextType, RequireFields<QueryliquidityPoolArgs, 'id' | 'subgraphError'>>;
  liquidityPools?: Resolver<Array<ResolversTypes['LiquidityPool']>, ParentType, ContextType, RequireFields<QueryliquidityPoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPoolDailySnapshot?: Resolver<Maybe<ResolversTypes['LiquidityPoolDailySnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPoolDailySnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPoolDailySnapshots?: Resolver<Array<ResolversTypes['LiquidityPoolDailySnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPoolDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPoolHourlySnapshot?: Resolver<Maybe<ResolversTypes['LiquidityPoolHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPoolHourlySnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPoolHourlySnapshots?: Resolver<Array<ResolversTypes['LiquidityPoolHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryliquidityPoolHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposit?: Resolver<Maybe<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositArgs, 'id' | 'subgraphError'>>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdraw?: Resolver<Maybe<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawArgs, 'id' | 'subgraphError'>>;
  withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapArgs, 'id' | 'subgraphError'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  activeAccount?: Resolver<Maybe<ResolversTypes['ActiveAccount']>, ParentType, ContextType, RequireFields<QueryactiveAccountArgs, 'id' | 'subgraphError'>>;
  activeAccounts?: Resolver<Array<ResolversTypes['ActiveAccount']>, ParentType, ContextType, RequireFields<QueryactiveAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPoolAmount?: Resolver<Maybe<ResolversTypes['_LiquidityPoolAmount']>, ParentType, ContextType, RequireFields<QueryliquidityPoolAmountArgs, 'id' | 'subgraphError'>>;
  liquidityPoolAmounts?: Resolver<Array<ResolversTypes['_LiquidityPoolAmount']>, ParentType, ContextType, RequireFields<QueryliquidityPoolAmountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  helperStore?: Resolver<Maybe<ResolversTypes['_HelperStore']>, ParentType, ContextType, RequireFields<QueryhelperStoreArgs, 'id' | 'subgraphError'>>;
  helperStores?: Resolver<Array<ResolversTypes['_HelperStore']>, ParentType, ContextType, RequireFields<QueryhelperStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenWhitelist?: Resolver<Maybe<ResolversTypes['_TokenWhitelist']>, ParentType, ContextType, RequireFields<QuerytokenWhitelistArgs, 'id' | 'subgraphError'>>;
  tokenWhitelists?: Resolver<Array<ResolversTypes['_TokenWhitelist']>, ParentType, ContextType, RequireFields<QuerytokenWhitelistsArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocol?: Resolver<Maybe<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolArgs, 'id' | 'subgraphError'>>;
  protocols?: Resolver<Array<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventArgs, 'id' | 'subgraphError'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  domain?: SubscriptionResolver<Maybe<ResolversTypes['Domain']>, "domain", ParentType, ContextType, RequireFields<SubscriptiondomainArgs, 'id' | 'subgraphError'>>;
  domains?: SubscriptionResolver<Array<ResolversTypes['Domain']>, "domains", ParentType, ContextType, RequireFields<SubscriptiondomainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: SubscriptionResolver<Maybe<ResolversTypes['Transfer']>, "transfer", ParentType, ContextType, RequireFields<SubscriptiontransferArgs, 'id' | 'subgraphError'>>;
  transfers?: SubscriptionResolver<Array<ResolversTypes['Transfer']>, "transfers", ParentType, ContextType, RequireFields<SubscriptiontransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newOwner?: SubscriptionResolver<Maybe<ResolversTypes['NewOwner']>, "newOwner", ParentType, ContextType, RequireFields<SubscriptionnewOwnerArgs, 'id' | 'subgraphError'>>;
  newOwners?: SubscriptionResolver<Array<ResolversTypes['NewOwner']>, "newOwners", ParentType, ContextType, RequireFields<SubscriptionnewOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newResolver?: SubscriptionResolver<Maybe<ResolversTypes['NewResolver']>, "newResolver", ParentType, ContextType, RequireFields<SubscriptionnewResolverArgs, 'id' | 'subgraphError'>>;
  newResolvers?: SubscriptionResolver<Array<ResolversTypes['NewResolver']>, "newResolvers", ParentType, ContextType, RequireFields<SubscriptionnewResolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  newTTL?: SubscriptionResolver<Maybe<ResolversTypes['NewTTL']>, "newTTL", ParentType, ContextType, RequireFields<SubscriptionnewTTLArgs, 'id' | 'subgraphError'>>;
  newTTLs?: SubscriptionResolver<Array<ResolversTypes['NewTTL']>, "newTTLs", ParentType, ContextType, RequireFields<SubscriptionnewTTLsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registration?: SubscriptionResolver<Maybe<ResolversTypes['Registration']>, "registration", ParentType, ContextType, RequireFields<SubscriptionregistrationArgs, 'id' | 'subgraphError'>>;
  registrations?: SubscriptionResolver<Array<ResolversTypes['Registration']>, "registrations", ParentType, ContextType, RequireFields<SubscriptionregistrationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRegistered?: SubscriptionResolver<Maybe<ResolversTypes['NameRegistered']>, "nameRegistered", ParentType, ContextType, RequireFields<SubscriptionnameRegisteredArgs, 'id' | 'subgraphError'>>;
  nameRegistereds?: SubscriptionResolver<Array<ResolversTypes['NameRegistered']>, "nameRegistereds", ParentType, ContextType, RequireFields<SubscriptionnameRegisteredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRenewed?: SubscriptionResolver<Maybe<ResolversTypes['NameRenewed']>, "nameRenewed", ParentType, ContextType, RequireFields<SubscriptionnameRenewedArgs, 'id' | 'subgraphError'>>;
  nameReneweds?: SubscriptionResolver<Array<ResolversTypes['NameRenewed']>, "nameReneweds", ParentType, ContextType, RequireFields<SubscriptionnameRenewedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameTransferred?: SubscriptionResolver<Maybe<ResolversTypes['NameTransferred']>, "nameTransferred", ParentType, ContextType, RequireFields<SubscriptionnameTransferredArgs, 'id' | 'subgraphError'>>;
  nameTransferreds?: SubscriptionResolver<Array<ResolversTypes['NameTransferred']>, "nameTransferreds", ParentType, ContextType, RequireFields<SubscriptionnameTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolver?: SubscriptionResolver<Maybe<ResolversTypes['Resolver']>, "resolver", ParentType, ContextType, RequireFields<SubscriptionresolverArgs, 'id' | 'subgraphError'>>;
  resolvers?: SubscriptionResolver<Array<ResolversTypes['Resolver']>, "resolvers", ParentType, ContextType, RequireFields<SubscriptionresolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  addrChanged?: SubscriptionResolver<Maybe<ResolversTypes['AddrChanged']>, "addrChanged", ParentType, ContextType, RequireFields<SubscriptionaddrChangedArgs, 'id' | 'subgraphError'>>;
  addrChangeds?: SubscriptionResolver<Array<ResolversTypes['AddrChanged']>, "addrChangeds", ParentType, ContextType, RequireFields<SubscriptionaddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  multicoinAddrChanged?: SubscriptionResolver<Maybe<ResolversTypes['MulticoinAddrChanged']>, "multicoinAddrChanged", ParentType, ContextType, RequireFields<SubscriptionmulticoinAddrChangedArgs, 'id' | 'subgraphError'>>;
  multicoinAddrChangeds?: SubscriptionResolver<Array<ResolversTypes['MulticoinAddrChanged']>, "multicoinAddrChangeds", ParentType, ContextType, RequireFields<SubscriptionmulticoinAddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameChanged?: SubscriptionResolver<Maybe<ResolversTypes['NameChanged']>, "nameChanged", ParentType, ContextType, RequireFields<SubscriptionnameChangedArgs, 'id' | 'subgraphError'>>;
  nameChangeds?: SubscriptionResolver<Array<ResolversTypes['NameChanged']>, "nameChangeds", ParentType, ContextType, RequireFields<SubscriptionnameChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  abiChanged?: SubscriptionResolver<Maybe<ResolversTypes['AbiChanged']>, "abiChanged", ParentType, ContextType, RequireFields<SubscriptionabiChangedArgs, 'id' | 'subgraphError'>>;
  abiChangeds?: SubscriptionResolver<Array<ResolversTypes['AbiChanged']>, "abiChangeds", ParentType, ContextType, RequireFields<SubscriptionabiChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pubkeyChanged?: SubscriptionResolver<Maybe<ResolversTypes['PubkeyChanged']>, "pubkeyChanged", ParentType, ContextType, RequireFields<SubscriptionpubkeyChangedArgs, 'id' | 'subgraphError'>>;
  pubkeyChangeds?: SubscriptionResolver<Array<ResolversTypes['PubkeyChanged']>, "pubkeyChangeds", ParentType, ContextType, RequireFields<SubscriptionpubkeyChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  textChanged?: SubscriptionResolver<Maybe<ResolversTypes['TextChanged']>, "textChanged", ParentType, ContextType, RequireFields<SubscriptiontextChangedArgs, 'id' | 'subgraphError'>>;
  textChangeds?: SubscriptionResolver<Array<ResolversTypes['TextChanged']>, "textChangeds", ParentType, ContextType, RequireFields<SubscriptiontextChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  contenthashChanged?: SubscriptionResolver<Maybe<ResolversTypes['ContenthashChanged']>, "contenthashChanged", ParentType, ContextType, RequireFields<SubscriptioncontenthashChangedArgs, 'id' | 'subgraphError'>>;
  contenthashChangeds?: SubscriptionResolver<Array<ResolversTypes['ContenthashChanged']>, "contenthashChangeds", ParentType, ContextType, RequireFields<SubscriptioncontenthashChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  interfaceChanged?: SubscriptionResolver<Maybe<ResolversTypes['InterfaceChanged']>, "interfaceChanged", ParentType, ContextType, RequireFields<SubscriptioninterfaceChangedArgs, 'id' | 'subgraphError'>>;
  interfaceChangeds?: SubscriptionResolver<Array<ResolversTypes['InterfaceChanged']>, "interfaceChangeds", ParentType, ContextType, RequireFields<SubscriptioninterfaceChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  authorisationChanged?: SubscriptionResolver<Maybe<ResolversTypes['AuthorisationChanged']>, "authorisationChanged", ParentType, ContextType, RequireFields<SubscriptionauthorisationChangedArgs, 'id' | 'subgraphError'>>;
  authorisationChangeds?: SubscriptionResolver<Array<ResolversTypes['AuthorisationChanged']>, "authorisationChangeds", ParentType, ContextType, RequireFields<SubscriptionauthorisationChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  domainEvent?: SubscriptionResolver<Maybe<ResolversTypes['DomainEvent']>, "domainEvent", ParentType, ContextType, RequireFields<SubscriptiondomainEventArgs, 'id' | 'subgraphError'>>;
  domainEvents?: SubscriptionResolver<Array<ResolversTypes['DomainEvent']>, "domainEvents", ParentType, ContextType, RequireFields<SubscriptiondomainEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registrationEvent?: SubscriptionResolver<Maybe<ResolversTypes['RegistrationEvent']>, "registrationEvent", ParentType, ContextType, RequireFields<SubscriptionregistrationEventArgs, 'id' | 'subgraphError'>>;
  registrationEvents?: SubscriptionResolver<Array<ResolversTypes['RegistrationEvent']>, "registrationEvents", ParentType, ContextType, RequireFields<SubscriptionregistrationEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolverEvent?: SubscriptionResolver<Maybe<ResolversTypes['ResolverEvent']>, "resolverEvent", ParentType, ContextType, RequireFields<SubscriptionresolverEventArgs, 'id' | 'subgraphError'>>;
  resolverEvents?: SubscriptionResolver<Array<ResolversTypes['ResolverEvent']>, "resolverEvents", ParentType, ContextType, RequireFields<SubscriptionresolverEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  rewardToken?: SubscriptionResolver<Maybe<ResolversTypes['RewardToken']>, "rewardToken", ParentType, ContextType, RequireFields<SubscriptionrewardTokenArgs, 'id' | 'subgraphError'>>;
  rewardTokens?: SubscriptionResolver<Array<ResolversTypes['RewardToken']>, "rewardTokens", ParentType, ContextType, RequireFields<SubscriptionrewardTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPoolFee?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPoolFee']>, "liquidityPoolFee", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolFeeArgs, 'id' | 'subgraphError'>>;
  liquidityPoolFees?: SubscriptionResolver<Array<ResolversTypes['LiquidityPoolFee']>, "liquidityPoolFees", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolFeesArgs, 'skip' | 'first' | 'subgraphError'>>;
  dexAmmProtocol?: SubscriptionResolver<Maybe<ResolversTypes['DexAmmProtocol']>, "dexAmmProtocol", ParentType, ContextType, RequireFields<SubscriptiondexAmmProtocolArgs, 'id' | 'subgraphError'>>;
  dexAmmProtocols?: SubscriptionResolver<Array<ResolversTypes['DexAmmProtocol']>, "dexAmmProtocols", ParentType, ContextType, RequireFields<SubscriptiondexAmmProtocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usageMetricsDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['UsageMetricsDailySnapshot']>, "usageMetricsDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionusageMetricsDailySnapshotArgs, 'id' | 'subgraphError'>>;
  usageMetricsDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, "usageMetricsDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionusageMetricsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  usageMetricsHourlySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['UsageMetricsHourlySnapshot']>, "usageMetricsHourlySnapshot", ParentType, ContextType, RequireFields<SubscriptionusageMetricsHourlySnapshotArgs, 'id' | 'subgraphError'>>;
  usageMetricsHourlySnapshots?: SubscriptionResolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, "usageMetricsHourlySnapshots", ParentType, ContextType, RequireFields<SubscriptionusageMetricsHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  financialsDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['FinancialsDailySnapshot']>, "financialsDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionfinancialsDailySnapshotArgs, 'id' | 'subgraphError'>>;
  financialsDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['FinancialsDailySnapshot']>, "financialsDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionfinancialsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPool?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPool']>, "liquidityPool", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolArgs, 'id' | 'subgraphError'>>;
  liquidityPools?: SubscriptionResolver<Array<ResolversTypes['LiquidityPool']>, "liquidityPools", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPoolDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPoolDailySnapshot']>, "liquidityPoolDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolDailySnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPoolDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['LiquidityPoolDailySnapshot']>, "liquidityPoolDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPoolHourlySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['LiquidityPoolHourlySnapshot']>, "liquidityPoolHourlySnapshot", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolHourlySnapshotArgs, 'id' | 'subgraphError'>>;
  liquidityPoolHourlySnapshots?: SubscriptionResolver<Array<ResolversTypes['LiquidityPoolHourlySnapshot']>, "liquidityPoolHourlySnapshots", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
  deposit?: SubscriptionResolver<Maybe<ResolversTypes['Deposit']>, "deposit", ParentType, ContextType, RequireFields<SubscriptiondepositArgs, 'id' | 'subgraphError'>>;
  deposits?: SubscriptionResolver<Array<ResolversTypes['Deposit']>, "deposits", ParentType, ContextType, RequireFields<SubscriptiondepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdraw?: SubscriptionResolver<Maybe<ResolversTypes['Withdraw']>, "withdraw", ParentType, ContextType, RequireFields<SubscriptionwithdrawArgs, 'id' | 'subgraphError'>>;
  withdraws?: SubscriptionResolver<Array<ResolversTypes['Withdraw']>, "withdraws", ParentType, ContextType, RequireFields<SubscriptionwithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
  swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>>;
  swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  activeAccount?: SubscriptionResolver<Maybe<ResolversTypes['ActiveAccount']>, "activeAccount", ParentType, ContextType, RequireFields<SubscriptionactiveAccountArgs, 'id' | 'subgraphError'>>;
  activeAccounts?: SubscriptionResolver<Array<ResolversTypes['ActiveAccount']>, "activeAccounts", ParentType, ContextType, RequireFields<SubscriptionactiveAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  liquidityPoolAmount?: SubscriptionResolver<Maybe<ResolversTypes['_LiquidityPoolAmount']>, "liquidityPoolAmount", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolAmountArgs, 'id' | 'subgraphError'>>;
  liquidityPoolAmounts?: SubscriptionResolver<Array<ResolversTypes['_LiquidityPoolAmount']>, "liquidityPoolAmounts", ParentType, ContextType, RequireFields<SubscriptionliquidityPoolAmountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  helperStore?: SubscriptionResolver<Maybe<ResolversTypes['_HelperStore']>, "helperStore", ParentType, ContextType, RequireFields<SubscriptionhelperStoreArgs, 'id' | 'subgraphError'>>;
  helperStores?: SubscriptionResolver<Array<ResolversTypes['_HelperStore']>, "helperStores", ParentType, ContextType, RequireFields<SubscriptionhelperStoresArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenWhitelist?: SubscriptionResolver<Maybe<ResolversTypes['_TokenWhitelist']>, "tokenWhitelist", ParentType, ContextType, RequireFields<SubscriptiontokenWhitelistArgs, 'id' | 'subgraphError'>>;
  tokenWhitelists?: SubscriptionResolver<Array<ResolversTypes['_TokenWhitelist']>, "tokenWhitelists", ParentType, ContextType, RequireFields<SubscriptiontokenWhitelistsArgs, 'skip' | 'first' | 'subgraphError'>>;
  protocol?: SubscriptionResolver<Maybe<ResolversTypes['Protocol']>, "protocol", ParentType, ContextType, RequireFields<SubscriptionprotocolArgs, 'id' | 'subgraphError'>>;
  protocols?: SubscriptionResolver<Array<ResolversTypes['Protocol']>, "protocols", ParentType, ContextType, RequireFields<SubscriptionprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  event?: SubscriptionResolver<Maybe<ResolversTypes['Event']>, "event", ParentType, ContextType, RequireFields<SubscriptioneventArgs, 'id' | 'subgraphError'>>;
  events?: SubscriptionResolver<Array<ResolversTypes['Event']>, "events", ParentType, ContextType, RequireFields<SubscriptioneventsArgs, 'skip' | 'first' | 'subgraphError'>>;
}>;

export type AbiChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AbiChanged'] = ResolversParentTypes['AbiChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domains?: Resolver<Array<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<AccountdomainsArgs, 'skip' | 'first'>>;
  registrations?: Resolver<Maybe<Array<ResolversTypes['Registration']>>, ParentType, ContextType, RequireFields<AccountregistrationsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddrChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddrChanged'] = ResolversParentTypes['AddrChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addr?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorisationChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorisationChanged'] = ResolversParentTypes['AuthorisationChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isAuthorized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type ContenthashChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContenthashChanged'] = ResolversParentTypes['ContenthashChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DomainResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Domain'] = ResolversParentTypes['Domain']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labelhash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType>;
  subdomains?: Resolver<Array<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<DomainsubdomainsArgs, 'skip' | 'first'>>;
  resolvedAddress?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  resolver?: Resolver<Maybe<ResolversTypes['Resolver']>, ParentType, ContextType>;
  ttl?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isMigrated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['DomainEvent']>, ParentType, ContextType, RequireFields<DomaineventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DomainEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DomainEvent'] = ResolversParentTypes['DomainEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'NewOwner' | 'NewResolver' | 'NewTTL' | 'Transfer', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type InterfaceChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InterfaceChanged'] = ResolversParentTypes['InterfaceChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  interfaceID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  implementer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MulticoinAddrChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MulticoinAddrChanged'] = ResolversParentTypes['MulticoinAddrChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  coinType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  addr?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameChanged'] = ResolversParentTypes['NameChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameRegisteredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameRegistered'] = ResolversParentTypes['NameRegistered']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  registrant?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameRenewedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameRenewed'] = ResolversParentTypes['NameRenewed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameTransferredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameTransferred'] = ResolversParentTypes['NameTransferred']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newOwner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewOwnerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewOwner'] = ResolversParentTypes['NewOwner']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parentDomain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewResolverResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewResolver'] = ResolversParentTypes['NewResolver']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewTTLResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewTTL'] = ResolversParentTypes['NewTTL']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  ttl?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PubkeyChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PubkeyChanged'] = ResolversParentTypes['PubkeyChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  x?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegistrationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Registration'] = ResolversParentTypes['Registration']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType>;
  registrationDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  registrant?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  labelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['RegistrationEvent']>, ParentType, ContextType, RequireFields<RegistrationeventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegistrationEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RegistrationEvent'] = ResolversParentTypes['RegistrationEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'NameRegistered' | 'NameRenewed' | 'NameTransferred', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
}>;

export type ResolverResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Resolver'] = ResolversParentTypes['Resolver']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addr?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  contentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  texts?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  coinTypes?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['ResolverEvent']>, ParentType, ContextType, RequireFields<ResolvereventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResolverEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResolverEvent'] = ResolversParentTypes['ResolverEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AbiChanged' | 'AddrChanged' | 'AuthorisationChanged' | 'ContenthashChanged' | 'InterfaceChanged' | 'MulticoinAddrChanged' | 'NameChanged' | 'PubkeyChanged' | 'TextChanged', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
}>;

export type TextChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TextChanged'] = ResolversParentTypes['TextChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActiveAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ActiveAccount'] = ResolversParentTypes['ActiveAccount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DepositResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  inputTokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<DepositinputTokensArgs, 'skip' | 'first'>>;
  outputToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  inputTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  outputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DexAmmProtocolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DexAmmProtocol'] = ResolversParentTypes['DexAmmProtocol']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subgraphVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  methodologyVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['Network'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProtocolType'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPoolCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  _regenesis?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  dailyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<DexAmmProtocoldailyUsageMetricsArgs, 'skip' | 'first'>>;
  hourlyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<DexAmmProtocolhourlyUsageMetricsArgs, 'skip' | 'first'>>;
  financialMetrics?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<DexAmmProtocolfinancialMetricsArgs, 'skip' | 'first'>>;
  pools?: Resolver<Array<ResolversTypes['LiquidityPool']>, ParentType, ContextType, RequireFields<DexAmmProtocolpoolsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Deposit' | 'Swap' | 'Withdraw', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
}>;

export type FinancialsDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FinancialsDailySnapshot'] = ResolversParentTypes['FinancialsDailySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailySupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidityPoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPool'] = ResolversParentTypes['LiquidityPool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inputTokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<LiquidityPoolinputTokensArgs, 'skip' | 'first'>>;
  outputToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  rewardTokens?: Resolver<Maybe<Array<ResolversTypes['RewardToken']>>, ParentType, ContextType, RequireFields<LiquidityPoolrewardTokensArgs, 'skip' | 'first'>>;
  fees?: Resolver<Array<ResolversTypes['LiquidityPoolFee']>, ParentType, ContextType, RequireFields<LiquidityPoolfeesArgs, 'skip' | 'first'>>;
  isSingleSided?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  inputTokenBalances?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  inputTokenWeights?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  outputTokenSupply?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  outputTokenPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  stakedOutputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
  dailySnapshots?: Resolver<Array<ResolversTypes['LiquidityPoolDailySnapshot']>, ParentType, ContextType, RequireFields<LiquidityPooldailySnapshotsArgs, 'skip' | 'first'>>;
  hourlySnapshots?: Resolver<Array<ResolversTypes['LiquidityPoolHourlySnapshot']>, ParentType, ContextType, RequireFields<LiquidityPoolhourlySnapshotsArgs, 'skip' | 'first'>>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<LiquidityPooldepositsArgs, 'skip' | 'first'>>;
  withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<LiquidityPoolwithdrawsArgs, 'skip' | 'first'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<LiquidityPoolswapsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidityPoolDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPoolDailySnapshot'] = ResolversParentTypes['LiquidityPoolDailySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailySupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  dailyVolumeByTokenAmount?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  dailyVolumeByTokenUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  inputTokenBalances?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  inputTokenWeights?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  outputTokenSupply?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  outputTokenPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  stakedOutputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidityPoolFeeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPoolFee'] = ResolversParentTypes['LiquidityPoolFee']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  feePercentage?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeType?: Resolver<ResolversTypes['LiquidityPoolFeeType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidityPoolHourlySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiquidityPoolHourlySnapshot'] = ResolversParentTypes['LiquidityPoolHourlySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlySupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  hourlyVolumeByTokenAmount?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  hourlyVolumeByTokenUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  inputTokenBalances?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  inputTokenWeights?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  outputTokenSupply?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  outputTokenPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  stakedOutputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtocolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Protocol'] = ResolversParentTypes['Protocol']> = ResolversObject<{
  __resolveType: TypeResolveFn<'DexAmmProtocol', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  schemaVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subgraphVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  methodologyVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  network?: Resolver<ResolversTypes['Network'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProtocolType'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPoolCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<ProtocoldailyUsageMetricsArgs, 'skip' | 'first'>>;
  hourlyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<ProtocolhourlyUsageMetricsArgs, 'skip' | 'first'>>;
  financialMetrics?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<ProtocolfinancialMetricsArgs, 'skip' | 'first'>>;
}>;

export type RewardTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RewardToken'] = ResolversParentTypes['RewardToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['RewardTokenType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenIn?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amountIn?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountInUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tokenOut?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  amountOut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountOutUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  lastPriceBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsageMetricsDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsageMetricsDailySnapshot'] = ResolversParentTypes['UsageMetricsDailySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
  dailyActiveUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dailySwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPoolCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsageMetricsHourlySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsageMetricsHourlySnapshot'] = ResolversParentTypes['UsageMetricsHourlySnapshot']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
  hourlyActiveUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hourlyTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hourlyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hourlyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hourlySwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Withdraw'] = ResolversParentTypes['Withdraw']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  inputTokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<WithdrawinputTokensArgs, 'skip' | 'first'>>;
  outputToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
  inputTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  outputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _HelperStoreResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_HelperStore'] = ResolversParentTypes['_HelperStore']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  valueDecimal?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  valueInt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _LiquidityPoolAmountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_LiquidityPoolAmount'] = ResolversParentTypes['_LiquidityPoolAmount']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inputTokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<_LiquidityPoolAmountinputTokensArgs, 'skip' | 'first'>>;
  inputTokenBalances?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  tokenPrices?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _TokenWhitelistResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_TokenWhitelist'] = ResolversParentTypes['_TokenWhitelist']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  whitelistPools?: Resolver<Array<ResolversTypes['LiquidityPool']>, ParentType, ContextType, RequireFields<_TokenWhitelistwhitelistPoolsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  AbiChanged?: AbiChangedResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  AddrChanged?: AddrChangedResolvers<ContextType>;
  AuthorisationChanged?: AuthorisationChangedResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  ContenthashChanged?: ContenthashChangedResolvers<ContextType>;
  Domain?: DomainResolvers<ContextType>;
  DomainEvent?: DomainEventResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  InterfaceChanged?: InterfaceChangedResolvers<ContextType>;
  MulticoinAddrChanged?: MulticoinAddrChangedResolvers<ContextType>;
  NameChanged?: NameChangedResolvers<ContextType>;
  NameRegistered?: NameRegisteredResolvers<ContextType>;
  NameRenewed?: NameRenewedResolvers<ContextType>;
  NameTransferred?: NameTransferredResolvers<ContextType>;
  NewOwner?: NewOwnerResolvers<ContextType>;
  NewResolver?: NewResolverResolvers<ContextType>;
  NewTTL?: NewTTLResolvers<ContextType>;
  PubkeyChanged?: PubkeyChangedResolvers<ContextType>;
  Registration?: RegistrationResolvers<ContextType>;
  RegistrationEvent?: RegistrationEventResolvers<ContextType>;
  Resolver?: ResolverResolvers<ContextType>;
  ResolverEvent?: ResolverEventResolvers<ContextType>;
  TextChanged?: TextChangedResolvers<ContextType>;
  Transfer?: TransferResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  ActiveAccount?: ActiveAccountResolvers<ContextType>;
  Deposit?: DepositResolvers<ContextType>;
  DexAmmProtocol?: DexAmmProtocolResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  FinancialsDailySnapshot?: FinancialsDailySnapshotResolvers<ContextType>;
  LiquidityPool?: LiquidityPoolResolvers<ContextType>;
  LiquidityPoolDailySnapshot?: LiquidityPoolDailySnapshotResolvers<ContextType>;
  LiquidityPoolFee?: LiquidityPoolFeeResolvers<ContextType>;
  LiquidityPoolHourlySnapshot?: LiquidityPoolHourlySnapshotResolvers<ContextType>;
  Protocol?: ProtocolResolvers<ContextType>;
  RewardToken?: RewardTokenResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  UsageMetricsDailySnapshot?: UsageMetricsDailySnapshotResolvers<ContextType>;
  UsageMetricsHourlySnapshot?: UsageMetricsHourlySnapshotResolvers<ContextType>;
  Withdraw?: WithdrawResolvers<ContextType>;
  _HelperStore?: _HelperStoreResolvers<ContextType>;
  _LiquidityPoolAmount?: _LiquidityPoolAmountResolvers<ContextType>;
  _TokenWhitelist?: _TokenWhitelistResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = EnsTypes.Context & Uniswapv3Types.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/ENS/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/uniswapv3/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const ensTransforms = [];
const uniswapv3Transforms = [];
const additionalTypeDefs = [] as any[];
const ensHandler = new GraphqlHandler({
              name: "ENS",
              config: {"endpoint":"https://gateway.thegraph.com/api/93f66073ec50503392003ba39c5ba910/subgraphs/id/EjtE3sBkYYAwr45BASiFp8cSZEvd1VHTzzYFvJwQUuJx"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("ENS"),
              logger: logger.child("ENS"),
              importFn,
            });
const uniswapv3Handler = new GraphqlHandler({
              name: "uniswapv3",
              config: {"endpoint":"https://gateway.thegraph.com/api/93f66073ec50503392003ba39c5ba910/subgraphs/id/ELUcwgpm14LKPLrBRuVvPvNKHQ9HvwmtKgKSH6123cr7"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("uniswapv3"),
              logger: logger.child("uniswapv3"),
              importFn,
            });
sources[0] = {
          name: 'ENS',
          handler: ensHandler,
          transforms: ensTransforms
        }
sources[1] = {
          name: 'uniswapv3',
          handler: uniswapv3Handler,
          transforms: uniswapv3Transforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
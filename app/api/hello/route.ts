import { NextResponse } from "next/server";
import { execute } from '../../../.graphclient'
import gql from "graphql-tag";

const ensQuery = gql`
query GetLatestRegistrations {
  registrations {
    id
    expiryDate
    domain {
      name
    }
  }
}`

const uniswapQuery = gql`
{
  tokens(first: 5) {
    id
    name
    symbol
    decimals
  }
  rewardTokens(first: 5) {
    id
    token {
      id
    }
    type
  }
}`

export async function GET() {
  const ensResult = await execute(ensQuery, {});
  const uniswapResult = await execute(uniswapQuery, {});

  return NextResponse.json({ ens: ensResult.data.registrations[0], uniswapv3: uniswapResult.data.tokens[0]});
}


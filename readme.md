*cusdt-LINK, t.me/GweiDart


# :camera_flash: KCC KRC20 Token Snapshot: Create KRC20 Token Snapshots:camera_flash:

This command-line utility creates a snapshot of any KRC20 token in JSON or CSV format. You may use "https://rpc-mainnet.kcc.network", or your own fully synced KCC-geth node.

- Works without a local KCC-geth node.
- Automatically resumes block iteration upon failure.
- Multichain compatability! (works with any EVM compatible chain. BSC, FTM, ETH, POLYGON, etc).
- Differentiates between contract and regular addresses. 

## Getting Started

```
npm install krc20-snapshot -g
```

### CLI Arguments

None. Prompts for user input and produces a configuration file on the first run.

### How to Use KCC KRC-20 Token Snapshot?

Navigate to the directory you would like you token snapshot saved in.

```
cd path/to/a/directory
```

Run krc20-snaptshot:

```
krc20-snapshot
```

## Configuration File / Prompt Parameters

```json
{
  "provider": "https://rpc-mainnet.kcc.network",
  "contractAddress": "<insert your contract address here>",
  "fromBlock": 0,
  "toBlock": "latest",
  "format": "json",
  "blocksPerBatch": 2500,
  "delay": 0,
  "checkIfContract": "yes"
}
```

### provider

Enter your node provider URL or a fully synced geth node.

### contractAddress

KRC20 token address.

### fromBlock

The block height to scan from. To save time, enter the block number of the token's contract creation.

### toBlock

The block height to end the scan at (this will be your *snapshot block*).

### blocksPerBatch

The number of blocks to query per batch.

If you are using a remote node provider, keep this number relatively low (2000-5000) to avoid rate limits. If you are using a dedicated geth node, you can increase this number to signifigantly increase interation speed.

### delay

The delay (in ms) between each request in the loop. Change this if you are experiencing rate limiting from your provider.

### checkIfContract

Checks each address to determine whether it is a smart contract or regular wallet address.



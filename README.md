# Blockchain Voting System

This repository contains a Python-based blockchain voting system that allows users to vote securely and anonymously. The voting system is built on top of a blockchain, which provides a tamper-proof and transparent ledger of all votes cast.

## Files

The following files are included in this repository:

- `block.py`: Defines the structure of a block in the blockchain.
- `blockchain.py`: Implements the blockchain and provides functions for adding blocks and validating the chain.
- `candidate.py`: Defines the structure of a candidate in the voting system.
- `node.py`: Implements a node in the blockchain network.
- `transaction.py`: Defines the structure of a transaction in the voting system.
- `voter.py`: Defines the structure of a voter in the voting system.
- `voting_system.py`: Implements the main functionality of the voting system, including adding voters, candidates, and conducting the vote.

## Getting Started

To get started, simply clone the repository:

```bash
git clone https://github.com/AmarjeetMohanty/blockchain-voting-system.git
```

Then, install the required packages:

```bash
pip install -r requirements.txt
```

Now, you can run the blockchain voting system by executing the `voting_system.py` file.

## Usage

When you run the voting system, you will be presented with a menu of options:

1. Add a voter
2. Add a candidate
3. Conduct the vote
4. View the results of the vote
5. Exit

To add a voter, select option 1 from the menu and follow the prompts to enter the voter's information.

To add a candidate, select option 2 from the menu and follow the prompts to enter the candidate's information.

To conduct the vote, select option 3 from the menu and follow the prompts to enter the voter's information and the candidate they are voting for.

To view the results of the vote, select option 4 from the menu.

To exit the voting system, select option 5 from the menu.

## Contributing

If you would like to contribute to this repository, please feel free to open an issue or submit a pull request.

## License

This repository is licensed under the MIT License. See the LICENSE file for more information.

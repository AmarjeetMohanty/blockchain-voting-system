// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0<0.9.0;
contract MyContracts{
    struct Proposal{
        string name;
        uint voteCount;
    }
    struct Voter{
        uint vote;
        bool voted;
        uint weight;
    }
    Proposal[] public proposals;
    mapping(address =>Voter) public voters;
    address public chairperson;
    constructor(string[] memory proposalNames){
        chairperson = msg.sender;
        voters[chairperson].weight=1;
        for(uint i =0; i<proposalNames.length; i++){
            proposals.push(Proposal({
                name: proposalNames[i],
                voteCount:0
            })); 
        }
    }
    function authenticate(address voter) public{
        require(msg.sender == chairperson, 'only the chairperson can give access to vote');
        require(!voters[voter].voted,'the voter has already voted');
        require(voters[voter].weight==0);
        voters[voter].weight=1;
    }
    function voting(uint proposal) public{
        Voter storage sender = voters[msg.sender];
        require(sender.weight!=0,'has no right to vote');
        require(!sender.voted,'already voted');
        sender.voted=true;
        sender.vote=proposal;
        proposals[proposal].voteCount +=  sender.weight;
    }
    function winningproposal() public view returns(uint winningproposal_){
        uint winningVoteCount=0;
        for(uint i=0;i<proposals.length;i++){
            if(proposals[i].voteCount > winningVoteCount){
                winningVoteCount=proposals[i].voteCount;
                winningproposal_=i;
            }
        }
    }
    function winningName() public view returns(string memory winningName_ ){
        winningName_=proposals[winningproposal()].name;
        

    }

}
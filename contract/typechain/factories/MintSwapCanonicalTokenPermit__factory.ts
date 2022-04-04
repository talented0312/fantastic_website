/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MintSwapCanonicalTokenPermit,
  MintSwapCanonicalTokenPermitInterface,
} from "../MintSwapCanonicalTokenPermit";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bridge",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supplyCap",
        type: "uint256",
      },
    ],
    name: "BridgeSupplyCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
    ],
    name: "TokenSwapCapUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bridges",
    outputs: [
      {
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridgeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_swapCap",
        type: "uint256",
      },
    ],
    name: "setBridgeTokenSwapCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridgeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "swapBridgeForCanonical",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridgeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "swapCanonicalForBridge",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "swapSupplies",
    outputs: [
      {
        internalType: "uint256",
        name: "cap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bridge",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_cap",
        type: "uint256",
      },
    ],
    name: "updateBridgeSupplyCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101806040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610120523480156200003757600080fd5b50604051620020c6380380620020c68339810160408190526200005a9162000329565b8282828282828880604051806040016040528060018152602001603160f81b8152508585816003908051906020019062000096929190620001b6565b508051620000ac906004906020840190620001b6565b5050825160209384012082519284019290922060c083815260e08290524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818a0181905281830198909852606081019590955260808086019390935230858301528051808603909201825293909201909252805194019390932090925261010052506200014590503362000164565b60ff90811661014052959095166101605250620003eb95505050505050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620001c490620003ae565b90600052602060002090601f016020900481019282620001e8576000855562000233565b82601f106200020357805160ff191683800117855562000233565b8280016001018555821562000233579182015b828111156200023357825182559160200191906001019062000216565b506200024192915062000245565b5090565b5b8082111562000241576000815560010162000246565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200028457600080fd5b81516001600160401b0380821115620002a157620002a16200025c565b604051601f8301601f19908116603f01168101908282118183101715620002cc57620002cc6200025c565b81604052838152602092508683858801011115620002e957600080fd5b600091505b838210156200030d5785820183015181830184015290820190620002ee565b838211156200031f5760008385830101525b9695505050505050565b6000806000606084860312156200033f57600080fd5b83516001600160401b03808211156200035757600080fd5b620003658783880162000272565b945060208601519150808211156200037c57600080fd5b506200038b8682870162000272565b925050604084015160ff81168114620003a357600080fd5b809150509250925092565b600181811c90821680620003c357607f821691505b60208210811415620003e557634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051610120516101405161016051611c786200044e60003960006102370152600050506000610af2015260006113370152600061138601526000611361015260006112e50152600061130e0152611c786000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c80637ecebe00116100ee578063a9059cbb11610097578063d505accf11610071578063d505accf146103d0578063dd62ed3e146103e3578063f2fde38b1461041c578063f716932e1461042f57600080fd5b8063a9059cbb14610383578063cd04611914610396578063ced67f0c146103a957600080fd5b806395d89b41116100c857806395d89b41146103555780639dc29fac1461035d578063a457c2d71461037057600080fd5b80637ecebe0014610311578063893d20e8146103245780638da5cb5b1461034457600080fd5b806334faea1b1161015b57806340c10f191161013557806340c10f19146102b85780634ce2f71a146102cb57806370a08231146102e0578063715018a61461030957600080fd5b806334faea1b146102615780633644e5151461029d57806339509351146102a557600080fd5b806318160ddd1161018c57806318160ddd1461021557806323b872dd1461021d578063313ce5671461023057600080fd5b806306fdde03146101b3578063095ea7b3146101d157806313f1a4a4146101f4575b600080fd5b6101bb610442565b6040516101c89190611a14565b60405180910390f35b6101e46101df366004611a63565b6104d4565b60405190151581526020016101c8565b610207610202366004611a63565b6104ea565b6040519081526020016101c8565b600254610207565b6101e461022b366004611a8d565b610595565b60405160ff7f00000000000000000000000000000000000000000000000000000000000000001681526020016101c8565b61028861026f366004611ac9565b6008602052600090815260409020805460019091015482565b604080519283526020830191909152016101c8565b610207610656565b6101e46102b3366004611a63565b610665565b6101e46102c6366004611a63565b6106a1565b6102de6102d9366004611a63565b610771565b005b6102076102ee366004611ac9565b6001600160a01b031660009081526020819052604090205490565b6102de610824565b61020761031f366004611ac9565b61088a565b61032c6108aa565b6040516001600160a01b0390911681526020016101c8565b6006546001600160a01b031661032c565b6101bb6108be565b6101e461036b366004611a63565b6108cd565b6101e461037e366004611a63565b61093f565b6101e4610391366004611a63565b6109e6565b6102de6103a4366004611a63565b6109f3565b6102886103b7366004611ac9565b6007602052600090815260409020805460019091015482565b6102de6103de366004611ae4565b610a9e565b6102076103f1366004611b57565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102de61042a366004611ac9565b610c02565b61020761043d366004611a63565b610ce4565b60606003805461045190611b8a565b80601f016020809104026020016040519081016040528092919081815260200182805461047d90611b8a565b80156104ca5780601f1061049f576101008083540402835291602001916104ca565b820191906000526020600020905b8154815290600101906020018083116104ad57829003601f168201915b5050505050905090565b60006104e1338484610de2565b50600192915050565b6001600160a01b038216600090815260086020526040812080546105555760405162461bcd60e51b815260206004820152601460248201527f696e76616c69642062726964676520746f6b656e00000000000000000000000060448201526064015b60405180910390fd5b828160010160008282546105699190611bd5565b9091555061057990503384610f07565b61058d6001600160a01b0385163385611052565b509092915050565b60006105a28484846110e2565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561063c5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000606482015260840161054c565b6106498533858403610de2565b60019150505b9392505050565b60006106606112e1565b905090565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916104e191859061069c908690611bec565b610de2565b33600090815260076020526040812080546106ef5760405162461bcd60e51b815260206004820152600e60248201526d34b73b30b634b21031b0b63632b960911b604482015260640161054c565b828160010160008282546107039190611bec565b909155505080546001820154111561075d5760405162461bcd60e51b815260206004820152601960248201527f657863656564732062726964676520737570706c792063617000000000000000604482015260640161054c565b61076784846113d4565b5060019392505050565b6006546001600160a01b031633146107cb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161054c565b6001600160a01b038216600081815260076020908152604091829020849055815192835282018390527f59e1e4348943de408b89af8ab71e502ea722dd41efd1ff4a3548c60e83e91c6091015b60405180910390a15050565b6006546001600160a01b0316331461087e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161054c565b61088860006114b3565b565b6001600160a01b0381166000908152600560205260408120545b92915050565b60006106606006546001600160a01b031690565b60606004805461045190611b8a565b336000908152600760205260408120805461091b5760405162461bcd60e51b815260206004820152600e60248201526d34b73b30b634b21031b0b63632b960911b604482015260640161054c565b8281600101600082825461092f9190611bd5565b9091555061076790508484610f07565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156109d95760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161054c565b6107673385858403610de2565b60006104e13384846110e2565b6006546001600160a01b03163314610a4d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161054c565b6001600160a01b038216600081815260086020908152604091829020849055815192835282018390527f51c7b3899924578d835c066303e3f765c25fea17d7b18840cd109a90f5c5601f9101610818565b83421115610aee5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161054c565b60007f0000000000000000000000000000000000000000000000000000000000000000888888610b1d8c61151d565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610b7882611545565b90506000610b8882878787611593565b9050896001600160a01b0316816001600160a01b031614610beb5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161054c565b610bf68a8a8a610de2565b50505050505050505050565b6006546001600160a01b03163314610c5c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161054c565b6001600160a01b038116610cd85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161054c565b610ce1816114b3565b50565b6001600160a01b03821660009081526008602052604081208054610d4a5760405162461bcd60e51b815260206004820152601460248201527f696e76616c69642062726964676520746f6b656e000000000000000000000000604482015260640161054c565b80546001820154610d5c908590611bec565b10610da95760405162461bcd60e51b815260206004820152600f60248201527f6578636565642073776170206361700000000000000000000000000000000000604482015260640161054c565b82816001016000828254610dbd9190611bec565b90915550610dcd905033846113d4565b61058d6001600160a01b03851633308661173c565b6001600160a01b038316610e445760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161054c565b6001600160a01b038216610ea55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161054c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038216610f675760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161054c565b6001600160a01b03821660009081526020819052604090205481811015610fdb5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161054c565b6001600160a01b038316600090815260208190526040812083830390556002805484929061100a908490611bd5565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610efa565b505050565b6040516001600160a01b03831660248201526044810182905261104d90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611774565b6001600160a01b03831661115e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161054c565b6001600160a01b0382166111c05760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161054c565b6001600160a01b0383166000908152602081905260409020548181101561124f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161054c565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290611286908490611bec565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112d291815260200190565b60405180910390a35b50505050565b60007f000000000000000000000000000000000000000000000000000000000000000046141561133057507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6001600160a01b03821661142a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161054c565b806002600082825461143c9190611bec565b90915550506001600160a01b03821660009081526020819052604081208054839290611469908490611bec565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600680546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03811660009081526005602052604090208054600181018255905b50919050565b60006108a46115526112e1565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156116105760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161054c565b8360ff16601b148061162557508360ff16601c145b61167c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161054c565b6040805160008082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa1580156116d0573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166117335760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161054c565b95945050505050565b6040516001600160a01b03808516602483015283166044820152606481018290526112db9085906323b872dd60e01b9060840161107e565b60006117c9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118599092919063ffffffff16565b80519091501561104d57808060200190518101906117e79190611c04565b61104d5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161054c565b60606118688484600085611870565b949350505050565b6060824710156118e85760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161054c565b843b6119365760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161054c565b600080866001600160a01b031685876040516119529190611c26565b60006040518083038185875af1925050503d806000811461198f576040519150601f19603f3d011682016040523d82523d6000602084013e611994565b606091505b50915091506119a48282866119af565b979650505050505050565b606083156119be57508161064f565b8251156119ce5782518084602001fd5b8160405162461bcd60e51b815260040161054c9190611a14565b60005b83811015611a035781810151838201526020016119eb565b838111156112db5750506000910152565b6020815260008251806020840152611a338160408501602087016119e8565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114611a5e57600080fd5b919050565b60008060408385031215611a7657600080fd5b611a7f83611a47565b946020939093013593505050565b600080600060608486031215611aa257600080fd5b611aab84611a47565b9250611ab960208501611a47565b9150604084013590509250925092565b600060208284031215611adb57600080fd5b61064f82611a47565b600080600080600080600060e0888a031215611aff57600080fd5b611b0888611a47565b9650611b1660208901611a47565b95506040880135945060608801359350608088013560ff81168114611b3a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611b6a57600080fd5b611b7383611a47565b9150611b8160208401611a47565b90509250929050565b600181811c90821680611b9e57607f821691505b6020821081141561153f57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082821015611be757611be7611bbf565b500390565b60008219821115611bff57611bff611bbf565b500190565b600060208284031215611c1657600080fd5b8151801515811461064f57600080fd5b60008251611c388184602087016119e8565b919091019291505056fea264697066735822122021f300dcb72c2513436be3fea9a00f4e18a93198b180fff9b64db37a9608ff3064736f6c63430008090033";

export class MintSwapCanonicalTokenPermit__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MintSwapCanonicalTokenPermit> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    ) as Promise<MintSwapCanonicalTokenPermit>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    );
  }
  attach(address: string): MintSwapCanonicalTokenPermit {
    return super.attach(address) as MintSwapCanonicalTokenPermit;
  }
  connect(signer: Signer): MintSwapCanonicalTokenPermit__factory {
    return super.connect(signer) as MintSwapCanonicalTokenPermit__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintSwapCanonicalTokenPermitInterface {
    return new utils.Interface(_abi) as MintSwapCanonicalTokenPermitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintSwapCanonicalTokenPermit {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MintSwapCanonicalTokenPermit;
  }
}

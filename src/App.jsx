import { ConnectWallet, useContract, useContractMetadata, useContractWrite, useContractRead, useSDK } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useEffect } from "react";

export default function Home() {
  const { contract: tokenContract } = useContract("0xE4F4D6c7b29732E11A2FeA1AAE5c768a97395364");
  const { data: contractMetadata } = useContractMetadata(tokenContract);
  const { contract: fc } = useContract("0x39868C4868d3a10128c705937Ad4445fD09F5c6a", [
    {
      "type": "function",
      "name": "CreateNewGreeter",
      "inputs": [
        {
          "type": "string",
          "name": "_greeting",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "GreeterArray",
      "inputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "address",
          "name": "",
          "internalType": "contract Greeter"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "gfGetter",
      "inputs": [
        {
          "type": "uint256",
          "name": "_greeterIndex",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "type": "string",
          "name": "",
          "internalType": "string"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "gfSetter",
      "inputs": [
        {
          "type": "uint256",
          "name": "_greeterIndex",
          "internalType": "uint256"
        },
        {
          "type": "string",
          "name": "_greeting",
          "internalType": "string"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    }
  ]);
  const { mutateAsync: CreateNewGreeter } = useContractWrite(fc, "CreateNewGreeter")
  const { greeterAdd } = useContractRead(fc, "gfGetter", [0])
  const {data: greeting} = useContractRead(fc, "gfGetter", [0])
  const sdk = useSDK();
  // const { data } = useContractRead(fc, "GreeterArray", [0])

  const call = async () => {
    try {
      const _greeting = "Hi there"
      const datae = await CreateNewGreeter({ args: ["ciao"] });
      console.info("contract call successs", datae);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  const call2 = async () => {
    // const cc = await sdk.getContract("0x39868C4868d3a10128c705937Ad4445fD09F5c6a");
    // const data = await cc.call("CreateNewGreeter", ["Hello"]);
  }
  const getGreetingAt1st = async () => {
    console.log(greeting);
  }
  useEffect(() =>{
    console.log(contractMetadata)
  });

  const { mutateAsync: gfSetter, isLoading } = useContractWrite(fc, "gfSetter")

  const updateGreeter = async () => {
    try {
    //   () => mutateAsync({ args: ["My Name"] })
    //   () => mutateAsync(["My Name",
    //       {
    //         gasLimit: 1000000, // override default gas limit
    //         value: ethers.utils.parseEther("0.1"), // send 0.1 ether with the contract call
    //       },
    //     ])
      const data = await gfSetter([0, "bawo!", {
          gasLimit: 10000,
          gasPrice: 40000
      }]);
      // const data = await gfSetter({ args: [0, "bawo!"]});
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/" >thirdweb</a>!
        </h1>

        <p className="description">
          Get started by configuring your desired network in{" "}
          <code className="code">src/main.jsx</code>, then modify the{" "}
          <code className="code">src/App.jsx</code> file!
        </p>

        <div className="connect">
          <ConnectWallet dropdownPosition={{
            align: 'center',
            side: 'bottom'
          }} />
        </div>

        <div className="grid">
          <a href="https://portal.thirdweb.com/" className="card">
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className="card">
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a href="https://portal.thirdweb.com/templates" className="card">
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div>
        <div>
          <button onClick={getGreetingAt1st}>
            get greeter
          </button>
          <button onClick={call}>
            Create Greater
          </button>
          <button onClick={updateGreeter}>
            Update Greater
          </button>
          
        </div>
      </main>
    </div>
  );
}

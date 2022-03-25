const Web3 = require('web3');

const MyContract = require('./src/abis/MyContract.json');

const HDWalletProvider = require('@truffle/hdwallet-provider');

const address = '0x261AAE784E2b9183F28378410f8532CF5b2F0a60';

const privateKey = '0d15687a437d866d596e0a2df8ba433cfa788d622a05f0179772efa16958c5b6';



const init = async() => {
    const provider = new HDWalletProvider(
        // 'car boat ....',
        privateKey,
        'https://ropsten.infura.io/v3/bbaf78ccef9a45f38d74f3cde16f41ee',
        // 'http://localhost:7545'
    )
    const web3 = new Web3(provider);
    //const id = await web3.eth.net.getId();
    //const deployedNetwork = MyContract.networks[id];
    let contract = new web3.eth.Contract(
        MyContract.abi, 
        //deployedNetwork.address
    );

    contract = await contract
        .deploy({
            data:MyContract.bytecode
        })
        .send({from:address})

    await contract.methods
        .setData(10)
        .send({from:address});

    const result = await contract.methods
        .getData()
        .call();

    console.log(result);

    // const addresses = await web3.eth.getAccounts();
    // const receipt = await contract.methods.emitEvent('hey').send({
    //     from:addresses[0]
    // });

    // contract.events.MyEvent({})
    //     .on('data',event=>console, )

    // console.log(results);


    // Get Data
    // const result = await contract.methods.getData().call();
    // console.log(result);

    // await contract.methods.sendEther().send({
    //     from : addresses[0],
    //     value:'10000'
    // });

    // console.log(await contract.methods.functionCalled().call());

    // await web3.eth.sendTransaction({
    //     from:addresses[0],
    //     to : contract.options.address,
    //     value : '10000'
    // })
}

init();
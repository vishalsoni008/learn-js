async function call(){
    setTimeout(() => {
        console.log("call asysnc methods");
    }, 5000);

    await function(){
        console.log("wait until sync method call");
    }
}

call().then(function(){
    console.log("promis staement call");
})

call();
console.log("last line");
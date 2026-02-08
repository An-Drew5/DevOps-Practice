console.log('Starting test...');

setTimeout(() => {
    console.log('waiting 3 seconds!');
    process.exit(0);
}, 3000);

console.log('Finished test!');
const app = require('./app.js');

app.listen(3000, ()=>{
    console.log('app ready...');
});

// wait 1600ms to kill
process.on('SIGINT', () => {
    console.log('SIGINT event....');
    process.exit(1);
});

process.on('SIGTERM', () => {
    process.exit(1);
});

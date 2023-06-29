//cluster
const cluster = require('cluster')

//isMaster = > true = single thread

//isWorker = > true = multi thread , => for multi threading we need use fork() method

if(cluster.isMaster){
    console.log("node is running single thread")
}else{
    console.log('no action')
}
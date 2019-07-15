var options = [
    `a) pid`,
    `b) title`,
    `c) arch`,
    `d) platform`,
    `e) envirement`,
    `m) memory usage`,
    `u) uptime`,
    `v) versions`,
    `q) exit`
];

// poderia usar o this, modle.exports
exports.showOptions = function(){
    options.forEach(function(option){
        console.log(option);
    });
};
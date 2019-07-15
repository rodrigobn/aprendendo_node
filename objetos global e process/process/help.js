var options = [
    `a) pid`,
    `b) title`,
    `c) arch`,
    `d) platform`
];

// poderia usar o this, modle.exports
exports.showOptions = function(){
    options.forEach(function(option){
        console.log(option);
    });
};
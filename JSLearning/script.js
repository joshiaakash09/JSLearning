const backpack = {
    name: "Everyday Backpack",
    color: "grey",
    poacketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    lidopen: false,
    togglelid: function(lidStatus) {
        this.lidopen = lidStatus;
    },
    newSrapLength: function (lenghtLeft, lenghtRight) {
        this.strapLength.left = lenghtLeft;
        this.strapLength.right = lenghtRight;
    },
};

console.log("The backpack object:", backpack);
console.log("The poacketNum value:", backpack.poacketNum)


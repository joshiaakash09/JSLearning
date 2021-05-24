// creating classes:
// Class declaration: class name {}
// Class expression : const name = class {}


class Backpack {
    constructor(
        // Defines parameters:
        name, 
        volume, 
        color, 
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ){
        // Define properties:
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLengthL = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
    }
    //  Adding functions:
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }

    newStrapLength(lenghtLeft, lenghtRight){
        this.strapLength.left = lenghtLeft;
        this.strapLength.right = lenghtRight;
    }
}

export default Backpack;
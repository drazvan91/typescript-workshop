export default undefined;

interface Box {
    width: number;
}

interface Box {
    height: number;
}

let box: Box = {
    height: 3,
    width: 6
}

// the same with 
// -namepspaces, 
// -func with namespace, 
// -class with namespace

declare global {
    interface Window {
        ceva: string;
    }
}

window.ceva = "";

declare global {
    interface Array<T> {
        toMyDictionary(): void;
    }
}

Array.prototype.toMyDictionary = function(){
    
}

let a = new Array<number>();
a.toMyDictionary();
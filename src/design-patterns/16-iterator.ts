namespace Explain {
    interface Iterator<T> {
        current(): T;
        next(): boolean;
    }

    interface Iterable<T> {
        getIterator(): Iterator<T>;
    }

    class MyListIterator<T> implements Iterator<T>{
        private currentIndex = -1;
        
        constructor(private list: MyList<T>) {}

        current(): T {
            return this.list.getAtPosition(this.currentIndex);
        }
        next(): boolean {
            this.currentIndex ++;
            return this.list.length > this.currentIndex;
        }
        
    }

    class MyList<T> implements Iterable<T> {
        private innerList = new Array<T>();

        getIterator(): Iterator<T> {
            return new MyListIterator(this);
        }

        getAtPosition(index: number): T {
            return this.innerList[index];
        }

        get length(): number{
            return this.innerList.length;
        }

        push(item: T): void{
            this.innerList.push(item);
        }
    }

    let myList = new MyList<number>();
    myList.push(3);
    myList.push(2);
    myList.push(5);
    myList.push(1);

    let iterator = myList.getIterator();
    while(iterator.next()){
        console.log(iterator.current());
    }

    /* this doesnt work!!
    for(let ceva of myList){

    }
    */
}

namespace HowToIterate {
    class MyListIteratorResult<T> implements IteratorResult<T>{
        constructor(public done: boolean, public value: T){}
    }

    class MyListIterator<T> implements Iterator<T> {
        private currentIndex = 0;
        constructor(private myList: MyList<T>){}

        next(value?: any): IteratorResult<T> {
            if(this.myList.length > this.currentIndex){
                let result = new MyListIteratorResult(false, this.myList.getItem(this.currentIndex));
                this.currentIndex ++;
                return result;
            }

            return new MyListIteratorResult(true, null);
        }
        return?(value?: any): IteratorResult<T> {
            throw new Error("Method not implemented.");
        }
        throw?(e?: any): IteratorResult<T> {
            throw new Error("Method not implemented.");
        }

    }

    class MyList<T>{
        private innerList = new Array<T>();

        [Symbol.iterator](): Iterator<T> {
            return new MyListIterator(this);
        }

        getItem(index: number): T {
            return this.innerList[index];
        }

        get length(): number{
            return this.innerList.length;
        }

        push(item: T): void{
            this.innerList.push(item);
        }
    }

    let myList = new MyList<number>();
    myList.push(11);
    myList.push(12);
    myList.push(13);
    myList.push(14);

    for(let item of myList){
        console.log(item);
    }
}

interface TeaShop {
    addOrder(tableNumber: number, teaName: string): void;
    printOrders(): void;
}

namespace Problem1 {
    class Order {
        tableNumber: number;
        teaName: string;
        teaIngredients: string;
    }

    export class Shop implements TeaShop {
        private _orders = new Map<number, Order>();

        addOrder(tableNumber: number, teaName: string): void {
            let order = new Order();
            order.tableNumber = tableNumber;
            order.teaName = teaName;
            switch(teaName){
                case 'cola-tea': {
                    order.teaIngredients = "cola";
                    break;
                }
                case 'green-tea': {
                    order.teaIngredients = "green stuff";
                    break;
                }
                default: {
                    order.teaIngredients = "unkwnown";
                    break;
                }
            }

            this._orders.set(tableNumber, order);
        }
        printOrders(): void {
            this._orders.forEach(order=>{
                console.log(`Table ${order.tableNumber}: ${order.teaName}, ${order.teaIngredients}`);
            });
        }

    }
}

namespace Solution {
    class Tea {
        teaIngredients: string;

        constructor(public teaName: string){
            console.log(`Constructor for Tea: ${teaName}`);
        }
    }

    class TeaMaker {
        private _teaCache = new Map<string, Tea>();

        private makeTeaInternal(teaName: string): Tea {
            let tea = new Tea(teaName);

            switch(teaName){
                case 'cola-tea': {
                    tea.teaIngredients = "cola";
                    break;
                }
                case 'green-tea': {
                    tea.teaIngredients = "green stuff";
                    break;
                }
                default: {
                    tea.teaIngredients = "unkwnown";
                    break;
                }
            }
            
            return tea;
        }

        makeTea(teaName: string): Tea {
            if(!this._teaCache.has(teaName)){
                let newtea = this.makeTeaInternal(teaName);
                this._teaCache.set(teaName, newtea);
                return newtea;
            }
             
            return this._teaCache.get(teaName);
        }
    }

    export class Shop implements TeaShop {
        private _orders = new Map<number, Tea>();
        private _teaMaker = new TeaMaker();

        addOrder(tableNumber: number, teaName: string): void {
            var tea = this._teaMaker.makeTea(teaName);
            this._orders.set(tableNumber, tea);
        }

        printOrders(): void {
            this._orders.forEach((order, tableNumber)=>{
                console.log(`Table ${tableNumber}: ${order.teaName}, ${order.teaIngredients}`);
            });
        }

    }
}

let shop = new Solution.Shop();
shop.addOrder(1, "cola-tea");
shop.addOrder(2, "cola-tea");
shop.addOrder(3, "green-tea");
shop.printOrders();
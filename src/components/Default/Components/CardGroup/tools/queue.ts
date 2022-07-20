

export interface IImageRow {
    data: Array<string>
}

export class Queue {
    data: Array<string>;

    constructor(data: Array<string>) {
        this.data = data;
    }

    getForThree = () => {
        let arrayObj: Array<IImageRow> = [];


        while (this.data.length > 0) {
            let retArray: Array<string> = [];
            if (this.data.length >= 3) {
                for (let i = 0; i < 3; i++) {
                    retArray.push(this.data[i]);
                }

                let newArray: Array<string> = [];
                for (let i = 3; i < this.data.length; i++) {
                    newArray.push(this.data[i]);
                }

                this.data = newArray;
            } else {
                retArray = [...this.data];
                this.data = [];
            }

            arrayObj.push({data: retArray});
        }

        return arrayObj;
    }

    isEmpty = () => {
        return this.data.length > 0;
    }
}
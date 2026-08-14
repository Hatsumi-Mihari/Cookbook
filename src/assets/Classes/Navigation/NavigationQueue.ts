class NavigationQueue {
    private queue: number[] = [];
    private readonly size: number = 10;
    private pointerW: number = 1;
    private pointerR: number = 1;

    constructor(){
        for(let i = 0; i < this.size; i++) this.queue[i] = -2;
        this.queue[0] = 0;
        console.log(1223);
        console.log(this.queue);
    }

    public push(value: number) { 
        if (this.pointerW >= this.size) this.pointerW = 1;
        this.queue[this.pointerW] = value;
        console.log(this.queue, this.pointerW);
        this.pointerW++;
        this.pointerR = this.pointerW;
    };

    public goHome() {
        this.pointerR = 0;
        for(let i = 1; i < this.size; i++) this.queue[i] = -2;
    }


    public goBack() { 
        this.pointerR--;
        if (this.pointerR < 0) this.pointerR = 1;
    }
    public goForward() {
        this.pointerR++;
        if (this.pointerR > this.size) this.pointerR = this.size - 1;
    }

    public getQueue():Readonly<number[]> {
        return this.queue;
    }

    public getCurrentValue(): number{
        if (this.pointerR-1 < 0) {
            this.pointerR = 1;
        }
        return this.queue[this.pointerR-1];
    }
}

export default NavigationQueue;
class NavigationQueue {
    private queue: number[] = [];
    private readonly size: number = 10;
    private pointer: number = 0;

    constructor(){
        for(let i = 0; i < this.size; i++) this.queue[i] = -2;
        console.log(1223);
        console.log(this.queue);
    }

    public push(value: number) { 
        if (this.pointer >= this.size) this.pointer = 0;
        this.queue[this.pointer] = value;
        console.log(this.queue, this.pointer);
        this.pointer++;
        
    };

    public goBack() { 
        this.pointer--;
        if (this.pointer < 0) this.pointer = 0;
        console.log(this.queue, this.pointer);
    }
    public goForward() { }

    public getQueue():Readonly<number[]> {
        return this.queue;
    }

    public getCurrentValue(): number{
        return this.queue[this.pointer];
    }
}

export default NavigationQueue;
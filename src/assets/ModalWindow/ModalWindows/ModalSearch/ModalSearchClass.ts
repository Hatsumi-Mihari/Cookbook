export class ModalSerchInput{
    private value: string = '';
    private listener: ((val: string) => void) | null = null; 

    public getValue(): string {
        return this.value;
    }

    public setValue(val: string) {
        this.value = val;

        if (this.listener) {
            this.listener(this.value);
        }
    }

    public subscribe(fn: (val: string) => void){
        this.listener = fn;

        return () => {
            this.listener = null;
        }
    }
}

export const ctxInput: ModalSerchInput = new ModalSerchInput();
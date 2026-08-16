export class ModalSerchInput{
    private value: string = '';

    public getValue(): string {
        return this.value;
    }

    public setValue(val: string) {
        this.value = val;
    }
}
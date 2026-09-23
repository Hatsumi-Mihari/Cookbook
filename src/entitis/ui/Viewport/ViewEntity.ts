export type Views = 'debugUI' | 'loader' | 'cards' | 'map';

export interface Viewport{
    id: number;
    type: Views;
    lable: string;
    childrenIds: number[];
}
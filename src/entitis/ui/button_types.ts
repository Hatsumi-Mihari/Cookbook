export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'error' | 'borderless';
export type ButtonBorder = 'square' | 'round';

export interface ButtonVariantUI{
    variant: ButtonVariant,
    border: ButtonBorder,
    isActive: boolean
}



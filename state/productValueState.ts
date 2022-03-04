import { atom } from 'recoil';

export const productNameState = atom<string>({
    key: 'productNameState',
    default: ''
});

export const productDescriptionState = atom<string>({
    key: 'productDescriptionState',
    default: ''
});

export const productCostState = atom<string>({
    key: 'productCostState',
    default: ''
});

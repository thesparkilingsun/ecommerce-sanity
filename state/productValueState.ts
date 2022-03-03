import { atom } from 'recoil';

const productNameState = atom<string>({
    key: 'productNameState',
    default: ''
});

const productDescriptionState = atom<string>({
    key: 'productDescriptionState',
    default: ''
});

const productCostState = atom<string>({
    key: 'productCostState',
    default: ''
});

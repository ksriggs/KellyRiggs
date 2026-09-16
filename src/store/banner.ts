import { create } from 'zustand';

interface BannerState {
    isOpen: boolean
};

interface BannerActions {
    setOpen: (value: boolean) => void
};

const initialState: BannerState = {
    isOpen: true
};

export const useBannerStore = create<BannerState & BannerActions>()(
    (set) => ({
        ...initialState,
        setOpen: (value: boolean) => set(() => ({ isOpen: value }))
    })
);

import { reactive, toRefs } from 'vue';

const state = reactive({
    text: '',
    variant: 'default', // 'default' | 'button'
    isVisible: false,
});

export function useCursor() {
    const setCursor = ({ text = '', variant = 'default' } = {}) => {
        state.text = text;
        state.variant = variant;
    };

    const resetCursor = () => {
        state.text = '';
        state.variant = 'default';
    };

    const setFormat = (format) => {
        // helper if needed
    };

    return {
        ...toRefs(state),
        setCursor,
        resetCursor,
        state // expose state directly if needed for watchers
    };
}

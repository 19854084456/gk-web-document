<template>
    <button type="button" class="gk-button" :class="{
        'gk-button--loading': loading,
        'gk-button--disabled': disabled,
        'gk-button--block': block,
        [`gk-button--${type}`]: type,
        [`gk-button--${size}`]: size,
        'noBorder': noBorder,
        'circle': circle,
    }" :disabled="disabled || loading" @click="handleClick">
        <span v-if="loading" class="loading-spinner"></span>
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    },
    noBorder: {
        type: Boolean,
        default: false
    },//不要边框
    disabled: {
        type: Boolean,
        default: false
    },
    block: {
        type: Boolean,
        default: true
    },
    size: {
        type: String,
        default: 'medium', // 默认尺寸为 medium
        validator: (value) => {
            return ['small', 'medium', 'large'].includes(value);
        }
    },
    type: {
        type: String,
        default: '', // 默认类型为 primary
        validator: (value) => {
            return ['', 'primary', 'success', 'info', 'warning', 'danger', 'text'].includes(value);
        }
    }
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
    if (!props.disabled && !props.loading) {
        emit('click', event);
    }
};
</script>

<style scoped>
.gk-button {
    display: inline-flex;
    padding: 8pv 20pv;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 2pv;
    background-color: var(--base-white, #FFFFFF);
    color: var(--primary-color, #103A62);
    font-family: var(--font-family, Arial, sans-serif);
    font-size: 18pv;
    font-weight: 500;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.3s ease;
    font-family: "Alimama FangYuanTi VF";
    font-style: normal;
    line-height: 150%;
    width: auto;
    border: 1px solid var(--primary-color, #103A62);
}
.gk-button--small {
    padding: 4pv 12pv;
    font-size: 14pv;
    line-height: 150%;
    min-height: 32pv;
}

.gk-button--medium {
    padding: 8pv 20pv;
    font-size: 18pv;
    line-height: 150%;
    min-height: 40pv;
}

.gk-button--large {
    padding: 12pv 28pv;
    font-size: 20pv;
    line-height: 150%;
    min-height: 48pv;
}
.gk-button--text {
    background-color: transparent;
    color: var(--primary-color, #103A62);
    border-width: 0pv;
}

.gk-button--text:hover:not(.gk-button--disabled):not(.gk-button--loading) {
    background-color: transparent;
    color: var(--primary-light, #004080);
    text-decoration: underline;
}

/* 调整 hover 样式，排除 text 类型 */
.gk-button:hover:not(.gk-button--disabled):not(.gk-button--loading):not(.gk-button--primary):not(.gk-button--text) {
    opacity: 0.8;
}

.gk-button:hover:not(.gk-button--disabled):not(.gk-button--loading).gk-button--primary:not(.gk-button--text) {
    background-color: var(--primary-light, #004080);
}

/* 不同类型的按钮样式 */
.gk-button--primary {
    background-color: var(--primary-color, #103A62);
    color: #fff;
}

.gk-button--success {
    background-color: var(--success-color, #12B76A);
}

.gk-button--info {
    background-color: var(--info-color, #0BA5EC);
}

.gk-button--warning {
    background-color: var(--warning-color, #F79009);
}

.gk-button--danger {
    background-color: var(--danger-color, #E34D4D);
}

/* 块级按钮样式 */
.gk-button--block {
    width: 100%;
    display: flex;
}

.gk-button:hover:not(.gk-button--disabled):not(.gk-button--loading):not(.gk-button--primary) {
    opacity: 0.8;
}

.gk-button:hover:not(.gk-button--disabled):not(.gk-button--loading).gk-button--primary {
    background-color: var(--primary-light, #004080);
}

.gk-button--disabled,
.gk-button--loading {
    opacity: 0.6;
    cursor: not-allowed;
}

.gk-button--loading {
    pointer-events: none;
}

.loading-spinner {
    width: 20pv;
    height: 20pv;
    border: 2pv solid transparent;
    border-top: 2pv solid var(--base-white, #FFFFFF);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 10pv;
}
.noBorder{
    border: none!important;
}
.circle{
    border-radius:30pv;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
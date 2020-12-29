export function getTypes(data) {
    return {
        type: '@types/GET',
        data,
    };
}

export function setTypes(data) {
    return {
        type: '@types/SET',
        data,
    };
}

function getValueId(val) {
    const valueId = document.getElementById(val);
    const valueString = valueId.value;
    const value = parseFloat(valueString);
    valueId.value = '';
    return value;
}

function getValueIdIncome(val) {
    const valueId = document.getElementById(val);
    const valueString = valueId.value;
    const value = parseFloat(valueString);
    return value;
}
///
function getInnerId(inText) {
    const innerId = document.getElementById(inText);
    const innerString = innerId.innerText;
    const inner = parseFloat(innerString);
    return inner;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

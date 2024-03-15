const myMaskJS = (selector, ...masks) => {
  const onlyNumbers = (value) => value.replace(/\D/g, '');
  const selectMask = (masksFill) => {
    const maskFill = masksFill.find(fill => onlyNumbers(target.value).length < fill.length);
    const selectedMask = maskFill ? maskFill : masksFill[masksFill.length - 1];
    return selectedMask;
  }
  const sortedMasks = masks.sort((a, b) => a.length - b.length);
  const input = document.querySelector(selector);
  const masksFill = sortedMasks.map(mask => mask.split(/\d/))
  input.addEventListener('keyup', ({target}) => {
    const selectedMask = selectMask(masksFill);
    const cleanedValue = onlyNumbers(target.value);
    const maskedValue = cleanedValue.split('').reduce((acc, curr, index) => {
      return index < selectedMask.length - 1
      ? `${acc}${selectedMask[index]}${curr}`
      : acc
    },'');
    target.value = maskedValue;
  })
}

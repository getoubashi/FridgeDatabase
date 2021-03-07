/**
 * 
 * @param {String} category カテゴリー
 * @param {String} name アイテム名
 * @param {String} expirationDate 賞味期限
 * @param {String} rowNum 
 * @returns 
 */
const panel = (category, name, expirationDate, rowNum) => {
  const panelData = `
  <a class="panel-block panel-list" data-name="${name}" data-category="${category}" name="${rowNum}">
    <span style="margin-left: 40px;">
      <span style="margin-right: 10px;">
        ${category}
      </span>
      ${name}
    </span>
    <span style="position: absolute; right: 3rem;">
    ${expirationDate}
    </span>
    <input type="checkbox" id="check${rowNum}" for="check${rowNum}" class="input01" name="listCheckbox"
      data-row="${rowNum}"/>
    <label onClick="checkedItem();" for="check${rowNum}" class="label01" style="position: absolute;"></label>
  </a>
`;
  return panelData;
}

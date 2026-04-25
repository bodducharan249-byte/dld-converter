const elements = {
  dec: document.getElementById("dec"),
  bin: document.getElementById("bin"),
  oct: document.getElementById("oct"),
  hex: document.getElementById("hex"),
  bcd: document.getElementById("bcd"),
  ex3: document.getElementById("ex3"),
  gray: document.getElementById("gray"),
  parity: document.getElementById("parity"),
  kmapVars: document.getElementById("kmapVars"),
  kmapMinterms: document.getElementById("kmapMinterms"),
  gateA: document.getElementById("gateA"),
  gateB: document.getElementById("gateB"),
  arithA: document.getElementById("arithA"),
  arithB: document.getElementById("arithB"),
  decRes: document.getElementById("decRes"),
  binRes: document.getElementById("binRes"),
  octRes: document.getElementById("octRes"),
  hexRes: document.getElementById("hexRes"),
  bcdRes: document.getElementById("bcdRes"),
  ex3Res: document.getElementById("ex3Res"),
  grayRes: document.getElementById("grayRes"),
  parityRes: document.getElementById("parityRes"),
  kmapRes: document.getElementById("kmapRes"),
  gateRes: document.getElementById("gateRes"),
  arithRes: document.getElementById("arithRes")
};

const kmapLayouts = {
  2: {
    rows: ["0", "1"],
    cols: ["0", "1"],
    rowLabel: "A",
    colLabel: "B",
    variables: ["A", "B"]
  },
  3: {
    rows: ["0", "1"],
    cols: ["00", "01", "11", "10"],
    rowLabel: "A",
    colLabel: "BC",
    variables: ["A", "B", "C"]
  },
  4: {
    rows: ["00", "01", "11", "10"],
    cols: ["00", "01", "11", "10"],
    rowLabel: "AB",
    colLabel: "CD",
    variables: ["A", "B", "C", "D"]
  }
};

function isBinary(value) {
  return /^[01]+$/.test(value);
}

function isBit(value) {
  return /^(0|1)$/.test(value);
}

function isOctal(value) {
  return /^[0-7]+$/.test(value);
}

function isDecimal(value) {
  return /^\d+$/.test(value);
}

function isHex(value) {
  return /^[\da-fA-F]+$/.test(value);
}

function formatGroupedBinary(binary) {
  return binary.replace(/(.{4})/g, "$1 ").trim();
}

function decimalToBcd(decimalString) {
  return decimalString
    .split("")
    .map((digit) => Number(digit).toString(2).padStart(4, "0"))
    .join(" ");
}

function decimalToExcess3(decimalString) {
  return decimalString
    .split("")
    .map((digit) => (Number(digit) + 3).toString(2).padStart(4, "0"))
    .join(" ");
}

function binaryToGrayCode(binary) {
  let gray = binary[0];
  for (let index = 1; index < binary.length; index += 1) {
    gray += String(Number(binary[index - 1]) ^ Number(binary[index]));
  }
  return gray;
}

function grayToBinaryCode(gray) {
  let binary = gray[0];
  for (let index = 1; index < gray.length; index += 1) {
    binary += String(Number(binary[index - 1]) ^ Number(gray[index]));
  }
  return binary;
}

function onesComplement(binary) {
  return binary.replace(/[01]/g, (bit) => bit === "0" ? "1" : "0");
}

function twosComplement(binary) {
  if (binary === "0") {
    return "0";
  }

  const flipped = onesComplement(binary).split("");
  let carry = 1;

  for (let index = flipped.length - 1; index >= 0; index -= 1) {
    if (carry === 0) {
      break;
    }

    if (flipped[index] === "1") {
      flipped[index] = "0";
    } else {
      flipped[index] = "1";
      carry = 0;
    }
  }

  return flipped.join("");
}

function renderResult(target, rows) {
  target.innerHTML = `
    <div class="result-grid">
      ${rows.map((row) => `
        <div class="result-item">
          <span class="result-label">${row.label}</span>
          <span class="result-value">${row.value}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderMessage(target, message, statusClass = "") {
  target.innerHTML = `<div class="${statusClass}">${message}</div>`;
}

function buildNumberSystemRows(decimalValue) {
  const binary = decimalValue.toString(2);
  const decimalString = String(decimalValue);
  const onesCount = binary.split("").filter((bit) => bit === "1").length;

  return [
    { label: "Decimal", value: decimalString },
    { label: "Binary", value: binary },
    { label: "Octal", value: decimalValue.toString(8) },
    { label: "Hex", value: decimalValue.toString(16).toUpperCase() },
    { label: "BCD", value: decimalToBcd(decimalString) },
    { label: "Excess-3", value: decimalToExcess3(decimalString) },
    { label: "Gray Code", value: binaryToGrayCode(binary) },
    { label: "1's Complement", value: onesComplement(binary) },
    { label: "2's Complement", value: twosComplement(binary) },
    { label: "Parity", value: `Ones = ${onesCount}, Even bit = ${onesCount % 2 === 0 ? 0 : 1}, Odd bit = ${onesCount % 2 === 0 ? 1 : 0}` }
  ];
}

function buildCanonicalSop(variableCount, minterms) {
  const variableNames = kmapLayouts[variableCount].variables;
  return minterms
    .map((minterm) => {
      const bits = minterm.toString(2).padStart(variableCount, "0");
      return bits
        .split("")
        .map((bit, index) => bit === "1" ? variableNames[index] : `${variableNames[index]}'`)
        .join("");
    })
    .join(" + ");
}

function parseMinterms(value, variableCount) {
  const maxMinterm = (2 ** variableCount) - 1;
  const cleaned = value.split(",").map((item) => item.trim()).filter(Boolean);

  if (cleaned.length === 0) {
    return null;
  }

  const parsed = cleaned.map((item) => Number(item));
  const invalid = parsed.some((item, index) => !Number.isInteger(item) || item < 0 || item > maxMinterm || cleaned[index] === "");
  if (invalid) {
    return null;
  }

  return [...new Set(parsed)].sort((a, b) => a - b);
}

function renderKMap(target, variableCount, minterms) {
  const layout = kmapLayouts[variableCount];
  const tableRows = layout.rows.map((rowBits) => {
    const cells = layout.cols.map((colBits) => {
      const bits = rowBits + colBits;
      const minterm = parseInt(bits, 2);
      const active = minterms.includes(minterm);
      return `
        <td class="${active ? "kmap-hit" : ""}">
          ${active ? 1 : 0}<br>M${minterm}
        </td>
      `;
    }).join("");

    return `
      <tr>
        <th>${rowBits}</th>
        ${cells}
      </tr>
    `;
  }).join("");

  target.innerHTML = `
    <div class="kmap-wrap">
      <div class="formula-text">Canonical SOP: F = ${buildCanonicalSop(variableCount, minterms) || 0}</div>
      <div class="kmap-scroll">
        <table class="kmap-table">
          <thead>
            <tr>
              <th>${layout.rowLabel} \\ ${layout.colLabel}</th>
              ${layout.cols.map((col) => `<th>${col}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function decAll() {
  const value = elements.dec.value.trim();
  if (!isDecimal(value)) {
    renderMessage(elements.decRes, "Enter a valid non-negative decimal number.", "status-error");
    return;
  }

  renderResult(elements.decRes, buildNumberSystemRows(Number(value)));
}

function binAll() {
  const value = elements.bin.value.trim();
  if (!isBinary(value)) {
    renderMessage(elements.binRes, "Binary input should contain only 0 and 1.", "status-error");
    return;
  }

  renderResult(elements.binRes, buildNumberSystemRows(parseInt(value, 2)));
}

function octAll() {
  const value = elements.oct.value.trim();
  if (!isOctal(value)) {
    renderMessage(elements.octRes, "Octal input should use digits 0 to 7 only.", "status-error");
    return;
  }

  renderResult(elements.octRes, buildNumberSystemRows(parseInt(value, 8)));
}

function hexAll() {
  const value = elements.hex.value.trim();
  if (!isHex(value)) {
    renderMessage(elements.hexRes, "Hex input should use digits 0 to 9 and letters A to F.", "status-error");
    return;
  }

  renderResult(elements.hexRes, buildNumberSystemRows(parseInt(value, 16)));
}

function bcdToDec() {
  const groups = elements.bcd.value.trim().split(/\s+/).filter(Boolean);
  if (groups.length === 0 || groups.some((group) => !/^[01]{4}$/.test(group) || parseInt(group, 2) > 9)) {
    renderMessage(elements.bcdRes, "Use valid 4-bit BCD groups separated by spaces.", "status-error");
    return;
  }

  const decimalString = groups.map((group) => parseInt(group, 2)).join("");
  renderResult(elements.bcdRes, buildNumberSystemRows(Number(decimalString)));
}

function ex3ToDec() {
  const groups = elements.ex3.value.trim().split(/\s+/).filter(Boolean);
  if (
    groups.length === 0 ||
    groups.some((group) => {
      if (!/^[01]{4}$/.test(group)) {
        return true;
      }
      const digit = parseInt(group, 2) - 3;
      return digit < 0 || digit > 9;
    })
  ) {
    renderMessage(elements.ex3Res, "Use valid 4-bit Excess-3 groups separated by spaces.", "status-error");
    return;
  }

  const decimalString = groups.map((group) => parseInt(group, 2) - 3).join("");
  renderResult(elements.ex3Res, buildNumberSystemRows(Number(decimalString)));
}

function binToGray() {
  const value = elements.gray.value.trim();
  if (!isBinary(value)) {
    renderMessage(elements.grayRes, "Enter a valid binary number before converting to Gray code.", "status-error");
    return;
  }

  renderResult(elements.grayRes, [
    { label: "Binary", value },
    { label: "Gray Code", value: binaryToGrayCode(value) },
    { label: "Grouped Binary", value: formatGroupedBinary(value.padStart(Math.ceil(value.length / 4) * 4, "0")) }
  ]);
}

function grayToBin() {
  const value = elements.gray.value.trim();
  if (!isBinary(value)) {
    renderMessage(elements.grayRes, "Enter a valid Gray code using only 0 and 1.", "status-error");
    return;
  }

  const binary = grayToBinaryCode(value);
  renderResult(elements.grayRes, [
    { label: "Gray Code", value },
    { label: "Binary", value: binary },
    { label: "Decimal", value: parseInt(binary, 2) }
  ]);
}

function parityCheck() {
  const value = elements.parity.value.trim();
  if (!isBinary(value)) {
    renderMessage(elements.parityRes, "Enter a valid binary number for parity checking.", "status-error");
    return;
  }

  const onesCount = value.split("").filter((bit) => bit === "1").length;
  renderResult(elements.parityRes, [
    { label: "Binary", value },
    { label: "1 Count", value: onesCount },
    { label: "Current Parity", value: onesCount % 2 === 0 ? "Even" : "Odd" },
    { label: "Even Parity Bit", value: onesCount % 2 === 0 ? 0 : 1 },
    { label: "Odd Parity Bit", value: onesCount % 2 === 0 ? 1 : 0 }
  ]);
}

function generateKMap() {
  const variableCount = Number(elements.kmapVars.value.trim());
  if (![2, 3, 4].includes(variableCount)) {
    renderMessage(elements.kmapRes, "K-map supports 2, 3, or 4 variables only.", "status-error");
    return;
  }

  const minterms = parseMinterms(elements.kmapMinterms.value.trim(), variableCount);
  if (!minterms) {
    renderMessage(elements.kmapRes, `Enter valid comma-separated minterms from 0 to ${(2 ** variableCount) - 1}.`, "status-error");
    return;
  }

  renderKMap(elements.kmapRes, variableCount, minterms);
}

function logicGateTool() {
  const a = elements.gateA.value.trim();
  const b = elements.gateB.value.trim();

  if (!isBit(a) || !isBit(b)) {
    renderMessage(elements.gateRes, "Use only single-bit inputs 0 or 1.", "status-error");
    return;
  }

  const aNum = Number(a);
  const bNum = Number(b);

  renderResult(elements.gateRes, [
    { label: "AND", value: aNum & bNum },
    { label: "OR", value: aNum | bNum },
    { label: "XOR", value: aNum ^ bNum },
    { label: "NAND", value: (aNum & bNum) ? 0 : 1 },
    { label: "NOR", value: (aNum | bNum) ? 0 : 1 },
    { label: "XNOR", value: (aNum ^ bNum) ? 0 : 1 }
  ]);
}

function binaryArithmetic(mode) {
  const a = elements.arithA.value.trim();
  const b = elements.arithB.value.trim();

  if (!isBinary(a) || !isBinary(b)) {
    renderMessage(elements.arithRes, "Use valid binary numbers in both fields.", "status-error");
    return;
  }

  const aDec = parseInt(a, 2);
  const bDec = parseInt(b, 2);

  if (mode === "add") {
    const sum = aDec + bDec;
    renderResult(elements.arithRes, [
      { label: "Operation", value: `${a} + ${b}` },
      { label: "Binary Result", value: sum.toString(2) },
      { label: "Decimal Result", value: sum },
      { label: "Carry Out", value: sum.toString(2).length > Math.max(a.length, b.length) ? 1 : 0 }
    ]);
    return;
  }

  const difference = aDec - bDec;
  const absoluteBinary = Math.abs(difference).toString(2);
  renderResult(elements.arithRes, [
    { label: "Operation", value: `${a} - ${b}` },
    { label: "Binary Result", value: difference >= 0 ? absoluteBinary : `-${absoluteBinary}` },
    { label: "Decimal Result", value: difference },
    { label: "Borrow Needed", value: difference < 0 ? "Yes" : "No" }
  ]);
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  const actionMap = new Map([
    [elements.dec, decAll],
    [elements.bin, binAll],
    [elements.oct, octAll],
    [elements.hex, hexAll],
    [elements.bcd, bcdToDec],
    [elements.ex3, ex3ToDec],
    [elements.gray, binToGray],
    [elements.parity, parityCheck],
    [elements.kmapVars, generateKMap],
    [elements.kmapMinterms, generateKMap],
    [elements.gateA, logicGateTool],
    [elements.gateB, logicGateTool],
    [elements.arithA, () => binaryArithmetic("add")],
    [elements.arithB, () => binaryArithmetic("add")]
  ]);

  const action = actionMap.get(document.activeElement);
  if (action) {
    action();
  }
});

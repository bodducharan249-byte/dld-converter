const elements = {
  dec: document.getElementById("dec"),
  bin: document.getElementById("bin"),
  oct: document.getElementById("oct"),
  hex: document.getElementById("hex"),
  bcd: document.getElementById("bcd"),
  ex3: document.getElementById("ex3"),
  gray: document.getElementById("gray"),
  parity: document.getElementById("parity"),
  compInput: document.getElementById("compInput"),
  subA: document.getElementById("subA"),
  subB: document.getElementById("subB"),
  boolExpr: document.getElementById("boolExpr"),
  truthVars: document.getElementById("truthVars"),
  kmapVars: document.getElementById("kmapVars"),
  kmapMinterms: document.getElementById("kmapMinterms"),
  gateA: document.getElementById("gateA"),
  gateB: document.getElementById("gateB"),
  arithA: document.getElementById("arithA"),
  arithB: document.getElementById("arithB"),
  simGate: document.getElementById("simGate"),
  simA: document.getElementById("simA"),
  simB: document.getElementById("simB"),
  halfA: document.getElementById("halfA"),
  halfB: document.getElementById("halfB"),
  fullA: document.getElementById("fullA"),
  fullB: document.getElementById("fullB"),
  fullCin: document.getElementById("fullCin"),
  fullSubA: document.getElementById("fullSubA"),
  fullSubB: document.getElementById("fullSubB"),
  fullSubBin: document.getElementById("fullSubBin"),
  compA: document.getElementById("compA"),
  compB: document.getElementById("compB"),
  canonVars: document.getElementById("canonVars"),
  canonMinterms: document.getElementById("canonMinterms"),
  deMorganA: document.getElementById("deMorganA"),
  deMorganB: document.getElementById("deMorganB"),
  counterBits: document.getElementById("counterBits"),
  shiftRegister: document.getElementById("shiftRegister"),
  shiftSerial: document.getElementById("shiftSerial"),
  shiftDirection: document.getElementById("shiftDirection"),
  signedDecimal: document.getElementById("signedDecimal"),
  signedBits: document.getElementById("signedBits"),
  twosToDecInput: document.getElementById("twosToDecInput"),
  digitCodeInput: document.getElementById("digitCodeInput"),
  asciiInput: document.getElementById("asciiInput"),
  hammingInput: document.getElementById("hammingInput"),
  bitwiseA: document.getElementById("bitwiseA"),
  bitwiseB: document.getElementById("bitwiseB"),
  groupBinaryInput: document.getElementById("groupBinaryInput"),
  termVars: document.getElementById("termVars"),
  truthOutputBits: document.getElementById("truthOutputBits"),
  decRes: document.getElementById("decRes"),
  binRes: document.getElementById("binRes"),
  octRes: document.getElementById("octRes"),
  hexRes: document.getElementById("hexRes"),
  bcdRes: document.getElementById("bcdRes"),
  ex3Res: document.getElementById("ex3Res"),
  grayRes: document.getElementById("grayRes"),
  parityRes: document.getElementById("parityRes"),
  compRes: document.getElementById("compRes"),
  subRes: document.getElementById("subRes"),
  boolRes: document.getElementById("boolRes"),
  truthRes: document.getElementById("truthRes"),
  kmapRes: document.getElementById("kmapRes"),
  gateRes: document.getElementById("gateRes"),
  arithRes: document.getElementById("arithRes"),
  simRes: document.getElementById("simRes"),
  halfAdderRes: document.getElementById("halfAdderRes"),
  fullAdderRes: document.getElementById("fullAdderRes"),
  fullSubRes: document.getElementById("fullSubRes"),
  compareRes: document.getElementById("compareRes"),
  canonicalRes: document.getElementById("canonicalRes"),
  deMorganRes: document.getElementById("deMorganRes"),
  counterRes: document.getElementById("counterRes"),
  shiftRes: document.getElementById("shiftRes"),
  signedMagRes: document.getElementById("signedMagRes"),
  twosToDecRes: document.getElementById("twosToDecRes"),
  digitCodeRes: document.getElementById("digitCodeRes"),
  asciiRes: document.getElementById("asciiRes"),
  hammingRes: document.getElementById("hammingRes"),
  bitwiseRes: document.getElementById("bitwiseRes"),
  groupBinaryRes: document.getElementById("groupBinaryRes"),
  termsRes: document.getElementById("termsRes"),
  flipFlopTables: document.getElementById("flipFlopTables"),
  universalGates: document.getElementById("universalGates"),
  encoderDecoder: document.getElementById("encoderDecoder"),
  muxDemux: document.getElementById("muxDemux"),
  quizList: document.getElementById("quizList"),
  quizRes: document.getElementById("quizRes")
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

const quizQuestions = [
  {
    question: "Which gate gives output 1 only when all inputs are 1?",
    options: ["AND", "OR", "XOR"],
    answer: "AND"
  },
  {
    question: "Binary 1010 is equal to which decimal value?",
    options: ["8", "10", "12"],
    answer: "10"
  },
  {
    question: "Which gates are called universal gates?",
    options: ["AND and OR", "NAND and NOR", "XOR and XNOR"],
    answer: "NAND and NOR"
  },
  {
    question: "A NOT gate has how many inputs?",
    options: ["1", "2", "4"],
    answer: "1"
  },
  {
    question: "The Gray code property changes how many bits between adjacent values?",
    options: ["One bit", "Two bits", "All bits"],
    answer: "One bit"
  },
  {
    question: "A 4:1 multiplexer has how many select lines?",
    options: ["1", "2", "4"],
    answer: "2"
  },
  {
    question: "Which flip-flop toggles when T = 1?",
    options: ["D", "T", "SR"],
    answer: "T"
  },
  {
    question: "BCD represents each decimal digit using how many bits?",
    options: ["2", "4", "8"],
    answer: "4"
  },
  {
    question: "Even parity means the total number of 1s is what?",
    options: ["Even", "Odd", "Always zero"],
    answer: "Even"
  },
  {
    question: "A decoder generally converts binary input into what?",
    options: ["One active output", "A clock pulse", "A carry bit"],
    answer: "One active output"
  }
];

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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
  if (/^0+$/.test(binary)) {
    return binary;
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

function animateResult(target) {
  target.classList.remove("result-pop");
  void target.offsetWidth;
  target.classList.add("result-pop");
}

function renderResult(target, rows) {
  target.innerHTML = `
    <div class="result-grid">
      ${rows.map((row) => `
        <div class="result-item">
          <span class="result-label">${escapeHtml(row.label)}</span>
          <span class="result-value">${escapeHtml(row.value)}</span>
        </div>
      `).join("")}
    </div>
  `;
  animateResult(target);
}

function renderMessage(target, message, statusClass = "") {
  target.innerHTML = `<div class="${statusClass}">${escapeHtml(message)}</div>`;
  animateResult(target);
}

function renderHtml(target, html) {
  target.innerHTML = html;
  animateResult(target);
}

function buildNumberSystemRows(decimalValue) {
  const binary = decimalValue.toString(2);
  const decimalString = String(decimalValue);
  const onesCount = binary.split("").filter((bit) => bit === "1").length;

  return [
    { label: "Decimal", value: decimalString },
    { label: "Binary", value: binary },
    { label: "Octal", value: decimalValue.toString(8) },
    { label: "Hexadecimal", value: decimalValue.toString(16).toUpperCase() },
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

function renderTable(headers, rows) {
  return `
    <div class="table-wrap">
      <table class="data-table">
        <thead>
          <tr>${headers.map((head) => `<th>${escapeHtml(head)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
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

  renderHtml(target, `
    <div class="formula-text">Canonical SOP: F = ${escapeHtml(buildCanonicalSop(variableCount, minterms) || 0)}</div>
    <div class="table-wrap">
      <table class="kmap-table">
        <thead>
          <tr>
            <th>${layout.rowLabel} \\ ${layout.colLabel}</th>
            ${layout.cols.map((col) => `<th>${col}</th>`).join("")}
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  `);
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

function calculateComplements() {
  const value = elements.compInput.value.trim();
  if (!isBinary(value)) {
    renderMessage(elements.compRes, "Enter a valid binary number.", "status-error");
    return;
  }

  renderResult(elements.compRes, [
    { label: "Original Binary", value },
    { label: "1's Complement", value: onesComplement(value) },
    { label: "2's Complement", value: twosComplement(value) }
  ]);
}

function binarySubtractionSteps() {
  const a = elements.subA.value.trim();
  const b = elements.subB.value.trim();

  if (!isBinary(a) || !isBinary(b)) {
    renderMessage(elements.subRes, "Use valid binary numbers in both fields.", "status-error");
    return;
  }

  const width = Math.max(a.length, b.length);
  const paddedA = a.padStart(width, "0");
  const paddedB = b.padStart(width, "0");
  const difference = parseInt(a, 2) - parseInt(b, 2);
  const result = difference >= 0 ? difference.toString(2).padStart(width, "0") : `-${Math.abs(difference).toString(2)}`;

  renderHtml(elements.subRes, `
    <div class="result-grid">
      <div class="step-item"><span>Step 1: Align bits</span><strong>${escapeHtml(paddedA)} - ${escapeHtml(paddedB)}</strong></div>
      <div class="step-item"><span>Step 2: Decimal check</span><strong>${parseInt(a, 2)} - ${parseInt(b, 2)} = ${difference}</strong></div>
      <div class="step-item"><span>Step 3: Borrow status</span><strong>${difference < 0 ? "Borrow/sign needed" : "No final borrow"}</strong></div>
      <div class="step-item"><span>Final binary result</span><strong>${escapeHtml(result)}</strong></div>
    </div>
  `);
}

function normalizeExpression(expression) {
  return expression
    .toUpperCase()
    .replace(/\s+/g, "")
    .replace(/\u00b7/g, ".")
    .replace(/\*/g, ".")
    .replace(/\+/g, "+");
}

function literalSet(term) {
  return term.split(".").filter(Boolean).sort();
}

function simplifyBooleanExpression() {
  const raw = elements.boolExpr.value.trim();
  const expression = normalizeExpression(raw);

  if (!expression || !/^[A-Z01'.+]+$/.test(expression)) {
    renderMessage(elements.boolRes, "Enter an expression using variables, dot, plus, and apostrophe.", "status-error");
    return;
  }

  const terms = expression.split("+").filter(Boolean);
  const simplifiedTerms = [];

  terms.forEach((term) => {
    const literals = [...new Set(literalSet(term))];
    const hasContradiction = literals.some((literal) => literals.includes(`${literal}'`));
    if (!hasContradiction) {
      simplifiedTerms.push(literals.join(".") || "1");
    }
  });

  let resultTerms = [...new Set(simplifiedTerms)];

  // Absorption rule: A + A.B = A
  resultTerms = resultTerms.filter((term) => {
    const literals = literalSet(term);
    return !resultTerms.some((other) => {
      if (other === term) {
        return false;
      }
      const otherLiterals = literalSet(other);
      return otherLiterals.every((literal) => literals.includes(literal));
    });
  });

  // Simple distributive factoring: A.B + A.C = A.(B + C)
  let display = resultTerms.join(" + ") || "0";
  if (resultTerms.length === 2) {
    const first = literalSet(resultTerms[0]);
    const second = literalSet(resultTerms[1]);
    const common = first.filter((literal) => second.includes(literal));
    if (common.length > 0) {
      const leftRest = first.filter((literal) => !common.includes(literal)).join(".");
      const rightRest = second.filter((literal) => !common.includes(literal)).join(".");
      display = `${common.join(".")}.(${leftRest || "1"} + ${rightRest || "1"})`;
    }
  }

  renderResult(elements.boolRes, [
    { label: "Original Expression", value: raw },
    { label: "Simplified Expression", value: display },
    { label: "Rule Used", value: "Duplicate removal, contradiction cleanup, absorption, and simple factoring" }
  ]);
}

function generateTruthTable() {
  const count = Number(elements.truthVars.value.trim());
  if (!Number.isInteger(count) || count < 1 || count > 5) {
    renderMessage(elements.truthRes, "Enter a variable count from 1 to 5.", "status-error");
    return;
  }

  const headers = Array.from({ length: count }, (_, index) => String.fromCharCode(65 + index));
  const rows = Array.from({ length: 2 ** count }, (_, row) => {
    return row.toString(2).padStart(count, "0").split("");
  });

  renderHtml(elements.truthRes, renderTable(headers, rows));
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
    { label: "XNOR", value: (aNum ^ bNum) ? 0 : 1 },
    { label: "NOT A", value: aNum ? 0 : 1 }
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

function evaluateGate(gate, a, b) {
  const first = Number(a);
  const second = Number(b);

  const operations = {
    AND: first & second,
    OR: first | second,
    NOT: first ? 0 : 1,
    NAND: (first & second) ? 0 : 1,
    NOR: (first | second) ? 0 : 1,
    XOR: first ^ second,
    XNOR: (first ^ second) ? 0 : 1
  };

  return operations[gate];
}

function simulateGate() {
  const gate = elements.simGate.value;
  const a = elements.simA.value;
  const b = elements.simB.value;
  const output = evaluateGate(gate, a, b);
  const secondWire = gate === "NOT" ? "" : `<div class="wire">B = ${b}</div>`;

  renderHtml(elements.simRes, `
    <div class="gate-diagram">
      <div class="wire-stack">
        <div class="wire">A = ${a}</div>
        ${secondWire}
      </div>
      <div class="gate-shape">${escapeHtml(gate)}</div>
      <div class="gate-output">Y = ${output}</div>
    </div>
  `);
}

function validateBits(target, values) {
  if (values.every((value) => isBit(value))) {
    return true;
  }
  renderMessage(target, "Use only single-bit inputs 0 or 1.", "status-error");
  return false;
}

function renderCircuitResult(target, title, rows, tableHeaders, tableRows) {
  renderHtml(target, `
    <div class="note-block"><strong>${escapeHtml(title)}</strong></div>
    <div class="result-grid">
      ${rows.map((row) => `
        <div class="result-item">
          <span class="result-label">${escapeHtml(row.label)}</span>
          <span class="result-value">${escapeHtml(row.value)}</span>
        </div>
      `).join("")}
    </div>
    ${tableHeaders ? `<div class="circuit-table">${renderTable(tableHeaders, tableRows)}</div>` : ""}
  `);
}

function simulateHalfAdder() {
  const a = elements.halfA.value.trim();
  const b = elements.halfB.value.trim();
  if (!validateBits(elements.halfAdderRes, [a, b])) {
    return;
  }

  const aNum = Number(a);
  const bNum = Number(b);
  renderCircuitResult(
    elements.halfAdderRes,
    "Half Adder: Sum = A XOR B, Carry = A.B",
    [
      { label: "Sum", value: aNum ^ bNum },
      { label: "Carry", value: aNum & bNum }
    ],
    ["A", "B", "Sum", "Carry"],
    [["0", "0", "0", "0"], ["0", "1", "1", "0"], ["1", "0", "1", "0"], ["1", "1", "0", "1"]]
  );
}

function simulateFullAdder() {
  const a = elements.fullA.value.trim();
  const b = elements.fullB.value.trim();
  const cin = elements.fullCin.value.trim();
  if (!validateBits(elements.fullAdderRes, [a, b, cin])) {
    return;
  }

  const total = Number(a) + Number(b) + Number(cin);
  renderCircuitResult(
    elements.fullAdderRes,
    "Full Adder: Sum = A XOR B XOR Cin, Cout = majority(A,B,Cin)",
    [
      { label: "Sum", value: total % 2 },
      { label: "Carry Out", value: total > 1 ? 1 : 0 }
    ],
    ["A", "B", "Cin", "Sum", "Cout"],
    [["0", "0", "0", "0", "0"], ["0", "0", "1", "1", "0"], ["0", "1", "0", "1", "0"], ["0", "1", "1", "0", "1"], ["1", "0", "0", "1", "0"], ["1", "0", "1", "0", "1"], ["1", "1", "0", "0", "1"], ["1", "1", "1", "1", "1"]]
  );
}

function simulateFullSubtractor() {
  const a = elements.fullSubA.value.trim();
  const b = elements.fullSubB.value.trim();
  const bin = elements.fullSubBin.value.trim();
  if (!validateBits(elements.fullSubRes, [a, b, bin])) {
    return;
  }

  const aNum = Number(a);
  const bNum = Number(b);
  const binNum = Number(bin);
  const difference = aNum ^ bNum ^ binNum;
  const borrow = ((!aNum && bNum) || (!aNum && binNum) || (bNum && binNum)) ? 1 : 0;

  renderCircuitResult(
    elements.fullSubRes,
    "Full Subtractor: Difference = A XOR B XOR Bin",
    [
      { label: "Difference", value: difference },
      { label: "Borrow Out", value: borrow }
    ],
    ["A", "B", "Bin", "Difference", "Bout"],
    [["0", "0", "0", "0", "0"], ["0", "0", "1", "1", "1"], ["0", "1", "0", "1", "1"], ["0", "1", "1", "0", "1"], ["1", "0", "0", "1", "0"], ["1", "0", "1", "0", "0"], ["1", "1", "0", "0", "0"], ["1", "1", "1", "1", "1"]]
  );
}

function compareBinaryValues() {
  const a = elements.compA.value.trim();
  const b = elements.compB.value.trim();
  if (!isBinary(a) || !isBinary(b)) {
    renderMessage(elements.compareRes, "Enter valid binary values for A and B.", "status-error");
    return;
  }

  const aDec = parseInt(a, 2);
  const bDec = parseInt(b, 2);
  const relation = aDec > bDec ? "A > B" : aDec < bDec ? "A < B" : "A = B";

  renderResult(elements.compareRes, [
    { label: "A Decimal", value: aDec },
    { label: "B Decimal", value: bDec },
    { label: "Comparator Output", value: relation },
    { label: "A > B", value: aDec > bDec ? 1 : 0 },
    { label: "A = B", value: aDec === bDec ? 1 : 0 },
    { label: "A < B", value: aDec < bDec ? 1 : 0 }
  ]);
}

function buildCanonicalPos(variableCount, minterms) {
  const variables = kmapLayouts[variableCount].variables;
  const max = (2 ** variableCount) - 1;
  const maxterms = [];

  for (let value = 0; value <= max; value += 1) {
    if (!minterms.includes(value)) {
      const bits = value.toString(2).padStart(variableCount, "0");
      const term = bits
        .split("")
        .map((bit, index) => bit === "0" ? variables[index] : `${variables[index]}'`)
        .join(" + ");
      maxterms.push(`(${term})`);
    }
  }

  return maxterms.join(".");
}

function generateCanonicalForms() {
  const variableCount = Number(elements.canonVars.value.trim());
  if (![2, 3, 4].includes(variableCount)) {
    renderMessage(elements.canonicalRes, "Canonical forms support 2, 3, or 4 variables.", "status-error");
    return;
  }

  const minterms = parseMinterms(elements.canonMinterms.value.trim(), variableCount);
  if (!minterms) {
    renderMessage(elements.canonicalRes, `Enter valid minterms from 0 to ${(2 ** variableCount) - 1}.`, "status-error");
    return;
  }

  const max = (2 ** variableCount) - 1;
  const maxterms = Array.from({ length: max + 1 }, (_, index) => index).filter((item) => !minterms.includes(item));
  renderResult(elements.canonicalRes, [
    { label: "Variables", value: kmapLayouts[variableCount].variables.join(", ") },
    { label: "Minterms", value: `m(${minterms.join(", ")})` },
    { label: "Maxterms", value: `M(${maxterms.join(", ") || "none"})` },
    { label: "Canonical SOP", value: buildCanonicalSop(variableCount, minterms) || "0" },
    { label: "Canonical POS", value: buildCanonicalPos(variableCount, minterms) || "1" }
  ]);
}

function verifyDeMorgan() {
  const a = elements.deMorganA.value.trim();
  const b = elements.deMorganB.value.trim();
  if (!validateBits(elements.deMorganRes, [a, b])) {
    return;
  }

  const aNum = Number(a);
  const bNum = Number(b);
  const firstLeft = (aNum & bNum) ? 0 : 1;
  const firstRight = (aNum ? 0 : 1) | (bNum ? 0 : 1);
  const secondLeft = (aNum | bNum) ? 0 : 1;
  const secondRight = (aNum ? 0 : 1) & (bNum ? 0 : 1);

  renderCircuitResult(
    elements.deMorganRes,
    "Both De Morgan laws match for the selected inputs.",
    [
      { label: "NOT(A.B)", value: firstLeft },
      { label: "A' + B'", value: firstRight },
      { label: "NOT(A + B)", value: secondLeft },
      { label: "A'.B'", value: secondRight }
    ],
    ["A", "B", "NOT(A.B)", "A' + B'", "NOT(A+B)", "A'.B'"],
    [["0", "0", "1", "1", "1", "1"], ["0", "1", "1", "1", "0", "0"], ["1", "0", "1", "1", "0", "0"], ["1", "1", "0", "0", "0", "0"]]
  );
}

function simulateCounter() {
  const bits = Number(elements.counterBits.value.trim());
  if (!Number.isInteger(bits) || bits < 2 || bits > 5) {
    renderMessage(elements.counterRes, "Enter a counter size from 2 to 5 bits.", "status-error");
    return;
  }

  const rows = Array.from({ length: 2 ** bits }, (_, index) => [
    String(index),
    index.toString(2).padStart(bits, "0")
  ]);

  renderHtml(elements.counterRes, `
    <div class="note-block"><strong>${bits}-bit up counter</strong> cycles through ${2 ** bits} states.</div>
    ${renderTable(["Clock Pulse", "State"], rows)}
  `);
}

function simulateShiftRegister() {
  const registerValue = elements.shiftRegister.value.trim();
  const serial = elements.shiftSerial.value.trim();
  const direction = elements.shiftDirection.value;

  if (!/^[01]{4}$/.test(registerValue) || !isBit(serial)) {
    renderMessage(elements.shiftRes, "Use a 4-bit register and a serial input of 0 or 1.", "status-error");
    return;
  }

  const nextState = direction === "right"
    ? serial + registerValue.slice(0, 3)
    : registerValue.slice(1) + serial;
  const shiftedOut = direction === "right" ? registerValue[3] : registerValue[0];

  renderHtml(elements.shiftRes, `
    <div class="register-visual">
      ${registerValue.split("").map((bit) => `<span>${bit}</span>`).join("")}
      <strong>${direction === "right" ? "->" : "<-"}</strong>
      ${nextState.split("").map((bit) => `<span>${bit}</span>`).join("")}
    </div>
    <div class="result-grid">
      <div class="result-item"><span class="result-label">Original State</span><span class="result-value">${registerValue}</span></div>
      <div class="result-item"><span class="result-label">Serial Input</span><span class="result-value">${serial}</span></div>
      <div class="result-item"><span class="result-label">Shifted Out</span><span class="result-value">${shiftedOut}</span></div>
      <div class="result-item"><span class="result-label">Next State</span><span class="result-value">${nextState}</span></div>
    </div>
  `);
}

function decimalToTwosComplement(decimalValue, bits) {
  const limit = 2 ** bits;
  return (decimalValue < 0 ? limit + decimalValue : decimalValue)
    .toString(2)
    .padStart(bits, "0");
}

function convertSignedMagnitude() {
  const decimalValue = Number(elements.signedDecimal.value.trim());
  const bits = Number(elements.signedBits.value.trim());

  if (!Number.isInteger(decimalValue) || !Number.isInteger(bits) || bits < 2 || bits > 16) {
    renderMessage(elements.signedMagRes, "Enter an integer decimal value and a bit width from 2 to 16.", "status-error");
    return;
  }

  const magnitudeLimit = (2 ** (bits - 1)) - 1;
  if (Math.abs(decimalValue) > magnitudeLimit) {
    renderMessage(elements.signedMagRes, `This value needs more than ${bits} bits in signed magnitude.`, "status-error");
    return;
  }

  const signBit = decimalValue < 0 ? "1" : "0";
  const magnitude = Math.abs(decimalValue).toString(2).padStart(bits - 1, "0");
  const twosMin = -(2 ** (bits - 1));
  const twosMax = (2 ** (bits - 1)) - 1;
  const twosValue = decimalValue >= twosMin && decimalValue <= twosMax
    ? decimalToTwosComplement(decimalValue, bits)
    : "Out of range";

  renderResult(elements.signedMagRes, [
    { label: "Decimal", value: decimalValue },
    { label: "Sign Bit", value: signBit },
    { label: "Magnitude Bits", value: magnitude },
    { label: "Signed Magnitude", value: signBit + magnitude },
    { label: "2's Complement", value: twosValue }
  ]);
}

function convertTwosComplementToDecimal() {
  const binary = elements.twosToDecInput.value.trim();
  if (!isBinary(binary) || binary.length < 2 || binary.length > 16) {
    renderMessage(elements.twosToDecRes, "Enter a signed binary value from 2 to 16 bits.", "status-error");
    return;
  }

  const unsignedValue = parseInt(binary, 2);
  const decimalValue = binary[0] === "1" ? unsignedValue - (2 ** binary.length) : unsignedValue;

  renderResult(elements.twosToDecRes, [
    { label: "Input Binary", value: binary },
    { label: "Bit Width", value: binary.length },
    { label: "Unsigned Value", value: unsignedValue },
    { label: "Signed Decimal", value: decimalValue },
    { label: "Magnitude", value: Math.abs(decimalValue).toString(2) }
  ]);
}

function encodeDecimalDigitCodes() {
  const value = elements.digitCodeInput.value.trim();
  if (!isDecimal(value)) {
    renderMessage(elements.digitCodeRes, "Enter decimal digits only.", "status-error");
    return;
  }

  const rows = value.split("").map((digit) => {
    const decimal = Number(digit);
    return [
      digit,
      decimal.toString(2).padStart(4, "0"),
      (decimal + 3).toString(2).padStart(4, "0"),
      binaryToGrayCode(decimal.toString(2).padStart(4, "0"))
    ];
  });

  renderHtml(elements.digitCodeRes, `
    ${renderTable(["Digit", "BCD", "Excess-3", "4-bit Gray"], rows)}
  `);
}

function asciiToBinary() {
  const text = elements.asciiInput.value;
  if (!text) {
    renderMessage(elements.asciiRes, "Enter text to encode.", "status-error");
    return;
  }

  const rows = text.split("").map((char) => [
    char === " " ? "space" : char,
    char.charCodeAt(0),
    char.charCodeAt(0).toString(2).padStart(8, "0"),
    char.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")
  ]);

  renderHtml(elements.asciiRes, renderTable(["Character", "ASCII Decimal", "Binary", "Hex"], rows));
}

function binaryToAscii() {
  const groups = elements.asciiInput.value.trim().split(/\s+/).filter(Boolean);
  if (groups.length === 0 || groups.some((group) => !/^[01]{8}$/.test(group))) {
    renderMessage(elements.asciiRes, "Enter 8-bit binary groups separated by spaces.", "status-error");
    return;
  }

  const text = groups.map((group) => String.fromCharCode(parseInt(group, 2))).join("");
  renderResult(elements.asciiRes, [
    { label: "Binary Groups", value: groups.join(" ") },
    { label: "Decoded Text", value: text }
  ]);
}

function generateHammingCode() {
  const data = elements.hammingInput.value.trim();
  if (!/^[01]{4}$/.test(data)) {
    renderMessage(elements.hammingRes, "Enter exactly 4 data bits.", "status-error");
    return;
  }

  const d1 = Number(data[0]);
  const d2 = Number(data[1]);
  const d3 = Number(data[2]);
  const d4 = Number(data[3]);
  const p1 = d1 ^ d2 ^ d4;
  const p2 = d1 ^ d3 ^ d4;
  const p4 = d2 ^ d3 ^ d4;
  const code = `${p1}${p2}${d1}${p4}${d2}${d3}${d4}`;

  renderHtml(elements.hammingRes, `
    <div class="note-block"><strong>Hamming(7,4) even parity:</strong> positions 1, 2, and 4 are parity bits.</div>
    ${renderTable(["Position", "1", "2", "3", "4", "5", "6", "7"], [["Bit Type", "P1", "P2", "D1", "P4", "D2", "D3", "D4"], ["Value", p1, p2, d1, p4, d2, d3, d4]])}
    <div class="formula-text">Codeword: ${code}</div>
  `);
}

function calculateBitwiseOperations() {
  const a = elements.bitwiseA.value.trim();
  const b = elements.bitwiseB.value.trim();
  if (!isBinary(a) || !isBinary(b)) {
    renderMessage(elements.bitwiseRes, "Enter valid binary strings for A and B.", "status-error");
    return;
  }

  const width = Math.max(a.length, b.length);
  const paddedA = a.padStart(width, "0");
  const paddedB = b.padStart(width, "0");
  const mapBits = (callback) => paddedA
    .split("")
    .map((bit, index) => String(callback(Number(bit), Number(paddedB[index]))))
    .join("");

  renderResult(elements.bitwiseRes, [
    { label: "Aligned A", value: paddedA },
    { label: "Aligned B", value: paddedB },
    { label: "AND", value: mapBits((x, y) => x & y) },
    { label: "OR", value: mapBits((x, y) => x | y) },
    { label: "XOR", value: mapBits((x, y) => x ^ y) },
    { label: "NAND", value: mapBits((x, y) => (x & y) ? 0 : 1) },
    { label: "NOR", value: mapBits((x, y) => (x | y) ? 0 : 1) },
    { label: "XNOR", value: mapBits((x, y) => (x ^ y) ? 0 : 1) }
  ]);
}

function convertBinaryGroups() {
  const binary = elements.groupBinaryInput.value.trim();
  if (!isBinary(binary)) {
    renderMessage(elements.groupBinaryRes, "Enter a valid binary number.", "status-error");
    return;
  }

  const octalPadded = binary.padStart(Math.ceil(binary.length / 3) * 3, "0");
  const hexPadded = binary.padStart(Math.ceil(binary.length / 4) * 4, "0");
  const octalGroups = octalPadded.match(/.{3}/g);
  const hexGroups = hexPadded.match(/.{4}/g);

  renderResult(elements.groupBinaryRes, [
    { label: "Original Binary", value: binary },
    { label: "3-bit Groups", value: octalGroups.join(" ") },
    { label: "Octal", value: octalGroups.map((group) => parseInt(group, 2).toString(8)).join("") },
    { label: "4-bit Groups", value: hexGroups.join(" ") },
    { label: "Hexadecimal", value: hexGroups.map((group) => parseInt(group, 2).toString(16).toUpperCase()).join("") }
  ]);
}

function findMintermsMaxterms() {
  const variableCount = Number(elements.termVars.value.trim());
  const outputs = elements.truthOutputBits.value.trim();
  if (![2, 3, 4].includes(variableCount) || !isBinary(outputs) || outputs.length !== 2 ** variableCount) {
    renderMessage(elements.termsRes, "Use 2, 3, or 4 variables and exactly 2^n output bits.", "status-error");
    return;
  }

  const minterms = [];
  const maxterms = [];
  outputs.split("").forEach((bit, index) => {
    if (bit === "1") {
      minterms.push(index);
    } else {
      maxterms.push(index);
    }
  });

  renderResult(elements.termsRes, [
    { label: "Output Column", value: outputs },
    { label: "Minterms", value: `SOP m(${minterms.join(", ") || "none"})` },
    { label: "Maxterms", value: `POS M(${maxterms.join(", ") || "none"})` },
    { label: "Canonical SOP", value: buildCanonicalSop(variableCount, minterms) || "0" },
    { label: "Canonical POS", value: buildCanonicalPos(variableCount, minterms) || "1" }
  ]);
}

function renderStaticReferenceTables() {
  renderHtml(elements.flipFlopTables, `
    <h4>SR Flip-Flop</h4>
    ${renderTable(["Qn", "Qn+1", "S", "R"], [["0", "0", "0", "X"], ["0", "1", "1", "0"], ["1", "0", "0", "1"], ["1", "1", "X", "0"]])}
    <h4>JK Flip-Flop</h4>
    ${renderTable(["Qn", "Qn+1", "J", "K"], [["0", "0", "0", "X"], ["0", "1", "1", "X"], ["1", "0", "X", "1"], ["1", "1", "X", "0"]])}
    <h4>D Flip-Flop</h4>
    ${renderTable(["Qn", "Qn+1", "D"], [["0", "0", "0"], ["0", "1", "1"], ["1", "0", "0"], ["1", "1", "1"]])}
    <h4>T Flip-Flop</h4>
    ${renderTable(["Qn", "Qn+1", "T"], [["0", "0", "0"], ["0", "1", "1"], ["1", "0", "1"], ["1", "1", "0"]])}
  `);

  renderHtml(elements.universalGates, `
    <div class="note-block"><strong>NAND:</strong> Output is 0 only when all inputs are 1. NAND can build NOT, AND, OR, and any combinational circuit.</div>
    ${renderTable(["A", "B", "NAND"], [["0", "0", "1"], ["0", "1", "1"], ["1", "0", "1"], ["1", "1", "0"]])}
    <div class="note-block"><strong>NOR:</strong> Output is 1 only when all inputs are 0. NOR is also functionally complete.</div>
    ${renderTable(["A", "B", "NOR"], [["0", "0", "1"], ["0", "1", "0"], ["1", "0", "0"], ["1", "1", "0"]])}
  `);

  renderHtml(elements.encoderDecoder, `
    <h4>2 to 4 Decoder</h4>
    ${renderTable(["A", "B", "D0", "D1", "D2", "D3"], [["0", "0", "1", "0", "0", "0"], ["0", "1", "0", "1", "0", "0"], ["1", "0", "0", "0", "1", "0"], ["1", "1", "0", "0", "0", "1"]])}
    <h4>4 to 2 Encoder</h4>
    ${renderTable(["I0", "I1", "I2", "I3", "A", "B"], [["1", "0", "0", "0", "0", "0"], ["0", "1", "0", "0", "0", "1"], ["0", "0", "1", "0", "1", "0"], ["0", "0", "0", "1", "1", "1"]])}
  `);

  renderHtml(elements.muxDemux, `
    <div class="note-block"><strong>4:1 MUX:</strong> Select lines S1 and S0 choose one input line and forward it to output Y.</div>
    ${renderTable(["S1", "S0", "Y"], [["0", "0", "I0"], ["0", "1", "I1"], ["1", "0", "I2"], ["1", "1", "I3"]])}
    <div class="note-block"><strong>1:4 DEMUX:</strong> Select lines route one input D to exactly one output.</div>
    ${renderTable(["S1", "S0", "Y0", "Y1", "Y2", "Y3"], [["0", "0", "D", "0", "0", "0"], ["0", "1", "0", "D", "0", "0"], ["1", "0", "0", "0", "D", "0"], ["1", "1", "0", "0", "0", "D"]])}
  `);
}

function renderQuiz() {
  elements.quizList.innerHTML = quizQuestions.map((item, index) => `
    <div class="quiz-item">
      <p>${index + 1}. ${escapeHtml(item.question)}</p>
      <div class="quiz-options">
        ${item.options.map((option) => `
          <label>
            <input type="radio" name="quiz-${index}" value="${escapeHtml(option)}">
            ${escapeHtml(option)}
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function checkQuizAnswers() {
  let score = 0;
  const missed = [];

  quizQuestions.forEach((item, index) => {
    const selected = document.querySelector(`input[name="quiz-${index}"]:checked`);
    if (selected && selected.value === item.answer) {
      score += 1;
    } else {
      missed.push(`${index + 1}. ${item.answer}`);
    }
  });

  const rows = [
    { label: "Score", value: `${score} / ${quizQuestions.length}` },
    { label: "Result", value: score >= 7 ? "Great work" : "Keep practicing" }
  ];

  if (missed.length > 0) {
    rows.push({ label: "Correct answers to review", value: missed.join(", ") });
  }

  renderResult(elements.quizRes, rows);
}

function setupPageMotion() {
  const pages = document.querySelectorAll(".page-view");
  const sections = document.querySelectorAll(".section-block");
  const navItems = document.querySelectorAll(".nav-links a");
  const validPages = new Set(["home", ...Array.from(sections).map((section) => section.id)]);

  function showPage() {
    const requestedPage = window.location.hash.replace("#", "") || "home";
    const activePage = validPages.has(requestedPage) ? requestedPage : "home";

    pages.forEach((page) => {
      const isActive = page.dataset.page === activePage;
      page.classList.toggle("active-page", isActive);
      page.classList.toggle("is-visible", isActive);
    });

    navItems.forEach((item) => {
      item.classList.toggle("active", item.getAttribute("href") === `#${activePage}`);
    });

    if (window.location.hash.replace("#", "") !== activePage) {
      window.location.hash = activePage;
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("hashchange", showPage);
  showPage();
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
    [elements.compInput, calculateComplements],
    [elements.subA, binarySubtractionSteps],
    [elements.subB, binarySubtractionSteps],
    [elements.boolExpr, simplifyBooleanExpression],
    [elements.truthVars, generateTruthTable],
    [elements.kmapVars, generateKMap],
    [elements.kmapMinterms, generateKMap],
    [elements.gateA, logicGateTool],
    [elements.gateB, logicGateTool],
    [elements.halfA, simulateHalfAdder],
    [elements.halfB, simulateHalfAdder],
    [elements.fullA, simulateFullAdder],
    [elements.fullB, simulateFullAdder],
    [elements.fullCin, simulateFullAdder],
    [elements.fullSubA, simulateFullSubtractor],
    [elements.fullSubB, simulateFullSubtractor],
    [elements.fullSubBin, simulateFullSubtractor],
    [elements.compA, compareBinaryValues],
    [elements.compB, compareBinaryValues],
    [elements.canonVars, generateCanonicalForms],
    [elements.canonMinterms, generateCanonicalForms],
    [elements.deMorganA, verifyDeMorgan],
    [elements.deMorganB, verifyDeMorgan],
    [elements.counterBits, simulateCounter],
    [elements.shiftRegister, simulateShiftRegister],
    [elements.shiftSerial, simulateShiftRegister],
    [elements.signedDecimal, convertSignedMagnitude],
    [elements.signedBits, convertSignedMagnitude],
    [elements.twosToDecInput, convertTwosComplementToDecimal],
    [elements.digitCodeInput, encodeDecimalDigitCodes],
    [elements.asciiInput, asciiToBinary],
    [elements.hammingInput, generateHammingCode],
    [elements.bitwiseA, calculateBitwiseOperations],
    [elements.bitwiseB, calculateBitwiseOperations],
    [elements.groupBinaryInput, convertBinaryGroups],
    [elements.termVars, findMintermsMaxterms],
    [elements.truthOutputBits, findMintermsMaxterms],
    [elements.arithA, () => binaryArithmetic("add")],
    [elements.arithB, () => binaryArithmetic("add")]
  ]);

  const action = actionMap.get(document.activeElement);
  if (action) {
    action();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  setupPageMotion();
  renderStaticReferenceTables();
  renderQuiz();
  simulateGate();
});

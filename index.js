const fs = require("fs");
const XLSX = require("xlsx");
const xmlbuilder = require("xmlbuilder");
const path = require("path");

// Translations file name
const workbook = XLSX.readFile("gt-app-muti-lang.xlsx");
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const xmlFileName = "ta-strings.xml";

const jsonData = XLSX.utils.sheet_to_json(worksheet);

const xmlRoot = xmlbuilder.create("resources");

jsonData.forEach((row) => {
  const key = row["Key"];
  // Use same Column name which is in excel
  // Other one is fallback in case it does not find it show english translations
  const translation = row["ta"] || row["English"];
  xmlRoot.ele("string", { name: key }, translation);
});

// Convert the XML to a string
const xmlString = xmlRoot.end({ pretty: true });
const folderName = "translations";
const translationsFolderPath = path.join(__dirname, folderName);

if (!fs.existsSync(translationsFolderPath)) {
  fs.mkdirSync(translationsFolderPath);
}

const xmlFilePath = path.join(translationsFolderPath, xmlFileName);

// Write the XML to a file
fs.writeFileSync(xmlFilePath, xmlString, "utf8");

console.log(`Translations are ready in ${xmlFileName}`);

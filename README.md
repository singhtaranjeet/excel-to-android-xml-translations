# Excel to XML Translation Script 🌐💻

This is a Node.js script that reads an Excel file with translation keys and respective translations in various languages. It generates an XML file with these translations in a format suitable for applications that support multi-language features.

## Requirements 🔍

- [Node.js](https://nodejs.org/en/) installed on your machine.
- npm (Comes with Node.js).

## Dependencies 📚

This script uses the following Node.js packages:

- [fs](https://nodejs.dev/learn/the-nodejs-fs-module): Node.js built-in file system module to manage file I/O operations.
- [xlsx](https://www.npmjs.com/package/xlsx): A parser and writer for various spreadsheet formats.
- [xmlbuilder](https://www.npmjs.com/package/xmlbuilder): An XML builder for node.js.
- [path](https://nodejs.dev/learn/the-nodejs-path-module): Node.js built-in module for handling file and directory paths.

## Setup & Run 🏁

1. Clone this repository and navigate into it.

   ```bash
   git clone excel-to-android-xml-translations.git
   cd excel-to-android-xml-translations
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Run the script:

   ```bash
   node index.js
   ```

## How it Works ⚙️

The script reads from an Excel file (default: 'gt-app-muti-lang.xlsx') and expects a sheet with columns labeled 'Key', 'ta', and 'English'. The 'Key' column is used as the identifier, 'ta' contains the translations, and 'English' is a fallback if the 'ta' field is empty.


Your excel file should be in the following format:

| your_key | english translation | tamil translation |

| Key | English | ta |
| --- | --- | --- |
| greetings | Hello! | வணக்கம்! |

If you want to use different column names or a different Excel file, you need to modify the script:

- To change the source Excel file, replace `'gt-app-muti-lang.xlsx'` in the `XLSX.readFile()` function with your file name.
- To use a different column for the translation, replace `'ta'` in `row["ta"]` with your column name.
- To change the fallback column, replace `'English'` in `row["English"]` with your column name.

The script generates an XML file with the name 'ta-strings.xml', placing it in a directory named 'translations'. If the directory does not exist, it creates one.

## Contributing 🤝

Fork the repository, create a new branch for your features or fixes, and submit a pull request. All contributions are welcome!


## License ⚖️

This project is licensed under the MIT license.

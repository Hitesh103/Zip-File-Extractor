# Zip Extractor

Zip Extractor is a tool for extracting files from ZIP archives. It is built using the `extract-zip` npm module.


## Installation

To install Zip Extractor, follow these steps:

1. Clone the repository:
  ```bash
  git clone https://github.com/Hitesh103/Zip-File-Extractor.git
```

2. Navigate to the directory where the repository was cloned:
  ```bash
  cd Zip-Extractor
```
3. Install the required dependencies:
  ```bash
  npm i extract-zip
```
 
 ## Usage

 To extract files from a ZIP archive, run the following command:

```bash

  node extract.js path/to/archive.zip
```


This will extract the contents of `archive.zip` to the current directory.

## Configuration


You can configure the behavior of Zip Extractor by editing the config.json file. The following options are available:

• `destination`: The directory where the extracted files will be saved. Default: `./extracted`

• `overwrite`: Whether to overwrite existing files with the same names. Default: `false`

﻿function addFX(){var filetypes= new Array();var result=window["cep"]["fs"]["showOpenDialog"](false,false);if(result["err"]== 0){jsxPfad= result["data"];var csInterface= new CSInterface();loadAddFX();csInterface["evalScript"]("addFX(\""+ jsxPfad+ "\")",refresh)}else {alert("Something went wrong");return}}function saveMap(){var csInterface= new CSInterface();loadMylib();csInterface["evalScript"]("save_maplib()",refresh)}function loadMylib(){var csInterface= new CSInterface();var fileName="maplib_mylib.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function macOrPc(){if(navigator["userAgent"]["indexOf"]("Mac OS X")!=  -1){window["location"]["reload"](false);alert("If the new Map is not showing in the open Library please click the refresh button!")}else {window["location"]["reload"](false)}}function refresh(){window["location"]["reload"](false)}function loadAddFX(){var csInterface= new CSInterface();var fileName="maplib_add_map.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function uninstall(){var csInterface= new CSInterface();loadUninstall();csInterface["evalScript"]("uninstall()");hideMe()}function loadUninstall(){var csInterface= new CSInterface();var fileName="uninstall.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}
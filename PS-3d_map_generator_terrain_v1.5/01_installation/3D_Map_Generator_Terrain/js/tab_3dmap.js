﻿function process(method){showLoading();setTimeout(function(){method()},500)}function hideMe(){var csInterface= new CSInterface();loadProgress();csInterface["evalScript"]("progress()",myNumber);function myNumber(inValue){var ok=inValue;if(ok== 666){hideLoading()}}}function hideMeStart(){var csInterface= new CSInterface();loadProgress();csInterface["evalScript"]("progress()",myNumber);function myNumber(inValue){var ok=inValue;if(ok== 666){hideLoading();window["location"]["href"]= "styling.html"}}}function loadProgress(){var csInterface= new CSInterface();var fileName="progress.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function newDoc(){var csInterface= new CSInterface();var w=document["getElementById"]("docWide")["value"];var h=document["getElementById"]("docHeight")["value"];loadShapelessDoc();csInterface["evalScript"]("newDoc(\""+ w+ "\", \""+ h+ "\")");hideMe()}function loadShapelessDoc(){var csInterface= new CSInterface();var fileName="i3dmg_terrain_new_doc.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function maplib(){window["location"]["href"]= "maplib.html"}function random_heightmap(hmName){loadHM();var csInterface= new CSInterface();csInterface["evalScript"]("start_random_hm(\""+ hmName+ "\")")}function loadHM(){var csInterface= new CSInterface();var fileName="i3dmg_terrain_random_heightmaps.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function go_nDoc_right(){loadNDR();var csInterface= new CSInterface();var richtung="right";var ms=getSliderValue("slider_terrain");csInterface["evalScript"]("start(\""+ richtung+ "\" , \""+ ms+ "\")");hideMeStart()}function go_nDoc_left(){loadNDR();var csInterface= new CSInterface();var richtung="left";var ms=getSliderValue("slider_terrain");csInterface["evalScript"]("start(\""+ richtung+ "\" , \""+ ms+ "\")");hideMeStart()}function go_nDoc_frontal(){loadNDR();var csInterface= new CSInterface();var richtung="frontal";var ms=getSliderValue("slider_terrain");csInterface["evalScript"]("start(\""+ richtung+ "\" , \""+ ms+ "\")");hideMeStart()}function loadNDR(){var csInterface= new CSInterface();var fileName="i3dmg_terrain_create_3d_map.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function random_terrain_1(){var csInterface= new CSInterface();loadRandom();csInterface["evalScript"]("random_terrain_1()");hideMe()}function random_terrain_2(){var csInterface= new CSInterface();loadRandom();csInterface["evalScript"]("random_terrain_2()");hideMe()}function loadRandom(){var csInterface= new CSInterface();var fileName="i3dmg_terrain_random_terrain.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function openGradient(){var csInterface= new CSInterface();loadGradientOpen();csInterface["evalScript"]("open_gradient()")}function loadGradientOpen(){var csInterface= new CSInterface();var fileName="i3dmg_terrain_open_gradient.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function go_gradient(result){var gradientBrush=getSliderValue("slider_gradient");var csInterface= new CSInterface();loadSetGradient();csInterface["evalScript"]("setBrushColor(\""+ result+ "\")")}function loadSetGradient(){var csInterface= new CSInterface();var fileName="i3dmg_terrain_set_gradient_brush_color.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function addLay(){var csInterface= new CSInterface();loadAddDel();csInterface["evalScript"](" addlayer()");hideMe()}function delLay(){var csInterface= new CSInterface();loadAddDel();csInterface["evalScript"](" delLayer()");hideMe()}function loadAddDel(){var csInterface= new CSInterface();var fileName="i3dmg_geo_AddDelLayer.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function gl(){var csInterface= new CSInterface();loadGl();csInterface["evalScript"](" gl()")}function loadGl(){var csInterface= new CSInterface();var fileName="i3dmg_geo_gl.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function selectBrush(b,c){var csInterface= new CSInterface();loadSetGradient();var e=b;var f=c;csInterface["evalScript"]("selectBrush(\""+ e+ "\", \""+ f+ "\")")}function addNewLayer(){var csInterface= new CSInterface();loadBlurMeltAdd();csInterface["evalScript"]("add_empty_layer()")}function addNewHelper(){var csInterface= new CSInterface();loadBlurMeltAdd();csInterface["evalScript"]("add_helper()")}function loadBlurMeltAdd(){var csInterface= new CSInterface();var fileName="i3dmg_terrain_blur_melt_helper.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function blurMe(){var csInterface= new CSInterface();loadBlurMeltAdd();var blurV=getSliderValue("slider_blur");csInterface["evalScript"]("blur(\""+ blurV+ "\")")}function meltMe(){var csInterface= new CSInterface();loadBlurMeltAdd();var meltV=getSliderValue("slider_melt");csInterface["evalScript"]("melt(\""+ meltV+ "\")")}function blurMe2(){var csInterface= new CSInterface();loadBlurMeltAdd();var blurV2=getSliderValue("slider_brushes_blur");csInterface["evalScript"]("blur(\""+ blurV2+ "\")")}function meltMe2(){var csInterface= new CSInterface();loadBlurMeltAdd();var meltV2=getSliderValue("slider_brushes_melt");csInterface["evalScript"]("melt(\""+ meltV2+ "\")")}function uninstall(){var csInterface= new CSInterface();loadUninstall();csInterface["evalScript"]("uninstall()")}function loadUninstall(){var csInterface= new CSInterface();var fileName="uninstall.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function refreshPanel(){var csInterface= new CSInterface();loadRefresh();csInterface["evalScript"]("refreshPanel()");var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/lib/";csInterface["evalScript"]("loadStylesAuto(\""+ extensionRoot+ "\")");hideMe()}function loadRefresh(){var csInterface= new CSInterface();var fileName="refreshPanel.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}function urlHeightmapper(){cep["util"]["openURLInDefaultBrowser"]("https://www.3d-map-generator.com/heightmapper/index.php")}function urlHome(){cep["util"]["openURLInDefaultBrowser"]("http://www.3d-map-generator.com")}function topView(tvp_name){showLoading();setTimeout(function(){startTopView(tvp_name)},500)}function startTopView(tvp_name){loadTvPresets();var csInterface= new CSInterface();if(jQuery("#c1")["hasClass"]("active")){legend= 1}else {legend= 2};var etv=getSliderValue("slider_top_view");var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/lib/";csInterface["evalScript"]("start_tvp(\""+ tvp_name+ "\", \""+ legend+ "\", \""+ etv+ "\", \""+ extensionRoot+ "\")");hideMeStart()}function loadTvPresets(){var csInterface= new CSInterface();var fileName="i3dmg_terrain_tv_presets.jsx";var extensionRoot=csInterface["getSystemPath"](SystemPath.EXTENSION)+ "/host/";csInterface["evalScript"]("$.evalFile(\""+ extensionRoot+ fileName+ "\")")}
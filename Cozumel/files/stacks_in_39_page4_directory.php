<?php

function getImageMetadata($strFilename)  {
	$arrSize = getimagesize($strFilename,$arrInfo);
	$arrIPTC = iptcparse($arrInfo['APP13']);
	$captionIPTC = '';
	if (is_array($arrIPTC)) {
		// if (array_key_exists('2#105', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Title: ' */. $arrIPTC['2#105'][0] . ' ';
		// }
		// if (array_key_exists('2#005', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Document Title: ' */. $arrIPTC['2#005'][0] . ' ';
		// }
		// if (array_key_exists('2#120', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Description: ' */. $arrIPTC['2#120'][0] . ' ';
		// }
		// if (array_key_exists('2#122', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Description Author: ' */. $arrIPTC['2#122'][0] . ' ';
		// }
		// if (array_key_exists('2#080', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Author: ' */. $arrIPTC['2#080'][0] . ' ';
		// }
		// if (array_key_exists('2#085', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Author Title: ' */. $arrIPTC['2#085'][0] . ' ';
		// }
		// if (array_key_exists('2#116', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Copyright: ' */. $arrIPTC['2#116'][0] . ' ';
		// }
		// if (array_key_exists('2#025', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Keywords: ' */. $arrIPTC['2#025'][0] . ' ';
		// }
		// if (array_key_exists('2#015', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Category: ' */. $arrIPTC['2#015'][0] . ' ';
		// }
		// if (array_key_exists('2#090', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'City: ' */. $arrIPTC['2#090'][0] . ' ';
		// }
		// if (array_key_exists('2#095', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'State: ' */. $arrIPTC['2#095'][0] . ' ';
		// }
		// if (array_key_exists('2#101', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Country: ' */. $arrIPTC['2#101'][0] . ' ';
		// }
		// if (array_key_exists('2#040', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Instruction: ' */. $arrIPTC['2#040'][0] . ' ';
		// }
		// if (array_key_exists('2#055', $arrIPTC)) {
		// 	$captionIPTC = $captionIPTC /*. 'Creation Time: ' */. substr($arrIPTC['2#055'][0],6,2).'.'.substr($arrIPTC['2#055'][0],4,2).'.'.substr($arrIPTC['2#055'][0],0,4);
		// }
		
		if (array_key_exists('2#105', $arrIPTC)) {
			$captionIPTC = $captionIPTC /*. 'Headline: ' */. $arrIPTC['2#105'][0] . ' ';
		}
		
		
		
		
	}
	
	$result = array(
    	"caption" => $captionIPTC,
    	"width" => $arrSize[0],
    	"height" => $arrSize[1],
	);
	return $result;
}

//path to directory to scan
//has to end with /

$directoryLink = '<a href="../resources/cozumel2014/Cozumel14---1.jpg">';
$directory = substr($directoryLink, 9, strrpos($directoryLink, '/', 9) - 8);

$basicStyle = 'thumbnails';
$sliderTheme = 'idealImageSlider';

$displayLightboxCaption =  false;
$displayCaptionThumbnail = false;
$fileExtention = 'jpg';

//get all image files with a .jpg extension.
$directory = '../' . $directory;
if (strlen($directory) - strrpos($directory, '/') !== 1) {
	$directory = $directory . '/';
}
$directory_thumbs = $directory . 'thumbs/';  
$useThumbnailsDirectory = true;

$imagesTemp = glob($directory . '*');
$images = preg_grep('/\.' . $fileExtention . '$/i', $imagesTemp);
$imagesThumbTemp = glob($directory_thumbs . '*');
$imagesThumb = preg_grep('/\.' . $fileExtention . '$/i', $imagesThumbTemp);

if (sizeof($images) != sizeof($imagesThumb)){
	$images = array_combine($images, $images);
	$useThumbnailsDirectory = false;
} else {
	$images = array_combine($imagesThumb, $images);	
}

$html = '';
$json = array();
//add each file name to $html

foreach($images as $imageThumb => $image) {


	$imageMetadata = getImageMetadata($image);
	if ($useThumbnailsDirectory == true) {
		$imageMetadataThumb = getImageMetadata($imageThumb);	
	} else {
		$imageMetadataThumb = $imageMetadata;		
	}

	$caption = "";
	$captionThumb = "";
	if ($displayLightboxCaption == true){
		$caption = $imageMetadata['caption'];
	}
	if ($displayCaptionThumbnail == true){
		$captionThumb = $imageMetadataThumb['caption'];
	}

	$image = substr($image, 3);
	$imageThumb = substr($imageThumb, 3);

	if ($basicStyle === 'slider'){
		if ($sliderTheme === 'camera'){
			$html = $html . '<div data-thumb="' . $imageThumb . '" data-src="' . $image . '"></div>';
		// sliderTheme == idealImageSlider
		} else {
			
			if ($key === 0){
				$html = $html . '<img src="' . $image . '">';
			} else {
				$html = $html . '<img data-src="' . $image . '">';
			}
			
		}
	//basicStyle == thumbnails
	} else {
		$html = $html . '<a href="' . $image . '" ';
		
		$html = $html . '><img ';
		
		$html = $html . 'src="' . $imageThumb . '" height="' . $imageMetadataThumb['height'] . '" width="' . $imageMetadataThumb['width'] . '" /></a>';

		
		array_push($json, array('src' => $image, 'w' => $imageMetadata['width'], 'h' => $imageMetadata['height'], 'msrc' => $imageThumb, 'title' => $caption));
		
	}
}
echo '{"html":"' . rawurlencode($html) . '","json":" ' . rawurlencode(json_encode($json)) . ' "}';
?>


	var myOptions = {
		"nativeControlsForTouch": false,
		techOrder: ["azureHtml5JS", "flashSS", "html5FairPlayHLS","silverlightSS", "html5"],
		"logo": { "enabled": false },
		controls: true,
		autoplay: true,
		width: "640",
		height: "400",
		poster: ""
}

	
	 
myPlayer = amp("azuremediaplayer", myOptions);

myPlayer.src([
    { src: "http://mobicom.streaming.mediaservices.windows.net/743d9be7-bd1c-477f-bfd6-a1b96008ebd5/10 Best Places to Visit in Sri Lanka.ism/manifest", type: "application/vnd.ms-sstr+xml", streamingFormats: ["SMOOTH", "HLS","HLS-V3", "HLS-V4"]}, 
]);

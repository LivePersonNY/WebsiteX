import { useBlockProps, BlockControls, MediaUpload, MediaUploadCheck, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function MediaPicker({setAttributes, attributes, allowLottie}) {

	return (
		<>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={function(media) {
						if (media.mime == "application/json") {
							setAttributes({
								lottieFile: media.url,
								lottieId: media.id,
								mediaUrl: null,
								mediaId: null,
								mediaAlt: null
							});
						} else {
							setAttributes({
								mediaUrl: media.url,
								mediaId: media.id,
								mediaAlt: media.alt || "",
								lottieFile: null,
								lottieId: null
							});
						}
					}}
					value={attributes.mediaId || attributes.lottieId}
					allowedTypes={ allowLottie ? ['image', 'application/json', 'application/zip'] : ['image'] }
					render={({open}) => (
						<>
							{!attributes.lottieFile && <img className="imageSelector" src={attributes.mediaUrl || "https://picsum.photos/752/568?random=1"} onClick={open} />}
							{attributes.lottieFile && <lottie-player
							  	autoplay
							  	loop
							  	mode="normal"
							  	src={attributes.lottieFile}
							  	onClick={open}
								/>}
						</>
					)}
				/>
			</MediaUploadCheck>
		</>
	);

}

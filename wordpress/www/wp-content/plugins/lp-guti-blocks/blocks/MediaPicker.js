import { useBlockProps, BlockControls, MediaUpload, MediaUploadCheck, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import LottieFilePlayer from './LottieFilePlayer';

export default function MediaPicker({setAttributes, attributes, allowLottie, cssClass, clientId}) {

	const dateNow = Date.now();

	return (
		<>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={function(media) {
						if (media.mime == "application/json" || media.mime == "application/zip") {
							setAttributes({
								lottieFile: media.url,
								lottieId: media.id,
								mediaUrl: null,
								mediaId: null,
								mediaAlt: null,
								updated: dateNow
							});
							document.querySelector(`#block-${clientId}>dotlottie-player`).load(media.url);
						} else {
							setAttributes({
								mediaUrl: media.url,
								mediaId: media.id,
								mediaAlt: media.alt || "",
								lottieFile: null,
								lottieId: null,
								updated: dateNow
							});
						}
					}}
					value={attributes.mediaId || attributes.lottieId}
					allowedTypes={ allowLottie ? ['image', 'application/json', 'application/zip'] : ['image'] }
					render={({open}) => (
						<>
							{!attributes.lottieFile && attributes.mediaId && <img className={`imageSelector ${cssClass}`} src={attributes.mediaUrl} onClick={open} /> || <Button variant="link" onClick={open}>Select Image</Button>}
							{attributes.lottieFile && <LottieFilePlayer className={`imageSelector ${cssClass} ${attributes.lottieId}`} onClick={open} lottieFile={attributes.lottieFile} autoplay={true} loop={true} />}

							<Button variant="link" isDestructive={true} onClick={() => setAttributes({lottieFile: null, lottieId: null, mediaUrl: null, mediaId: null})}>Remove Image</Button>
						</>
					)}
				/>
			</MediaUploadCheck>
		</>
	);

}

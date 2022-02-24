import '@dotlottie/player-component';
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function LottieFilePlayer({lottieFile, autoplay, loop, onClick}) {

	let isLottie = lottieFile.indexOf('.lottie') >= 0;

	return (isLottie && (
		<dotlottie-player
		  autoplay={autoplay}
		  loop={loop}
		  mode="normal"
		  src={lottieFile}
		  onClick={onClick}
		/>
	)) || (
		<lottie-player
		autoplay={autoplay}
		  loop={loop}
		  mode="normal"
		  src={lottieFile}
		  onClick={onClick}
		/>
	)

}

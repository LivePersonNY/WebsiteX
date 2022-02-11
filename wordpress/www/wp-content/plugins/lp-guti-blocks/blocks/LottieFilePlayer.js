export default function LottieFilePlayer({lottieFile, autoplay, loop}) {

	return lottieFile && (
		<lottie-player
		  autoplay={autoplay}
		  loop={loop}
		  mode="normal"
		  src={lottieFile}
		/>
	)

}

export default function LineBreaks(textStr) {

	return textStr.replaceAll(/\n/gm, '<br>');

}

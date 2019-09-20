export const SUPPORT_LOCALES = ["ko", "en"];

export default function getMessages(locale: SUPPORT_LOCALE) {
	return import(`./assets/${locale}`);
}

import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { setIntlConfig, withIntl } from "storybook-addon-intl";

import koMessages from "app/common/intl/assets/ko.json";
import enMessages from "app/common/intl/assets/en.json";

const messagePack = {
	ko: koMessages,
	en: enMessages,
};

const getMessages = locale => messagePack[locale];

// Set intl configuration
setIntlConfig({
	locales: ["en", "ko"],
	defaultLocale: "en",
	getMessages,
});

addDecorator(withKnobs);
addDecorator(withIntl);

function loadStories() {
	const stories = require.context("../app", true, /stories\.tsx$/);
	stories.keys().forEach(filename => req(filename));
}
configure(loadStories, module);

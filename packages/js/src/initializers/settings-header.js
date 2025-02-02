import { get } from "lodash";
import { useSelect } from "@wordpress/data";
import { render } from "@wordpress/element";
import { ThemeProvider } from "styled-components";
import WebinarPromoNotification from "../components/WebinarPromoNotification";
import { BlackFridaySidebarChecklistPromotion } from "../components/BlackFridaySidebarChecklistPromotion";
import { shouldShowWebinarPromotionNotificationInDashboard } from "../helpers/shouldShowWebinarPromotionNotification";

/**
 * Initializes the React settings header, just below the title.
 *
 * @returns {void}
 */
const initSettingsHeader = () => {
	const reactRoot = document.getElementById( "yst-settings-header-root" );
	const isRtl = Boolean( get( window, "wpseoScriptData.isRtl", false ) );
	const webinarIntroSettingsUrl = useSelect( select => select( "yoast-seo/editor" ).selectLink( "https://yoa.st/webinar-intro-settings" ), [] );
	const isWooCommerce = get( window, "wpseoScriptData.isWooCommerceActive", "" );

	if ( reactRoot ) {
		render(
			<ThemeProvider theme={ { isRtl } }>
				{ isWooCommerce && <BlackFridaySidebarChecklistPromotion store="yoast-seo/settings" /> }
				{ shouldShowWebinarPromotionNotificationInDashboard( "yoast-seo/settings" ) && <WebinarPromoNotification store="yoast-seo/settings" url={ webinarIntroSettingsUrl } /> }
			</ThemeProvider>,
			reactRoot
		);
	}
};

export default initSettingsHeader;

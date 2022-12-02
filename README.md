# tableau-server-custom-fonts
A way of displaying web fonts and other custom fonts on Tableau Server, by hosting them locally and fetching them in an iframe. **Your mileage may still vary** due to organization policies and settings applying to your browser - but you are free to use this to test the use of a font in your environment!

All credits for figuring out this technique go to Matthew Miller, former managing partner of Biztory.

A few notes on the usage:

* Works with webfonts, for which a good source is [Google Fonts](https://fonts.google.com/).
* **Must** be hosted on the same Tableau Server as where this is to be used.
* Must be added as a web page component to each dashboard in which a custom font is to be displayed.

## How to use

Part 1: setup on Tableau Server (one-time effort):

1. Determine the location of your Tableau Server's **[data directory](https://help.tableau.com/current/server-linux/en-us/requ.htm#data-directory)**. Depending on your operating system and the installation location of Tableau Server, this may vary. The defaults are the following:  
    * Linux: `/var/opt/tableau/tableau_server`.
    * Windows: `C:\ProgramData\Tableau\Tableau Server`.
1. Within the data directory, you're looking for the Gateway's `htdocs` folder, which sits a bit further down: `<TS data directory>/data/tabsvc/httpd/htdocs/`.
1. Download or clone this repository into this location, and ensure everything sits neatly in the right location. For example, if you have a Linux setup with the default location, you'd have the following files which are of importance:  
    * `/var/opt/tableau/tableau_server/data/tabsvc/httpd/htdocs/tableau-server-custom-fonts/webfont.html`
    * `/var/opt/tableau/tableau_server/data/tabsvc/httpd/htdocs/tableau-server-custom-fonts/webfont.js`
    * Etc.
1. Test the web page with a random custom font by navigating to `https://<your-tableau-server>/tableau-server-custom-fonts/webfont.html?font=Permanent%20Marker`. In our case: https://penguin.biztory.com/tableau-server-custom-fonts/webfont.html?font=Permanent%20Marker. If the page displays with the custom font, everything works fine.

Part 2: in your dashboards:

1. Build your dashboard as you normally would, making use of the custom font you've gotten from the web, and that is installed on your computer so as to use it in Tableau Desktop.
1. In your dashboard, drag in a Web Page item, entering the URL for the page and specifying the custom font as a parameter. A few examples (for _our_ setup):  
    * https://penguin.biztory.com/tableau-server-custom-fonts/webfont.html?font=Roboto
    * https://penguin.biztory.com/tableau-server-custom-fonts/webfont.html?font=Permanent%20Marker
    * https://penguin.biztory.com/tableau-server-custom-fonts/webfont.html?font=Oswald
1. Publish your dashboard and test it on a computer where the web font is not explicitly installed.

## Notes

Due to some browsers enforcing [CSP (Content Security Policies)](https://help.tableau.com/current/server/en-us/security_csp.htm) in different ways, it may be necessary to ensure Tableau Server allows resources specifically from this URL to be fetched.

* One simple method consists of adding this URL as a whitelisted URL on the Site's Extensions settings page. The result is effectively that this URL is considered as safe for this purpose, as Extensions and Web Page objects on dashboards both effectively function as iframes.
* Alternatively, it may be possible to solve this more structurally by [modifying Tableau Server's CSP directives](https://help.tableau.com/current/server/en-us/security_csp.htm), though this has not been tested thoroughly.

## Support

No support is offered for this solution - use it at your own risk! That being said, if you find a problem, you're free to report it as an issue in this repository. We'll respond on a best-effort basis.
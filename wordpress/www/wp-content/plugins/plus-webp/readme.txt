=== Plus WebP ===
Contributors: Katsushi Kawamori
Donate link: https://shop.riverforest-wp.info/donate/
Tags: media, upload, webp
Requires at least: 4.7
Requires PHP: 5.6
Tested up to: 5.8
Stable tag: 2.07
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Generate WebP.

== Description ==

= Generate WebP =
* Generate WebP file when adding image file in Media Library. 
* Generate WebP from all the images by ajax.
* Generate WebP from all the images in the background.
* Optionally, Can replace image files with WebP when adding new media, and delete the original image file. Also, when generating all images, the original image file ID will be overwritten as WebP and the original image file will be deleted. All URLs in the content are also replaced.

== Installation ==

1. Upload `plus-webp` directory to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

none

== Screenshots ==

1. Media Library
2. Generate
3. Settings

== Changelog ==

= 2.07 =
Added a hook for [Organize Media Folder](https://wordpress.org/plugins/organize-media-folder/).

= 2.06 =
Fixed with processing when media does not exist.

= 2.05 =
Supported XAMPP.

= 2.04 =
Fixed problem of metadta.

= 2.03 =
Fixed problem of metadta.

= 2.02 =
Fixed content replacement issue.

= 2.01 =
Fixes various messages and branches in ajax.

= 2.00 =
Added ajax generation for webp.

= 1.13 =
Fixed an issue with saving options.
Added options for extension.

= 1.12 =
Fixed clear cron schedules issue.
Fixed problem of threshold big image.

= 1.11 =
Fixed the problem of title acquisition in bulk generation.

= 1.10 =
Fixed background processing.

= 1.09 =
Give details when email notification.
Added the management screen notification of the end of batch generation.

= 1.08 =
Added ability to choose which file types to convert and which not.

= 1.07 =
Supported transparent gif & png.
Fixed file name issue.

= 1.06 =
Fixed content URL replacement issue.

= 1.05 =
Fixed an image replacement issue.
Conformed to the WordPress coding standard.

= 1.04 =
Conformed to the WordPress coding standard.

= 1.03 =
Added html escape on the management screen.

= 1.02 =
Fixed an issue with image conversion.
Fixed an image replacement issue.
Added the setting of quality.

= 1.01 =
Fixed problem of PNG files.
Added uninstall script.

= 1.00 =
Initial release.

== Upgrade Notice ==

= 1.00 =
Initial release.

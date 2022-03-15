<?php
if ( !class_exists('Localize_Main')) {
    class Localize_Main
    {
        protected array $langs;

        public function __construct($langs = [])
        {
            $this->langs = $langs;
        }

        public function detectLanguage()
        {
            return $this->findLanguageInUrl(get_permalink());
        }

        public function addLanguageToLinks($html, $args) {
            preg_match('/<a\s+(?:[^>]*?\s+)?href=(["\'])(.*?)\\1/', $html, $url);

            $wp_host = parse_url(get_home_url(), PHP_URL_HOST);
            $link_host = parse_url($url[2], PHP_URL_HOST);
            if ($wp_host !== $link_host) {
                return $html;
            }

            $link_lang = $this->findLanguageInUrl($url[2]);
            if ($link_lang) {
                // this link already has a language tag
                return $html;
            }

            $wp_lang = parse_url(get_home_url(), PHP_URL_PATH);
            // home url will have language in it so we replace the host name with the home url
            return str_replace($wp_host , "$wp_host$wp_lang" , $html);
        }

        private function findLanguageInUrl($url) {
            preg_match('/\/(.*?)\//', parse_url($url, PHP_URL_PATH), $link);
            if (count($link) < 1) {
                return '';
            }
            if (array_search($link[1], $this->langs) !== false) {
                return $link[1];
            }
        }
    }
}
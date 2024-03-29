<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbe8ce3a236ca4ad554e5d95bb299b0dd
{
    public static $prefixLengthsPsr4 = array (
        'T' => 
        array (
            'Tribe\\Vimeo_WP\\' => 15,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Tribe\\Vimeo_WP\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbe8ce3a236ca4ad554e5d95bb299b0dd::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbe8ce3a236ca4ad554e5d95bb299b0dd::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}

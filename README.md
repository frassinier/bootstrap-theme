# Talend Bootstrap Theme

STATUS: this is a Work In Progress.

[![Build Status](https://travis-ci.org/Talend/bootstrap-theme.svg?branch=travis)](https://travis-ci.org/Talend/bootstrap-theme)
[![dependencies Status](https://david-dm.org/Talend/bootstrap-theme/status.svg)](https://david-dm.org/Talend/bootstrap-theme)

This theme is a base theme free of colors that must be configured to be used.

It provides layout that follow Talend Style Guidelines.

Note: The example has been taken from the excellent project Bootstwatch.
But we have decided to rewrite the build using webpack and bootstrap-sass.

# Docs & Help
* [Example page](https://talend.github.io/bootstrap-theme)
* [Sass Api](https://talend.github.io/bootstrap-theme/sassdoc)

<!---* Frontify (soon &trade;))-->

# How to use

## Install dependency

```bash
npm install --save bootstrap-tlnd-theme
```

## Define your color set

Create your `_colors.scss` file and fill it with your own color set.

```sass
/// Primary color, mostly used for the selected elements
/// and to draw attention to the important elements of interaction.
///
/// @type Color
$st-tropaz:             #266092;

/// Secondary color
///
/// @type Color
$rio-grande:            #C3D600;

/// Contextual color for informational alert messages
///
/// @type Color
$scooter:               #3DB0D6;

/// Linked to valid/validated/validation elements.
///
/// @type Color
$limeade:               #8ABC00;

/// Used to notify unvalid elements or warning information.
///
/// @type Color
$lightning-yellow:      #FEB914;

/// Used for errors.
///
/// @type Color
$chestnut-rose:         #CE6464;
```

## Fork bootstrap-sass variables

Fork [this file](https://github.com/Talend/bootstrap-theme/blob/master/src/theme/_variables.scss) in order to override what you want and then save it to `_variables.scss`.
```sass
$brand-primary:         $st-tropaz;
$brand-success:         $limeade;
$brand-info:            $scooter;
$brand-warning:         $lightning-yellow;
$brand-danger:          $chestnut-rose;
```

## Set up Talend bootstrap theme

Edit your Sass entry file.

```sass
@import 'colors';
@import 'variables';
@import '~bootstrap-tlnd-theme/src/theme/bootstrap';
```

You can now add [Bootstrap](http://getbootstrap.com/) markup!

# How to contribute

```bash
npm install
npm start
```
Open [http://localhost:8080/](http://localhost:8080/) to see your changes.

## Frontify

In order to deploy Bootstrap patterns you must

* Create _.env_ file at root
* Add `FRONTIFY_ACCESS_TOKEN` property
* Add `FRONTIFY_PROJECT_ID` property
* Run `npm run frontify:bootstrap`

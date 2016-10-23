Django Slick Admin
===================

A slick & clean look for your Django (>=1.9) admin interface.

*Slick admin* works completely unobtrusive and does everything via CSS. 
Well not *everything* - there are some optional & tiny bits of JavaScript involved as well.

*Slick admin* works with the standard Django admin - and comes with support for:

 - [django CMS](https://www.django-cms.org/en/) (>=3.2.0)
 - [django-admin-tools](https://github.com/django-admin-tools/django-admin-tools) [Dashboard](http://django-admin-tools.readthedocs.io/en/latest/dashboard.html)


Installing
----------

Using the latest version from PyPI:

    pip install django-slick-admin

Using this GitHub repository:

    pip install -e "git://github.com/palmbeach-interactive/django-slick-admin.git#egg=django-slick-admin"


Then add `django_slick_admin` to `INSTALLED_APPS`, before `django.contrib.admin`.


### CMS front end editing

To have the same color schema in the CMS front end there is a template tag included which loads additional CSS styles
if 'editing mode' is enabled. To use them load `slick_admin_tags` in your base template and add `slick_admin_cms_style` 
next to `cms_toolbar`.

    {% load cms_tags sekizai_tags slick_admin_tags %}
    ...
    <body>
        {% cms_toolbar %}
        {% slick_admin_cms_style %}
        ...


Settings
--------

To have a consistent look both for front end editing and administrative interface there are some additional
styles available in 'cms mode'.  
The 'cms mode' is automatically activated when `cms` is present in your `INSTALLED_APPS` - but you can also 
override this behaviour with

    SLICK_ADMIN_CMS_ENABLED = True # False
    
Same behaviour applies for the *admin-tools Dashboard*. Automatically set to `True` if `admin_tools.dashboard` in `INSTALLED_APPS`.

    SLICK_ADMIN_DASHBOARD_ENABLED = True # False
    
    
Stylesheet locations:

    SLICK_ADMIN_CSS = <path>     # default: STATIC_URL + 'django_slick_admin/css/django-slick-admin.css'
    
    SLICK_ADMIN_CMS_CSS = <path> # default: STATIC_URL + 'django_slick_admin/css/cms-styles.css'




Customization
-------------

Start with customizing the included `admin/base_site.html` template.


### Stylesheets

The stylesheets are based on *Sass* and live in the separate [django-slick-admin-styles](https://github.com/palmbeach-interactive/django-slick-admin-styles)
repository.  
The versions/tags for the styles are aligned with the main repository. So if - for example - you are installing `django-slick-admin==0.1.1` 
you should use the '0.1.1' version for the styles as well.

#### Quick & dirty way to compile stylesheets with adjusted settings

Install required npm modules:
 
    npm install -D https://github.com/palmbeach-interactive/django-slick-admin-styles
    npm install -D node-sass

    
Create a sass file - e.g. `custom-admin-styles.sass` to override some defaults and import *django-slick-admin-styles*. 
See [\_defaults.sass](https://github.com/palmbeach-interactive/django-slick-admin/blob/master/django_slick_admin/sass/settings/_defaults.sass) for vailable settings.

    
    // custom-admin-styles.sass
    @charset "UTF-8"
    
    $color-primary: #00ccff
    $color-secondary: #ffcc00
    
    @import settings/base
    @import mixins/base
    @import components/base
    @import admin_tools/base


Run sass compiler (adjust output path according to your setup):
 
    ./node_modules/node-sass/bin/node-sass \
    --include-path ./node_modules/django-slick-admin-styles/sass \
    custom-admin-styles.sass  \
    ./site-static/django_slick_admin/css/django-slick-admin.css


#### Integrate via Gulp tasks


    // gulpfile.js
    gulp.task('admin-styles', function () {
        return gulp.src([
                './sass/admin/custom.sass'
            ])
            .pipe(sass({
                includePaths: './node_modules/django-slick-admin-styles/sass/',
                outputStyle: 'expanded',
                precision: 10
            }))
            .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
            .pipe(concat('django-slick-admin.css'))
            .pipe(gulp.dest('website/site-static/django_slick_admin/css/'))
    });


    
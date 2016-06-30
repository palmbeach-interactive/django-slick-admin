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

    SLICK_ADMIN_CSS = <path>     # default: STATIC_URL + 'django_slick_admin/css/admin.css'
    
    SLICK_ADMIN_CMS_CSS = <path> # default: STATIC_URL + 'django_slick_admin/css/cms-styles.css'




Customization
-------------

Start with customizing the included `admin/base_site.html` template.


### Stylesheets

The stylesheets are based on *Sass* and live in the separate [django-slick-admin-styles](https://github.com/palmbeach-interactive/django-slick-admin-styles)
repository.  
The versions/tags for the styles are aligned with the main repository. So if - for example - you are installing `django-slick-admin==0.1.1` 
you should use tag '0.1.1' version for the styles as well.



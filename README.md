Django Slick Admin
===================

A slick & clean look for your Django (>=1.9) admin interface.

*Slick admin* works completely unobtrusive and does everything via css. 
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


Settings
--------

To have a consistent look both for front-end editing and administrative interface there are some additional
styles available in 'cms mode'.  
The 'cms mode' is automatically activated when `cms` is present in your `INSTALLED_APPS` - but you can also 
override this behaviour with

    SLICK_ADMIN_CMS_ENABLED = True # False



Customization
-------------

Start with customizing the included `admin/base_site.html` template.


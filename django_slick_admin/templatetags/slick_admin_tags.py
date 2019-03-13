# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django import template
from django.conf import settings
from django_slick_admin import settings as slick_admin_settings
from django_slick_admin import __version__ as slick_admin_version

register = template.Library()


@register.simple_tag
def slick_admin_cms_enabled_as():
    return getattr(slick_admin_settings, 'CMS_ENABLED')

@register.simple_tag
def slick_admin_dashboard_enabled_as():
    return getattr(slick_admin_settings, 'DASHBOARD_ENABLED')

@register.simple_tag
def slick_admin_version_as():
    return slick_admin_version

@register.inclusion_tag('django_slick_admin/templatetags/cms_styles.html', takes_context=True)
def slick_admin_cms_style(context):
    # http://stackoverflow.com/questions/9806466/django-sekizai-addtoblock-tag-is-not-working-properly
    sezikai_ctx_var = getattr(settings, 'SEKIZAI_VARNAME', 'SEKIZAI_CONTENT_HOLDER')

    request = context['request']
    toolbar_enabled = False
    if request.user.is_staff and 'cms_toolbar_disabled' in request.session and not request.session['cms_toolbar_disabled']:
        toolbar_enabled = True

    stylesheet = getattr(slick_admin_settings, 'ADMIN_CMS_CSS')

    attrs = {
        sezikai_ctx_var: context[sezikai_ctx_var],
        'toolbar_enabled': toolbar_enabled,
        'stylesheet': stylesheet
    }
    return attrs

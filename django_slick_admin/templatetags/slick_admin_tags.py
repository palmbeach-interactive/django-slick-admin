# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django import template
from django_slick_admin import settings as slick_admin_settings
from django_slick_admin import __version__ as slick_admin_version

register = template.Library()


@register.assignment_tag
def slick_admin_cms_enabled_as():
    return getattr(slick_admin_settings, 'CMS_ENABLED')


@register.assignment_tag
def slick_admin_version_as():
    return slick_admin_version

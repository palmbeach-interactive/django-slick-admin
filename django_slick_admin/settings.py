from django.conf import settings

CMS_ENABLED = getattr(settings, 'SLICK_ADMIN_CMS_ENABLED', 'cms' in settings.INSTALLED_APPS)
DASHBOARD_ENABLED = getattr(settings, 'SLICK_ADMIN_DASHBOARD_ENABLED', 'admin_tools.dashboard' in settings.INSTALLED_APPS)

ADMIN_CSS = getattr(settings, 'SLICK_ADMIN_CSS', settings.STATIC_URL + 'django_slick_admin/css/admin.css')
ADMIN_CMS_CSS = getattr(settings, 'SLICK_ADMIN_CMS_CSS', settings.STATIC_URL + 'django_slick_admin/css/cms-styles.css')
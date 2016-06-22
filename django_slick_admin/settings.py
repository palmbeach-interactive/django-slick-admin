from django.conf import settings

CMS_ENABLED = getattr(settings, 'SLICK_ADMIN_CMS_ENABLED', 'cms' in settings.INSTALLED_APPS)
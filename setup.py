from setuptools import setup, find_packages
import os
import django_slick_admin

CLASSIFIERS = [
    'Environment :: Web Environment',
    'Framework :: Django',
    'Intended Audience :: Developers',
    'License :: OSI Approved :: MIT License',
    'Operating System :: OS Independent',
    'Programming Language :: Python',
    'Programming Language :: Python :: 2',
    'Programming Language :: Python :: 3',
]

setup(
    author="Marc Widmer, Jonas Ohrstrom",
    author_email="marc@pbi.io, jonas@pbi.io",
    name='django-slick-admin',
    version=django_slick_admin.__version__,
    description='Slick admin styles for Django and django CMS.',
    long_description=open(os.path.join(os.path.dirname(__file__), 'README.md')).read(),
    url='https://github.com/palmbeach-interactive/django-slick-admin/',
    license='MIT License',
    platforms=['OS Independent'],
    classifiers=CLASSIFIERS,
    install_requires=[
        'Django>=1.9',
    ],
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
)

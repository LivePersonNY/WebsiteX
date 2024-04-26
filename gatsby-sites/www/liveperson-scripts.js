import $ from 'jquery';
import lottie from 'lottie-web';
import { Cookie, Query, LivePerson } from './liveperson-attribution';

window.lottie = lottie;

window.readyTimeout = null;

window.lp_attr = {};

window.lpCallbacks = window.lpCallbacks || [];

window.testGated = function () {
    $('.pane.gated').slideDown();
};

window.lpHydrateAttributes = function () {
    LivePerson.HydrateAttributes(function () {
        LivePerson.waitForChat(function () {
            LivePerson.BindToChat();
        });
    });
};

window.documentReadyFn = function () {
    window.lottieFiles = [];

    window.lpCallbacks.forEach(function (item) {
        try {
            if (item) {
                item($);
                console.log('cb called');
            }
        } catch (error) {
            console.error('callback failed', error);
        }
    });

    Array.from(document.scripts).forEach(function (item) {
        if (item.attributes['data-type']?.value == 'pageScript') {
            console.log('executing script...');
            eval(item.text);
        }
    });

    window.lpHydrateAttributes();

    console.log('Document ready.');

    $('body')
        .off('click', 'a.mobileForm')
        .on('click', 'a.mobileForm', function (e) {
            e.preventDefault();
            $('.form--sticky').toggleClass('expanded');
            $('.form--sticky .mktoForm').slideToggle(300);
            $('.span1').toggleClass('swap');
            $('.span2').toggleClass('swap');
        });

    $('body')
        .off('click', '.comp-tabs-a h4.accordion-header button')
        .on('click', '.comp-tabs-a h4.accordion-header button', function (e) {
            e.preventDefault();
            const anchor = $(this).parents('.comp-tabs-a').attr('id');
            $('#' + anchor + ' .accordion-item').removeClass('accordion-item-active');
            $(this).parents('.accordion-item').addClass('accordion-item-active');
            let tabIndex = $(this).data('tab');
            $('#' + anchor + ` .comp-tabs-img[data-tab-content="${tabIndex}"]`).fadeIn();
            $('#' + anchor + ` .comp-tabs-img:not([data-tab-content="${tabIndex}"])`).hide();
        });

    $('body')
        .off('click', '.comp-tabs-b h4.comp-tab')
        .on('click', '.comp-tabs-b h4.comp-tab', function (e) {
            e.preventDefault();
            $('.comp-tabs-b .comp-tabs-list-container h4').removeClass('comp-tab-active');
            $(this).addClass('comp-tab-active');
            let tabIndex = $(this).data('tab');
            $(
                `.comp-tabs-b .comp-tabs-content[data-tab-content="${tabIndex}"], .comp-tabs-b .comp-tabs-img[data-tab-content="${tabIndex}"]`
            ).fadeIn();
            $(
                `.comp-tabs-b .comp-tabs-content:not([data-tab-content="${tabIndex}"]), .comp-tabs-b .comp-tabs-img:not([data-tab-content="${tabIndex}"])`
            ).hide();
        });

    $('body')
        .off('click', '.comp-tabs-c .btn.pill')
        .on('click', '.comp-tabs-c .btn.pill', function (e) {
            e.preventDefault();
            let anchor = $(this).parents('.comp-tabs-c').attr('id');
            if (anchor ? (anchor = `#${anchor}`) : (anchor = ''));

            $(anchor + '.comp-tabs-c .btn.pill').removeClass('pill-active');
            $(e.target).addClass('pill-active');
            let tabIndex = $(e.target).data('tab');
            $(anchor + `.comp-tabs-c .comp-tabs-content[data-tab-content="${tabIndex}"]`).fadeIn();
            $(anchor + `.comp-tabs-c .comp-tabs-content:not([data-tab-content="${tabIndex}"])`).hide();
        });

    document.querySelectorAll('.comp-tabs-c .comp-tabs-content').forEach(function (item) {
        item.style.display = 'none';
    });
    document.querySelectorAll('.comp-tabs-c .comp-tabs-content[data-tab-content="0"]').forEach(function (item) {
        item.style.display = 'flex';
    });

    setTimeout(function () {
        // console.log('This is load scroll position: ' + window.scrollY);
        if (window.scrollY > 100) {
            $('.pane .container').animate({ opacity: '1' }, 1000);
        } else {
            $(window)
                .off('scroll')
                .on('scroll', function () {
                    $('.pane:not(.hero, .pane-form, .gated) .container').each(function (i) {
                        var bottom_of_object = $(this).position().top;
                        var bottom_of_window = $(window).scrollTop() + $(window).height();
                        if (bottom_of_window > bottom_of_object) {
                            $(this).animate({ opacity: '1' }, 1000);
                        }
                    });
                });
        }
    }, 1000);

    $('body').on('input', 'textarea', function () {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });

    $('body').on('click', '.edit-post-visual-editor .wp-block', function () {
        $('textarea').each(function () {
            this.setAttribute('style', 'height:' + this.scrollHeight + 'px;overflow-y:hidden;');
        });
    });

    $('body')
        .off('click', '.comp-faq h4.accordion-header button')
        .on('click', '.comp-faq h4.accordion-header button', function (e) {
            $('.comp-faq .accordion-item').removeClass('accordion-item-active');
            $(this).parents('.accordion-item').addClass('accordion-item-active');
        });

    //widowFix
    !(function (t) {
        $.fn.widowFix = function (i) {
            var n = t.extend({ letterLimit: null, prevLimit: null, linkFix: !1, dashes: !1 }, i);
            if (this.length)
                return this.each(function () {
                    var i,
                        e = t(this);
                    if (n.linkFix) {
                        var r = e.find('a:last');
                        r.wrap('<var>');
                        var l = t('var').html();
                        (i = r.contents()[0]), r.contents().unwrap();
                    }
                    var a = t(this).html().split(' '),
                        h = a.pop();
                    if (!(a.length <= 1)) {
                        if (
                            ((function t() {
                                '' === h && ((h = a.pop()), t());
                            })(),
                            n.dashes)
                        ) {
                            t.each(['-', '–', '—'], function (t, i) {
                                if (h.indexOf(i) > 0)
                                    return (h = '<span style="white-space:nowrap;">' + h + '</span>'), !1;
                            });
                        }
                        var s = a[a.length - 1];
                        if (n.linkFix) {
                            if (null !== n.letterLimit && i.length >= n.letterLimit)
                                return void e.find('var').each(function () {
                                    t(this).contents().replaceWith(l), t(this).contents().unwrap();
                                });
                            if (null !== n.prevLimit && s.length >= n.prevLimit)
                                return void e.find('var').each(function () {
                                    t(this).contents().replaceWith(l), t(this).contents().unwrap();
                                });
                        } else {
                            if (null !== n.letterLimit && h.length >= n.letterLimit) return;
                            if (null !== n.prevLimit && s.length >= n.prevLimit) return;
                        }
                        var u = a.join(' ') + '&nbsp;' + h;
                        e.html(u),
                            n.linkFix &&
                                e.find('var').each(function () {
                                    t(this).contents().replaceWith(l), t(this).contents().unwrap();
                                });
                    }
                });
        };
    })($);
    $('h1, h2, h3, h4, h5, p, li').widowFix({
        letterLimit: 12,
        prevLimit: 8,
        //linkFix: false
    });

    $('.comp-policy-content').each(function () {
        $(this)
            .find('h3')
            .each(function (i) {
                var policyHeader = $(this).html();
                var policyHeaderSlug = policyHeader
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/[\s_-]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                var policyNumber = `${i + 1}. `;
                $(this)
                    .parents('.comp-policy-content')
                    .find('.policy-toc')
                    .append(
                        `<p><a class="link link-no-arrow" href="#${policyHeaderSlug}">${policyNumber}${policyHeader}</a></p>`
                    );
                $(this).prepend(policyNumber).attr('id', policyHeaderSlug);
            });
    });

    if (document.location.pathname.includes('policies/gdpr-data-privacy')) {
        console.log('gdpr test');
        var gdprLink = document.querySelector('.comp-card-grid-container .col:nth-child(3) .card-link');
        if (gdprLink) {
            var gdprLink2 = document.createElement('a');
            gdprLink2.setAttribute('href', '/policies/lpbvdpa/');
            gdprLink2.setAttribute('class', 'card-link link gdpr-link2');
            gdprLink2.innerText = 'All other countries';
            gdprLink.after(gdprLink2);
        }
    }

    if (document.location.pathname.includes('policies/subprocessors')) {
        $.getScript('https://visualping.io/externalfiles/widget/vp.min.js').done(function () {
            console.log('Visualping done');
        });
    }

    if (document.location.pathname.includes('policies/public-cloud')) {
        if (window.sessionStorage.getItem('cloudPassword') == 'yes') {
            $('.lightbox').hide();
        }

        $('#loginbutton').on('click', function () {
            if ($('#password').val().toLowerCase() == 'cloud2023') {
                $('.lightbox').hide();
                $('.hide-this').show();
                window.sessionStorage.setItem('cloudPassword', 'yes');
            } else {
                $('.wrong-password').text('Incorrect password. Please double-check and try again.');
            }
        });
        $('#password').keypress(function (e) {
            if (e.which == 13) {
                if ($('#password').val().toLowerCase() == 'cloud2023') {
                    $('.lightbox').hide();
                    $('.hide-this').show();
                    window.sessionStorage.setItem('cloudPassword', 'yes');
                } else {
                    $('.wrong-password').text('Incorrect password. Please double-check and try again.');
                }
            }
        });
        $('#password').focus();
        $('#password').click(function () {
            $(this).attr('placeholder', '');
        });
    }

    // window.dataLayer.push({'event': 'optimize.activate'}); doesnt really work

    if (document.querySelectorAll('.resume-upload').length > 0) {
        console.log('Scripts: Start Careers Script');

        let ghsrc = Query.get('gh_src');
        console.log('ghsrc is: ' + ghsrc);

        document.querySelectorAll('.comp-body-container a').forEach(function (lnk) {
            var href = lnk.href.concat('&gh_src=').concat(ghsrc ?? '');
            lnk.href = href;
        });
        document.querySelectorAll('.resume-upload').forEach(function (lnk) {
            var href = lnk.href.concat('&gh_src=').concat(ghsrc ?? '');
            lnk.href = href;
        });

        let searchURL = 'https://careers.liveperson.com?source=campaignA'.concat('&gh_src=').concat(ghsrc ?? '');
        let keyWordQuery = document.getElementById('Job_Search').value;
        if (keyWordQuery !== '') {
            searchURL = searchURL.concat('&q=').concat(encodeURIComponent(keyWordQuery));
        }
        let submit = document.getElementById('Search_Submit_Button');
        submit.href = searchURL;

        function handleKey(e) {
            e.preventDefault();
            e.stopPropagation();

            if (e.keyCode === 13) {
                let searchURL = 'https://careers.liveperson.com?source=campaignA'
                    .concat('&gh_src=')
                    .concat(ghsrc ?? '');
                let keyWordQuery = document.getElementById('Job_Search').value;
                if (keyWordQuery !== '') {
                    searchURL = searchURL.concat('&q=').concat(encodeURIComponent(keyWordQuery));
                }
                console.log(`searchurl is ${searchURL}`);
                location.href = searchURL;
            }
        }

        function setURLParams(e) {
            let keyWordQuery = document.getElementById('Job_Search').value;

            let searchURLParams = 'https://careers.liveperson.com/?source=campaignA&q=';
            searchURLParams = searchURLParams
                .concat(encodeURIComponent(keyWordQuery))
                .concat('&gh_src=')
                .concat(ghsrc ?? '');

            let a = document.getElementById('Search_Submit_Button');
            let b = document.getElementById('wf-form-Search-Form');

            a.href = searchURLParams;
            b.setAttribute('action', searchURLParams);
        }

        document.getElementById('Job_Search').addEventListener('keyup', handleKey);
        document.getElementById('wf-form-Search-Form').addEventListener('keyup', handleKey);
        document.getElementById('Job_Search').addEventListener('input', setURLParams);

        document.querySelector('.resume-upload').addEventListener('click', function () {});

        //Adding fix for Vocal video here too
        if (!window.VocalVideo) {
            const head = document.getElementsByTagName('head')[0];
            const script = document.createElement('script');
            script.src = 'https://vocalvideo.com/embed/v1/host.js';
            head.appendChild(script);
            const iframe = document.querySelectorAll('iframe[title="Vocal Video"]')[0]; // only works with 1 gallery embed per page
            if (iframe) {
                iframe.src = iframe.src;
            }
        }

        console.log('Scripts: End Careers Script');
    }

    $('.comp-callout-grid-container .view-more-btn').on('click', function (el) {
        el.preventDefault();
        if ($(this).hasClass('collapse-btn')) {
            $(this).parent().siblings('.display-none').slideUp();
            $(this).text('View more').removeClass('collapse-btn');
        } else {
            $(this).parent().siblings().slideDown();
            $(this).text('Collapse').addClass('collapse-btn');
        }
    });

    if (document.querySelectorAll('#plain-content-text-carousel').length > 0) {
        var fixCarousel = $('#plain-content-text-carousel').html().replace('&nbsp;', '');
        $('#plain-content-text-carousel').html(fixCarousel);
    }

    if (document.querySelector('.thanks-download-link a[href="#report"]')) {
        let resourceAssetURLParam = Query.get('resourceasseturl');
        document.querySelector('.thanks-download-link a[href="#report"]').href =
            decodeURIComponent(resourceAssetURLParam);
    }

    if (document.querySelector('body.resources a[href="/resources/reports/socc-2024/"].post-link ')) {
        let reportLink = document.querySelector('body.resources a[href="/resources/reports/socc-2024/"].post-link ');
        reportLink.setAttribute(
            'href',
            '/customer-conversations-report/?utm_source=resources_library&utm_medium=direct&utm_campaign=socc_report_q1'
        );
        reportLink.setAttribute('target', '_blank');
    }

    if (document.location.pathname.includes('/guided-demo-library') && sessionStorage.getItem('guided-demo-email')) {
        let demoButton = document.querySelectorAll('.comp-program-card-container .btn-primary');
        demoButton.forEach((elem) => {
            let demoButtonLink = elem.getAttribute('href');
            elem.setAttribute('href', `${demoButtonLink}&guided_email=${sessionStorage.getItem('guided-demo-email')}`);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                console.log('====================================');
                console.log(`${JSON.stringify(response, null, 2)}`);
                console.log('====================================');
                var messageParagraph = $('<p>').addClass('thank-you-message').append('Thank you for your submission');
                $('.form-netlify').html('').append(messageParagraph);
            })
            .catch((error) => alert(error));
    };
    $('.form-netlify').on('submit', handleSubmit);
};

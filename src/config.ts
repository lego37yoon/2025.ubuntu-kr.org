

import * as m from "./paraglide/messages.js";
import UCKLogo from './assets/logo.svg'
import MicrosoftKoreaVenueImage from '@assets/hall.png'
import UbuConKoreaLogo from "@assets/UbuntuKorea.svg"

export interface SubMenuItem {
    link: string;
    label: string;
}

export const WebsiteConfig = {
    siteTitle: "UbuCon Korea 2025",
    siteDescription: "Microsoft Korea, Seoul | August 9",
    faviconPath: UCKLogo.src,
    navigation: (locale: string) => [
        {
            label: m.nav_about(),
            link: `/${locale}/about`,
            childs: []
        },
        {
            label: m.nav_venue_safety(),
            link: `/${locale}/venue-and-safety`,
            childs: []
        },
        {
            label: m.nav_programs(),
            link: "#",
            childs: [
                {
                    label: m.nav_programs_timetable(),
                    link: "https://events.canonical.com/event/126/timetable/"
                }
            ]
        },
        {
            label: m.nav_sponsors(),
            link: "#",
            childs: [
                {
                    label: m.nav_sponsors_become(),
                    link: `/${locale}/sponsors/become-a-sponsor/`
                },
                {
                    label: m.nav_sponsors_our(),
                    link: `/${locale}/sponsors/our-sponsors/`
                },
                {
                    label: m.nav_sponsors_patrons(),
                    link: `/${locale}/sponsors/patrons/`
                }
            ]
        },
        {
            label: m.nav_links(),
            link: "#",
            childs: [
                {
                    label: m.nav_links_news(),
                    link: "https://discourse.ubuntu-kr.org/c/notice/9",
                },
                {
                    label: m.nav_links_chat(),
                    link: "https://ubuntu-kr.org/chat/",
                }
            ]
        }
    ],
    subNavigation: [
        {
            label: "🎟️",
            link: "#",
            childs: [

            ]
        }
    ],
    footer: {
        copyright: "© 2024-Present Ubuntu Korea Community. Ubuntu and Canonical are registered trademarks of Canonical Ltd. Unless otherwise noted, content licensed under CC BY 4.0 source code under MIT.",
        contactUs: "mailto:contact@ubuntu-kr.org",
        srcRepoUrl: "https://github.com/ubuntu-kr/2025.ubuntu-kr.org",
        organizers: [
            { name: "Ubuntu Korea Community", logoImage: UbuConKoreaLogo.src, link: "https://www.ubuntu-kr.org" },
        ]
    },
    mainBanner: {
        showFootnote: true,
        buttons: [
            {
                label: "후원사로 참여하기",
                link: `./sponsors/become-a-sponsor`,
                class: "p-button--positive"
            }
        ],
        logo: UCKLogo
    },
    featuredSpeakers: {
        indicoExportUrl: "https://events.canonical.com/export/event/47.json?detail=contributions&occ=yes&pretty=yes",
        contributionIds: [20, 46, 43, 34, 19],
        speakerIds: [{ db_id: 522, user: 107 }, { db_id: 517, user: 166 }, { db_id: 494, user: 615 }, { db_id: 515, user: 628 }, { db_id: 516, user: 271 }, { db_id: 487, user: 3 }],
        fullSchedulesUrl: "https://events.canonical.com/event/47/contributions/"
    },
    cityBanner: {
        cityImage: MicrosoftKoreaVenueImage.src
    },
    blog: {
        rssFeedUrl: "https://blog.ubucon.asia/tags/uca24/index.xml",
        viewMoreUrl: "https://blog.ubucon.asia/tags/uca24"
    },
}

// input: 热门指南链接组件
// output: 显示热门关键词页面链接
// pos: components/PopularGuides.tsx
import React from 'react';
import { BookOpen, Wrench, Briefcase, Map, Shield, Gamepad2 } from 'lucide-react';
import { useLanguage } from '../src/contexts/LanguageContext';

interface GuideCategory {
    titleKey: string;
    icon: React.ReactNode;
    links: { href: string; textKey: string }[];
}

// 静态数据，使用 key 而非硬编码文本
const categoriesData: GuideCategory[] = [
    {
        titleKey: 'buildGuides',
        icon: <Wrench className="w-5 h-5" />,
        links: [
            { href: '/keywords/corris-rivett', textKey: 'corrisRivett' },
            { href: '/keywords/my-winter-car-build', textKey: 'carBuild' },
            { href: '/keywords/my-winter-car-assembly', textKey: 'assembly' },
            { href: '/keywords/my-winter-car-engine-tutorial', textKey: 'engineTutorial' },
            { href: '/keywords/how-to-build-the-car-in-my-winter-car', textKey: 'howToBuild' },
            { href: '/keywords/corris-rivett-build-guide', textKey: 'rivettBuildGuide' },
            { href: '/keywords/my-winter-car-engine', textKey: 'engine' },
            { href: '/keywords/my-winter-car-tuning', textKey: 'tuning' },
        ],
    },
    {
        titleKey: 'partsLocations',
        icon: <Map className="w-5 h-5" />,
        links: [
            { href: '/keywords/my-winter-car-parts', textKey: 'partsGuide' },
            { href: '/keywords/my-winter-car-parts-catalog', textKey: 'partsCatalog' },
            { href: '/keywords/my-winter-car-junkyard', textKey: 'junkyard' },
            { href: '/keywords/rivett-location', textKey: 'rivettLocation' },
            { href: '/keywords/my-winter-car-parts-locations', textKey: 'partsLocationsGuide' },
            { href: '/keywords/my-winter-car-ordering-parts', textKey: 'orderingParts' },
            { href: '/keywords/corris-rivett-parts', textKey: 'rivettParts' },
            { href: '/keywords/mwc-map', textKey: 'mwcMap' },
        ],
    },
    {
        titleKey: 'jobsMoney',
        icon: <Briefcase className="w-5 h-5" />,
        links: [
            { href: '/keywords/job', textKey: 'allJobs' },
            { href: '/keywords/my-winter-car-best-job', textKey: 'bestJob' },
            { href: '/keywords/my-winter-car-taxi-job', textKey: 'taxiJob' },
            { href: '/keywords/my-winter-car-firewood-delivery', textKey: 'firewood' },
            { href: '/keywords/my-winter-car-mailer-job', textKey: 'mailerJob' },
            { href: '/keywords/how-to-earn-money-in-my-winter-car', textKey: 'earnMoney' },
            { href: '/keywords/my-winter-car-wood-delivery', textKey: 'woodDelivery' },
            { href: '/keywords/my-winter-car-main-job', textKey: 'mainJob' },
        ],
    },
    {
        titleKey: 'beginnerGuides',
        icon: <BookOpen className="w-5 h-5" />,
        links: [
            { href: '/keywords/my-winter-car-beginner-guide', textKey: 'beginnerGuide' },
            { href: '/keywords/my-winter-car-walkthrough', textKey: 'walkthrough' },
            { href: '/keywords/my-winter-car-tips', textKey: 'tipsTricks' },
            { href: '/keywords/my-winter-car-controls', textKey: 'controls' },
            { href: '/keywords/my-winter-car-start-guide', textKey: 'startGuide' },
            { href: '/keywords/my-winter-car-manual', textKey: 'manual' },
            { href: '/keywords/my-winter-car-guides', textKey: 'allGuides' },
            { href: '/keywords/phone', textKey: 'phone' },
        ],
    },
    {
        titleKey: 'survival',
        icon: <Shield className="w-5 h-5" />,
        links: [
            { href: '/keywords/my-winter-car-survival', textKey: 'survivalGuide' },
            { href: '/keywords/my-winter-car-temperature', textKey: 'temperature' },
            { href: '/keywords/sauna', textKey: 'sauna' },
            { href: '/keywords/my-winter-car-gas-station', textKey: 'gasStation' },
            { href: '/keywords/body-temp', textKey: 'bodyTemp' },
            { href: '/keywords/ice-scraper', textKey: 'iceScraper' },
            { href: '/keywords/scrape-window', textKey: 'scrapeWindow' },
            { href: '/keywords/cant-sleep', textKey: 'cantSleep' },
        ],
    },
    {
        titleKey: 'modsTools',
        icon: <Gamepad2 className="w-5 h-5" />,
        links: [
            { href: '/keywords/mods', textKey: 'mods' },
            { href: '/keywords/nexus-mods', textKey: 'nexusMods' },
            { href: '/keywords/my-winter-car-save-editor', textKey: 'saveEditor' },
            { href: '/keywords/my-winter-car-interactive-map', textKey: 'interactiveMap' },
            { href: '/keywords/mwc-loader', textKey: 'mwcLoader' },
            { href: '/keywords/my-winter-car-trainer', textKey: 'trainer' },
            { href: '/keywords/cheat', textKey: 'cheats' },
            { href: '/keywords/editor', textKey: 'editor' },
        ],
    },
];

// 翻译映射（嵌入组件，避免修改全局 i18n 文件）
const translations: Record<string, Record<string, string>> = {
    en: {
        sectionTitle: '📚 Popular Guides',
        sectionDesc: 'Browse our most popular guides to master My Winter Car',
        browseAll: 'Browse All Guides',
        buildGuides: 'Build Guides',
        partsLocations: 'Parts & Locations',
        jobsMoney: 'Jobs & Money',
        beginnerGuides: 'Beginner Guides',
        survival: 'Survival',
        modsTools: 'Mods & Tools',
        corrisRivett: 'Corris Rivett',
        carBuild: 'Car Build',
        assembly: 'Assembly',
        engineTutorial: 'Engine Tutorial',
        howToBuild: 'How to Build Car',
        rivettBuildGuide: 'Rivett Build Guide',
        engine: 'Engine',
        tuning: 'Tuning',
        partsGuide: 'Parts Guide',
        partsCatalog: 'Parts Catalog',
        junkyard: 'Junkyard',
        rivettLocation: 'Rivett Location',
        partsLocationsGuide: 'Parts Locations',
        orderingParts: 'Ordering Parts',
        rivettParts: 'Rivett Parts',
        mwcMap: 'Game Map',
        allJobs: 'All Jobs',
        bestJob: 'Best Job',
        taxiJob: 'Taxi Job',
        firewood: 'Firewood',
        mailerJob: 'Mailer Job',
        earnMoney: 'Earn Money',
        woodDelivery: 'Wood Delivery',
        mainJob: 'Main Job',
        beginnerGuide: 'Beginner Guide',
        walkthrough: 'Walkthrough',
        tipsTricks: 'Tips & Tricks',
        controls: 'Controls',
        startGuide: 'Start Guide',
        manual: 'Manual',
        allGuides: 'All Guides',
        phone: 'Phone',
        survivalGuide: 'Survival Guide',
        temperature: 'Temperature',
        sauna: 'Sauna',
        gasStation: 'Gas Station',
        bodyTemp: 'Body Temperature',
        iceScraper: 'Ice Scraper',
        scrapeWindow: 'Scrape Window',
        cantSleep: "Can't Sleep",
        mods: 'Mods',
        nexusMods: 'Nexus Mods',
        saveEditor: 'Save Editor',
        interactiveMap: 'Interactive Map',
        mwcLoader: 'MWC Loader',
        trainer: 'Trainer',
        cheats: 'Cheats',
        editor: 'Editor',
    },
    fi: {
        sectionTitle: '📚 Suositut Oppaat',
        sectionDesc: 'Selaa suosituimpia oppaita My Winter Car -pelin hallitsemiseksi',
        browseAll: 'Selaa Kaikkia Oppaita',
        buildGuides: 'Rakennusoppaat',
        partsLocations: 'Osat & Sijainnit',
        jobsMoney: 'Työt & Raha',
        beginnerGuides: 'Aloittelijaoppaat',
        survival: 'Selviytyminen',
        modsTools: 'Modit & Työkalut',
        corrisRivett: 'Corris Rivett',
        carBuild: 'Auton Rakennus',
        assembly: 'Kokoaminen',
        engineTutorial: 'Moottorin Opas',
        howToBuild: 'Auton Rakennus',
        rivettBuildGuide: 'Rivettin Opas',
        engine: 'Moottori',
        tuning: 'Viritys',
        partsGuide: 'Osaopas',
        partsCatalog: 'Osakatalogi',
        junkyard: 'Romuttamo',
        rivettLocation: 'Rivettin Sijainti',
        partsLocationsGuide: 'Osien Sijainnit',
        orderingParts: 'Osien Tilaus',
        rivettParts: 'Rivettin Osat',
        mwcMap: 'Pelikartta',
        allJobs: 'Kaikki Työt',
        bestJob: 'Paras Työ',
        taxiJob: 'Taksi',
        firewood: 'Polttopuut',
        mailerJob: 'Postityö',
        earnMoney: 'Rahan Tienaus',
        woodDelivery: 'Puun Toimitus',
        mainJob: 'Päätyö',
        beginnerGuide: 'Aloittelijaopas',
        walkthrough: 'Läpikävely',
        tipsTricks: 'Vinkit',
        controls: 'Ohjaimet',
        startGuide: 'Aloitusopas',
        manual: 'Käsikirja',
        allGuides: 'Kaikki Oppaat',
        phone: 'Puhelin',
        survivalGuide: 'Selviytymisopas',
        temperature: 'Lämpötila',
        sauna: 'Sauna',
        gasStation: 'Huoltoasema',
        bodyTemp: 'Ruumiinlämpö',
        iceScraper: 'Jääraappa',
        scrapeWindow: 'Ikkunan Raappaisu',
        cantSleep: 'Ei Voi Nukkua',
        mods: 'Modit',
        nexusMods: 'Nexus Mods',
        saveEditor: 'Tallennuseditori',
        interactiveMap: 'Interaktiivinen Kartta',
        mwcLoader: 'MWC Loader',
        trainer: 'Trainer',
        cheats: 'Huijaukset',
        editor: 'Editori',
    },
    sv: {
        sectionTitle: '📚 Populära Guider',
        sectionDesc: 'Bläddra bland våra mest populära guider för att bemästra My Winter Car',
        browseAll: 'Bläddra Alla Guider',
        buildGuides: 'Bygguider',
        partsLocations: 'Delar & Platser',
        jobsMoney: 'Jobb & Pengar',
        beginnerGuides: 'Nybörjarguider',
        survival: 'Överlevnad',
        modsTools: 'Mods & Verktyg',
        corrisRivett: 'Corris Rivett',
        carBuild: 'Bilbygge',
        assembly: 'Montering',
        engineTutorial: 'Motorguide',
        howToBuild: 'Hur man Bygger',
        rivettBuildGuide: 'Rivett Byggguide',
        engine: 'Motor',
        tuning: 'Trimning',
        partsGuide: 'Delguide',
        partsCatalog: 'Delkatalog',
        junkyard: 'Skrotgård',
        rivettLocation: 'Rivett Plats',
        partsLocationsGuide: 'Delplatser',
        orderingParts: 'Beställa Delar',
        rivettParts: 'Rivett Delar',
        mwcMap: 'Spelkarta',
        allJobs: 'Alla Jobb',
        bestJob: 'Bästa Jobb',
        taxiJob: 'Taxi',
        firewood: 'Ved',
        mailerJob: 'Postjobb',
        earnMoney: 'Tjäna Pengar',
        woodDelivery: 'Vedleverans',
        mainJob: 'Huvudjobb',
        beginnerGuide: 'Nybörjarguide',
        walkthrough: 'Genomgång',
        tipsTricks: 'Tips & Tricks',
        controls: 'Kontroller',
        startGuide: 'Startguide',
        manual: 'Manual',
        allGuides: 'Alla Guider',
        phone: 'Telefon',
        survivalGuide: 'Överlevnadsguide',
        temperature: 'Temperatur',
        sauna: 'Bastu',
        gasStation: 'Bensinstation',
        bodyTemp: 'Kroppstemperatur',
        iceScraper: 'Isskrapa',
        scrapeWindow: 'Skrapa Fönster',
        cantSleep: 'Kan Inte Sova',
        mods: 'Mods',
        nexusMods: 'Nexus Mods',
        saveEditor: 'Sparredigerare',
        interactiveMap: 'Interaktiv Karta',
        mwcLoader: 'MWC Loader',
        trainer: 'Trainer',
        cheats: 'Fusk',
        editor: 'Redigerare',
    },
};

const PopularGuides: React.FC = () => {
    const { lang, getLocalizedPath } = useLanguage();
    const t = translations[lang] || translations.en;

    return (
        <section className="py-16 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {t.sectionTitle}
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {t.sectionDesc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoriesData.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white">
                                    {t[category.titleKey] || category.titleKey}
                                </h3>
                            </div>
                            <ul className="space-y-2">
                                {category.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <a
                                            href={getLocalizedPath(link.href)}
                                            className="text-slate-300 hover:text-blue-400 text-sm flex items-center gap-2 transition-colors"
                                        >
                                            <span className="w-1.5 h-1.5 bg-slate-600 rounded-full"></span>
                                            {t[link.textKey] || link.textKey}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                        href={getLocalizedPath('/keywords/')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-colors"
                    >
                        <BookOpen className="w-5 h-5" />
                        {t.browseAll}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PopularGuides;

/**
 * seo-pages.ts
 * SEO 内页关键词数据定义
 * 包含 49 个 Google Trends 关键词，用于生成静态内页
 */

export interface SEOPage {
    id: number;
    keyword: string;
    slug: string;
    category: 'Mods/Tools' | 'Jobs/Economy' | 'How-to' | 'Items' | 'Characters' | 'Vehicles' | 'Issues' | 'Release' | 'General' | 'Meta' | 'Community' | 'Survival' | 'Reference';
    type: 'TOP' | 'RISING';
    isSensitive?: boolean;
    title: string;
    description: string;
    content: string;
}

export const seoPages: SEOPage[] = [
    // ===== TOP 类别 (1-25) =====
    {
        id: 1,
        keyword: "my summer car",
        slug: "my-summer-car",
        category: "Reference",
        type: "TOP",
        title: "My Summer Car vs My Winter Car - Complete Comparison Guide",
        description: "Discover the differences between My Summer Car and My Winter Car. Learn how the beloved summer sequel transforms into a challenging winter survival experience.",
        content: `<h2>What is My Summer Car?</h2>
<p>My Summer Car is the beloved predecessor to My Winter Car, developed by Amistech Games. Set in rural Finland during the summer of 1995, it introduced players to the unique experience of building a car from scratch while surviving Finnish countryside life.</p>

<h2>How My Winter Car Differs</h2>
<p>My Winter Car takes the core mechanics of car building and survival from My Summer Car and adds the brutal challenge of Finnish winter. The temperature system, heating requirements, and winter-specific mechanics create an entirely new gameplay experience.</p>

<h3>Key Differences</h3>
<ul>
<li><strong>Season</strong>: Summer 1995 vs Winter 1992</li>
<li><strong>Vehicle</strong>: Satsuma vs Corris Rivett</li>
<li><strong>Survival</strong>: Basic needs vs Temperature + Survival</li>
<li><strong>Environment</strong>: Warm summer vs Harsh winter conditions</li>
</ul>

<h2>Should You Play My Winter Car?</h2>
<p>If you enjoyed My Summer Car, My Winter Car offers a fresh yet familiar experience. The winter setting adds new layers of challenge and immersion that fans of the original will appreciate.</p>`
    },
    {
        id: 2,
        keyword: "my winter car mods",
        slug: "mods",
        category: "Mods/Tools",
        type: "TOP",
        title: "My Winter Car Mods - Best Mods & Installation Guide 2025",
        description: "Explore the best My Winter Car mods available. Complete guide to finding, installing, and using mods to enhance your gameplay experience.",
        content: `<h2>About My Winter Car Mods</h2>
<p>My Winter Car supports modding, allowing players to customize and enhance their gameplay experience. Mods can add new features, vehicles, tools, and quality-of-life improvements to the game.</p>

<h2>Where to Find Mods</h2>
<p>The primary source for My Winter Car mods is Nexus Mods. The modding community is actively developing new content for the game.</p>

<h3>Popular Mod Categories</h3>
<ul>
<li><strong>Quality of Life</strong>: Save editors, map overlays</li>
<li><strong>Visual</strong>: Graphics enhancements, UI improvements</li>
<li><strong>Gameplay</strong>: New items, adjusted mechanics</li>
<li><strong>Tools</strong>: MWC Loader, save editors</li>
</ul>

<h2>Installation Guide</h2>
<p>To install mods for My Winter Car:</p>
<ol>
<li>Download the MWC Loader or preferred mod manager</li>
<li>Download mods from trusted sources like Nexus Mods</li>
<li>Follow the specific installation instructions for each mod</li>
<li>Always backup your save files before installing new mods</li>
</ol>

<h2>Safety Notice</h2>
<p>Only download mods from trusted sources. Always backup your save files before installing new mods, as they may cause compatibility issues.</p>`
    },
    {
        id: 3,
        keyword: "problem my winter car",
        slug: "problem",
        category: "Issues",
        type: "TOP",
        title: "My Winter Car Problems & Solutions - Troubleshooting Guide",
        description: "Having problems with My Winter Car? Find solutions to common issues including crashes, bugs, and gameplay problems in our comprehensive troubleshooting guide.",
        content: `<h2>Common My Winter Car Problems</h2>
<p>Like any early access game, My Winter Car may have bugs and issues that affect gameplay. This guide covers the most common problems and their solutions.</p>

<h3>Game Won't Start</h3>
<ul>
<li>Verify game files through Steam</li>
<li>Update your graphics drivers</li>
<li>Run the game as administrator</li>
<li>Check system requirements</li>
</ul>

<h3>Performance Issues</h3>
<ul>
<li>Lower graphics settings</li>
<li>Close background applications</li>
<li>Update to the latest game version</li>
</ul>

<h3>Save File Problems</h3>
<ul>
<li>Check if save file is corrupted</li>
<li>Locate save files in AppData folder</li>
<li>Create regular backups</li>
</ul>

<h2>Reporting Bugs</h2>
<p>If you encounter a bug not covered here, consider reporting it on the official Steam forums or the game's community Discord. Include details about your system and steps to reproduce the issue.</p>`
    },
    {
        id: 4,
        keyword: "mwc",
        slug: "mwc",
        category: "General",
        type: "TOP",
        title: "MWC - My Winter Car Abbreviation & Game Overview",
        description: "MWC stands for My Winter Car, the Finnish winter survival car building game. Learn about the game, its features, and community shorthand.",
        content: `<h2>What Does MWC Mean?</h2>
<p>MWC is the commonly used abbreviation for "My Winter Car" within the gaming community. Players and modders frequently use this shorthand when discussing the game online.</p>

<h2>About My Winter Car</h2>
<p>My Winter Car is a survival and car building simulation game set in Finland during winter 1992. Players must build the Corris Rivett car while surviving harsh winter conditions.</p>

<h3>Related Abbreviations</h3>
<ul>
<li><strong>MWC</strong>: My Winter Car</li>
<li><strong>MSC</strong>: My Summer Car (the predecessor)</li>
<li><strong>MWC Loader</strong>: Popular mod loading tool</li>
<li><strong>MWC Editor</strong>: Save file editing tool</li>
</ul>

<h2>Community Usage</h2>
<p>You'll see "MWC" used across Steam forums, Discord servers, Reddit communities, and modding sites like Nexus Mods. It's the standard way to refer to the game in casual discussion.</p>`
    },
    {
        id: 5,
        keyword: "my winter car steam",
        slug: "steam",
        category: "Release",
        type: "TOP",
        title: "My Winter Car on Steam - Purchase, Reviews & System Requirements",
        description: "Find My Winter Car on Steam. Check current price, reviews, system requirements, and how to purchase this Finnish survival car building game.",
        content: `<h2>My Winter Car on Steam</h2>
<p>My Winter Car is available on Steam as an Early Access title. The game continues to receive updates and improvements from developer Amistech Games.</p>

<h3>Steam Store Information</h3>
<ul>
<li><strong>Developer</strong>: Amistech Games</li>
<li><strong>Status</strong>: Early Access</li>
<li><strong>Genre</strong>: Simulation, Survival</li>
<li><strong>Languages</strong>: Multiple languages supported</li>
</ul>

<h2>System Requirements</h2>
<h3>Minimum</h3>
<ul>
<li>OS: Windows 7/8/10/11 64-bit</li>
<li>Processor: Dual-Core 2.0 GHz</li>
<li>Memory: 4 GB RAM</li>
<li>Graphics: DirectX 11 compatible</li>
<li>Storage: 2 GB available space</li>
</ul>

<h2>How to Purchase</h2>
<p>Visit the Steam store page and add My Winter Car to your cart. The game supports regional pricing and may be included in Steam sales.</p>`
    },
    {
        id: 6,
        keyword: "my winter car job",
        slug: "job",
        category: "Jobs/Economy",
        type: "TOP",
        title: "My Winter Car Jobs - Complete Money Making Guide 2025",
        description: "Learn how to make money in My Winter Car with our complete jobs guide. Discover all available jobs, earnings, and tips for maximizing your income.",
        content: `<h2>Jobs in My Winter Car</h2>
<p>Making money is essential for survival in My Winter Car. Various jobs are available throughout the game world, each offering different pay and requirements.</p>

<h3>Available Jobs</h3>
<ul>
<li><strong>Firewood Delivery</strong>: Chop and deliver firewood</li>
<li><strong>Taxi Service</strong>: Transport NPCs around town</li>
<li><strong>Newspaper Delivery</strong>: Deliver newspapers to mailboxes</li>
<li><strong>Main Job</strong>: Regular employment for steady income</li>
</ul>

<h2>Money Making Tips</h2>
<ul>
<li>Start with firewood delivery for quick early income</li>
<li>Taxi service becomes profitable once you have a working car</li>
<li>Balance job time with survival needs</li>
<li>Manage fuel costs when calculating profits</li>
</ul>

<h2>Job Locations</h2>
<p>Check the phone book for job contacts and locations. Some jobs require specific items or a working vehicle to complete.</p>`
    },
    {
        id: 7,
        keyword: "my winter car game",
        slug: "game",
        category: "General",
        type: "TOP",
        title: "My Winter Car Game - Complete Overview & Features Guide",
        description: "Everything you need to know about My Winter Car game. Features, gameplay mechanics, survival elements, and what makes this Finnish winter simulator unique.",
        content: `<h2>About My Winter Car</h2>
<p>My Winter Car is a survival and car building simulation game developed by Amistech Games. Set in rural Finland during winter 1992, players must rebuild the Corris Rivett car while surviving harsh winter conditions.</p>

<h3>Key Features</h3>
<ul>
<li><strong>Car Building</strong>: Assemble over 200 parts to build your vehicle</li>
<li><strong>Survival</strong>: Manage hunger, fatigue, and body temperature</li>
<li><strong>Open World</strong>: Explore the Finnish countryside</li>
<li><strong>Jobs</strong>: Earn money through various employment options</li>
<li><strong>Realistic Mechanics</strong>: Authentic car building experience</li>
</ul>

<h2>Gameplay Elements</h2>
<p>The game combines mechanical simulation with survival gameplay. Players must balance their time between working on the car, earning money, and staying alive in the freezing Finnish winter.</p>

<h2>Early Access Status</h2>
<p>My Winter Car is currently in Early Access on Steam, meaning the game is still in active development with regular updates and new features being added.</p>`
    },
    {
        id: 8,
        keyword: "my winter car wiki",
        slug: "wiki",
        category: "Meta",
        type: "TOP",
        title: "My Winter Car Wiki - Community Resource & Game Information",
        description: "Welcome to the My Winter Car Wiki, your comprehensive resource for game guides, parts databases, survival tips, and community knowledge.",
        content: `<h2>My Winter Car Wiki</h2>
<p>This wiki serves as a comprehensive resource for My Winter Car players. Find detailed guides, part locations, survival tips, and community-contributed knowledge.</p>

<h3>Wiki Resources</h3>
<ul>
<li><strong>Build Guides</strong>: Step-by-step car assembly instructions</li>
<li><strong>Parts Database</strong>: Complete list of all 200+ parts</li>
<li><strong>Survival Guide</strong>: Tips for staying alive in winter</li>
<li><strong>Jobs Guide</strong>: Money-making strategies</li>
<li><strong>Video Tutorials</strong>: Visual guides from the community</li>
</ul>

<h2>Community Contribution</h2>
<p>This wiki is community-driven and constantly updated with new information. Join our Discord to contribute tips, report errors, or suggest new content.</p>

<h2>Disclaimer</h2>
<p>This wiki is a fan-made resource and is not affiliated with Amistech Games. All game content belongs to their respective owners.</p>`
    },
    {
        id: 9,
        keyword: "my winter car release",
        slug: "release",
        category: "Release",
        type: "TOP",
        title: "My Winter Car Release - Early Access Launch & Updates",
        description: "My Winter Car release information. Learn about the Early Access launch, update schedule, and what to expect from future development.",
        content: `<h2>My Winter Car Release</h2>
<p>My Winter Car launched in Early Access on Steam in December 2024. The game is developed by Amistech Games, the creators of the popular My Summer Car.</p>

<h3>Early Access Details</h3>
<ul>
<li><strong>Launch Date</strong>: December 2024</li>
<li><strong>Platform</strong>: Steam (Windows)</li>
<li><strong>Status</strong>: Early Access</li>
<li><strong>Developer</strong>: Amistech Games</li>
</ul>

<h2>Update Schedule</h2>
<p>As an Early Access title, My Winter Car receives regular updates adding new features, bug fixes, and improvements. The developer communicates update plans through Steam announcements.</p>

<h2>Full Release Plans</h2>
<p>The full release date has not been announced. Development continues based on player feedback and the roadmap set by Amistech Games.</p>`
    },
    {
        id: 10,
        keyword: "my winter car how to get car",
        slug: "how-to-get-car",
        category: "How-to",
        type: "TOP",
        title: "How to Get Your Car in My Winter Car - Complete Guide",
        description: "Learn how to find and start building your car in My Winter Car. Step-by-step guide to locating the Corris Rivett and beginning your build.",
        content: `<h2>Finding Your Car in My Winter Car</h2>
<p>The Corris Rivett is your project car in My Winter Car. Here's how to find it and start building.</p>

<h3>Car Location</h3>
<p>The Corris Rivett body is located in the garage near your house. Some parts may be scattered around the property or need to be purchased from shops.</p>

<h2>Getting Started</h2>
<ol>
<li>Explore your home and garage area</li>
<li>Locate the car body in the garage</li>
<li>Find scattered parts around the property</li>
<li>Use the phone to order missing parts</li>
<li>Visit shops for items you can't find</li>
</ol>

<h3>Essential First Steps</h3>
<ul>
<li>Check the garage thoroughly</li>
<li>Look in boxes and shelves for parts</li>
<li>Keep the sauna heated while you work</li>
<li>Don't forget to eat and rest</li>
</ul>

<h2>Building Tips</h2>
<p>Take your time exploring before diving into the build. Familiarize yourself with the survival mechanics first, as managing your needs is crucial while working on the car.</p>`
    },
    // ===== TOP 类别续 (11-25) =====
    {
        id: 11,
        keyword: "my winter car release date",
        slug: "release-date",
        category: "Release",
        type: "TOP",
        title: "My Winter Car Release Date - When Did the Game Launch?",
        description: "When is the My Winter Car release date? Get the latest information about the game's Early Access launch date and future full release plans.",
        content: "<h2>Release Timeline</h2><p>My Winter Car launched in Early Access on Steam in December 2024.</p>"
    },
    {
        id: 12,
        keyword: "my winter car save",
        slug: "save",
        category: "How-to",
        type: "TOP",
        title: "My Winter Car Save - How to Save Your Game Progress",
        description: "Learn how to save your game in My Winter Car. Complete guide to save file locations, backup tips, and how to protect your progress.",
        content: "<h2>How to Save</h2><p>The game typically saves when you sleep in your bed or use designated save points.</p>"
    },
    {
        id: 13,
        keyword: "my winter car mod",
        slug: "mod",
        category: "Mods/Tools",
        type: "TOP",
        title: "My Winter Car Mod - Single Mod Guide & Recommendations",
        description: "Find the best My Winter Car mod to enhance your gameplay. Single mod installation guide and recommendations.",
        content: "<h2>How to Install a Single Mod</h2><p>Download from trusted sources and follow installation instructions.</p>"
    },
    {
        id: 14,
        keyword: "my winter car free",
        slug: "free",
        category: "General",
        type: "TOP",
        isSensitive: true,
        title: "My Winter Car Free - Is the Game Free to Play?",
        description: "Is My Winter Car available for free? Learn about pricing and avoid scams.",
        content: "<h2>Important</h2><p>My Winter Car is NOT free. Always purchase through official Steam.</p>"
    },
    {
        id: 15,
        keyword: "my winter car phone",
        slug: "phone",
        category: "Items",
        type: "TOP",
        title: "My Winter Car Phone - How to Use the Phone Guide",
        description: "Learn how to use the phone in My Winter Car. Complete guide to phone mechanics, contacts, ordering parts.",
        content: "<h2>Phone Location</h2><p>The phone is located in your house. Use it to order parts and call services.</p>"
    },
    {
        id: 16,
        keyword: "my winter car taxi",
        slug: "taxi",
        category: "Jobs/Economy",
        type: "TOP",
        title: "My Winter Car Taxi - Transportation & Taxi Job Guide",
        description: "Complete guide to the taxi service in My Winter Car. Learn how to call a taxi and earn money as a taxi driver.",
        content: "<h2>Taxi Service</h2><p>Use the phone to call a taxi or work as a taxi driver for income.</p>"
    },
    {
        id: 17,
        keyword: "sorbet my winter car",
        slug: "sorbet",
        category: "Characters",
        type: "TOP",
        title: "Sorbet My Winter Car - Character Guide",
        description: "Who is Sorbet in My Winter Car? Learn about this character and how to interact with them.",
        content: "<h2>About Sorbet</h2><p>Sorbet is one of the NPCs you'll encounter in the Finnish countryside.</p>"
    },
    {
        id: 18,
        keyword: "nexus my winter car",
        slug: "nexus",
        category: "Mods/Tools",
        type: "TOP",
        title: "Nexus - My Winter Car Modding Platform",
        description: "Find My Winter Car mods on Nexus Mods. The primary modding platform for the game.",
        content: "<h2>What is Nexus Mods?</h2><p>Nexus Mods is a major modding community hosting My Winter Car mods.</p>"
    },
    {
        id: 19,
        keyword: "nexus mods my winter car",
        slug: "nexus-mods",
        category: "Mods/Tools",
        type: "TOP",
        title: "Nexus My Winter Car - Find Mods on Nexus Mods",
        description: "Find My Winter Car mods on Nexus Mods. Complete guide to browsing and downloading mods.",
        content: "<h2>Popular Mod Categories</h2><p>Find utilities, gameplay mods, and visual enhancements.</p>"
    },
    {
        id: 20,
        keyword: "my winter car editor",
        slug: "editor",
        category: "Mods/Tools",
        type: "TOP",
        title: "My Winter Car Editor - Save File Editing Tool Guide",
        description: "Learn about the My Winter Car save editor. How to use editing tools to modify your save files.",
        content: "<h2>What Can Editors Do?</h2><p>Edit money, modify stats, manage items, and fix bugs.</p>"
    },
    {
        id: 21,
        keyword: "my winter car work",
        slug: "work",
        category: "Jobs/Economy",
        type: "TOP",
        title: "My Winter Car Work - Employment & Money Guide",
        description: "Find work opportunities in My Winter Car. Complete guide to employment options.",
        content: "<h2>Available Work</h2><p>Firewood delivery, taxi service, deliveries, and main job.</p>"
    },
    {
        id: 22,
        keyword: "corris rivett my winter car",
        slug: "corris-rivett",
        category: "Vehicles",
        type: "TOP",
        title: "Corris Rivett My Winter Car - Complete Car Build Guide",
        description: "Complete guide to the Corris Rivett in My Winter Car. Build it from 200+ parts.",
        content: "<h2>About the Corris Rivett</h2><p>The main project car with over 200 parts to assemble.</p>"
    },
    {
        id: 23,
        keyword: "corris rivett car",
        slug: "corris-rivett-car",
        category: "Vehicles",
        type: "TOP",
        title: "Corris Rivett - The My Winter Car Vehicle",
        description: "The Corris Rivett is the main car in My Winter Car. Vehicle information and specifications.",
        content: "<h2>Vehicle Overview</h2><p>A fictional Finnish hatchback from the early 1990s.</p>"
    },
    {
        id: 24,
        keyword: "my winter car car location",
        slug: "car-location",
        category: "How-to",
        type: "TOP",
        title: "My Winter Car Car Location - Where to Find Your Vehicle",
        description: "Find where your car is located in My Winter Car. Complete guide to locating the Corris Rivett.",
        content: "<h2>Main Car Body Location</h2><p>The car body is in the garage attached to your house.</p>"
    },
    {
        id: 25,
        keyword: "reddit my winter car",
        slug: "reddit",
        category: "Community",
        type: "TOP",
        title: "Reddit My Winter Car - Community Discussion",
        description: "Join the My Winter Car Reddit community. Discuss, share tips, and connect with players.",
        content: "<h2>About the Subreddit</h2><p>Reddit hosts an active community for My Winter Car players.</p>"
    },
    // ===== RISING 类别 (26-49) =====
    {
        id: 26,
        keyword: "reijo my winter car",
        slug: "reijo",
        category: "Characters",
        type: "RISING",
        title: "Reijo My Winter Car - Character Guide",
        description: "Who is Reijo in My Winter Car? Learn about this character and their role.",
        content: "<h2>About Reijo</h2><p>Reijo is one of the NPCs in the Finnish countryside.</p>"
    },
    {
        id: 27,
        keyword: "my winter car firewood",
        slug: "firewood",
        category: "Survival",
        type: "RISING",
        title: "My Winter Car Firewood - Heating & Money Guide",
        description: "Complete guide to firewood in My Winter Car. How to chop, store, and use firewood.",
        content: "<h2>Getting Firewood</h2><p>Chop trees with an axe or deliver firewood for money.</p>"
    },
    {
        id: 28,
        keyword: "my winter car card pin",
        slug: "card-pin",
        category: "How-to",
        type: "RISING",
        title: "My Winter Car Card PIN - Credit Card Guide",
        description: "What is the card PIN in My Winter Car? Where to find your PIN code.",
        content: "<h2>Finding Your PIN</h2><p>Look for bank correspondence in your mail or documents.</p>"
    },
    {
        id: 29,
        keyword: "my winter car can't sleep",
        slug: "cant-sleep",
        category: "Issues",
        type: "RISING",
        title: "My Winter Car Can't Sleep - Troubleshooting Guide",
        description: "Can't sleep in My Winter Car? Learn why and how to fix this common issue.",
        content: "<h2>Common Causes</h2><p>Too cold, hungry, or not tired enough.</p>"
    },
    {
        id: 30,
        keyword: "my winter car cheat",
        slug: "cheat",
        category: "Mods/Tools",
        type: "RISING",
        isSensitive: true,
        title: "My Winter Car Cheat - Console Commands & Risks",
        description: "Looking for My Winter Car cheats? Learn about console commands and risks.",
        content: "<h2>Warning</h2><p>Using cheats can break your save file. Always backup first.</p>"
    },
    {
        id: 31,
        keyword: "talbot 1510",
        slug: "talbot-1510",
        category: "Reference",
        type: "RISING",
        title: "Talbot 1510 - My Winter Car Vehicle Reference",
        description: "Learn about the Talbot 1510 and its connection to My Winter Car.",
        content: "<h2>About the Talbot 1510</h2><p>A real-world vehicle that may have inspired the Corris Rivett.</p>"
    },
    {
        id: 32,
        keyword: "mwc editor",
        slug: "mwc-editor",
        category: "Mods/Tools",
        type: "RISING",
        title: "MWC Editor - My Winter Car Save Editor Tool",
        description: "MWC Editor allows you to edit save files. Modify money, items, and more.",
        content: "<h2>Features</h2><p>Edit player money, modify inventory, adjust vehicle parts.</p>"
    },
    {
        id: 33,
        keyword: "mwc map",
        slug: "mwc-map",
        category: "How-to",
        type: "RISING",
        title: "MWC Map - My Winter Car Navigation Guide",
        description: "Find a map for My Winter Car. Learn about map mods and key locations.",
        content: "<h2>Map Overview</h2><p>The game world includes your house, shops, job locations.</p>"
    },
    {
        id: 34,
        keyword: "my winter car scrape window",
        slug: "scrape-window",
        category: "How-to",
        type: "RISING",
        title: "My Winter Car Scrape Window - Ice Removal Guide",
        description: "How to scrape windows in My Winter Car. Remove ice and snow from car windows.",
        content: "<h2>How to Scrape Windows</h2><p>Find an ice scraper and use it on icy windows.</p>"
    },
    {
        id: 35,
        keyword: "my winter car rivett location",
        slug: "rivett-location",
        category: "How-to",
        type: "RISING",
        title: "My Winter Car Rivett Location - Find Your Car",
        description: "Find the Rivett car location in My Winter Car. Exact location of the Corris Rivett.",
        content: "<h2>Exact Location</h2><p>The car body is in your garage, near your house.</p>"
    },
    {
        id: 36,
        keyword: "my winter car phone numbers",
        slug: "phone-numbers",
        category: "Items",
        type: "RISING",
        title: "My Winter Car Phone Numbers - Complete Contact List",
        description: "All phone numbers you need in My Winter Car. Complete list of important contacts.",
        content: "<h2>Finding Phone Numbers</h2><p>Check the phone book in your house for all numbers.</p>"
    },
    {
        id: 37,
        keyword: "mwc loader",
        slug: "mwc-loader",
        category: "Mods/Tools",
        type: "RISING",
        title: "MWC Loader - My Winter Car Mod Loading Tool",
        description: "MWC Loader helps you install and manage mods for My Winter Car easily.",
        content: "<h2>What is MWC Loader?</h2><p>A tool that simplifies mod installation and management.</p>"
    },
    {
        id: 38,
        keyword: "my winter car controller",
        slug: "controller",
        category: "How-to",
        type: "RISING",
        title: "My Winter Car Controller - Gamepad Setup Guide",
        description: "How to use a controller with My Winter Car. Setup guide for gamepad support.",
        content: "<h2>Controller Support</h2><p>Check game settings for controller options.</p>"
    },
    {
        id: 39,
        keyword: "my winter car credit card pin",
        slug: "credit-card-pin",
        category: "How-to",
        type: "RISING",
        title: "My Winter Car Credit Card PIN - Complete Guide",
        description: "Find your credit card PIN in My Winter Car. Where to locate the PIN code.",
        content: "<h2>Where to Find Your PIN</h2><p>Look for bank letters in your mail or documents.</p>"
    },
    {
        id: 40,
        keyword: "my winter car main job",
        slug: "main-job",
        category: "Jobs/Economy",
        type: "RISING",
        title: "My Winter Car Main Job - Employment Guide",
        description: "Guide to the main job in My Winter Car. How to get steady employment.",
        content: "<h2>Getting the Main Job</h2><p>Look for job opportunities through the phone book.</p>"
    },
    {
        id: 41,
        keyword: "my winter car body temp",
        slug: "body-temp",
        category: "Survival",
        type: "RISING",
        title: "My Winter Car Body Temp - Survival Temperature Guide",
        description: "Understanding body temperature in My Winter Car. How to stay warm.",
        content: "<h2>Staying Warm</h2><p>Use the sauna, stay indoors, keep firewood burning.</p>"
    },
    {
        id: 42,
        keyword: "my winter car pin code",
        slug: "pin-code",
        category: "How-to",
        type: "RISING",
        title: "My Winter Car PIN Code - Bank Card PIN Guide",
        description: "Find the PIN code in My Winter Car. Where to locate your bank PIN.",
        content: "<h2>Finding the PIN Code</h2><p>Search your house for mail from the bank.</p>"
    },
    {
        id: 43,
        keyword: "my winter car ice scraper",
        slug: "ice-scraper",
        category: "Items",
        type: "RISING",
        title: "My Winter Car Ice Scraper - Tool Location Guide",
        description: "Find an ice scraper in My Winter Car. Location and how to use it.",
        content: "<h2>Where to Find It</h2><p>Look in your garage or storage areas.</p>"
    },
    {
        id: 44,
        keyword: "my winter car how to scrape window",
        slug: "how-to-scrape-window",
        category: "How-to",
        type: "RISING",
        title: "How to Scrape Window in My Winter Car - Tutorial",
        description: "Step-by-step guide on how to scrape windows in My Winter Car.",
        content: "<h2>Steps</h2><p>Find the ice scraper, approach your car, and use it on icy windows.</p>"
    },
    {
        id: 45,
        keyword: "my winter car nexusmods",
        slug: "nexusmods",
        category: "Mods/Tools",
        type: "RISING",
        title: "My Winter Car NexusMods - Mod Download Guide",
        description: "My Winter Car NexusMods page. Find and download mods from the community.",
        content: "<h2>Getting Started</h2><p>Visit nexusmods.com and search for My Winter Car.</p>"
    },
    {
        id: 46,
        keyword: "mwc wiki",
        slug: "mwc-wiki",
        category: "Meta",
        type: "RISING",
        title: "MWC Wiki - My Winter Car Community Resource",
        description: "MWC Wiki - Your comprehensive My Winter Car wiki resource.",
        content: "<h2>Our Resources</h2><p>Game guides, parts information, survival tips.</p>"
    },
    {
        id: 47,
        keyword: "myscwintercar",
        slug: "myscwintercar",
        category: "Reference",
        type: "RISING",
        title: "MySCWinterCar - My Summer Car / My Winter Car Series",
        description: "Information about My Summer Car and My Winter Car connection.",
        content: "<h2>The Game Series</h2><p>Both games are developed by Amistech Games.</p>"
    },
    {
        id: 48,
        keyword: "amistech",
        slug: "amistech",
        category: "Reference",
        type: "RISING",
        title: "Amistech Games - My Winter Car Developer",
        description: "Amistech Games - Developer of My Winter Car and My Summer Car.",
        content: "<h2>About Amistech</h2><p>Finnish indie developer of car building simulation games.</p>"
    },
    {
        id: 49,
        keyword: "my winter car sauna",
        slug: "sauna",
        category: "Survival",
        type: "RISING",
        title: "My Winter Car Sauna - Heating & Survival Guide",
        description: "Learn how to use the sauna in My Winter Car. Essential for warming up.",
        content: "<h2>Using the Sauna</h2><p>Add firewood, light the fire, wait for it to heat up.</p>"
    }
];

// 导出用于生成页面的辅助函数
export function getPageBySlug(slug: string): SEOPage | undefined {
    return seoPages.find(page => page.slug === slug);
}

export function getPagesByCategory(category: SEOPage['category']): SEOPage[] {
    return seoPages.filter(page => page.category === category);
}


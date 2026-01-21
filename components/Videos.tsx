// input: 视频列表与多语言文案
// output: 视频卡片与外链入口
// pos: components/Videos.tsx（更新规则：文件变更需同步本注释与所属目录 README）
import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { VideoItem } from '../types';
import { useContent } from '../src/contexts/LanguageContext';

// BCP-47 语言代码映射
const languageCodeMap: Record<string, string> = {
    "English": "en",
    "Finnish": "fi",
    "Swedish": "sv",
    "German": "de",
    "French": "fr",
    "Spanish": "es",
    "Russian": "ru",
    "Chinese": "zh",
    "Japanese": "ja",
    "Korean": "ko"
};

const getLanguageCode = (language: string): string => {
    return languageCodeMap[language] || language.toLowerCase().slice(0, 2);
};

const videos: VideoItem[] = [
    {
        id: "8sdb3j5Awi8",
        title: "battle simulator counter stickman",
        channel: "night gaming",
        language: "English",
        publishDate: "2018-03-08T00:00:00+00:00",
        description: "Gameplay footage featuring Level 19 through Level 24."
    }
];

interface VideoCardProps {
    video: VideoItem;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    const embedUrl = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`;

    return (
        <div className="panel rounded-2xl overflow-hidden hover:-translate-y-1 transition-all group">
            {/* Video Player / Thumbnail */}
            <div className="relative aspect-video bg-slate-900">
                {!isLoaded ? (
                    <>
                        <img
                            src={thumbnailUrl}
                            alt={video.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <button
                            onClick={() => setIsLoaded(true)}
                            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors"
                            aria-label={`Play ${video.title}`}
                        >
                            <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30 transform group-hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-white ml-1" fill="white" />
                            </div>
                        </button>
                    </>
                ) : (
                    <iframe
                        src={embedUrl}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                )}
            </div>

            {/* Video Info */}
            <div className="p-4">
                <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-rose-300 transition-colors">
                    {video.title}
                </h3>
                <p className="text-sm text-slate-400 mb-3 line-clamp-2">
                    {video.description}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{video.channel}</span>
                    <span>{video.language}</span>
                </div>
            </div>
        </div>
    );
};

const Videos: React.FC = () => {
    const content = useContent();
    const isSingleVideo = videos.length === 1;

    return (
        <section id="videos" className="py-12 md:py-20 px-4 section-cut">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-display text-white mb-2 md:mb-4">
                        {content.videos.title}
                    </h2>
                    <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">
                        {content.videos.subtitle}
                    </p>
                </div>

                <div
                    className={
                        isSingleVideo
                            ? "grid grid-cols-1 gap-4 md:gap-8 max-w-5xl mx-auto"
                            : "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto"
                    }
                >
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>

                <div className="text-center mt-8">
                    <a
                        href="https://www.youtube.com/results?search_query=my+winter+car+guide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-rose-300 hover:text-rose-200 transition-colors"
                    >
                        <span>{content.videos.findMore}</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* VideoObject Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": videos.map((video, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "VideoObject",
                                "@id": `https://www.youtube.com/watch?v=${video.id}`,
                                "name": video.title,
                                "description": video.description,
                                "thumbnailUrl": `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
                                "uploadDate": video.publishDate,
                                "embedUrl": `https://www.youtube-nocookie.com/embed/${video.id}`,
                                "inLanguage": getLanguageCode(video.language)
                            }
                        }))
                    })
                }}
            />
        </section>
    );
};

export default Videos;

import React, { useEffect, useRef } from 'react';
interface VideoPlayerProps {
    src: string;
    startTime: number;
    endTime: number;
}

export const VideoPlayer: React.FC<VideoPlayerProps & { index: number; activeScreen: number }> = ({
    src,
    startTime,
    endTime,
    index,
    activeScreen
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Функция для запуска видео
        const playVideo = () => {
            video.currentTime = startTime;
            video.play();
        };

        // Функция для остановки видео
        const pauseVideo = () => {
            video.pause();
        };

        // Обработчик события timeupdate для остановки видео
        const onTimeUpdate = () => {
            if (video.currentTime >= endTime) {
                pauseVideo();
            }
        };

        video.addEventListener('timeupdate', onTimeUpdate);

        // Запускаем или останавливаем видео в зависимости от активности экрана
        if (index === activeScreen) {
            playVideo();
        } else {
            pauseVideo();
        }

        return () => {
            video.removeEventListener('timeupdate', onTimeUpdate);
        };
    }, [startTime, endTime, index, activeScreen]);

    return (
        <video
            ref={videoRef}
            muted
            loop
            data-start-time={startTime}
            data-end-time={endTime}
            style={{ display: 'block' }}
        >
            <source src={src} type="video/mp4" />
        </video>
    );
};
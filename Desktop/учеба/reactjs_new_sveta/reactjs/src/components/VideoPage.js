import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import NewsSmi from './NewsSmi';

const VideoPage = () => {
    const { id } = useParams();
    const newsSmiData = NewsSmi();
    const newsSmiItem = newsSmiData.find(newssmi => newssmi.id === parseInt(id));
    const [videoError, setVideoError] = useState(false);

    useEffect(() => {
        if (videoError && newsSmiItem) {
            window.location.href = newsSmiItem.link; // Перенаправление по ссылке
        }
    }, [videoError, newsSmiItem]);

    if (!newsSmiItem || !newsSmiItem.link) {
        return (<div>Видео не найдено</div>);
    }

    let videoId = null;
    if (newsSmiItem.link.includes('v=')) {
        videoId = newsSmiItem.link.split('v=')[1].split('&')[0]; // Извлечение videoId из ссылки
    } else if (newsSmiItem.link.includes('youtu.be/')) {
        videoId = newsSmiItem.link.split('youtu.be/')[1].split('?')[0]; // Извлечение videoId из короткой ссылки
    }

    if (!videoId) {
        return (<div>Недопустимая ссылка на видео</div>);
    }

    const opts = {
        height: '515',
        width: '960',
        playerVars: {
            autoplay: 1,
        },
    };

    const onError = () => {
        setVideoError(true);
    };

    return (
        <div className="video-page">
            <YouTube videoId={videoId} opts={opts} onError={onError} />
        </div>
    );
};

export default VideoPage;
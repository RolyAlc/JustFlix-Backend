/**
 * Representa un objeto de vídeo con sus propiedades.
 * @interface Video
 */

export interface Video {
    id: string;
    topic: string;
    description: string;
    duration: number;
    thumbnail: string;
    videoUrl: string;
}
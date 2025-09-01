import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
  const [useNativeControls, setUseNativeControls] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  // Debug logging
  console.log('VideoModal - videoUrl:', videoUrl);
  console.log('VideoModal - isOpen:', isOpen);

  // Check if video URL is a YouTube URL
  const isYouTubeUrl = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  
  // Check if video URL is a local asset
  const isLocalAsset = videoUrl.startsWith('./assets/') || videoUrl.startsWith('/assets/') || videoUrl.startsWith('assets/');
  
  // Check if video URL looks like a demo/sample URL (likely to fail)
  const isDemoUrl = videoUrl.includes('sample-videos.com') || 
                   videoUrl.includes('user-images.githubusercontent.com') ||
                   (videoUrl.includes('demo') && videoUrl.includes('sample'));

  // Handle YouTube URLs
  const handleYouTubeClick = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  // Reset error state and enable controls when modal opens
  useEffect(() => {
    if (isOpen && isDemoUrl) {
      // Show "Coming Soon" immediately for demo URLs and close
      toast({
        title: "Coming Soon", 
        description: "Demo video functionality will be available soon",
      });
      onClose();
      return;
    }
    
    if (isOpen && isYouTubeUrl) {
      // For YouTube URLs, show the modal with external link option
      setVideoError(false);
      return;
    }
    
    if (isOpen && (isLocalAsset || videoUrl.startsWith('http'))) {
      // For local assets and external URLs, show the video player
      setVideoError(false);
      setUseNativeControls(true);
      
      // Auto-play when modal opens (muted for browser policy compliance)
      const timer = setTimeout(() => {
        const video = videoRef.current;
        if (video && !videoError) {
          video.play().catch(error => {
            console.log('Auto-play failed, user interaction required:', error);
            setVideoError(true);
          });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, videoUrl, onClose, toast, isYouTubeUrl, isDemoUrl, isLocalAsset]);

  // Don't render modal content if it's a demo URL
  if (isDemoUrl) {
    return null;
  }
  
  // For local assets and external URLs, show the video player
  if (isLocalAsset || videoUrl.startsWith('http')) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl p-0 bg-black" aria-describedby="video-description">
          <DialogTitle className="sr-only">{title} Demo Video</DialogTitle>
          <DialogDescription id="video-description" className="sr-only">
            Demo video for {title} model showing its capabilities and functionality
          </DialogDescription>
          
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 text-white hover:bg-white/20"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="relative bg-black min-h-[400px] flex items-center justify-center">
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full max-h-[70vh] object-contain"
                controls={useNativeControls}
                preload="auto"
                muted={false}
                playsInline
                crossOrigin="anonymous"
                onError={(e) => {
                  console.error('Video error:', e);
                  console.error('Video src:', videoUrl);
                  setVideoError(true);
                  toast({
                    title: "Video Error",
                    description: "Unable to load the video. Please try again later.",
                  });
                  onClose();
                }}
                onLoadStart={() => console.log('Video loading started')}
                onCanPlay={() => console.log('Video can play')}
                onLoadedData={() => console.log('Video data loaded')}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // For YouTube URLs, show a different modal content
  if (isYouTubeUrl) {
    // Extract YouTube video ID
    const getYouTubeVideoId = (url: string) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeVideoId(videoUrl);
    
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl p-6" aria-describedby="youtube-description">
          <DialogTitle className="text-xl font-bold mb-4">Watch Demo Video</DialogTitle>
          
          {videoId ? (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={`${title} Demo Video`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">Invalid YouTube URL</p>
              <Button 
                onClick={handleYouTubeClick}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Watch on YouTube
              </Button>
            </div>
          )}
          
          <div className="flex justify-end mt-4">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
};

export default VideoModal;
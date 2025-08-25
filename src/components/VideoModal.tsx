import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title }: VideoModalProps) => {
  const [useNativeControls, setUseNativeControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Debug logging
  console.log('VideoModal - videoUrl:', videoUrl);
  console.log('VideoModal - isOpen:', isOpen);

  // Enable native controls immediately for better compatibility
  useEffect(() => {
    if (isOpen) {
      setUseNativeControls(true);
      // Auto-play when modal opens (muted for browser policy compliance)
      const timer = setTimeout(() => {
        const video = videoRef.current;
        if (video) {
          video.play().catch(error => {
            console.log('Auto-play failed, user interaction required:', error);
          });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Direct link fallback
  const openVideoInNewTab = () => {
    const fullUrl = videoUrl.startsWith('http') ? videoUrl : `${window.location.origin}${videoUrl}`;
    window.open(fullUrl, '_blank');
  };

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

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-12 z-10 text-white hover:bg-white/20"
            onClick={openVideoInNewTab}
            title="Open video in new tab"
          >
            <ExternalLink className="h-4 w-4" />
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
              }}
              onLoadStart={() => console.log('Video loading started')}
              onCanPlay={() => console.log('Video can play')}
              onLoadedData={() => console.log('Video data loaded')}
            />

            {/* Simple loading overlay that disappears when video starts */}
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white pointer-events-none">
              <div className="bg-black/60 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm opacity-80 mb-4">Click play button to start video</p>
                <Button 
                  onClick={openVideoInNewTab}
                  className="bg-white text-black hover:bg-white/90 pointer-events-auto"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in New Tab
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
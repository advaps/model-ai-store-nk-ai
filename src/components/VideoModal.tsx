import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
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
};

export default VideoModal;
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
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

  // Check if video URL looks like a demo/sample URL (likely to fail)
  const isDemoUrl = videoUrl.includes('sample-videos.com') || 
                   videoUrl.includes('user-images.githubusercontent.com') ||
                   !videoUrl.startsWith('/') && !videoUrl.startsWith('http');

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
    
    if (isOpen) {
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
  }, [isOpen, videoUrl, onClose, toast]);

  // Don't render modal content if it's a demo URL
  if (isDemoUrl) {
    return null;
  }

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
                  title: "Coming Soon",
                  description: "Demo video functionality will be available soon",
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
};

export default VideoModal;
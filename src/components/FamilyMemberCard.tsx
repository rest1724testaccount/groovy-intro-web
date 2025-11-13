import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FamilyMemberCardProps {
  name: string;
  title: string;
  description: string[];
  imageSrc?: string;
  birthday?: string;
  subtitle?: string;
  musicUrl?: string;
}

const FamilyMemberCard = ({ 
  name, 
  title, 
  description, 
  imageSrc,
  birthday,
  subtitle,
  musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
}: FamilyMemberCardProps) => {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audio] = useState(() => new Audio(musicUrl));

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <Card 
        className="group relative overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="p-6 flex flex-col items-center text-center space-y-4">
          <Avatar className="w-24 h-24 border-4 border-accent/20 group-hover:border-accent transition-colors">
            <AvatarImage src={imageSrc} alt={name} />
            <AvatarFallback className="bg-muted text-2xl font-bold">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <div className="inline-flex items-center gap-2 bg-accent px-3 py-1 rounded-full">
              <span className="text-lg">★</span>
              <span className="font-medium text-xs text-accent-foreground">{title}</span>
            </div>
          </div>
        </div>
        
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent opacity-5 rounded-full group-hover:scale-150 group-hover:opacity-10 transition-all duration-500" />
      </Card>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl">{name}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <Avatar className="w-32 h-32 border-4 border-accent">
                <AvatarImage src={imageSrc} alt={name} />
                <AvatarFallback className="bg-muted text-4xl font-bold">
                  {name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-3">
                {subtitle && (
                  <p className="text-lg text-muted-foreground">{subtitle}</p>
                )}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="inline-flex items-center gap-2 bg-accent px-3 py-1 rounded-full">
                    <span className="text-lg">★</span>
                    <span className="font-medium text-sm text-accent-foreground">{title}</span>
                  </div>
                  {birthday && (
                    <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
                      <span className="text-lg">🎂</span>
                      <span className="font-medium text-sm">{birthday}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              {description.map((line, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">{line}</p>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t">
              <Button
                variant="outline"
                size="icon"
                onClick={togglePlay}
                className="h-12 w-12"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={toggleMute}
                className="h-12 w-12"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
              
              <span className="text-sm text-muted-foreground">
                {isPlaying ? 'Đang phát nhạc nền...' : 'Nhấn play để nghe nhạc nền'}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FamilyMemberCard;

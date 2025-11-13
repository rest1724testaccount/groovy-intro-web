import { Card } from '@/components/ui/card';

interface FamilyMemberCardProps {
  name: string;
  title: string;
  description: string[];
  imageSrc?: string;
  accentColor?: string;
  birthday?: string;
  subtitle?: string;
}

const FamilyMemberCard = ({ 
  name, 
  title, 
  description, 
  imageSrc,
  accentColor = "bg-accent",
  birthday,
  subtitle
}: FamilyMemberCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
      <div className="p-6 h-full flex flex-col">
        {imageSrc && (
          <div className="mb-6 overflow-hidden rounded-xl aspect-square bg-muted">
            <img 
              src={imageSrc} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}
        
        <div className="space-y-4 flex-1">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 leading-tight">
              {name}
            </h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>
            )}
            <div className="flex items-center gap-2 flex-wrap">
              <div className={`inline-flex items-center gap-2 ${accentColor} px-3 py-1 rounded-full text-foreground`}>
                <span className="text-lg">★</span>
                <span className="font-medium text-xs">{title}</span>
              </div>
              {birthday && (
                <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
                  <span className="text-lg">🎂</span>
                  <span className="font-medium text-xs">{birthday}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-1.5 text-muted-foreground">
            {description.map((line, index) => (
              <p key={index} className="text-sm leading-relaxed">{line}</p>
            ))}
          </div>
        </div>
      </div>
      
      <div className={`absolute -top-20 -right-20 w-40 h-40 ${accentColor} opacity-5 rounded-full group-hover:scale-150 group-hover:opacity-10 transition-all duration-500`} />
    </Card>
  );
};

export default FamilyMemberCard;

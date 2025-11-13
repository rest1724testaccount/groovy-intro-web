import { Card } from '@/components/ui/card';

interface FamilyMemberCardProps {
  name: string;
  title: string;
  description: string[];
  imageSrc?: string;
  accentColor?: string;
}

const FamilyMemberCard = ({ 
  name, 
  title, 
  description, 
  imageSrc,
  accentColor = "bg-accent"
}: FamilyMemberCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-2 hover:border-foreground transition-all duration-300 hover:shadow-2xl">
      <div className="p-8">
        {imageSrc && (
          <div className="mb-6 overflow-hidden rounded-lg aspect-square">
            <img 
              src={imageSrc} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {name}
            </h3>
            <div className={`inline-flex items-center gap-2 ${accentColor} px-3 py-1 rounded-full`}>
              <span className="text-2xl">✦</span>
              <span className="font-medium text-sm">{title}</span>
            </div>
          </div>
          
          <div className="space-y-1 text-muted-foreground">
            {description.map((line, index) => (
              <p key={index} className="text-base">{line}</p>
            ))}
          </div>
        </div>
      </div>
      
      <div className={`absolute top-0 right-0 w-32 h-32 ${accentColor} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
    </Card>
  );
};

export default FamilyMemberCard;

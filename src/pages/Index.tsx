import FamilyMemberCard from '@/components/FamilyMemberCard';
import MusicPlayer from '@/components/MusicPlayer';
import profileImage from '@/assets/profile-duc-phuc.png';

const Index = () => {
  const familyMembers = [
    {
      name: "ĐỨC PHÚC",
      title: "Con trai",
      description: [
        "Sở thích: C.Ronaldo",
        "My idol: C.Ronaldo",
        "Game yêu thích: Free Fire"
      ],
      imageSrc: profileImage,
    },
    {
      name: "MẸ",
      title: "Mẹ yêu quý",
      description: [
        "Người phụ nữ tuyệt vời nhất",
        "Luôn chăm sóc gia đình",
        "Nấu ăn rất ngon"
      ],
    },
    {
      name: "BA",
      title: "Ba tuyệt vời",
      description: [
        "Trụ cột của gia đình",
        "Luôn hỗ trợ con cái",
        "Người đàn ông mạnh mẽ"
      ],
    },
    {
      name: "ANH/CHỊ",
      title: "Anh/Chị",
      description: [
        "Người anh/chị tốt bụng",
        "Luôn giúp đỡ em",
        "Thông minh và tài năng"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
                  GIA ĐÌNH<br />
                  <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                    CHÚNG TÔI
                  </span>
                </h1>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="text-3xl text-accent">✦</span>
                <p className="text-lg">Gia đình hạnh phúc, yêu thương và đoàn kết</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={profileImage} 
                alt="Family"
                className="relative rounded-3xl shadow-2xl w-full aspect-square object-cover border-4 border-foreground/10"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </section>

      {/* Family Members Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Thành Viên Gia Đình</h2>
            <p className="text-lg text-muted-foreground">Những người thân yêu của chúng tôi</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {familyMembers.map((member, index) => (
              <FamilyMemberCard
                key={index}
                name={member.name}
                title={member.title}
                description={member.description}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground border-t">
        <p className="text-sm">© 2024 Gia đình Đức Phúc. Tất cả quyền được bảo lưu.</p>
      </footer>

      <MusicPlayer />
    </div>
  );
};

export default Index;

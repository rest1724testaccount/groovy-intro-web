import FamilyMemberCard from '@/components/FamilyMemberCard';
import MusicPlayer from '@/components/MusicPlayer';
import profileImage from '@/assets/profile-duc-phuc.png';

const Index = () => {
  const teamMembers = [
    {
      name: "ĐĂNG KHÔI",
      title: "Thành viên",
      birthday: "3/8/2008",
      description: [
        "Sở thích: Cầu lông, đi shopping",
        "Thích học bơi thêm vào cơ bản",
        "Thích ăn hàng cà Hàng"
      ],
    },
    {
      name: "ĐỨC PHÚC",
      title: "Thành viên",
      subtitle: "Nguyễn Võ Đức Phúc",
      description: [
        "Sở thích: C.Ronaldo",
        "My idol: C.Ronaldo",
        "Game yêu thích: Free Fire"
      ],
      imageSrc: profileImage,
    },
    {
      name: "TẤN ĐẠT",
      title: "Thành viên",
      subtitle: "Phan Tấn Đạt",
      description: [
        "Sở thích: Bóng đá, vẽ tranh ngộ",
        "Thux"
      ],
    },
    {
      name: "BẢO NGÃ",
      title: "Thành viên",
      birthday: "15/3/2008",
      description: [
        "Happy birthday!",
        "Sở thích: Làm bánh yêu"
      ],
    },
    {
      name: "GIA PHÚ",
      title: "Thành viên",
      description: [
        "Là người có một phẩm chất đặc biệt",
        "Luôn mong làm việc cùng nhóm",
        "Bè bạn là mọi thứ cùng làm...",
        "Thích giao lưu, đam mê ăn uống",
        "Chơi CF, VALORANT",
        "Nhưng Liên Quan Mobile gần đây thích nhất",
        "Nếu cần ăn uống thì liên lạc...",
        "Luôn sẵn sàng đến gần"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
                NHÓM<br />
                <span className="bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
                  CHÚNG TÔI
                </span>
              </h1>
              
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <span className="text-3xl text-accent">★</span>
                <p className="text-lg md:text-xl">5 thành viên - Một đội nhóm đoàn kết</p>
                <span className="text-3xl text-accent">★</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="px-4 py-2 bg-accent/10 rounded-full border border-accent/20 hover:bg-accent/20 transition-colors">
                  <span className="font-medium">{member.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Thành Viên Nhóm</h2>
            <p className="text-lg text-muted-foreground">Gặp gỡ các thành viên trong đội của chúng tôi</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <FamilyMemberCard
                key={index}
                name={member.name}
                title={member.title}
                description={member.description}
                imageSrc={member.imageSrc}
                birthday={member.birthday}
                subtitle={member.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground border-t">
        <p className="text-sm">© 2024 Nhóm của chúng tôi. Tất cả quyền được bảo lưu.</p>
      </footer>

      <MusicPlayer />
    </div>
  );
};

export default Index;

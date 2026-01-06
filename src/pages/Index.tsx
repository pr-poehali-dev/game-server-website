import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const scrollToDiscord = () => {
    document.getElementById('discord-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openForum = () => {
    window.location.href = '/forum';
  };

  const administration = [
    { name: 'TOURIST-WAGNERA', role: 'Глава сервера', username: 'FSB_tourist' },
    { name: 'Pancale', role: 'Старший администратор', username: 'Pancale' },
    { name: 'cj', role: 'Младший администратор', username: 'cj' }
  ];

  const openFactions = [
    { name: 'МВД', icon: 'Shield', color: 'from-blue-500 to-blue-600' },
    { name: 'ДПС МВД', icon: 'Car', color: 'from-cyan-500 to-cyan-600' },
    { name: 'СОБР МВД', icon: 'ShieldCheck', color: 'from-indigo-500 to-indigo-600' },
    { name: 'Росгвардия', icon: 'ShieldAlert', color: 'from-red-500 to-red-600' }
  ];

  const closedFactions = [
    { name: 'ФСБ', icon: 'Eye', color: 'from-slate-700 to-slate-900' },
    { name: 'ФСО', icon: 'Lock', color: 'from-slate-700 to-slate-900' }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-background" />
              </div>
              <span className="text-xl font-bold">GameServer</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                Главная
              </a>
              <a href="#factions" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                Фракции
              </a>
              <a href="#administration" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                Администрация
              </a>
              <button onClick={openForum} className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                Форум
              </button>
            </div>

            <Button onClick={openForum} className="bg-primary hover:bg-primary/90 text-background">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section id="home" className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Лучший игровой сервер
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Присоединяйся к сообществу и начни своё приключение
              </p>
              <Button size="lg" onClick={scrollToDiscord} className="bg-primary hover:bg-primary/90 text-background text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Низкий пинг</CardTitle>
                  <CardDescription>Серверы в России для минимальной задержки</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Защита от читеров</CardTitle>
                  <CardDescription>Мощный античит и активная администрация</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Trophy" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Регулярные ивенты</CardTitle>
                  <CardDescription>Турниры, конкурсы и щедрые призы</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="factions" className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-2">Фракции сервера</h2>
              <p className="text-muted-foreground">Выбери свою фракцию и начни карьеру</p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">Открытые фракции</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {openFactions.map((faction, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all overflow-hidden">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${faction.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                        <Icon name={faction.icon as any} size={32} className="text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-center">{faction.name}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-muted-foreground">Закрытые фракции</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {closedFactions.map((faction, index) => (
                  <Card key={index} className="bg-card/50 border-border opacity-75">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${faction.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                        <Icon name={faction.icon as any} size={32} className="text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-center">{faction.name}</h4>
                      <Badge className="w-full justify-center mt-3 bg-muted">Закрыто</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6 text-sm">
                * Некоторые фракции временно закрыты для набора
              </p>
            </div>
          </div>
        </section>

        <section id="administration" className="py-16 bg-card/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="text-4xl font-bold mb-2">Администрация</h2>
              <p className="text-muted-foreground">Команда, которая поддерживает порядок на сервере</p>
            </div>

            <div className="space-y-4">
              {administration.map((admin, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-gradient-to-br from-amber-500 to-orange-600' : 
                          index === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-600' :
                          'bg-gradient-to-br from-blue-500 to-cyan-600'
                        }`}>
                          <Icon name="User" size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{admin.name}</h3>
                          <p className="text-sm text-muted-foreground">{admin.username}</p>
                        </div>
                      </div>
                      <Badge className={
                        index === 0 ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0' :
                        index === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0' :
                        'bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0'
                      }>
                        {admin.role}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="discord-section" className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="bg-gradient-to-br from-[#5865F2]/20 to-[#5865F2]/5 border-[#5865F2]/30">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-[#5865F2] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="MessageCircle" size={40} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Присоединяйся к нашему Discord</h2>
                <p className="text-muted-foreground mb-8">
                  Общайся с игроками, получай новости и участвуй в ивентах
                </p>
                <Button 
                  size="lg" 
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white text-lg px-8"
                  onClick={() => window.open('https://discord.gg/RuBxnxyEV5', '_blank')}
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Вступить в Discord сервер
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-card/50 border-t border-border mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={24} className="text-background" />
                </div>
                <span className="text-xl font-bold">GameServer</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучший игровой сервер с уникальными возможностями
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#home" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#factions" className="hover:text-primary transition-colors">Фракции</a></li>
                <li><a href="#administration" className="hover:text-primary transition-colors">Администрация</a></li>
                <li><button onClick={openForum} className="hover:text-primary transition-colors">Форум</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <Button 
                variant="outline" 
                className="w-full justify-start hover:bg-primary hover:text-background hover:border-primary"
                onClick={() => window.open('https://discord.gg/RuBxnxyEV5', '_blank')}
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Discord сервер
              </Button>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            © 2024 GameServer. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

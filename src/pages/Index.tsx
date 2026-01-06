import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const stats = {
    online: 1247,
    maxPlayers: 2000,
    playTime: 156,
    kills: 892,
    deaths: 234,
    level: 47
  };

  const privileges = [
    {
      id: 1,
      name: 'VIP',
      price: 299,
      features: ['Уникальный префикс', 'Доступ к /kit vip', 'Приоритет входа', '2x опыта'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'PREMIUM',
      price: 599,
      features: ['Все из VIP', 'Креативный полёт', '/hat команда', '3x опыта', 'Доступ к /back'],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 3,
      name: 'ELITE',
      price: 999,
      features: ['Все из PREMIUM', 'Личный варп', 'Уникальные эффекты', '5x опыта', 'Приоритетная поддержка'],
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const forumTopics = [
    { id: 1, title: 'Предложения по обновлению PvP', author: 'DarkKnight', replies: 23, lastReply: '5 мин назад' },
    { id: 2, title: 'Проблема с вайпом на сервере', author: 'CraftMaster', replies: 45, lastReply: '12 мин назад' },
    { id: 3, title: 'Идея для нового ивента', author: 'SkyWalker', replies: 67, lastReply: '1 час назад' },
    { id: 4, title: 'Как получить донат бесплатно?', author: 'ProGamer', replies: 12, lastReply: '2 часа назад' }
  ];

  const purchases = [
    { id: 1, item: 'VIP Привилегия', date: '15.12.2024', amount: 299 },
    { id: 2, item: 'Кейс Легенда', date: '10.12.2024', amount: 150 },
    { id: 3, item: 'PREMIUM Привилегия', date: '01.12.2024', amount: 599 }
  ];

  const rules = [
    { title: 'Читы и моды', text: 'Использование читов, X-Ray и подобных модов строго запрещено. Бан навсегда.' },
    { title: 'Уважение к игрокам', text: 'Оскорбления, расизм и токсичное поведение недопустимы. Мут или бан.' },
    { title: 'Гриферство', text: 'Разрушение чужих построек без разрешения запрещено.' },
    { title: 'Спам в чате', text: 'Не флудите и не спамьте сообщениями. Мут на время.' },
    { title: 'Торговля и обман', text: 'Обман при торговле запрещён. Возможен бан аккаунта.' }
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
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('forum')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'forum' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Форум
              </button>
              <button 
                onClick={() => setActiveSection('rules')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'rules' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Правила
              </button>
              <button 
                onClick={() => setActiveSection('shop')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'shop' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Магазин
              </button>
              <button 
                onClick={() => setActiveSection('profile')}
                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === 'profile' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Профиль
              </button>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-background">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {activeSection === 'home' && (
          <>
            <section className="relative py-32 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                    Онлайн: {stats.online}/{stats.maxPlayers}
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                    Лучший игровой сервер
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Присоединяйся к тысячам игроков и начни своё приключение прямо сейчас
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-background text-lg px-8">
                      <Icon name="Play" size={20} className="mr-2" />
                      Начать играть
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8">
                      <Icon name="Users" size={20} className="mr-2" />
                      Discord
                    </Button>
                  </div>
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
          </>
        )}

        {activeSection === 'forum' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-2">Форум</h2>
                <p className="text-muted-foreground">Обсуждения, предложения и помощь сообщества</p>
              </div>

              <div className="flex justify-between items-center mb-6">
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="bg-card">
                    <TabsTrigger value="all">Все темы</TabsTrigger>
                    <TabsTrigger value="popular">Популярные</TabsTrigger>
                    <TabsTrigger value="new">Новые</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button className="ml-4 bg-primary hover:bg-primary/90 text-background">
                  <Icon name="Plus" size={18} className="mr-2" />
                  Создать тему
                </Button>
              </div>

              <div className="space-y-3">
                {forumTopics.map((topic) => (
                  <Card key={topic.id} className="bg-card border-border hover:border-primary/50 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                            {topic.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="User" size={14} />
                              {topic.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="MessageSquare" size={14} />
                              {topic.replies} ответов
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {topic.lastReply}
                            </span>
                          </div>
                        </div>
                        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'rules' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-2">Правила сервера</h2>
                <p className="text-muted-foreground">Ознакомьтесь с правилами перед началом игры</p>
              </div>

              <Card className="bg-card border-border mb-6">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                    <Icon name="AlertCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Важно!</h3>
                      <p className="text-muted-foreground">
                        Незнание правил не освобождает от ответственности. При нарушении правил администрация имеет право выдать предупреждение, мут или бан.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {rules.map((rule, index) => (
                      <div key={index}>
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-2">{rule.title}</h4>
                            <p className="text-muted-foreground">{rule.text}</p>
                          </div>
                        </div>
                        {index < rules.length - 1 && <Separator className="my-6" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeSection === 'shop' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold mb-2">Магазин привилегий</h2>
                <p className="text-muted-foreground">Поддержи сервер и получи уникальные возможности</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {privileges.map((privilege) => (
                  <Card key={privilege.id} className={`bg-card border-border relative overflow-hidden ${privilege.popular ? 'border-primary' : ''}`}>
                    {privilege.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-background">Популярное</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-br ${privilege.color} rounded-lg flex items-center justify-center mb-4`}>
                        <Icon name="Crown" size={32} className="text-white" />
                      </div>
                      <CardTitle className="text-2xl">{privilege.name}</CardTitle>
                      <CardDescription>
                        <span className="text-3xl font-bold text-foreground">{privilege.price}₽</span>
                        <span className="text-muted-foreground">/навсегда</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {privilege.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-background">
                        Купить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'profile' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-2">Личный кабинет</h2>
                <p className="text-muted-foreground">Ваша статистика и история покупок</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-card border-border lg:col-span-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-primary/20 text-primary text-2xl font-bold">
                          PG
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold mb-1">ProGamer123</h3>
                      <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                        PREMIUM
                      </Badge>
                      <div className="w-full space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Уровень:</span>
                          <span className="font-semibold">{stats.level}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Часов игры:</span>
                          <span className="font-semibold">{stats.playTime}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">K/D:</span>
                          <span className="font-semibold">{(stats.kills / stats.deaths).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle>Статистика игрока</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Swords" size={20} className="text-primary" />
                            <span className="text-sm text-muted-foreground">Убийств</span>
                          </div>
                          <p className="text-2xl font-bold">{stats.kills}</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Skull" size={20} className="text-destructive" />
                            <span className="text-sm text-muted-foreground">Смертей</span>
                          </div>
                          <p className="text-2xl font-bold">{stats.deaths}</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Clock" size={20} className="text-primary" />
                            <span className="text-sm text-muted-foreground">Часов</span>
                          </div>
                          <p className="text-2xl font-bold">{stats.playTime}</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="TrendingUp" size={20} className="text-primary" />
                            <span className="text-sm text-muted-foreground">Уровень</span>
                          </div>
                          <p className="text-2xl font-bold">{stats.level}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle>История покупок</CardTitle>
                      <CardDescription>Все ваши транзакции на сервере</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {purchases.map((purchase) => (
                          <div key={purchase.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                <Icon name="ShoppingBag" size={20} className="text-primary" />
                              </div>
                              <div>
                                <p className="font-semibold">{purchase.item}</p>
                                <p className="text-sm text-muted-foreground">{purchase.date}</p>
                              </div>
                            </div>
                            <span className="font-bold text-primary">{purchase.amount}₽</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-card/50 border-t border-border mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={24} className="text-background" />
                </div>
                <span className="text-xl font-bold">GameServer</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучший игровой сервер с уникальными возможностями и дружелюбным сообществом.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => setActiveSection('home')} className="hover:text-primary transition-colors">Главная</button></li>
                <li><button onClick={() => setActiveSection('forum')} className="hover:text-primary transition-colors">Форум</button></li>
                <li><button onClick={() => setActiveSection('rules')} className="hover:text-primary transition-colors">Правила</button></li>
                <li><button onClick={() => setActiveSection('shop')} className="hover:text-primary transition-colors">Магазин</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-background hover:border-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-background hover:border-primary">
                  <Icon name="Send" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-background hover:border-primary">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
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

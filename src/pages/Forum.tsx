import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

const Forum = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('posts');
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const headUser = {
    id: 1,
    username: 'TOURIST-WAGNERA',
    displayName: 'FSB_tourist',
    role: 'head',
    roleDisplay: 'Глава сервера',
    avatar: 'TW',
    canBan: true,
    canMute: true,
    canManageRoles: true,
    canManageStatus: true
  };

  const handleLogin = () => {
    setCurrentUser(headUser);
    setIsLoggedIn(true);
  };

  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: 'Добро пожаловать на форум!', 
      author: 'TOURIST-WAGNERA', 
      authorRole: 'Глава сервера',
      content: 'Здесь вы можете обсуждать игру, делиться новостями и оставлять жалобы.',
      replies: 15, 
      views: 234,
      category: 'news',
      date: '07.01.2026',
      locked: false
    },
    { 
      id: 2, 
      title: 'Правила форума', 
      author: 'Pancale', 
      authorRole: 'Старший администратор',
      content: 'Соблюдайте правила и уважайте других участников.',
      replies: 8, 
      views: 156,
      category: 'news',
      date: '06.01.2026',
      locked: false
    },
    { 
      id: 3, 
      title: 'Жалоба на игрока CheatMaster', 
      author: 'ProGamer',
      authorRole: 'Игрок',
      content: 'Заметил подозрительное поведение...',
      replies: 3, 
      views: 45,
      category: 'complaints',
      date: '07.01.2026',
      locked: false
    }
  ]);

  const [users, setUsers] = useState([
    { id: 1, username: 'TOURIST-WAGNERA', role: 'Глава сервера', status: 'active', isBanned: false, isMuted: false },
    { id: 2, username: 'Pancale', role: 'Старший администратор', status: 'active', isBanned: false, isMuted: false },
    { id: 3, username: 'cj', role: 'Младший администратор', status: 'active', isBanned: false, isMuted: false },
    { id: 4, username: 'ProGamer', role: 'Игрок', status: 'active', isBanned: false, isMuted: false },
    { id: 5, username: 'CheatMaster', role: 'Игрок', status: 'active', isBanned: false, isMuted: false }
  ]);

  const handleBanUser = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, isBanned: !user.isBanned } : user
    ));
  };

  const handleMuteUser = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, isMuted: !user.isMuted } : user
    ));
  };

  const handleChangeRole = (userId: number, newRole: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  const handleLockPost = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, locked: !post.locked } : post
    ));
  };

  const getRoleBadgeClass = (role: string) => {
    if (role === 'Глава сервера') return 'bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0';
    if (role === 'Старший администратор') return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0';
    if (role === 'Младший администратор') return 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white border-0';
    return 'bg-muted';
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Вход в форум</CardTitle>
            <CardDescription className="text-center">Войдите, чтобы участвовать в обсуждениях</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Логин</label>
                <Input placeholder="Введите логин" defaultValue="TOURIST-WAGNERA" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Пароль</label>
                <Input type="password" placeholder="Введите пароль" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-background" onClick={handleLogin}>
                Войти
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                или <button className="text-primary hover:underline">создайте аккаунт</button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button onClick={() => window.location.href = '/'} className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Icon name="ArrowLeft" size={20} />
                <span className="text-sm">На главную</span>
              </button>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center space-x-2">
                <Icon name="MessageSquare" size={24} className="text-primary" />
                <span className="text-xl font-bold">Форум</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {currentUser?.canBan && (
                <Button 
                  variant={showAdminPanel ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowAdminPanel(!showAdminPanel)}
                  className={showAdminPanel ? 'bg-primary text-background' : ''}
                >
                  <Icon name="Shield" size={16} className="mr-2" />
                  Админ-панель
                </Button>
              )}
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-to-br from-amber-500 to-orange-600 text-white text-xs">
                    {currentUser?.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{currentUser?.username}</span>
                  <Badge className={`${getRoleBadgeClass(currentUser?.roleDisplay)} text-xs py-0`}>
                    {currentUser?.roleDisplay}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {showAdminPanel ? (
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 border-amber-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" size={24} className="text-amber-500" />
                  Админ-панель
                </CardTitle>
                <CardDescription>Управление пользователями, постами и ролями</CardDescription>
              </CardHeader>
            </Card>

            <Tabs defaultValue="users" className="w-full">
              <TabsList className="bg-card">
                <TabsTrigger value="users">Пользователи</TabsTrigger>
                <TabsTrigger value="posts">Посты</TabsTrigger>
                <TabsTrigger value="stats">Статистика</TabsTrigger>
              </TabsList>

              <TabsContent value="users" className="space-y-4 mt-6">
                {users.map((user) => (
                  <Card key={user.id} className={`bg-card border-border ${user.isBanned ? 'opacity-60' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarFallback className="bg-primary/20 text-primary">
                              {user.username.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold">{user.username}</h3>
                              {user.isBanned && <Badge variant="destructive">Забанен</Badge>}
                              {user.isMuted && <Badge className="bg-orange-500">Мут</Badge>}
                            </div>
                            <Badge className={getRoleBadgeClass(user.role)}>{user.role}</Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {user.id !== currentUser?.id && (
                            <>
                              <Button 
                                size="sm" 
                                variant={user.isBanned ? "default" : "destructive"}
                                onClick={() => handleBanUser(user.id)}
                              >
                                <Icon name={user.isBanned ? "UserCheck" : "UserX"} size={16} className="mr-2" />
                                {user.isBanned ? 'Разбанить' : 'Бан'}
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleMuteUser(user.id)}
                              >
                                <Icon name={user.isMuted ? "Mic" : "MicOff"} size={16} className="mr-2" />
                                {user.isMuted ? 'Размутить' : 'Мут'}
                              </Button>
                              <select 
                                className="px-3 py-1 rounded-md border border-border bg-background text-sm"
                                value={user.role}
                                onChange={(e) => handleChangeRole(user.id, e.target.value)}
                              >
                                <option value="Игрок">Игрок</option>
                                <option value="Младший администратор">Младший админ</option>
                                <option value="Старший администратор">Старший админ</option>
                                <option value="Глава сервера">Глава</option>
                              </select>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="posts" className="space-y-4 mt-6">
                {posts.map((post) => (
                  <Card key={post.id} className={`bg-card border-border ${post.locked ? 'opacity-60' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-lg">{post.title}</h3>
                            {post.locked && <Icon name="Lock" size={16} className="text-muted-foreground" />}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{post.content}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>Автор: {post.author}</span>
                            <span>{post.replies} ответов</span>
                            <span>{post.views} просмотров</span>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleLockPost(post.id)}
                        >
                          <Icon name={post.locked ? "Unlock" : "Lock"} size={16} className="mr-2" />
                          {post.locked ? 'Открыть' : 'Закрыть'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="stats" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Icon name="Users" size={24} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Всего пользователей</p>
                          <p className="text-2xl font-bold">{users.length}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Icon name="MessageSquare" size={24} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Всего постов</p>
                          <p className="text-2xl font-bold">{posts.length}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center">
                          <Icon name="UserX" size={24} className="text-destructive" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Забанено</p>
                          <p className="text-2xl font-bold">{users.filter(u => u.isBanned).length}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="bg-card">
                    <TabsTrigger value="posts">Все посты</TabsTrigger>
                    <TabsTrigger value="news">Новости</TabsTrigger>
                    <TabsTrigger value="complaints">Жалобы</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button className="ml-4 bg-primary hover:bg-primary/90 text-background whitespace-nowrap">
                  <Icon name="Plus" size={18} className="mr-2" />
                  Создать пост
                </Button>
              </div>

              <div className="space-y-4">
                {posts
                  .filter(post => activeTab === 'posts' || post.category === activeTab)
                  .map((post) => (
                    <Card key={post.id} className="bg-card border-border hover:border-primary/50 transition-all cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-primary/20 text-primary">
                              {post.author.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-lg hover:text-primary transition-colors">
                                {post.title}
                              </h3>
                              {post.locked && <Icon name="Lock" size={16} className="text-muted-foreground" />}
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm text-muted-foreground">{post.author}</span>
                              <Badge className={getRoleBadgeClass(post.authorRole)}>
                                {post.authorRole}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{post.content}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Icon name="MessageSquare" size={14} />
                                {post.replies}
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="Eye" size={14} />
                                {post.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="Calendar" size={14} />
                                {post.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Статистика форума</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Всего постов:</span>
                    <span className="font-semibold">{posts.length}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Пользователей:</span>
                    <span className="font-semibold">{users.length}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Онлайн:</span>
                    <span className="font-semibold text-primary">12</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Популярные темы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <button className="text-sm hover:text-primary transition-colors text-left w-full">
                    Правила сервера
                  </button>
                  <Separator />
                  <button className="text-sm hover:text-primary transition-colors text-left w-full">
                    Как начать играть?
                  </button>
                  <Separator />
                  <button className="text-sm hover:text-primary transition-colors text-left w-full">
                    FAQ по фракциям
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Forum;

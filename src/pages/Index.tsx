import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      name: 'Силовые кабели',
      description: 'ВВГ, АВВГ, NYM для промышленности',
      specs: 'До 35 кВ, медь/алюминий',
      icon: 'Zap'
    },
    {
      name: 'Контрольные кабели',
      description: 'КВВГЭнг, КВВГ для систем управления',
      specs: 'Экранированные, огнестойкие',
      icon: 'Settings'
    },
    {
      name: 'Оптоволокно',
      description: 'ОКГТ, ОКП для связи',
      specs: 'До 144 волокон, G.652/G.657',
      icon: 'Wifi'
    },
    {
      name: 'Специальные кабели',
      description: 'Термостойкие, взрывозащищенные',
      specs: 'Под заказ, сертифицированы',
      icon: 'Shield'
    }
  ];

  const certificates = [
    { name: 'ISO 9001:2015', desc: 'Система менеджмента качества' },
    { name: 'ГОСТ 31565-2012', desc: 'Кабели силовые' },
    { name: 'ТР ТС 004/2011', desc: 'Низковольтное оборудование' },
    { name: 'Пожарный сертификат', desc: 'НГ(А)-LS, НГ-FRLS' }
  ];

  const projects = [
    {
      title: 'ТЦ "Мега"',
      type: 'Торговый комплекс',
      scope: '50 км кабеля',
      image: 'https://cdn.poehali.dev/projects/d3c3fd98-c635-41f4-aef3-55c304f5756d/files/023bd40b-e6c8-4d3d-83a8-b4d455a833ec.jpg'
    },
    {
      title: 'Завод "Северсталь"',
      type: 'Промышленное предприятие',
      scope: '120 км кабеля',
      image: 'https://cdn.poehali.dev/projects/d3c3fd98-c635-41f4-aef3-55c304f5756d/files/e60434b5-1942-479d-b089-0cc62d76d57b.jpg'
    },
    {
      title: 'ЖК "Новый горизонт"',
      type: 'Жилой комплекс',
      scope: '80 км кабеля',
      image: 'https://cdn.poehali.dev/projects/d3c3fd98-c635-41f4-aef3-55c304f5756d/files/bed47aa4-ec62-4701-8834-eca950776aa2.jpg'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Cable" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                КабельТех
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Продукция', 'Проекты', 'Сертификаты', 'О компании', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">Связаться</Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                <Icon name="Sparkles" size={16} className="mr-1" />
                Инновации в каждом метре
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Кабельные решения
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  нового поколения
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Производим высококачественные кабели и провода для промышленности с 2005 года.
                Сертифицированная продукция, быстрая доставка по всей России.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Каталог продукции
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('контакты')}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">18</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Качество</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img
                src="https://cdn.poehali.dev/projects/d3c3fd98-c635-41f4-aef3-55c304f5756d/files/e60434b5-1942-479d-b089-0cc62d76d57b.jpg"
                alt="Производство кабелей"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="продукция" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наша продукция</Badge>
            <h2 className="text-4xl font-bold mb-4">Широкий ассортимент кабелей</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Производим кабельную продукцию для любых задач — от бытовых до промышленных
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={product.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                    {product.specs}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="проекты" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши проекты</Badge>
            <h2 className="text-4xl font-bold mb-4">Реализованные объекты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Более 500 успешно завершенных проектов по всей России
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2 bg-white/20 backdrop-blur-sm">{project.type}</Badge>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Package" size={16} />
                    <span>{project.scope}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="сертификаты" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Качество</Badge>
            <h2 className="text-4xl font-bold mb-4">Сертификаты и документация</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Вся продукция сертифицирована и соответствует международным стандартам
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <CardDescription>{cert.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="text-primary">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Icon name="FileCheck" size={48} className="text-primary" />
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2">Полный пакет документов</h3>
                  <p className="text-muted-foreground mb-4">
                    Сертификаты соответствия, паспорта качества, протоколы испытаний
                  </p>
                  <Button>Запросить документацию</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-4xl font-bold mb-6">КабельТех — лидер кабельной индустрии</h2>
              <p className="text-muted-foreground text-lg mb-6">
                С 2005 года мы производим высококачественные кабели и провода для промышленности.
                Наша продукция используется на крупнейших объектах России.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Factory" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Собственное производство</h3>
                    <p className="text-muted-foreground">Современное оборудование из Европы</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Опытная команда</h3>
                    <p className="text-muted-foreground">Более 200 квалифицированных специалистов</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Доставка по России</h3>
                    <p className="text-muted-foreground">Собственная логистическая сеть</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/d3c3fd98-c635-41f4-aef3-55c304f5756d/files/bed47aa4-ec62-4701-8834-eca950776aa2.jpg"
                alt="Продукция"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground text-lg">
                Оставьте заявку, и наши специалисты свяжутся с вами в течение часа
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Отправить заявку</CardTitle>
                  <CardDescription>Мы ответим в течение часа</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="ivan@company.ru" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea placeholder="Опишите ваш запрос..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить
                  </Button>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Телефон</h3>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                        <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@kabeltech.ru</p>
                        <p className="text-muted-foreground">sales@kabeltech.ru</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Адрес</h3>
                        <p className="text-muted-foreground">Москва, ул. Промышленная, 15</p>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Cable" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">КабельТех</span>
              </div>
              <p className="text-background/70 text-sm">
                Производство высококачественных кабелей с 2005 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Силовые кабели</li>
                <li>Контрольные кабели</li>
                <li>Оптоволокно</li>
                <li>Специальные кабели</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>О нас</li>
                <li>Проекты</li>
                <li>Сертификаты</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@kabeltech.ru</li>
                <li>Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
            © 2005-2024 КабельТех. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

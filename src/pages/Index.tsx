import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Checkbox } from '@/components/ui/checkbox';

const products = [
  { id: 1, name: 'Трубы стальные', category: 'Металлопрокат', price: '45 000', unit: 'тонна', image: '/placeholder.svg', inStock: true },
  { id: 2, name: 'Арматура строительная', category: 'Металлопрокат', price: '52 000', unit: 'тонна', image: '/placeholder.svg', inStock: true },
  { id: 3, name: 'Листы оцинкованные', category: 'Металлопрокат', price: '68 000', unit: 'тонна', image: '/placeholder.svg', inStock: false },
  { id: 4, name: 'Уголки стальные', category: 'Металлопрокат', price: '48 000', unit: 'тонна', image: '/placeholder.svg', inStock: true },
  { id: 5, name: 'Швеллеры', category: 'Металлопрокат', price: '55 000', unit: 'тонна', image: '/placeholder.svg', inStock: true },
  { id: 6, name: 'Электроды сварочные', category: 'Инструмент', price: '850', unit: 'кг', image: '/placeholder.svg', inStock: true },
  { id: 7, name: 'Крепёж промышленный', category: 'Инструмент', price: '120', unit: 'комплект', image: '/placeholder.svg', inStock: true },
  { id: 8, name: 'Болты высокопрочные', category: 'Инструмент', price: '280', unit: 'комплект', image: '/placeholder.svg', inStock: true },
  { id: 9, name: 'Краска антикоррозийная', category: 'Химия', price: '2 400', unit: 'литр', image: '/placeholder.svg', inStock: true },
  { id: 10, name: 'Грунтовка по металлу', category: 'Химия', price: '1 800', unit: 'литр', image: '/placeholder.svg', inStock: false },
  { id: 11, name: 'Растворитель технический', category: 'Химия', price: '650', unit: 'литр', image: '/placeholder.svg', inStock: true },
  { id: 12, name: 'Цемент М500', category: 'Стройматериалы', price: '380', unit: 'мешок', image: '/placeholder.svg', inStock: true },
];

const categories = ['Все категории', 'Металлопрокат', 'Инструмент', 'Химия', 'Стройматериалы'];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все категории' || product.category === selectedCategory;
    const matchesStock = !showInStockOnly || product.inStock;
    return matchesSearch && matchesCategory && matchesStock;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-accent p-2 rounded">
                <Icon name="Package" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-wide">СОФ-МЕТ</h1>
                <p className="text-xs text-primary-foreground/70">Надёжные поставки для вашего бизнеса</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {['home', 'catalog', 'about', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm font-medium uppercase tracking-wider transition-all hover:text-accent ${
                    activeSection === section ? 'text-accent border-b-2 border-accent pb-1' : 'text-primary-foreground/90'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'about' && 'О нас'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button variant="outline" size="sm" className="bg-accent text-white border-accent hover:bg-accent/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <main>
        {activeSection === 'home' && (
          <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-white py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Снабжение промышленных объектов
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Комплексные поставки металлопроката, инструмента и стройматериалов. 
                  Работаем с крупнейшими производственными предприятиями России.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white px-8"
                    onClick={() => setActiveSection('catalog')}
                  >
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Перейти в каталог
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => setActiveSection('contacts')}
                  >
                    Получить КП
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <Icon name="Factory" size={300} />
            </div>
          </section>
        )}

        {activeSection === 'home' && (
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: 'Truck', title: 'Доставка по России', desc: 'Собственная логистика и партнёрская сеть' },
                  { icon: 'FileCheck', title: 'Полный пакет документов', desc: 'Сертификаты, паспорта качества, ТТН' },
                  { icon: 'Clock', title: 'Склад 24/7', desc: 'Круглосуточная отгрузка для срочных заказов' },
                ].map((item, i) => (
                  <Card key={i} className="p-6 hover:shadow-lg transition-shadow border-2">
                    <div className="bg-accent/10 w-14 h-14 rounded flex items-center justify-center mb-4">
                      <Icon name={item.icon as any} size={28} className="text-accent" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'catalog' && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-2">Каталог продукции</h2>
                <p className="text-muted-foreground">Более 10 000 позиций на складе</p>
              </div>

              <div className="grid lg:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 lg:col-span-1">
                  <h3 className="font-bold mb-4 text-lg">Фильтры</h3>
                  
                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">Категория</label>
                    <div className="space-y-2">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                            selectedCategory === cat 
                              ? 'bg-accent text-white font-medium' 
                              : 'hover:bg-muted'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox 
                      id="instock" 
                      checked={showInStockOnly}
                      onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
                    />
                    <label htmlFor="instock" className="text-sm cursor-pointer">
                      Только в наличии
                    </label>
                  </div>
                </Card>

                <div className="lg:col-span-3">
                  <div className="mb-6">
                    <div className="relative">
                      <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Поиск по названию товара..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="mb-4 text-sm text-muted-foreground">
                    Найдено: {filteredProducts.length} товаров
                  </div>

                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                      <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-muted relative">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          {!product.inStock && (
                            <Badge variant="destructive" className="absolute top-2 right-2">
                              Под заказ
                            </Badge>
                          )}
                          {product.inStock && (
                            <Badge className="absolute top-2 right-2 bg-green-600">
                              В наличии
                            </Badge>
                          )}
                        </div>
                        <div className="p-4">
                          <Badge variant="outline" className="mb-2 text-xs">
                            {product.category}
                          </Badge>
                          <h4 className="font-bold mb-2 text-lg">{product.name}</h4>
                          <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-2xl font-bold text-accent">{product.price} ₽</span>
                            <span className="text-sm text-muted-foreground">/ {product.unit}</span>
                          </div>
                          <Button className="w-full bg-accent hover:bg-accent/90" size="sm">
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            Запросить КП
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-4xl font-bold mb-8">О компании</h2>
              <div className="space-y-6 leading-relaxed">
                <p className="text-lg">
                  Компания <span className="font-bold text-accent">ООО "СОФ-МЕТ"</span> — поставщик строительных материалов на рынке г.Москвы и Московской области. 
                  Основным направлением работы компании является комплексное снабжение строительных, промышленных и гражданских объектов металлопрокатом, 
                  строительными материалами и оборудованием. Наша компания проводит снабжение как крупных, так малоэтажных строительств, а так же частных заказчиков.
                </p>
                <p className="text-lg">
                  Наши основные преимущества — высокий профессионализм наших сотрудников, а также уважение и внимание к потребностям наших клиентов.
                </p>

                <Card className="p-6 bg-accent/5 border-accent/20">
                  <h3 className="text-2xl font-bold mb-4 text-accent">К вашим услугам:</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>широкий выбор строительных материалов различных категорий</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>разумные цены</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>своевременная доставка</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>полный комплект необходимой документации</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>полная комплектация строительных объектов</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>персональное ведение заказа для каждого клиента</span>
                    </li>
                  </ul>
                </Card>

                <p className="text-lg font-medium">
                  Все товары в ООО "СОФ-МЕТ" сертифицированы и соответствуют ГОСТ и ТУ.
                </p>

                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-2xl font-bold mb-4">Мы работаем напрямую с производителями</h3>
                  <p className="mb-4">Поэтому у нас есть возможность:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>установить адекватные и гибкие цены на все материалы</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>реализовать материалы как оптом, так и в любом удобном для вас количестве</span>
                    </li>
                  </ul>
                </Card>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Комплектация строительных объектов включает в себя:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <Icon name="Package" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>широкий ассортимент всех видов металлопроката</span>
                    </div>
                    <div className="flex gap-3">
                      <Icon name="Package" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>кирпич, пено- и газосиликатные блоки</span>
                    </div>
                    <div className="flex gap-3">
                      <Icon name="Package" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>цемент, вяжущие и сухие смеси</span>
                    </div>
                    <div className="flex gap-3">
                      <Icon name="Package" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>прочие расходные материалы</span>
                    </div>
                  </div>
                </div>

                <Card className="p-6 bg-muted/30">
                  <h3 className="text-xl font-bold mb-4">Наши партнёры</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex gap-2">
                      <Icon name="Factory" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>ОАО "Лужский абразивный завод"</span>
                    </div>
                    <div className="flex gap-2">
                      <Icon name="Factory" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>ОАО "ММК-МЕТИЗ"</span>
                    </div>
                    <div className="flex gap-2">
                      <Icon name="Factory" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>ООО "БелЗАН МК"</span>
                    </div>
                    <div className="flex gap-2">
                      <Icon name="Factory" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>АО "Дружковский метизный завод"</span>
                    </div>
                    <div className="flex gap-2">
                      <Icon name="Factory" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>ОАО "Речицкий метизный завод"</span>
                    </div>
                    <div className="flex gap-2">
                      <Icon name="Factory" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>ООО "Технотрон-метиз"</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'delivery' && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-4xl font-bold mb-8">Доставка и оплата</h2>
              
              <div className="space-y-8">
                <Card className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="Truck" size={28} className="text-accent" />
                    Условия доставки
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Доставка по Москве и МО — от 1 дня</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Доставка по России — транспортными компаниями</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Самовывоз со склада 24/7</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Бесплатная доставка при заказе от 500 000 ₽</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Icon name="CreditCard" size={28} className="text-accent" />
                    Способы оплаты
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Безналичный расчёт для юридических лиц</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Оплата по факту поставки</span>
                    </li>
                    <li className="flex gap-3">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span>Отсрочка платежа для постоянных клиентов до 30 дней</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-4xl font-bold mb-8">Контакты</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-6">Свяжитесь с нами</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Icon name="Phone" size={24} className="text-accent flex-shrink-0" />
                      <div>
                        <div className="font-medium">Отдел продаж</div>
                        <a href="tel:+79645298387" className="text-lg font-bold text-accent">+7 964 529-83-87</a>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Icon name="Mail" size={24} className="text-accent flex-shrink-0" />
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:6404940@gmail.com" className="text-accent">6404940@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Icon name="MapPin" size={24} className="text-accent flex-shrink-0" />
                      <div>
                        <div className="font-medium">Офис и склад</div>
                        <p className="text-muted-foreground">Москва, ул. Кронштадтский бульвар,<br />дом 7а</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Icon name="Clock" size={24} className="text-accent flex-shrink-0" />
                      <div>
                        <div className="font-medium">Режим работы</div>
                        <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br />Склад: круглосуточно</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-6">Отправить запрос</h3>
                  <form className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input type="tel" placeholder="Телефон" />
                    <Input type="email" placeholder="Email" />
                    <textarea 
                      className="w-full min-h-[120px] px-3 py-2 border rounded-md resize-none"
                      placeholder="Комментарий к заказу"
                    />
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить запрос
                    </Button>
                  </form>
                </Card>
              </div>

              <Card className="p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">Схема проезда</h3>
                <div className="w-full h-[450px] bg-muted rounded-lg overflow-hidden">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aef8a0c7b5d3e2f1a4b8c9d0e6f7g8h9i&amp;source=constructor&amp;ll=37.491857,55.818842&amp;z=16" 
                    width="100%" 
                    height="450" 
                    frameBorder="0"
                    title="Карта офиса СОФ-МЕТ"
                    className="w-full h-full"
                  >
                  </iframe>
                </div>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent p-2 rounded">
                  <Icon name="Package" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">СОФ-МЕТ</h3>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Надёжный партнёр в снабжении промышленных предприятий с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Навигация</h4>
              <div className="space-y-2 text-sm">
                {['Главная', 'Каталог', 'О нас', 'Доставка', 'Контакты'].map(item => (
                  <button key={item} className="block text-primary-foreground/70 hover:text-accent transition-colors">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <p>+7 964 529-83-87</p>
                <p>6404940@gmail.com</p>
                <p>Москва, Кронштадтский бульвар, 7а</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
            © 2024 СОФ-МЕТ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
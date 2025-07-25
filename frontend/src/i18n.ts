import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        catalog: 'Каталог',
        services: 'Услуги',
        how: 'Как арендовать?',
        contacts: 'Контакты',
        gallery: 'Галерея',
        calculator: 'Калькулятор',
      },
      main: {
        title: 'Современный сервис аренды опалубки',
        subtitle: 'Стандарты качества, скорости и удобства для строителей на всём постсоветском пространстве',
        mission: 'Наша миссия — вносить вклад в развитие строительной отрасли СНГ, помогая строить безопасные и долговечные здания с использованием современных технологий.',
        whatsapp: 'Связаться в WhatsApp',
        about: 'О компании',
        aboutText: 'Мы сдаем в аренду мелкощитовую корейскую опалубку для любых видов бетонных работ (колонны, ригели, перекрытия). Работаем в Туркестанской области, планируем выход на рынок всего Казахстана.',
        benefits: 'Наши преимущества',
        benefit1: 'КОРЕЙСКИЕ заводские опалубки',
        benefit2: 'Быстрая БЕСПЛАТНАЯ доставка',
        benefit3: 'Сопровождение прорабом',
        benefit4: 'Гибкие тарифы на аренду, ЭКОНОМИЯ ВРЕМЕНИ И ДЕНЕГ',
        ctaTitle: 'Готовы начать проект?',
        ctaDesc: 'Свяжитесь с нами для получения консультации и расчета стоимости',
        heroStats1: '3 года работаем',
        heroStats2: 'Более 200 довольных клиентов',
        heroStats3: '50 успешно построенных проектов',
        statsProjects: '50+ Проектов',
        statsClients: '200+ Клиентов',
        statsSupport: '24/7 Поддержка',
        statsExperience: '3 года Опыта',
      },
      catalog: {
        price: 'Цена',
        perDay: 'в день',
        perMonth: 'при аренде на месяц',
        minDays: 'Минимальный срок аренды (дней)',
        rentBtn: 'Арендовать',
        heroDesc: 'Профессиональная опалубка для любых строительных задач',
        featureFast: 'Быстрая доставка',
        featureFlexible: 'Гибкие сроки аренды',
        featureSupport: 'Техническая поддержка',
        whyTitle: 'Почему выбирают нас?',
        whyDesc: 'Мы предлагаем лучшие условия аренды опалубки в Туркестане',
        whyFast: 'Быстрая доставка',
        whyFastDesc: 'Доставляем опалубку в течение 24 часов по Туркестану и близлежащим районам',
        whyFlexible: 'Гибкие сроки',
        whyFlexibleDesc: 'Арендуйте от 3 дней до нескольких месяцев. Оплата только за фактическое время',
        whySupport: 'Техподдержка',
        whySupportDesc: 'Наши специалисты помогут с монтажом и ответят на все вопросы',
      },
      calculator: {
        length: 'Длина (м)',
        width: 'Ширина (м)',
        height: 'Высота опалубки (м)',
        thickness: 'Толщина стены (м)',
        rentDays: 'Дней аренды',
        calculate: 'Посчитать',
        outer: 'Наружная опалубка',
        inner: 'Внутренняя опалубка',
        total: 'Общая',
        area: 'Площадь',
        price: 'Сумма',
        totalPrice: 'Итого',
        discountsTitle: 'Возможные скидки',
        discounts: [
          'Стандартная цена: 300 ₸ за м²',
          'Скидка: 300 ₸ за м² при аренде более 30 дней',
          'Индивидуальные условия для крупных заказов — уточняйте у менеджера',
        ],
        error: 'Пожалуйста, заполните все поля корректно.',
        heroDesc: 'Рассчитайте стоимость аренды опалубки для вашего проекта',
        heroPrice: '300₸',
        heroPriceDesc: 'за м²/день',
        heroDiscount: '-20%',
        heroDiscountDesc: 'при аренде от 30 дней',
        heroDelivery: '0₸',
        heroDeliveryDesc: 'доставка от 50 м²',
        formTitle: 'Калькулятор стоимости',
        resultTitle: 'Результат расчета',
        infoTitle: 'Как работает калькулятор?',
        infoDesc: 'Простой и точный расчет стоимости аренды опалубки',
        infoStep1: 'Введите размеры',
        infoStep1Desc: 'Укажите длину, ширину, высоту и толщину стен вашего объекта',
        infoStep2: 'Получите расчет',
        infoStep2Desc: 'Калькулятор покажет точную стоимость аренды опалубки',
        infoStep3: 'Свяжитесь с нами',
        infoStep3Desc: 'Для уточнения деталей и оформления заказа',
        ctaTitle: 'Нужна помощь с расчетом?',
        ctaDesc: 'Наши специалисты помогут рассчитать точную стоимость для вашего проекта',
        ctaWhatsapp: 'Консультация в WhatsApp',
        ctaContact: 'Связаться с нами',
      },
      // Удалены старые дублирующиеся секции calculator в ru и kz, оставлены только новые расширенные секции выше
      contacts: {
        phone: 'Телефон:',
        whatsapp: 'WhatsApp:',
        writeWhatsapp: 'Написать в WhatsApp',
        address: 'Адрес:',
        addressText: '132-я улица, Туркестан, 2 дом',
        location: 'Город/Село',
        formTitle: 'Форма заявки',
        name: 'Имя',
        type: 'Тип опалубки',
        area: 'Площадь (м²)',
        days: 'Срок аренды (дней)',
        comment: 'Комментарий',
        sendBtn: 'Отправить заявку',
        sending: 'Отправка...',
        success: 'Заявка отправлена! Мы свяжемся с вами.',
        sendError: 'Ошибка отправки. Попробуйте позже.',
        networkError: 'Ошибка сети. Попробуйте позже.',
        heroDesc: 'Свяжитесь с нами любым удобным способом',
        sectionTitle: 'Наши контакты',
        sectionDesc: 'Мы всегда на связи и готовы помочь с вашим проектом',
        phoneTitle: 'Телефон',
        phoneDesc: 'Звоните в любое время',
        whatsappTitle: 'WhatsApp',
        whatsappDesc: 'Быстрая связь и консультация',
        whatsappBtn: 'Написать в WhatsApp',
        emailTitle: 'Email',
        emailDesc: 'Для официальных запросов',
        addressTitle: 'Адрес',
        addressDesc: 'Наш офис в Туркестане',
        worktimeTitle: 'Режим работы',
        worktimeDesc: 'Мы работаем для вас',
        worktime: 'Пн-Пт: 8:00 - 18:00\nСб: 9:00 - 16:00\nВс: По договоренности',
        ctaTitle: 'Нужна консультация?',
        ctaDesc: 'Наши специалисты готовы ответить на все ваши вопросы',
        ctaWhatsapp: 'WhatsApp консультация',
        ctaCall: 'Позвонить сейчас',
      },
      how: {
        steps: [
          'Оставьте заявку на сайте или по WhatsApp',
          'Мы связываемся с вами для уточнения деталей',
          'Заключаем договор и согласовываем условия',
          'Доставляем опалубку на ваш объект',
          'Сопровождаем и консультируем на объекте',
          'Вы сдаёте опалубку после завершения работ',
          'Возвращаем залог (если всё в порядке)',
        ],
        note: 'Всё просто: оставьте заявку — и мы всё организуем под ключ!',
        short: 'Кратко:',
      },
      services: {
        deliveryTitle: 'Быстрая доставка',
        deliveryDesc: 'Оперативно доставим опалубку на ваш объект по Туркестанской области и ближайшим регионам. Бесплатно — при заказе от 50 м².',
        supervisionTitle: 'Сопровождение прорабом',
        supervisionDesc: 'Наш специалист поможет с приёмкой, сборкой и правильной эксплуатацией опалубки на объекте.',
        consultTitle: 'Консультация',
        consultDesc: 'Проконсультируем по выбору, расчету объёмов и оптимизации аренды для вашего проекта.',
      },
      gallery: {
        alt: 'Фото реализованных проектов',
        heroTitle: 'Галерея',
        heroDesc: 'Наши реализованные проекты по всей Казахстане',
        statsProjects: 'Проектов',
        statsCities: 'Городов',
        statsArea: 'м² площади',
        filterTitle: 'Фильтр по категориям',
        filterDesc: 'Выберите тип проекта для просмотра',
        categoryAll: 'Все проекты',
        categoryResidential: 'Жилые',
        categoryCommercial: 'Коммерческие',
        categoryIndustrial: 'Промышленные',
        location: 'Город',
        year: 'Год',
        area: 'Площадь',
        noProjects: 'Нет проектов в этой категории',
        achievementsTitle: 'Наши достижения',
        achievementsDesc: 'За годы работы мы реализовали множество успешных проектов',
        achievementsProjects: 'Реализованных проектов',
        achievementsCities: 'Городов Казахстана',
        achievementsArea: 'м² общей площади',
        achievementsClients: 'Довольных клиентов',
        joinTitle: 'Хотите стать частью нашей галереи?',
        joinDesc: 'Свяжитесь с нами для обсуждения вашего проекта',
        joinBtn1: 'Оставить заявку',
        joinBtn2: 'Связаться с нами',
      },
      notfound: {
        title: 'Страница не найдена',
        desc: 'Возможно, вы ошиблись адресом или страница была удалена.',
        homeBtn: 'На главную',
      },
      footer: {
        address: '132-я улица, Туркестан, 2 дом',
        links: 'Быстрые ссылки',
        copyright: '© QALYP',
        rights: 'Все права защищены.',
        companyDesc: 'Профессиональная аренда опалубки в Туркестане. Качественные материалы, быстрая доставка, техническая поддержка.',
        contactTitle: 'Связаться с нами',
        socialTitle: 'Следите за нами в социальных сетях:',
      },
      howToRent: {
        heroDesc: 'Простой процесс аренды опалубки в 4 шага',
        roadTitle: 'Путь к успешной аренде',
        roadDesc: 'Следуйте по дороге к качественной опалубке',
        stepsDesc: [
          'Оставьте заявку на сайте или позвоните нам для начала сотрудничества',
          'Наш специалист свяжется с вами для уточнения деталей и расчета стоимости',
          'Мы доставим опалубку на ваш объект в удобное время с полным комплектом',
          'Оплата производится после завершения работ. Никаких предоплат',
        ],
        formTitle: 'Оставить заявку',
        formDesc: 'Заполните форму ниже, и мы свяжемся с вами в течение 30 минут',
        email: 'Email',
        benefitsTitle: 'Преимущества работы с нами',
        benefitsDesc: 'Почему клиенты выбирают QALYP для аренды опалубки',
        benefitSimple: 'Простая заявка',
        benefitSimpleDesc: 'Оставьте заявку за 2 минуты. Наш специалист свяжется с вами в течение 30 минут',
        benefitFast: 'Быстрая доставка',
        benefitFastDesc: 'Доставляем опалубку в течение 24 часов по Туркестану и близлежащим районам',
        benefitFlexible: 'Гибкая оплата',
        benefitFlexibleDesc: 'Оплата только за фактическое время использования. Никаких скрытых платежей',
        benefitSupport: 'Техподдержка',
        benefitSupportDesc: 'Наши специалисты помогут с монтажом и ответят на все вопросы 24/7',
        ctaTitle: 'Готовы начать проект?',
        ctaDesc: 'Свяжитесь с нами прямо сейчас для получения консультации',
        productTypes: [
          'Опалубка для колонн',
          'Опалубка для перекрытий',
          'Опалубка для ригелей',
        ],
      },
    },
  },
  kz: {
    translation: {
      nav: {
        home: 'Басты бет',
        catalog: 'Каталог',
        services: 'Қызметтер',
        how: 'Қалай жалға алуға болады?',
        contacts: 'Байланыс',
        gallery: 'Галерея',
        calculator: 'Калькулятор',
      },
      main: {
        title: 'Қазіргі заманғы қалып жалға беру сервисі',
        subtitle: 'Құрылысшылар үшін сапа, жылдамдық және ыңғайлылық стандарттары',
        mission: 'Біздің миссиямыз — ТМД құрылыс саласының дамуына үлес қосу, заманауи технологияларды пайдалана отырып, қауіпсіз және берік ғимараттар салуға көмектесу.',
        whatsapp: 'WhatsApp арқылы байланысу',
        about: 'Компания туралы',
        aboutText: 'Біз кез келген бетон жұмыстарына арналған корейлік ұсақщитті қалыпты жалға береміз (бағаналар, арқалықтар, жабындар). Түркістан облысында жұмыс істейміз, Қазақстан нарығына шығуды жоспарлап отырмыз.',
        benefits: 'Біздің артықшылықтарымыз',
        benefit1: 'КОРЕЙ зауыттық қалыптары',
        benefit2: 'Жылдам ТЕГІН жеткізу',
        benefit3: 'Прорабтың сүйемелдеуі',
        benefit4: 'Икемді жалға алу тарифтері, УАҚЫТ ЖӘНЕ АҚША ҮНЕМДЕУ',
        ctaTitle: 'Жобаны бастауға дайынсыз ба?',
        ctaDesc: 'Кеңес алу және құнын есептеу үшін бізге хабарласыңыз',
        heroStats1: '3 жыл жұмыс істейміз',
        heroStats2: '200-ден астам қанағаттанған клиент',
        heroStats3: '50 сәтті аяқталған жоба',
        statsProjects: '50+ Жоба',
        statsClients: '200+ Клиент',
        statsSupport: '24/7 Қолдау',
        statsExperience: '3 жыл Тәжірибе',
      },
      catalog: {
        price: 'Бағасы',
        perDay: 'күніне',
        perMonth: 'айға жалға алғанда',
        minDays: 'Минималды жалға алу мерзімі (күндер)',
        rentBtn: 'Жалға алу',
        heroDesc: 'Кез келген құрылысқа арналған кәсіби қалып',
        featureFast: 'Жылдам жеткізу',
        featureFlexible: 'Икемді жалға алу мерзімдері',
        featureSupport: 'Техникалық қолдау',
        whyTitle: 'Неліктен бізді таңдайды?',
        whyDesc: 'Біз Түркістанда қалып жалға алудың ең жақсы шарттарын ұсынамыз',
        whyFast: 'Жылдам жеткізу',
        whyFastDesc: 'Қалыпты Түркістан мен жақын аймақтарға 24 сағат ішінде жеткіземіз',
        whyFlexible: 'Икемді мерзімдер',
        whyFlexibleDesc: '3 күннен бірнеше айға дейін жалға алыңыз. Тек нақты уақыт үшін төлеңіз',
        whySupport: 'Техқолдау',
        whySupportDesc: 'Біздің мамандар монтажға көмектеседі және барлық сұрақтарға жауап береді',
      },
      calculator: {
        length: 'Ұзындығы (м)',
        width: 'Ені (м)',
        height: 'Қалып биіктігі (м)',
        thickness: 'Қабырға қалыңдығы (м)',
        rentDays: 'Жалға алу күндері',
        calculate: 'Есептеу',
        outer: 'Сыртқы қалып',
        inner: 'Ішкі қалып',
        total: 'Жалпы',
        area: 'Ауданы',
        price: 'Сомасы',
        totalPrice: 'Барлығы',
        discountsTitle: 'Мүмкін жеңілдіктер',
        discounts: [
          'Стандартты баға: 300 ₸/м²',
          '30 күннен көп жалға алғанда: 300 ₸/м²',
          'Ірі тапсырыстарға жеке шарттар — менеджерден сұраңыз',
        ],
        error: 'Барлық өрістерді дұрыс толтырыңыз.',
        heroDesc: 'Жобаңыз үшін қалып жалға алудың құнын есептеңіз',
        heroPrice: '300₸',
        heroPriceDesc: 'м²/күнге',
        heroDiscount: '-20%',
        heroDiscountDesc: '30 күннен көп жалға алғанда',
        heroDelivery: '0₸',
        heroDeliveryDesc: '50 м²-ден жоғары жеткізу тегін',
        formTitle: 'Құн калькуляторы',
        resultTitle: 'Есептеу нәтижесі',
        infoTitle: 'Калькулятор қалай жұмыс істейді?',
        infoDesc: 'Қалып жалға алудың құнын оңай және дәл есептеңіз',
        infoStep1: 'Өлшемдерді енгізіңіз',
        infoStep1Desc: 'Нысаныңыздың ұзындығы, ені, биіктігі мен қабырға қалыңдығын көрсетіңіз',
        infoStep2: 'Есептеу нәтижесін алыңыз',
        infoStep2Desc: 'Калькулятор қалып жалға алудың нақты құнын көрсетеді',
        infoStep3: 'Бізбен байланысыңыз',
        infoStep3Desc: 'Толығырақ және тапсырыс үшін хабарласыңыз',
        ctaTitle: 'Есептеуге көмек керек пе?',
        ctaDesc: 'Біздің мамандар жобаңыз үшін нақты құнын есептеуге көмектеседі',
        ctaWhatsapp: 'WhatsApp-қа кеңес',
        ctaContact: 'Байланысу',
      },
      // Удалены старые дублирующиеся секции calculator в ru и kz, оставлены только новые расширенные секции выше
      contacts: {
        phone: 'Телефон:',
        whatsapp: 'WhatsApp:',
        writeWhatsapp: 'WhatsApp-қа жазу',
        address: 'Мекенжай:',
        addressText: '132-ші көше, Түркістан, 2 үй',
        location: 'Қала/Ауыл',
        formTitle: 'Өтінім формасы',
        name: 'Аты-жөні',
        type: 'Қалып түрі',
        area: 'Ауданы (м²)',
        days: 'Жалға алу мерзімі (күндер)',
        comment: 'Түсініктеме',
        sendBtn: 'Өтінім жіберу',
        sending: 'Жіберілуде...',
        success: 'Өтінім жіберілді! Біз сізбен хабарласамыз.',
        sendError: 'Жіберу қатесі. Кейінірек қайталап көріңіз.',
        networkError: 'Желі қатесі. Кейінірек қайталап көріңіз.',
        heroDesc: 'Кез келген ыңғайлы тәсілмен байланысыңыз',
        sectionTitle: 'Біздің байланыстар',
        sectionDesc: 'Біз әрқашан байланыстамыз және жобаңызға көмектесуге дайынбыз',
        phoneTitle: 'Телефон',
        phoneDesc: 'Кез келген уақытта қоңырау шалыңыз',
        whatsappTitle: 'WhatsApp',
        whatsappDesc: 'Жылдам байланыс және кеңес',
        whatsappBtn: 'WhatsApp-қа жазу',
        emailTitle: 'Email',
        emailDesc: 'Ресми сұраныстар үшін',
        addressTitle: 'Мекенжай',
        addressDesc: 'Біздің кеңсе Түркістанда',
        worktimeTitle: 'Жұмыс уақыты',
        worktimeDesc: 'Біз сіз үшін жұмыс істейміз',
        worktime: 'Дс-Жм: 8:00 - 18:00\nСб: 9:00 - 16:00\nЖс: Келісім бойынша',
        ctaTitle: 'Кеңес керек пе?',
        ctaDesc: 'Біздің мамандар барлық сұрақтарыңызға жауап беруге дайын',
        ctaWhatsapp: 'WhatsApp-қа кеңес',
        ctaCall: 'Қазір қоңырау шалу',
      },
      how: {
        steps: [
          'Сайтта немесе WhatsApp арқылы өтінім қалдырыңыз',
          'Біз сізбен хабарласып, егжей-тегжейін нақтылаймыз',
          'Шарт жасасып, талаптарды келісеміз',
          'Қалыпты нысаныңызға жеткіземіз',
          'Объектіде сүйемелдеу және кеңес береміз',
          'Жұмыс аяқталған соң қалыпты қайтарасыз',
          'Барлығы дұрыс болса, кепіл қайтарылады',
        ],
        note: 'Барлығы оңай: өтінім қалдырыңыз — біз бәрін ұйымдастырамыз!',
        short: 'Қысқаша:',
      },
      services: {
        deliveryTitle: 'Жылдам жеткізу',
        deliveryDesc: 'Қалыпты Түркістан облысы мен жақын аймақтарға жедел жеткіземіз. 50 м²-ден жоғары тапсырыстарға — тегін.',
        supervisionTitle: 'Прорабтың сүйемелдеуі',
        supervisionDesc: 'Біздің маман объектіде қабылдау, жинау және дұрыс пайдалану бойынша көмектеседі.',
        consultTitle: 'Кеңес беру',
        consultDesc: 'Таңдау, көлемді есептеу және жалға алуды оңтайландыру бойынша кеңес береміз.',
      },
      gallery: {
        alt: 'Іске асырылған жобалардың фотосы',
        heroTitle: 'Галерея',
        heroDesc: 'Қазақстан бойынша іске асырылған жобаларымыз',
        statsProjects: 'Жобалар',
        statsCities: 'Қалалар',
        statsArea: 'м² аумақ',
        filterTitle: 'Санаттар бойынша сүзгі',
        filterDesc: 'Көру үшін жоба түрін таңдаңыз',
        categoryAll: 'Барлық жобалар',
        categoryResidential: 'Тұрғын',
        categoryCommercial: 'Коммерциялық',
        categoryIndustrial: 'Өнеркәсіптік',
        location: 'Қала',
        year: 'Жыл',
        area: 'Аумағы',
        noProjects: 'Бұл санатта жобалар жоқ',
        achievementsTitle: 'Біздің жетістіктеріміз',
        achievementsDesc: 'Жылдар бойы біз көптеген сәтті жобаларды іске асырдық',
        achievementsProjects: 'Іске асырылған жобалар',
        achievementsCities: 'Қазақстан қалалары',
        achievementsArea: 'м² жалпы аумақ',
        achievementsClients: 'Қанағаттанған клиенттер',
        joinTitle: 'Галереямыздың бір бөлігі болғыңыз келе ме?',
        joinDesc: 'Жобаңызды талқылау үшін бізге хабарласыңыз',
        joinBtn1: 'Өтінім қалдыру',
        joinBtn2: 'Байланысу',
      },
      notfound: {
        title: 'Бет табылмады',
        desc: 'Мүмкін, сіз мекенжайды қате тердіңіз немесе бет жойылған.',
        homeBtn: 'Басты бетке',
      },
      footer: {
        address: '132-ші көше, Түркістан, 2 үй',
        links: 'Жылдам сілтемелер',
        copyright: '© ОПАЛУБКА',
        rights: 'Барлық құқықтар қорғалған.',
        companyDesc: 'Түркістанда кәсіби қалып жалға беру. Сапалы материалдар, жылдам жеткізу, техникалық қолдау.',
        contactTitle: 'Бізбен байланысыңыз',
        socialTitle: 'Бізді әлеуметтік желілерде бақылаңыз:',
      },
      howToRent: {
        heroDesc: 'Опалубканы жалға алу процесі – 4 қадамда',
        roadTitle: 'Сәтті жалға алу жолы',
        roadDesc: 'Сапалы қалыпқа апарар жолды таңдаңыз',
        stepsDesc: [
          'Сайтта өтінім қалдырыңыз немесе бізге хабарласыңыз',
          'Біздің маман сізбен байланысып, барлық мәліметтерді нақтылайды және құнын есептейді',
          'Қалыпты толық жинақпен ыңғайлы уақытта жеткіземіз',
          'Төлем жұмысты аяқтағаннан кейін жүргізіледі. Алдын ала төлемсіз',
        ],
        formTitle: 'Өтінім қалдыру',
        formDesc: 'Төмендегі форманы толтырыңыз, біз 30 минут ішінде хабарласамыз',
        email: 'Email',
        benefitsTitle: 'Бізбен жұмыс істеудің артықшылықтары',
        benefitsDesc: 'QALYP-ты қалып жалға алу үшін неге таңдайды',
        benefitSimple: 'Оңай өтінім',
        benefitSimpleDesc: '2 минутта өтінім қалдырыңыз. Біздің маман 30 минут ішінде хабарласады',
        benefitFast: 'Жылдам жеткізу',
        benefitFastDesc: 'Қалыпты Түркістан мен жақын аймақтарға 24 сағат ішінде жеткіземіз',
        benefitFlexible: 'Икемді төлем',
        benefitFlexibleDesc: 'Тек нақты пайдалану уақыты үшін төлем. Жасырын төлемдер жоқ',
        benefitSupport: 'Техқолдау',
        benefitSupportDesc: 'Мамандарымыз монтажға көмектеседі және барлық сұрақтарға 24/7 жауап береді',
        ctaTitle: 'Жобаны бастауға дайынсыз ба?',
        ctaDesc: 'Кеңес алу үшін қазір хабарласыңыз',
        productTypes: [
          'Бағанаға арналған қалып',
          'Жабынға арналған қалып',
          'Ригельге арналған қалып',
        ],
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    interpolation: { escapeValue: false },
    detection: { order: ['localStorage', 'navigator', 'htmlTag'], caches: ['localStorage'] },
  });

export default i18n; 
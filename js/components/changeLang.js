const translations = {
    ru: {
        title1: 'Шаблон целевой страницы для SaaS-компаний',
        description1: 'Это шаблон файла Figma, преобразованный в код с помощью Anima. Подробнее на AnimaApp.com',
        btn1: 'Давай начнем',
        sigin1: 'Зайти',
        login1: 'Логгин',
        title2: 'Настраиваемая карта',
        description2: 'Создайте свою собственную карту, точно соответствующую вашим доходам и расходам.',
        card1_name: 'Настраиваемая карта',
        card1_desc: 'Настройте карту под свои точные потребности в доходах и расходах.',
        card2_name: 'Без комиссии за платежи',
        card2_desc: 'Переводите платежи по всему миру абсолютно без комиссии.',
        card3_name: 'Все в одном месте',
        card3_desc: 'Правильное место для хранения кредитных и дебетовых карт, посадочных талонов и многого другого.',
        rewiew: '«Кошелек — отличный продукт! Вся моя самая важная информация хранится там: кредитные карты, проездные, посадочные талоны, билеты и многое другое. И мне не нужно ни о чем беспокоиться, потому что все в одном месте! Спасибо!»',
        author: 'Алекс Ривера',
        title3: 'Вопросы? Давай поговорим',
        description3: 'Свяжитесь с нами через круглосуточный онлайн-чат. Мы всегда рады помочь!',
        btn3: 'Давай начнем',
        link1: '©Кошелек 2022',
        link2: 'Приватная политика',
        link3: 'Политика куки файлов',
        link4: 'Условия эксплуатации',
        
    },

    en: {
        title1: 'SaaS Landing Page Template',
        description1: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
        btn1: 'Get started',
        card1_name: 'Customizable card',
        card1_desc: 'Custom your own card for your exact incomes and expenses needs.',
        card2_name: 'No payment fee',
        card2_desc: 'Transfer your payment all over the world with no payment fee.',
        card3_name: 'All in one place',
        card3_desc: 'The right place to keep your credit and debit cards, boarding passes & more.',
        rewiew: '“Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don t need to worry because it s all in one place! thanks!”',
        author: 'Alex Rivera',
        title3: 'Questions? Let’s talk ',
        description3: 'Contact us through our 24/7 live chat.We re always happy to help!',
        btn1: 'Get started',
        link1: '©Wallet 2022',
        link2: 'Privacy policy',
        link3: 'Cookies policy',
        link4: 'Terms of use',
    }
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang-key]');
  const locale = translations[lang] ? lang : 'ru';

  elements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (translations[locale] && translations[locale][key]) {
      element.textContent = translations[locale][key];
    }
  });

  localStorage.setItem('selectedLang', locale);
}

function updateActiveLangButtons(lang) {
  const langButtons = document.querySelectorAll('[data-btn-lang]');
  langButtons.forEach(button => {
    button.classList.toggle('active', button.getAttribute('data-btn-lang') === lang);
  });
}

export function initLanguageSwitcher() {
  const savedLang = localStorage.getItem('selectedLang') || 'ru';
  const langButtons = document.querySelectorAll('[data-btn-lang]');

  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-btn-lang');
      changeLanguage(lang);
      updateActiveLangButtons(lang);
    });
  });

  changeLanguage(savedLang);
  updateActiveLangButtons(savedLang);
}

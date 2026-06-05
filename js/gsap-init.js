window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  // register ScrollTrigger if available
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  
  const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power2.out' }, delay: 0.12 });

  // Header
  const header = document.querySelector('header');
  if (header) tl.from(header, { y: -22, opacity: 0 });

  // Main
  const blocks = document.querySelectorAll('main > section');
  if (blocks.length) tl.from(blocks, { y: 28, opacity: 0, stagger: 0.22 }, '-=0.18');
  
  // apply scroll-triggered reveals for sections (skip first intro)
  const sections = document.querySelectorAll('main > section');
  sections.forEach((sec, i) => {
    if (i === 0) return; // keep first section load-animated

    // find meaningful children to stagger (fall back to section itself)
    const children = sec.querySelectorAll('h1,h2,h3,p,div,img,button,ul,nav');
    const target = children.length ? children : sec;

    gsap.from(target, {
      y: 28,
      opacity: 0,
      duration: 0.9,
      stagger: 0.18,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sec,
        start: 'top 78%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  // footer with a small follow-up delay (play on scroll)
  const footer = document.querySelector('footer');
  if (footer) {
    gsap.from(footer, {
      y: 18,
      opacity: 0,
      duration: 0.9,
      scrollTrigger: { trigger: footer, start: 'top 90%', toggleActions: 'play none none reverse' },
    });
  }
});

// ===== TADY UPRAVUJ OBSAH WEBU (otevři v poznámkovém bloku / editoru) =====
window.APP_CONFIG = {
  // Kdy se hra odemkne (český čas). Formát: RRRR-MM-DDTHH:MM:SS+01:00 (v létě +02:00)
  targetDate: '2026-11-19T16:00:00+01:00',

  // Text dopisu. Nový řádek = \n, odstavec = dva \n\n
  letterText: "My dearest friend,\n\nHappy 18th Birthday! I can't believe we've made it this far. You mean the world to me.\n\nLove always.",

  // Zastávky v pořadí: název, nápověda a kód, který má oslavenkyně zadat
  stops: [
    { title: 'Brno hlavní nádraží', hint: 'Napiš příjmení ze zlaté desky, které vyznačují nějaké zvíře, zadej je s mezerami mezi nima', code: 'Blecha Roháček Slavík Vlk' },
    { title: 'Kašna Parnas', hint: 'Napodob jakoukoli sochu na kašně a vyfoť se tak. Heslo pro vložení je řešení této hádanky: Sedí panna na hrádkách v devatero kabátkách a těm kdo ji svlečou, slzy z očí tečou', code: 'cibule' },
    { title: 'Pomník míru', hint: 'Vyfoť fotku jak objímáš strom. Heslo: kolik ok řetězu je okolo pomníku', code: '324' },
    { title: 'Vodopády na Špilberku', hint: 'Jaký rok se vystavěly tyto vodopády', code: '2008' },
    { title: 'Červený kostel', hint: 'Tady se seznam s nějakým kolemjdoucím (zjisti jeho jméno a zeptej se na ig) a vyfoť si s ním fotku. Heslo: Jak se jmenuje postava z ATLA, která byla pořád šikanovaná, code: 'Cabbage Merchant' },
    { title: 'Moravské náměstí', hint: 'Neboj, tady už tě čeká jenom to hezké, ale stále musíš vložit nějaké heslo. Kdy jsme byly na prvním pikniku s holkama', code: '9.6.2024' }
  ]
};

type Group = { title: string; links: { label: string; href: string }[] };

const GROUPS: Group[] = [
  {
    title: 'shop',
    links: [
      { label: 'shirts',    href: '#shirts'  },
      { label: 'tees',      href: '#tees'    },
      { label: 'gift card', href: '#gift'    },
      { label: 'repair',    href: '#repair'  },
    ],
  },
  {
    title: 'house',
    links: [
      { label: 'the story', href: '#story'   },
      { label: 'the cloth', href: '#cloth'   },
      { label: 'journal',   href: '#journal' },
      { label: 'contact',   href: '#contact' },
    ],
  },
  {
    title: 'service',
    links: [
      { label: 'shipping',  href: '#shipping' },
      { label: 'returns',   href: '#returns'  },
      { label: 'care',      href: '#care'     },
      { label: 'privacy',   href: '#privacy'  },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="footer">
      <div className="foot-grid">
        <div className="col brand">
          <span className="word">mtsya</span>
          <p>the wardrobe that endures the deluge.</p>
        </div>
        {GROUPS.map((group) => (
          <div key={group.title} className="col">
            <h5>{group.title}</h5>
            {group.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="foot-bottom">
        <span>© 2026 mtsya · made in india</span>
        <span className="deva">मत्स्य · the first form, the keeper, the guide</span>
        <span>instagram · letters</span>
      </div>
    </footer>
  );
}

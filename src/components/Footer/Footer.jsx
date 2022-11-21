import assets from "assets";
import classNames from "classnames/bind";
import Grid from "components/Grid/Grid";
import styles from "./Footer.module.scss";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

const cx = classNames.bind(styles);

const shortcutLinks = [
  {
    heading: "Yu-Gi-Oh!",
    children: [
      {
        heading: "Yu-Gi-Oh! Portal",
        link: "https://ygoprodeck.com/",
      },
      {
        heading: "Card Database",
        link: "https://ygoprodeck.com/card-database/",
      },
      {
        heading: "Deck Builder",
        link: "https://ygoprodeck.com/deckbuilder/",
      },
      {
        heading: "Top Decks",
        link: "https://ygoprodeck.com/deck-search/?&sort=Deck%20Views&offset=0",
      },
    ],
  },
  {
    heading: "Cardfight Vanguard",
    children: [
      {
        heading: "Cardfight Portal",
        link: "https://vanguardcard.io/",
      },
      {
        heading: "Card Database",
        link: "https://vanguardcard.io/card-database/",
      },
      {
        heading: "Deck Builder",
        link: "https://vanguardcard.io/deckbuilder/",
      },
      {
        heading: "Top Decks",
        link: "https://vanguardcard.io/deck-search/?&sort=Deck%20Views&offset=0",
      },
    ],
  },
  {
    heading: "Digimon",
    children: [
      {
        heading: "Digimon Portal",
        link: "https://digimoncard.io/",
      },
      {
        heading: "Card Database",
        link: "https://digimoncard.io/card-database/",
      },
      {
        heading: "Deck Builder",
        link: "https://digimoncard.io/deckbuilder/",
      },
      {
        heading: "Top Decks",
        link: "https://digimoncard.io/deck-search/?&sort=Deck%20Views&offset=0",
      },
    ],
  },
  {
    heading: "Hearthstone",
    children: [
      {
        heading: "Hearthstone Portal",
        link: "https://hearthcard.io/",
      },
      {
        heading: "Card Database",
        link: "https://hearthcard.io/card-database/",
      },
      {
        heading: "Deck Builder",
        link: "https://hearthcard.io/deckbuilder/",
      },
      {
        heading: "Top Decks",
        link: "https://hearthcard.io/deck-search/?&sort=Deck%20Views&offset=0",
      },
    ],
  },
  {
    heading: "Marvel Snap",
    children: [
      {
        heading: "Marvel Snap Portal",
        link: "https://marvelsnap.io/",
      },
      {
        heading: "Card Database",
        link: "https://marvelsnap.io/card-database/",
      },
      {
        heading: "Deck Builder",
        link: "https://marvelsnap.io/deckbuilder/",
      },
      {
        heading: "Top Decks",
        link: "https://marvelsnap.io/deck-search/?&sort=Deck%20Views&offset=0",
      },
    ],
  },
  {
    heading: "Pokémon",
    children: [
      {
        heading: "Pokémon Portal",
        link: "https://pokemoncard.io/",
      },
      {
        heading: "Card Database",
        link: "https://pokemoncard.io/card-database/",
      },
      {
        heading: "Deck Builder",
        link: "https://pokemoncard.io/deckbuilder/",
      },
      {
        heading: "Top Decks",
        link: "https://pokemoncard.io/deck-search/?&sort=Deck%20Views&offset=0",
      },
    ],
  },
  {
    heading: "Rush Duel",
    children: [
      {
        heading: "Rush Duel Portal",
        link: "https://rushcard.io/",
      },
      {
        heading: "Card Database",
        link: "https://rushcard.io/card-database/",
      },
      {
        heading: "Deck Builder",
        link: "https://rushcard.io/deckbuilder/",
      },
      {
        heading: "Top Decks",
        link: "https://rushcard.io/deck-search/?&sort=Deck%20Views&offset=0",
      },
    ],
  },
  {
    heading: "Shadowverse Evolve",
    children: [
      {
        heading: "Shadowverse Evolve Portal",
        link: "https://shadowcard.io/",
      },
      {
        heading: "Card Database",
        link: "https://shadowcard.io/card-database/",
      },
      {
        heading: "Deck Builder",
        link: "https://shadowcard.io/deckbuilder/",
      },
      {
        heading: "Top Decks",
        link: "https://shadowcard.io/deck-search/?&sort=Deck%20Views&offset=0",
      },
    ],
  },
];

function Footer(props) {
  return (
    <div className={cx("footer")}>
      <div className={cx("container", "footer__about")}>
        <div className={cx("footer__about__content")}>
          <div className={cx("footer__logo")}>
            <img src={assets.logo} alt="" />
            <img
              src="https://ygoprodeck.com/cdn-cgi/image/width=223/https://images.ygoprodeck.com/assets/images/tcgplayer_logo.png"
              alt=""
            />
            <img
              src="https://ygoprodeck.com/cdn-cgi/image/width=223/https://images.ygoprodeck.com/assets/images/cmlogo.png"
              alt=""
            />
          </div>
          <div className={cx("footer__community")}>
            <div className={cx("footer__community__heading")}>
              Your Yu-Gi-Oh! TCG Community
            </div>
            <a href="#" className={cx("footer__community__link")}>
              <FaTwitter size={35} />
            </a>
            <a href="#" className={cx("footer__community__link")}>
              <FaDiscord size={35} />
            </a>
            <a href="#" className={cx("footer__community__link")}>
              <FaGithub size={35} />
            </a>
          </div>
        </div>
        <Grid col={4} gap={2} className={cx("footer__shortcut-links")}>
          {shortcutLinks.map((link, index) => (
            <div className={cx("footer__link__list")} key={index}>
              <h3 className={cx("footer__link__heading")}>{link.heading}</h3>
              {link.children.map((child, index) => (
                <div key={index} className={cx("footer__link__item")}>
                  <a href={child.link}>{child.heading}</a>
                </div>
              ))}
            </div>
          ))}
        </Grid>
      </div>
      <div className={cx("footer__credit", "container")}>
        <p>
          The literal and graphical information presented on this site about
          Yu-Gi-Oh!, including card images, the attribute, level/rank and type
          symbols, and card text, is copyright 4K Media Inc, a subsidiary of
          Konami
        </p>
        <p>
          Digital Entertainment, Inc. This website is not produced by, endorsed
          by, supported by, or affiliated with 4k Media or Konami Digital
          Entertainment.
        </p>
        <p>All other content © 2016–2022 YGOPRODeck.</p>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
